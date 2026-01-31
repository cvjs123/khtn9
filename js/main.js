// js/main.js - Core application logic (local only - full version, all fixes applied)

let data = JSON.parse(localStorage.getItem('khtnData')) || {
    users: [],
    loggedInUser: null,
    progress: {
        ly: { percent: 0, score: 0, done: 0 },
        hoa: { percent: 0, score: 0, done: 0 },
        sinh: { percent: 0, score: 0, done: 0 },
        total: { percent: 0, bestScore: 0 }
    },
    leaderboard: []
};

// Normalize old data
if (!Array.isArray(data.users)) data.users = [];
data.leaderboard = data.leaderboard || [];

// Ensure current user progress
if (data.loggedInUser) {
    const user = data.users.find(u => u.username === data.loggedInUser);
    if (user && user.progress) data.progress = user.progress;
}

function persistData() {
    localStorage.setItem('khtnData', JSON.stringify(data));
}

// Hash password (SHA-256 or fallback)
async function hashPassword(password) {
    try {
        if (crypto.subtle) {
            const enc = new TextEncoder();
            const buf = enc.encode(password);
            const hash = await crypto.subtle.digest('SHA-256', buf);
            return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
        }
    } catch (e) {}
    return btoa(unescape(encodeURIComponent(password)));
}

// Render user area
function renderUserArea() {
    const userArea = document.getElementById('userArea');
    if (!userArea) return;
    userArea.innerHTML = data.loggedInUser
        ? `<span class="user-name">${data.loggedInUser}</span>
           <button class="btn btn-sm btn-outline-dark ms-2" onclick="logoutUser()">Đăng xuất</button>`
        : `<button class="btn btn-sm btn-light" onclick="openAuthModal('login')">Đăng nhập</button>
           <button class="btn btn-sm btn-primary ms-2" onclick="openAuthModal('register')">Đăng ký</button>`;
    setTimeout(() => updateProgressSidebar(), 500);
}

function logoutUser() {
    data.loggedInUser = null;
    data.progress = { ly: { percent: 0, score: 0, done: 0 }, hoa: { percent: 0, score: 0, done: 0 }, sinh: { percent: 0, score: 0, done: 0 }, total: { percent: 0, bestScore: 0 } };
    persistData();
    renderUserArea();
    updateProgressSidebar();
    location.reload();
}

// Subject options modal
let currentModalSubject = '';

function showSubjectOptions(subject) {
    console.log('showSubjectOptions called with subject:', subject);
    currentModalSubject = subject;
    const modal = document.getElementById('subjectModal');
    if (!modal) {
        console.error('Modal subjectModal not found');
        return;
    }
    document.getElementById('subjectModalTitle').textContent = `Chọn cấu hình ôn tập ${subject === 'ly' ? 'Vật Lý' : subject === 'hoa' ? 'Hóa Học' : 'Sinh Học'}`;
    
    // Populate single topic dropdown
    const topicSelect = document.getElementById('subjectTopicSelect');
    if (topicSelect) {
        topicSelect.innerHTML = '<option value="all">Tất cả</option>';
        
        const topics = window.topics_by_subject?.[subject] || [];
        console.log('Topics for subject', subject, ':', topics);
        topics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic;
            topicSelect.appendChild(option);
        });
    }
    
    // Populate multi topic checkboxes
    populateSubjectTopicCheckboxes(subject);
    
    // Reset to single topic mode
    const multiTopicMode = document.getElementById('multiTopicMode');
    if (multiTopicMode) multiTopicMode.checked = false;
    toggleTopicSelectionMode();
    
    modal.style.display = 'flex';
}

function populateSubjectTopicCheckboxes(subject) {
    const container = document.getElementById('subjectTopicCheckboxes');
    if (!container) {
        console.error('Container subjectTopicCheckboxes not found');
        return;
    }
    
    container.innerHTML = '';
    const topics = window.topics_by_subject?.[subject] || [];
    console.log('Populating checkboxes for subject:', subject, 'topics:', topics);
    
    if (topics.length === 0) {
        container.innerHTML = '<p class="text-muted">Không có chủ đề nào cho môn này.</p>';
        return;
    }
    
    let html = '';
    topics.forEach((topic, index) => {
        const safeId = `subject_${subject}_${index}`;
        const escapedTopic = topic.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        html += `
        <div class="form-check mb-2">
            <input class="form-check-input" type="checkbox" value="${escapedTopic}" id="${safeId}">
            <label class="form-check-label" for="${safeId}">
                ${escapedTopic}
            </label>
        </div>`;
    });
    
    container.innerHTML = html;
    console.log('Checkboxes HTML set:', html);
}

function toggleTopicSelectionMode() {
    const multiTopicMode = document.getElementById('multiTopicMode');
    const singleTopicSection = document.getElementById('singleTopicSection');
    const multiTopicSection = document.getElementById('multiTopicSection');
    
    if (multiTopicMode.checked) {
        singleTopicSection.style.display = 'none';
        multiTopicSection.style.display = 'block';
    } else {
        singleTopicSection.style.display = 'block';
        multiTopicSection.style.display = 'none';
    }
}

function closeSubjectModal() {
    const modal = document.getElementById('subjectModal');
    if (modal) modal.style.display = 'none';
}

// Export subject quiz to Word document
function exportSubjectToWord() {
    const multiTopicMode = document.getElementById('multiTopicMode');
    const countInput = document.getElementById('subjectCountInput');
    
    const selectedTopics = getSelectedSubjectTopics();
    const questionCount = parseInt(countInput.value) || 10;
    
    // Generate questions based on selection
    const quizData = generateSubjectQuizData(currentModalSubject, selectedTopics, questionCount);
    
    if (!quizData || quizData.questions.length === 0) {
        alert('Không có câu hỏi nào được tạo. Vui lòng kiểm tra lại chủ đề đã chọn.');
        return;
    }
    
    // Create Word document content
    let wordContent = createSubjectWordDocumentContent(quizData, currentModalSubject, selectedTopics);
    
    // Create blob and download
    const blob = new Blob([wordContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    const subjectName = currentModalSubject === 'ly' ? 'Vat_Ly' : currentModalSubject === 'hoa' ? 'Hoa_Hoc' : 'Sinh_Hoc';
    a.download = `De_Thi_${subjectName}_${new Date().toISOString().split('T')[0]}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show success message
    alert('File Word đã được tải xuống thành công!');
}

function getSelectedSubjectTopics() {
    const multiTopicMode = document.getElementById('multiTopicMode');
    
    if (multiTopicMode.checked) {
        // Get selected checkboxes
        const checkboxes = document.querySelectorAll('#subjectTopicCheckboxes input[type="checkbox"]:checked');
        const selectedTopics = Array.from(checkboxes).map(cb => cb.value);
        return selectedTopics.length > 0 ? selectedTopics : null; // null means all topics
    } else {
        // Get selected dropdown value
        const topicSelect = document.getElementById('subjectTopicSelect');
        const selectedTopic = topicSelect.value;
        return selectedTopic === 'all' ? null : [selectedTopic];
    }
}

function generateSubjectQuizData(subject, selectedTopics, count) {
    // Resolve base question array for the subject
    const baseName = `questions_${subject}`;
    let questions = window[baseName] || [];

    // If topics are specified, filter questions from those topics
    if (selectedTopics && selectedTopics.length > 0) {
        const byTopic = window[`${baseName}_by_topic`];
        let filteredQuestions = [];
        
        if (byTopic) {
            selectedTopics.forEach(topic => {
                const topicQuestions = byTopic[topic];
                if (Array.isArray(topicQuestions)) {
                    filteredQuestions = filteredQuestions.concat(topicQuestions);
                }
            });
        }
        
        if (filteredQuestions.length > 0) {
            questions = filteredQuestions;
        }
    }

    // Shuffle and limit to requested count
    const shuffle = arr => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    };
    shuffle(questions);
    questions = questions.slice(0, Math.min(count, questions.length));

    return {
        questions: questions,
        topics: selectedTopics,
        count: questions.length
    };
}

function createSubjectWordDocumentContent(quizData, subject, selectedTopics) {
    const { questions, topics, count } = quizData;
    const subjectName = subject === 'ly' ? 'Vật Lý' : subject === 'hoa' ? 'Hóa Học' : 'Sinh Học';
    const topicDisplay = !topics || topics.length === 0 ? 'Tất cả chủ đề' : topics.join(', ');
    
    let html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Đề Thi ${subjectName}</title>
    <style>
        body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; margin: 1in; }
        .header { text-align: center; font-weight: bold; margin-bottom: 20px; }
        .header h1 { font-size: 16pt; margin-bottom: 10px; }
        .header h2 { font-size: 14pt; margin-bottom: 5px; }
        .header p { margin: 5px 0; }
        .question { margin-bottom: 15px; page-break-inside: avoid; }
        .question-number { font-weight: bold; margin-bottom: 5px; }
        .options { margin-left: 20px; }
        .options div { margin-bottom: 3px; }
        .subject-info { margin-top: 30px; font-style: italic; border-top: 1px solid #000; padding-top: 10px; }
        .footer { margin-top: 50px; text-align: center; font-size: 10pt; border-top: 1px solid #000; padding-top: 20px; }
        @page { margin-top: 2cm; margin-bottom: 2cm; margin-left: 2.5cm; margin-right: 2cm; }
    </style>
</head>
<body>
    <div class="header">
        <h1>ĐỀ THI TRẮC NGHIỆM</h1>
        <h2>Môn: ${subjectName}</h2>
        <p>Thời gian: 45 phút</p>
        <p>Số câu: ${count}</p>
        <p>Ngày tạo: ${new Date().toLocaleDateString('vi-VN')}</p>
    </div>
    
    <div class="subject-info">
        <p><strong>Chủ đề:</strong> ${topicDisplay}</p>
    </div>
    
    <div class="questions">`;
    
    questions.forEach((q, index) => {
        const questionNumber = index + 1;
        html += `
        <div class="question">
            <div class="question-number">Câu ${questionNumber}:</div>
            <div>${q.q}</div>
            <div class="options">
                ${q.options.map(option => `<div>${option}</div>`).join('')}
            </div>
        </div>`;
    });
    
    html += `
    </div>
    
    <div style="page-break-before: always; margin-top: 50px;">
        <h2 style="text-align: center; font-weight: bold; margin-bottom: 30px;">ĐÁP ÁN</h2>
        <table class="answers-table">
            <tbody>`;
    
    // Group questions into pairs for 2-column layout
    for (let i = 0; i < questions.length; i += 2) {
        html += `<tr>`;
        
        // First question
        const q1 = questions[i];
        const q1Number = i + 1;
        html += `
        <td>
            <div class="answer-number">Câu ${q1Number}:</div>
            <div class="answer-text">${q1.a}</div>`;
        
        if (q1.explain) {
            html += `
            <div class="answer-explain">
                <strong>Giải thích:</strong> ${q1.explain}
            </div>`;
        }
        
        html += `</td>`;
        
        // Second question (if exists)
        if (i + 1 < questions.length) {
            const q2 = questions[i + 1];
            const q2Number = i + 2;
            html += `
        <td>
            <div class="answer-number">Câu ${q2Number}:</div>
            <div class="answer-text">${q2.a}</div>`;
            
            if (q2.explain) {
                html += `
            <div class="answer-explain">
                <strong>Giải thích:</strong> ${q2.explain}
                </div>`;
            }
            
            html += `</td>`;
        } else {
            // Empty cell for odd number of questions
            html += `<td></td>`;
        }
        
        html += `</tr>`;
    }
    
    html += `
            </tbody>
        </table>
    </div>
    
    <div class="footer">
        <p>--- Hết ---</p>
        <p>Đề thi được tạo từ hệ thống ôn tập KHTN Lớp 9</p>
    </div>
</body>
</html>`;
    
    return html;
}

// Authentication modal handlers
let currentAuthMode = 'login';

function openAuthModal(mode = 'login') {
    currentAuthMode = mode === 'register' ? 'register' : 'login';
    const modal = document.getElementById('authModal');
    if (!modal) return;
    document.getElementById('authModalTitle').textContent = currentAuthMode === 'login' ? 'Đăng nhập' : 'Đăng ký';
    document.getElementById('authPrimaryBtn').textContent = currentAuthMode === 'login' ? 'Đăng nhập' : 'Đăng ký';
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    if (loginForm && registerForm) {
        loginForm.style.display = currentAuthMode === 'login' ? '' : 'none';
        registerForm.style.display = currentAuthMode === 'register' ? '' : 'none';
    }
    modal.style.display = 'flex';
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.style.display = 'none';
}

function switchAuthMode(mode) {
    openAuthModal(mode === 'register' ? 'register' : 'login');
}

async function handleAuthPrimary() {
    if (currentAuthMode === 'login') {
        const username = (document.getElementById('loginUsername')?.value || '').trim();
        const password = document.getElementById('loginPassword')?.value || '';
        if (!username || !password) return alert('Vui lòng nhập tên đăng nhập và mật khẩu');
        const hashed = await hashPassword(password);
        const user = data.users.find(u => u.username === username && u.password === hashed);
        if (user) {
            data.loggedInUser = username;
            data.progress = user.progress || data.progress;
            persistData();
            renderUserArea();
            updateProgressSidebar();
            closeAuthModal();
            return alert('Đăng nhập thành công');
        }
        return alert('Tên đăng nhập hoặc mật khẩu không đúng');
    } else {
        const username = (document.getElementById('regUsername')?.value || '').trim();
        const password = document.getElementById('regPassword')?.value || '';
        const password2 = document.getElementById('regPassword2')?.value || '';
        if (!username || !password) return alert('Vui lòng nhập đầy đủ thông tin đăng ký');
        if (password !== password2) return alert('Mật khẩu nhập lại không khớp');
        if (data.users.find(u => u.username === username)) return alert('Tên đăng nhập đã tồn tại');
        const hashed = await hashPassword(password);
        const newUser = { username, password: hashed, progress: { ly: { percent: 0, score: 0, done: 0 }, hoa: { percent: 0, score: 0, done: 0 }, sinh: { percent: 0, score: 0, done: 0 }, total: { percent: 0, bestScore: 0 } } };
        data.users.push(newUser);
        data.loggedInUser = username;
        data.progress = newUser.progress;
        persistData();
        renderUserArea();
        updateProgressSidebar();
        closeAuthModal();
        return alert('Đăng ký thành công');
    }
}

// Save score and update progress
function saveScore(score, subject = 'total') {
    const username = data.loggedInUser || 'Khách';
    const today = new Date().toISOString().split('T')[0];

    const idx = data.leaderboard.findIndex(i => i.name === username);
    if (idx !== -1) {
        if (score > data.leaderboard[idx].score) data.leaderboard[idx] = { name: username, score, date: today };
    } else {
        data.leaderboard.push({ name: username, score, date: today });
    }

    data.leaderboard.sort((a, b) => b.score - a.score);
    data.leaderboard = data.leaderboard.slice(0, 50);

    if (data.loggedInUser) {
        const user = data.users.find(u => u.username === data.loggedInUser);
        if (user) {
            if (subject === 'ly') {
                user.progress.ly.done += currentQuiz.length;
                user.progress.ly.score += score;
            } else if (subject === 'hoa') {
                user.progress.hoa.done += currentQuiz.length;
                user.progress.hoa.score += score;
            } else if (subject === 'sinh') {
                user.progress.sinh.done += currentQuiz.length;
                user.progress.sinh.score += score;
            }
            if (subject === 'total' && score > user.progress.total.bestScore) {
                user.progress.total.bestScore = score;
            }
            data.progress = user.progress;
        }
    }

    persistData();
    updateProgressSidebar();
    updateLeaderboard();
}

// Update progress sidebar
function updateProgressSidebar() {
    const p = data.progress;
    // Vật Lý: compute percent = done / total
    try {
        const done = (data.progress && data.progress.ly && Number(data.progress.ly.done)) || 0;
        const questions = Array.isArray(window.questions_ly) ? window.questions_ly : (window.questions_ly_by_topic && Array.isArray(window.questions_ly_by_topic['Tất cả']) ? window.questions_ly_by_topic['Tất cả'] : []);
        const total = questions.length;
        const lyPercent = total > 0 ? Math.min(100, Math.round((done / total) * 100)) : 0;
        const lyBar = document.getElementById('lyBar');
        if (lyBar) {
            lyBar.style.width = `${lyPercent}%`;
            lyBar.textContent = `${lyPercent}%`;
            lyBar.classList.remove('bg-danger','bg-warning','bg-success');
            if (lyPercent < 33) lyBar.classList.add('bg-danger');
            else if (lyPercent < 66) lyBar.classList.add('bg-warning');
            else lyBar.classList.add('bg-success');
        }
        const subjectName = window.currentTopic && window.currentSubject === 'ly' ? `Lý (${window.currentTopic})` : 'Lý';
        const lyLabel = document.getElementById('lyProgressText');
        if (lyLabel) lyLabel.textContent = `${subjectName}: ${done}/${total} câu (${lyPercent}%)`;
        document.getElementById('lyPercent').textContent = `${lyPercent}%`;
    } catch (e) {}

    // Hóa Học
    try {
        const done = (data.progress && data.progress.hoa && Number(data.progress.hoa.done)) || 0;
        const questions = Array.isArray(window.questions_hoa) ? window.questions_hoa : (window.questions_hoa_by_topic && Array.isArray(window.questions_hoa_by_topic['Tất cả']) ? window.questions_hoa_by_topic['Tất cả'] : []);
        const total = questions.length;
        const hoaPercent = total > 0 ? Math.min(100, Math.round((done / total) * 100)) : 0;
        const hoaBar = document.getElementById('hoaBar');
        if (hoaBar) {
            hoaBar.style.width = `${hoaPercent}%`;
            hoaBar.textContent = `${hoaPercent}%`;
            hoaBar.classList.remove('bg-danger','bg-warning','bg-success');
            if (hoaPercent < 33) hoaBar.classList.add('bg-danger');
            else if (hoaPercent < 66) hoaBar.classList.add('bg-warning');
            else hoaBar.classList.add('bg-success');
        }
        const subjectName = window.currentTopic && window.currentSubject === 'hoa' ? `Hóa (${window.currentTopic})` : 'Hóa';
        const hoaLabel = document.getElementById('hoaProgressText');
        if (hoaLabel) hoaLabel.textContent = `${subjectName}: ${done}/${total} câu (${hoaPercent}%)`;
        document.getElementById('hoaPercent').textContent = `${hoaPercent}%`;
    } catch (e) {}

    // Sinh Học
    try {
        const done = (data.progress && data.progress.sinh && Number(data.progress.sinh.done)) || 0;
        const questions = Array.isArray(window.questions_sinh) ? window.questions_sinh : (window.questions_sinh_by_topic && Array.isArray(window.questions_sinh_by_topic['Tất cả']) ? window.questions_sinh_by_topic['Tất cả'] : []);
        const total = questions.length;
        const sinhPercent = total > 0 ? Math.min(100, Math.round((done / total) * 100)) : 0;
        const sinhBar = document.getElementById('sinhBar');
        if (sinhBar) {
            sinhBar.style.width = `${sinhPercent}%`;
            sinhBar.textContent = `${sinhPercent}%`;
            sinhBar.classList.remove('bg-danger','bg-warning','bg-success');
            if (sinhPercent < 33) sinhBar.classList.add('bg-danger');
            else if (sinhPercent < 66) sinhBar.classList.add('bg-warning');
            else sinhBar.classList.add('bg-success');
        }
        const subjectName = window.currentTopic && window.currentSubject === 'sinh' ? `Sinh (${window.currentTopic})` : 'Sinh';
        const sinhLabel = document.getElementById('sinhProgressText');
        if (sinhLabel) sinhLabel.textContent = `${subjectName}: ${done}/${total} câu (${sinhPercent}%)`;
        document.getElementById('sinhPercent').textContent = `${sinhPercent}%`;
    } catch (e) {}

    // Overall progress computed from per-subject percents
    try {
        const lyVal = parseInt(document.getElementById('lyPercent').textContent) || 0;
        const hoaVal = parseInt(document.getElementById('hoaPercent').textContent) || 0;
        const sinhVal = parseInt(document.getElementById('sinhPercent').textContent) || 0;
        document.getElementById('totalProgress').textContent = `Tổng tiến độ: ${Math.round((lyVal + hoaVal + sinhVal) / 3)}%`;
    } catch (e) {
        document.getElementById('totalProgress').textContent = `Tổng tiến độ: 0%`;
    }

    document.getElementById('bestScore').textContent = `Điểm cao nhất: ${p.total.bestScore || 0}`;
    updateLeaderboard();
}

// Expose updateProgressSidebar to global scope for quiz.js to call
window.updateProgressSidebar = updateProgressSidebar;

// Update leaderboard
function updateLeaderboard() {
    const lb = document.getElementById('leaderboard');
    if (!lb) return;
    lb.innerHTML = '';
    data.leaderboard.forEach((item, i) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between';
        li.innerHTML = `<strong>${i + 1}.</strong> ${item.name} <span class="badge bg-primary">${item.score}/10</span>`;
        lb.appendChild(li);
    });
}

// Play sound
// Global sound enabled flag
// Enabled by default so quiz feedback sounds (correct/wrong/success) play.
let SOUND_ENABLED = true;

function playSound(id) {
    if (!SOUND_ENABLED) return;
    // Ignore missing ids, click feedback, and hover effect (disabled)
    if (!id || id === 'clickSound' || id === 'hoverSound') return;
    const audio = document.getElementById(id);
    if (audio) audio.play().catch(() => {});
}

// Sound toggle
document.getElementById('soundToggle')?.addEventListener('click', () => {
    const btn = document.getElementById('soundToggle');
    const icon = btn.querySelector('i');
    SOUND_ENABLED = !SOUND_ENABLED;
    icon.classList.toggle('fa-volume-up', SOUND_ENABLED);
    icon.classList.toggle('fa-volume-mute', !SOUND_ENABLED);
});

// Background music toggle
document.getElementById('bgToggle')?.addEventListener('click', () => {
    const bg = document.getElementById('bgMusic');
    if (bg) bg.paused ? bg.play() : bg.pause();
});

// Hover sound on cards
// Ignore hover sound while pointer is over any button (prevents sound when moving between buttons)
let IGNORE_HOVER_DURING_BUTTON_HOVER = false;
function _setupButtonHoverIgnore() {
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('mouseenter', () => { IGNORE_HOVER_DURING_BUTTON_HOVER = true; });
        btn.addEventListener('mouseleave', () => { IGNORE_HOVER_DURING_BUTTON_HOVER = false; });
    });
}
_setupButtonHoverIgnore();

document.querySelectorAll('.card-option').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        if (IGNORE_HOVER_DURING_BUTTON_HOVER) return;
        playSound('hoverSound');
    });
});

// Modal chủ đề & số câu

async function showSubjectOptions(subject) {
    currentModalSubject = subject;
    const modal = document.getElementById('subjectModal');
    if (!modal) return;

    const title = document.getElementById('subjectModalTitle');
    const select = document.getElementById('subjectTopicSelect');
    if (!title || !select) return;

    const subjectNames = { ly: 'Vật Lý', hoa: 'Hóa Học', sinh: 'Sinh Học' };
    title.textContent = `Ôn tập ${subjectNames[subject] || subject.toUpperCase()}`;

    // Prefer static topics if provided
    select.innerHTML = '';
    let addedAny = false;
    if (window.topics_by_subject && Array.isArray(window.topics_by_subject[subject])) {
        const arr = window.topics_by_subject[subject];
        arr.forEach(txt => {
            const opt = document.createElement('option');
            opt.value = txt;
            opt.textContent = txt;
            select.appendChild(opt);
        });
        addedAny = true;
    }

    // Fallback: default topics
    if (!addedAny) {
        const defaultTopics = {
            ly: [
                'NĂNG LƯỢNG CƠ HỌC',
                'ÁNH SÁNG',
                'ĐIỆN HỌC',
                'ĐIỆN TỪ',
                'NĂNG LƯỢNG VỚI CUỘC SỐNG'
            ],
            hoa: [
           'KIM LOẠI – PHI KIM',
           'HỢP CHẤT VÔ CƠ – HỮU CƠ',
           'HIDROCACBON – ANCOL – AXIT – ESTE',
           'GLUXIT – LIPIT – PROTEIN – POLIME',
           'TỔNG HỢP'
            ],
            sinh: [
           'CƠ SỞ VẬT CHẤT, CƠ CHẾ DI TRUYỀN VÀ BIẾN DỊ Ở CẤP ĐỘ PHÂN TỬ',
           'CƠ SỞ VẬT CHẤT, CƠ CHẾ DI TRUYỀN VÀ BIẾN DỊ Ở CẤP ĐỘ TẾ BÀO',
           'TÍNH QUY LUẬT CỦA HIỆN TƯỢNG DI TRUYỀN',
            ]
        };
        const list = defaultTopics[subject] || [];
        list.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t;
            opt.textContent = t;
            select.appendChild(opt);
        });
        addedAny = true;
    }

    // Luôn thêm "Tất cả" ở cuối
    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = 'Tất cả';
    select.appendChild(allOpt);

    // Add event listener to update max count when topic changes
    select.addEventListener('change', updateMaxCount);

    modal.style.display = 'flex';

    // Update max count initially
    updateMaxCount();
}

function updateMaxCount() {
    const select = document.getElementById('subjectTopicSelect');
    const input = document.getElementById('subjectCountInput');
    const formText = document.getElementById('countFormText');
    if (!select || !input || !formText) return;

    const topic = select.value.trim();
    const baseName = `questions_${currentModalSubject}`;
    let available = 0;

    const normalize = s => String(s || '')
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[–—−]/g, '-')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();

    if (topic === 'all') {
        available = window[baseName] ? window[baseName].length : 0;
    } else {
        const byTopic = window[`${baseName}_by_topic`];
        if (byTopic) {
            const target = normalize(topic);
            for (const k of Object.keys(byTopic)) {
                if (normalize(k) === target) {
                    available = byTopic[k].length;
                    break;
                }
            }
        }
    }

    input.max = available || 50;
    formText.textContent = `Số câu có sẵn: ${available}. Tối đa sẽ giới hạn theo số câu có sẵn.`;
}

function closeSubjectModal() {
    const modal = document.getElementById('subjectModal');
    if (modal) modal.style.display = 'none';
}

function startFilteredQuiz(subject) {
    closeSubjectModal();

    const countInput = document.getElementById('subjectCountInput');
    const selectedTopics = getSelectedSubjectTopics();
    let count = parseInt(countInput?.value) || 10;

    // Calculate available questions
    const baseName = `questions_${subject}`;
    let available = 0;

    if (!selectedTopics || selectedTopics.length === 0) {
        // All topics
        available = window[baseName] ? window[baseName].length : 0;
    } else {
        // Selected topics
        const byTopic = window[`${baseName}_by_topic`];
        if (byTopic) {
            selectedTopics.forEach(topic => {
                const topicQuestions = byTopic[topic];
                if (Array.isArray(topicQuestions)) {
                    available += topicQuestions.length;
                }
            });
        }
    }

    if (count > available) {
        count = available;
    }

    // For quiz.js compatibility, if multiple topics selected, pass null to use all
    // Otherwise pass the single topic
    const topicForQuiz = selectedTopics && selectedTopics.length === 1 ? selectedTopics[0] : null;

    if (typeof startSubjectQuiz === 'function') {
        startSubjectQuiz(subject, topicForQuiz, count);
    } else {
        alert('Lỗi: Hàm startSubjectQuiz chưa được định nghĩa trong quiz.js');
    }
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
    renderUserArea();
    updateProgressSidebar();
    
    // Ensure modal elements exist
    const multiTopicMode = document.getElementById('multiTopicMode');
    if (multiTopicMode) {
        multiTopicMode.addEventListener('change', toggleTopicSelectionMode);
    }
});

// Check for mock exam parameter on page load
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('mockExam')) {
        const examData = JSON.parse(localStorage.getItem('currentMockExam'));
        if (examData) {
            startMockExam(examData);
            localStorage.removeItem('currentMockExam'); // Clean up
        }
    }
});

function startMockExam(examData) {
    // Similar to startFullExam but with custom exam data
    let examQ = examData.questions || [];

    // Normalize questions
    function _normalizeQuestion(raw) {
        const q = Object.assign({}, raw);
        if (!q.q && q.question) q.q = q.question;
        if (!Array.isArray(q.options) && typeof q.options === 'object' && q.options !== null) {
            q.options = [
                (q.options.A ? `A. ${q.options.A}` : 'A.'),
                (q.options.B ? `B. ${q.options.B}` : 'B.'),
                (q.options.C ? `C. ${q.options.C}` : 'C.'),
                (q.options.D ? `D. ${q.options.D}` : 'D.')
            ];
        }
        if ((!q.a || q.a.length === 1) && (q.answer || q.a)) {
            const src = q.answer || q.a;
            const letter = String(src).trim().charAt(0).toUpperCase();
            const map = { A:0, B:1, C:2, D:3 };
            if (Array.isArray(q.options) && map[letter] !== undefined) q.a = q.options[map[letter]];
            else q.a = src;
        }
        if (!q.explain && q.explanation) q.explain = q.explanation;
        // Shuffle options
        try {
            if (Array.isArray(q.options) && q.options.length > 0) {
                const rawOpts = q.options.map(o => String(o || '').replace(/^[A-D]\.\s*/i, '').trim());
                let origIdx = -1;
                if (q.answer) {
                    const letter = String(q.answer).trim().charAt(0).toUpperCase();
                    const map = { A:0, B:1, C:2, D:3 };
                    origIdx = map[letter] !== undefined ? map[letter] : -1;
                }
                if (origIdx === -1 && q.a) {
                    const aText = String(q.a).replace(/^[A-D]\.\s*/i, '').trim();
                    origIdx = rawOpts.findIndex(r => r === aText);
                }

                const idxs = rawOpts.map((_, i) => i);
                for (let i = idxs.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
                }

                const letters = ['A','B','C','D'];
                const newOptions = [];
                let newCorrect = null;
                for (let i = 0; i < idxs.length; i++) {
                    const oi = idxs[i];
                    const text = rawOpts[oi] || '';
                    newOptions.push(`${letters[i]}. ${text}`);
                    if (oi === origIdx) newCorrect = newOptions[newOptions.length - 1];
                }
                if (!newCorrect && q.a) {
                    const prev = String(q.a).replace(/^[A-D]\.\s*/i, '').trim();
                    const found = newOptions.find(o => o.replace(/^[A-D]\.\s*/i, '').trim() === prev);
                    if (found) newCorrect = found;
                }

                q.options = newOptions;
                if (newCorrect) q.a = newCorrect;
            }
        } catch (e) {}

        return q;
    }

    examQ = examQ.map(_normalizeQuestion);
    let qIndex = 0, examScore = 0;
    let timeLeft = (examData.timeLimit || 90) * 60;

    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('contentArea').innerHTML = `
        <div class="d-flex justify-content-between mb-4 align-items-center">
            <div>
                <h3 class="exam-title text-info">${examData.title}</h3>
                <div class="exam-subtitle">${examQ.length} câu trắc nghiệm — Thời gian ${examData.timeLimit || 90} phút</div>
            </div>
            <h4 id="examTimer" class="text-danger">Thời gian: ${examData.timeLimit || 90}:00</h4>
        </div>
        <div class="exam-layout">
            <div id="examQArea"></div>
            <div class="exam-nav-container">
                <div id="examNav" class="exam-nav-grid"></div>
            </div>
        </div>
        <div class="back-btn-container" style="display:none;">
            <button class="btn btn-secondary btn-lg" onclick="backToMenu()">← Quay lại (dừng thi)</button>
        </div>
    `;

    let examTimer = setInterval(() => {
        timeLeft--;
        const m = String(Math.floor(timeLeft / 60)).padStart(2, '0');
        const s = String(timeLeft % 60).padStart(2, '0');
        document.getElementById('examTimer').textContent = `Thời gian: ${m}:${s}`;
        if (timeLeft <= 0) endExam();
    }, 1000);

    const qStatus = Array(examQ.length).fill('unanswered');
    const qAnswers = Array(examQ.length).fill(null);

    function renderNavGrid() {
        const nav = document.getElementById('examNav');
        if (!nav) return;
        nav.innerHTML = '';
        for (let i = 0; i < examQ.length; i++) {
            const btn = document.createElement('button');
            btn.className = `exam-nav-btn state-${qStatus[i]}`;
            btn.setAttribute('data-index', i);
            btn.textContent = String(i + 1);
            btn.addEventListener('click', () => {
                qIndex = i;
                showQ();
            });
            nav.appendChild(btn);
        }
        updateActiveNav();
    }

    function updateNavStatus(idx) {
        const nav = document.getElementById('examNav');
        if (!nav) return;
        const btn = nav.querySelector(`button[data-index="${idx}"]`);
        if (!btn) return;
        btn.classList.remove('state-unanswered','state-correct','state-wrong','state-answered');
        btn.classList.add(`state-${qStatus[idx]}`);
    }

    function updateActiveNav() {
        const nav = document.getElementById('examNav');
        if (!nav) return;
        nav.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        const active = nav.querySelector(`button[data-index="${qIndex}"]`);
        if (active) active.classList.add('active');
    }

    function showQ() {
        if (qIndex >= examQ.length) return endExam();
        const q = examQ[qIndex];
        document.getElementById('examQArea').innerHTML = `
            <div class="card mb-4">
                <div class="card-header"><strong>Câu ${qIndex + 1}:</strong> ${q.q}</div>
                <div class="card-body">
                    <div class="row g-3">
                        ${q.options.map(opt => `
                            <div class="col-12 col-md-6">
                                <button class="btn btn-outline-info w-100 py-3 exam-opt-btn" data-opt="${opt}">${opt}</button>
                            </div>
                        `).join('')}
                    </div>
                    <div id="examFeedback" class="mt-4"></div>
                    <div class="d-flex justify-content-between mt-4">
                        <button class="btn btn-secondary btn-lg px-4 py-2" onclick="backToMenu()">← Quay lại (dừng thi)</button>
                        <div id="examActionContainer" style="display:none;"></div>
                    </div>
                </div>
            </div>
        `;
        renderNavGrid();
        const buttons = document.querySelectorAll('.exam-opt-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', function onClick() {
                buttons.forEach(b => b.disabled = true);
                const selected = this.getAttribute('data-opt');
                handleSelection(selected, this);
            });
        });
    }

    function handleSelection(selected, btnEl) {
        const q = examQ[qIndex];
        const optButtons = document.querySelectorAll('.exam-opt-btn');
        optButtons.forEach(b => {
            b.classList.remove('btn-outline-info', 'btn-outline-primary', 'btn-outline-success', 'btn-outline-danger');
            if (b.getAttribute('data-opt') === selected) {
                b.classList.add('btn-primary'); // Blue for selected
            } else {
                b.classList.add('btn-outline-info');
            }
            b.disabled = true;
        });

        qAnswers[qIndex] = selected;
        qStatus[qIndex] = 'answered';
        updateNavStatus(qIndex);

        // Auto next or wait for user
        setTimeout(() => {
            if (qIndex + 1 < examQ.length) {
                qIndex++;
                showQ();
            } else {
                // Show finish button
                const actionContainer = document.getElementById('examActionContainer');
                if (actionContainer) {
                    actionContainer.style.display = 'block';
                    actionContainer.innerHTML = `
                        <button class="btn btn-success btn-lg px-5 py-3" id="examFinishBtn">Hoàn thành</button>
                    `;
                    document.getElementById('examFinishBtn').addEventListener('click', () => endExam());
                }
            }
        }, 500); // Short delay
    }

    function nextQ(selected) {
        if (selected === examQ[qIndex].a) examScore++;
        qIndex++;
        showQ();
    }

    function endExam() {
        clearInterval(examTimer);
        playSound('successSound');
        const total = examQ.length || 40;
        const pct = Math.round((examScore / total) * 100);
        if (pct >= 70) playSound('completionMusic');
        else playSound('encourageSound');

        saveScore(examScore);
        document.getElementById('contentArea').innerHTML = `
            <div class="text-center py-5">
                <h2 class="text-success">Kết thúc bài thi!</h2>
                <h3>Điểm số: ${examScore} / ${total}</h3>
                <div class="back-btn-container">
                    <button class="btn btn-primary btn-lg" onclick="backToMenu()">← Quay lại menu chính</button>
                </div>
            </div>
        `;
    }

    renderNavGrid();
    showQ();
}

// Initialize app
renderUserArea();
window.addEventListener('load', updateProgressSidebar);

// Function to select random questions
function _selectRandom(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, array.length));
}

// Local exams data
const localExams = [
    { 
        name: 'Hà Nội', 
        year: 2024, 
        description: 'Đề thi thử THPT Hà Nội 2024 (sưu tầm và upload bởi admin)',
        questions: []
    },
    { 
        name: 'TP.HCM', 
        year: 2024, 
        description: 'Đề thi thử THPT TP.HCM 2024 (sưu tầm và upload bởi admin)',
        questions: []
    },
    { 
        name: 'Đà Nẵng', 
        year: 2024, 
        description: 'Đề thi thử THPT Đà Nẵng 2024 (sưu tầm và upload bởi admin)',
        questions: []
    },
    { 
        name: 'Cần Thơ', 
        year: 2023, 
        description: 'Đề thi thử THPT Cần Thơ 2023 (sưu tầm và upload bởi admin)',
        questions: []
    },
    { 
        name: 'Hải Phòng', 
        year: 2023, 
        description: 'Đề thi thử THPT Hải Phòng 2023 (sưu tầm và upload bởi admin)',
        questions: []
    },
    { 
        name: 'Bắc Ninh', 
        year: 2024, 
        description: 'Đề thi thử THPT Bắc Ninh 2024 (sưu tầm và upload bởi admin)',
        questions: []
    },
    { 
        name: 'Thanh Hóa', 
        year: 2024, 
        description: 'Đề thi thử THPT Thanh Hóa 2024 (sưu tầm và upload bởi admin)',
        questions: []
    },
    { 
        name: 'Nghệ An', 
        year: 2024, 
        description: 'Đề thi thử THPT Nghệ An 2024 (sưu tầm và upload bởi admin)',
        questions: []
    },
    { 
        name: 'Quảng Ninh', 
        year: 2023, 
        description: 'Đề thi thử THPT Quảng Ninh 2023 (sưu tầm và upload bởi admin)',
        questions: []
    },
    { 
        name: 'Trường PTDTBT THCS Hùng Lợi', 
        year: 2023, 
        description: 'Đề thi thử PTDTBT THCS Hùng Lợi lần 2 (sưu tầm và upload bởi admin)',
        questions: [
            {q:"Nguồn nhiên liệu nào sau đây được coi là nhiên liệu sạch, khi cháy ít tạo ra sản phẩm gây ô nhiễm nhất?",options:["A. Diesel (hỗn hợp các hydrocarbon)","B. Xăng (hỗn hợp các hydrocarbon)","C. Khí biogas (thành phần chính là Methane - CH₄)","D. Than đá"],a:"C. Khí biogas (thành phần chính là Methane - CH₄)",subject:"Hóa học"},
            {q:"Khi ánh sáng đi từ môi trường chiết suất lớn sang môi trường chiết suất nhỏ, tia khúc xạ",options:["A. xa pháp tuyến hơn.","B. gần pháp tuyến hơn.","C. không truyền được.","D. trùng với pháp tuyến."],a:"A. xa pháp tuyến hơn.",subject:"Vật lý"},
            {q:"Ánh sáng bị khúc xạ là do",options:["A. vận tốc ánh sáng thay đổi khi đi qua các môi trường khác nhau.","B. môi trường bị tối.","C. mặt phân cách bị cong.","D. ánh sáng bị đổi màu."],a:"A. vận tốc ánh sáng thay đổi khi đi qua các môi trường khác nhau.",subject:"Vật lý"},
            {q:"Phản xạ toàn phần là hiện tượng",options:["A. ánh sáng bị phản xạ trở lại toàn bộ khi truyền từ môi trường chiết suất nhỏ sang môi trường chiết suất lớn.","B. ánh sáng bị phản xạ khi gặp gương phẳng.","C. ánh sáng bị phản xạ trở lại toàn bộ khi truyền từ môi trường chiết suất lớn sang môi trường chiết suất nhỏ.","D. ánh sáng vừa bị phản xạ vừa bị khúc xạ."],a:"C. ánh sáng bị phản xạ trở lại toàn bộ khi truyền từ môi trường chiết suất lớn sang môi trường chiết suất nhỏ.",subject:"Vật lý"},
            {q:"Lăng kính có thể dùng để làm gì?",options:["A. Tạo ảnh ảo","B. Tăng kích thước ảnh","C. Hấp thụ toàn bộ ánh sang","D. Tách ánh sáng trắng thành nhiều màu"],a:"D. Tách ánh sáng trắng thành nhiều màu",subject:"Vật lý"},
            {q:"Tính chất vật lý nào sau đây là của Ethanol (C₂H₅OH)?",options:["A. Là chất lỏng, không màu, không mùi, không tan trong nước.","B. Là chất lỏng, không màu, sôi ở 78,3°C, tan vô hạn trong nước.","C. Là chất khí, không màu, mùi hắc.","D. Là chất rắn, màu trắng, tan tốt trong nước."],a:"B. Là chất lỏng, không màu, sôi ở 78,3°C, tan vô hạn trong nước.",subject:"Hóa học"},
            {q:"Đốt cháy hoàn toàn 2,8 lít khí Ethene (C₂H₄) ở đktc. Thể tích khí Oxygen (O₂) ở đktc cần dùng cho phản ứng là",options:["A. 2,8 lít","B. 5,6 lít","C. 8,4 lít","D. 11,2 lít"],a:"C. 8,4 lít",subject:"Hóa học"},
            {q:"Để các allele của một gen phân li đồng đều về các giao tử thì cần có điều kiện gì?",options:["A. Quá trình giảm phân phải xảy ra bình thường","B. Số lượng cá thế lai phải lớn","C. Alen trội phải trội hoàn toàn so với allele lặn","D. Bố và mẹ phải thuần chủng"],a:"A. Quá trình giảm phân phải xảy ra bình thường",subject:"Sinh học"},
            {q:"Kết thúc giảm phân, một tế bào sinh trứng sẽ tạo ra",options:["A. 1 tế bào trứng và 3 thể cực.","B. 2 tế bào trứng và 2 thể cực.","C. 3 tế bào trứng và 1 thể cực.","D. 4 tế bào trứng."],a:"A. 1 tế bào trứng và 3 thể cực.",subject:"Sinh học"},
            {q:"Công thức cấu tạo thu gọn của ethylic alcohol (theo IUPAC: Ethanol) là",options:["A. C₂H₅CHO (Ethanal)","B. CH₃COOH (Acetic acid)","C. CH₃OH (Methanol)","D. CH₃CH₂OH (Ethanol)"],a:"D. CH₃CH₂OH (Ethanol)",subject:"Hóa học"},
            {q:"Ảnh tạo bởi thấu kính phân kì có đặc điểm nào sau đây?",options:["A. Ảnh thật, cùng chiều","B. Ảnh thật, ngược chiều","C. Ảnh ảo, cùng chiều, nhỏ hơn vật","D. Ảnh ảo, lớn hơn vật"],a:"C. Ảnh ảo, cùng chiều, nhỏ hơn vật",subject:"Vật lý"},
            {q:"Cho dãy kim loại: Aluminum (Al), Iron (Fe), Copper (Cu), Silver (Ag). Kim loại nào KHÔNG tác dụng được với dung dịch Sulfuric acid (H₂SO₄) loãng?",options:["A. Aluminum (Al)","B. Iron (Fe)","C. Cả Copper (Cu) và Silver (Ag)","D. Copper (Cu)"],a:"C. Cả Copper (Cu) và Silver (Ag)",subject:"Hóa học"},
            {q:"Dung dịch Ethanol (C₂H₅OH) có nồng độ bao nhiêu phần trăm thường được dùng làm chất sát khuẩn trong y tế?",options:["A. 10 - 20%","B. 40 - 50%","C. 90 - 96%","D. 70 - 75%"],a:"D. 70 - 75%",subject:"Hóa học"},
            {q:"Trong thí nghiệm lai một cặp tính trạng, Menden đã đề ra giả thuyết về sự phân ly của các cặp",options:["A. tính trạng.","B. allele.","C. gene.","D. nhân tố di truyền."],a:"B. allele.",subject:"Sinh học"},
            {q:"Mỗi loài sinh vật có bộ nhiễm sắc thể đặc trưng bởi",options:["A. số lượng, hình thái NST.","B. số lượng, hình dạng, cấu trúc NST.","C. số lượng, cấu trúc NST.","D. số lượng không đổi."],a:"B. số lượng, hình dạng, cấu trúc NST.",subject:"Sinh học"},
            {q:"Trong trường hợp gene trội hoàn toàn, tỉ lệ phân li kiểu hình 1:1 ở F1 sẽ xuất hiện trong kết quả của phép lai nào dưới đây?",options:["A. aa x aa","B. AA x AA","C. Aa x aa","D. AA x Aa"],a:"C. Aa x aa",subject:"Sinh học"},
            {q:"Khi dùng thấu kính hội tụ để quan sát chữ nhỏ, người ta thường đặt vật",options:["A. đúng tại tiêu điểm.","B. rất xa thấu kính.","C. trong khoảng tiêu cự của thấu kính.","D. sau thấu kính."],a:"C. trong khoảng tiêu cự của thấu kính.",subject:"Vật lý"},
            {q:"Quá trình truyền đạt thông tin di truyền từ DNA sang mRNA được gọi là quá trình",options:["A. tái bản DNA.","B. đột biến DNA.","C. dịch mã.","D. phiên mã."],a:"D. phiên mã.",subject:"Sinh học"},
            {q:"Tia sáng khi truyền qua lăng kính thường bị",options:["A. phản xạ gương.","B. tán sắc và lệch về phía đáy.","C. không bị lệch.","D. phản xạ toàn phần."],a:"B. tán sắc và lệch về phía đáy.",subject:"Vật lý"},
            {q:"Hiện tượng khúc xạ ánh sáng xảy ra khi ánh sáng đi từ môi trường này sang môi trường khác và",options:["A. bị giữ lại hoàn toàn.","B. bị phản xạ hoàn toàn.","C. bị đổi phương truyền.","D. tắt hẳn."],a:"C. bị đổi phương truyền.",subject:"Vật lý"},
            {q:"Hiện tượng phản xạ toàn phần được ứng dụng trong thiết bị nào sau đây?",options:["A. Thấu kính hội tụ","B. Sợi quang học","C. Màn hình LCD","D. Gương phẳng"],a:"B. Sợi quang học",subject:"Vật lý"},
            {q:"Trong quá trình phân bào, NST được quan sát rõ nhất dưới kính hiển vi ở kì nào, vì sao?",options:["A. Kì trước vì lúc này NST đóng xoắn tối đa.","B. Kì trung gian, vì lúc này DNA đã tự nhân đôi xong.","C. Kì sau, vì lúc này NST phân ly nên quan sát được rõ hơn các kì sau.","D. Kì giữa, vì lúc này NST đóng xoắn tối đa."],a:"D. Kì giữa, vì lúc này NST đóng xoắn tối đa.",subject:"Sinh học"},
            {q:"Lăng kính là gì?",options:["A. Khối chất đục không cho ánh sáng truyền qua","B. Khối chất trong suốt có hai mặt cong","C. Khối chất trong suốt có hai mặt phẳng nghiêng","D. Khối chất chỉ có một mặt phẳng"],a:"C. Khối chất trong suốt có hai mặt phẳng nghiêng",subject:"Vật lý"},
            {q:"Tia tới là",options:["A. tia truyền trong môi trường thứ hai.","B. tia rời khỏi mặt phân cách.","C. tia phản xạ trở lại môi trường cũ.","D. tia truyền tới mặt phân cách giữa hai môi trường."],a:"D. tia truyền tới mặt phân cách giữa hai môi trường.",subject:"Vật lý"},
            {q:"Trong trường hợp gene trội hoàn toàn, khi lai giữa hai bố mẹ thuần chủng, khác nhau 2 cặp tính trạng tương phản, sau đó F1 tự thụ phấn, tỉ lệ kiểu hình của F2 là:",options:["A. 3:1","B. 9:6:1","C. 1:1:1:1","D. 9:3:3:1"],a:"D. 9:3:3:1",subject:"Sinh học"},
            {q:"Nguyên tắc bổ sung trong cấu trúc của DNA dẫn đến hệ quả",options:["A. A = C, G = T.","B. A + G = T + C.","C. A + T = G + C.","D. A + C + T = C + T + G."],a:"B. A + G = T + C.",subject:"Sinh học"},
            {q:"Một tia sáng chiếu xiên từ không khí vào thủy tinh. Kết luận nào sau đây là đúng?",options:["A. Tia khúc xạ lệch ra xa pháp tuyến","B. Tia sáng không bị đổi hướng","C. Góc tới luôn bằng góc khúc xạ","D. Tia khúc xạ lệch gần pháp tuyến"],a:"D. Tia khúc xạ lệch gần pháp tuyến",subject:"Vật lý"},
            {q:"Khi vật đặt ngoài khoảng tiêu cự của thấu kính hội tụ, ảnh thu được là",options:["A. không tạo ảnh.","B. ảnh thật, ngược chiều với vật.","C. ảnh ảo, ngược chiều với vật.","D. ảnh ảo, cùng chiều với vật."],a:"B. ảnh thật, ngược chiều với vật.",subject:"Vật lý"},
            {q:"Khi đốt cháy hoàn toàn một hydrocacbon X thu được sản phẩm chỉ gồm Carbon dioxide (CO₂) và nước (H₂O). X KHÔNG THỂ là chất nào sau đây?",options:["A. Methane (CH₄)","B. Methanol (CH₃OH)","C. Ethyne (C₂H₂)","D. Ethene (C₂H₄)"],a:"B. Methanol (CH₃OH)",subject:"Hóa học"},
            {q:"Để điều chế 5,6 lít khí Carbon dioxide (CO₂) ở đktc bằng cách đốt cháy hoàn toàn khí Methane (CH₄), cần dùng một lượng methane là bao nhiêu gam? (C = 12, H = 1). Phương trình: CH₄ + 2O₂ → CO₂ + 2H₂O",options:["A. 16 gam","B. 2 gam","C. 4 gam","D. 8 gam"],a:"C. 4 gam",subject:"Hóa học"},
            {q:"Hiện tượng nào sau đây là phản ứng thế giữa kim loại và dung dịch acid?",options:["A. Đốt cháy Iron (Fe) trong khí Oxygen (O₂).","B. Điện phân nóng chảy Aluminum oxide (Al₂O₃).","C. Sục khí Carbon dioxide (CO₂) vào dung dịch Calcium hydroxide (Ca(OH)₂).","D. Zinc (Zn) tan trong dung dịch Hydrochloric acid (HCl) tạo khí Hydrogen (H₂)."],a:"D. Zinc (Zn) tan trong dung dịch Hydrochloric acid (HCl) tạo khí Hydrogen (H₂).",subject:"Hóa học"},
            {q:"Tính chất vật lý chung của kim loại là",options:["A. giòn, không dẫn điện, ở thể khí.","B. dẫn điện, dẫn nhiệt tốt, có ánh kim.","C. dẫn điện kém, ở thể lỏng, không có ánh kim.","D. không dẫn nhiệt, có ánh kim, ở thể rắn."],a:"B. dẫn điện, dẫn nhiệt tốt, có ánh kim.",subject:"Hóa học"},
            {q:"Nhận xét nào sau đây đúng khi nói về đặc điểm cấu tạo của phân tử RNA?",options:["A. Kích thước và khối lượng nhỏ hơn so với phân tử DNA.","B. Cấu tạo bằng 2 mạch thẳng.","C. Gồm có 4 loại đơn phân là A, T, G, C","D. Cấu tạo 2 mạch xoắn song song."],a:"A. Kích thước và khối lượng nhỏ hơn so với phân tử DNA.",subject:"Sinh học"},
            {q:"Hợp chất hữu cơ là hợp chất của nguyên tố nào, với một số ngoại lệ?",options:["A. Carbon (C)","B. Copper (Cu)","C. Sodium (Na)","D. Iron (Fe)"],a:"A. Carbon (C)",subject:"Hóa học"},
            {q:"Dãy chất nào sau đây chỉ gồm các phi kim?",options:["A. Iron (Fe), Copper (Cu), Phosphorus (P)","B. Oxygen (O₂), Carbon (C), Chlorine (Cl₂)","C. Silver (Ag), Hydrogen (H₂), Iodine (I₂)","D. Sulfur (S), Aluminum (Al), Nitrogen (N₂)"],a:"B. Oxygen (O₂), Carbon (C), Chlorine (Cl₂)",subject:"Hóa học"},
            {q:"Khí nào sau đây là một trong những nguyên nhân chính gây ra hiện tượng mưa acid?",options:["A. Sulfur dioxide (SO₂)","B. Oxygen (O₂)","C. Nitrogen (N₂)","D. Carbon dioxide (CO₂)"],a:"A. Sulfur dioxide (SO₂)",subject:"Hóa học"},
            {q:"Dãy hydrocacbon nào sau đây thuộc loại alkane (công thức chung CₙH₂ₙ₊₂)?",options:["A. Methane (CH₄), Ethene (C₂H₄), Propane (C₃H₈)","B. Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈)","C. Ethene (C₂H₄), Propene (C₃H₆), Butene (C₄H₈)","D. Ethyne (C₂H₂), Propene (C₃H₆), Butane (C₄H₁₀)"],a:"B. Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈)",subject:"Hóa học"},
            {q:"Một gen có chiều dài 5100Å, chu kỳ xoắn của gen là",options:["A. 150 vòng.","B. 250 vòng.","C. 100 vòng.","D. 200 vòng."],a:"A. 150 vòng.",subject:"Sinh học"},
            {q:"Người đứng ngoài hồ nhìn thấy cá nằm “nổi” gần mặt nước hơn so với vị trí thật. Nguyên nhân là do",options:["A. hiện tượng tán sắc ánh sáng.","B. ánh sáng bị hấp thụ khi đi trong nước.","C. ánh sáng từ con cá khúc xạ khi đi từ nước ra không khí.","D. ánh sáng phản xạ hoàn toàn."],a:"C. ánh sáng từ con cá khúc xạ khi đi từ nước ra không khí.",subject:"Vật lý"},
            {q:"Bộ nhiễm sắc thể của loài sinh sản hữu tính được duy trì ổn định qua các thế hệ là nhờ",options:["A. sự phối hợp của quá trình nguyên phân và thụ tinh.","B. sự phối hợp của quá trình nguyên phân và giảm phân.","C. sự phối hợp của quá trình giảm phân và thụ tinh.","D. sự phối hợc của quá trình nguyên phân, giảm phân và thụ tinh."],a:"C. sự phối hợp của quá trình giảm phân và thụ tinh.",subject:"Sinh học"}
        ]
    },

    { 
        name: 'Trường PTDTBT THCS Hùng Lợi', 
        year: 2026, 
        description: 'Đề thi thử Trường PTDTBT THCS Hùng Lợi (sưu tầm và upload bởi admin)',
        questions: [
            {q:"Một vật có khối lượng 1 kg được nâng lên độ cao 5 m so với mặt đất. Lấy g = 10 m/s². Thế năng của vật là:",options:["A. 5 J","B. 25 J","C. 50 J","D. 10 J"],a:"C. 50 J",subject:"Vật lý"},
            {q:"Phương pháp đơn giản nhất để tách sắt khỏi hỗn hợp bột sắt và cát là",options:["A. đun nóng.","B. hoà tan trong nước.","C. lọc.","D. dùng nam châm."],a:"D. dùng nam châm.",subject:"Hóa học"},
            {q:"Để tách Al khỏi hỗn hợp bột gồm Al và Fe, cách làm phù hợp nhất là",options:["A. đun nóng hỗn hợp.","B. dùng nam châm.","C. lọc.","D. hoà tan trong nước."],a:"B. dùng nam châm.",subject:"Hóa học"},
            {q:"Thành phần nào sau đây không tham gia trực tiếp vào quá trình hình thành chuỗi axit amin?",options:["A. tRNA.","B. DNA.","C. Riboxom.","D. mRNA."],a:"B. DNA.",subject:"Sinh học"},
            {q:"Kim loại thường có tính chất nào sau đây khác với phi kim?",options:["A. Có ánh kim","B. Không tan trong nước","C. Không phản ứng hoá học","D. Không dẫn điện"],a:"B. Không tan trong nước",subject:"Hóa học"},
            {q:"Cho phép lai P: bố AABbDdee  x  mẹ aaBbDdEe, biết mỗi gen quy định 1 tính trạng trội hoàn toàn. Trong các phát biểu sau có bao nhiêu phát biểu đúng? I. Bố có kiểu hình mang 3 tính trạng trội, 1 tính trạng lặn. II. Mẹ có kiểu hình mang 3 tính trạng trội, 2 tính trạng lặn. III. Mẹ cho 4 loại giao tử, bố cho 4 loại giao tử. IV. Phép lai đang xét đến 4 cặp gen quy định 4 cặp tính trạng. V. Phép lai cho F1 có 32 kiểu tổ hợp giao tử. Số phát biểu đúng là:",options:["A. 3.","B. 2.","C. 1","D. 4."],a:"A. 3.",subject:"Sinh học"},
            {q:"Một vật được ném thẳng đứng lên cao. Khi vật lên cao thì",options:["A. động năng và thế năng đều không đổi.","B. động năng và thế năng đều tăng.","C. động năng giảm, thế năng tăng.","D. động năng tăng, thế năng giảm."],a:"C. động năng giảm, thế năng tăng.",subject:"Vật lý"},
            {q:"Một phân tử DNA mạch kép có A = 20%, tỉ lệ nucleotit loại G của DNA này là",options:["A. 30%.","B. 20%","C. 50%.","D. 40%."],a:"A. 30%.",subject:"Sinh học"},
            {q:"Ở người, mắt nâu (N) là trội đối với mắt xanh (n). Khi một người đàn ông mắt nâu kết hôn với một người phụ nữ mắt xanh và họ có con trai mắt nâu, con gái mắt xanh. Có thể kết luận chắc chắn rằng",options:["A. gen quy định màu mắt liên kết với NST X.","B. người đàn ông có kiểu gen dị hợp.","C. cả 2 bố mẹ đều có kiểu gen đồng hợp.","D. người đàn ông có kiểu gen đồng hợp."],a:"B. người đàn ông có kiểu gen dị hợp.",subject:"Sinh học"},
            {q:"Một tế bào của lúa nước có 2n = 24 trải qua quá trình giảm phân hình thành giao tử. Số NST và số tâm động trong mỗi tế bào ở kì sau II lần lượt là",options:["A. 24 và 12.","B. 24 và 24.","C. 12 và 12.","D. 12 và 24."],a:"C. 12 và 12.",subject:"Sinh học"},
            {q:"Động năng của một vật phụ thuộc vào yếu tố nào?",options:["A. Khối lượng và độ cao","B. Khối lượng và vận tốc","C. Khối lượng và lực tác dụng","D. Vận tốc và độ cao"],a:"B. Khối lượng và vận tốc",subject:"Vật lý"},
            {q:"Một học sinh leo thang cao 4m với khối lượng 40 kg trong 8s . Công suất của học sinh là",options:["A. 100 W","B. 250 W","C. 150 W","D. 200 W"],a:"D. 200 W",subject:"Vật lý"},
            {q:"10 tế bào sinh trứng của Thỏ cái giảm phân bình thường tạo được bao nhiêu tế bào trứng?",options:["A. 10 trứng.","B. 1 trứng.","C. 40 trứng.","D. 5 trúng."],a:"A. 10 trứng.",subject:"Sinh học"},
            {q:"Thế năng trọng trường của vật phụ thuộc vào",options:["A. khối lượng và độ cao.","B. độ cao và vận tốc.","C. khối lượng và vận tốc.","D. lực và vận tốc."],a:"A. khối lượng và độ cao.",subject:"Vật lý"},
            {q:"Khi vận tốc của vật tăng gấp đôi thì động năng của vật",options:["A. tăng gấp 4","B. không đổi","C. tăng gấp đôi","D. tăng gấp 3"],a:"A. tăng gấp 4",subject:"Vật lý"},
            {q:"Đặc điểm nào sau đây không đúng khi nói về cấu trúc của phân tử DNA mạch kép?",options:["A. Đơn phân gồm 4 loại nucleotit là A, U, G, C.","B. Cấu tạo theo nguyên tắc đa phân.","C. Được cấu tạo nên bới các nguyên tố C, H, O, N, P.","D. Cấu tạo theo nguyên tắc bổ sung."],a:"A. Đơn phân gồm 4 loại nucleotit là A, U, G, C.",subject:"Sinh học"},
            {q:"Vì sao kim loại được dùng làm dây dẫn điện?",options:["A. Vì kim loại nhẹ","B. Vì kim loại có ánh kim","C. Vì kim loại dễ nóng chảy","D. Vì kim loại dẫn điện tốt"],a:"D. Vì kim loại dẫn điện tốt",subject:"Hóa học"},
            {q:"Hợp chất hữu cơ luôn chứa nguyên tố nào?",options:["A. Nitơ","B. Hidro.","C. Cacbon.","D. Oxi."],a:"C. Cacbon.",subject:"Hóa học"},
            {q:"Khi tăng thời gian thực hiện công lên gấp đôi, công suất",options:["A. tăng gấp đôi.","B. không đổi.","C. giảm đi một nửa.","D. bằng 0."],a:"B. không đổi.",subject:"Vật lý"},
            {q:"Năng lượng cơ học của một vật là gì?",options:["A. Tổng động năng và thế năng của vật","B. Tổng khối lượng và vận tốc của vật","C. Hiệu động năng và thế năng của vật","D. Khả năng đứng yên của vật"],a:"A. Tổng động năng và thế năng của vật",subject:"Vật lý"},
            {q:"Một lực 20N kéo vật chuyển dời 5m theo hướng của lực.Công mà lực thực hiện là",options:["A. 4J","B. 100J","C. 25J","D. 5J"],a:"B. 100J",subject:"Vật lý"},
            {q:"Một vật có khối lượng 2kg chuyển động với vận tốc 4m/s. Động năng của vật là",options:["A. 8J","B. 64J","C. 16J","D. 32J"],a:"C. 16J",subject:"Vật lý"},
            {q:"Phát biểu nào sau đây đúng khi so sánh kim loại và phi kim?",options:["A. Kim loại không dẫn điện","B. Phi kim luôn có ánh kim","C. Kim loại thường dẻo, dễ dát mỏng","D. Phi kim luôn rắn"],a:"C. Kim loại thường dẻo, dễ dát mỏng",subject:"Hóa học"},
            {q:"Cho alen A quy định thân cao trội hoàn toàn so với alen a quy định thân thấp. Có bao nhiêu kiểu gen quy định kiểu hình thân cao?",options:["A. 1 kiểu gen.","B. 4 kiểu gen","C. 2 kiểu gen.","D. 3 kiểu gen."],a:"C. 2 kiểu gen.",subject:"Sinh học"},
            {q:"Một động cơ có công suất 500W hoạt động trong 2 phút. Công mà động cơ thực hiện là",options:["A. 1000J","B. 120.000J","C. 60.000J","D. 100J"],a:"C. 60.000J",subject:"Vật lý"},
            {q:"Công cơ học được xác định bằng biểu thức nào?",options:["A. A=F.s.A","B. A=F.v","C. A=F.s","D. A=m.g.h"],a:"C. A=F.s",subject:"Vật lý"},
            {q:"Lai phân tích là phép lai",options:["A. giữa hai cơ thể bố mẹ cùng loài có tính trạng tương phản với nhau.","B. giữa hai cơ thể thuần chủng khác nhau về một cặp tính trạng tương phản.","C. giữa cơ thể mang tính trạng trội với cơ thể mang tính trạng lặn để kiểm tra kiểu gen.","D. giữa cơ thể mang tính trạng trội với cơ thể mang tính trạng lặn tương phản để kiểm tra kiểu gen."],a:"C. giữa cơ thể mang tính trạng trội với cơ thể mang tính trạng lặn để kiểm tra kiểu gen.",subject:"Sinh học"},
            {q:"Hợp kim nào sau đây được sử dụng phổ biến để chế tạo vỏ máy bay?",options:["A. Đồng thau","B. Gang.","C. Hợp kim nhôm","D. Thép"],a:"C. Hợp kim nhôm",subject:"Hóa học"},
            {q:"Để bảo vệ vỏ tàu thép không bị ăn mòn, người ta thường gắn thêm kim loại nào sau đây?",options:["A. Ag.","B. Zn.","C. Cu.","D. Au."],a:"B. Zn.",subject:"Hóa học"},
            {q:"Cho các kim loại: Fe, Cu, Al. Kim loại phản ứng được với dung dịch HCl là",options:["A. Cu và Al.","B. Fe và Al.","C. Cu và Fe.","D. Cu, Fe và Al"],a:"B. Fe và Al.",subject:"Hóa học"},
            {q:"Khi vật rơi tự do từ trên cao xuống (bỏ qua ma sát), cơ năng của vật",options:["A. tăng dần","B. không đổi","C. giảm dần","D. bằng 0"],a:"B. không đổi",subject:"Vật lý"},
            {q:"RNA được tổng hợp dựa trên khuân mẫu là mạch nào của gen?",options:["A. Từ cả 2 mạch.","B. Từ mạch mang mã gốc.","C. Khi thì từ 1 mạch, khi thì từ 2 mạch.","D. Từ mạch bổ sung."],a:"B. Từ mạch mang mã gốc.",subject:"Sinh học"},
            {q:"Kim loại nào sau đây đứng trước Fe trong dãy hoạt động hoá học?",options:["A. Al.","B. Cu","C. Ag.","D. Au."],a:"A. Al.",subject:"Hóa học"},
            {q:"Hợp chất hữu cơ là hợp chất của",options:["A. Kim loại.","B. Phi kim.","C. Oxi","D. Cacbon."],a:"D. Cacbon.",subject:"Hóa học"},
            {q:"Trong nguyên phân NST kép được hình thành ở giai đoạn",options:["A. đầu kì giữa.","B. đầu kì đầu.","C. giữa kì đầu.","D. kì trung gian."],a:"A. đầu kì giữa.",subject:"Sinh học"},
            {q:"Trong giảm phân, NST xếp thành 2 hàng trên mặt phẳng xích đạo vào kì nào?",options:["A. Kì giữa I.","B. Kì sau I.","C. Kì đầu I.","D. Kì giữa II."],a:"A. Kì giữa I.",subject:"Sinh học"},
            {q:"Dựa vào dãy hoạt động hoá học, kim loại nào sau đây đẩy được Cu ra khỏi dung dịch CuSO₄?",options:["A. Au.","B. Ag.","C. Hg","D. Fe."],a:"D. Fe.",subject:"Hóa học"},
            {q:"Tính chất vật lí chung của hầu hết kim loại là",options:["A. Tan nhiều trong nước","B. Có mùi đặc trưng","C. Dẫn điện, dẫn nhiệt tốt","D. Dễ bay hơi"],a:"C. Dẫn điện, dẫn nhiệt tốt",subject:"Hóa học"},
            {q:"Công suất được tính bằng:",options:["A. Công trong 1 phút","B. Công thực hiện trên một đơn vị lực","C. Lực nhân với vận tốc","D. Công thực hiện trong một đơn vị thời gian"],a:"D. Công thực hiện trong một đơn vị thời gian",subject:"Vật lý"},
            {q:"Chất nào sau đây là hợp chất hữu cơ?",options:["A. Na₂CO₃","B. CaCO₃.","C. CO₂.","D. CH₄."],a:"D. CH₄.",subject:"Hóa học"}
        ]
    }
];

// Initialize local exams with questions
function initLocalExams() {
    // Ensure questions are loaded
    if (!window.questions_ly || !window.questions_hoa || !window.questions_sinh) {
        console.warn('Question files not loaded yet, retrying...');
        setTimeout(initLocalExams, 500);
        return;
    }
    
    localExams.forEach(exam => {
        if (exam.questions.length === 0) {
            // Select 14 Physics, 14 Chemistry, 12 Biology questions
            let lyQ = _selectRandom(window.questions_ly || [], 14).map(q => ({ ...q, subject: 'Vật lý' }));
            let hoaQ = _selectRandom(window.questions_hoa || [], 14).map(q => ({ ...q, subject: 'Hóa học' }));
            let sinhQ = _selectRandom(window.questions_sinh || [], 12).map(q => ({ ...q, subject: 'Sinh học' }));
            exam.questions = [...lyQ, ...hoaQ, ...sinhQ].sort(() => 0.5 - Math.random());
        }
    });
}

// Call initLocalExams after a short delay to ensure all question files are loaded
setTimeout(initLocalExams, 100);

function startLocalExam(examIndex) {
    const exam = localExams[examIndex];
    if (!exam || !exam.questions.length) {
        alert('Đề thi chưa có câu hỏi. Vui lòng thử lại sau.');
        return;
    }

    // Set global exam questions and start
    window.currentExamQuestions = exam.questions;
    window.currentExamTitle = `Đề thi thử ${exam.name} ${exam.year}`;
    
    // Hide modal
    closeLocalExamsModal();
    
    // Start the exam (similar to startFullExam but with fixed questions)
    startExamWithQuestions(exam.questions, window.currentExamTitle);
}

function startExamWithQuestions(questions, title) {
    // Normalize questions
    function _normalizeQuestion(raw) {
        const q = Object.assign({}, raw);
        if (!q.q && q.question) q.q = q.question;
        // normalize options to array ['A. text', 'B. text', ...]
        if (!Array.isArray(q.options) && typeof q.options === 'object' && q.options !== null) {
            q.options = [
                (q.options.A ? `A. ${q.options.A}` : 'A.'),
                (q.options.B ? `B. ${q.options.B}` : 'B.'),
                (q.options.C ? `C. ${q.options.C}` : 'C.'),
                (q.options.D ? `D. ${q.options.D}` : 'D.')
            ];
        }
        // map answer letter (e.g., 'A') or numeric to full option text if possible
        if ((!q.a || q.a.length === 1) && (q.answer || q.a)) {
            const src = q.answer || q.a;
            const letter = String(src).trim().charAt(0).toUpperCase();
            const map = { A:0, B:1, C:2, D:3 };
            if (Array.isArray(q.options) && map[letter] !== undefined) q.a = q.options[map[letter]];
            else q.a = src;
        }
        if (!q.explain && q.explanation) q.explain = q.explanation;
        // Shuffle options
        try {
            if (Array.isArray(q.options) && q.options.length > 0) {
                const rawOpts = q.options.map(o => String(o || '').replace(/^[A-D]\.\s*/i, '').trim());
                let origIdx = -1;
                if (q.answer) {
                    const letter = String(q.answer).trim().charAt(0).toUpperCase();
                    const map = { A:0, B:1, C:2, D:3 };
                    origIdx = map[letter] !== undefined ? map[letter] : -1;
                }
                if (origIdx === -1 && q.a) {
                    const aText = String(q.a).replace(/^[A-D]\.\s*/i, '').trim();
                    origIdx = rawOpts.findIndex(r => r === aText);
                }

                const idxs = rawOpts.map((_, i) => i);
                for (let i = idxs.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
                }

                const letters = ['A','B','C','D'];
                const newOptions = [];
                let newCorrect = null;
                for (let i = 0; i < idxs.length; i++) {
                    const oi = idxs[i];
                    const text = rawOpts[oi] || '';
                    newOptions.push(`${letters[i]}. ${text}`);
                    if (oi === origIdx) newCorrect = newOptions[newOptions.length - 1];
                }
                if (!newCorrect && q.a) {
                    const prev = String(q.a).replace(/^[A-D]\.\s*/i, '').trim();
                    const found = newOptions.find(o => o.replace(/^[A-D]\.\s*/i, '').trim() === prev);
                    if (found) newCorrect = found;
                }

                q.options = newOptions;
                if (newCorrect) q.a = newCorrect;
            }
        } catch (e) {}
        return q;
    }

    questions = questions.map(_normalizeQuestion);
    let qIndex = 0, examScore = 0, correctCount = 0;

    let timeLeft = 90 * 60;
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('contentArea').innerHTML = `
        <div class="d-flex justify-content-between mb-4 align-items-center">
            <div>
                <h3 class="exam-title text-info">${title}</h3>
                <div class="exam-subtitle">${questions.length} câu trắc nghiệm — Thời gian 90 phút</div>
            </div>
            <h4 id="examTimer" class="text-danger">Thời gian: 90:00</h4>
        </div>
        <div class="exam-layout">
            <div id="examQArea"></div>
            <div class="exam-nav-container">
                <div id="examNav" class="exam-nav-grid"></div>
            </div>
        </div>
        <div class="back-btn-container" style="display:none;">
            <button class="btn btn-secondary btn-lg" onclick="backToMenu()">← Quay lại (dừng thi)</button>
        </div>
    `;

    examTimer = setInterval(() => {
        timeLeft--;
        const timerEl = document.getElementById('examTimer');
        if (!timerEl) {
            clearInterval(examTimer);
            return;
        }
        const m = String(Math.floor(timeLeft / 60)).padStart(2, '0');
        const s = String(timeLeft % 60).padStart(2, '0');
        timerEl.textContent = `Thời gian: ${m}:${s}`;
        if (timeLeft <= 0) endExam();
    }, 1000);

    const qStatus = Array(questions.length).fill('unanswered');
    const qAnswers = Array(questions.length).fill(null);

    function nextQuestion() {
        if (qIndex < questions.length - 1) {
            qIndex++;
            showQ(qIndex);
        }
    }

    // Make functions global for onclick handlers
    window.nextQuestion = nextQuestion;

    function renderNavGrid() {
        const nav = document.getElementById('examNav');
        if (!nav) return;
        nav.innerHTML = '';
        for (let i = 0; i < questions.length; i++) {
            const btn = document.createElement('button');
            btn.className = `exam-nav-btn state-${qStatus[i]}`;
            btn.setAttribute('data-index', i);
            btn.textContent = String(i + 1);
            btn.addEventListener('click', () => showQ(i));
            nav.appendChild(btn);
        }
    }

    function showQ(idx) {
        qIndex = idx;
        const q = questions[idx];
        const area = document.getElementById('examQArea');
        if (!area) return;

        const isFirst = idx === 0;
        const isLast = idx === questions.length - 1;

        area.innerHTML = `
            <div class="exam-question">
                <div class="question-header">
                    <span class="question-number">Câu ${idx + 1}/${questions.length}</span>
                    <span class="question-subject badge bg-secondary">${q.subject || 'KHTN'}</span>
                </div>
                <div class="question-text">${q.q}</div>
                <div class="options">
                    ${q.options.map((opt, i) => `
                        <label class="option">
                            <input type="radio" name="q${idx}" value="${opt}" ${qAnswers[idx] === opt ? 'checked' : ''}>
                            <span class="option-text">${opt}</span>
                        </label>
                    `).join('')}
                </div>
                ${q.explain ? `<div class="explanation" style="display:none;"><strong>Giải thích:</strong> ${q.explain}</div>` : ''}
                <div class="exam-navigation">
                    <button class="btn btn-secondary btn-lg nav-btn-left" id="backBtn">
                        <i class="fas fa-arrow-left me-2"></i>Quay về
                    </button>
                    ${!isLast ? `
                        <button class="btn btn-primary btn-lg nav-btn-right" id="nextBtn">
                            Tiếp theo<i class="fas fa-arrow-right ms-2"></i>
                        </button>
                    ` : `
                        <button class="btn btn-success btn-lg nav-btn-right" id="finishBtn">
                            Hoàn thành<i class="fas fa-check ms-2"></i>
                        </button>
                    `}
                </div>
            </div>
        `;

        // Add event listeners
        document.getElementById('backBtn').addEventListener('click', backToMenu);
        if (!isLast) {
            document.getElementById('nextBtn').addEventListener('click', nextQuestion);
        } else {
            document.getElementById('finishBtn').addEventListener('click', endExam);
        }

        // Update nav
        document.querySelectorAll('.exam-nav-btn').forEach((btn, i) => {
            btn.classList.toggle('active', i === idx);
        });

        // Highlight selected if any
        if (qAnswers[idx]) {
            const selectedInput = document.querySelector(`input[name="q${idx}"][value="${qAnswers[idx]}"]`);
            if (selectedInput) {
                selectedInput.checked = true;
                const label = selectedInput.parentElement;
                label.classList.add('selected');
            }
        }
    }

    // Make functions global for onclick handlers
    window.nextQuestion = nextQuestion;

    function endExam() {
        clearInterval(examTimer);
        // Calculate score
        examScore = 0;
        correctCount = 0;
        let wrongCount = 0;
        let unansweredCount = 0;
        const subjectStats = { 'Vật lý': { total: 0, correct: 0, wrong: 0 }, 'Hóa học': { total: 0, correct: 0, wrong: 0 }, 'Sinh học': { total: 0, correct: 0, wrong: 0 } };
        for (let i = 0; i < questions.length; i++) {
            const subject = questions[i].subject || 'KHTN';
            if (subjectStats[subject]) {
                subjectStats[subject].total++;
                if (qAnswers[i] === questions[i].a) {
                    examScore += 0.25; // 0.25 per question
                    correctCount++;
                    subjectStats[subject].correct++;
                    qStatus[i] = 'correct';
                } else if (qAnswers[i] !== null) {
                    wrongCount++;
                    subjectStats[subject].wrong++;
                    qStatus[i] = 'wrong';
                } else {
                    unansweredCount++;
                }
            }
        }

        // Show results
        document.getElementById('contentArea').innerHTML = `
            <div class="exam-results container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="card shadow-lg border-0">
                            <div class="card-header bg-primary text-white text-center py-4">
                                <h2 class="mb-0"><i class="fas fa-trophy me-2"></i>Kết quả thi thử</h2>
                                <p class="mb-0 mt-2">${title}</p>
                            </div>
                            <div class="card-body p-4">
                                <div class="results-summary text-center mb-4">
                                    <div class="score-display mb-3">
                                        <h3 class="text-primary display-4 fw-bold">${examScore.toFixed(2)}/10</h3>
                                        <div class="progress mb-3" style="height: 20px;">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: ${Math.min(100, (examScore / 10) * 100)}%;" aria-valuenow="${examScore}" aria-valuemin="0" aria-valuemax="10"></div>
                                        </div>
                                        <p class="mb-2">Đúng ${correctCount}/${questions.length} câu (${Math.round((correctCount / questions.length) * 100)}%)</p>
                                        <p class="text-muted">Thời gian còn lại: ${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}</p>
                                        <div class="row text-center mt-3">
                                            <div class="col-4">
                                                <div class="border rounded p-2">
                                                    <h6 class="text-success">${correctCount}</h6>
                                                    <small>Đúng</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="border rounded p-2">
                                                    <h6 class="text-danger">${wrongCount}</h6>
                                                    <small>Sai</small>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="border rounded p-2">
                                                    <h6 class="text-warning">${unansweredCount}</h6>
                                                    <small>Chưa làm</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="grade-badge">
                                        ${examScore >= 8 ? '<span class="badge bg-success fs-5 p-2">Xuất sắc</span>' :
                                          examScore >= 6.5 ? '<span class="badge bg-info fs-5 p-2">Khá</span>' :
                                          examScore >= 5 ? '<span class="badge bg-warning fs-5 p-2">Trung bình</span>' :
                                          '<span class="badge bg-danger fs-5 p-2">Cần cố gắng</span>'}
                                    </div>
                                </div>
                                <div class="subject-stats mb-4">
                                    <h4 class="mb-3"><i class="fas fa-chart-bar me-2"></i>Thống kê theo môn học:</h4>
                                    <div class="row g-3">
                                        ${Object.entries(subjectStats).map(([subject, stats]) => `
                                            <div class="col-md-4">
                                                <div class="card h-100">
                                                    <div class="card-body text-center">
                                                        <h5 class="card-title">${subject}</h5>
                                                        <div class="progress mb-2" style="height: 15px;">
                                                            <div class="progress-bar bg-primary" role="progressbar" style="width: ${stats.total > 0 ? ((stats.correct + stats.wrong) > 0 ? (stats.correct / (stats.correct + stats.wrong)) * 100 : 0) : 0}%;" aria-valuenow="${stats.correct}" aria-valuemin="0" aria-valuemax="${stats.correct + stats.wrong}"></div>
                                                        </div>
                                                        <p class="mb-1"><strong>${stats.correct}/${stats.correct + stats.wrong}</strong> câu đúng trong số đã làm</p>
                                                        <small class="text-muted">${(stats.correct + stats.wrong) > 0 ? Math.round((stats.correct / (stats.correct + stats.wrong)) * 100) : 0}% (${stats.correct + stats.wrong}/${stats.total} đã làm)</small>
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                <div class="results-details">
                                    <h4 class="mb-3"><i class="fas fa-list-check me-2"></i>Chi tiết từng câu:</h4>
                                    <div class="accordion" id="questionsAccordion">
                                        ${questions.map((q, i) => {
                                            const isCorrect = qAnswers[i] === q.a;
                                            const statusClass = isCorrect ? 'text-success' : 'text-danger';
                                            const statusIcon = isCorrect ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>';
                                            const collapseId = `collapse${i}`;
                                            return `
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button ${isCorrect ? '' : 'collapsed'} ${isCorrect ? 'bg-light' : 'bg-light'}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isCorrect ? 'true' : 'false'}" aria-controls="${collapseId}">
                                                        <span class="me-2">${statusIcon}</span>
                                                        <strong>Câu ${i + 1}:</strong> ${q.subject || 'KHTN'} - ${isCorrect ? 'Đúng' : 'Sai'}
                                                    </button>
                                                </h2>
                                                <div id="${collapseId}" class="accordion-collapse collapse ${isCorrect ? 'show' : ''}" data-bs-parent="#questionsAccordion">
                                                    <div class="accordion-body">
                                                        <p><strong>Câu hỏi:</strong> ${q.q}</p>
                                                        <p><strong class="text-success">Đáp án đúng:</strong> ${q.a}</p>
                                                        <p><strong class="text-primary">Bạn chọn:</strong> ${qAnswers[i] || 'Không chọn'}</p>
                                                        ${q.explain ? `<div class="alert alert-info mt-3"><strong>Giải thích:</strong> ${q.explain}</div>` : ''}
                                                    </div>
                                                </div>
                                            </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-center bg-light">
                                <button class="btn btn-primary btn-lg me-2" onclick="backToMenu()"><i class="fas fa-home me-2"></i>Quay lại menu chính</button>
                                <button class="btn btn-secondary btn-lg" onclick="location.reload()"><i class="fas fa-redo me-2"></i>Thi lại</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Update progress if logged in
        if (data.loggedInUser) {
            const user = data.users.find(u => u.username === data.loggedInUser);
            if (user) {
                user.progress.bestScore = Math.max(user.progress.bestScore || 0, examScore);
                persistData();
            }
        }
    }

    // Event listeners
    document.addEventListener('change', (e) => {
        if (e.target.name.startsWith('q')) {
            const idx = parseInt(e.target.name.substring(1));
            qAnswers[idx] = e.target.value;
            qStatus[idx] = qAnswers[idx] === questions[idx].a ? 'correct' : 'wrong';
            renderNavGrid();

            // Disable all radio buttons for this question
            const radios = document.querySelectorAll(`input[name="q${idx}"]`);
            radios.forEach(radio => radio.disabled = true);
        }
    });

    // Initial render
    renderNavGrid();
    showQ(0);
}

function showLocalExams() {
    initLocalExams(); // Ensure questions are loaded
    
    const modal = document.getElementById('localExamsModal');
    const list = document.getElementById('localExamsList');
    if (!modal || !list) return;

    list.className = 'row g-3'; // Use Bootstrap grid
    list.style.maxHeight = '400px';
    list.style.overflowY = 'auto';

    const colors = ['bg-primary', 'bg-success', 'bg-info', 'bg-warning', 'bg-danger'];

    list.innerHTML = '';
    localExams.forEach((exam, index) => {
        const item = document.createElement('div');
        item.className = 'col-md-4'; // 3 columns on medium screens
        const card = document.createElement('div');
        card.className = `card mb-3 p-3 text-white border-0 shadow-sm h-100 ${colors[index % colors.length]} text-center d-flex flex-column align-items-center justify-content-center`;
        card.style.cursor = 'pointer';
        card.style.transition = 'transform 0.3s ease';
        card.onmouseover = () => {
            card.style.transform = 'scale(1.05) rotateY(5deg)';
        };
        card.onmouseout = () => {
            card.style.transform = 'scale(1) rotateY(0deg)';
        };
        card.innerHTML = `
            <div class="d-flex align-items-center mb-2">
                <i class="fas fa-check-circle me-2"></i>
                <h6 class="mb-0">${exam.name} ${exam.year}</h6>
            </div>
            <p class="mb-1">${exam.description}</p>
            <small>${exam.questions.length} câu</small>
        `;
        card.onclick = () => startLocalExam(index);
        item.appendChild(card);
        list.appendChild(item);
    });

    modal.style.display = 'block';
}

function closeLocalExamsModal() {
    const modal = document.getElementById('localExamsModal');
    if (modal) modal.style.display = 'none';
}

function backToMenu() {
    // Clear exam timer if running
    if (examTimer) {
        clearInterval(examTimer);
        examTimer = null;
    }
    
    // Reset UI
    document.getElementById('mainMenu').style.display = 'block';
    document.getElementById('contentArea').innerHTML = '';
    
    // Update progress
    updateProgressSidebar();
};
