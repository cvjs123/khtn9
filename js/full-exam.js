let examTimer;
function startFullExam() {
    const all = [...questions_ly, ...questions_hoa, ...questions_sinh];
    let examQ = all.sort(() => 0.5 - Math.random()).slice(0, 40);

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
    let qIndex = 0, examScore = 0;

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
        <div id="examQArea"></div>
        <div class="back-btn-container">
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
                    <div id="examActionContainer" class="text-center mt-4" style="display:none;"></div>
                </div>
            </div>
        `;
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
            examScore++;
            playSound('correctSound');
            feedbackEl.innerHTML = `
                <div class="alert alert-success p-4 rounded shadow-sm">
                    <h4 class="fw-bold mb-2">✅ Đúng rồi!</h4>
                    <p class="mb-0">${q.explain || 'Tuyệt vời, bạn làm tốt!'}</p>
                </div>
            `;
        } else {
            playSound('wrongSound');
            feedbackEl.innerHTML = `
                <div class="alert alert-danger p-4 rounded shadow-sm">
                    <h4 class="fw-bold mb-2">❌ Sai rồi!</h4>
                    <p class="mb-1">Đáp án đúng: <strong>${q.a}</strong></p>
                    <p class="mb-0">${q.explain || ''}</p>
                </div>
            `;
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
        if (selected === examQ[qIndex].a) examScore++;
        qIndex++;
        showQ();
    }

    function endExam() {
        clearInterval(examTimer);
        playSound('successSound');

        // Play completion or encourage music depending on percent correct
        const total = examQ.length || 40;
        const pct = Math.round((examScore / total) * 100);
        if (pct >= 70) playSound('completionMusic');
        else playSound('encourageSound');

        saveScore(examScore);

        document.getElementById('contentArea').innerHTML = `
            <div class="text-center py-5">
                <h2 class="text-success">Kết thúc bài thi!</h2>
                <h3>Điểm số: ${examScore} / 40</h3>
                <div class="back-btn-container">
                    <button class="btn btn-primary btn-lg" onclick="backToMenu()">← Quay lại menu chính</button>
                </div>
            </div>
        `;
    }

    showQ();
}
