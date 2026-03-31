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
        name: 'THCS Lăng Can tỉnh Tuyên Quang', 
        year: 2026, 
        description: 'Đề thi thử THCS Lăng Can lần 1 (sưu tầm và upload bởi admin)',
        questions: [
             {q:"Một vật có khối lượng 2 kg đang chuyển động với vận tốc 5 m/s. Động năng của vật là:",options:["A. 10 J","B. 25 J","C. 50 J","D. 100 J"],a:"B. 25 J",subject:"Vật lý"},
    {q:"Một vật khối lượng 1,5 kg ở độ cao 10 m so với mặt đất. Lấy g =10m/s². Thế năng của vật là:",options:["A. 15 J","B. 100 J","C. 150 J","D. 300 J"],a:"C. 150 J",subject:"Vật lý"},
    {q:"Cơ năng của vật bằng:",options:["A. tổng động năng và thế năng của vật.","B. tích động năng và thế năng của vật.","C. hiệu động năng và thế năng của vật.","D. tổng động năng và công suất của vật."],a:"A. tổng động năng và thế năng của vật.",subject:"Vật lý"},
    {q:"Một máy bơm nước có công suất 500 W hoạt động trong 10 phút. Công của máy bơm thực hiện là:",options:["A. 3 000 J","B. 30 000 J","C. 300 000 J","D. 3 000 000 J"],a:"C. 300 000 J",subject:"Vật lý"},
    {q:"Hiện tượng tia sáng truyền từ môi trường trong suốt này sang môi trường trong suốt khác bị gãy khúc tại mặt phân cách gọi là:",options:["A. phản xạ ánh sáng","B. tán sắc ánh sáng","C. khúc xạ ánh sáng","D. phản xạ toàn phần"],a:"C. khúc xạ ánh sáng",subject:"Vật lý"},
    {q:"Khi chiếu một chùm tia sáng đơn sắc từ không khí vào lăng kính thủy tinh, hiện tượng nào xảy ra?",options:["A. Tia sáng chỉ phản xạ lại trong không khí","B. Tia sáng đi thẳng, không bị lệch","C. Tia sáng bị khúc xạ lệch về phía đáy lăng kính","D. Tia sáng biến mất"],a:"C. Tia sáng bị khúc xạ lệch về phía đáy lăng kính",subject:"Vật lý"},
    {q:"Điện trở của dây dẫn phụ thuộc vào:",options:["A. vật liệu, chiều dài và tiết diện của dây","B. cường độ dòng điện qua dây","C. hiệu điện thế hai đầu dây","D. công suất của dòng điện"],a:"A. vật liệu, chiều dài và tiết diện của dây",subject:"Vật lý"},
    {q:"Biểu thức định luật Ohm là:",options:["A. I = U/R","B. U = I + R","C. R = U.I","D. U = R - I"],a:"A. I = U/R",subject:"Vật lý"},
    {q:"Hai điện trở R1 = 6 Ω, R2 = 3 Ω mắc song song. Điện trở tương đương của đoạn mạch là:",options:["A. 9 Ω","B. 2 Ω","C. 18 Ω","D. 4,5 Ω"],a:"B. 2 Ω",subject:"Vật lý"},
    {q:"Một bóng đèn có công suất định mức 40 W được sử dụng đúng định mức trong 2 giờ. Điện năng tiêu thụ của bóng đèn là:",options:["A. 0,08 kWh","B. 0,8 kWh","C. 8 kWh","D. 80 kWh"],a:"A. 0,08 kWh",subject:"Vật lý"},
    {q:"Nguyên tắc tạo ra dòng điện xoay chiều dựa vào:",options:["A. hiện tượng cảm ứng điện từ","B. hiện tượng điện phân","C. hiện tượng nhiệt điện","D. hiện tượng quang điện"],a:"A. hiện tượng cảm ứng điện từ",subject:"Vật lý"},
    {q:"Dòng điện xoay chiều có thể gây ra tác dụng nào sau đây?",options:["A. Quang học","B. Điện phân","C. Nhiệt, từ","D. Nhiệt, từ, sinh lý"],a:"D. Nhiệt, từ, sinh lý",subject:"Vật lý"},
    {q:"Mạch điện đơn giản gồm nguồn điện cấp điện cho một điện trở đủ lớn. Để xác định công suất của mạch điện, Minh phải dùng ampe kế và vôn kế. Để thực hiện đúng phép đo. Minh cần mắc:",options:["A. ampe kế nối tiếp với vôn kế và nối tiếp với điện trở.","B. vôn kế song song với ampe kế và song song với điện trở.","C. vôn kế song song với điện trở rồi nối tiếp cụm này với ampe kế.","D. ampe kế song song với điện trở rồi nối tiếp cụm này với vôn kế."],a:"C. vôn kế song song với điện trở rồi nối tiếp cụm này với ampe kế.",subject:"Vật lý"},
    {q:"Cho đoạn mạch gồm hai điện trở R1 và R2 mắc song song. Biết hiệu điện thế hai đầu đoạn mạch là U = 24 V; giá trị các điện trở là R1 = R2 = 8 Ω. Trong thời gian 12 phút, công của dòng điện sản ra trong mạch là:",options:["A. 103680 J","B. 1027,8 J","C. 712,8 J","D. 172,8 J"],a:"A. 103680 J",subject:"Vật lý"},
    {q:"Ở điều kiện thường, kim loại ở trạng thái lỏng là:",options:["A. Ag.","B. Cu.","C. Al.","D. Hg."],a:"D. Hg.",subject:"Hóa học"},
    {q:"Nguyên tố nào sau đây là kim loại?",options:["A. Oxi","B. Clo","C. Lưu huỳnh","D. Nhôm"],a:"D. Nhôm",subject:"Hóa học"},
    {q:"Ở nhiệt độ thường, kim loại Fe phản ứng được với dung dịch:",options:["A. FeCl2.","B. NaCl.","C. MgCl2.","D. CuCl2."],a:"D. CuCl2.",subject:"Hóa học"},
    {q:"Những hợp kim có tính chất nào dưới đây được ứng dụng để chế tạo tên lửa, tàu vũ trụ, máy bay?",options:["A. Những hợp kim nhẹ, bền, chịu được nhiệt độ cao, áp suất cao.","B. Những hợp kim không gỉ, có tính dẻo cao.","C. Những hợp kim có tính cứng cao.","D. Những hợp kim có tính dẫn điện tốt."],a:"A. Những hợp kim nhẹ, bền, chịu được nhiệt độ cao, áp suất cao.",subject:"Hóa học"},
    {q:"Kim loại có nhiệt độ nóng chảy thấp nhất là:",options:["A. Ag","B. Au","C. Fe","D. Hg"],a:"D. Hg",subject:"Hóa học"},
    {q:"Carbon vô định hình được điều chế từ than gỗ hay gáo dừa có tên là than hoạt tính. Tính chất nào của than hoạt tính giúp con người chế tạo các thiết bị phòng độc, lọc nước?",options:["A. Than hoạt tính dễ cháy.","B. Than hoạt tính có cấu trúc lớp.","C. Than hoạt tính có khả năng hấp phụ cao.","D. Than hoạt tính có khả năng hòa tan tốt trong nhiều dung môi."],a:"C. Than hoạt tính có khả năng hấp phụ cao.",subject:"Hóa học"},
    {q:"Chất X có công thức cấu tạo: CH3-CH2-CH=CH2. Công thức phân tử của X là:",options:["A. C3H6.","B. C4H10.","C. C4H8.","D. C5H8."],a:"C. C4H8.",subject:"Hóa học"},
    {q:"Cho các phát biểu về alkane: (a) Trong phân tử alkane chỉ chứa liên kết đơn (b) Chỉ có các alkane là chất khí ở điều kiện thường được dùng làm nhiên liệu. (c) Các alkane lỏng được dùng sản xuất xăng, dầu và làm dung môi. (d) Các alkane rắn được dùng làm nến, nhựa đường, nguyên liệu cho quá trình cracking. (e) Công thức chung của alkane là CxH2x+2, với x ≥ 1. Số phát biểu đúng là:",options:["A. 2.","B. 3.","C. 4.","D. 5."],a:"C. 4.",subject:"Hóa học"},
    {q:"Khối lượng khí ethylene cần dùng để phản ứng hết 8 gam bromine trong dung dịch là:",options:["A. 0,7 gam.","B. 7 gam.","C. 1,4 gam.","D. 14 gam."],a:"B. 7 gam.",subject:"Hóa học"},
    {q:"Vì sao không đun bếp than trong phòng kín?",options:["A. Vì than tỏa nhiều nhiệt dẫn đến phòng quá nóng.","B. Vì than cháy tỏa ra rất nhiều khí CO, CO2 có thể gây tử vong nếu hít vào quá nhiều.","C. Vì than không cháy được trong phòng kín.","D. Vì giá thành than khá cao."],a:"B. Vì than cháy tỏa ra rất nhiều khí CO, CO2 có thể gây tử vong nếu hít vào quá nhiều.",subject:"Hóa học"},
    {q:"Ethanol là chất có tác động đến thần kinh trung ương. Khi hàm lượng ethanol trong máu tăng cao sẽ có hiện tượng nôn, mất tỉnh táo. Tên gọi khác của ethanol là:",options:["A. methylic alcohol.","B. ethylic alcohol.","C. acetic acid.","D. formic acid."],a:"B. ethylic alcohol.",subject:"Hóa học"},
    {q:"Biết tỉ khối hơi của X so với khí methane là 3,75. Công thức phân tử của X là:",options:["A. C2H4O2","B. C3H8O.","C. CH4O.","D. C2H6O."],a:"A. C2H4O2",subject:"Hóa học"},
    {q:"Phát biểu nào sau đây là đúng?",options:["A. Acetic acid phản ứng được với muối NaCl và Na2SO4","B. Trong cùng điều kiện, thứ tự độ mạnh acid là: H2SO4 > H2CO3 > CH3COOH","C. Acetic acid có khối lượng mol nhỏ hơn ethylic alcohol","D. Có thể điều chế acetic acid từ ethylic alcohol chỉ bằng một phản ứng hóa học."],a:"D. Có thể điều chế acetic acid từ ethylic alcohol chỉ bằng một phản ứng hóa học.",subject:"Hóa học"},
    {q:"Trùng hợp m tấn ethylene thu được 1,5 tấn polyethylene với hiệu suất phản ứng là 80%. Giá trị của m là:",options:["A. 1,730 tấn.","B. 1,875 tấn.","C. 1,920 tấn.","D. 2,024 tấn"],a:"B. 1,875 tấn.",subject:"Hóa học"},
    {q:"Phân tử nào sau đây có cấu trúc mạch đơn và chứa Uracil (U) thay cho Thymine (T)?",options:["A. DNA.","B. Protein.","C. RNA.","D. Gen."],a:"C. RNA.",subject:"Sinh học"},
    {q:"Trong quá trình tổng hợp chuỗi polypeptide, khuôn mẫu để tổng hợp protein là loại phân tử nào?",options:["A. tRNA.","B. mRNA.","C. rRNA.","D. DNA."],a:"B. mRNA.",subject:"Sinh học"},
    {q:"Nguyên tắc bổ sung trong cấu trúc của DNA dẫn đến hệ quả",options:["A. A = C, G = T.","B. A + T = G + C.","C. A + G = T + C.","D. A + C + T = C + T + G."],a:"C. A + G = T + C.",subject:"Sinh học"},
    {q:"Một gen có 2000 nuclêôtit. Chiều dài của gen là:",options:["A. 3400 Å.","B. 4000 Å.","C. 6800 Å.","D. 10 200 Å."],a:"A. 3400 Å.",subject:"Sinh học"},
    {q:"Quan sát hình ảnh tế bào thực vật đang trải qua quá trình phân bào này. Hãy cho biết tế bào đang ở kì nào của nguyên phân?",options:["A. Kì đầu.","B. Kì giữa.","C. Kì sau.","D. Kì cuối."],a:"D. Kì cuối.",subject:"Sinh học"},
    {q:"Ở kì giữa của nguyên phân, nhiễm sắc thể có đặc điểm nào sau đây?",options:["A. Dạng sợi mảnh.","B. Phân li về hai cực tế bào.","C. Xếp thành một hàng trên mặt phẳng xích đạo.","D. Đã trở thành nhiễm sắc thể đơn."],a:"C. Xếp thành một hàng trên mặt phẳng xích đạo.",subject:"Sinh học"},
    {q:"Mỗi loài sinh vật có bộ nhiễm sắc thể đặc trưng bởi:",options:["A. Số lượng, hình dạng, cấu trúc NST.","B. Số lượng, hình thái NST.","C. Số lượng, cấu trúc NST.","D. Số lượng không đổi."],a:"A. Số lượng, hình dạng, cấu trúc NST.",subject:"Sinh học"},
    {q:"Trong nguyên phân, số tế bào con được tạo ra từ một tế bào mẹ là:",options:["A. 1.","B. 2.","C. 3.","D. 4"],a:"B. 2.",subject:"Sinh học"},
    {q:"Theo quy luật phân li của Menđen, tỉ lệ kiểu hình ở F2 khi lai hai cá thể thuần chủng khác nhau về một cặp tính trạng tương phản là:",options:["A. 3 trội : 1 lặn.","B. 1 trội : 1 lặn.","C. 9 : 3 : 3 : 1.","D. 1 : 2 : 1."],a:"A. 3 trội : 1 lặn.",subject:"Sinh học"},
    {q:"Menđen đã chọn loài cây nào để làm thí nghiệm để phát hiện ra các quy luật di truyền?",options:["A. Cây lúa.","B. Đậu Hà Lan.","C. Ngô.","D. Lúa mì."],a:"B. Đậu Hà Lan.",subject:"Sinh học"},
    {q:"Trong trường hợp gene trội hoàn toàn, tỉ lệ phân li kiểu hình 1:1 ở F1 sẽ xuất hiện trong kết quả của phép lai nào dưới đây?",options:["A. Aa x aa","B. aa x aa","C. AA x aa","D. AA x AA"],a:"A. Aa x aa",subject:"Sinh học"},
    {q:"Theo quy luật phân li, khi một cơ thể dị hợp tử (Aa) hình thành giao tử thì:",options:["A. Chỉ tạo một loại giao tử mang gen A.","B. Chỉ tạo một loại giao tử mang gen a.","C. Tạo hai loại giao tử A và a với tỉ lệ ngang nhau.","D. Tạo giao tử lẫn lộn, không theo tỉ lệ nào."],a:"C. Tạo hai loại giao tử A và a với tỉ lệ ngang nhau.",subject:"Sinh học"}
        ]
    },
    { 
        name: 'THCS Lăng Can tỉnh Tuyên Quang', 
        year: 2026, 
        description: 'Đề thi thử THCS Lăng Can lần 2 (sưu tầm và upload bởi admin)',
        questions: [
    {q:"Dạng năng lượng vật có được khi ở một độ cao nào đó so với mặt đất hoặc vật được chọn làm mốc gọi là gì?",options:["A. Động năng.","B. Thế năng.","C. Quang năng.","D. Hóa năng."],a:"B. Thế năng.",subject:"Vật lý"},
    {q:"Trong các trường hợp dưới đây, trường hợp nào trọng lực thực hiện công?",options:["A. Đầu tàu hỏa đang kéo đoàn tàu chuyển động.","B. Người công nhân dùng ròng rọc cố định kéo vật nặng lên.","C. Ô tô đang chuyển động trên đường nằm ngang.","D. Quả nặng rơi từ trên xuống."],a:"D. Quả nặng rơi từ trên xuống.",subject:"Vật lý"},
    {q:"Một vật có khối lượng m = 250g chuyển động với tốc độ v = 18 m/s. Động năng của vật bằng:",options:["A. 4,5 J","B. 9 J","C. 81 J","D. 450 J"],a:"C. 81 J",subject:"Vật lý"},
    {q:"Một máy cơ có công suất P = 540W, máy đã sinh ra công A = 1080kJ. Vậy thời gian máy đã hoạt động là",options:["A. 20 giây.","B. 200 giây.","C. 2000 giây.","D. 20000 giây."],a:"C. 2000 giây.",subject:"Vật lý"},
    {q:"Phát biểu nào sau đây là nội dung của định luật khúc xạ ánh sáng?",options:["A. Tia khúc xạ nằm trong mặt phẳng tới và ở bên kia pháp tuyến so với tia sáng tới.","B. Góc khúc xạ bao giờ cũng khác 0.","C. Góc tới tăng bao nhiêu lần thì góc khúc xạ tăng bấy nhiêu lần.","D. Góc tới luôn luôn lớn hơn góc khúc xạ."],a:"A. Tia khúc xạ nằm trong mặt phẳng tới và ở bên kia pháp tuyến so với tia sáng tới.",subject:"Vật lý"},
    {q:"Vật sáng AB được đặt vuông góc với trục chính tại tiêu điểm của một thấu kính phân kì có tiêu cự f sẽ thu được ảnh có đặc điểm gì?",options:["A. Ảnh thật, cùng chiều và lớn hơn vật.","B. Ảnh ảo, cùng chiều và lớn hơn vật.","C. Ảnh thật, cùng chiều và nhỏ hơn vật.","D. Ảnh ảo, cùng chiều và nhỏ hơn vật."],a:"D. Ảnh ảo, cùng chiều và nhỏ hơn vật.",subject:"Vật lý"},
    {q:"Đơn vị đo điện trở là:",options:["A. vôn (V).","B. ôm (Ω).","C. ampe (A).","D. oát (W)."],a:"B. ôm (Ω).",subject:"Vật lý"},
    {q:"Hai đầu đoạn mạch có một hiệu điện thế không đổi, nếu điện trở của mạch giảm 2 lần thì công suất điện của mạch:",options:["A. tăng 4 lần.","B. không đổi.","C. giảm 4 lần.","D. tăng 2 lần."],a:"D. tăng 2 lần.",subject:"Vật lý"},
    {q:"Cho hai điện trở R1 = 30Ω và R2 = 25Ω được mắc nối tiếp nhau. Điện trở tương đương của mạch là:",options:["A. Rtđ = 25Ω.","B. Rtđ = 30Ω.","C. Rtđ = 15Ω.","D. Rtđ = 55Ω."],a:"D. Rtđ = 55Ω.",subject:"Vật lý"},
    {q:"Hai điện trở R1, R2 mắc song song với nhau. Biết R1 = 10Ω, điện trở tương đương của mạch là Rtđ = 5Ω. Điện trở R2 nhận giá trị nào dưới đây?",options:["A. 5 Ω.","B. 10 Ω.","C. 15 Ω.","D. 25 Ω."],a:"B. 10 Ω.",subject:"Vật lý"},
    {q:"Nguyên tắc tạo dòng điện xoay chiều dựa trên:",options:["A. Hiện tượng phản xạ.","B. Hiện tượng cảm ứng điện từ.","C. Hiện tượng tán sắc.","D. Hiện tượng nhiễm điện."],a:"B. Hiện tượng cảm ứng điện từ.",subject:"Vật lý"},
    {q:"Chọn phát biểu đúng về dòng điện xoay chiều:",options:["A. Dòng điện xoay chiều có tác dụng từ yếu hơn dòng điện một chiều.","B. Dòng điện xoay chiều có tác dụng nhiệt yếu hơn dòng điện một chiều.","C. Dòng điện xoay chiều có tác dụng sinh lý mạnh hơn dòng điện một chiều.","D. Dòng điện xoay chiều tác dụng một cách không liên tục."],a:"D. Dòng điện xoay chiều tác dụng một cách không liên tục.",subject:"Vật lý"},
    {q:"Con ngựa kéo xe chuyển động đều với tốc độ 9 km/h. Lực kéo là 200N. Công suất của ngựa có giá trị là:",options:["A. 500 W.","B. 200 W","C. 1000 W.","D. 1500W."],a:"A. 500 W.",subject:"Vật lý"},
    {q:"Một vật có khối lượng không đổi đang chuyển động thẳng đều. Khi tốc độ của vật tăng lên gấp đôi thì động năng của vật:",options:["A. giảm một nửa.","B. tăng gấp đôi.","C. không thay đổi.","D. tăng gấp 4 lần."],a:"D. tăng gấp 4 lần.",subject:"Vật lý"},
    {q:"Ở điều kiện thường, dãy các kim loại nào sau đây có khả năng dẫn điện giảm dần theo chiều từ trái qua phải?",options:["A. Ag, Cu, Fe, Al, Au.","B. Ag, Cu, Au, Al, Fe.","C. Au, Ag, Cu, Al, Fe.","D. Al, Cu, Fe, Au, Ag."],a:"B. Ag, Cu, Au, Al, Fe.",subject:"Hóa học"},
    {q:"Trong các chất sau, chất nào được ứng dụng để sản xuất nước Javel, chất tẩy rửa?",options:["A. Carbon.","B. Lưu huỳnh.","C. Silicon.","D. Chlorine."],a:"D. Chlorine.",subject:"Hóa học"},
    {q:"Hơi thủy ngân rất độc, bởi vậy khi làm vỡ nhiệt kế thủy ngân thì chất bột được dùng để rắc lên thủy ngân rồi gom lại là:",options:["A. vôi sống.","B. cát.","C. muối ăn.","D. lưu huỳnh."],a:"D. lưu huỳnh.",subject:"Hóa học"},
    {q:"Carbon vô định hình được điều chế từ than gỗ hay gáo dừa có tên là than hoạt tính. Tính chất nào của than hoạt tính giúp con người chế tạo các thiết bị phòng độc, lọc nước?",options:["A. Than hoạt tính dễ cháy.","B. Than hoạt tính có cấu trúc lớp.","C. Than hoạt tính có khả năng hấp phụ cao.","D. Than hoạt tính có khả năng hòa tan tốt trong nhiều dung môi."],a:"C. Than hoạt tính có khả năng hấp phụ cao.",subject:"Hóa học"},
    {q:"Chọn phát biểu sai.",options:["A. Kim loại dẫn điện tốt hơn phi kim.","B. Phi kim dẫn điện tốt hơn kim loại.","C. Phi kim có nhiệt độ sôi thấp hơn kim loại.","D. Phi kim có nhiệt độ nóng chảy thấp hơn kim loại."],a:"B. Phi kim dẫn điện tốt hơn kim loại.",subject:"Hóa học"},
    {q:"Đuy - ra là một loại hợp kim của nhôm, nhẹ và bền thường được dùng trong công nghiệp chế tạo máy bay, ô tô, tàu vũ trụ… Hợp kim Đuy - ra có thành phần là:",options:["A. Al, Cu và một số nguyên tố khác như Mn, Mg,...","B. Al2O3, K2O và một số nguyên tố khác như Mn, Fe, Si.","C. Al, Ag và một số nguyên tố khác như Mn, Fe, Si.","D. Al2O3 và một số nguyên tố khác như Mn, Fe, Si."],a:"A. Al, Cu và một số nguyên tố khác như Mn, Mg,...",subject:"Hóa học"},
    {q:"Chất nào sau đây thuộc loại hợp chất hữu cơ?",options:["A. CO2.","B. CO.","C. K2CO3","D. CH4"],a:"D. CH4",subject:"Hóa học"},
    {q:"Liên kết hóa học trong phân tử chất hữu cơ chủ yếu là liên kết:",options:["A. Ion","B. Hydrogen.","C. Kim loại","D. Cộng hóa trị"],a:"D. Cộng hóa trị",subject:"Hóa học"},
    {q:"Đốt cháy một hợp chất hữu cơ Y thu được hơi nước và khí carbon dioxide, khí nitrogen. Trong hợp chất hữu cơ Y chắc chắn có chứa các nguyên tố nào?",options:["A. C, H, O","B. C, H, P","C. C, H, S","D. C, H, N"],a:"D. C, H, N",subject:"Hóa học"},
    {q:"Gas, nhiên liệu phổ biến hiện nay có thành phần chính là propane và butane. Nhiệt lượng giải phóng khi đốt cháy hoàn toàn 1 kg một loại gas là khoảng 50 400 kJ. Biết để làm nóng 1 kg nước lên 1 độ thì cần cung cấp nhiệt lượng là 4 200 J. Để đun sôi 30kg nước từ nhiệt độ 20oC cần cung cấp bao nhiêu kJ nhiệt?",options:["A. 2520 kJ.","B. 5040 kJ.","C. 10080 kJ.","D. 6048 kJ."],a:"C. 10080 kJ.",subject:"Hóa học"},
    {q:"Tính chất vật lí của ethylic alcohol là:",options:["A. chất lỏng không màu, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như ioden, benzen,…","B. chất lỏng màu hồng , nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như: iodine, benzen,…","C. chất lỏng không màu, không tan trong nước, hòa tan được nhiều chất như: iodine, benzen,…","D. chất lỏng không màu, nặng hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như: iodine, benzen,…"],a:"A. chất lỏng không màu, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như ioden, benzen,…",subject:"Hóa học"},
    {q:"Giấm ăn có nồng độ acetic acid thường là:",options:["A. 1% – 2%","B. 2% - 5%","C. 10 – 12%","D. 25 – 30%"],a:"B. 2% - 5%",subject:"Hóa học"},
    {q:"Hòa tan 30ml rượu Ethylic nguyên chất vào 90ml nước cất thu được:",options:["A. rượu Ethylic có độ rượu là 200","B. rượu Ethylic có độ rượu là 250","C. rượu Ethylic có độ rượu là 300","D. rượu Ethylic có độ rượu là 350"],a:"B. rượu Ethylic có độ rượu là 250",subject:"Hóa học"},
    {q:"Cho 6,5 gam kim loại Zinc vào 200ml dung dịch acid acetic, nồng độ mol của dung dịch acid acetic đã dùng là:",options:["A. 0,04M","B. 0,05M","C. 0,1M","D. 1M"],a:"D. 1M",subject:"Hóa học"},
    {q:"Một đoạn phân tử DNA ở sinh vật nhân thực có trình tự nucleotide trên mạch gốc là 3'...AAACAATGGGGA…5'. Trình tự nucleotide trên mạch mới được tổng hợp của đoạn DNA này là",options:["A. 5'...AAAGTTACCGGT…3'.","B. 5'...GGCCAATGGGGA…3'.","C. 5'...GTTGAAACCCCT…3'.","D. 5'...TTTGTTACCCCT…3'."],a:"D. 5'...TTTGTTACCCCT…3'.",subject:"Sinh học"},
    {q:"Nhận xét nào sau đây đúng khi nói về đặc điểm cấu tạo của phân tử RNA?",options:["A. Cấu tạo 2 mạch xoắn song song.","B. Kích thước và khối lượng nhỏ hơn so với phân tử DNA.","C. Cấu tạo bằng 2 mạch thẳng.","D. Gồm có 4 loại đơn phân là A, T, G, C."],a:"B. Kích thước và khối lượng nhỏ hơn so với phân tử DNA.",subject:"Sinh học"},
    {q:"Phân tử nào sau đây được dùng làm khuôn cho quá trình dịch mã?",options:["A. rRNA.","B. tRNA.","C. mRNA.","D. Gene."],a:"C. mRNA.",subject:"Sinh học"},
    {q:"Một gen có chiều dài 5100Å, chu kỳ xoắn của gen là:",options:["A. 150 vòng.","B. 250 vòng.","C. 200 vòng.","D. 100 vòng."],a:"A. 150 vòng.",subject:"Sinh học"},
    {q:"Trong quá trình phân bào, NST được quan sát rõ nhất dưới kính hiển vi ở kì nào, vì sao?",options:["A. Kích thước và khối lượng nhỏ hơn so với phân tử DNA.","B. Kì sau, vì lúc này NST phân ly nên quan sát được rõ hơn các kì sau.","C. Kì trung gian, vì lúc này DNA đã tự nhân đôi xong.","D. Kì giữa, vì lúc này NST đóng xoắn tối đa."],a:"D. Kì giữa, vì lúc này NST đóng xoắn tối đa.",subject:"Sinh học"},
    {q:"Một phân tử DNA tái bản liên tiếp 5 lần sẽ tạo ra bao nhiêu phân tử DNA?",options:["A. 6.","B. 25.","C. 32.","D. 64."],a:"C. 32.",subject:"Sinh học"},
    {q:"Bộ nhiễm sắc thể của loài sinh sản hữu tính được duy trì ổn định qua các thế hệ là nhờ:",options:["A. Sự phối hợp của quá trình nguyên phân, giảm phân và thụ tinh.","B. Sự phối hợp của quá trình nguyên phân và thụ tinh.","C. Sự phối hợp của quá trình giảm phân và thụ tinh.","D. Sự phối hợp của quá trình nguyên phân và giảm phân."],a:"A. Sự phối hợp của quá trình nguyên phân, giảm phân và thụ tinh.",subject:"Sinh học"},
    {q:"Loại protein nào dưới đây tham gia cấu tạo nên nhiễm sắc thể ở sinh vật nhân thực?",options:["A. Papain.","B. Histone.","C. Glucagon.","D. ATPase."],a:"B. Histone.",subject:"Sinh học"},
    {q:"Lai phân tích là phép lai:",options:["A. Giữa cơ thể mang tính trạng trội với cơ thể mang tính trạng lặn tương phản để kiểm tra kiểu gen.","B. Giữa hai cơ thể bố mẹ cùng loài có tính trạng tương phản với nhau.","C. Giữa hai cơ thể thuần chủng khác nhau về một cặp tính trạng tương phản.","D. Giữa cơ thể mang tính trạng trội với cơ thể mang tính trạng lặn để kiểm tra kiểu gen."],a:"A. Giữa cơ thể mang tính trạng trội với cơ thể mang tính trạng lặn tương phản để kiểm tra kiểu gen.",subject:"Sinh học"},
    {q:"Để các allele của một gen phân li đồng đều về các giao tử thì cần có điều kiện gì?",options:["A. Bố và mẹ phải thuần chủng.","B. Quá trình giảm phân phải xảy ra bình thường.","C. Alen trội phải trội hoàn toàn so với allele lặn.","D. Số lượng cá thế lai phải lớn."],a:"B. Quá trình giảm phân phải xảy ra bình thường.",subject:"Sinh học"},
    {q:"Trong thí nghiệm lai một cặp tính trạng, Menden đã đề ra giả thuyết về sự phân ly của các cặp:",options:["A. Nhân tố di truyền.","B. Allele.","C. Tính trạng.","D. Gene."],a:"A. Nhân tố di truyền.",subject:"Sinh học"},
    {q:"Tính trạng là:",options:["A. Những biểu hiện của kiểu gene thành kiểu hình.","B. Kiểu hình bên ngoài cơ thể sinh vật.","C. Những đặc điểm về hình thái, cấu tạo, sinh lý của một cơ thể.","D. Các đặc điểm bên trong cơ thể sinh vật."],a:"C. Những đặc điểm về hình thái, cấu tạo, sinh lý của một cơ thể.",subject:"Sinh học"}
]
},
    { 
        name: 'THCS Lăng Can tỉnh Tuyên Quang', 
        year: 2026, 
        description: 'Đề thi thử THCS Lăng Can lần 3 (sưu tầm và upload bởi admin)',
        questions: [
    {q:"Một vật có khối lượng 4 kg chuyển động với vận tốc 3 m/s. Động năng của vật là bao nhiêu?",options:["A. 6 J.","B. 18 J.","C. 24 J.","D. 36 J."],a:"B. 18 J.",subject:"Vật lý"},
    {q:"Một vật có khối lượng 2 kg được đặt ở độ cao 5 m so với mặt đất. Lấy g =10 m/s². Thế năng của vật là bao nhiêu?",options:["A. 25 J.","B. 50 J.","C. 75 J.","D. 100 J."],a:"D. 100 J.",subject:"Vật lý"},
    {q:"Cơ năng của một vật được xác định bằng:",options:["A. tổng động năng và thế năng của vật.","B. hiệu động năng và thế năng của vật.","C. tích động năng và thế năng của vật.","D. tổng động năng và công của lực tác dụng."],a:"A. tổng động năng và thế năng của vật.",subject:"Vật lý"},
    {q:"Một động cơ điện có công suất 200 W hoạt động trong 15 phút. Công mà động cơ thực hiện là:",options:["A. 3 000 J.","B. 30 000 J.","C. 180 000 J.","D. 3 000 000 J."],a:"C. 180 000 J.",subject:"Vật lý"},
    {q:"Hiện tượng tia sáng bị bật trở lại môi trường cũ khi gặp mặt phân cách gọi là:",options:["A. khúc xạ ánh sang.","B. phản xạ ánh sang.","C. tán sắc ánh sang.","D. phản xạ toàn phần."],a:"B. phản xạ ánh sang.",subject:"Vật lý"},
    {q:"Khi chiếu tia sáng từ không khí xiên góc vào nước, hiện tượng xảy ra là:",options:["A. tia sáng truyền thẳng.","B. tia sáng bị phản xạ hoàn toàn.","C. tia sáng bị khúc xạ.","D. tia sáng biến mất."],a:"C. tia sáng bị khúc xạ.",subject:"Vật lý"},
    {q:"Điện trở của dây dẫn không phụ thuộc vào yếu tố nào sau đây?",options:["A. Chiều dài dây.","B. Tiết diện dây.","C. Vật liệu làm dây.","D. Cường độ dòng điện qua dây."],a:"D. Cường độ dòng điện qua dây.",subject:"Vật lý"},
    {q:"Công thức biểu diễn đúng định luật Ôm là:",options:["A. I = U/R.","B. R = I/U.","C. U = I – R.","D. I = U + R."],a:"A. I = U/R.",subject:"Vật lý"},
    {q:"Hai điện trở R₁ = 4 Ω và R₂ = 4 Ω mắc song song. Điện trở tương đương của đoạn mạch là:",options:["A. 2 Ω","B. 4 Ω","C. 8 Ω","D. 16 Ω"],a:"A. 2 Ω",subject:"Vật lý"},
    {q:"Một thiết bị điện có công suất 100 W hoạt động liên tục trong 3 giờ. Điện năng tiêu thụ của thiết bị là:",options:["A. 0,1 kWh.","B. 0,3 kWh.","C. 3 kWh.","D. 30 kWh."],a:"B. 0,3 kWh.",subject:"Vật lý"},
    {q:"Dòng điện xoay chiều được tạo ra dựa trên:",options:["A. hiện tượng cảm ứng điện từ.","B. hiện tượng điện phân.","C. tác dụng nhiệt của dòng điện.","D. hiện tượng phát quang."],a:"A. hiện tượng cảm ứng điện từ.",subject:"Vật lý"},
    {q:"Dòng điện xoay chiều có thể gây ra các tác dụng:",options:["A. quang học.","B. điện phân.","C. nhiệt và từ.","D. nhiệt, từ và sinh lý."],a:"D. nhiệt, từ và sinh lý.",subject:"Vật lý"},
    {q:"Để đo công suất tiêu thụ của một điện trở trong mạch điện, cần mắc:",options:["A. ampe kế song song, vôn kế nối tiếp với điện trở.","B. vôn kế song song với điện trở, ampe kế nối tiếp mạch.","C. ampe kế song song với điện trở, vôn kế nối tiếp mạch.","D. ampe kế nối tiếp với vôn kế và điện trở."],a:"B. vôn kế song song với điện trở, ampe kế nối tiếp mạch.",subject:"Vật lý"},
    {q:"Một đoạn mạch gồm hai điện trở R₁ = R₂ = 12 Ω mắc song song, hiệu điện thế hai đầu mạch là 24 V. Trong thời gian 10 phút, công của dòng điện sinh ra trong mạch là:",options:["A. 57 600 J","B. 72 300 J","C. 96 000 J","D. 120 000 J"],a:"A. 57 600 J",subject:"Vật lý"},
    {q:"Khi cho nhôm (aluminium) tác dụng với O2 trên ngọn lửa đèn cồn tạo thành sản phẩm là:",options:["A. Al2O3.","B. Al(OH)3.","C. AlCl3.","D. AlO."],a:"A. Al2O3.",subject:"Hóa học"},
    {q:"Kim loại nào sau đây hoạt động hóa học mạnh nhất?",options:["A. Fe.","B. K.","C. Mg.","D. Al."],a:"B. K.",subject:"Hóa học"},
    {q:"Cho dãy các kim loại: Al, Cu, Fe, Ag. Số kim loại trong dãy phản ứng được với dung dịch H2SO4 loãng là:",options:["A. 1.","B. 2.","C. 3","D. 4."],a:"B. 2.",subject:"Hóa học"},
    {q:"Cho lá đồng vào dung dịch HCl có hiện tượng gì xảy ra?",options:["A. Lá đồng tan dần, có khí không màu thoát ra.","B. Lá đồng không bị hòa tan.","C. Lá đồng tan dần, dung dịch chuyển thành màu xanh lam.","D. Lá đồng tan dần, màu của dung dịch không thay đổi."],a:"B. Lá đồng không bị hòa tan.",subject:"Hóa học"},
    {q:"Nguyên liệu chính dùng để sản xuất nhôm là",options:["A. quặng maghetite.","B. quặng bauxite.","C. quặng sphalerite.","D. quặng hematite."],a:"B. quặng bauxite.",subject:"Hóa học"},
    {q:"Nguyên tố nào sau đây là phi kim?",options:["A. Mg.","B. Cu.","C. C.","D. Ca."],a:"C. C.",subject:"Hóa học"},
    {q:"Trong phân tử methane có bao nhiêu nguyên tử C?",options:["A. 1.","B. 2.","C. 3.","D. 4."],a:"A. 1.",subject:"Hóa học"},
    {q:"Cho các công thức phân tử sau: CH4, C2H2, C3H8, C2H5OH, C4H10, C5H8. Có bao nhiêu chất là alkane?",options:["A. 2.","B. 3.","C. 4.","D. 5."],a:"B. 3.",subject:"Hóa học"},
    {q:"Đốt cháy hoàn toàn hỗn hợp gồm 0,1 mol C2H4 và 0,2 mol C3H6 thu được V lít khí CO2 (đkc). Giá trị của V là bao nhiêu?",options:["A. 19,823 lít.","B. 19,382 lít.","C. 19,832 lít.","D. 19,283 lít."],a:"A. 19,823 lít.",subject:"Hóa học"},
    {q:"Để dập tắt đám cháy nhỏ do xăng, dầu người ta dùng biện pháp:",options:["A. phun nước vào ngọn lửa.","B. phủ cát vào ngọn lửa.","C. thổi oxygen vào ngọn lửa.","D. phun dung dịch muối ăn vào ngọn lửa."],a:"B. phủ cát vào ngọn lửa.",subject:"Hóa học"},
    {q:"Ethylic alcohol trong phân tử gồm:",options:["A. nhóm ethyl (–C2H5) liên kết với nhóm – OH.","B. nhóm methyl (–CH3) liên kết với nhóm – OH.","C. nhóm hydrocarbon liên kết với nhóm – OH.","D. nhóm methyl (–CH3) liên kết với oxygen."],a:"A. nhóm ethyl (–C2H5) liên kết với nhóm – OH.",subject:"Hóa học"},
    {q:"Trên nhãn của một chai rượu ghi 18o có nghĩa là:",options:["A. nhiệt độ sôi của ethylic alcohol là 18oC.","B. nhiệt độ đông đặc của ethylic alcohol là 18oC.","C. trong 100 mL rượu có 18 mL ethylic alcohol nguyên chất và 82 mL nước.","D. trong 100 mL rượu có 18 mL nước và 82 mL ethylic alcohol nguyên chất"],a:"C. trong 100 mL rượu có 18 mL ethylic alcohol nguyên chất và 82 mL nước.",subject:"Hóa học"},
    {q:"Số liên kết đơn và đôi trong phân tử acetic acid lần lượt là:",options:["A. 6 và 1.","B. 5 và 1.","C. 6 và 2.","D. 5 và 2."],a:"A. 6 và 1.",subject:"Hóa học"},
    {q:"Trùng hợp m tấn ethylene thu được 1,5 tấn polyethylene với hiệu suất phản ứng là 80%. Giá trị của m là:",options:["A. 1,730 tấn.","B. 1,875 tấn.","C. 1,920 tấn.","D. 2,024 tấn"],a:"B. 1,875 tấn.",subject:"Hóa học"},
    {q:"Nguyên tắc bổ sung trong cấu trúc của DNA dẫn đến hệ quả",options:["A. A = C, G = T.","B. A + T = G + C.","C. A + G = T + C.","D. A + C + T = C + T + G."],a:"C. A + G = T + C.",subject:"Sinh học"},
    {q:"Nhận xét nào sau đây đúng khi nói về đặc điểm cấu tạo của phân tử RNA?",options:["A. Cấu tạo 2 mạch xoắn song song.","B. Cấu tạo bằng 2 mạch thẳng.","C. Kích thước và khối lượng nhỏ hơn so với phân tử DNA.","D. Gồm có 4 loại đơn phân là A, T, G, C"],a:"C. Kích thước và khối lượng nhỏ hơn so với phân tử DNA.",subject:"Sinh học"},
    {q:"Quá trình truyền đạt thông tin di truyền từ DNA sang mRNA được gọi là quá trình:",options:["A. Tái bản DNA.","B. Đột biến DNA.","C. Dịch mã.","D. Phiên mã."],a:"D. Phiên mã.",subject:"Sinh học"},
    {q:"Một gen có chiều dài 5100Å, chu kỳ xoắn của gen là:",options:["A. 100 vòng.","B. 250 vòng.","C. 200 vòng.","D. 150 vòng."],a:"D. 150 vòng.",subject:"Sinh học"},
    {q:"Trong quá trình phân bào, NST được quan sát rõ nhất dưới kính hiển vi ở kì nào, vì sao?",options:["A. Kì giữa, vì lúc này NST đóng xoắn tối đa.","B. Kì sau, vì lúc này NST phân ly nên quan sát được rõ hơn các kì sau.","C. Kì trung gian, vì lúc này DNA đã tự nhân đôi xong.","D. Kì trước vì lúc này NST đóng xoắn tối đa."],a:"A. Kì giữa, vì lúc này NST đóng xoắn tối đa.",subject:"Sinh học"},
    {q:"Mỗi loài sinh vật có bộ nhiễm sắc thể đặc trưng bởi:",options:["A. Số lượng, hình dạng, cấu trúc NST.","B. Số lượng, hình thái NST.","C. Số lượng, cấu trúc NST.","D. Số lượng không đổi."],a:"A. Số lượng, hình dạng, cấu trúc NST.",subject:"Sinh học"},
    {q:"Bộ nhiễm sắc thể của loài sinh sản hữu tính được duy trì ổn định qua các thế hệ là nhờ:",options:["A. Sự phối hợp của quá trình nguyên phân và giảm phân.","B. Sự phối hợp của quá trình nguyên phân và thụ tinh.","C. Sự phối hợp của quá trình giảm phân và thụ tinh.","D. Sự phối hợp của quá trình nguyên phân, giảm phân và thụ tinh."],a:"D. Sự phối hợp của quá trình nguyên phân, giảm phân và thụ tinh.",subject:"Sinh học"},
    {q:"Kết thúc giảm phân, một tế bào sinh trứng sẽ tạo ra",options:["A. 4 tế bào trứng.","B. 2 tế bào trứng và 2 thể cực.","C. 1 tế bào trứng và 3 thể cực.","D. 3 tế bào trứng và 1 thể cực."],a:"C. 1 tế bào trứng và 3 thể cực.",subject:"Sinh học"},
    {q:"Trong trường hợp gene trội hoàn toàn, tỉ lệ phân li kiểu hình 1:1 ở F1 sẽ xuất hiện trong kết quả của phép lai nào dưới đây?",options:["A. Aa x aa","B. aa x aa","C. AA x Aa","D. AA x AA"],a:"A. Aa x aa",subject:"Sinh học"},
    {q:"Để các allele của một gen phân li đồng đều về các giao tử thì cần có điều kiện gì?",options:["A. Bố và mẹ phải thuần chủng","B. Số lượng cá thế lai phải lớn","C. Alen trội phải trội hoàn toàn so với allele lặn","D. Quá trình giảm phân phải xảy ra bình thường"],a:"D. Quá trình giảm phân phải xảy ra bình thường",subject:"Sinh học"},
    {q:"Trong thí nghiệm lai một cặp tính trạng, Menden đã đề ra giả thuyết về sự phân ly của các cặp:",options:["A. gene","B. allele","C. Tính trạng","D. Nhân tố di truyền"],a:"D. Nhân tố di truyền",subject:"Sinh học"},
    {q:"Trong trường hợp gene trội hoàn toàn, khi lai giữa hai bố mẹ thuần chủng, khác nhau 2 cặp tính trạng tương phản, sau đó F1 tự thụ phấn, tỉ lệ kiểu hình của F2 là:",options:["A. 9:3:3:1","B. 1:1:1:1","C. 9:6:1","D. 3:1"],a:"A. 9:3:3:1",subject:"Sinh học"}
        ]
    },
    { 
        name: 'THCS Lăng Can tỉnh Tuyên Quang', 
        year: 2026, 
        description: 'Đề thi thử THCS Lăng Can lần 4 (sưu tầm và upload bởi admin)',
        questions: [
    {q:"Dạng năng lượng mà vật có được do chuyển động gọi là:",options:["A. Thế năng.","B. Hóa năng.","C. Động năng.","D. Quang năng."],a:"C. Động năng.",subject:"Vật lý"},
    {q:"Trường hợp nào sau đây lực ma sát thực hiện công?",options:["A. Quyển sách nằm yên trên mặt bàn.","B. Người đẩy thùng hàng trượt trên sàn.","C. Vật đứng yên trên mặt đất.","D. Ô tô đỗ bên đường."],a:"B. Người đẩy thùng hàng trượt trên sàn.",subject:"Vật lý"},
    {q:"Một vật có khối lượng 0,5 kg chuyển động với vận tốc 6 m/s. Động năng của vật là:",options:["A. 6 J.","B. 9 J.","C. 18 J.","D. 36 J."],a:"B. 9 J.",subject:"Vật lý"},
    {q:"Một máy nâng vật có công suất 400 W. Trong thời gian 5 phút, máy thực hiện được công là:",options:["A. 12 000 J.","B. 120 000 J.","C. 240 000 J.","D. 2 400 000 J."],a:"B. 120 000 J.",subject:"Vật lý"},
    {q:"Hiện tượng tia sáng truyền từ môi trường trong suốt này sang môi trường trong suốt khác và bị đổi hướng gọi là:",options:["A. phản xạ ánh sáng.","B. tán sắc ánh sáng.","C. khúc xạ ánh sáng.","D. phản xạ toàn phần."],a:"C. khúc xạ ánh sáng.",subject:"Vật lý"},
    {q:"Khi chiếu tia sáng từ không khí vào nước với góc tới khác 0°, tia khúc xạ sẽ",options:["A. lệch xa pháp tuyến.","B. lệch gần pháp tuyến.","C. truyền thẳng không đổi hướng.","D. phản xạ toàn phần."],a:"B. lệch gần pháp tuyến.",subject:"Vật lý"},
    {q:"Điện trở của dây dẫn không phụ thuộc vào yếu tố nào sau đây?",options:["A. Chiều dài dây.","B. Tiết diện dây.","C. Vật liệu làm dây.","D. Hiệu điện thế hai đầu dây."],a:"D. Hiệu điện thế hai đầu dây.",subject:"Vật lý"},
    {q:"Giữ nguyên hiệu điện thế giữa hai đầu đoạn mạch. Nếu điện trở của mạch tăng 2 lần thì công suất điện của mạch:",options:["A. tăng 2 lần.","B. giảm 2 lần.","C. giảm 4 lần.","D. tăng 4 lần."],a:"B. giảm 2 lần.",subject:"Vật lý"},
    {q:"Hai điện trở R₁ = 12 Ω và R₂ = 18 Ω mắc nối tiếp. Điện trở tương đương của mạch là:",options:["A. 6 Ω.","B. 15 Ω.","C. 30 Ω.","D. 216 Ω."],a:"C. 30 Ω.",subject:"Vật lý"},
    {q:"Hai điện trở R₁ = 6 Ω và R₂ = 3 Ω mắc song song. Điện trở tương đương của mạch là:",options:["A. 9 Ω.","B. 2 Ω.","C. 4,5 Ω.","D. 18 Ω."],a:"B. 2 Ω.",subject:"Vật lý"},
    {q:"Dòng điện xoay chiều được tạo ra dựa trên",options:["A. hiện tượng nhiệt điện.","B. hiện tượng cảm ứng điện từ.","C. hiện tượng điện phân.","D. hiện tượng quang điện."],a:"B. hiện tượng cảm ứng điện từ.",subject:"Vật lý"},
    {q:"Dòng điện xoay chiều có thể gây ra các tác dụng nào sau đây?",options:["A. Quang học.","B. Điện phân.","C. Nhiệt và từ.","D. Nhiệt, từ và sinh lý."],a:"D. Nhiệt, từ và sinh lý.",subject:"Vật lý"},
    {q:"Một người kéo xe chuyển động đều với vận tốc 3 m/s. Lực kéo tác dụng lên xe là 150 N. Công suất của người đó là:",options:["A. 150 W.","B. 300 W.","C. 450 W.","D. 600 W."],a:"C. 450 W.",subject:"Vật lý"},
    {q:"Một vật có khối lượng không đổi. Nếu vận tốc của vật tăng gấp 3 lần thì động năng của vật:",options:["A. tăng gấp 3 lần.","B. tăng gấp 6 lần.","C. tăng gấp 9 lần.","D. không thay đổi."],a:"C. tăng gấp 9 lần.",subject:"Vật lý"},
    {q:"Mercury (Hg) được sử dụng trong nhiệt kế y tế là do kim loại này có tính chất vật lí đặc trưng là:",options:["A. nhiệt độ nóng chảy thấp nhất.","B. dẫn điện tốt.","C. có ánh kim.","D. khối lượng riêng nhỏ."],a:"A. nhiệt độ nóng chảy thấp nhất.",subject:"Hóa học"},
    {q:"Trong công nghiệp để điều chế kim loại Na người ta sử dụng phương pháp nào dưới đây?",options:["A. Điện phân dung dịch.","B. Điện phân nóng chảy.","C. Nhiệt luyện.","D. Thủy luyện."],a:"B. Điện phân nóng chảy.",subject:"Hóa học"},
    {q:"Trong các oxide sau, oxide nào oxide base?",options:["A. SO2.","B. CO2.","C. P2O5.","D. MgO."],a:"D. MgO.",subject:"Hóa học"},
    {q:"Trường hợp nào sau đây không xảy ra phản ứng hóa học?",options:["A. Thả dây đồng ( Copper) vào dung dịch AgNO3.","B. Thả vài viên kẽm (Zinc) vào dung dịch hydrochloric acid loãng.","C. Rắc bột nhôm ( Alunimium) lên ngọn lửa đèn cồn.","D. Thả dây đồng ( Copper) vào nước."],a:"D. Thả dây đồng ( Copper) vào nước.",subject:"Hóa học"},
    {q:"Cho các phát biểu sau: (a) Kim loại dẻo nhất là vàng. (b) Kim loại dẫn điện tốt nhất là bạc. (c) Tất cả các kim loại đều tác dụng với dung dịch HCl. (d) Trong dãy hoạt động hóa học của kim loại, các kim loại đứng trước Mg tác dụng được với nước ở nhiệt độ thường. (e) Tất cả các kim loại mạnh đều đẩy được các kim loại yếu hơn ra khỏi dung dịch muối. Số phát biểu đúng là:",options:["A. 1.","B. 2.","C. 3.","D. 4."],a:"C. 3.",subject:"Hóa học"},
    {q:"Gang và thép là hợp kim của:",options:["A. nhôm với đồng.","B. sắt với carbon.","C. carbon với silicon.","D. sắt với nhôm."],a:"B. sắt với carbon.",subject:"Hóa học"},
    {q:"Cho các chất CH4, C2H2, HCN, NaHCO3, C2H5OH. Có bao nhiêu chất là hợp chất hữu cơ?",options:["A. 2.","B. 3.","C. 4.","D. 5."],a:"B. 3.",subject:"Hóa học"},
    {q:"Nhận xét nào sau đây là đúng?",options:["A. Nhiên liệu lỏng được dùng chủ yếu trong đun nấu, thắp sáng.","B. Than là nhiên liệu rắn, cháy hoàn toàn, ít gây độc hại.","C. Sử dụng than khi đun nấu là bảo vệ môi trường.","D. Nhiên liệu khí dễ cháy hoàn toàn, ít gây ô nhiễm môi trường."],a:"D. Nhiên liệu khí dễ cháy hoàn toàn, ít gây ô nhiễm môi trường.",subject:"Hóa học"},
    {q:"Thành phần phần trăm về khối lượng của các nguyên tố carbon và hydrogen trong C2H6 là:",options:["A. 50% và 50%.","B. 40% và 60%.","C. 70% và 30%.","D. 80% và 20%."],a:"D. 80% và 20%.",subject:"Hóa học"},
    {q:"Khí thiên nhiên và khí mỏ dầu là nhiên liệu ít gây ô nhiễm hơn so với than mỏ, có hiệu quả sản xuất công nghiệp. Thành phần chính của khí thiên nhiên và khí mỏ dầu là:",options:["A. ethane.","B. propane.","C. butane.","D. methane"],a:"D. methane",subject:"Hóa học"},
    {q:"Tính chất vật lí của ethylic alcohol là:",options:["A. chất lỏng không màu, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzene,…","B. chất lỏng màu hồng, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzene,…","C. chất lỏng không màu, không tan trong nước, hòa tan được nhiều chất như iodine, benzene,…","D. chất lỏng không màu, nặng hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzene,…"],a:"A. chất lỏng không màu, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzene,…",subject:"Hóa học"},
    {q:"Trên nhãn chai rượu có ghi 31o có nghĩa là:",options:["A. nhiệt độ sôi của ethylic alcohol là 31oC.","B. trong 100 mL dung dịch rượu có 31 mL nước và 69 mL ethylic alcohol nguyên chất.","C. trong 100 mL dung dịch rượu có 31 mL ethylic alcohol nguyên chất và 69 mL nước.","D. trong 100 mL dung dịch rượu có 31 mL ethylic alcohol nguyên chất và 100 mL nước."],a:"C. trong 100 mL dung dịch rượu có 31 mL ethylic alcohol nguyên chất và 69 mL nước.",subject:"Hóa học"},
    {q:"Ethylic alcohol cháy trong không khí, hiện tượng quan sát được là:",options:["A. ngọn lửa màu đỏ, tỏa nhiều nhiệt.","B. ngọn lửa màu vàng, tỏa nhiều nhiệt.","C. ngọn lửa màu đỏ, không tỏa nhiệt.","D. ngọn lửa màu xanh, tỏa nhiều nhiệt."],a:"D. ngọn lửa màu xanh, tỏa nhiều nhiệt.",subject:"Hóa học"},
    {q:"Một đơn vị cồn tương đương 10 mL (hoặc 7,89 gam) ethylic alcohol nguyên chất. Theo khuyến cáo của ngành y tế, để đảm bảo sức khỏe mỗi người trưởng thành không nên uống quá 2 đơn vị cồn mỗi ngày. Vậy mỗi người trưởng thành không nên uống quá bao nhiêu mL rượu vodka 30o một ngày.",options:["A. 66,67 mL","B. 6,667 mL","C. 666,7 mL","D. 0,6667 mL"],a:"A. 66,67 mL",subject:"Hóa học"},
    {q:"Kết quả cuối cùng của quá trình sao chép DNA là gì?",options:["A. Hai phân tử DNA giống nhau.","B. Một phân tử DNA duy nhất.","C. Hai phân tử RNA giống nhau.","D. Một phân tử RNA và một phân tử DNA."],a:"A. Hai phân tử DNA giống nhau.",subject:"Sinh học"},
    {q:"Nguyên tắc bổ sung được thể hiện trong cơ chế phiên mã là:",options:["A. A liên kết với T, G liên kết với C.","B. A liên kết với U, G liên kết với C.","C. A liên kết với G, T liên kết với C.","D. A liên kết với C, G liên kết với T."],a:"B. A liên kết với U, G liên kết với C.",subject:"Sinh học"},
    {q:"Phát biểu nào sau đây đúng về quá trình tái bản DNA?",options:["A. Quá trình tái bản DNA là sự sao chép các phân tử DNA sau mỗi lần phân bào.","B. Enzyme DNA polymerase phá vỡ cấu trúc xoắn kép, tách mạch DNA thành hai mạch đơn.","C. Mạch mới được tổng hợp theo nguyên tắc bổ sung với mạch làm khuôn (A liên kết với T; G liên kết với C).","D. Từ một phân tử DNA đã tạo ra hai phân tử DNA con có hai mạch mới hoàn toàn và có cấu trúc giống DNA mẹ ban đầu."],a:"C. Mạch mới được tổng hợp theo nguyên tắc bổ sung với mạch làm khuôn (A liên kết với T; G liên kết với C).",subject:"Sinh học"},
    {q:"Một phân tử DNA tái bản liên tiếp 5 lần sẽ tạo ra bao nhiêu phân tử DNA?",options:["A. 6.","B. 32.","C. 25.","D. 64."],a:"B. 32.",subject:"Sinh học"},
    {q:"Cấu trúc của nhiễm sắc thể bao gồm những thành phần nào?",options:["A. DNA và protein.","B. DNA và lipit.","C. Protein và cacbohidrat.","D. DNA và cacbohidrat."],a:"A. DNA và protein.",subject:"Sinh học"},
    {q:"Ở người, số lượng nhiễm sắc thể trong một tế bào lưỡng bội bình thường là bao nhiêu?",options:["A. 23 nhiễm sắc thể.","B. 24 nhiễm sắc thể.","C. 46 nhiễm sắc thể.","D. 48 nhiễm sắc thể."],a:"C. 46 nhiễm sắc thể.",subject:"Sinh học"},
    {q:"Ở kì giữa của quá trình nguyên phân, các NST kép xếp thành mấy hàng trên mặt phẳng xích đạo?",options:["A. 1 hàng.","B. 2 hàng.","C. 3 hàng.","D. 4 hàng."],a:"A. 1 hàng.",subject:"Sinh học"},
    {q:"Điểm khác nhau cơ bản nhất giữa nguyên phân và giảm phân là gì?",options:["A. Cả hai đều là quá trình phân bào tạo ra tế bào mới.","B. Nguyên phân tạo ra 2 tế bào con có bộ NST giống hệt tế bào mẹ, còn giảm phân tạo ra 4 tế bào con có bộ NST giảm đi một nửa.","C. Giảm phân xảy ra ở tế bào sinh dục, nguyên phân xảy ra ở tế bào sinh trưởng.","D. Cả hai đều tạo ra biến dị tổ hợp."],a:"B. Nguyên phân tạo ra 2 tế bào con có bộ NST giống hệt tế bào mẹ, còn giảm phân tạo ra 4 tế bào con có bộ NST giảm đi một nửa.",subject:"Sinh học"},
    {q:"Trong trường hợp gene trội hoàn toàn, khi lai giữa hai bố mẹ thuần chủng, khác nhau 1 cặp tính trạng tương phản, sau đó F1 tự thụ phấn, tỉ lệ kiểu hình của F2 là:",options:["A. 9:3:3:1.","B. 1:1:1:1.","C. 9:6:1.","D. 3:1."],a:"D. 3:1.",subject:"Sinh học"},
    {q:"Tính trạng là:",options:["A. Những biểu hiện của kiểu gene thành kiểu hình","B. Kiểu hình bên ngoài cơ thể sinh vật.","C. Các đặc điểm bên trong cơ thể sinh vật.","D. Những đặc điểm về hình thái, cấu tạo, sinh lý của một cơ thể."],a:"D. Những đặc điểm về hình thái, cấu tạo, sinh lý của một cơ thể.",subject:"Sinh học"},
    {q:"Ở một loài thực vật, các gene quy định các tính trạng phân li độc lập và tổ hợp tự do. Cho cơ thể có kiểu gene AaBb tự thụ phấn thì tỷ lệ kiểu gene aabb ở đời con là:",options:["A. 2/16.","B. 1/16.","C. 9/16.","D. 3/16."],a:"B. 1/16.",subject:"Sinh học"},
    {q:"Trong các phép lai sau, có bao nhiêu phép lai cho F1 có 3 kiểu gen tỉ lệ 1:2:1? I. AA x aa. II. AA x AA. III. AA x Aa. IV. Aa x Aa. V. aa x aa. VI. Aa x aa",options:["A. 1.","B. 2.","C. 3.","D. 4."],a:"A. 1.",subject:"Sinh học"}    
        ]
    },
    { 
        name: 'Cụm số 6 Tuyên Quang', 
        year: 2026, 
        description: 'Đề thi thử THCS Cụm số 6 Tuyên Quang lần 1(sưu tầm và upload bởi admin)',
        questions: [
    {q:"Trong hệ đơn vị đo lường chính thức ở nước ta, đơn vị của công suất là:",options:["A. Jun (J).","B. Oát (W).","C. Niutơn (N).","D. Vôn (V)."],a:"B. Oát (W).",subject:"Vật lý"},
    {q:"Động năng của một vật phụ thuộc vào những yếu tố nào?",options:["A. Khối lượng và độ cao của vật.","B. Khối lượng và vận tốc của vật.","C. Trọng lượng và vận tốc của vật.","D. Độ biến dạng của vật."],a:"B. Khối lượng và vận tốc của vật.",subject:"Vật lý"},
    {q:"Một vật được ném từ dưới đất lên cao theo phương thẳng đứng. Trong quá trình vật đang đi lên thì:",options:["A. Động năng tăng, thế năng giảm.","B. Động năng giảm, thế năng tăng.","C. Động năng và thế năng đều tăng.","D. Động năng và thế năng đều giảm."],a:"B. Động năng giảm, thế năng tăng.",subject:"Vật lý"},
    {q:"Một vận động viên cử tạ nâng quả tạ khối lượng 80 kg lên độ cao 2 m trong thời gian 0,8 giây. Lấy g=10m/s². Công suất của vận động viên là:",options:["A. 1600 W.","B. 2000 W","C. 1280 W.","D. 640 W."],a:"B. 2000 W",subject:"Vật lý"},
    {q:"Hiện tượng khúc xạ ánh sáng là hiện tượng tia sáng tới khi gặp mặt phân cách giữa hai môi trường trong suốt thì:",options:["A. Bị hắt trở lại môi trường cũ.","B. Tiếp tục truyền thẳng vào môi trường thứ hai.","C. Bị gãy khúc tại mặt phân cách và tiếp tục truyền vào môi trường thứ hai.","D. Bị dừng lại hoàn toàn tại mặt phân cách."],a:"C. Bị gãy khúc tại mặt phân cách và tiếp tục truyền vào môi trường thứ hai.",subject:"Vật lý"},
    {q:"Khi ánh sáng truyền từ thủy tinh ra không khí, góc giới hạn phản xạ toàn phần xấp xỉ:",options:["A. 30°.","B. 42°.","C. 45°.","D. 60°."],a:"B. 42°.",subject:"Vật lý"},
    {q:"Thấu kính hội tụ thường có đặc điểm hình học là:",options:["A. Phần rìa mỏng hơn phần giữa.","B. Phần rìa dày hơn phần giữa.","C. Hai mặt đều là mặt phẳng.","D. Độ dày đồng đều ở mọi điểm."],a:"A. Phần rìa mỏng hơn phần giữa.",subject:"Vật lý"},
    {q:"Vật đặt trước thấu kính hội tụ, trong khoảng tiêu cự (vật nằm giữa thấu kính và tiêu điểm) sẽ cho ảnh có đặc điểm:",options:["A. Ảnh thật, ngược chiều, lớn hơn vật.","B. Ảnh ảo, cùng chiều, lớn hơn vật.","C. Ảnh thật, cùng chiều, nhỏ hơn vật.","D. Ảnh ảo, cùng chiều, nhỏ hơn vật."],a:"B. Ảnh ảo, cùng chiều, lớn hơn vật.",subject:"Vật lý"},
    {q:"Hệ thức của định luật Ohm là:",options:["A. I = U/R","B. U = I.R","C. R = U.I","D. I = U.R"],a:"A. I = U/R",subject:"Vật lý"},
    {q:"Biểu thức nào sau đây xác định điện trở tương đương của đoạn mạch có hai điện trở R1, R2 mắc song song?",options:["A. Rtđ = R1 + R2","B. 1/Rtđ = 1/R1 + 1/R2","C. Rtđ = R1.R2","D. Rtđ = (R1+R2)/(R1.R2)"],a:"B. 1/Rtđ = 1/R1 + 1/R2",subject:"Vật lý"},
    {q:"Công suất điện của một đoạn mạch được tính bằng tích của:",options:["A. Hiệu điện thế và điện trở.","B. Hiệu điện thế và cường độ dòng điện.","C. Cường độ dòng điện và thời gian.","D. Điện trở và bình phương thời gian."],a:"B. Hiệu điện thế và cường độ dòng điện.",subject:"Vật lý"},
    {q:"Cho hai điện trở R1 = 10Ω và R2 = 15Ω mắc song song. Điện trở tương đương của đoạn mạch là:",options:["A. 6Ω.","B. 12Ω.","C. 25Ω.","D. 150Ω."],a:"A. 6Ω.",subject:"Vật lý"},
    {q:"Một bếp điện có ghi 220V - 1000W. Điện năng bếp tiêu thụ khi sử dụng liên tục trong 2 giờ là:",options:["A. 2000 J.","B. 2 kWh.","C. 500 Wh.","D. 0,5 kWh."],a:"B. 2 kWh.",subject:"Vật lý"},
    {q:"Cho mạch điện gồm R1 = 12Ω, R2 = 18Ω mắc nối tiếp vào hiệu điện thế U = 60V. Cường độ dòng điện qua mạch chính là:",options:["A. 5 A.","B. 2,5 A.","C. 3,3 A.","D. 25 A."],a:"B. 2,5 A.",subject:"Vật lý"},
    {q:"Nhôm được dùng làm vật liệu chế tạo máy bay là do nhôm",options:["A. có nhiệt độ nóng chảy cao.","B. nhẹ và bền.","C. dẫn điện tốt.","D. có tính dẻo."],a:"B. nhẹ và bền.",subject:"Hóa học"},
    {q:"Dây sắt (iron) quấn hình lò xo (đã được nung nóng đỏ) đưa vào lọ đựng khí chlorine. Hiện tượng xảy ra là",options:["A. sắt cháy tạo thành khói trắng dày đặt bám vào thành bình.","B. không thấy hiện tượng phản ứng.","C. sắt cháy sáng tạo thành khói màu nâu đỏ.","D. sắt cháy sáng tạo thành khói màu đen."],a:"C. sắt cháy sáng tạo thành khói màu nâu đỏ.",subject:"Hóa học"},
    {q:"Dãy chất gồm các kim loại được sắp xếp theo chiều tăng dần về hoạt động hóa học là",options:["A. Cu; Fe; Zn; Al; Na; K.","B. Al; Na; Fe; Cu; K; Zn.","C. Fe; Al; Cu; Zn; K; Na.","D. Fe; Cu; Al; K; Na; Zn."],a:"A. Cu; Fe; Zn; Al; Na; K.",subject:"Hóa học"},
    {q:"Dãy kim loại nào tác dụng được với dung dịch Cu(NO3)2 tạo thành kim loại Cu?",options:["A. Al, Zn, Fe.","B. Mg, Fe, Ag.","C. Zn, Pb, Au.","D. Na, Mg, Al."],a:"A. Al, Zn, Fe.",subject:"Hóa học"},
    {q:"Những kim loại nào sau đây có thể được điều chế từ oxide bằng phương pháp nhiệt luyện nhờ chất khử CO?",options:["A. Zn, Mg, Fe.","B. Ni, Cu, Ca.","C. Fe, Ni, Zn.","D. Fe, Al, Cu."],a:"C. Fe, Ni, Zn.",subject:"Hóa học"},
    {q:"Tủ lạnh dùng lâu ngày thường có mùi hôi. Để khử mùi người ta thường cho vào tủ lạnh một mẩu than gỗ. Than gỗ lại có khả năng khử mùi hôi là vì",options:["A. than gỗ có tính khử mạnh.","B. than gỗ xúc tác làm chuyển hóa các chất khí có mùi hôi thành chất không mùi.","C. than gỗ có khả năng phản ứng với các khí có mùi tạo thành chất không mùi.","D. than gỗ có khả năng hấp phụ các khí có mùi hôi."],a:"D. than gỗ có khả năng hấp phụ các khí có mùi hôi.",subject:"Hóa học"},
    {q:"Kim cương và than chì là các dạng thù hình của nguyên tố cacbon nhưng lại có nhiều tính chất khác nhau như độ cứng, khả năng dẫn điện, … là do nguyên nhân nào dưới đây?",options:["A. Kim cương là kim loại còn than chì là phi kim.","B. Chúng có thành phần nguyên tố cấu tạo khác nhau.","C. Chúng có cấu tạo mạng tinh thể khác nhau.","D. Kim cương cứng còn than chì mềm."],a:"C. Chúng có cấu tạo mạng tinh thể khác nhau.",subject:"Hóa học"},
    {q:"Nhóm các chất đều gồm các hỗn hợp hữu cơ là",options:["A. K2CO3, CH3COOH, C2H6, C2H6O.","B. C6H6, Ca(HCO3)2, C2H5Cl, CH3OH.","C. CH3Cl, C2H6O, C3H8, CH3COONa.","D. C2H4, CH4, C3H7Br, CO2."],a:"C. CH3Cl, C2H6O, C3H8, CH3COONa.",subject:"Hóa học"},
    {q:"Biện pháp nào sau đây không làm giảm ô nhiễm môi trường gây ra do sử dụng nhiên liệu từ dầu mỏ?",options:["A. Đưa thêm hợp chất có chứa chì vào xăng để làm tăng chỉ số octane của xăng.","B. Đưa thêm chất xúc tác vào ống xả động cơ để chuyển hoá các khí thải độc.","C. Tăng cường sử dụng biogas.","D. Tổ chức thu gom và xử lí dầu cặn."],a:"A. Đưa thêm hợp chất có chứa chì vào xăng để làm tăng chỉ số octane của xăng.",subject:"Hóa học"},
    {q:"Một mol khí ethylene cháy hoàn toàn tỏa ra một lượng nhiệt 1423 kJ. Vậy 0,2 mol ethylene cháy tỏa ra một lượng nhiệt Q là bao nhiêu kJ?",options:["A. 7115 kJ.","B. 246,8 kJ.","C. 264,8 kJ.","D. 284,6 kJ."],a:"D. 284,6 kJ.",subject:"Hóa học"},
    {q:"Ethylic alcohol trong phân tử gồm",options:["A. nhóm ethyl (C2H5) liên kết với nhóm – OH.","B. nhóm methyl (CH3) liên kết với nhóm – OH.","C. nhóm hydrocarbon liên kết với nhóm – OH.","D. nhóm methyl (CH3) liên kết với oxygen."],a:"A. nhóm ethyl (C2H5) liên kết với nhóm – OH.",subject:"Hóa học"},
    {q:"Khi để rượu lâu ngày ngoài không khí sẽ có vị chua chứng tỏ đã tạo ra acid nào sau đây?",options:["A. Lactic acid.","B. Arcrylic acid.","C. Acetic acid.","D. Sulfuric acid."],a:"C. Acetic acid.",subject:"Hóa học"},
    {q:"Đun nóng 4,45 gam chất béo (C17H35COO)3C3H5 với dung dịch NaOH. Khối lượng glycerol thu được là",options:["A. 0,46 gam.","B. 1,2 gam.","C. 0,75 gam.","D. 2 gam."],a:"A. 0,46 gam.",subject:"Hóa học"},
    {q:"Đun 100 mL dung dịch glucose với một lượng dư dung dịch Ag2O/NH3, thu được 5,4 gam Ag. Nồng độ mol của dung dịch glucose là",options:["A. 0,025M.","B. 0,05M.","C. 0,25M.","D. 0,725M."],a:"C. 0,25M.",subject:"Hóa học"},
    {q:"DNA vừa có tính đa dạng, vừa có tính đặc thù vì",options:["A. Cấu tạo từ các nguyên tố: C, H, O, N, P.","B. Cấu trúc theo nguyên tắc đa phân, mà đơn phân là các amino acid.","C. Cấu trúc theo nguyên tắc bán bảo toàn, có kích thước lớn và khối lượng lớn.","D. Cấu trúc theo nguyên tắc đa phân với 4 loại đơn phân: A, T, G, C."],a:"D. Cấu trúc theo nguyên tắc đa phân với 4 loại đơn phân: A, T, G, C.",subject:"Sinh học"},
    {q:"Nếu trên một mạch đơn của phân tử ADN có trật tự là: – A – T – G – C – A – thì trật tự của đoạn mạch bổ sung tại vị trí đó là",options:["A. – T – A – C – G – T –.","B. – T – A – C – A – T –.","C. – A – T – G – X – A –.","D. – A – C – G – T – A –."],a:"A. – T – A – C – G – T –.",subject:"Sinh học"},
    {q:"Các mạch đơn mới được tổng hợp trong quá trình tái bản của phân tử DNA hình thành",options:["A. cùng chiều tháo xoắn của DNA.","B. cùng chiều với mạch khuôn.","C. theo chiều 3’ đến 5’.","D. theo chiều 5’ đến 3’."],a:"D. theo chiều 5’ đến 3’.",subject:"Sinh học"},
    {q:"Có 1 phân tử DNA tự nhân đôi 3 lần thì số phân tử DNA được tạo ra sau quá trình nhân đôi bằng:",options:["A. 3.","B. 6.","C. 8.","D. 9."],a:"C. 8.",subject:"Sinh học"},
    {q:"Vị trí của tâm động trên nhiễm sắc thể trong hình dưới đây là",options:["A. tâm cân.","B. tâm lệch.","C. tâm mút.","D. cận tâm."],a:"B. tâm lệch.",subject:"Sinh học"},
    {q:"Đặc điểm của nhiễm sắc thể thường là",options:["A. có số lượng giống nhau nhưng hình thái khác nhau ở 2 giới đực, cái.","B. có số lượng và hình thái khác nhau ở 2 giới đực, cái.","C. có số lượng và hình thái giống nhau ở 2 giới đực, cái.","D. có số lượng khác nhau nhưng hình thái giống nhau ở 2 giới đực, cái."],a:"C. có số lượng và hình thái giống nhau ở 2 giới đực, cái.",subject:"Sinh học"},
    {q:"Đâu là ứng dụng của giảm phân trong thực tiễn?",options:["A. Nuôi cấy tế bào, mô, cơ quan của động vật và người.","B. Lai hữu tính tạo biến dị tổ hợp ở các giống cây trồng, vật nuôi.","C. Nhân nhanh các giống cây trồng có đặc tính tốt.","D. Tạo giống côn trùng bất thụ để thực hiện kiểm soát sinh học."],a:"B. Lai hữu tính tạo biến dị tổ hợp ở các giống cây trồng, vật nuôi.",subject:"Sinh học"},
    {q:"Ở cà chua 2n = 24. Số NST có trong một tế bào của thể một khi đang ở kì sau của nguyên phân là:",options:["A. 12.","B. 48.","C. 46.","D. 45."],a:"C. 46.",subject:"Sinh học"},
    {q:"Khi lai hai bố mẹ khác nhau về một cặp tính trạng thuần chủng tương phản thì",options:["A. F1 phân li tính trạng theo tỉ lệ trung bình 3 trội : 1 lặn.","B. F2 đồng tính trạng trội.","C. F2 phân li tính trạng theo tỉ lệ trung bình 3 trội : 1 lặn.","D. Cả 3 phương án trên."],a:"C. F2 phân li tính trạng theo tỉ lệ trung bình 3 trội : 1 lặn.",subject:"Sinh học"},
    {q:"Trong thí nghiệm lai hai cặp tính trạng của Mendel, khi cho F1 lai phân tích thì kết quả thu được về kiểu hình sẽ như thế nào?",options:["A. 1 vàng, trơn : 1 xanh, nhăn.","B. 3 vàng, trơn : 1 xanh, nhăn.","C. 1 vàng, trơn : 1 vàng nhăn : 1 xanh, trơn : 1 xanh, nhăn.","D. 9 vàng, trơn : 3 vàng, nhăn : 3xanh, trơn : 1 xanh, nhăn."],a:"C. 1 vàng, trơn : 1 vàng nhăn : 1 xanh, trơn : 1 xanh, nhăn.",subject:"Sinh học"},
    {q:"Ở đậu Hà Lan, gen A quy định hoa đỏ trội hoàn toàn so với gen a quy định hoa trắng. Phép lai Aa x Aa cho tỉ lệ kiểu hình ở đời con là",options:["A. 1 hoa đỏ : 1 hoa trắng.","B. 3 hoa đỏ : 1 hoa trắng.","C. 100% hoa đỏ.","D. 1 hoa đỏ : 3 hoa trắng."],a:"B. 3 hoa đỏ : 1 hoa trắng.",subject:"Sinh học"},
    {q:"Các biến dị tổ hợp được tạo ra",options:["A. Trong sinh sản hữu tính, chỉ xuất hiện ở F1.","B. Trong sinh sản hữu tính, xuất hiện ở cả F1 và F2.","C. Trong sinh sản hữu tính, chỉ xuất hiện ở F2.","D. Trong sinh sản hữu tính, không bao giờ xuất hiện ở F2."],a:"B. Trong sinh sản hữu tính, xuất hiện ở cả F1 và F2.",subject:"Sinh học"}
        ]
    },
  {
    name: 'Sở giáo dục và đào tạo Tuyên Quang',
    year: 2026,
    description: 'Đề đề xuất của sở giáo dục và đào tạo Tuyên Quang - Đề số 1',
    questions: [
{"q":"Điều kiện để xuất hiện dòng điện cảm ứng trong cuộn dây dẫn kín là","options":["A. đặt một nam châm đứng yên trước cuộn dây","B. số đường sức từ xuyên qua tiết diện S của cuộn dây đó biến thiên","C. nối hai đầu cuộn dây với hai cực của một bình acquy","D. đặt cuộn dây gần một dây dẫn có dòng điện không đổi"],"a":"B. số đường sức từ xuyên qua tiết diện S của cuộn dây đó biến thiên","subject":"Vật lý"},
{"q":"Bàn là (bàn ủi) điện hoạt động chủ yếu dựa trên tác dụng nào của dòng điện xoay chiều?","options":["A. Tác dụng từ","B. Tác dụng sinh lí","C. Tác dụng hóa học","D. Tác dụng nhiệt"],"a":"D. Tác dụng nhiệt","subject":"Vật lý"},
{"q":"Nguồn năng lượng đóng vai trò chủ đạo trong việc duy trì sự sống và các hiện tượng tự nhiên trên Trái Đất là","options":["A. năng lượng gió","B. năng lượng hạt nhân","C. năng lượng Mặt Trời","D. năng lượng địa nhiệt"],"a":"C. năng lượng Mặt Trời","subject":"Vật lý"},
{"q":"Năng lượng gió được khai thác chủ yếu thông qua thiết bị nào?","options":["A. Đập ngăn nước","B. Tấm pin mặt trời","C. Tuabin nước","D. Tuabin gió"],"a":"D. Tuabin gió","subject":"Vật lý"},
{"q":"Kim loại nào sau đây dẫn điện tốt nhất?","options":["A. Ag","B. Cu","C. Fe","D. Au"],"a":"A. Ag","subject":"Hóa học"},
{"q":"Dãy nào sau đây sắp xếp các kim loại theo chiều hoạt động hóa học giảm dần từ trái sang phải?","options":["A. Mg, Na, K","B. K, Na, Mg","C. K, Mg, Na","D. Na, Mg, K"],"a":"B. K, Na, Mg","subject":"Hóa học"},
{"q":"Kim loại nào sau đây không tác dụng với dung dịch H2SO4 loãng?","options":["A. Na","B. Al","C. Mg","D. Cu"],"a":"D. Cu","subject":"Hóa học"},
{"q":"Đơn phân cấu tạo nên phân tử DNA là gì?","options":["A. Amino acid","B. Nucleotide","C. Glucose","D. Phosphate"],"a":"B. Nucleotide","subject":"Sinh học"},
{"q":"Một phân tử DNA thực hiện nhân đôi một lần, kết quả tạo ra bao nhiêu phân tử DNA?","options":["A. 2","B. 3","C. 4","D. 5"],"a":"A. 2","subject":"Sinh học"},
{"q":"Dãy nào sau đây gồm các hợp chất đều là hợp chất hữu cơ?","options":["A. K2CO3, HCOOH, C2H6","B. CH4, KHCO3, C2H4","C. C2H4O2, C3H8, CH3COONa","D. CH4, CH3Cl, CO2"],"a":"C. C2H4O2, C3H8, CH3COONa","subject":"Hóa học"},
{"q":"Hợp chất nào dưới đây là alcohol?","options":["A. CH3OH","B. CH3COOH","C. CH3COOC2H5","D. HCHO"],"a":"A. CH3OH","subject":"Hóa học"},
{"q":"Dung dịch acetic acid không phản ứng được với chất nào sau đây?","options":["A. CuO","B. Mg(OH)2","C. Na2CO3","D. K2SO4"],"a":"D. K2SO4","subject":"Hóa học"},
{"q":"Ở sinh vật nhân thực, nhiễm sắc thể được cấu tạo từ hai thành phần hóa học chủ yếu nào?","options":["A. RNA và protein loại histone","B. DNA và protein loại histone","C. DNA và lipid","D. RNA và carbohydrate"],"a":"B. DNA và protein loại histone","subject":"Sinh học"},
{"q":"Cặp nhiễm sắc thể tương đồng gồm","options":["A. 2 NST khác nhau","B. 2 NST giống nhau","C. 4 NST giống nhau","D. 4 NST khác nhau"],"a":"B. 2 NST giống nhau","subject":"Sinh học"},
{"q":"Phép lai phân tích là phép lai giữa cá thể mang kiểu hình trội đang cần xác định kiểu gene với cá thể có kiểu hình nào?","options":["A. Cá thể có kiểu hình trội thuần chủng","B. Cá thể có kiểu hình trung gian","C. Cá thể có kiểu hình giống F1","D. Cá thể có kiểu hình lặn"],"a":"D. Cá thể có kiểu hình lặn","subject":"Sinh học"},
{"q":"Ở đậu Hà Lan, hạt vàng (A) trội hoàn toàn so với hạt xanh (a), hạt trơn (B) trội hoàn toàn so với hạt nhăn (b). Kiểu gene nào sau đây quy định kiểu hình hạt vàng, nhăn?","options":["A. AABB","B. AaBB","C. Aabb","D. aabb"],"a":"C. Aabb","subject":"Sinh học"},
{"q":"Hiện tượng tia sáng bị gãy khúc khi truyền từ môi trường trong suốt này sang môi trường trong suốt khác gọi là","options":["A. hiện tượng phản xạ ánh sáng","B. hiện tượng tán sắc ánh sáng","C. hiện tượng khúc xạ ánh sáng","D. hiện tượng phản xạ toàn phần"],"a":"C. hiện tượng khúc xạ ánh sáng","subject":"Vật lý"},
{"q":"Thấu kính nào sau đây thường dùng làm kính lúp?","options":["A. Thấu kính phân kì","B. Thấu kính hội tụ","C. Gương phẳng","D. Gương cầu"],"a":"B. Thấu kính hội tụ","subject":"Vật lý"},
{"q":"Tiến hành các thí nghiệm sau: (a) Điện phân hỗn hợp Al2O3 và cryolite nóng chảy. (b) Nhiệt phân hoàn toàn mẫu đá vôi CaCO3. (c) Cho mầu kim loại Na vào dung dịch CuSO4. (d) Nung hỗn hợp gồm ZnO với than cốc ở nhiệt độ cao. Sau khi các phản ứng kết thúc, những thí nghiệm thu được kim loại là","options":["A. (a) và (c)","B. (a) và (d)","C. (b) và (c)","D. (d) và (c)"],"a":"B. (a) và (d)","subject":"Hóa học"},
{"q":"Trong công nghiệp, quá trình tách kẽm ra từ quặng chứa zinc sulfide (ZnS) được thực hiện theo sơ đồ sau: ZnS → ZnO → Zn. Các chất X, Y trong sơ đồ lần lượt là","options":["A. CO2, CO","B. O2 và C","C. HCl và Al","D. O2, S"],"a":"B. O2 và C","subject":"Hóa học"},
{"q":"Một alkane X có khối lượng phân tử là 44. Tổng số nguyên tử trong một phân tử X là","options":["A. 3","B. 5","C. 8","D. 11"],"a":"D. 11","subject":"Hóa học"},
{"q":"Có 3 chất lỏng không màu: CH3COOC2H5, C2H5OH, CH3COOH đựng trong 3 lọ mất nhãn. Hoá chất có thể dùng để phân biệt ba chất lỏng trên là","options":["A. quỳ tím, dung dịch AgNO3/NH3","B. quỳ tím, nước","C. nước, Na","D. dung dịch AgNO3/NH3, Na"],"a":"B. quỳ tím, nước","subject":"Hóa học"},
{"q":"Một mạch khuôn của gene có trình tự các nucleotide là –A–G–C–T–. Xác định trình tự các nucleotide tương ứng trên phân tử mRNA được tổng hợp từ mạch khuôn này?","options":["A. – T– C – G – A –","B. – U – C – G – A –","C. – A – G – C – U –","D. – U – C – G – T –"],"a":"B. – U – C – G – A –","subject":"Sinh học"},
{"q":"Sản phẩm của quá trình dịch mã tạo ra sản phẩm nào?","options":["A. Chuỗi polypeptide (protein)","B. Phân tử mRNA","C. Phân tử DNA","D. Các nucleotide tự do"],"a":"A. Chuỗi polypeptide (protein)","subject":"Sinh học"},
{"q":"Trong nguyên phân, các nhiễm sắc thể kép co ngắn, xoắn cực đại và tập trung thành một hàng trên mặt phẳng xích đạo của thoi phân bào tại","options":["A. kỳ đầu","B. kỳ giữa","C. kỳ sau","D. kỳ cuối"],"a":"B. kỳ giữa","subject":"Sinh học"},
{"q":"Kết quả của quá trình giảm phân từ một tế bào mẹ (2n) tạo ra:","options":["A. 2 tế bào con có bộ NST giống hệt tế bào mẹ (2n)","B. 2 tế bào con có bộ NST đơn bội (n)","C. 4 tế bào con có bộ NST (n)","D. 4 tế bào con có bộ NST lưỡng bội (2n)"],"a":"C. 4 tế bào con có bộ NST (n)","subject":"Sinh học"},
{"q":"Theo quy luật phân li của Mendel, phép lai nào cho đời con (F1) có tỉ lệ kiểu gen là 1:2:1?","options":["A. AA x AA","B. Aa x Aa","C. AA x aa","D. Aa x aa"],"a":"B. Aa x Aa","subject":"Sinh học"},
{"q":"Theo quy luật phân li độc lập, cơ thể có kiểu gene AaBb khi giảm phân bình thường sẽ tạo ra tối đa bao nhiêu loại giao tử?","options":["A. 1 loại","B. 2 loại","C. 3 loại","D. 4 loại"],"a":"D. 4 loại","subject":"Sinh học"},
{"q":"Một vật có khối lượng 500 g được ném thẳng đứng lên cao với tốc độ ban đầu là 10 m/s từ mặt đất. Bỏ qua sức cản của không khí, chọn mốc thế năng tại mặt đất. Cơ năng của vật tại vị trí ném là","options":["A. 50 J","B. 25 J","C. 100 J","D. 5 J"],"a":"B. 25 J","subject":"Vật lý"},
{"q":"Một người kéo một vật nặng bằng một lực F = 50 N đi được quãng đường s = 2 m theo hướng của lực kéo. Công mà người đó đã thực hiện là","options":["A. 25 J","B. 52 J","C. 100 J","D. 10 J"],"a":"C. 100 J","subject":"Vật lý"},
{"q":"Một cần cẩu nâng một thùng hàng có khối lượng 2 tấn lên cao 15 m trong thời gian 1 phút. Bỏ qua mọi hao phí, công suất của cần cẩu là","options":["A. 3000 W","B. 30.000 W","C. 5000 W","D. 50.000 W"],"a":"C. 5000 W","subject":"Vật lý"},
{"q":"Một vật có trọng lượng 50 N đang ở một độ cao h so với mặt đất. Biết thế năng trọng trường của vật tại vị trí đó là 200 J (chọn mốc thế năng tại mặt đất). Độ cao h của vật là","options":["A. 2 m","B. 4 m","C. 5 m","D. 8 m"],"a":"B. 4 m","subject":"Vật lý"},
{"q":"Đặt một hiệu điện thế U = 12 V vào hai đầu một điện trở R = 24 Ω. Cường độ dòng điện chạy qua điện trở đó là","options":["A. 2 A","B. 0,5 A","C. 288 A","D. 36 A"],"a":"B. 0,5 A","subject":"Vật lý"},
{"q":"Một bóng đèn loại 220V - 100W được sử dụng ở hiệu điện thế 220V trong 4 giờ mỗi ngày. Năng lượng điện mà bóng đèn tiêu thụ trong 30 ngày là","options":["A. 12 kWh","B. 120 kWh","C. 1,2 kWh","D. 400 kWh"],"a":"A. 12 kWh","subject":"Vật lý"},
{"q":"Đặt một hiệu điện thế 12 V vào hai đầu một bóng đèn thì cường độ dòng điện chạy qua đèn là 0,5 A. Công suất điện của bóng đèn này là","options":["A. 24 W","B. 6 W","C. 12 W","D. 12,5 W"],"a":"B. 6 W","subject":"Vật lý"},
{"q":"Hai điện trở R1 = 20 Ω và R2 = 40 Ω được mắc nối tiếp với nhau vào một mạch điện. Biết cường độ dòng điện chạy qua điện trở R1 là 0,5 A. Hiệu điện thế giữa hai đầu đoạn mạch là","options":["A. 10 V","B. 20 V","C. 30 V","D. 60 V"],"a":"C. 30 V","subject":"Vật lý"},
{"q":"Giả thiết rằng gas trong bình gas là một hỗn hợp propane và butane có tỉ lệ thể tích 1 : 1. Tính nhiệt lượng sinh ra khi đốt cháy 1 kg loại gas này. Biết rằng nhiệt lượng tương ứng sinh ra khi đốt cháy 1 mol mỗi chất propane và butane lần lượt là 2220 kJ và 2878 kJ.","options":["A. 44990,5 kJ","B. 48996,8 kJ","C. 50009,6 kJ","D. 49980,4 kJ"],"a":"D. 49980,4 kJ","subject":"Hóa học"},
{"q":"Thủy phân hoàn toàn 89 gam chất béo cần 300 mL dung dịch NaOH 1 M để điều chế xà phòng chứa 60% muối của acid béo (như hình vẽ). Khối lượng xà phòng thu được là","options":["A. 153 gam","B. 58,92 gam","C. 55,08 gam","D. 91,8 gam"],"a":"A. 153 gam","subject":"Hóa học","image":"https://files.catbox.moe/oce8hf.PNG"},
{"q":"Giả sử có 1 kg nho tươi có chứa khoảng 45 gam glucose. Khi lên men 9 kg nho sẽ thu được V mL rượu nho 9,2°. Biết hiệu suất lên men đạt 81% và khối lượng riêng của ethylic alcohol là 0,8 g/mL. Giá trị V là","options":["A. 2278,1","B. 258,7","C. 2812,5","D. 3472,2"],"a":"A. 2278,1","subject":"Hóa học"},
{"q":"Một đoạn polyethylene có khối lượng phân tử 5.040 amu. Số mắt xích có trong đoạn polymer trên là","options":["A. 168","B. 200","C. 180","D. 90"],"a":"C. 180","subject":"Hóa học"}
]
  },
  {
    name: 'Trường PTDTBT THCS Hùng Lợi',
    year: 2026,
    description: 'Đề thi thử Trường PTDTBT THCS Hùng Lợi - Đề số 2',
    questions: [
      {q:"Một vật có khối lượng 500 g ném thẳng đứng lên cao với vận tốc ban đầu 6 m/s. Lấy g = 10 m/s². Động năng ban đầu của vật là:",options:["A. 3 J","B. 9 J","C. 1,5 J","D. 6 J"],a:"B. 9 J",subject:"Vật lý"},
      {q:"Thế năng đàn hồi của lò xo phụ thuộc vào:",options:["A. Khối lượng của lò xo","B. Độ biến dạng của lò xo","C. Vận tốc của lò xo","D. Nhiệt độ môi trường"],a:"B. Độ biến dạng của lò xo",subject:"Vật lý"},
      {q:"Khi một vật trượt từ đỉnh dốc xuống chân dốc (bỏ qua ma sát), năng lượng nào tăng lên?",options:["A. Thế năng","B. Động năng","C. Cơ năng","D. Nhiệt năng"],a:"B. Động năng",subject:"Vật lý"},
      {q:"Công thức tính công suất là:",options:["A. P = F.t","B. P = A/t","C. P = A.t","D. P = F/t"],a:"B. P = A/t",subject:"Vật lý"},
      {q:"Hiện tượng phản xạ toàn phần xảy ra khi:",options:["A. Ánh sáng truyền từ môi trường chiết quang yếu sang chiết quang mạnh","B. Ánh sáng truyền từ môi trường chiết quang mạnh sang yếu với góc tới lớn hơn góc giới hạn","C. Ánh sáng chiếu vuông góc với mặt phân cách","D. Góc tới bằng 0°"],a:"B. Ánh sáng truyền từ môi trường chiết quang mạnh sang yếu với góc tới lớn hơn góc giới hạn",subject:"Vật lý"},
      {q:"Lăng kính có tác dụng:",options:["A. Hội tụ chùm sáng song song","B. Phân tán ánh sáng trắng thành dải màu","C. Phản chiếu toàn bộ ánh sáng","D. Hấp thụ ánh sáng"],a:"B. Phân tán ánh sáng trắng thành dải màu",subject:"Vật lý"},
      {q:"Hai điện trở R₁ = 4 Ω và R₂ = 6 Ω mắc nối tiếp. Điện trở tương đương là:",options:["A. 2,4 Ω","B. 10 Ω","C. 24 Ω","D. 5 Ω"],a:"B. 10 Ω",subject:"Vật lý"},
      {q:"Biểu thức nào sau đây đúng theo định luật Ohm?",options:["A. I = U.R","B. U = I/R","C. I = U/R","D. R = U.I"],a:"C. I = U/R",subject:"Vật lý"},
      {q:"Đơn vị đo cường độ dòng điện là:",options:["A. Volt (V)","B. Ohm (Ω)","C. Ampere (A)","D. Watt (W)"],a:"C. Ampere (A)",subject:"Vật lý"},
      {q:"Công thức tính công suất điện là:",options:["A. P = U + I","B. P = U.I","C. P = U/I","D. P = I/U"],a:"B. P = U.I",subject:"Vật lý"},
      {q:"Máy phát điện xoay chiều hoạt động dựa trên:",options:["A. Hiệu ứng nhiệt điện","B. Hiện tượng cảm ứng điện từ","C. Tác dụng hóa học","D. Hiệu ứng quang điện"],a:"B. Hiện tượng cảm ứng điện từ",subject:"Vật lý"},
      {q:"Tần số dòng điện xoay chiều trong mạng điện sinh hoạt tại Việt Nam là:",options:["A. 50 Hz","B. 60 Hz","C. 100 Hz","D. 220 Hz"],a:"A. 50 Hz",subject:"Vật lý"},
      {q:"Nguồn năng lượng nào sau đây không phải năng lượng tái tạo?",options:["A. Năng lượng gió","B. Năng lượng thủy điện","C. Năng lượng than đá","D. Năng lượng mặt trời"],a:"C. Năng lượng than đá",subject:"Vật lý"},
      {q:"Quá trình quang hợp của cây xanh chuyển hóa năng lượng:",options:["A. Hóa năng thành quang năng","B. Quang năng thành hóa năng","C. Nhiệt năng thành hóa năng","D. Cơ năng thành hóa năng"],a:"B. Quang năng thành hóa năng",subject:"Vật lý"},
      {q:"Phản ứng nào chứng minh aluminium (Al) có hoạt tính hóa học mạnh hơn copper (Cu)?",options:["A. Al tác dụng với oxygen (O₂)","B. Al đẩy Cu ra khỏi dung dịch copper(II) sulfate (CuSO₄)","C. Al bị oxi hóa bởi hydrochloric acid (HCl)","D. Al phản ứng với sodium hydroxide (NaOH)"],a:"B. Al đẩy Cu ra khỏi dung dịch copper(II) sulfate (CuSO₄)",subject:"Hóa học"},
      {q:"Phi kim điển hình có đặc điểm:",options:["A. Dẫn điện tốt","B. Có ánh kim","C. Dẫn nhiệt kém, không có ánh kim","D. Dẻo, dễ uốn"],a:"C. Dẫn nhiệt kém, không có ánh kim",subject:"Hóa học"},
      {q:"Trong công nghiệp, iron (Fe) được tách từ quặng bằng phương pháp:",options:["A. Điện phân","B. Nhiệt luyện: dùng carbon monoxide (CO) khử iron(III) oxide (Fe₂O₃)","C. Thủy luyện","D. Chưng cất"],a:"B. Nhiệt luyện: dùng carbon monoxide (CO) khử iron(III) oxide (Fe₂O₃)",subject:"Hóa học"},
      {q:"Kim loại nào sau đây không tác dụng với dung dịch hydrochloric acid (HCl)?",options:["A. Zinc (Zn)","B. Iron (Fe)","C. Copper (Cu)","D. Aluminium (Al)"],a:"C. Copper (Cu)",subject:"Hóa học"},
      {q:"Thép là hợp kim của iron (Fe) với:",options:["A. Aluminium (Al)","B. Carbon (C, hàm lượng < 2%)","C. Copper (Cu)","D. Nickel (Ni)"],a:"B. Carbon (C, hàm lượng < 2%)",subject:"Hóa học"},
      {q:"Methane (CH₄) là alkane đơn giản nhất. Phản ứng đặc trưng của methane là:",options:["A. Phản ứng cộng","B. Phản ứng trùng hợp","C. Phản ứng thế với chlorine (Cl₂)","D. Phản ứng tách"],a:"C. Phản ứng thế với chlorine (Cl₂)",subject:"Hóa học"},
      {q:"Nhận biết alkene bằng cách cho tác dụng với:",options:["A. Dung dịch sodium hydroxide (NaOH)","B. Dung dịch bromine (Br₂) trong nước","C. Dung dịch hydrochloric acid (HCl)","D. Dung dịch sulfuric acid (H₂SO₄)"],a:"B. Dung dịch bromine (Br₂) trong nước",subject:"Hóa học"},
      {q:"Nhiên liệu hóa thạch bao gồm:",options:["A. Than đá, dầu mỏ, khí thiên nhiên (chủ yếu methane, CH₄)","B. Ethanol (C₂H₅OH), methane (CH₄), hydrogen (H₂)","C. Gỗ, than củi, rơm","D. Điện, gió, nước"],a:"A. Than đá, dầu mỏ, khí thiên nhiên (chủ yếu methane, CH₄)",subject:"Hóa học"},
      {q:"Ethanol (ethylic alcohol) có công thức phân tử là:",options:["A. CH₃OH (methanol)","B. C₂H₅OH","C. C₃H₇OH (propanol)","D. C₂H₄ (ethene)"],a:"B. C₂H₅OH",subject:"Hóa học"},
      {q:"Dung dịch acetic acid (CH₃COOH) loãng trong nước gọi là:",options:["A. Rượu trắng","B. Giấm ăn","C. Cồn y tế","D. Nước oxy già"],a:"B. Giấm ăn",subject:"Hóa học"},
      {q:"Khi đốt cháy hoàn toàn ethanol (C₂H₅OH), sản phẩm thu được là:",options:["A. Carbon monoxide (CO) và nước (H₂O)","B. Carbon dioxide (CO₂) và nước (H₂O)","C. Carbon (C) và nước (H₂O)","D. Carbon dioxide (CO₂) và hydrogen (H₂)"],a:"B. Carbon dioxide (CO₂) và nước (H₂O)",subject:"Hóa học"},
      {q:"Glucose (C₆H₁₂O₆) thuộc loại hợp chất:",options:["A. Lipid","B. Monosaccharide (đường đơn)","C. Protein","D. Polymer tổng hợp"],a:"B. Monosaccharide (đường đơn)",subject:"Hóa học"},
      {q:"Protein được cấu tạo từ các đơn vị cơ bản là:",options:["A. Glucose (C₆H₁₂O₆)","B. Acid béo","C. Amino acid","D. Nucleotide"],a:"C. Amino acid",subject:"Hóa học"},
      {q:"Chất nào sau đây là polymer tự nhiên?",options:["A. Polyethylene (PE)","B. Polyvinyl chloride (PVC)","C. Cellulose ((C₆H₁₀O₅)ₙ)","D. Nylon-6,6 (polyamide)"],a:"C. Cellulose ((C₆H₁₀O₅)ₙ)",subject:"Hóa học"},
      {q:"RNA khác DNA ở điểm nào?",options:["A. RNA có base Uracil (U) thay cho Thymine (T) và đường ribose thay cho deoxyribose","B. RNA có cấu trúc xoắn kép","C. RNA chứa base Adenine (A)","D. RNA lưu trữ thông tin di truyền lâu dài"],a:"A. RNA có base Uracil (U) thay cho Thymine (T) và đường ribose thay cho deoxyribose",subject:"Sinh học"},
      {q:"Quá trình tái bản DNA diễn ra theo nguyên tắc:",options:["A. Bổ sung và bảo toàn","B. Bán bảo toàn","C. Toàn bảo toàn","D. Phân tán"],a:"B. Bán bảo toàn",subject:"Sinh học"},
      {q:"Gen là:",options:["A. Toàn bộ phân tử DNA trong tế bào","B. Một đoạn DNA mang thông tin mã hóa cho một sản phẩm nhất định","C. Một nhiễm sắc thể","D. Một phân tử protein"],a:"B. Một đoạn DNA mang thông tin mã hóa cho một sản phẩm nhất định",subject:"Sinh học"},
      {q:"Số codon mã hóa amino acid methionine (codon khởi đầu AUG) là:",options:["A. 1","B. 2","C. 3","D. 4"],a:"A. 1",subject:"Sinh học"},
      {q:"Nhiễm sắc thể giới tính của nữ là:",options:["A. XY","B. XX","C. YY","D. X0"],a:"B. XX",subject:"Sinh học"},
      {q:"Ở kì giữa của nguyên phân, nhiễm sắc thể:",options:["A. Bắt đầu co xoắn","B. Tập trung ở mặt phẳng xích đạo của thoi phân bào","C. Di chuyển về hai cực tế bào","D. Tháo xoắn hoàn toàn"],a:"B. Tập trung ở mặt phẳng xích đạo của thoi phân bào",subject:"Sinh học"},
      {q:"Kết thúc giảm phân, từ một tế bào sinh dục bậc I (2n) tạo ra:",options:["A. 2 tế bào (2n)","B. 2 tế bào (n)","C. 4 tế bào (n)","D. 4 tế bào (2n)"],a:"C. 4 tế bào (n)",subject:"Sinh học"},
      {q:"Sự khác biệt cơ bản giữa nguyên phân và giảm phân là:",options:["A. Nguyên phân tạo tế bào con có số NST bằng tế bào mẹ; giảm phân tạo tế bào con có số NST giảm một nửa","B. Nguyên phân chỉ xảy ra ở thực vật","C. Giảm phân xảy ra ở tế bào sinh dưỡng","D. Không có sự khác biệt"],a:"A. Nguyên phân tạo tế bào con có số NST bằng tế bào mẹ; giảm phân tạo tế bào con có số NST giảm một nửa",subject:"Sinh học"},
      {q:"Kiểu gen AA được gọi là:",options:["A. Dị hợp tử","B. Đồng hợp tử trội","C. Đồng hợp tử lặn","D. Bán hợp tử"],a:"B. Đồng hợp tử trội",subject:"Sinh học"},
      {q:"Lai phân tích là phép lai giữa cá thể mang kiểu hình trội với:",options:["A. Cá thể mang kiểu hình trội","B. Cá thể thuần chủng trội","C. Cá thể đồng hợp lặn (aa)","D. Cá thể dị hợp (Aa)"],a:"C. Cá thể đồng hợp lặn (aa)",subject:"Sinh học"},
      {q:"Phép lai Aa × aa cho tỉ lệ kiểu hình ở đời con là:",options:["A. 3 trội : 1 lặn","B. 1 trội : 1 lặn","C. Toàn trội","D. Toàn lặn"],a:"B. 1 trội : 1 lặn",subject:"Sinh học"},
      {q:"Nếu F1 đều có kiểu hình giống nhau (100%), khi cho F1 × F1 thu được F2 có tỉ lệ 3:1, tính trạng xuất hiện ở F2 với tỉ lệ 1/4 là:",options:["A. Tính trạng trội","B. Tính trạng lặn","C. Tính trạng trung gian","D. Không xác định được"],a:"B. Tính trạng lặn",subject:"Sinh học"},
    ]
  },
  {
    name: 'Trường PTDTBT THCS Hùng Lợi',
    year: 2026,
    description: 'Đề thi thử Trường PTDTBT THCS Hùng Lợi - Đề số 3',
    questions: [
      {q:"Một vật có khối lượng 200 g rơi tự do từ độ cao 10 m. Lấy g = 10 m/s². Vận tốc ngay trước khi chạm đất là:",options:["A. 10 m/s","B. 14,1 m/s","C. 20 m/s","D. 100 m/s"],a:"B. 14,1 m/s",subject:"Vật lý"},
      {q:"Đơn vị đo công suất là:",options:["A. Joule (J)","B. Newton (N)","C. Watt (W)","D. Pascal (Pa)"],a:"C. Watt (W)",subject:"Vật lý"},
      {q:"Khi vật ở trên cao so với mặt đất, vật có:",options:["A. Động năng lớn","B. Thế năng hấp dẫn lớn","C. Cơ năng bằng 0","D. Vận tốc lớn"],a:"B. Thế năng hấp dẫn lớn",subject:"Vật lý"},
      {q:"Một lực 100 N kéo vật đi được 20 m. Công do lực thực hiện là:",options:["A. 5 J","B. 120 J","C. 2000 J","D. 200 J"],a:"C. 2000 J",subject:"Vật lý"},
      {q:"Khi ánh sáng đi từ không khí vào nước, góc khúc xạ so với góc tới:",options:["A. Bằng nhau","B. Lớn hơn","C. Nhỏ hơn","D. Không xác định được"],a:"C. Nhỏ hơn",subject:"Vật lý"},
      {q:"Ứng dụng nào sau đây dựa trên hiện tượng phản xạ toàn phần?",options:["A. Kính lúp","B. Cáp quang","C. Kính cận","D. Gương cầu lõm"],a:"B. Cáp quang",subject:"Vật lý"},
      {q:"Điện trở của kim loại khi nhiệt độ tăng thì:",options:["A. Giảm","B. Tăng","C. Không đổi","D. Bằng 0"],a:"B. Tăng",subject:"Vật lý"},
      {q:"Hiệu điện thế 220 V đặt vào hai đầu điện trở 44 Ω. Cường độ dòng điện qua điện trở là:",options:["A. 5 A","B. 0,2 A","C. 10 A","D. 2 A"],a:"A. 5 A",subject:"Vật lý"},
      {q:"Trong đoạn mạch mắc nối tiếp, đại lượng nào có giá trị bằng nhau ở các điện trở?",options:["A. Hiệu điện thế","B. Cường độ dòng điện","C. Công suất","D. Điện trở"],a:"B. Cường độ dòng điện",subject:"Vật lý"},
      {q:"Công của dòng điện được tính bằng công thức:",options:["A. A = U.I","B. A = U.I.t","C. A = I².R","D. A = U/R"],a:"B. A = U.I.t",subject:"Vật lý"},
      {q:"Trong máy phát điện xoay chiều, phần tạo ra dòng điện gọi là:",options:["A. Stato (phần cảm)","B. Roto (phần ứng)","C. Cuộn cảm","D. Biến thế"],a:"B. Roto (phần ứng)",subject:"Vật lý"},
      {q:"Dòng điện xoay chiều (tần số 50 Hz) đổi chiều bao nhiêu lần trong 1 giây?",options:["A. 25 lần","B. 50 lần","C. 100 lần","D. 200 lần"],a:"C. 100 lần",subject:"Vật lý"},
      {q:"Điện năng từ nhà máy điện truyền đến nơi tiêu thụ qua:",options:["A. Đường dây tải điện và máy biến thế","B. Ắc quy","C. Pin mặt trời","D. Tụ điện"],a:"A. Đường dây tải điện và máy biến thế",subject:"Vật lý"},
      {q:"Năng lượng sinh học trong thức ăn bắt nguồn từ:",options:["A. Năng lượng địa nhiệt","B. Năng lượng mặt trời qua quang hợp","C. Năng lượng hạt nhân","D. Năng lượng gió"],a:"B. Năng lượng mặt trời qua quang hợp",subject:"Vật lý"},
      {q:"Iron (Fe) tác dụng với dung dịch copper(II) sulfate (CuSO₄) tạo ra:",options:["A. Iron(II) sulfate (FeSO₄) và copper (Cu)","B. Iron(I) sulfate (Fe₂SO₄) và copper (Cu)","C. Iron(III) sulfate (Fe₂(SO₄)₃) và copper (Cu)","D. Iron(II) sulfide (FeS) và copper(II) oxide (CuO)"],a:"A. Iron(II) sulfate (FeSO₄) và copper (Cu)",subject:"Hóa học"},
      {q:"Kim loại nào có thể tác dụng với nước (H₂O) ở nhiệt độ thường?",options:["A. Iron (Fe)","B. Copper (Cu)","C. Sodium (Na)","D. Aluminium (Al)"],a:"C. Sodium (Na)",subject:"Hóa học"},
      {q:"Phi kim halogen điển hình trong chương trình THCS là:",options:["A. Sulfur (S)","B. Phosphorus (P)","C. Chlorine (Cl)","D. Carbon (C)"],a:"C. Chlorine (Cl)",subject:"Hóa học"},
      {q:"Sự ăn mòn kim loại là quá trình:",options:["A. Kim loại bị oxi hóa bởi các chất trong môi trường","B. Kim loại bị nấu chảy","C. Kim loại bị khử","D. Kim loại kết tinh lại"],a:"A. Kim loại bị oxi hóa bởi các chất trong môi trường",subject:"Hóa học"},
      {q:"Để bảo vệ kim loại khỏi bị ăn mòn, người ta dùng phương pháp:",options:["A. Mạ kim loại ít hoạt động hơn lên bề mặt (ví dụ: mạ nickel (Ni), mạ chromium (Cr))","B. Nung nóng kim loại","C. Ngâm kim loại trong acid","D. Cho kim loại tiếp xúc với không khí ẩm"],a:"A. Mạ kim loại ít hoạt động hơn lên bề mặt (ví dụ: mạ nickel (Ni), mạ chromium (Cr))",subject:"Hóa học"},
      {q:"Propane (C₃H₈) thuộc loại hợp chất:",options:["A. Alkene","B. Alkane","C. Alcohol","D. Carboxylic acid"],a:"B. Alkane",subject:"Hóa học"},
      {q:"Khí gas dùng trong sinh hoạt (LPG) chủ yếu là:",options:["A. Carbon dioxide (CO₂)","B. Hỗn hợp propane (C₃H₈) và butane (C₄H₁₀)","C. Nitrogen (N₂)","D. Hydrogen (H₂)"],a:"B. Hỗn hợp propane (C₃H₈) và butane (C₄H₁₀)",subject:"Hóa học"},
      {q:"Dầu thực vật khác mỡ động vật ở chỗ:",options:["A. Dầu thực vật chứa nhiều acid béo no","B. Dầu thực vật chứa nhiều acid béo không no","C. Dầu thực vật là polymer","D. Dầu thực vật là protein"],a:"B. Dầu thực vật chứa nhiều acid béo không no",subject:"Hóa học"},
      {q:"Ethanol (C₂H₅OH) phản ứng với sodium (Na) tạo ra:",options:["A. Sodium acetate (CH₃COONa) và hydrogen (H₂)","B. Sodium ethoxide (C₂H₅ONa) và hydrogen (H₂)","C. Carbon dioxide (CO₂) và nước (H₂O)","D. Ethene (C₂H₄) và sodium hydroxide (NaOH)"],a:"B. Sodium ethoxide (C₂H₅ONa) và hydrogen (H₂)",subject:"Hóa học"},
      {q:"Nồng độ ethanol (C₂H₅OH) trong rượu uống được biểu thị bằng:",options:["A. Khối lượng mol","B. Phần trăm thể tích (độ cồn, %v/v)","C. Nồng độ mol/L","D. pH"],a:"B. Phần trăm thể tích (độ cồn, %v/v)",subject:"Hóa học"},
      {q:"Acetic acid (CH₃COOH) tác dụng với sodium hydroxide (NaOH) tạo ra:",options:["A. Sodium acetate (CH₃COONa) và hydrogen (H₂)","B. Sodium acetate (CH₃COONa) và nước (H₂O)","C. Carbon dioxide (CO₂) và nước (H₂O)","D. Ethanol (C₂H₅OH) và sodium chloride (NaCl)"],a:"B. Sodium acetate (CH₃COONa) và nước (H₂O)",subject:"Hóa học"},
      {q:"Saccharose (đường mía, C₁₂H₂₂O₁₁) khi thủy phân tạo ra:",options:["A. 2 phân tử glucose (C₆H₁₂O₆)","B. 1 glucose (C₆H₁₂O₆) + 1 fructose (C₆H₁₂O₆)","C. 2 phân tử fructose (C₆H₁₂O₆)","D. Amino acid và nước (H₂O)"],a:"B. 1 glucose (C₆H₁₂O₆) + 1 fructose (C₆H₁₂O₆)",subject:"Hóa học"},
      {q:"Nylon-6,6 (polyamide) là loại polymer:",options:["A. Thiên nhiên","B. Bán tổng hợp","C. Tổng hợp","D. Sinh học"],a:"C. Tổng hợp",subject:"Hóa học"},
      {q:"Phản ứng đặc trưng nhận biết protein là phản ứng biuret với:",options:["A. Silver nitrate/ammonia (AgNO₃/NH₃) → kết tủa bạc","B. Copper(II) hydroxide (Cu(OH)₂) trong kiềm → màu tím","C. Iodine (I₂) → màu xanh (dành cho tinh bột)","D. Phenolphthalein → đổi màu hồng"],a:"B. Copper(II) hydroxide (Cu(OH)₂) trong kiềm → màu tím",subject:"Hóa học"},
     {q:"Bộ ba mã hóa trên mRNA gọi là:",options:["A. Anticodon","B. Codon","C. Operon","D. Promoter"],a:"B. Codon",subject:"Sinh học"},
      {q:"Thông tin di truyền truyền theo chiều:",options:["A. Protein → mRNA → DNA","B. mRNA → DNA → Protein","C. DNA → mRNA → Protein","D. DNA → Protein → mRNA"],a:"C. DNA → mRNA → Protein",subject:"Sinh học"},
      {q:"Enzyme xúc tác quá trình phiên mã là:",options:["A. DNA polymerase","B. RNA polymerase","C. Ligase","D. Helicase"],a:"B. RNA polymerase",subject:"Sinh học"},
      {q:"Mỗi codon mã hóa cho:",options:["A. Một nucleotide","B. Một amino acid (hoặc tín hiệu kết thúc)","C. Một gen","D. Một nhiễm sắc thể"],a:"B. Một amino acid (hoặc tín hiệu kết thúc)",subject:"Sinh học"},
      {q:"Ở kì sau của nguyên phân, hiện tượng gì xảy ra?",options:["A. NST tập trung ở mặt phẳng xích đạo","B. Các chromatid chị em tách nhau và di chuyển về hai cực","C. Màng nhân tan biến","D. NST co xoắn cực đại"],a:"B. Các chromatid chị em tách nhau và di chuyển về hai cực",subject:"Sinh học"},
      {q:"Trao đổi chéo (crossing over) xảy ra ở:",options:["A. Nguyên phân, kì đầu","B. Giảm phân I, kì đầu (khi NST kép tương đồng tiếp hợp)","C. Giảm phân II","D. Sau khi thụ tinh"],a:"B. Giảm phân I, kì đầu (khi NST kép tương đồng tiếp hợp)",subject:"Sinh học"},
      {q:"Số lượng NST trong tế bào trứng người là:",options:["A. 46","B. 23","C. 44","D. 22"],a:"B. 23",subject:"Sinh học"},
      {q:"Kết quả của thụ tinh là:",options:["A. Giao tử","B. Hợp tử (2n)","C. Phôi thai","D. Tinh trùng"],a:"B. Hợp tử (2n)",subject:"Sinh học"},
      {q:"Mendel đã tiến hành thí nghiệm trên đối tượng:",options:["A. Ruồi giấm (Drosophila melanogaster)","B. Cây đậu Hà Lan (Pisum sativum)","C. Nấm men (Saccharomyces cerevisiae)","D. Vi khuẩn E. coli"],a:"B. Cây đậu Hà Lan (Pisum sativum)",subject:"Sinh học"},
      {q:"Tính trạng lặn chỉ biểu hiện ra kiểu hình khi cá thể có kiểu gen:",options:["A. AA","B. Aa","C. aa","D. A_"],a:"C. aa",subject:"Sinh học"},
      {q:"Trong phép lai AaBb × AaBb (hai cặp gen phân li độc lập), tỉ lệ kiểu gen AABB ở đời con là:",options:["A. 1/16","B. 1/4","C. 1/8","D. 3/16"],a:"A. 1/16",subject:"Sinh học"},
      {q:"Định luật phân li độc lập của Mendel áp dụng khi:",options:["A. Các cặp gen nằm trên cùng một cặp NST","B. Các cặp gen nằm trên các cặp NST tương đồng khác nhau","C. Các gen liên kết hoàn toàn","D. Gen nằm trên NST giới tính"],a:"B. Các cặp gen nằm trên các cặp NST tương đồng khác nhau",subject:"Sinh học"},
    ]
  },
  {
    name: 'Trường PTDTBT THCS Hùng Lợi',
    year: 2026,
    description: 'Đề thi thử Trường PTDTBT THCS Hùng Lợi - Đề số 4',
    questions: [
      {q:"Trong hệ SI, đơn vị đo công là:",options:["A. Watt (W)","B. Newton (N)","C. Joule (J)","D. Pascal (Pa)"],a:"C. Joule (J)",subject:"Vật lý"},
      {q:"Một vật khối lượng 3 kg đứng yên ở độ cao 4 m. Lấy g = 10 m/s². Cơ năng của vật là:",options:["A. 12 J","B. 40 J","C. 120 J","D. 30 J"],a:"C. 120 J",subject:"Vật lý"},
      {q:"Khi thả rơi tự do một vật từ trên cao (bỏ qua sức cản không khí), nhận xét nào đúng?",options:["A. Thế năng tăng, động năng giảm","B. Thế năng giảm, động năng tăng","C. Cả thế năng và động năng đều tăng","D. Cơ năng tăng dần"],a:"B. Thế năng giảm, động năng tăng",subject:"Vật lý"},
      {q:"Một máy cơ thực hiện công 4000 J trong 20 s. Công suất của máy là:",options:["A. 80000 W","B. 200 W","C. 20 W","D. 80 W"],a:"B. 200 W",subject:"Vật lý"},
      {q:"Góc khúc xạ và góc tới có quan hệ:",options:["A. Luôn bằng nhau","B. Phụ thuộc vào chiết suất của hai môi trường","C. Góc khúc xạ luôn lớn hơn","D. Góc khúc xạ luôn nhỏ hơn"],a:"B. Phụ thuộc vào chiết suất của hai môi trường",subject:"Vật lý"},
      {q:"Thấu kính phân kỳ có đặc điểm:",options:["A. Phần giữa dày hơn phần rìa","B. Phần rìa dày hơn phần giữa","C. Hội tụ chùm tia sáng song song","D. Không ảnh hưởng đến chùm sáng"],a:"B. Phần rìa dày hơn phần giữa",subject:"Vật lý"},
      {q:"Trong đoạn mạch song song, đại lượng nào có giá trị bằng nhau ở các nhánh?",options:["A. Cường độ dòng điện","B. Hiệu điện thế","C. Điện trở","D. Công suất"],a:"B. Hiệu điện thế",subject:"Vật lý"},
      {q:"Một điện trở 10 Ω có dòng điện 2 A chạy qua. Hiệu điện thế giữa hai đầu điện trở là:",options:["A. 5 V","B. 0,2 V","C. 12 V","D. 20 V"],a:"D. 20 V",subject:"Vật lý"},
      {q:"Điện năng tiêu thụ trong một ngày của bóng đèn 100 W dùng 5 giờ là:",options:["A. 0,5 kWh","B. 1 kWh","C. 500 kWh","D. 20 Wh"],a:"A. 0,5 kWh",subject:"Vật lý"},
      {q:"Cầu chì trong mạch điện có tác dụng:",options:["A. Ổn định điện áp","B. Bảo vệ mạch điện khi dòng điện quá lớn","C. Tăng điện trở của mạch","D. Giảm điện áp"],a:"B. Bảo vệ mạch điện khi dòng điện quá lớn",subject:"Vật lý"},
      {q:"Dòng điện xoay chiều khác dòng điện một chiều ở điểm:",options:["A. Dòng một chiều có cường độ và chiều không đổi theo thời gian","B. Dòng xoay chiều có chiều và cường độ thay đổi tuần hoàn","C. Cả hai ý trên đều đúng","D. Dòng xoay chiều không thể thắp sáng bóng đèn"],a:"C. Cả hai ý trên đều đúng",subject:"Vật lý"},
      {q:"Máy biến áp dùng để:",options:["A. Biến đổi dòng điện một chiều","B. Thay đổi hiệu điện thế của dòng điện xoay chiều","C. Tích trữ điện năng","D. Chuyển điện năng thành cơ năng"],a:"B. Thay đổi hiệu điện thế của dòng điện xoay chiều",subject:"Vật lý"},
      {q:"Năng lượng địa nhiệt là:",options:["A. Năng lượng từ gió","B. Năng lượng nhiệt từ bên trong lòng Trái Đất","C. Năng lượng từ sóng biển","D. Năng lượng từ mặt trời"],a:"B. Năng lượng nhiệt từ bên trong lòng Trái Đất",subject:"Vật lý"},
      {q:"Lợi ích của việc sử dụng năng lượng tái tạo là:",options:["A. Giá thành rẻ hơn nhiên liệu hóa thạch","B. Ít gây ô nhiễm môi trường và không cạn kiệt","C. Dễ lưu trữ và vận chuyển","D. Không cần công nghệ cao"],a:"B. Ít gây ô nhiễm môi trường và không cạn kiệt",subject:"Vật lý"},
      {q:"Aluminium (Al) phản ứng được với dung dịch sodium hydroxide (NaOH), điều này chứng tỏ:",options:["A. Aluminium là kim loại mạnh nhất","B. Aluminium có tính lưỡng tính (vừa tác dụng được với acid, vừa tác dụng với base)","C. Aluminium là phi kim","D. Aluminium bị khử bởi kiềm"],a:"B. Aluminium có tính lưỡng tính (vừa tác dụng được với acid, vừa tác dụng với base)",subject:"Hóa học"},
      {q:"Dãy kim loại nào sau đây sắp xếp đúng theo thứ tự hoạt động hóa học tăng dần?",options:["A. Sodium (Na) < Magnesium (Mg) < Aluminium (Al) < Iron (Fe) < Copper (Cu)","B. Copper (Cu) < Iron (Fe) < Aluminium (Al) < Magnesium (Mg) < Sodium (Na)","C. Potassium (K) < Sodium (Na) < Magnesium (Mg) < Aluminium (Al) < Iron (Fe)","D. Iron (Fe) < Aluminium (Al) < Copper (Cu) < Magnesium (Mg) < Sodium (Na)"],a:"B. Copper (Cu) < Iron (Fe) < Aluminium (Al) < Magnesium (Mg) < Sodium (Na)",subject:"Hóa học"},
      {q:"Ứng dụng nào sau đây là của hợp kim?",options:["A. Làm đồ trang sức từ gold (Au) nguyên chất","B. Xây dựng cầu đường, nhà cửa (thép = iron + carbon)","C. Làm dây điện từ copper (Cu) nguyên chất","D. Làm gương phản chiếu từ silver (Ag) nguyên chất"],a:"B. Xây dựng cầu đường, nhà cửa (thép = iron + carbon)",subject:"Hóa học"},
      {q:"Phi kim sulfur (S) tác dụng với iron (Fe) ở nhiệt độ cao tạo ra:",options:["A. Iron(II) sulfide (FeS)","B. Iron(III) sulfide (Fe₂S₃)","C. Iron(II) disulfide (FeS₂)","D. Iron(III) oxide (Fe₂O₃)"],a:"A. Iron(II) sulfide (FeS)",subject:"Hóa học"},
      {q:"Phương pháp điện phân được dùng để tách kim loại nào sau đây?",options:["A. Iron (Fe)","B. Copper (Cu) từ quặng","C. Aluminium (Al) từ aluminium oxide (Al₂O₃)","D. Zinc (Zn)"],a:"C. Aluminium (Al) từ aluminium oxide (Al₂O₃)",subject:"Hóa học"},
      {q:"Phân biệt alkane và alkene bằng cách:",options:["A. Đốt cháy và quan sát màu lửa","B. Cho tác dụng với dung dịch bromine (Br₂): alkene làm mất màu, alkane không phản ứng","C. Đo nhiệt độ sôi","D. Quan sát trạng thái ở điều kiện thường"],a:"B. Cho tác dụng với dung dịch bromine (Br₂): alkene làm mất màu, alkane không phản ứng",subject:"Hóa học"},
      {q:"Xăng dầu được sản xuất chủ yếu từ:",options:["A. Khí thiên nhiên (natural gas)","B. Chưng cất phân đoạn dầu mỏ (petroleum)","C. Lên men tinh bột (starch)","D. Tổng hợp từ carbon dioxide (CO₂) và nước (H₂O)"],a:"B. Chưng cất phân đoạn dầu mỏ (petroleum)",subject:"Hóa học"},
      {q:"Công thức cấu tạo của ethene (C₂H₄) có đặc điểm:",options:["A. Liên kết đơn C–C","B. Liên kết đôi C=C","C. Liên kết ba C≡C","D. Vòng benzene"],a:"B. Liên kết đôi C=C",subject:"Hóa học"},
      {q:"Quá trình lên men glucose (C₆H₁₂O₆) tạo ethanol (C₂H₅OH) có phương trình:",options:["A. C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂","B. C₆H₁₂O₆ → 2CH₃COOH + 2H₂","C. C₆H₁₂O₆ + O₂ → CO₂ + H₂O","D. C₆H₁₂O₆ → C₂H₅OH + CH₃COOH"],a:"A. C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",subject:"Hóa học"},
      {q:"Ethanol (C₂H₅OH) 70% (cồn 70°) được dùng trong y tế vì:",options:["A. Nồng độ 70% có khả năng diệt khuẩn hiệu quả nhất","B. Giá rẻ nhất","C. Không gây kích ứng da","D. Có mùi thơm dễ chịu"],a:"A. Nồng độ 70% có khả năng diệt khuẩn hiệu quả nhất",subject:"Hóa học"},
      {q:"Giấm ăn thông thường có nồng độ acetic acid (CH₃COOH) khoảng:",options:["A. 1–2%","B. 4–8%","C. 15–20%","D. 30–40%"],a:"B. 4–8%",subject:"Hóa học"},
      {q:"Cellulose ((C₆H₁₀O₅)ₙ) là thành phần chính của:",options:["A. Thịt động vật","B. Mỡ động vật","C. Thành tế bào thực vật (gỗ, bông vải, giấy)","D. Sữa"],a:"C. Thành tế bào thực vật (gỗ, bông vải, giấy)",subject:"Hóa học"},
      {q:"Polypropylene (PP, (-CH₂-CH(CH₃)-)ₙ) được dùng làm:",options:["A. Ống nước, hộp nhựa, sợi vải","B. Vỏ dây điện","C. Lốp xe","D. Kính cường lực"],a:"A. Ống nước, hộp nhựa, sợi vải",subject:"Hóa học"},
      {q:"Cơ thể người sử dụng protein chủ yếu để:",options:["A. Cung cấp năng lượng tức thời","B. Xây dựng và sửa chữa mô tế bào, tổng hợp enzyme và hormone","C. Dự trữ năng lượng dài hạn","D. Hòa tan vitamin tan trong nước"],a:"B. Xây dựng và sửa chữa mô tế bào, tổng hợp enzyme và hormone",subject:"Hóa học"},
      {q:"Nucleotide là đơn vị cấu tạo của DNA, gồm các thành phần:",options:["A. Phosphoric acid (H₃PO₄), đường deoxyribose (C₅H₁₀O₄), base nitơ","B. Phosphoric acid (H₃PO₄), đường ribose (C₅H₁₀O₅), base nitơ","C. Amino acid và acid béo","D. Glucose (C₆H₁₂O₆) và nitơ"],a:"A. Phosphoric acid (H₃PO₄), đường deoxyribose (C₅H₁₀O₄), base nitơ",subject:"Sinh học"},
      {q:"Nguyên tắc bổ sung trong DNA là:",options:["A. Adenine (A) – Guanine (G); Thymine (T) – Cytosine (C)","B. Adenine (A) – Thymine (T); Guanine (G) – Cytosine (C)","C. Adenine (A) – Uracil (U); Guanine (G) – Cytosine (C)","D. Adenine (A) – Cytosine (C); Thymine (T) – Guanine (G)"],a:"B. Adenine (A) – Thymine (T); Guanine (G) – Cytosine (C)",subject:"Sinh học"},
      {q:"Quá trình dịch mã diễn ra tại:",options:["A. Nhân tế bào","B. Ribosome","C. Màng nhân","D. Ty thể (mitochondria)"],a:"B. Ribosome",subject:"Sinh học"},
      {q:"Một phân tử mRNA có 300 codon (không kể codon kết thúc). Chuỗi polypeptide tổng hợp có số amino acid là:",options:["A. 100","B. 200","C. 300","D. 600"],a:"C. 300",subject:"Sinh học"},
      {q:"Nhiễm sắc thể (NST) được cấu tạo chủ yếu từ:",options:["A. RNA và lipid","B. DNA và protein histone","C. Polysaccharide và protein","D. Lipid và carbohydrate"],a:"B. DNA và protein histone",subject:"Sinh học"},
      {q:"Kỳ trung gian (interphase) trong chu kỳ tế bào có ý nghĩa:",options:["A. Tế bào phân chia thành hai tế bào con","B. DNA nhân đôi, tế bào tổng hợp nguyên liệu chuẩn bị cho phân bào","C. NST tách về hai cực","D. Màng nhân tan biến"],a:"B. DNA nhân đôi, tế bào tổng hợp nguyên liệu chuẩn bị cho phân bào",subject:"Sinh học"},
      {q:"Ý nghĩa của nguyên phân đối với sinh vật là:",options:["A. Tạo ra giao tử","B. Duy trì bộ NST đặc trưng, giúp sinh trưởng và tái sinh mô","C. Tạo ra sự đa dạng di truyền","D. Làm giảm số lượng NST"],a:"B. Duy trì bộ NST đặc trưng, giúp sinh trưởng và tái sinh mô",subject:"Sinh học"},
      {q:"Ý nghĩa của giảm phân là:",options:["A. Giữ nguyên số lượng NST qua các thế hệ","B. Tạo giao tử (n); kết hợp với thụ tinh để duy trì bộ NST 2n đặc trưng của loài","C. Tăng số lượng tế bào cơ thể","D. Tổng hợp protein"],a:"B. Tạo giao tử (n); kết hợp với thụ tinh để duy trì bộ NST 2n đặc trưng của loài",subject:"Sinh học"},
      {q:"Ở đậu Hà Lan, khi lai thuần chủng hoa tím × hoa trắng, F1 toàn hoa tím. Tính trạng trội là:",options:["A. Hoa trắng","B. Hoa tím","C. Cả hai đều trội","D. Không xác định được"],a:"B. Hoa tím",subject:"Sinh học"},
      {q:"Cho cây cao (Aa) tự thụ phấn, tỉ lệ cây thấp (aa) ở đời con là:",options:["A. 1/4","B. 1/2","C. 3/4","D. 0"],a:"A. 1/4",subject:"Sinh học"},
      {q:"Trong phép lai AaBb × aabb, tỉ lệ kiểu hình ở đời con (A trội hoàn toàn với a; B trội hoàn toàn với b) là:",options:["A. 9 : 3 : 3 : 1","B. 3 : 1","C. 1 : 1 : 1 : 1","D. 1 : 2 : 1"],a:"C. 1 : 1 : 1 : 1",subject:"Sinh học"},
      {q:"Mendel sử dụng đặc điểm nào của cây đậu Hà Lan để thuận tiện cho thí nghiệm lai?",options:["A. Cây to, dễ quan sát","B. Hoa lưỡng tính, có thể tự thụ phấn hoặc giao phấn có kiểm soát","C. Vòng đời ngắn 1–2 tháng","D. Có thể sống ở mọi điều kiện khí hậu"],a:"B. Hoa lưỡng tính, có thể tự thụ phấn hoặc giao phấn có kiểm soát",subject:"Sinh học"},
    ]
  },
    { 
        name: 'Trường PTDTBT THCS Hùng Lợi', 
        year: 2026, 
        description: 'Đề thi thử PTDTBT THCS Hùng Lợi lần 2',
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
        description: 'Đề thi thử Trường PTDTBT THCS Hùng Lợi- Lần 1',
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

function startExamWithQuestions(questions, title, opts = {}) {
    const durationMinutes = Number.isFinite(opts.durationMinutes) ? opts.durationMinutes : 90;
    const totalScore = Number.isFinite(opts.totalScore) ? opts.totalScore : 10;

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
        // Image alias compatibility
        if (!q.image && q.img) q.image = q.img;
        // Shuffle options & keep answer synced
        try {
            if (Array.isArray(q.options) && q.options.length > 0) {
                const rawOpts = q.options.map(o => String(o || '').replace(/^[A-D]\.\s*/i, '').trim());
                
                // Get correct answer text (without A/B/C/D prefix)
                const correctText = String(q.a || q.answer || '').replace(/^[A-D]\.\s*/i, '').trim();
                
                // Find which raw option matches the correct answer
                let origIdx = rawOpts.findIndex(r => r === correctText);
                if (origIdx === -1 && correctText) {
                    // Fallback: try fuzzy match with lowercase + normalize spaces
                    const normalized = correctText.toLowerCase().replace(/\s+/g, ' ');
                    origIdx = rawOpts.findIndex(r => r.toLowerCase().replace(/\s+/g, ' ') === normalized);
                }

                // Shuffle indices (Fisher-Yates)
                const idxs = rawOpts.map((_, i) => i);
                for (let i = idxs.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
                }

                // Build new options with new letters
                const letters = ['A','B','C','D'];
                const newOptions = [];
                let newCorrectAnswer = null;
                
                for (let i = 0; i < idxs.length; i++) {
                    const originalIdx = idxs[i];
                    const text = rawOpts[originalIdx] || '';
                    newOptions.push(`${letters[i]}. ${text}`);
                    
                    // If this is the position where correct answer ended up
                    if (originalIdx === origIdx) {
                        newCorrectAnswer = `${letters[i]}. ${text}`;
                    }
                }

                // Update options and answer
                q.options = newOptions;
                if (newCorrectAnswer) {
                    q.a = newCorrectAnswer;
                } else if (correctText) {
                    // Safety: reconstruct answer if shuffle lost track
                    const foundOpt = newOptions.find(o => o.replace(/^[A-D]\.\s*/i, '').trim() === correctText);
                    if (foundOpt) q.a = foundOpt;
                }
            }
        } catch (e) {
            console.error('Shuffle options error:', e);
        }
        return q;
    }

    questions = questions.map(_normalizeQuestion);
    let qIndex = 0, examScore = 0, correctCount = 0;

    const scorePerQuestion = questions.length > 0 ? (totalScore / questions.length) : 0;
    let timeLeft = Math.max(1, Math.round(durationMinutes * 60));
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('contentArea').innerHTML = `
        <div class="d-flex justify-content-between mb-4 align-items-center">
            <div>
                <h3 class="exam-title text-info">${title}</h3>
                <div class="exam-subtitle">${questions.length} câu trắc nghiệm — Thời gian ${durationMinutes} phút</div>
            </div>
            <h4 id="examTimer" class="text-danger">Thời gian: ${String(Math.floor(timeLeft / 60)).padStart(2, '0')}:${String(timeLeft % 60).padStart(2, '0')}</h4>
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
                ${q.image ? `<div class="text-center mb-3"><img src="${q.image}" alt="Hình minh họa" class="img-fluid rounded" style="max-width: 100%; height: auto;"></div>` : ''}
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
                    examScore += scorePerQuestion;
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
                                        <h3 class="text-primary display-4 fw-bold">${examScore.toFixed(2)}/${totalScore}</h3>
                                        <div class="progress mb-3" style="height: 20px;">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: ${Math.min(100, (examScore / totalScore) * 100)}%;" aria-valuenow="${examScore}" aria-valuemin="0" aria-valuemax="${totalScore}"></div>
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

// Short exam (3 subjects) modal
function showShortExamModal() {
    const modal = document.getElementById('shortExamModal');
    if (!modal) return;

    const lyAvail = Array.isArray(window.short_exam_questions?.ly) ? window.short_exam_questions.ly.length : 0;
    const hoaAvail = Array.isArray(window.short_exam_questions?.hoa) ? window.short_exam_questions.hoa.length : 0;
    const sinhAvail = Array.isArray(window.short_exam_questions?.sinh) ? window.short_exam_questions.sinh.length : 0;

    const lyInput = document.getElementById('shortLyCount');
    const hoaInput = document.getElementById('shortHoaCount');
    const sinhInput = document.getElementById('shortSinhCount');
    const durationInput = document.getElementById('shortExamDuration');
    const availabilityEl = document.getElementById('shortExamAvailability');

    if (lyInput) {
        lyInput.max = String(lyAvail);
        const lyCurrent = parseInt(lyInput.value || '0', 10) || 0;
        if (lyCurrent > lyAvail) lyInput.value = String(lyAvail);
        if (!lyInput.value) lyInput.value = String(Math.min(5, lyAvail));
        lyInput.oninput = updateShortExamTotal;
    }
    if (hoaInput) {
        hoaInput.max = String(hoaAvail);
        const hoaCurrent = parseInt(hoaInput.value || '0', 10) || 0;
        if (hoaCurrent > hoaAvail) hoaInput.value = String(hoaAvail);
        if (!hoaInput.value) hoaInput.value = String(Math.min(5, hoaAvail));
        hoaInput.oninput = updateShortExamTotal;
    }
    if (sinhInput) {
        sinhInput.max = String(sinhAvail);
        const sinhCurrent = parseInt(sinhInput.value || '0', 10) || 0;
        if (sinhCurrent > sinhAvail) sinhInput.value = String(sinhAvail);
        if (!sinhInput.value) sinhInput.value = String(Math.min(5, sinhAvail));
        sinhInput.oninput = updateShortExamTotal;
    }
    if (durationInput) {
        durationInput.max = '90';
        durationInput.min = '5';
        if (!durationInput.value) durationInput.value = '30';
    }
    if (availabilityEl) {
        availabilityEl.textContent = `Có sẵn: Lý ${lyAvail} • Hóa ${hoaAvail} • Sinh ${sinhAvail}`;
    }

    updateShortExamTotal();
    modal.style.display = 'flex';
}

function closeShortExamModal() {
    const modal = document.getElementById('shortExamModal');
    if (modal) modal.style.display = 'none';
}

function updateShortExamTotal() {
    const ly = parseInt(document.getElementById('shortLyCount')?.value || '0', 10) || 0;
    const hoa = parseInt(document.getElementById('shortHoaCount')?.value || '0', 10) || 0;
    const sinh = parseInt(document.getElementById('shortSinhCount')?.value || '0', 10) || 0;
    const total = ly + hoa + sinh;
    const totalEl = document.getElementById('shortExamTotal');
    if (totalEl) totalEl.textContent = String(total);
}

function startShortExamFromModal() {
    const lyAvail = Array.isArray(window.short_exam_questions?.ly) ? window.short_exam_questions.ly.length : 0;
    const hoaAvail = Array.isArray(window.short_exam_questions?.hoa) ? window.short_exam_questions.hoa.length : 0;
    const sinhAvail = Array.isArray(window.short_exam_questions?.sinh) ? window.short_exam_questions.sinh.length : 0;

    let lyCount = parseInt(document.getElementById('shortLyCount')?.value || '0', 10) || 0;
    let hoaCount = parseInt(document.getElementById('shortHoaCount')?.value || '0', 10) || 0;
    let sinhCount = parseInt(document.getElementById('shortSinhCount')?.value || '0', 10) || 0;
    const durationMinutes = parseInt(document.getElementById('shortExamDuration')?.value || '30', 10) || 30;

    lyCount = Math.max(0, Math.min(lyCount, lyAvail));
    hoaCount = Math.max(0, Math.min(hoaCount, hoaAvail));
    sinhCount = Math.max(0, Math.min(sinhCount, sinhAvail));

    const total = lyCount + hoaCount + sinhCount;
    if (total <= 0) {
        alert('Vui lòng chọn số câu cho ít nhất 1 phân môn (Lý/Hóa/Sinh).');
        return;
    }

    const lyQs = _khtnSample(window.short_exam_questions?.ly || [], lyCount).map(q => _khtnCloneQuestion(q, 'Vật lý'));
    const hoaQs = _khtnSample(window.short_exam_questions?.hoa || [], hoaCount).map(q => _khtnCloneQuestion(q, 'Hóa học'));
    const sinhQs = _khtnSample(window.short_exam_questions?.sinh || [], sinhCount).map(q => _khtnCloneQuestion(q, 'Sinh học'));

    const questions = [...lyQs, ...hoaQs, ...sinhQs];
    _khtnShuffleInPlace(questions);

    closeShortExamModal();
    startExamWithQuestions(questions, `Đề tập huấn (${total} câu)`, { durationMinutes, totalScore: 10 });
}

function _khtnCloneQuestion(raw, subject) {
    const q = Object.assign({}, raw);
    if (Array.isArray(raw?.options)) q.options = raw.options.slice();
    q.subject = subject;
    return q;
}

function _khtnShuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function _khtnSample(arr, n) {
    if (!Array.isArray(arr) || n <= 0) return [];
    const copy = arr.slice();
    _khtnShuffleInPlace(copy);
    return copy.slice(0, Math.min(n, copy.length));
}