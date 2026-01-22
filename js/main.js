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

// Local exams data
let localExams = [
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
        name: 'Lâm Đồng', 
        year: 2023, 
        description: 'Đề thi thử THPT Lâm Đồng 2023 (sưu tầm và upload bởi admin)',
        questions: []
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

    function renderNavGrid() {
        const nav = document.getElementById('examNav');
        nav.innerHTML = '';
        questions.forEach((_, i) => {
            const btn = document.createElement('button');
            btn.className = `nav-btn ${qStatus[i]}`;
            btn.textContent = i + 1;
            btn.style.borderRadius = '50%'; // Thay ô vuông thành hình tròn
            btn.style.width = '30px'; // Giảm kích thước để không chồng lên nhau
            btn.style.height = '30px';
            btn.style.display = 'inline-flex';
            btn.style.alignItems = 'center';
            btn.style.justifyContent = 'center';
            btn.style.margin = '3px'; // Tăng margin một chút
            if (qStatus[i] === 'answered') {
                btn.style.backgroundColor = 'blue'; // Màu xanh dương cho câu đã làm
                btn.style.color = 'white';
            } else if (qStatus[i] === 'correct') {
                btn.style.backgroundColor = 'green';
                btn.style.color = 'white';
            } else if (qStatus[i] === 'wrong') {
                btn.style.backgroundColor = 'red';
                btn.style.color = 'white';
            } else {
                btn.style.backgroundColor = 'white';
                btn.style.color = 'black';
            }
            btn.onclick = () => { qIndex = i; showQ(i); };
            nav.appendChild(btn);
        });
    }

    function showQ(index) {
        const q = questions[index];
        const area = document.getElementById('examQArea');
        area.innerHTML = `
            <div class="question-card">
                <h5>Câu ${index + 1}: ${q.subject || 'KHTN'}</h5>
                <p style="font-size: 2.4em;">${q.q}</p>
                <div class="options">
                    ${q.options.map(opt => `<label style="font-size: 2.2em;"><input type="radio" name="q${index}" value="${opt}" style="transform: scale(2); margin-right: 15px;"> ${opt}</label><br>`).join('')}
                </div>
                <div class="mt-3">
                    ${index > 0 ? '<button class="btn btn-secondary" onclick="qIndex--; showQ(qIndex);">← Câu trước</button>' : ''}
                    ${index < questions.length - 1 ? '<button class="btn btn-primary" onclick="nextQuestion();">Câu sau →</button>' : '<button class="btn btn-success" onclick="endExam();">Hoàn thành</button>'}
                </div>
            </div>
        `;
        // Check if answered
        const selected = qAnswers[index];
        if (selected) {
            const inputs = area.querySelectorAll(`input[name="q${index}"]`);
            inputs.forEach(inp => {
                if (inp.value === selected) inp.checked = true;
            });
        }
    }

    function nextQuestion() {
        if (qIndex < questions.length - 1) {
            qIndex++;
            showQ(qIndex);
        }
    }

    // Make functions global for onclick handlers
    window.nextQuestion = nextQuestion;
    window.endExam = endExam; // Thêm dòng này để khắc phục lỗi "endExam is not defined"

    function endExam() {
        clearInterval(examTimer);
        // Calculate score
        examScore = 0;
        correctCount = 0;
        for (let i = 0; i < questions.length; i++) {
            if (qAnswers[i] === questions[i].a) {
                examScore += 0.25; // 10/40 = 0.25 per question
                correctCount++;
                qStatus[i] = 'correct';
            } else if (qAnswers[i] !== null) {
                qStatus[i] = 'wrong';
            }
        }

        // Show results
        document.getElementById('contentArea').innerHTML = `
            <div class="exam-results">
                <h2 class="text-center text-success mb-4">Kết thúc bài thi!</h2>
                <div class="results-summary text-center mb-4">
                    <h3 class="text-primary">${examScore.toFixed(1)} / 10</h3>
                    <p>Số câu đúng: ${correctCount} / ${questions.length} (${Math.round(correctCount / questions.length * 100)}%)</p>
                    <p>Thời gian còn lại: ${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}</p>
                </div>
                <div class="results-details">
                    <h4>Chi tiết từng câu:</h4>
                    <div class="questions-review">
                        ${questions.map((q, i) => `
                            <div class="review-item ${qStatus[i]}">
                                <div class="review-header">
                                    <span>Câu ${i + 1}: ${q.subject || 'KHTN'}</span>
                                    <span class="status">${qStatus[i] === 'correct' ? '✓' : qStatus[i] === 'wrong' ? '✗' : '?'}</span>
                                </div>
                                <div class="review-question">${q.q}</div>
                                <div class="review-answer">
                                    <strong>Đáp án đúng:</strong> ${q.a}<br>
                                    <strong>Bạn chọn:</strong> ${qAnswers[i] || 'Không chọn'}
                                </div>
                                ${q.explain ? `<div class="review-explanation"><strong>Giải thích:</strong> ${q.explain}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-4">
                    <button class="btn btn-primary btn-lg" onclick="backToMenu()">← Quay lại menu chính</button>
                    <button class="btn btn-secondary btn-lg" onclick="location.reload()">Thi lại →</button>
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
            qStatus[idx] = 'answered'; // Đặt trạng thái 'answered' cho câu đã làm
            renderNavGrid();
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

    // Array of gradient backgrounds for variety
    const cardGradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
        'linear-gradient(135deg, #a8c0ff 0%, #3f2b96 100%)'
    ];

    list.innerHTML = '';
    localExams.forEach((exam, index) => {
        const gradient = cardGradients[index % cardGradients.length];
        const card = document.createElement('div');
        card.className = 'metro-card-wrapper';
        card.innerHTML = `
            <div class="card h-100 shadow-sm metro-card" onclick="startLocalExam(${index})" style="cursor: pointer; margin-bottom: 1rem; break-inside: avoid; background: ${gradient};">
                <div class="card-body text-center">
                    <i class="fas fa-map-marker-alt fa-3x text-white mb-3"></i>
                    <h6 class="card-title text-white">${exam.name} ${exam.year}</h6>
                    <p class="card-text text-white-50 small">${exam.description}</p>
                    <span class="badge bg-white text-dark">${exam.questions.length} câu</span>
                </div>
            </div>
        `;
        list.appendChild(card);
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
}
