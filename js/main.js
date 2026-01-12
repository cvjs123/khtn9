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
}

function logoutUser() {
    data.loggedInUser = null;
    data.progress = { ly: { percent: 0, score: 0, done: 0 }, hoa: { percent: 0, score: 0, done: 0 }, sinh: { percent: 0, score: 0, done: 0 }, total: { percent: 0, bestScore: 0 } };
    persistData();
    renderUserArea();
    updateProgressSidebar();
    location.reload();
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
                user.progress.ly.done++;
                user.progress.ly.score += score;
                user.progress.ly.percent = Math.round((user.progress.ly.score / (user.progress.ly.done * 10)) * 100);
            } else if (subject === 'hoa') {
                user.progress.hoa.done++;
                user.progress.hoa.score += score;
                user.progress.hoa.percent = Math.round((user.progress.hoa.score / (user.progress.hoa.done * 10)) * 100);
            } else if (subject === 'sinh') {
                user.progress.sinh.done++;
                user.progress.sinh.score += score;
                user.progress.sinh.percent = Math.round((user.progress.sinh.score / (user.progress.sinh.done * 10)) * 100);
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
        const total = (Array.isArray(window.questions_ly) ? window.questions_ly.length : (window.questions_ly_by_topic && Array.isArray(window.questions_ly_by_topic['Tất cả']) ? window.questions_ly_by_topic['Tất cả'].length : 0));
        const lyPercent = total > 0 ? Math.round((done / total) * 100) : 0;
        const lyBar = document.getElementById('lyBar');
        if (lyBar) {
            lyBar.style.width = `${lyPercent}%`;
            lyBar.textContent = `${lyPercent}%`;
            lyBar.classList.remove('bg-danger','bg-warning','bg-success');
            if (lyPercent < 33) lyBar.classList.add('bg-danger');
            else if (lyPercent < 66) lyBar.classList.add('bg-warning');
            else lyBar.classList.add('bg-success');
        }
        const lyLabel = document.getElementById('lyCountLabel');
        if (lyLabel) lyLabel.textContent = `${done}/${total}`;
        document.getElementById('lyPercent').textContent = `${lyPercent}%`;
    } catch (e) {}

    // Hóa Học
    try {
        const done = (data.progress && data.progress.hoa && Number(data.progress.hoa.done)) || 0;
        const total = (Array.isArray(window.questions_hoa) ? window.questions_hoa.length : (window.questions_hoa_by_topic && Array.isArray(window.questions_hoa_by_topic['Tất cả']) ? window.questions_hoa_by_topic['Tất cả'].length : 0));
        const hoaPercent = total > 0 ? Math.round((done / total) * 100) : 0;
        const hoaBar = document.getElementById('hoaBar');
        if (hoaBar) {
            hoaBar.style.width = `${hoaPercent}%`;
            hoaBar.textContent = `${hoaPercent}%`;
            hoaBar.classList.remove('bg-danger','bg-warning','bg-success');
            if (hoaPercent < 33) hoaBar.classList.add('bg-danger');
            else if (hoaPercent < 66) hoaBar.classList.add('bg-warning');
            else hoaBar.classList.add('bg-success');
        }
        const hoaLabel = document.getElementById('hoaCountLabel');
        if (hoaLabel) hoaLabel.textContent = `${done}/${total}`;
        document.getElementById('hoaPercent').textContent = `${hoaPercent}%`;
    } catch (e) {}

    // Sinh Học
    try {
        const done = (data.progress && data.progress.sinh && Number(data.progress.sinh.done)) || 0;
        const total = (Array.isArray(window.questions_sinh) ? window.questions_sinh.length : (window.questions_sinh_by_topic && Array.isArray(window.questions_sinh_by_topic['Tất cả']) ? window.questions_sinh_by_topic['Tất cả'].length : 0));
        const sinhPercent = total > 0 ? Math.round((done / total) * 100) : 0;
        const sinhBar = document.getElementById('sinhBar');
        if (sinhBar) {
            sinhBar.style.width = `${sinhPercent}%`;
            sinhBar.textContent = `${sinhPercent}%`;
            sinhBar.classList.remove('bg-danger','bg-warning','bg-success');
            if (sinhPercent < 33) sinhBar.classList.add('bg-danger');
            else if (sinhPercent < 66) sinhBar.classList.add('bg-warning');
            else sinhBar.classList.add('bg-success');
        }
        const sinhLabel = document.getElementById('sinhCountLabel');
        if (sinhLabel) sinhLabel.textContent = `${done}/${total}`;
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

// Update leaderboard
function updateLeaderboard() {
    const lb = document.getElementById('leaderboard');
    if (!lb) return;
    lb.innerHTML = '';
    data.leaderboard.forEach((item, i) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between';
        li.innerHTML = `<strong>${i + 1}.</strong> ${item.name} <span class="badge bg-primary">${item.score}/40</span>`;
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
let currentModalSubject = '';

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
                'HỢP CHẤT HỮU CƠ – HIĐROCACBON – NHIÊN LIỆU',
                'ANCOL ETYLIC – AXIT AXETIC – ESTE',
                'HÓA HỮU CƠ TRONG ĐỜI SỐNG',
                'TÀI NGUYÊN – MÔI TRƯỜNG'
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

    modal.style.display = 'flex';
}

function closeSubjectModal() {
    const modal = document.getElementById('subjectModal');
    if (modal) modal.style.display = 'none';
}

function startFilteredQuiz(subject) {
    closeSubjectModal();

    const topic = document.getElementById('subjectTopicSelect')?.value || 'all';
    const count = parseInt(document.getElementById('subjectCountInput')?.value) || 10;

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
