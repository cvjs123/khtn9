let examTimer;

// Utility function to select random questions
function _selectRandom(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, array.length));
}

// Full exam topic selection modal functions
function showFullExamTopicSelection() {
    const modal = document.getElementById('fullExamTopicModal');
    if (!modal) return;
    
    // Populate checkboxes for each subject
    populateTopicCheckboxes('ly', 'lyTopicCheckboxes');
    populateTopicCheckboxes('hoa', 'hoaTopicCheckboxes');
    populateTopicCheckboxes('sinh', 'sinhTopicCheckboxes');
    
    modal.style.display = 'flex';
}

function closeFullExamTopicModal() {
    const modal = document.getElementById('fullExamTopicModal');
    if (modal) modal.style.display = 'none';
}

function populateTopicCheckboxes(subject, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    const topics = window.topics_by_subject?.[subject] || [];
    
    topics.forEach(topic => {
        const col = document.createElement('div');
        col.className = 'col-md-6 mb-2';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `${subject}_${topic.replace(/\s+/g, '_')}`;
        checkbox.value = topic;
        checkbox.className = 'form-check-input me-2';
        checkbox.checked = true; // Default to checked
        
        const label = document.createElement('label');
        label.className = 'form-check-label';
        label.htmlFor = checkbox.id;
        label.textContent = topic;
        
        col.appendChild(checkbox);
        col.appendChild(label);
        container.appendChild(col);
    });
}

function getSelectedTopics(subject) {
    const checkboxes = document.querySelectorAll(`#${subject}TopicCheckboxes input[type="checkbox"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}

function startFullExamWithTopics() {
    const lyTopics = getSelectedTopics('ly');
    const hoaTopics = getSelectedTopics('hoa');
    const sinhTopics = getSelectedTopics('sinh');
    
    closeFullExamTopicModal();
    startFullExam(lyTopics, hoaTopics, sinhTopics);
}

function startFullExam(lyTopics = [], hoaTopics = [], sinhTopics = []) {
    // Helper function to get questions from selected topics
    function getQuestionsFromTopics(subject, topics, levelCounts) {
        let allQuestions = [];
        
        if (topics.length === 0) {
            // If no topics selected, use all topics
            const byTopic = window[`questions_${subject}_by_topic`];
            if (byTopic) {
                topics = Object.keys(byTopic).filter(k => k !== 'Tất cả');
            }
        }
        
        // Collect questions from selected topics
        const byTopic = window[`questions_${subject}_by_topic`];
        if (byTopic) {
            topics.forEach(topic => {
                const topicQuestions = byTopic[topic];
                if (Array.isArray(topicQuestions)) {
                    allQuestions = allQuestions.concat(topicQuestions);
                }
            });
        }
        
        // If no questions found, fall back to global array
        if (allQuestions.length === 0) {
            allQuestions = window[`questions_${subject}`] || [];
        }
        
        // Separate by levels
        const nhanBiet = allQuestions.filter(q => q.level === 'nhan_biet');
        const thongHieu = allQuestions.filter(q => q.level === 'thong_hieu');
        const vanDung = allQuestions.filter(q => q.level === 'van_dung');
        
        // Select questions from each level
        let selected = [];
        if (levelCounts.nhan_biet > 0) {
            selected = selected.concat(_selectRandom(nhanBiet, levelCounts.nhan_biet));
        }
        if (levelCounts.thong_hieu > 0) {
            selected = selected.concat(_selectRandom(thongHieu, levelCounts.thong_hieu));
        }
        if (levelCounts.van_dung > 0) {
            selected = selected.concat(_selectRandom(vanDung, levelCounts.van_dung));
        }
        
        return selected;
    }
    
    // Select questions according to exam pattern analysis
    // Physics: 14 questions (6 recognition, 4 comprehension, 4 application)
    let lyQuestions = getQuestionsFromTopics('ly', lyTopics, { nhan_biet: 6, thong_hieu: 4, van_dung: 4 })
        .map(q => ({ ...q, subject: 'Vật lý' }));

    // Chemistry: 14 questions (6 recognition, 4 comprehension, 4 application)
    let hoaQuestions = getQuestionsFromTopics('hoa', hoaTopics, { nhan_biet: 6, thong_hieu: 4, van_dung: 4 })
        .map(q => ({ ...q, subject: 'Hóa học' }));

    // Biology: 12 questions (6 recognition, 6 comprehension)
    let sinhQuestions = getQuestionsFromTopics('sinh', sinhTopics, { nhan_biet: 6, thong_hieu: 6, van_dung: 0 })
        .map(q => ({ ...q, subject: 'Sinh học' }));

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
                ${q.image ? `<div class="text-center mb-3"><img src="${q.image}" alt="Hình minh họa" class="img-fluid rounded" style="max-width: 100%; height: auto;"></div>` : ''}
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
                <p>Số câu đúng: ${correctCount} / 40 (${Math.round((correctCount / 40) * 100)}%)</p>
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

// Export exam to Word document
function exportExamToWord() {
    const lyTopics = getSelectedTopics('ly');
    const hoaTopics = getSelectedTopics('hoa');
    const sinhTopics = getSelectedTopics('sinh');
    
    // Generate exam questions
    const examData = generateExamQuestions(lyTopics, hoaTopics, sinhTopics);
    
    if (!examData || examData.questions.length === 0) {
        alert('Không có câu hỏi nào được tạo. Vui lòng kiểm tra lại chủ đề đã chọn.');
        return;
    }
    
    // Create Word document content
    let wordContent = createWordDocumentContent(examData);
    
    // Create blob and download
    const blob = new Blob([wordContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `De_Thi_Thu_To_Hop_${new Date().toISOString().split('T')[0]}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show success message
    alert('File Word đã được tải xuống thành công!');
}

function generateExamQuestions(lyTopics, hoaTopics, sinhTopics) {
    // Helper function to get questions from topics (same as in startFullExam)
    function getQuestionsFromTopics(subject, topics, levelCounts) {
        let allQuestions = [];
        
        if (topics.length === 0) {
            const byTopic = window[`questions_${subject}_by_topic`];
            if (byTopic) {
                topics = Object.keys(byTopic).filter(k => k !== 'Tất cả');
            }
        }
        
        const byTopic = window[`questions_${subject}_by_topic`];
        if (byTopic) {
            topics.forEach(topic => {
                const topicQuestions = byTopic[topic];
                if (Array.isArray(topicQuestions)) {
                    allQuestions = allQuestions.concat(topicQuestions);
                }
            });
        }
        
        if (allQuestions.length === 0) {
            allQuestions = window[`questions_${subject}`] || [];
        }
        
        const nhanBiet = allQuestions.filter(q => q.level === 'nhan_biet');
        const thongHieu = allQuestions.filter(q => q.level === 'thong_hieu');
        const vanDung = allQuestions.filter(q => q.level === 'van_dung');
        
        let selected = [];
        if (levelCounts.nhan_biet > 0) {
            selected = selected.concat(_selectRandom(nhanBiet, levelCounts.nhan_biet));
        }
        if (levelCounts.thong_hieu > 0) {
            selected = selected.concat(_selectRandom(thongHieu, levelCounts.thong_hieu));
        }
        if (levelCounts.van_dung > 0) {
            selected = selected.concat(_selectRandom(vanDung, levelCounts.van_dung));
        }
        
        return selected;
    }
    
    const lyQuestions = getQuestionsFromTopics('ly', lyTopics, { nhan_biet: 6, thong_hieu: 4, van_dung: 4 })
        .map(q => ({ ...q, subject: 'Vật lý' }));
    
    const hoaQuestions = getQuestionsFromTopics('hoa', hoaTopics, { nhan_biet: 6, thong_hieu: 4, van_dung: 4 })
        .map(q => ({ ...q, subject: 'Hóa học' }));
    
    const sinhQuestions = getQuestionsFromTopics('sinh', sinhTopics, { nhan_biet: 6, thong_hieu: 6, van_dung: 0 })
        .map(q => ({ ...q, subject: 'Sinh học' }));
    
    const allQuestions = [...lyQuestions, ...hoaQuestions, ...sinhQuestions];
    
    // Shuffle questions
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
    
    return {
        questions: shuffledQuestions,
        topics: {
            ly: lyTopics,
            hoa: hoaTopics,
            sinh: sinhTopics
        }
    };
}

function createWordDocumentContent(examData) {
    const { questions, topics } = examData;
    
    let html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Đề Thi Thử Tổ Hợp KHTN Lớp 9</title>
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
        .answers-table { width: 100%; border-collapse: collapse; font-size: 11pt; }
        .answers-table td { padding: 8px; border: 1px solid #000; vertical-align: top; }
        .answer-number { font-weight: bold; margin-bottom: 3px; }
        .answer-text { color: #d32f2f; font-weight: bold; margin-bottom: 3px; }
        .answer-explain { font-style: italic; color: #666; font-size: 10pt; }
        .footer { margin-top: 50px; text-align: center; font-size: 10pt; border-top: 1px solid #000; padding-top: 20px; }
        @page { margin-top: 2cm; margin-bottom: 2cm; margin-left: 2.5cm; margin-right: 2cm; }
    </style>
</head>
<body>
    <div class="header">
        <h1>ĐỀ THI THỬ TỔ HỢP</h1>
        <h2>Môn: KHỐI TỰ NHIÊN (Vật lý - Hóa học - Sinh học)</h2>
        <p>Thời gian: 90 phút</p>
        <p>Ngày thi: ${new Date().toLocaleDateString('vi-VN')}</p>
    </div>
    
    <div class="subject-info">
        <p><strong>Chủ đề đã chọn:</strong></p>
        <p><strong>Vật lý:</strong> ${topics.ly.length > 0 ? topics.ly.join(', ') : 'Tất cả'}</p>
        <p><strong>Hóa học:</strong> ${topics.hoa.length > 0 ? topics.hoa.join(', ') : 'Tất cả'}</p>
        <p><strong>Sinh học:</strong> ${topics.sinh.length > 0 ? topics.sinh.join(', ') : 'Tất cả'}</p>
    </div>
    
    <div class="questions">`;
    
    questions.forEach((q, index) => {
        const questionNumber = index + 1;
        html += `
        <div class="question">
            <div class="question-number">Câu ${questionNumber} (${q.subject}):</div>
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
            <div class="answer-number">Câu ${q1Number} (${q1.subject}):</div>
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
            <div class="answer-number">Câu ${q2Number} (${q2.subject}):</div>
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
