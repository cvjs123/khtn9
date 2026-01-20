let examTimer;

// Utility function to select random questions
function _selectRandom(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, array.length));
}

function startFullExam() {
    // Select questions according to exam pattern analysis
    // Physics: 14 questions (6 recognition, 4 comprehension, 4 application) - 4 energy, 2 light, 4 electricity, 2 electromagnetism, 2 energy in life
    let lyQuestions = [].concat(
        _selectRandom(window.questions_ly_nhan_biet || questions_ly, 6),
        _selectRandom(window.questions_ly_thong_hieu || [], 4),
        _selectRandom(window.questions_ly_van_dung || [], 4)
    ).map(q => ({ ...q, subject: 'Vật lý' }));

    // Chemistry: 14 questions (6 recognition, 4 comprehension, 4 application) - 5 metals-nonmetals, 3 organic, 3 ethanol-acetic, 3 bio compounds
    let hoaQuestions = [].concat(
        _selectRandom(window.questions_hoa_nhan_biet || questions_hoa, 6),
        _selectRandom(window.questions_hoa_thong_hieu || [], 4),
        _selectRandom(window.questions_hoa_van_dung || [], 4)
    ).map(q => ({ ...q, subject: 'Hóa học' }));

    // Biology: 12 questions (6 recognition, 6 comprehension) - 4 molecular genetics, 4 cellular genetics, 4 Mendel
    let sinhQuestions = [].concat(
        _selectRandom(window.questions_sinh_nhan_biet || questions_sinh, 6),
        _selectRandom(window.questions_sinh_thong_hieu || [], 6)
    ).map(q => ({ ...q, subject: 'Sinh học' }));

    let examQ = [...lyQuestions, ...hoaQuestions, ...sinhQuestions];

    // Shuffle the combined questions
    examQ = examQ.sort(() => 0.5 - Math.random());

    // Normalize questions so `options` is always an array and `a` contains the full option text
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
        // Shuffle options to avoid correct answers always being at same label
        try {
            if (Array.isArray(q.options) && q.options.length > 0) {
                const rawOpts = q.options.map(o => String(o || '').replace(/^[A-D]\.\s*/i, '').trim());
                // Determine original correct index
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

                // Shuffle indices
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
                // If we couldn't detect original, try to match by previous q.a text
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
    let qIndex = 0, examScore = 0, correctCount = 0;

    let timeLeft = 90 * 60;
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('contentArea').innerHTML = `
        <div class="d-flex justify-content-between mb-4 align-items-center">
            <div>
                <h3 class="exam-title text-info">Thi thử tổ hợp KHTN</h3>
                <div class="exam-subtitle">40 câu trắc nghiệm — Thời gian 90 phút</div>
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
        const m = String(Math.floor(timeLeft / 60)).padStart(2, '0');
        const s = String(timeLeft % 60).padStart(2, '0');
        document.getElementById('examTimer').textContent = `Thời gian: ${m}:${s}`;
        if (timeLeft <= 0) endExam();
    }, 1000);

    // question status tracking: 'unanswered' | 'correct' | 'wrong'
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
        // Attach event listeners to the rendered buttons
        const buttons = document.querySelectorAll('.exam-opt-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', function onClick() {
                // prevent double clicks
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
        // Color buttons: correct -> green, selected wrong -> red, others muted
        const optButtons = document.querySelectorAll('.exam-opt-btn');
        optButtons.forEach(b => {
            const opt = b.getAttribute('data-opt');
            // remove outline style then apply color
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

        // Show detailed feedback similar to subject quiz
        if (selected === q.a) {
            examScore += 0.25;
            correctCount++;
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

        // Show action button (Next or Finish)
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
        if (selected === examQ[qIndex].a) {
            examScore += 0.25;
            correctCount++;
        }
        qIndex++;
        showQ();
    }

    function endExam() {
        clearInterval(examTimer);
        playSound('successSound');

        // Play completion or encourage music depending on percent correct
        const total = examQ.length || 40;
        const pct = Math.round((correctCount / total) * 100);
        if (pct >= 70) playSound('completionMusic');
        else playSound('encourageSound');

        saveScore(examScore);

        document.getElementById('contentArea').innerHTML = `
            <div class="text-center py-5">
                <h2 class="text-success">Kết thúc bài thi!</h2>
                <h3>Điểm số: ${examScore} / 10</h3>
                <div class="back-btn-container">
                    <button class="btn btn-primary btn-lg" onclick="backToMenu()">← Quay lại menu chính</button>
                </div>
            </div>
        `;
    }

    // initial render
    renderNavGrid();
    showQ();
}
