// js/quiz.js - Trắc nghiệm từng môn - NÚT "HOÀN THÀNH" HOẠT ĐỘNG CHẮC CHẮN (cách đơn giản nhất)

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let currentSubject = '';
let currentTopic = '';

// Expose current topic to global scope for progress display
window.currentTopic = currentTopic;
window.currentSubject = currentSubject;

function startSubjectQuiz(subject, topic = null, count = null) {
    currentSubject = subject;
    currentTopic = topic;
    window.currentTopic = topic;
    window.currentSubject = subject;

    // Resolve base question array for the subject
    const baseName = `questions_${subject}`;
    let questions = window[baseName] || [];

    // If a by-topic mapping exists and topic requested, use it.
    // Perform a tolerant lookup so minor differences in punctuation/case/diacritics
    // between the UI topic strings and mapping keys don't prevent a match.
    const byTopic = window[`${baseName}_by_topic`];
    if (byTopic && topic) {
        const normalize = s => String(s || '')
            .normalize('NFKD')                 // decompose diacritics
            .replace(/[\u0300-\u036f]/g, '') // remove diacritic marks
            .replace(/[–—−]/g, '-')            // normalize various dash chars to hyphen
            .replace(/\s+/g, ' ')            // collapse whitespace
            .trim()
            .toLowerCase();

        const target = normalize(topic);

        // If user selected "Tất cả" and requested a specific count, build a balanced
        // random package by sampling across per-topic arrays (like Hóa behaviour).
        if (target === normalize('Tất cả')) {
            const perTopicKeys = Object.keys(byTopic).filter(k => normalize(k) !== normalize('Tất cả'));
            if (perTopicKeys.length > 0 && typeof count === 'number' && count > 0) {
                // Get all unique questions from all topics
                const all = [].concat(...perTopicKeys.map(k => Array.isArray(byTopic[k]) ? byTopic[k] : []));
                // Remove duplicates based on question text
                const uniqueQuestions = [];
                const seen = new Set();
                for (const q of all) {
                    if (q && q.q && !seen.has(q.q)) {
                        seen.add(q.q);
                        uniqueQuestions.push(q);
                    }
                }
                // Shuffle and limit to requested count or available questions
                const shuffle = arr => {
                    for (let i = arr.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                    }
                };
                shuffle(uniqueQuestions);
                questions = uniqueQuestions.slice(0, Math.min(count, uniqueQuestions.length));
                // Update count to reflect actual number of questions available
                count = questions.length;
            } else {
                // fallback to existing 'Tất cả' array if no count specified
                let t = byTopic['Tất cả'] || byTopic['TAT CA'] || null;
                if (!Array.isArray(t)) {
                    for (const k of Object.keys(byTopic)) {
                        if (normalize(k) === target) { t = byTopic[k]; break; }
                    }
                }
                if (Array.isArray(t)) questions = t;
            }
        } else {
            // Regular topic lookup (tolerant matching)
            let t = byTopic[topic];
            if (!Array.isArray(t)) {
                for (const k of Object.keys(byTopic)) {
                    if (normalize(k) === target) {
                        t = byTopic[k];
                        break;
                    }
                }
            }
            if (Array.isArray(t)) questions = t;
        }
    }

    // Update the global questions array for this subject to reflect current topic selection
    // This ensures progress bars show the correct count for the selected topic
    if (topic && topic !== 'Tất cả') {
        window[baseName] = questions;
    }

    // Update progress sidebar to reflect the new question count
    if (typeof updateProgressSidebar === 'function') {
        updateProgressSidebar();
    }

    if (!Array.isArray(questions) || questions.length === 0) {
        document.getElementById('contentArea').innerHTML = `
            <div class="text-center py-5">
                <h3 class="text-danger">Không có câu hỏi cho môn này!</h3>
                <div class="back-btn-container">
                    <button class="btn btn-primary btn-lg" onclick="backToMenu()">← Quay lại menu chính</button>
                </div>
            </div>
        `;
        return;
    }
    // Shuffle and limit if Count provided
    currentQuiz = [...questions];
    // Simple Fisher-Yates shuffle
    for (let i = currentQuiz.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentQuiz[i], currentQuiz[j]] = [currentQuiz[j], currentQuiz[i]];
    }
    if (typeof count === 'number' && count > 0) {
        currentQuiz = currentQuiz.slice(0, Math.min(count, currentQuiz.length));
        // Update count to reflect actual number of questions available
        count = currentQuiz.length;
    }
    currentQuestion = 0;
    score = 0;
    document.getElementById('mainMenu').style.display = 'none';
    showSubjectQuestion();
}

function showSubjectQuestion() {
    // Normalize question object so older/newer formats both work
    const raw = currentQuiz[currentQuestion];
    const q = Object.assign({}, raw);
    // q text
    if (!q.q && q.question) q.q = q.question;
    // options: if object {A:...,B:...} convert to array ['A. ...', ...]
    if (!Array.isArray(q.options) && typeof q.options === 'object' && q.options !== null) {
        q.options = [
            (q.options.A ? `A. ${q.options.A}` : 'A.'),
            (q.options.B ? `B. ${q.options.B}` : 'B.'),
            (q.options.C ? `C. ${q.options.C}` : 'C.'),
            (q.options.D ? `D. ${q.options.D}` : 'D.')
        ];
    }
    // answer field: accept 'a' or 'answer' (single letter) and map to full option text
    if (!q.a && q.answer) {
        const letter = String(q.answer).trim().charAt(0).toUpperCase();
        const map = { A:0, B:1, C:2, D:3 };
        const idx = map[letter];
        if (Array.isArray(q.options) && typeof idx === 'number') q.a = q.options[idx];
        else q.a = q.answer;
    }
    // explanation alias
    if (!q.explain && q.explanation) q.explain = q.explanation;
    // image alias
    if (!q.image && q.img) q.image = q.img;
    // Persist normalized question back to the quiz array so selectAnswer uses the same shape
    currentQuiz[currentQuestion] = q;
    // Compute canonical correct letter (A-D) for robust comparisons
    if (q.answer) {
        q.correctLetter = String(q.answer).trim().charAt(0).toUpperCase();
    } else if (q.a) {
        const maybe = String(q.a).trim().charAt(0).toUpperCase();
        if (/^[A-D]$/.test(maybe)) q.correctLetter = maybe;
        else if (Array.isArray(q.options)) {
            const idx = q.options.findIndex(opt => opt === q.a);
            if (idx >= 0) q.correctLetter = ['A','B','C','D'][idx];
        }
    }
    // RANDOMIZE option order so correct answer isn't always same letter
    // Track the correct option by text (not by old A/B/C/D label), then re-derive the new letter after shuffling.
    try {
        if (Array.isArray(q.options) && q.options.length > 0) {
            const stripLabel = (s) => String(s || '').replace(/^[A-D]\.?\s*/i, '').trim();
            const letters = ['A','B','C','D'];

            // Determine correct answer text before shuffling.
            let correctText = null;
            if (q.a) {
                correctText = stripLabel(q.a);
            } else if (q.answer && Array.isArray(q.options)) {
                const map = { A:0, B:1, C:2, D:3 };
                const letter = String(q.answer).trim().charAt(0).toUpperCase();
                const idx = map[letter];
                if (typeof idx === 'number' && q.options[idx]) correctText = stripLabel(q.options[idx]);
            } else if (q.correctLetter && Array.isArray(q.options)) {
                const map = { A:0, B:1, C:2, D:3 };
                const idx = map[q.correctLetter];
                if (typeof idx === 'number' && q.options[idx]) correctText = stripLabel(q.options[idx]);
            }

            const rawTexts = q.options.map(stripLabel);

            // Build shuffled index order
            const idxs = rawTexts.map((_, i) => i);
            for (let i = idxs.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
            }

            // Create new labeled options
            const newOptions = idxs.map((oi, i) => letters[i] + '. ' + (rawTexts[oi] || ''));
            q.options = newOptions;

            // Recompute correct letter (and q.a for display) based on the correct text.
            if (correctText) {
                let found = newOptions.findIndex(o => stripLabel(o) === correctText);
                
                // Fuzzy match fallback: lowercase + normalize whitespace
                if (found < 0 && correctText) {
                    const normalized = correctText.toLowerCase().replace(/\s+/g, ' ');
                    found = newOptions.findIndex(o => stripLabel(o).toLowerCase().replace(/\s+/g, ' ') === normalized);
                }
                
                if (found >= 0) {
                    q.correctLetter = letters[found];
                    q.a = newOptions[found];
                }
            }
        }
    } catch (e) {
        // ignore shuffling errors and fall back to original ordering
    }
    const isLastQuestion = (currentQuestion + 1 === currentQuiz.length);

    document.getElementById('contentArea').innerHTML = `
        <div class="card shadow-lg mb-4">
            <div class="card-header text-center bg-primary text-white py-4">
                <h4 class="fw-bold fs-3 mb-0">Câu ${currentQuestion + 1} / ${currentQuiz.length}</h4>
            </div>
            <div class="card-body p-5">
                <h5 class="fw-bold fs-4 mb-5 text-dark">${q.q}</h5>
                ${q.image ? `<div class="text-center mb-4"><img src="${q.image}" alt="Hình minh họa" class="img-fluid rounded" style="max-width: 100%; height: auto;"></div>` : ''}
                <div class="row g-4">
                    ${Array.isArray(q.options) ? q.options.map(opt => `
                        <div class="col-12 col-md-6">
                            <button class="btn btn-outline-primary w-100 py-4 fs-5 fw-medium shadow-sm"
                                    onclick="selectAnswer('${opt.replace(/'/g, "\\'")}')">
                                ${opt}
                            </button>
                        </div>
                    `).join('') : ''}
                </div>

                <div id="subjectFeedback" class="mt-5"></div>

                <!-- Nút hành động -->
                <div class="d-flex justify-content-between mt-5">
                    <button class="btn btn-secondary btn-lg px-4" onclick="backToMenu()">
                        ← Quay lại menu chính
                    </button>
                    <div id="actionBtnContainer" style="display: none;">
                        ${isLastQuestion ? `
                            <button class="btn btn-success btn-lg px-5 py-3 shadow" onclick="finishQuiz()">
                                <i class="fas fa-check-circle me-2"></i> Hoàn thành
                            </button>
                        ` : `
                            <button class="btn btn-success btn-lg px-5 py-3 shadow" onclick="nextQuestion()">
                                <i class="fas fa-arrow-right me-2"></i> Tiếp theo
                            </button>
                        `}
                    </div>
                </div>
    `;
}

function selectAnswer(selected) {
    const q = currentQuiz[currentQuestion];
    const feedback = document.getElementById('subjectFeedback');
    const actionBtnContainer = document.getElementById('actionBtnContainer');

    // Vô hiệu hóa nút đáp án
    const buttons = document.querySelectorAll('#contentArea button.btn-outline-primary');
    buttons.forEach(btn => btn.disabled = true);

    // Compare by letter to avoid issues with formatting/spacing in option strings
    const selLetter = String(selected || '').trim().charAt(0).toUpperCase();
    const correctLetter = q.correctLetter || (q.a ? String(q.a).trim().charAt(0).toUpperCase() : null);
    const isCorrect = selLetter && correctLetter && selLetter === correctLetter;

    if (isCorrect) {
        score++;
        playSound('correctSound');
        feedback.innerHTML = `
            <div class="alert alert-success p-5 rounded shadow">
                <h4 class="fw-bold mb-3">✅ Đúng rồi!</h4>
                <p class="fs-5">${q.explain || 'Tuyệt vời, bạn đã nắm vững kiến thức này!'}</p>
            </div>
        `;
    } else {
        playSound('wrongSound');
        // Determine display of correct answer from current option order (post-shuffle)
        let correctDisplay = '';
        if (Array.isArray(q.options) && correctLetter) {
            const map = { A:0, B:1, C:2, D:3 };
            const idx = map[correctLetter];
            if (typeof idx === 'number' && q.options[idx]) correctDisplay = q.options[idx];
        }
        if (!correctDisplay) correctDisplay = q.a || '';
        feedback.innerHTML = `
            <div class="alert alert-danger p-5 rounded shadow">
                <h4 class="fw-bold mb-3">❌ Sai rồi!</h4>
                <p class="mb-2 fs-5">Đáp án đúng: <strong>${correctDisplay}</strong></p>
                <p class="fs-5">${q.explain || ''}</p>
            </div>
        `;
    }

    // HIỆN NÚT HÀNH ĐỘNG
    actionBtnContainer.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    showSubjectQuestion();
}

function finishQuiz() {
    // Play success short effect
    playSound('successSound');

    // Decide which longer track to play based on performance
    const total = currentQuiz.length || 1;
    const pct = Math.round((score / total) * 100);
    if (pct >= 70) {
        playSound('completionMusic');
    } else {
        playSound('encourageSound');
    }

    saveScore(score, currentSubject);

    document.getElementById('contentArea').innerHTML = `
        <div class="text-center py-5 bg-light rounded shadow-lg mx-4">
            <div class="p-5">
                <h1 class="display-3 text-success fw-bold mb-4">🎉 Hoàn thành xuất sắc!</h1>
                <h2 class="display-5 mb-4">
                    Điểm số: <strong class="text-primary fw-bold">${score}</strong> / ${currentQuiz.length}
                </h2>
                <p class="lead fs-3 text-success mb-5">
                    Môn <strong>${getSubjectName(currentSubject)}</strong> đã hoàn thành!<br>
                    Tiến độ đã được cập nhật tự động.
                </p>
            </div>
            <div class="back-btn-container pb-5">
                <button class="btn btn-primary btn-lg px-5 py-3 shadow" onclick="backToMenu()">
                    ← Quay lại menu chính
                </button>
            </div>
        </div>
    `;
}

function getSubjectName(subject) {
    if (subject === 'ly') return "Vật Lý";
    if (subject === 'hoa') return "Hóa Học";
    if (subject === 'sinh') return "Sinh Học";
    return "";
}

function backToMenu() {
    document.getElementById('mainMenu').style.display = 'grid';
    document.getElementById('contentArea').innerHTML = '';
    currentQuiz = [];
    currentQuestion = 0;
    score = 0;
    currentSubject = '';
    currentTopic = '';
    window.currentSubject = '';
    window.currentTopic = '';
    // Stop background music when returning to main menu
    try {
        const bg = document.getElementById('bgMusic');
        if (bg) { bg.pause(); bg.currentTime = 0; }
    } catch (e) {}
}
