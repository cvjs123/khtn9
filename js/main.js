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
    currentModalSubject = subject;
    const modal = document.getElementById('subjectModal');
    if (!modal) return;
    document.getElementById('subjectModalTitle').textContent = `Chọn cấu hình ôn tập ${subject === 'ly' ? 'Vật Lý' : subject === 'hoa' ? 'Hóa Học' : 'Sinh Học'}`;
    
    const topicSelect = document.getElementById('subjectTopicSelect');
    topicSelect.innerHTML = '<option value="all">Tất cả</option>';
    
    const topics = window.topics_by_subject?.[subject] || [];
    topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        topicSelect.appendChild(option);
    });
    
    modal.style.display = 'flex';
}

function closeSubjectModal() {
    const modal = document.getElementById('subjectModal');
    if (modal) modal.style.display = 'none';
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

    const topicSelect = document.getElementById('subjectTopicSelect');
    const countInput = document.getElementById('subjectCountInput');
    const topic = topicSelect?.value.trim() || 'all';
    let count = parseInt(countInput?.value) || 10;

    // Calculate available questions with tolerant matching
    const baseName = `questions_${subject}`;
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

    if (count > available) {
        // Limit to available instead of alerting
        count = available;
    }

    if (typeof startSubjectQuiz === 'function') {
        startSubjectQuiz(subject, topic === 'all' ? null : topic, count);
    } else {
        alert('Lỗi: Hàm startSubjectQuiz chưa được định nghĩa trong quiz.js');
    }
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
    renderUserArea();
    updateProgressSidebar();
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
        btn.classList.remove('state-unanswered','state-correct','state-wrong');
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
        const feedbackEl = document.getElementById('examFeedback');
        const actionContainer = document.getElementById('examActionContainer');
        if (!feedbackEl || !actionContainer) return nextQ(selected);
        const optButtons = document.querySelectorAll('.exam-opt-btn');
        optButtons.forEach(b => {
            const opt = b.getAttribute('data-opt');
            b.classList.remove('btn-outline-info', 'btn-outline-primary', 'btn-outline-success', 'btn-outline-danger');
            if (opt === q.a) {
                b.classList.add('btn-success');
            } else if (opt === selected && selected !== q.a) {
                b.classList.add('btn-danger');
            } else {
                b.classList.add('btn-secondary');
            }
            b.disabled = true;
        });

        if (selected === q.a) {
            examScore++;
            playSound('correctSound');
            feedbackEl.innerHTML = `
                <div class="alert alert-success p-4 rounded shadow-sm">
                    <h4 class="fw-bold mb-2">✅ Đúng rồi!</h4>
                    <p class="mb-0">${q.explain || 'Tuyệt vời, bạn làm tốt!'}</p>
                </div>
            `;
            qStatus[qIndex] = 'correct';
            qAnswers[qIndex] = selected;
            updateNavStatus(qIndex);
        } else {
            playSound('wrongSound');
            feedbackEl.innerHTML = `
                <div class="alert alert-danger p-4 rounded shadow-sm">
                    <h4 class="fw-bold mb-2">❌ Sai rồi!</h4>
                    <p class="mb-1">Đáp án đúng: <strong>${q.a}</strong></p>
                    <p class="mb-0">${q.explain || ''}</p>
                </div>
            `;
            qStatus[qIndex] = 'wrong';
            qAnswers[qIndex] = selected;
            updateNavStatus(qIndex);
        }

        const isLast = (qIndex + 1 === examQ.length);
        actionContainer.style.display = 'block';
        if (isLast) {
            actionContainer.innerHTML = `
                <button class="btn btn-success btn-lg px-5 py-3" id="examFinishBtn">Hoàn thành</button>
            `;
            document.getElementById('examFinishBtn').addEventListener('click', () => endExam());
        } else {
            actionContainer.innerHTML = `
                <button class="btn btn-success btn-lg px-5 py-3" id="examNextBtn">Tiếp theo</button>
            `;
            document.getElementById('examNextBtn').addEventListener('click', () => {
                qIndex++;
                showQ();
            });
        }
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
