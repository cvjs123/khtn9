// js/questions-sinh.js - Sinh học lớp 9 (template)
// This file provides per-topic arrays for Sinh in the same structure as questions-ly.js.
// Content based on ly-thuyet.html

const _sinhShortNames = [
'PHÂN TỬ',
'TẾ BÀO',
'QUY LUẬT',
'ỨNG DỤNG',
'MÔI TRƯỜNG'
];

const _sinhLongNames = [
'CƠ SỞ VẬT CHẤT, CƠ CHẾ DI TRUYỀN VÀ BIẾN DỊ Ở CẤP ĐỘ PHÂN TỬ',
'CƠ SỞ VẬT CHẤT, CƠ CHẾ DI TRUYỀN VÀ BIẾN DỊ Ở CẤP ĐỘ TẾ BÀO',
'TÍNH QUY LUẬT CỦA HIỆN TƯỢNG DI TRUYỀN',
'ỨNG DỤNG DI TRUYỀN TRONG CHỌN GIỐNG VÀ CÔNG NGHỆ SINH HỌC',
'MÔI TRƯỜNG VÀ ĐA DẠNG SINH HỌC'
];

const _sinhCounts = [50,50,50,50,50];

// Utility: generate N placeholder questions for a topic
function _makePlaceholders(topic, count) {
const levels = ['nhan_biet', 'thong_hieu', 'van_dung'];
const out = [];
for (let i = 1; i <= count; i++) {
const level = levels[(i - 1) % levels.length]; // Cycle through levels
out.push({
q: `${topic} — Câu ${i}: (mẫu) Viết nội dung câu hỏi ở đây`,
options: [
'A. Đáp án mẫu 1',
'B. Đáp án mẫu 2',
'C. Đáp án mẫu 3',
'D. Đáp án mẫu 4'
],
a: i % 4 === 1 ? 'A. Đáp án mẫu 1' : (i % 4 === 2 ? 'B. Đáp án mẫu 2' : (i % 4 === 3 ? 'C. Đáp án mẫu 3' : 'D. Đáp án mẫu 4')),
explain: 'Giải thích mẫu — cập nhật khi chỉnh sửa câu hỏi.',
level: level
});
}
return out;
}

// Chuyên đề 1: CƠ SỞ VẬT CHẤT, CƠ CHẾ DI TRUYỀN VÀ BIẾN DỊ Ở CẤP ĐỘ PHÂN TỬ
const questions_sinh_topic1 = [
{"q":"Một gene có chiều dài 4080Å, số lượng nucleotide của gene đó là","options":["A. 2400","B. 4800","C. 1200","D. 4080"],"a":"A. 2400","explain":"Chiều dài gene L = N/2 × 3,4Å → N = 2L/3,4 = 2×4080/3,4 = 2400 nucleotide.","level":"nhan_biet"},
{"q":"Phân tử nào sau đây được dùng làm khuôn cho quá trình dịch mã?","options":["A. rRNA","B. mRNA","C. tRNA","D. Gene"],"a":"B. mRNA","explain":"mRNA mang thông tin di truyền từ gene đến ribosome để tổng hợp protein.","level":"nhan_biet"},
{"q":"Tính đa dạng và đặc thù của mỗi loại DNA do yếu tố nào sau đây qui định:","options":["A. Hàm lượng DNA trong nhân tế bào","B. Số lượng các nucleotide","C. Số lượng, thành phần, trật tự sắp xếp của các nucleotid trong phân tử DNA","D. Tỉ lệ (A+T)/(G+C) trong phân tử DNA"],"a":"C. Số lượng, thành phần, trật tự sắp xếp của các nucleotid trong phân tử DNA","explain":"DNA đa dạng và đặc thù do số lượng, thành phần và trình tự sắp xếp các nucleotide.","level":"nhan_biet"},
{"q":"Nguyên tắc bán bảo toàn trong cơ chế nhân đôi của DNA là:","options":["A. Hai DNA mới được hình thành sau khi nhân đôi, hoàn toàn giống nhau và giống với DNA mẹ ban đầu","B. Hai DNA mới được hình thành sau khi nhân đôi, có một DNA giống với DNA mẹ còn DNA kia có cấu trúc đã thay đổi","C. Trong 2 DNA mới, mỗi DNA gồm có một mạch cũ và một mạch mới tổng hợp","D. Sự nhân đôi xảy ra trên 2 mạch của DNA trên hai hướng ngược chiều nhau"],"a":"C. Trong 2 DNA mới, mỗi DNA gồm có một mạch cũ và một mạch mới tổng hợp","explain":"Nguyên tắc bán bảo toàn: mỗi phân tử DNA con có một mạch từ DNA mẹ và một mạch mới tổng hợp.","level":"nhan_biet"},
{"q":"Đặc điểm nào sau đây không đúng khi nói về cấu trúc của phân tử DNA mạch kép?","options":["A. Cấu tạo theo nguyên tắc đa phân","B. Cấu tạo theo nguyên tắc bổ sung","C. Đơn phân gồm 4 loại nucleotit là A, U, G, C","D. Được cấu tạo nên bới các nguyên tố C, H, O, N, P"],"a":"C. Đơn phân gồm 4 loại nucleotit là A, U, G, C","explain":"DNA có 4 loại nucleotide A, T, G, C; RNA mới có U.","level":"nhan_biet"},
{"q":"Thành phần nào sau đây không tham gia trực tiếp vào quá trình hình thành chuỗi axit amin?","options":["A. mRNA","B. DNA","C. tRNA","D. Riboxom"],"a":"B. DNA","explain":"DNA nằm trong nhân, không trực tiếp tham gia dịch mã.","level":"nhan_biet"},
{"q":"NTBS được thể hiện trong cơ chế tự nhân đôi là","options":["A. A liên kết với T và ngược lại, G liên kết với C và ngược lại","B. A liên kết với U, T liên kết với A; G liên kết với C; C liên kết với G","C. A liên kết với G và ngược lại, T liên kết với C và ngược lại","D. A liên kết với C và ngược lại, T liên kết với G và ngược lại"],"a":"A. A liên kết với T và ngược lại, G liên kết với C và ngược lại","explain":"Trong nhân đôi DNA, A liên kết với T, G liên kết với C.","level":"nhan_biet"},
{"q":"Nguyên tắc bổ sung trong cấu trúc của DNA dẫn đến hệ quả","options":["A. A = C, G = T","B. A + T = G + C","C. A + G = T + C","D. A + C + T = C + T + G"],"a":"C. A + G = T + C","explain":"Theo nguyên tắc bổ sung: A = T, G = C → A + G = T + C.","level":"nhan_biet"},
{"q":"Quá trình truyền đạt thông tin di truyền từ DNA sang mRNA được gọi là quá trình","options":["A. tái bản DNA","B. đột biến DNA","C. dịch mã","D. phiên mã"],"a":"D. phiên mã","explain":"Phiên mã là quá trình tổng hợp mRNA từ mạch khuôn DNA.","level":"nhan_biet"},
{"q":"Kết quả cuối cùng của quá trình sao chép DNA là gì?","options":["A. Hai phân tử DNA giống nhau","B. Một phân tử DNA duy nhất","C. Hai phân tử RNA giống nhau","D. Một phân tử RNA và một phân tử DNA"],"a":"A. Hai phân tử DNA giống nhau","explain":"Nhân đôi DNA tạo ra hai phân tử DNA con giống hệt DNA mẹ.","level":"nhan_biet"},
{"q":"Cấu trúc của nhiễm sắc thể bao gồm những thành phần nào?","options":["A. DNA và protein","B. DNA và lipit","C. Protein và cacbohidrat","D. DNA và cacbohidrat"],"a":"A. DNA và protein","explain":"Nhiễm sắc thể được cấu tạo từ DNA và protein histone.","level":"nhan_biet"},
{"q":"Đâu không phải là đơn phân cấu tạo nên phân tử DNA?","options":["A. Ađênin (A)","B. Timin (T)","C. Uraxin (U)","D. Guanin (G)"],"a":"C. Uraxin (U)","explain":"Uraxin (U) là đơn phân của RNA, không có trong DNA.","level":"nhan_biet"},
{"q":"Quá trình tổng hợp RNA thông tin (mARN) từ một mạch khuôn của gen trong nhân tế bào được gọi là gì?","options":["A. Tái bản ADN","B. Dịch mã","C. Phiên mã","D. Biến đổi hậu phiên"],"a":"C. Phiên mã","explain":"Phiên mã tổng hợp mRNA từ DNA.","level":"nhan_biet"},
{"q":"Gene là gì?","options":["A. Một đoạn của DNA mã hóa cho một chuỗi polypeptide","B. Toàn bộ bộ gen của một sinh vật","C. Một phân tử RNA","D. Một protein cấu tạo nên nhiễm sắc thể"],"a":"A. Một đoạn của DNA mã hóa cho một chuỗi polypeptide","explain":"Gene là đoạn DNA mang thông tin mã hóa cho một sản phẩm nhất định.","level":"nhan_biet"},
{"q":"Loại protein nào dưới đây tham gia cấu tạo nên nhiễm sắc thể ở sinh vật nhân thực?","options":["A. Papain","B. Glucagon","C. Histone","D. ATPase"],"a":"C. Histone","explain":"Histone là protein cấu trúc chính của nhiễm sắc thể.","level":"nhan_biet"},
{"q":"Quá trình nhân đôi AND được thực hiện theo nguyên tắc gì?","options":["A. Hai mạch được tổng hợp theo nguyên tắc bổ sung song song liên tục","B. Một mạch được tổng hợp gián đoạn, một mạch được tổng hợp liên tục","C. Nguyên tắc bổ sung và nguyên tắc bán bảo toàn","D. Mạch liên tục hướng vào, mạch gián đoạn hướng ra chạc ba tái bản"],"a":"C. Nguyên tắc bổ sung và nguyên tắc bán bảo toàn","explain":"Nhân đôi DNA theo nguyên tắc bổ sung và bán bảo toàn.","level":"nhan_biet"},
{"q":"Có bao nhiêu trường hợp sau đây được gọi là đột biến gen? (1) Gen tạo ra sau tái bản AND bị mất 1 cặp nucleotit. (2) Gen tạo ra sau tái bản AND bị thay thế ở 1 cặp nucleotit. (3) mARN tạo ra sau phiên mã bị mất 1 nucleotit. (4) Chuỗi polipeptit tạo ra sau dịch mã bị thay thế 1 axit amin.","options":["A. 4","B. 1","C. 2","D. 3"],"a":"C. 2","explain":"Đột biến gen là biến đổi trong cấu trúc của gene. (1) và (2) là đột biến gen.","level":"nhan_biet"},
{"q":"Phát biểu nào sau đây đúng về quá trình tái bản DNA?","options":["A. Quá trình tái bản DNA là sự sao chép các phân tử DNA sau mỗi lần phân bào","B. Enzyme DNA polymerase phá vỡ cấu trúc xoắn kép, tách mạch DNA thành hai mạch đơn","C. Mạch mới được tổng hợp theo nguyên tắc bổ sung với mạch làm khuôn (A liên kết với T; G liên kết với C)","D. Từ một phân tử DNA đã tạo ra hai phân tử DNA con có hai mạch mới hoàn toàn và có cấu trúc giống DNA mẹ ban đầu"],"a":"C. Mạch mới được tổng hợp theo nguyên tắc bổ sung với mạch làm khuôn (A liên kết với T; G liên kết với C)","explain":"Trong nhân đôi, mạch mới được tổng hợp theo nguyên tắc bổ sung.","level":"nhan_biet"},
{"q":"Một gene có 480 adenine và 3120 liên kết hydrogen. Gene đó có số lượng nucleotide là","options":["A. 1200","B. 2400","C. 3600","D. 3120"],"a":"B. 2400","explain":"H = 2A + 3G → 3120 = 2.480 + 3G → G = 720; N = 2(A+G) = 2(480+720) = 2400.","level":"thong_hieu"},
{"q":"Đột biến thay một cặp nuclêôtit giữa gen cấu trúc có thể làm cho mRNA tương ứng","options":["A. không thay đổi chiều dài so với mRNA bình thường","B. ngắn hơn so với mRNA bình thường","C. dài hơn so với mRNA bình thường","D. có chiều dài không đổi hoặc ngắn hơn mARN bình thường"],"a":"A. không thay đổi chiều dài so với mRNA bình thường","explain":"Thay thế 1 cặp nucleotide không làm thay đổi số lượng nucleotide của gene.","level":"thong_hieu"},
{"q":"RNA được tổng hợp dựa trên khuân mẫu là mạch nào của gen?","options":["A. Khi thì từ 1 mạch, khi thì từ 2 mạch","B. Từ cả 2 mạch","C. Từ mạch mang mã gốc","D. Từ mạch bổ sung"],"a":"C. Từ mạch mang mã gốc","explain":"RNA được tổng hợp từ mạch gốc của gene.","level":"thong_hieu"},
{"q":"Người ta chia ARN thành các loại khác nhau là dựa vào","options":["A. Thành phần nuclêotít của ARN","B. Chức năng của ARN","C. Thành phần hoá học của ARN","D. Cấu trúc không gian của ARN"],"a":"B. Chức năng của ARN","explain":"ARN được phân loại dựa trên chức năng: mRNA, tRNA, rRNA.","level":"thong_hieu"},
{"q":"Phân tử ARN được tổng hợp có trình tự các Nucleotit:","options":["A. Bổ sung với mạch mã gốc","B. Bổ sung với mạch mã sao","C. Bổ sung với mạch mã gốc, trong đó T được thay bằng U","D. Bổ sung với mạch mã sao, trong đó A được thay bằng U"],"a":"C. Bổ sung với mạch mã gốc, trong đó T được thay bằng U","explain":"Phiên mã: mạch RNA bổ sung với mạch gốc, A-U, T-A, G-C, C-G.","level":"thong_hieu"},
{"q":"Nguyên tắc bổ sung được thể hiện trong cơ chế phiên mã là","options":["A. A liên kết với T, G liên kết với C","B. A liên kết với U, G liên kết với C","C. A liên kết với G, T liên kết với C","D. A liên kết với C, G liên kết với T"],"a":"B. A liên kết với U, G liên kết với C","explain":"Trong phiên mã, A trên DNA liên kết với U trên RNA, G liên kết với C.","level":"thong_hieu"},
{"q":"Cho các đặc điểm RNA: 1. Được cấu tạo bởi một mạch poliribônuclêôtit. 2. Đơn phân là adenine, timin, guanin, xitorin. 3. Cấu tạo theo nguyên tắc đa phân. 4. Trong cấu tạo có uraxin mà không có timin. Số đặc điểm chung có cả ở 3 loại ARN là","options":["A. 2,1,4","B. 2,1,4","C. 1,2,4","D. 3,4"],"a":"D. 3,4","explain":"Cả 3 loại RNA đều có cấu tạo đa phân (3) và có U không có T (4).","level":"thong_hieu"},
{"q":"Một phân tử DNA tái bản liên tiếp 5 lần sẽ tạo ra bao nhiêu phân tử DNA?","options":["A. 6","B. 32","C. 25","D. 64"],"a":"B. 32","explain":"Số DNA con = 2ⁿ = 2⁵ = 32.","level":"thong_hieu"},
{"q":"Một đoạn phân tử DNA ở sinh vật nhân thực có trình tự nucleotide trên mạch gốc là 3'...AAACAATGGGGA...5'. Trình tự nucleotide trên mạch mới được tổng hợp của đoạn DNA này là","options":["A. 5'...AAAGTTACCGGT...3'","B. 5'...GGCCAATGGGGA...3'","C. 5'...GTTGAAACCCCT...3'","D. 5'...TTTGTTACCCCT...3'"],"a":"D. 5'...TTTGTTACCCCT...3'","explain":"Mạch mới bổ sung với mạch gốc: A-T, T-A, G-C, C-G.","level":"thong_hieu"},
{"q":"Một phân tử DNA có 200 nuclêôtit loại Adenin, 800 nucleotit loại Guanin. Số vòng xoắn trong phân tử DNA là:","options":["A. 100 vòng","B. 25 vòng","C. 50 vòng","D. 5 vòng"],"a":"A. 100 vòng","explain":"N = 2(A+G) = 2(200+800) = 2000; số vòng xoắn = N/20 = 100.","level":"thong_hieu"},
{"q":"Một gen có chiều dài 5100 A°. Gen đó có tổng số nucleotit là:","options":["A. 1500","B. 2000","C. 2500","D. 3000"],"a":"D. 3000","explain":"N = 2L/3,4 = 2×5100/3,4 = 3000.","level":"thong_hieu"},
{"q":"Một gen có chiều dài 5100Å, chu kỳ xoắn của gen là:","options":["A. 100 vòng","B. 250 vòng","C. 200 vòng","D. 150 vòng"],"a":"D. 150 vòng","explain":"N = 2×5100/3,4 = 3000; số chu kỳ = N/20 = 150.","level":"thong_hieu"},
{"q":"Một đoạn AND dài 5100 Å tự sao 5 lần liên tiếp cần số nuclêôtit tự do là:","options":["A. 51000","B. 93000","C. 46500","D. 96000"],"a":"B. 93000","explain":"N = 3000; N tự do = N(2ⁿ - 1) = 3000(32-1) = 93000.","level":"van_dung"},
{"q":"Một phân tử AND có cấu trúc xoắn kép, giả sử phân tử AND này có tỉ lệ (A+T)/(G+C) = 1/4 thì tỉ lệ nuclêôtit loại G của phân tử AND này là:","options":["A. 20%","B. 40%","C. 25%","D. 10%"],"a":"B. 40%","explain":"(A+T)/(G+C)=1/4 → (A+T)=1, (G+C)=4 → G = 2 → %G = 2/5 = 40%.","level":"van_dung"},
{"q":"Một phân tử DNA mạch kép có A = 20%, tỉ lệ nucleotit loại G của DNA này là","options":["A. 30%","B. 40%","C. 50%","D. 20%"],"a":"A. 30%","explain":"A = T = 20% → A+T = 40% → G+C = 60% → G = 30%.","level":"van_dung"},
{"q":"Một đoạn AND dài 5100 Å tự sao 5 lần liên tiếp cần số nuclêôtit tự do là:","options":["A. 51000","B. 93000","C. 46500","D. 96000"],"a":"B. 93000","explain":"N = 3000; N tự do = 3000(2⁵-1) = 3000×31 = 93000.","level":"van_dung"},
{"q":"Một phân tử AND có cấu trúc xoắn kép, giả sử phân tử AND này có tỉ lệ (A+T)/(G+C) = 1/4 thì tỉ lệ nuclêôtit loại G của phân tử AND này là:","options":["A. 20%","B. 40%","C. 25%","D. 10%"],"a":"B. 40%","explain":"(A+T)/(G+C)=1/4 → (A+T)=1, (G+C)=4 → G = 2 → %G = 2/5 = 40%.","level":"van_dung"},
{"q":"Một phân tử DNA mạch kép có A = 20%, tỉ lệ nucleotit loại G của DNA này là","options":["A. 30%","B. 40%","C. 50%","D. 20%"],"a":"A. 30%","explain":"A = T = 20% → A+T = 40% → G+C = 60% → G = 30%.","level":"van_dung"},
];
// Chuyên đề 2: CƠ SỞ VẬT CHẤT, CƠ CHẾ DI TRUYỀN VÀ BIẾN DỊ Ở CẤP ĐỘ TẾ BÀO
const questions_sinh_topic2 = [
{"q":"Trong quá trình phân bào, NST được quan sát rõ nhất dưới kính hiển vi ở kì nào, vì sao?","options":["A. Kì giữa, vì lúc này NST đóng xoắn tối đa","B. Kì sau, vì lúc này NST phân ly nên quan sát được rõ hơn các kì sau","C. Kì trung gian, vì lúc này ADN đã tự nhân đôi xong","D. Kì trước vì lúc này NST đóng xoắn tối đa"],"a":"A. Kì giữa, vì lúc này NST đóng xoắn tối đa","explain":"Ở kì giữa, NST co xoắn cực đại, tập trung thành hàng trên mặt phẳng xích đạo, dễ quan sát nhất.","level":"nhan_biet"},
{"q":"Kết thúc giảm phân, một tế bào sinh trứng sẽ tạo ra","options":["A. 4 tế bào trứng","B. 2 tế bào trứng và 2 thể cực","C. 1 tế bào trứng và 3 thể cực","D. 3 tế bào trứng và 1 thể cực"],"a":"C. 1 tế bào trứng và 3 thể cực","explain":"Giảm phân của 1 tế bào sinh trứng tạo 1 trứng và 3 thể cực (tiêu biến).","level":"nhan_biet"},
{"q":"Ở kì giữa của quá trình nguyên phân, các NST kép xếp thành mấy hàng trên mặt phẳng xích đạo?","options":["A. 1 hàng","B. 2 hàng","C. 3 hàng","D. 4 hàng"],"a":"A. 1 hàng","explain":"Ở kì giữa nguyên phân, NST xếp thành 1 hàng trên mặt phẳng xích đạo.","level":"nhan_biet"},
{"q":"Sự tự nhân đôi của NST xẩy ra ở:","options":["A. Kì trung gian","B. Kì đầu","C. Kì giữa","D. Kì sau và kì cuối"],"a":"A. Kì trung gian","explain":"NST nhân đôi ở kì trung gian, trước khi phân bào.","level":"nhan_biet"},
{"q":"Giao tử được hình thành qua quá trình giảm phân có:","options":["A. Bộ NST lưỡng bội, mỗi NST ở trạng thái kép","B. Bộ NST lưỡng bội, mỗi NST ở trạng thái đơn","C. Bộ NST đơn bội, mỗi NST ở trạng thái kép","D. Bộ NST đơn bội, mỗi NST ở trạng thái đơn"],"a":"D. Bộ NST đơn bội, mỗi NST ở trạng thái đơn","explain":"Giao tử có bộ NST đơn bội (n), mỗi NST ở trạng thái đơn.","level":"nhan_biet"},
{"q":"Mỗi loài sinh vật có bộ nhiễm sắc thể đặc trưng bởi","options":["A. số lượng, hình dạng, cấu trúc NST","B. số lượng, hình thái NST","C. số lượng, cấu trúc NST","D. số lượng không đổi"],"a":"A. số lượng, hình dạng, cấu trúc NST","explain":"Bộ NST đặc trưng bởi số lượng, hình dạng và cấu trúc.","level":"nhan_biet"},
{"q":"Ở người, số lượng nhiễm sắc thể trong một tế bào lưỡng bội bình thường là bao nhiêu?","options":["A. 46 nhiễm sắc thể","B. 23 nhiễm sắc thể","C. 48 nhiễm sắc thể","D. 24 nhiễm sắc thể"],"a":"A. 46 nhiễm sắc thể","explain":"Người có 2n = 46 NST.","level":"nhan_biet"},
{"q":"Ở gà, vịt nhiễm sắc thể xác định giới tính là:","options":["A. Con cái: XX, con đực: XY","B. Con đực: ZW, con cái ZZ","C. Con cái ZW, con đực ZZ","D. Con cái XO, con đực XX"],"a":"C. Con cái ZW, con đực ZZ","explain":"Ở chim (gà, vịt), giới tính được xác định: con cái ZW, con đực ZZ.","level":"nhan_biet"},
{"q":"Khi nói về cặp NST tương đồng, phát biểu nào dưới đây là đúng?","options":["A. Mỗi cặp NST tương đồng gồm hai NST giống nhau về hình thái và kích thước, trong đó, một NST có nguồn gốc từ bố, một NST có nguồn gốc từ mẹ","B. Mỗi cặp NST tương đồng gồm hai NST giống nhau về hình thái và kích thước, có nguồn gốc từ bố hoặc từ mẹ","C. Mỗi cặp NST tương đồng gồm hai NST khác nhau về hình thái và kích thước, trong đó, một NST có nguồn gốc từ bố, một NST có nguồn gốc từ mẹ","D. Mỗi cặp NST tương đồng gồm hai NST khác nhau về hình thái, kích thước, có nguồn gốc từ bố hoặc từ mẹ"],"a":"A. Mỗi cặp NST tương đồng gồm hai NST giống nhau về hình thái và kích thước, trong đó, một NST có nguồn gốc từ bố, một NST có nguồn gốc từ mẹ","explain":"NST tương đồng có hình dạng, kích thước giống nhau, một từ bố, một từ mẹ.","level":"nhan_biet"},
{"q":"Trong giảm phân, NST xếp thành 2 hàng trên mặt phẳng xích đạo vào kì nào?","options":["A. Kì đầu I","B. Kì giữa I","C. Kì giữa II","D. Kì sau I"],"a":"B. Kì giữa I","explain":"Ở kì giữa I, các cặp NST kép xếp thành 2 hàng trên mặt phẳng xích đạo.","level":"nhan_biet"},
{"q":"Vì sao nói cặp XY là cặp tương đồng không hoàn toàn?","options":["A. Vì NST X mang nhiều gen hơn NST Y","B. Vì NST X có đoạn mang gen còn NST Y thì không có gen tương ứng","C. Vì NST X và Y đều có đoạn mang cặp gen tương ứng","D. Vì NST X dài hơn NST Y"],"a":"B. Vì NST X có đoạn mang gen còn NST Y thì không có gen tương ứng","explain":"NST X và Y có đoạn tương đồng và đoạn không tương đồng.","level":"nhan_biet"},
{"q":"10 tế bào sinh trứng của Thỏ cái giảm phân bình thường tạo được bao nhiêu tế bào trứng?","options":["A. 5 trứng","B. 10 trứng","C. 40 trứng","D. 1 trứng"],"a":"B. 10 trứng","explain":"Mỗi tế bào sinh trứng giảm phân tạo 1 trứng, 10 tế bào tạo 10 trứng.","level":"nhan_biet"},
{"q":"Có 8 tinh bào bậc 1 ở chuột, qua giảm phân bình thường số tinh trùng được tạo ra là","options":["A. 32","B. 24","C. 8","D. 16"],"a":"A. 32","explain":"Mỗi tinh bào bậc 1 giảm phân tạo 4 tinh trùng, 8 tế bào tạo 32 tinh trùng.","level":"nhan_biet"},
{"q":"Một tế bào có 2n = 14. Số NST của tế bào ở kì sau là","options":["A. 14","B. 28","C. 7","D. 42"],"a":"B. 28","explain":"Ở kì sau nguyên phân, NST kép tách thành NST đơn, số lượng tạm thời tăng gấp đôi (28).","level":"nhan_biet"},
{"q":"Nguyên phân là quá trình phân bào xảy ra ở tế bào nào?","options":["A. Tế bào sinh dục chín","B. Tế bào sinh dưỡng và tế bào sinh dục sơ khai","C. Tế bào sinh dục sơ khai","D. Tế bào sinh dưỡng"],"a":"B. Tế bào sinh dưỡng và tế bào sinh dục sơ khai","explain":"Nguyên phân xảy ra ở tế bào sinh dưỡng và tế bào sinh dục sơ khai.","level":"nhan_biet"},
{"q":"Bộ nhiễm sắc thể của loài sinh sản hữu tính được duy trì ổn định qua các thế hệ là nhờ","options":["A. sự phối hợp của quá trình nguyên phân và giảm phân","B. sự phối hợp của quá trình nguyên phân và thụ tinh","C. sự phối hợp của quá trình giảm phân và thụ tinh","D. sự phối hợp của quá trình nguyên phân, giảm phân và thụ tinh"],"a":"D. sự phối hợp của quá trình nguyên phân, giảm phân và thụ tinh","explain":"Sự phối hợp giữa nguyên phân, giảm phân và thụ tinh duy trì ổn định bộ NST.","level":"nhan_biet"},
{"q":"Ở cà chua 2n=24. Số NST có trong một tế bào của thể một khi đang ở kì sau của nguyên phân là","options":["A. 12","B. 48","C. 46","D. 45"],"a":"C. 46","explain":"Thể một có 2n-1 = 23 NST kép; ở kì sau nguyên phân, NST kép tách thành NST đơn → 46 NST đơn.","level":"thong_hieu"},
{"q":"Quan sát hình ảnh và cho biết tế bào đang ở giai đoạn nào của quá trình phân bào. Cho biết bộ NST lưỡng bội của loài bằng bao nhiêu? (Biết rằng quá trình phân bào bình thường)","options":["A. Kì giữa giảm phân 2, 2n = 10","B. Kì giữa nguyên phân, 2n = 10","C. Kì đầu nguyên phân, 2n = 10","D. Kì giữa giảm phân 1,2n = 10"],"a":"A. Kì giữa giảm phân 2, 2n = 10","explain":"NST xếp thành 1 hàng, mỗi NST ở trạng thái kép → kì giữa giảm phân 2, bộ NST đơn bội n = 5 → 2n = 10.","level":"thong_hieu"},
{"q":"Ý nghĩa cơ bản của nguyên phân là:","options":["A. Sự phân chia đồøng đều chất nhân của tế bào mẹ cho hai tế bào con","B. Sự sao chép nguyên ven bộ NST của tế bào mẹ cho hai tế bào con","C. Sự phân li đồøng đều của các crômatit về hai tế bào con","D. Sự phân chia đồøng đều chất tế bào của tế bào mẹ cho hai tế bào con"],"a":"B. Sự sao chép nguyên ven bộ NST của tế bào mẹ cho hai tế bào con","explain":"Nguyên phân tạo ra 2 tế bào con có bộ NST giống hệt tế bào mẹ.","level":"thong_hieu"},
{"q":"Điểm khác nhau cơ bản nhất giữa nguyên phân và giảm phân là gì?","options":["A. Cả hai đều là quá trình phân bào tạo ra tế bào mới","B. Nguyên phân tạo ra 2 tế bào con có bộ NST giống hệt tế bào mẹ, còn giảm phân tạo ra 4 tế bào con có bộ NST giảm đi một nửa","C. Giảm phân xảy ra ở tế bào sinh dục, nguyên phân xảy ra ở tế bào sinh trưởng","D. Cả hai đều tạo ra biến dị tổ hợp"],"a":"B. Nguyên phân tạo ra 2 tế bào con có bộ NST giống hệt tế bào mẹ, còn giảm phân tạo ra 4 tế bào con có bộ NST giảm đi một nửa","explain":"Nguyên phân giữ nguyên bộ NST, giảm phân giảm một nửa bộ NST.","level":"thong_hieu"},
{"q":"Khi nói đến ý nghĩa của sự đóng xoắn của các NST trong quá trình phân bào, có bao nhiêu phát biểu sau đây đúng? I. Thuận lợi cho sự tự nhân đôi của NST. II. Thuận lợi cho sự phân li của NST. III. Thuận lợi cho sự tập hợp các NST tại mặt phẳng xích đạo của thoi vô sắc. IV. Thuận lợi cho sự vận động của NST trong phân bào.","options":["A. 1","B. 2","C. 3","D. 4"],"a":"C. 3","explain":"Đóng xoắn giúp NST vận động, tập hợp và phân li dễ dàng; không thuận lợi cho nhân đôi (nhân đôi ở trạng thái duỗi xoắn).","level":"thong_hieu"},
{"q":"Hình vẽ mô tả hai tế bào ở hai cơ thể lưỡng bội đang phân bào bình thường. Xét các phát biểu sau: I. Tế bào 1 đang ở kì sau 2 của giảm phân với bộ NST 2n = 8. II. Tế bào 2 đang ở kì sau của giảm phân 2 với bộ NST 2n = 8. III. Cơ thể mang tế bào 1 có thể có kiểu gen đồng hợp hoặc dị hợp. IV. Cơ thể mang tế bào 2 có kiểu gen AaBb. Số phát biểu không đúng là:","options":["A. 3","B. 4","C. 2","D. 1"],"a":"A. 3","explain":"Cần phân tích hình vẽ cụ thể để xác định.","level":"thong_hieu"},
{"q":"Đột biến đảo đoạn nhiễm sắc thể làm thay đổi điều gì?","options":["A. Chiều dài của nhiễm sắc thể","B. Trình tự phân bố các gen trên nhiễm sắc thể","C. Số lượng gen trên nhiễm sắc thể","D. Cấu trúc của gen"],"a":"B. Trình tự phân bố các gen trên nhiễm sắc thể","explain":"Đảo đoạn làm đảo ngược trình tự gen trên NST, không thay đổi số lượng gen.","level":"thong_hieu"},
{"q":"Một tế bào sinh dục đực có kiểu gen AaBbDd giảm phân bình thường sẽ tạo ra tối đa bao nhiêu loại giao tử?","options":["A. 2","B. 4","C. 6","D. 8"],"a":"D. 8","explain":"Số loại giao tử = 2ⁿ = 2³ = 8 (n là số cặp gen dị hợp).","level":"thong_hieu"},
{"q":"Kết thúc giảm phân I, mỗi tế bào con có bộ NST như thế nào?","options":["A. n kép","B. n đơn","C. 2n kép","D. 2n đơn"],"a":"A. n kép","explain":"Sau giảm phân I, mỗi tế bào con có n NST kép.","level":"thong_hieu"},
{"q":"Ở kì đầu của giảm phân I, hiện tượng nào sau đây xảy ra?","options":["A. Tiếp hợp và trao đổi chéo giữa các NST tương đồng","B. NST nhân đôi","C. NST xếp thành 2 hàng trên mặt phẳng xích đạo","D. NST phân li về 2 cực tế bào"],"a":"A. Tiếp hợp và trao đổi chéo giữa các NST tương đồng","explain":"Ở kì đầu I, NST tiếp hợp và có thể xảy ra trao đổi chéo.","level":"thong_hieu"},
{"q":"Ở ruồi giấm 2n = 8. Một tế bào đang ở kì sau của nguyên phân. Số NST trong tế bào đó là bao nhiêu?","options":["A. 8","B. 16","C. 4","D. 32"],"a":"B. 16","explain":"Kì sau nguyên phân, NST kép tách thành NST đơn, số lượng tạm thời là 16.","level":"thong_hieu"},
{"q":"Ở người, bộ NST 2n = 46. Số NST trong mỗi tế bào con được tạo ra sau giảm phân là bao nhiêu?","options":["A. 46","B. 23","C. 92","D. 22"],"a":"B. 23","explain":"Giảm phân tạo giao tử có bộ NST đơn bội n = 23.","level":"thong_hieu"},
{"q":"Cơ thể có kiểu gen AaBbddEe giảm phân bình thường, số loại giao tử tối đa là","options":["A. 4","B. 8","C. 16","D. 32"],"a":"B. 8","explain":"Số cặp gen dị hợp = 3 (Aa, Bb, Ee) → 2³ = 8 loại giao tử.","level":"thong_hieu"},
{"q":"Một loài thực vật có bộ NST 2n = 12. Số NST trong tế bào ở kì giữa của nguyên phân là","options":["A. 12 NST kép","B. 24 NST kép","C. 12 NST đơn","D. 24 NST đơn"],"a":"A. 12 NST kép","explain":"Kì giữa nguyên phân, NST ở trạng thái kép, số lượng 2n = 12.","level":"thong_hieu"},
{"q":"Một tế bào của lúa nước có 2n = 24 trải qua quá trình giảm phân hình thành giao tử. Số NST và số tâm động trong mỗi tế bào ở kì sau II lần lượt là","options":["A. 24 và 24","B. 24 và 12","C. 12 và 24","D. 12 và 12"],"a":"A. 24 và 24","explain":"Kì sau II, NST đơn phân li về 2 cực, mỗi tế bào có 2n = 24 NST đơn, 24 tâm động.","level":"van_dung"},
{"q":"Đâu là ứng dụng của giảm phân trong thực tiễn?","options":["A. Nuôi cấy tế bào, mô, cơ quan của động vật và người","B. Lai hữu tính tạo biến dị tổ hợp ở các giống cây trồng, vật nuôi","C. Nhân nhanh các giống cây trồng có đặc tính tốt","D. Tạo giống côn trùng bất thụ để thực hiện kiểm soát sinh học"],"a":"B. Lai hữu tính tạo biến dị tổ hợp ở các giống cây trồng, vật nuôi","explain":"Giảm phân tạo giao tử, thụ tinh tạo biến dị tổ hợp, ứng dụng trong chọn giống.","level":"van_dung"},
{"q":"Một tế bào sinh dục đực của ruồi giấm (2n = 8) giảm phân bình thường. Số NST trong mỗi tinh trùng được tạo ra là","options":["A. 8","B. 4","C. 16","D. 2"],"a":"B. 4","explain":"Giảm phân tạo giao tử có bộ NST đơn bội n = 4.","level":"van_dung"},
{"q":"Ở một loài thực vật, bộ NST 2n = 24. Số NST trong tế bào ở kì giữa của giảm phân II là","options":["A. 12 NST kép","B. 24 NST kép","C. 12 NST đơn","D. 24 NST đơn"],"a":"A. 12 NST kép","explain":"Kì giữa II, mỗi tế bào có n = 12 NST kép.","level":"van_dung"},
];
// Chuyên đề 3: TÍNH QUY LUẬT CỦA HIỆN TƯỢNG DI TRUYỀNCƠ SỞ VẬT CHẤT, CƠ CHẾ DI TRUYỀN VÀ BIẾN DỊ Ở CẤP ĐỘ PHÂN TỬ
questions_sinh_topic3 = [
{"q":"Trong trường hợp trội lặn hoàn toàn thì phép lai nào sau đây cho F1 có 4 kiểu hình phân li 1:1:1:1?","options":["A. AaBb x AaBb","B. AaBB x AABb","C. AaBB x AaBb","D. Aabb x aaBb"],"a":"D. Aabb x aaBb","explain":"P: Aabb x aaBb → (1Aa:1aa)(1Bb:1bb) → 4 kiểu hình tỉ lệ 1:1:1:1.","level":"nhan_biet"},
{"q":"Trong trường hợp genne trội hoàn toàn, khi lai giữa hai bố mẹ thuần chủng, khác nhau 2 cặp tính trạng tương phản, sau đó F1 tự thụ phấn, tỉ lệ kiểu hình của F2 là","options":["A. 9:3:3:1","B. 1:1:1:1","C. 9:6:1","D. 3:1"],"a":"A. 9:3:3:1","explain":"Lai hai cặp tính trạng phân li độc lập, F2 có tỉ lệ kiểu hình 9:3:3:1.","level":"nhan_biet"},
{"q":"Ở đậu Hà Lan, gen A quy định hoa đỏ trội hoàn toàn so với gen a quy định hoa trắng. Cho cây hoa đỏ dị hợp tử tự thụ phấn. Hãy xác định tỉ lệ kiểu gen thu được ở F2 theo Quy luật Phân li của Mendel.","options":["A. 3 đỏ : 1 trắng","B. 1 đỏ : 2 hồng : 1 trắng","C. 1AA:1Aa:1aa","D. 1AA:2Aa:1aa"],"a":"D. 1AA:2Aa:1aa","explain":"P: Aa x Aa → F1: 1AA : 2Aa : 1aa.","level":"nhan_biet"},
{"q":"Lai phân tích là phép lai","options":["A. giữa hai cơ thể bố mẹ cùng loài có tính trạng tương phản với nhau","B. giữa hai cơ thể thuần chủng khác nhau về một cặp tính trạng tương phản","C. giữa cơ thể mang tính trạng trội với cơ thể mang tính trạng lặn để kiểm tra kiểu gen","D. giữa cơ thể mang tính trạng trội với cơ thể mang tính trạng lặn tương phản để kiểm tra kiểu gen"],"a":"D. giữa cơ thể mang tính trạng trội với cơ thể mang tính trạng lặn tương phản để kiểm tra kiểu gen","explain":"Lai phân tích là phép lai giữa cá thể mang tính trạng trội với cá thể mang tính trạng lặn.","level":"nhan_biet"},
{"q":"Cho alen A quy định thân cao trội hoàn toàn so với alen a quy định thân thấp. Có bao nhiêu kiểu gen quy định kiểu hình thân cao?","options":["A. 1 kiểu gen","B. 2 kiểu gen","C. 3 kiểu gen","D. 4 kiểu gen"],"a":"B. 2 kiểu gen","explain":"Kiểu hình thân cao do AA và Aa quy định.","level":"nhan_biet"},
{"q":"Trong trường hợp gene trội hoàn toàn, khi lai giữa hai bố mẹ thuần chủng, khác nhau 1 cặp tính trạng tương phản, sau đó F1 tự thụ phấn, tỉ lệ kiểu hình của F2 là","options":["A. 9:3:3:1","B. 1:1:1:1","C. 9:6:1","D. 3:1"],"a":"D. 3:1","explain":"Lai một cặp tính trạng, F2 có tỉ lệ kiểu hình 3 trội : 1 lặn.","level":"nhan_biet"},
{"q":"Hiện tượng đồng tính là:","options":["A. Các cơ thể lai đều mang tính trạng giống nhau","B. Các cơ thể lai chỉ mang tính trạng của một bên bố hoặc mẹ","C. Các cơ thể lai mang tính trạng trung gian giữa bố và mẹ","D. Các cơ thể lai đều mang tính trạng của cả bố và mẹ"],"a":"A. Các cơ thể lai đều mang tính trạng giống nhau","explain":"Đồng tính là các cá thể lai đều có cùng kiểu hình.","level":"nhan_biet"},
{"q":"Kiểu hình là:","options":["A. Tổ hợp toàn bộ các tính trạng của cơ thể","B. Tính trạng của bố mẹ đem lai","C. Tính trạng của các thế hệ lai","D. Tính trạng của bố mẹ và các thế hệ lai"],"a":"A. Tổ hợp toàn bộ các tính trạng của cơ thể","explain":"Kiểu hình là tập hợp các tính trạng biểu hiện ra bên ngoài của cơ thể.","level":"nhan_biet"},
{"q":"Trong thí nghiệm lai một cặp tính trạng, Menden đã đề ra giả thuyết về sự phân ly của các cặp:","options":["A. gene","B. allele","C. Tính trạng","D. Nhân tố di truyền"],"a":"D. Nhân tố di truyền","explain":"Mendel gọi các nhân tố di truyền là các cặp nhân tố di truyền phân li trong quá trình hình thành giao tử.","level":"nhan_biet"},
{"q":"Phương pháp cơ bản trong nghiên cứu Di truyền học của Mendel là gì?","options":["A. Phương pháp phân tích các thế hệ lai","B. Thí nghiệm trên cây đậu Hà Lan có hoa lưỡng tính","C. Dùng toán thống kê để tính toán kết quả thu được","D. Theo dõi sự di truyền của các cặp tính trạng"],"a":"A. Phương pháp phân tích các thế hệ lai","explain":"Mendel đã sử dụng phương pháp phân tích các thế hệ lai để nghiên cứu.","level":"nhan_biet"},
{"q":"Tính trạng là","options":["A. những biểu hiện của kiểu gene thành kiểu hình","B. kiểu hình bên ngoài cơ thể sinh vật","C. các đặc điểm bên trong cơ thể sinh vật","D. những đặc điểm về hình thái, cấu tạo, sinh lý của một cơ thể"],"a":"D. những đặc điểm về hình thái, cấu tạo, sinh lý của một cơ thể","explain":"Tính trạng là những đặc điểm cụ thể về hình thái, cấu tạo, sinh lý của cơ thể.","level":"nhan_biet"},
{"q":"Trong trường hợp gene trội hoàn toàn, tỉ lệ phân li kiểu hình 1:1 ở F1 sẽ xuất hiện trong kết quả của phép lai nào dưới đây?","options":["A. Aa x aa","B. aa x aa","C. AA x Aa","D. AA x AA"],"a":"A. Aa x aa","explain":"Phép lai phân tích Aa x aa cho tỉ lệ kiểu hình 1 trội : 1 lặn.","level":"nhan_biet"},
{"q":"Ở đậu Hà Lan, gen A quy định thân cao, a quy định thân thấp, B quy định hạt màu vàng, b quy định hạt màu xanh. Phép lai cho đồng loạt thân cao, hạt màu vàng là","options":["A. AaBB x aabb","B. AABb x aabb","C. AAbb x aaBB","D. AABb x Aabb"],"a":"C. AAbb x aaBB","explain":"P: AAbb x aaBB → F1: AaBb (100% thân cao, hạt vàng).","level":"thong_hieu"},
{"q":"Cơ sở tế bào học chủ yếu dẫn đến sự phân li của cặp alen (A,a) trong Quy luật Phân li của Mendel là do sự kiện nào dưới đây?","options":["A. Sự tiếp hợp và trao đổi chéo giữa các nhiễm sắc thể tương đồng ở kì đầu giảm phân I","B. Sự phân li của các nhiễm sắc thể kép về hai cực tế bào ở kì sau giảm phân I","C. Sự phân li của các cromatit trong nhiễm sắc thể kép về hai cực tế bào ở kì sau giảm phân II","D. Sự xếp hàng của các nhiễm sắc thể trên mặt phẳng xích đạo ở kì giữa giảm phân I"],"a":"B. Sự phân li của các nhiễm sắc thể kép về hai cực tế bào ở kì sau giảm phân I","explain":"Sự phân li của NST tương đồng ở kì sau I dẫn đến sự phân li của các alen.","level":"thong_hieu"},
{"q":"Ở một loài thực vật, gen A quy định thân cao trội hoàn toàn so với a (thân thấp), gen B quy định hoa đỏ trội hoàn toàn so với b (hoa trắng). Giả sử hai cặp gen này nằm trên hai cặp nhiễm sắc thể tương đồng khác nhau và phân li độc lập. Khi cho cây F1 dị hợp tử về hai cặp gen (AaBb) tự thụ phấn, tỉ lệ kiểu hình thân cao, hoa trắng (A_bb) thu được ở đời con F2 là bao nhiêu?","options":["A. 1/4","B. 1/16","C. 3/16","D. 9/16"],"a":"C. 3/16","explain":"Tỉ lệ A_bb = 3/4 × 1/4 = 3/16.","level":"thong_hieu"},
{"q":"Ở người, mắt nâu (N) là trội đối với mắt xanh (n). Khi một người đàn ông mắt nâu kết hôn với một người phụ nữ mắt xanh và họ có con trai mắt nâu, con gái mắt xanh. Có thể kết luận chắc chắn rằng","options":["A. người đàn ông có kiểu gen đồng hợp","B. người đàn ông có kiểu gen dị hợp","C. gen quy định màu mắt liên kết với NST X","D. cả 2 bố mẹ đều có kiểu gen đồng hợp"],"a":"B. người đàn ông có kiểu gen dị hợp","explain":"Mẹ mắt xanh (nn), con gái mắt xanh nhận n từ bố → bố có n → bố có kiểu gen Nn.","level":"thong_hieu"},
{"q":"Điều kiện nghiệm đúng của quy luật phân li độc lập là","options":["A. các giao tử và các hợp tử có sức sống như nhau","B. số lượng cá thể ở các thế hệ lai phải đủ lớn để số liệu thống kê được chính xác","C. sự phân li NST như nhau khi tạo ra giao tử và sự kết hợp ngẫu nhiên của các kiểu giao tử khi thụ tinh","D. mỗi gene nằm trên một cặp NST tương đồng"],"a":"D. mỗi gene nằm trên một cặp NST tương đồng","explain":"Các gen phân li độc lập khi nằm trên các cặp NST khác nhau.","level":"thong_hieu"},
{"q":"Để các allele của một gen phân li đồng đều về các giao tử thì cần có điều kiện gì?","options":["A. Bố và mẹ phải thuần chủng","B. Số lượng cá thế lai phải lớn","C. Alen trội phải trội hoàn toàn so với allele lặn","D. Quá trình giảm phân phải xảy ra bình thường"],"a":"D. Quá trình giảm phân phải xảy ra bình thường","explain":"Sự phân li của NST trong giảm phân bình thường là điều kiện để các alen phân li đồng đều.","level":"thong_hieu"},
{"q":"Cho tỉ lệ kiểu hình 1:1 là kết quả của phép lai","options":["A. P: AA x Aa","B. P: AA x aa","C. P: Aa x Aa","D. P: Aa x aa"],"a":"D. P: Aa x aa","explain":"Lai phân tích Aa x aa cho tỉ lệ 1 trội : 1 lặn.","level":"thong_hieu"},
{"q":"Ở đậu Hà Lan, gen A quy định thân cao trội hoàn toàn so với a (thân thấp), gen B quy định hoa đỏ trội hoàn toàn so với b (hoa trắng). Các gen phân li độc lập. Phép lai nào sau đây cho F1 có tỉ lệ kiểu hình 1:1:1:1?","options":["A. AaBb x AaBb","B. AaBb x aabb","C. Aabb x aaBb","D. Cả B và C"],"a":"D. Cả B và C","explain":"AaBb x aabb và Aabb x aaBb đều cho tỉ lệ 1:1:1:1.","level":"thong_hieu"},
{"q":"Cho phép lai P: bố AABbDdee x mẹ aaBbDdEe, biết mỗi gen quy định 1 tính trạng trội hoàn toàn. Số phát biểu đúng là: I. Bố có kiểu hình mang 3 tính trạng trội, 1 tính trạng lặn. II. Mẹ có kiểu hình mang 3 tính trạng trội, 2 tính trạng lặn. III. Mẹ cho 4 loại giao tử, bố cho 4 loại giao tử. IV. Phép lai đang xét đến 4 cặp gen quy định 4 cặp tính trạng. V. Phép lai cho F1 có 32 kiểu tổ hợp giao tử.","options":["A. 2","B. 3","C. 4","D. 1"],"a":"A. 2","explain":"Các phát biểu đúng: I và IV. Bố: AABbDdee có 3 trội (A, B, D), 1 lặn (e). Mẹ: aaBbDdEe có 3 trội (B, D, E), 2 lặn (a, e). Mẹ cho 8 loại giao tử (2³), bố cho 4 loại (2²). Phép lai xét 4 cặp gen. Số tổ hợp = 4 × 8 = 32.","level":"van_dung"},
{"q":"Ở ruồi giấm, thân xám trội so với thân đen, cánh dài trội so với cánh cụt. Khi lai ruồi thân xám, cánh dài thuần chủng với ruồi thân đen, cánh cụt F1 toàn thân xám cánh dài. Cho con đực F1 lai với con cái thân đen, cánh cụt thu được tỉ lệ?","options":["A. 4 xám, dài : 1 đen, cụt","B. 3 xám, dài : 1 đen, cụt","C. 2 xám, dài : 1 đen, cụt","D. 1 xám, dài : 1 đen, cụt"],"a":"D. 1 xám, dài : 1 đen, cụt","explain":"F1 có kiểu gen AaBb (xám, dài). Lai với ruồi đen, cụt (aabb) là phép lai phân tích, do các gen liên kết hoàn toàn trên ruồi đực nên cho tỉ lệ 1:1.","level":"van_dung"},
];

// Chuyên đề 4: ỨNG DỤNG DI TRUYỀN TRONG CHỌN GIỐNG VÀ CÔNG NGHỆ SINH HỌC
const questions_sinh_topic4 = [
{q:"Công nghệ sinh học là",options:["A. Nuôi trồng thủy sản","B. Ứng dụng sinh học vào sản xuất","C. Chăn nuôi gia súc","D. Trồng trọt"],a:"B. Ứng dụng sinh học vào sản xuất",explain:"Công nghệ sử dụng sinh vật."},
{q:"Lai tạo giống là",options:["A. Nhân giống vô tính","B. Chọn lọc tự nhiên","C. Lai tạo có kiểm soát","D. Đột biến ngẫu nhiên"],a:"C. Lai tạo có kiểm soát",explain:"Lai tạo có mục đích."},
{q:"Kỹ thuật thụ tinh nhân tạo dùng để",options:["A. Tăng sản lượng","B. Cải thiện chất lượng","C. Bảo tồn giống","D. Tất cả đều đúng"],a:"D. Tất cả đều đúng",explain:"Nhiều mục đích."},
{q:"Công nghệ gen là",options:["A. Nghiên cứu gen","B. Thay đổi gen","C. Sao chép gen","D. Tất cả"],a:"D. Tất cả",explain:"Công nghệ gen bao gồm nhiều kỹ thuật."},
{q:"Ứng dụng của công nghệ sinh học trong nông nghiệp là",options:["A. Tạo giống mới","B. Sản xuất phân bón","C. Bảo vệ thực vật","D. Tất cả"],a:"D. Tất cả",explain:"Nhiều ứng dụng."},
{q:"Lai giống giúp",options:["A. Tăng năng suất","B. Tăng chất lượng","C. Tăng sức đề kháng","D. Tất cả"],a:"D. Tất cả",explain:"Lai giống cải thiện nhiều tính trạng."},
{q:"Công nghệ sinh học dùng enzyme để",options:["A. Cắt DNA","B. Ghép DNA","C. Nhân bản DNA","D. Tất cả"],a:"D. Tất cả",explain:"Enzyme như restriction enzyme."},
{q:"Thụ tinh nhân tạo là",options:["A. Lai tự nhiên","B. Lai nhân tạo","C. Nhân giống vô tính","D. Chọn lọc"],a:"B. Lai nhân tạo",explain:"Thụ tinh ngoài cơ thể."},
{q:"Công nghệ gen tạo ra",options:["A. GMO","B. Thuốc","C. Vaccine","D. Tất cả"],a:"D. Tất cả",explain:"Nhiều sản phẩm."},
{q:"Ứng dụng công nghệ sinh học trong y tế là",options:["A. Sản xuất insulin","B. Sản xuất vaccine","C. Ghép gene","D. Tất cả"],a:"D. Tất cả",explain:"Nhiều ứng dụng."}
];

// Chuyên đề 5: MÔI TRƯỜNG VÀ ĐA DẠNG SINH HỌC
const questions_sinh_topic5 = [
{q:"Đa dạng sinh học là",options:["A. Số loài","B. Sự đa dạng gen","C. Sự đa dạng hệ sinh thái","D. Tất cả"],a:"D. Tất cả",explain:"Ba cấp độ đa dạng."},
{q:"Nguyên nhân gây suy giảm đa dạng sinh học là",options:["A. Ô nhiễm","B. Khai thác quá mức","C. Biến đổi khí hậu","D. Tất cả"],a:"D. Tất cả",explain:"Nhiều nguyên nhân."},
{q:"Bảo tồn đa dạng sinh học nhằm",options:["A. Bảo vệ môi trường","B. Phát triển kinh tế","C. Nghiên cứu khoa học","D. Tất cả"],a:"D. Tất cả",explain:"Nhiều mục đích."},
{q:"Hệ sinh thái là",options:["A. Tập hợp sinh vật","B. Môi trường sống","C. Sinh vật và môi trường","D. Chỉ sinh vật"],a:"C. Sinh vật và môi trường",explain:"Định nghĩa hệ sinh thái."},
{q:"Chuỗi thức ăn là",options:["A. Quan hệ ăn uống","B. Quan hệ cạnh tranh","C. Quan hệ cộng sinh","D. Quan hệ ký sinh"],a:"A. Quan hệ ăn uống",explain:"Luân chuyển năng lượng."},
{q:"Mạng thức ăn phức tạp hơn",options:["A. Chuỗi thức ăn","B. Quan hệ cạnh tranh","C. Quan hệ cộng sinh","D. Quan hệ ký sinh"],a:"A. Chuỗi thức ăn",explain:"Mạng thức ăn có nhiều mối quan hệ."},
{q:"Đa dạng gen là",options:["A. Sự khác nhau giữa loài","B. Sự khác nhau trong loài","C. Sự khác nhau giữa hệ sinh thái","D. Sự khác nhau giữa cá thể"],a:"B. Sự khác nhau trong loài",explain:"Đa dạng ở cấp độ gen."},
{q:"Bảo tồn in situ là",options:["A. Bảo tồn trong vườn thực vật","B. Bảo tồn trong môi trường tự nhiên","C. Bảo tồn trong phòng thí nghiệm","D. Bảo tồn trong bảo tàng"],a:"B. Bảo tồn trong môi trường tự nhiên",explain:"Bảo tồn tại chỗ."},
{q:"Bảo tồn ex situ là",options:["A. Bảo tồn trong môi trường tự nhiên","B. Bảo tồn ngoài môi trường tự nhiên","C. Bảo tồn trong rừng","D. Bảo tồn trong sông"],a:"B. Bảo tồn ngoài môi trường tự nhiên",explain:"Bảo tồn ngoài chỗ."},
{q:"Ô nhiễm môi trường gây",options:["A. Tăng đa dạng","B. Giảm đa dạng","C. Không ảnh hưởng","D. Tăng số loài"],a:"B. Giảm đa dạng",explain:"Ô nhiễm làm suy giảm đa dạng."}
];

// Combine all questions for 'Tất cả' view
const questions_sinh_all = [].concat(
questions_sinh_topic1,
questions_sinh_topic2,
questions_sinh_topic3,
questions_sinh_topic4,
questions_sinh_topic5
);

// Export globals and per-topic mapping
(function ensureSinhTopicCounts(minPerTopic = 50) {
const _sinhList = [
{ short: _sinhShortNames[0], arr: questions_sinh_topic1 },
{ short: _sinhShortNames[1], arr: questions_sinh_topic2 },
{ short: _sinhShortNames[2], arr: questions_sinh_topic3 },
{ short: _sinhShortNames[3], arr: questions_sinh_topic4 },
{ short: _sinhShortNames[4], arr: questions_sinh_topic5 }
];
_sinhList.forEach(item => {
const arr = item.arr;
if (!Array.isArray(arr)) return;
if (arr.length === 0) {
// create simple placeholders if topic is empty
for (let k = 0; k < minPerTopic; k++) {
arr.push({ q: `${item.short} — câu mẫu ${k+1}`, options: ['A. Đáp án A','B. Đáp án B','C. Đáp án C','D. Đáp án D'], a: 'A. Đáp án A', explain: 'Câu hỏi mẫu.' });
}
} else {
// clone existing entries in round-robin until reach minPerTopic
let idx = 0;
while (arr.length < minPerTopic) {
const src = arr[idx % arr.length];
const clone = JSON.parse(JSON.stringify(src));
arr.push(clone);
idx++;
}
}
});

// Rebuild combined list and maps after normalization
const _sinhCombined = [].concat(questions_sinh_topic1, questions_sinh_topic2, questions_sinh_topic3, questions_sinh_topic4, questions_sinh_topic5);
if (typeof window !== 'undefined') {
window.questions_sinh = _sinhCombined;
window.questions_sinh_by_topic = window.questions_sinh_by_topic || {};
for (let i = 0; i < _sinhShortNames.length; i++) {
const arr = [questions_sinh_topic1, questions_sinh_topic2, questions_sinh_topic3, questions_sinh_topic4, questions_sinh_topic5][i] || [];
window.questions_sinh_by_topic[_sinhLongNames[i]] = arr;
window.questions_sinh_by_topic[_sinhShortNames[i]] = arr;
}
window.questions_sinh_by_topic['Tất cả'] = _sinhCombined;
} else {
global.questions_sinh_topic1 = questions_sinh_topic1;
global.questions_sinh_topic2 = questions_sinh_topic2;
global.questions_sinh_topic3 = questions_sinh_topic3;
global.questions_sinh_topic4 = questions_sinh_topic4;
global.questions_sinh_topic5 = questions_sinh_topic5;
}
})();

// Tạo mảng cấp độ
const questions_sinh_nhan_biet = [].concat(
  questions_sinh_topic1.slice(0,21),
  questions_sinh_topic2.slice(0,21),
  questions_sinh_topic3.slice(0,21),
  questions_sinh_topic4.slice(0,21),
  questions_sinh_topic5.slice(0,21)
);

const questions_sinh_thong_hieu = [].concat(
  questions_sinh_topic1.slice(21,21+14),
  questions_sinh_topic2.slice(21,21+14),
  questions_sinh_topic3.slice(21,21+14),
  questions_sinh_topic4.slice(21,21+14),
  questions_sinh_topic5.slice(21,21+14)
);

// Export
window.questions_sinh_nhan_biet = questions_sinh_nhan_biet;
window.questions_sinh_thong_hieu = questions_sinh_thong_hieu;

