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
/* ===== NHẬN BIẾT (25 câu) ===== */
{q:"DNA là viết tắt của",options:["A. Deoxyribonucleic acid","B. Ribonucleic acid","C. Amino acid","D. Nucleoprotein"],a:"A. Deoxyribonucleic acid",explain:"DNA là axit đêoxiribônuclêic.", level: "nhan_biet"},
{q:"Đơn phân cấu tạo nên DNA là",options:["A. Amino acid","B. Nucleotide","C. Protein","D. Monosaccharide"],a:"B. Nucleotide",explain:"DNA được cấu tạo từ các nucleotide."},
{q:"Một nucleotide của DNA gồm",options:["A. Đường + bazơ","B. Đường + bazơ + phosphate","C. Bazơ + protein","D. Đường + axit béo"],a:"B. Đường + bazơ + phosphate",explain:"Cấu trúc chuẩn của nucleotide."},
{q:"Bazơ nitơ chỉ có trong DNA mà không có trong RNA là",options:["A. Adenine","B. Guanine","C. Cytosine","D. Thymine"],a:"D. Thymine",explain:"RNA dùng uracil thay cho thymine."},
{q:"Trong DNA, adenine (A) liên kết bổ sung với",options:["A. G","B. C","C. T","D. U"],a:"C. T",explain:"Nguyên tắc bổ sung A–T."},
{q:"Liên kết giữa các bazơ bổ sung trong DNA là",options:["A. Ion","B. Peptide","C. Hydrogen bond","D. Glycosid"],a:"C. Hydrogen bond",explain:"Liên kết hiđrô giữ hai mạch DNA."},
{q:"DNA có cấu trúc không gian dạng",options:["A. Mạch đơn","B. Vòng","C. Xoắn kép","D. Gấp khúc"],a:"C. Xoắn kép",explain:"Mô hình Watson – Crick."},
{q:"Gen (gene) là",options:["A. Một phân tử protein","B. Một đoạn DNA","C. Một NST","D. Một RNA"],a:"B. Một đoạn DNA",explain:"Gen mang thông tin di truyền."},
{q:"RNA khác DNA ở đặc điểm nào sau đây?",options:["A. Có bazơ A","B. Có liên kết phosphate","C. Có đường ribose","D. Có cấu trúc xoắn"],a:"C. Có đường ribose",explain:"DNA có đường deoxyribose."},
{q:"Loại RNA mang thông tin di truyền từ DNA là",options:["A. tRNA","B. rRNA","C. mRNA","D. snRNA"],a:"C. mRNA",explain:"mRNA là messenger RNA."},
{q:"tRNA có chức năng",options:["A. Tổng hợp ribosome","B. Mang axit amin","C. Lưu trữ thông tin","D. Nhân đôi DNA"],a:"B. Mang axit amin",explain:"tRNA vận chuyển axit amin."},
{q:"rRNA là thành phần cấu tạo của",options:["A. Nhân tế bào","B. Ribosome","C. NST","D. Ty thể"],a:"B. Ribosome",explain:"rRNA cấu tạo ribosome."},
{q:"Quá trình tổng hợp RNA từ DNA gọi là",options:["A. Replication","B. Translation","C. Transcription","D. Mutation"],a:"C. Transcription",explain:"Phiên mã là transcription."},
{q:"Quá trình tổng hợp protein từ mRNA gọi là",options:["A. Replication","B. Translation","C. Transcription","D. Duplication"],a:"B. Translation",explain:"Dịch mã tạo protein."},
{q:"Protein được cấu tạo từ các đơn phân là",options:["A. Nucleotide","B. Amino acid","C. Monosaccharide","D. Fatty acid"],a:"B. Amino acid",explain:"Protein là chuỗi polypeptide."},
{q:"Liên kết nối các axit amin trong protein là",options:["A. Hydrogen","B. Ionic","C. Peptide","D. Glycosid"],a:"C. Peptide",explain:"Liên kết peptit."},
{q:"Thông tin di truyền của DNA được lưu giữ ở",options:["A. Số vòng xoắn","B. Trình tự nucleotide","C. Liên kết hiđrô","D. Nhóm phosphate"],a:"B. Trình tự nucleotide",explain:"Trình tự quyết định thông tin."},
{q:"DNA ở sinh vật nhân thực chủ yếu nằm trong",options:["A. Ribosome","B. Nhân tế bào","C. Tế bào chất","D. Không bào"],a:"B. Nhân tế bào",explain:"DNA tập trung trong nhân."},
{q:"Enzyme tham gia quá trình phiên mã là",options:["A. DNA polymerase","B. RNA polymerase","C. Ligase","D. Helicase"],a:"B. RNA polymerase",explain:"RNA polymerase tổng hợp RNA."},
{q:"Enzyme tham gia nhân đôi DNA là",options:["A. RNA polymerase","B. DNA polymerase","C. Peptidase","D. Amylase"],a:"B. DNA polymerase",explain:"DNA polymerase xúc tác nhân đôi."},
{q:"Đột biến gen là sự biến đổi ở mức",options:["A. NST","B. Tế bào","C. Phân tử DNA","D. Cơ thể"],a:"C. Phân tử DNA",explain:"Xảy ra ở trình tự nucleotide."},
{q:"Đột biến gen làm phát sinh",options:["A. Thường biến","B. Biến dị di truyền","C. Biến dị tổ hợp","D. Đồng loạt"],a:"B. Biến dị di truyền",explain:"Đột biến di truyền được."},
{q:"Mã di truyền được đọc theo chiều",options:["A. 3' → 5'","B. 5' → 3'","C. Bất kỳ","D. Ngẫu nhiên"],a:"B. 5' → 3'",explain:"mRNA được đọc theo chiều 5'→3'."},
{q:"Bộ ba mở đầu trên mRNA là",options:["A. UAA","B. UAG","C. AUG","D. UGA"],a:"C. AUG",explain:"AUG mã hóa methionine."},
{q:"Bộ ba kết thúc không mã hóa axit amin là",options:["A. AUG","B. UUU","C. UAA","D. GGG"],a:"C. UAA",explain:"UAA là bộ ba kết thúc."},
/* ===== THÔNG HIỂU (25 câu) ===== */
{q:"DNA có tính đặc thù vì",options:["A. Có cấu trúc xoắn","B. Có liên kết hiđrô","C. Có trình tự nucleotide riêng","D. Có kích thước lớn"],a:"C. Có trình tự nucleotide riêng",explain:"Trình tự nucleotide mang thông tin di truyền."},
{q:"DNA có khả năng tự nhân đôi nhờ",options:["A. Liên kết peptit","B. Nguyên tắc bổ sung","C. Cấu trúc vòng","D. Enzyme tiêu hóa"],a:"B. Nguyên tắc bổ sung",explain:"A–T, G–C đảm bảo chính xác."},
{q:"Sự khác nhau cơ bản giữa DNA và RNA là",options:["A. Số bazơ","B. Đường và bazơ nitơ","C. Số mạch","D. Liên kết phosphate"],a:"B. Đường và bazơ nitơ",explain:"RNA có ribose và uracil."},
{q:"mRNA đóng vai trò quan trọng vì",options:["A. Cấu tạo ribosome","B. Mang thông tin di truyền","C. Xúc tác phản ứng","D. Nhân đôi DNA"],a:"B. Mang thông tin di truyền",explain:"mRNA truyền thông tin từ DNA."},
{q:"Ribosome là nơi diễn ra quá trình",options:["A. Phiên mã","B. Nhân đôi","C. Dịch mã","D. Đột biến"],a:"C. Dịch mã",explain:"Protein được tổng hợp tại ribosome."},
{q:"Protein có vai trò xúc tác vì",options:["A. Tan tốt trong nước","B. Một số là enzyme","C. Có cấu trúc xoắn","D. Có nhiều axit amin"],a:"B. Một số là enzyme",explain:"Enzyme là protein xúc tác."},
{q:"Đột biến gen thường xảy ra do",options:["A. Thụ tinh","B. Nhân đôi sai","C. Nguyên phân","D. Sinh sản vô tính"],a:"B. Nhân đôi sai",explain:"Sai sót trong sao chép DNA."},
{q:"Đột biến gen làm thay đổi",options:["A. Số lượng NST","B. Trình tự nucleotide","C. Hình dạng NST","D. Kiểu gen tế bào"],a:"B. Trình tự nucleotide",explain:"Đột biến ở mức phân tử."},
{q:"Đa số đột biến gen là",options:["A. Có lợi","B. Có hại hoặc trung tính","C. Luôn có lợi","D. Không ảnh hưởng"],a:"B. Có hại hoặc trung tính",explain:"Phần lớn ảnh hưởng xấu hoặc không rõ."},
{q:"Tính ổn định của DNA chủ yếu do",options:["A. Liên kết ion","B. Liên kết hiđrô","C. Liên kết cộng hoá trị","D. Liên kết peptit"],a:"C. Liên kết cộng hoá trị",explain:"Giữ vững mạch polynucleotide."},
{q:"Sự đa dạng của protein là do",options:["A. Số axit amin nhiều","B. Trật tự axit amin khác nhau","C. Liên kết yếu","D. Kích thước khác nhau"],a:"B. Trật tự axit amin khác nhau",explain:"Trật tự quyết định cấu trúc và chức năng."},
{q:"DNA truyền đạt thông tin di truyền qua",options:["A. Nhân đôi","B. Phiên mã","C. Dịch mã","D. Đột biến"],a:"A. Nhân đôi",explain:"Nhân đôi đảm bảo truyền đạt qua thế hệ."},
{q:"RNA không có chức năng",options:["A. Mang thông tin","B. Tham gia tổng hợp protein","C. Lưu trữ lâu dài thông tin di truyền","D. Vận chuyển axit amin"],a:"C. Lưu trữ lâu dài thông tin di truyền",explain:"Chức năng này thuộc về DNA."},
{q:"Phiên mã diễn ra trong",options:["A. Ribosome","B. Nhân tế bào","C. Tế bào chất","D. Không bào"],a:"B. Nhân tế bào",explain:"Ở sinh vật nhân thực."},
{q:"Dịch mã cần sự tham gia của",options:["A. mRNA, tRNA, ribosome","B. DNA, enzyme","C. Chỉ mRNA","D. Chỉ protein"],a:"A. mRNA, tRNA, ribosome",explain:"Ba thành phần chính."},
{q:"Biến dị phát sinh ở cấp độ phân tử là",options:["A. Thường biến","B. Biến dị tổ hợp","C. Đột biến gen","D. Đột biến NST"],a:"C. Đột biến gen",explain:"Xảy ra ở DNA."},
{q:"Cơ chế đảm bảo truyền đạt chính xác thông tin di truyền là",options:["A. Nguyên tắc bổ sung","B. Đột biến","C. Dịch mã","D. Phân bào"],a:"A. Nguyên tắc bổ sung",explain:"Cơ sở của nhân đôi DNA."},
{q:"Mỗi bộ ba mã hóa",options:["A. Một nucleotide","B. Một axit amin","C. Một protein","D. Một gen"],a:"B. Một axit amin",explain:"Mã di truyền là mã bộ ba."},
{q:"Mã di truyền có tính phổ biến nghĩa là",options:["A. Chỉ có ở người","B. Giống nhau ở nhiều loài","C. Chỉ có ở vi khuẩn","D. Luôn thay đổi"],a:"B. Giống nhau ở nhiều loài",explain:"Hầu hết sinh vật dùng chung mã."},
{q:"Gen biểu hiện thành tính trạng thông qua",options:["A. DNA","B. RNA","C. Protein","D. Nucleotide"],a:"C. Protein",explain:"Protein trực tiếp biểu hiện tính trạng."},
{q:"DNA không trực tiếp tham gia",options:["A. Lưu trữ thông tin","B. Nhân đôi","C. Tổng hợp protein","D. Truyền đạt thông tin"],a:"C. Tổng hợp protein",explain:"Protein được tổng hợp qua RNA."},
{q:"RNA được tổng hợp dựa trên mạch",options:["A. Bất kỳ","B. Khuôn DNA","C. RNA khác","D. Protein"],a:"B. Khuôn DNA",explain:"Theo nguyên tắc bổ sung."},
{q:"Nếu DNA bị biến đổi thì có thể dẫn đến",options:["A. Không ảnh hưởng","B. Biến dị di truyền","C. Luôn có lợi","D. Không truyền được"],a:"B. Biến dị di truyền",explain:"Đột biến có thể di truyền."},
{q:"Cấp độ phân tử là cấp độ nghiên cứu",options:["A. Tế bào","B. Cơ thể","C. DNA, RNA, protein","D. Quần thể"],a:"C. DNA, RNA, protein",explain:"Thuộc sinh học phân tử."},
{q:"Nguồn gốc sâu xa của biến dị di truyền là",options:["A. Môi trường","B. Đột biến phân tử","C. Thụ tinh","D. Sinh sản"],a:"B. Đột biến phân tử",explain:"Phát sinh ở DNA."}
];

// Chuyên đề 2: CƠ SỞ VẬT CHẤT, CƠ CHẾ DI TRUYỀN VÀ BIẾN DỊ Ở CẤP ĐỘ TẾ BÀO
const questions_sinh_topic2 = [
/* ===== NHẬN BIẾT (25 câu) ===== */
{q:"Nhiễm sắc thể (chromosome) được cấu tạo chủ yếu từ",options:["A. Protein","B. DNA và protein","C. RNA và protein","D. Lipid"],a:"B. DNA và protein",explain:"NST gồm DNA quấn quanh protein histone."},
{q:"Protein chủ yếu tham gia cấu tạo nhiễm sắc thể là",options:["A. Enzyme","B. Histone","C. Keratin","D. Collagen"],a:"B. Histone",explain:"DNA quấn quanh protein histone."},
{q:"NST chỉ co xoắn cực đại ở kì",options:["A. Prophase","B. Metaphase","C. Anaphase","D. Telophase"],a:"B. Metaphase",explain:"NST co ngắn và dày nhất ở kì giữa."},
{q:"Mỗi NST kép gồm",options:["A. 1 chromatid","B. 2 chromatid","C. 3 chromatid","D. 4 chromatid"],a:"B. 2 chromatid",explain:"Hai cromatit chị em dính nhau ở tâm động."},
{q:"Tâm động (centromere) là nơi",options:["A. NST nhân đôi","B. NST phân li","C. Hai chromatid gắn nhau","D. DNA cuộn xoắn"],a:"C. Hai chromatid gắn nhau",explain:"Tâm động giữ hai cromatit."},
{q:"Bộ NST lưỡng bội được kí hiệu là",options:["A. n","B. 2n","C. 3n","D. n+1"],a:"B. 2n",explain:"Tế bào sinh dưỡng có bộ NST 2n."},
{q:"Bộ NST đơn bội được kí hiệu là",options:["A. 2n","B. 3n","C. n","D. 4n"],a:"C. n",explain:"Giao tử mang bộ NST đơn bội."},
{q:"Tế bào sinh dưỡng (somatic cell) có bộ NST",options:["A. n","B. 2n","C. 3n","D. 4n"],a:"B. 2n",explain:"Tế bào sinh dưỡng là lưỡng bội."},
{q:"Giao tử (gamete) được hình thành qua quá trình",options:["A. Mitosis","B. Meiosis","C. Fertilization","D. Replication"],a:"B. Meiosis",explain:"Giảm phân tạo giao tử."},
{q:"Nguyên phân là quá trình phân chia tế bào tạo ra",options:["A. 2 tế bào đơn bội","B. 4 tế bào đơn bội","C. 2 tế bào giống nhau","D. 4 tế bào giống nhau"],a:"C. 2 tế bào giống nhau",explain:"Nguyên phân giữ nguyên bộ NST."},
{q:"Giảm phân gồm",options:["A. 1 lần phân bào","B. 2 lần phân bào","C. 3 lần phân bào","D. 4 lần phân bào"],a:"B. 2 lần phân bào",explain:"Giảm phân I và II."},
{q:"Ở giảm phân I xảy ra hiện tượng",options:["A. Nhân đôi DNA","B. Phân li chromatid","C. Tiếp hợp NST","D. Tổng hợp protein"],a:"C. Tiếp hợp NST",explain:"NST tương đồng tiếp hợp."},
{q:"Sự phân li của NST tương đồng xảy ra ở kì",options:["A. Prophase I","B. Metaphase I","C. Anaphase I","D. Telophase I"],a:"C. Anaphase I",explain:"NST tương đồng phân li về hai cực."},
{q:"Sự phân li của chromatid xảy ra ở",options:["A. Giảm phân I","B. Giảm phân II","C. Nguyên phân và giảm phân II","D. Chỉ nguyên phân"],a:"C. Nguyên phân và giảm phân II",explain:"Chromatid tách nhau ở hai quá trình."},
{q:"NST tương đồng là",options:["A. Hai NST giống nhau về hình dạng","B. Hai NST khác nguồn gốc","C. Hai NST giới tính","D. Hai NST khác kích thước"],a:"A. Hai NST giống nhau về hình dạng",explain:"Có cùng hình dạng, kích thước."},
{q:"NST giới tính ở người là",options:["A. XX","B. XY","C. X và Y","D. X, Y"],a:"C. X và Y",explain:"NST giới tính gồm X và Y."},
{q:"NST thường (autosome) là NST",options:["A. Quy định giới tính","B. Không quy định giới tính","C. Chỉ có ở nam","D. Chỉ có ở nữ"],a:"B. Không quy định giới tính",explain:"NST thường quy định tính trạng thường."},
{q:"Bộ NST của người là",options:["A. 2n = 44","B. 2n = 46","C. 2n = 48","D. 2n = 23"],a:"B. 2n = 46",explain:"Người có 46 NST."},
{q:"Một NST đơn chứa",options:["A. 1 phân tử DNA","B. 2 phân tử DNA","C. 3 phân tử DNA","D. Không có DNA"],a:"A. 1 phân tử DNA",explain:"NST đơn tương ứng 1 DNA."},
{q:"Một NST kép chứa",options:["A. 1 DNA","B. 2 DNA","C. 3 DNA","D. 4 DNA"],a:"B. 2 DNA",explain:"Mỗi chromatid chứa 1 DNA."},
{q:"Trao đổi chéo (crossing-over) xảy ra ở",options:["A. Prophase I","B. Metaphase I","C. Anaphase I","D. Telophase I"],a:"A. Prophase I",explain:"Trao đổi đoạn giữa NST tương đồng."},
{q:"Trao đổi chéo làm tăng",options:["A. Số NST","B. Biến dị tổ hợp","C. Đột biến gen","D. Thường biến"],a:"B. Biến dị tổ hợp",explain:"Tạo tổ hợp gen mới."},
{q:"Nguyên phân giúp cơ thể",options:["A. Tăng số NST","B. Sinh trưởng và phát triển","C. Tạo giao tử","D. Tạo biến dị"],a:"B. Sinh trưởng và phát triển",explain:"Nguyên phân tăng số tế bào."},
{q:"Giảm phân kết hợp với thụ tinh giúp",options:["A. Tăng biến dị","B. Giữ ổn định bộ NST","C. Tăng số NST","D. Giảm số gen"],a:"B. Giữ ổn định bộ NST",explain:"Ổn định qua các thế hệ."},
{q:"Hợp tử (zygote) được hình thành sau quá trình",options:["A. Nguyên phân","B. Giảm phân","C. Thụ tinh","D. Nhân đôi"],a:"C. Thụ tinh",explain:"Hợp tử hình thành khi giao tử kết hợp."},
/* ===== THÔNG HIỂU (25 câu) ===== */
{q:"NST mang thông tin di truyền vì",options:["A. Có protein","B. Có DNA","C. Có hình dạng đặc trưng","D. Có khả năng co xoắn"],a:"B. Có DNA",explain:"DNA mang gen."},
{q:"Nguyên phân giữ ổn định bộ NST vì",options:["A. Không nhân đôi DNA","B. NST phân li đồng đều","C. Tạo giao tử","D. Không phân chia tế bào"],a:"B. NST phân li đồng đều",explain:"Hai tế bào con giống tế bào mẹ."},
{q:"Giảm phân làm giảm số NST còn một nửa vì",options:["A. Chỉ phân chia 1 lần","B. NST không nhân đôi","C. NST tương đồng phân li","D. Chromatid không tách"],a:"C. NST tương đồng phân li",explain:"Xảy ra ở giảm phân I."},
{q:"Trao đổi chéo chỉ xảy ra ở giảm phân I vì",options:["A. Có tiếp hợp NST","B. Có phân li chromatid","C. Có nhân đôi DNA","D. Có thụ tinh"],a:"A. Có tiếp hợp NST",explain:"NST tương đồng tiếp hợp."},
{q:"Biến dị tổ hợp phát sinh do",options:["A. Đột biến gen","B. Trao đổi chéo và phân li độc lập","C. Nguyên phân","D. Môi trường"],a:"B. Trao đổi chéo và phân li độc lập",explain:"Xảy ra trong giảm phân."},
{q:"Sự phân li độc lập của NST xảy ra ở",options:["A. Metaphase I","B. Anaphase I","C. Telophase I","D. Prophase II"],a:"A. Metaphase I",explain:"NST sắp xếp ngẫu nhiên."},
{q:"Tại sao giảm phân tạo ra nhiều loại giao tử?",options:["A. Do nhân đôi DNA","B. Do phân li độc lập và trao đổi chéo","C. Do nguyên phân","D. Do thụ tinh"],a:"B. Do phân li độc lập và trao đổi chéo",explain:"Tạo tổ hợp gen mới."},
{q:"NST tương đồng giống nhau về",options:["A. Nguồn gốc và hình dạng","B. Chức năng","C. Giới tính","D. Tất cả gen"],a:"A. Nguồn gốc và hình dạng",explain:"Một từ bố, một từ mẹ."},
{q:"NST khác nhau về giới tính giữa nam và nữ là",options:["A. NST thường","B. NST giới tính","C. NST tương đồng","D. NST kép"],a:"B. NST giới tính",explain:"Nam XY, nữ XX."},
{q:"Sự ổn định bộ NST qua các thế hệ là nhờ",options:["A. Nguyên phân","B. Giảm phân","C. Giảm phân và thụ tinh","D. Thụ tinh"],a:"C. Giảm phân và thụ tinh",explain:"Hai quá trình bù trừ nhau."},
{q:"Nếu không có giảm phân thì",options:["A. Không có sinh trưởng","B. Số NST tăng dần qua thế hệ","C. Không có biến dị","D. Không có nguyên phân"],a:"B. Số NST tăng dần qua thế hệ",explain:"Không giảm số NST."},
{q:"Trao đổi chéo không làm thay đổi",options:["A. Trật tự gen","B. Số lượng gen","C. Tổ hợp gen","D. Kiểu gen"],a:"B. Số lượng gen",explain:"Chỉ đổi vị trí gen."},
{q:"Nguyên phân không tạo ra",options:["A. Tế bào mới","B. Sinh trưởng","C. Giao tử","D. Tái tạo mô"],a:"C. Giao tử",explain:"Giao tử tạo bởi giảm phân."},
{q:"Giảm phân II tương tự nguyên phân vì",options:["A. Có trao đổi chéo","B. Phân li chromatid","C. Không nhân đôi DNA","D. Giảm số NST"],a:"B. Phân li chromatid",explain:"Giống cơ chế nguyên phân."},
{q:"Tại sao trao đổi chéo làm tăng biến dị?",options:["A. Tạo alen mới","B. Tạo tổ hợp gen mới","C. Tăng số gen","D. Tăng số NST"],a:"B. Tạo tổ hợp gen mới",explain:"Không tạo gen mới."},
{q:"NST thường và NST giới tính giống nhau ở điểm",options:["A. Chức năng","B. Cấu tạo","C. Số lượng","D. Vai trò"],a:"B. Cấu tạo",explain:"Đều gồm DNA và protein."},
{q:"Mỗi giao tử chỉ mang một NST trong cặp vì",options:["A. Nguyên phân","B. Giảm phân","C. Thụ tinh","D. Nhân đôi"],a:"B. Giảm phân",explain:"NST tương đồng phân li."},
{q:"Nếu giảm phân xảy ra sai có thể dẫn đến",options:["A. Đột biến gen","B. Đột biến số lượng NST","C. Thường biến","D. Không ảnh hưởng"],a:"B. Đột biến số lượng NST",explain:"Không phân li NST."},
{q:"Cấp độ tế bào nghiên cứu chủ yếu về",options:["A. DNA","B. Protein","C. NST và phân bào","D. Gen"],a:"C. NST và phân bào",explain:"Thuộc sinh học tế bào."},
{q:"Nguyên nhân trực tiếp gây biến dị tổ hợp là",options:["A. Môi trường","B. Trao đổi chéo","C. Đột biến gen","D. Nguyên phân"],a:"B. Trao đổi chéo",explain:"Kết hợp phân li độc lập."},
{q:"Nếu một loài có 2n = 20 thì giao tử có",options:["A. 20 NST","B. 10 NST","C. 40 NST","D. 5 NST"],a:"B. 10 NST",explain:"Giao tử mang n NST."},
{q:"Giảm phân chỉ xảy ra ở",options:["A. Tế bào sinh dưỡng","B. Tế bào sinh dục chín","C. Hợp tử","D. Mọi tế bào"],a:"B. Tế bào sinh dục chín",explain:"Tạo giao tử."},
{q:"NST đóng vai trò quan trọng trong di truyền vì",options:["A. Dễ quan sát","B. Mang gen","C. Có hình dạng","D. Co xoắn"],a:"B. Mang gen",explain:"Gen nằm trên NST."},
{q:"Biến dị phát sinh ở cấp độ tế bào chủ yếu là",options:["A. Đột biến gen","B. Biến dị tổ hợp","C. Thường biến","D. Đột biến cấu trúc protein"],a:"B. Biến dị tổ hợp",explain:"Do giảm phân."},
{q:"Cơ chế di truyền ở cấp độ tế bào gắn liền với",options:["A. Phiên mã","B. Dịch mã","C. Phân bào","D. Đột biến gen"],a:"C. Phân bào",explain:"Nguyên phân và giảm phân."}
];
// Chuyên đề 3: TÍNH QUY LUẬT CỦA HIỆN TƯỢNG DI TRUYỀN
const questions_sinh_topic3 = [
/* ===== NHẬN BIẾT (25 câu) ===== */
{q:"Quy luật phân li được Gregor Mendel phát hiện khi nghiên cứu",options:["A. Lai hai cặp tính trạng","B. Lai một cặp tính trạng","C. Lai phân tích","D. Lai thuận nghịch"],a:"B. Lai một cặp tính trạng",explain:"Mendel nghiên cứu lai đơn."},
{q:"Quy luật phân li còn được gọi là",options:["A. Law of Independent Assortment","B. Law of Segregation","C. Law of Dominance","D. Law of Linkage"],a:"B. Law of Segregation",explain:"Tên quốc tế của quy luật phân li."},
{q:"Cặp alen (allele) là",options:["A. Hai gen khác nhau","B. Hai gen nằm trên hai NST khác nhau","C. Hai dạng của cùng một gen","D. Hai gen quy định hai tính trạng"],a:"C. Hai dạng của cùng một gen",explain:"Alen là các dạng khác nhau của một gen."},
{q:"Tính trạng trội (dominant trait) là tính trạng",options:["A. Chỉ biểu hiện ở F₂","B. Không bao giờ biểu hiện","C. Biểu hiện ở cả thể dị hợp","D. Chỉ biểu hiện ở thể đồng hợp"],a:"C. Biểu hiện ở cả thể dị hợp",explain:"Alen trội biểu hiện ở dị hợp."},
{q:"Tính trạng lặn (recessive trait) chỉ biểu hiện khi",options:["A. Có alen trội","B. Ở thể dị hợp","C. Ở thể đồng hợp lặn","D. Luôn biểu hiện"],a:"C. Ở thể đồng hợp lặn",explain:"Cần hai alen lặn."},
{q:"Kiểu gen (genotype) là",options:["A. Tổ hợp các alen của cá thể","B. Hình dạng bên ngoài","C. Tính trạng biểu hiện","D. Môi trường sống"],a:"A. Tổ hợp các alen của cá thể",explain:"Kiểu gen quyết định kiểu hình."},
{q:"Kiểu hình (phenotype) là",options:["A. Tổ hợp gen","B. Biểu hiện của kiểu gen","C. Các alen","D. DNA"],a:"B. Biểu hiện của kiểu gen",explain:"Kiểu hình là tính trạng quan sát được."},
{q:"Thế hệ P là",options:["A. Thế hệ con","B. Thế hệ bố mẹ","C. Thế hệ cháu","D. Thế hệ lai"],a:"B. Thế hệ bố mẹ",explain:"Parental generation."},
{q:"F₁ là viết tắt của",options:["A. First filial generation","B. Final generation","C. First factor","D. Filial factor"],a:"A. First filial generation",explain:"Thế hệ con thứ nhất."},
{q:"Lai phân tích (test cross) là phép lai giữa",options:["A. Hai cá thể trội","B. Hai cá thể lặn","C. Cá thể cần kiểm tra với cá thể lặn","D. Hai cá thể dị hợp"],a:"C. Cá thể cần kiểm tra với cá thể lặn",explain:"Dùng để xác định kiểu gen."},
{q:"Tỉ lệ kiểu hình 3 : 1 xuất hiện trong",options:["A. Lai hai cặp tính trạng","B. Lai phân tích","C. Lai một cặp tính trạng","D. Lai thuận nghịch"],a:"C. Lai một cặp tính trạng",explain:"Quy luật phân li."},
{q:"Quy luật phân li độc lập có tên quốc tế là",options:["A. Law of Segregation","B. Law of Independent Assortment","C. Law of Dominance","D. Law of Linkage"],a:"B. Law of Independent Assortment",explain:"Tên quốc tế chuẩn."},
{q:"Quy luật phân li độc lập được phát hiện khi nghiên cứu",options:["A. Lai một cặp tính trạng","B. Lai hai cặp tính trạng","C. Lai phân tích","D. Lai nghịch"],a:"B. Lai hai cặp tính trạng",explain:"Lai hai cặp tính trạng."},
{q:"Điều kiện nghiệm đúng quy luật phân li độc lập là các gen",options:["A. Liên kết","B. Trên cùng NST","C. Trên các cặp NST khác nhau","D. Trên NST giới tính"],a:"C. Trên các cặp NST khác nhau",explain:"Phân li độc lập."},
{q:"Tỉ lệ kiểu hình 9 : 3 : 3 : 1 xuất hiện ở",options:["A. Lai một cặp tính trạng","B. Lai phân tích","C. Lai hai cặp tính trạng","D. Lai thuận nghịch"],a:"C. Lai hai cặp tính trạng",explain:"Quy luật phân li độc lập."},
{q:"Gen quy định các tính trạng di truyền nằm trên",options:["A. Protein","B. RNA","C. Chromosome","D. Enzyme"],a:"C. Chromosome",explain:"Gen nằm trên NST."},
{q:"Kiểu gen đồng hợp (homozygous) là",options:["A. Hai alen giống nhau","B. Hai alen khác nhau","C. Có alen trội","D. Có alen lặn"],a:"A. Hai alen giống nhau",explain:"AA hoặc aa."},
{q:"Kiểu gen dị hợp (heterozygous) là",options:["A. AA","B. aa","C. Aa","D. aabb"],a:"C. Aa",explain:"Hai alen khác nhau."},
{q:"Tính trạng do một gen quy định gọi là",options:["A. Đa gen","B. Đơn gen","C. Liên kết gen","D. Hoán vị gen"],a:"B. Đơn gen",explain:"One-gene trait."},
{q:"Trong lai một cặp tính trạng, F₁ thường có kiểu gen",options:["A. Đồng hợp","B. Dị hợp","C. Lặn","D. Trội"],a:"B. Dị hợp",explain:"Aa."},
{q:"Trong lai phân tích, tỉ lệ kiểu hình 1 : 1 chứng tỏ cá thể đem lai là",options:["A. Đồng hợp trội","B. Dị hợp","C. Đồng hợp lặn","D. Không xác định"],a:"B. Dị hợp",explain:"Test cross cho tỉ lệ 1:1."},
{q:"Yếu tố quyết định tính trạng là",options:["A. Môi trường","B. Gen","C. Protein","D. NST"],a:"B. Gen",explain:"Gen quy định tính trạng."},
{q:"Quy luật Mendel phản ánh sự phân li của",options:["A. Tính trạng","B. Alen","C. NST","D. Kiểu hình"],a:"B. Alen",explain:"Phân li của alen."},
{q:"Mendel nghiên cứu đối tượng nào?",options:["A. Đậu Hà Lan (Pisum sativum)","B. Lúa","C. Ngô","D. Chuột"],a:"A. Đậu Hà Lan (Pisum sativum)",explain:"Đối tượng thí nghiệm của Mendel."},
/* ===== THÔNG HIỂU (25 câu) ===== */
{q:"Tỉ lệ 3 : 1 ở F₂ phản ánh sự phân li của",options:["A. Tính trạng","B. NST","C. Alen","D. Kiểu gen"],a:"C. Alen",explain:"Alen phân li trong giảm phân."},
{q:"Tại sao alen trội biểu hiện ở thể dị hợp?",options:["A. Do số lượng alen","B. Do tác động của môi trường","C. Do alen trội át alen lặn","D. Do NST giới tính"],a:"C. Do alen trội át alen lặn",explain:"Alen trội chi phối."},
{q:"Trong lai hai cặp tính trạng, số loại giao tử của F₁ là",options:["A. 2","B. 3","C. 4","D. 8"],a:"C. 4",explain:"AaBb → AB, Ab, aB, ab."},
{q:"Cơ sở tế bào học của quy luật phân li là",options:["A. Trao đổi chéo","B. Phân li NST tương đồng","C. Nguyên phân","D. Thụ tinh"],a:"B. Phân li NST tương đồng",explain:"Xảy ra trong giảm phân."},
{q:"Cơ sở tế bào học của quy luật phân li độc lập là",options:["A. Phân li alen","B. Phân li độc lập của NST","C. Trao đổi chéo","D. Đột biến gen"],a:"B. Phân li độc lập của NST",explain:"NST sắp xếp ngẫu nhiên."},
{q:"Lai thuận nghịch cho kết quả giống nhau chứng tỏ tính trạng",options:["A. Di truyền theo dòng mẹ","B. Không di truyền","C. Do gen trong nhân quy định","D. Do gen ngoài nhân"],a:"C. Do gen trong nhân quy định",explain:"Không phụ thuộc giới tính."},
{q:"Kiểu hình phụ thuộc trực tiếp vào",options:["A. Kiểu gen","B. Môi trường","C. Protein","D. NST"],a:"A. Kiểu gen",explain:"Kiểu gen quyết định."},
{q:"Trong phép lai Aa × Aa, tỉ lệ kiểu gen ở F₂ là",options:["A. 3 : 1","B. 1 : 2 : 1","C. 9 : 3 : 3 : 1","D. 1 : 1"],a:"B. 1 : 2 : 1",explain:"AA : Aa : aa."},
{q:"Tại sao Mendel chọn đậu Hà Lan làm vật nghiên cứu?",options:["A. Dễ trồng, nhiều tính trạng tương phản","B. Ít biến dị","C. Sinh sản chậm","D. Khó lai"],a:"A. Dễ trồng, nhiều tính trạng tương phản",explain:"Thuận lợi cho nghiên cứu."},
{q:"Phép lai cho tỉ lệ 9 : 3 : 3 : 1 chứng tỏ các gen",options:["A. Liên kết","B. Hoán vị","C. Phân li độc lập","D. Trên NST giới tính"],a:"C. Phân li độc lập",explain:"Hai cặp gen độc lập."},
{q:"Kiểu gen quyết định khả năng di truyền vì",options:["A. Có DNA","B. Có protein","C. Có tổ hợp alen","D. Có môi trường"],a:"C. Có tổ hợp alen",explain:"Alen quyết định tính trạng."},
{q:"Lai phân tích giúp xác định",options:["A. Kiểu hình","B. Kiểu gen","C. Số NST","D. Số gen"],a:"B. Kiểu gen",explain:"Mục đích của test cross."},
{q:"Nếu F₁ đồng loạt biểu hiện tính trạng trội chứng tỏ P là",options:["A. Đồng hợp","B. Dị hợp","C. Khác kiểu gen","D. Không xác định"],a:"A. Đồng hợp",explain:"AA × aa."},
{q:"Tại sao quy luật Mendel không đúng với mọi trường hợp?",options:["A. Do sai sót thí nghiệm","B. Do gen liên kết","C. Do môi trường","D. Do đột biến"],a:"B. Do gen liên kết",explain:"Không phân li độc lập."},
{q:"Tính trạng trội không phải lúc nào cũng hoàn toàn trội vì",options:["A. Môi trường","B. Trội không hoàn toàn","C. Đột biến","D. Số NST"],a:"B. Trội không hoàn toàn",explain:"Intermediate inheritance."},
{q:"Kiểu hình là kết quả của sự tương tác giữa",options:["A. Kiểu gen và môi trường","B. Gen và NST","C. DNA và RNA","D. Protein và enzyme"],a:"A. Kiểu gen và môi trường",explain:"Phenotype = genotype + environment."},
{q:"Quy luật Mendel phản ánh tính",options:["A. Ngẫu nhiên","B. Ổn định","C. Quy luật","D. Biến đổi"],a:"C. Quy luật",explain:"Di truyền có tính quy luật."},
{q:"Nếu gen nằm trên NST giới tính, phép lai thuận nghịch sẽ",options:["A. Giống nhau","B. Khác nhau","C. Không có kết quả","D. Không lai được"],a:"B. Khác nhau",explain:"Ảnh hưởng giới tính."},
{q:"Tỉ lệ kiểu hình phản ánh",options:["A. Kiểu gen","B. Cách phân li alen","C. Số NST","D. Protein"],a:"B. Cách phân li alen",explain:"Liên quan giảm phân."},
{q:"Sự phân li và tổ hợp alen diễn ra trong",options:["A. Nguyên phân","B. Giảm phân và thụ tinh","C. Phiên mã","D. Dịch mã"],a:"B. Giảm phân và thụ tinh",explain:"Cơ sở của di truyền."},
{q:"Quy luật Mendel là cơ sở cho",options:["A. Sinh học phân tử","B. Di truyền học","C. Sinh thái học","D. Tiến hóa"],a:"B. Di truyền học",explain:"Nền tảng di truyền học."},
{q:"Mendel không phát hiện quy luật liên kết gen vì",options:["A. Sai phương pháp","B. Chọn đối tượng phù hợp","C. Không nghiên cứu","D. Chưa có kính hiển vi"],a:"B. Chọn đối tượng phù hợp",explain:"Gen nằm trên NST khác nhau."},
{q:"Quy luật phân li độc lập chỉ đúng khi số cặp NST là",options:["A. 1","B. 2","C. Nhiều","D. Bất kỳ"],a:"C. Nhiều",explain:"Nhiều cặp NST khác nhau."},
{q:"Ý nghĩa của quy luật Mendel là",options:["A. Giải thích cơ chế di truyền","B. Dự đoán kết quả lai","C. Tăng biến dị","D. Tạo giống mới"],a:"B. Dự đoán kết quả lai",explain:"Ứng dụng trong chọn giống."}];
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

