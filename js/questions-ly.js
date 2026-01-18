// js/questions-ly.js - Vật lý lớp 9 (template)
// This file provides per-topic arrays for Lý in the same structure as questions-hoa.js.
// Currently the topic arrays are empty; populate them with question objects
// of the shape: { q: "...", options: [...], a: "A. ...", explain: "..." }

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
// Chuyên đề 1: NĂNG LƯỢNG CƠ HỌC
const questions_ly_topic1 = [
/* ===== NHẬN BIẾT (25 câu) ===== */
{q:"Cơ năng của vật là",options:["A. Khả năng sinh công","B. Tổng động năng và thế năng","C. Nhiệt năng của vật","D. Công của lực"],a:"B. Tổng động năng và thế năng",explain:"Cơ năng gồm động năng và thế năng."},
{q:"Động năng của vật phụ thuộc vào",options:["A. Khối lượng","B. Vận tốc","C. Khối lượng và vận tốc","D. Độ cao"],a:"C. Khối lượng và vận tốc",explain:"Động năng phụ thuộc m và v."},
{q:"Thế năng trọng trường phụ thuộc vào",options:["A. Khối lượng và vận tốc","B. Độ cao và vận tốc","C. Khối lượng và độ cao","D. Lực"],a:"C. Khối lượng và độ cao",explain:"Wt = mgh."},
{q:"Đơn vị của công cơ học là",options:["A. Oát","B. Jun","C. Ampe","D. Niutơn"],a:"B. Jun",explain:"Đơn vị công là Jun."},
{q:"Đơn vị của công suất là",options:["A. Jun","B. Niutơn","C. Oát","D. Vôn"],a:"C. Oát",explain:"Đơn vị công suất là W."},
{q:"Công suất cho biết",options:["A. Công thực hiện","B. Năng lượng","C. Công trong một đơn vị thời gian","D. Thời gian"],a:"C. Công trong một đơn vị thời gian",explain:"Công suất đặc trưng tốc độ sinh công."},
{q:"Vật có động năng khi",options:["A. Đứng yên","B. Có độ cao","C. Chuyển động","D. Bị biến dạng"],a:"C. Chuyển động",explain:"Vật chuyển động thì có động năng."},
{q:"Vật có thế năng khi",options:["A. Chuyển động","B. Có độ cao","C. Nóng lên","D. Bị ma sát"],a:"B. Có độ cao",explain:"Vật có vị trí so với mốc."},
{q:"Công cơ học phụ thuộc vào",options:["A. Lực và thời gian","B. Lực và quãng đường","C. Khối lượng","D. Vận tốc"],a:"B. Lực và quãng đường",explain:"A = F.s."},
{q:"Cơ năng của vật không phụ thuộc vào",options:["A. Vận tốc","B. Độ cao","C. Khối lượng","D. Màu sắc"],a:"D. Màu sắc",explain:"Màu sắc không ảnh hưởng cơ năng."},
{q:"Khi vật rơi tự do thì",options:["A. Động năng giảm","B. Thế năng tăng","C. Thế năng giảm","D. Cơ năng tăng"],a:"C. Thế năng giảm",explain:"Thế năng chuyển hóa."},
{q:"Công thức tính công là",options:["A. A = F/s","B. A = F.s","C. A = s/F","D. A = F.t"],a:"B. A = F.s",explain:"Công bằng lực nhân quãng đường."},
{q:"Công thức tính công suất là",options:["A. P = A.t","B. P = A/t","C. P = t/A","D. P = F/t"],a:"B. P = A/t",explain:"Công suất bằng công chia thời gian."},
{q:"Động năng được tính bằng",options:["A. mgh","B. F.s","C. 1/2mv²","D. A/t"],a:"C. 1/2mv²",explain:"Công thức động năng."},
{q:"Thế năng trọng trường được tính bằng",options:["A. 1/2mv²","B. F.s","C. mgh","D. A/t"],a:"C. mgh",explain:"Công thức thế năng."},
{q:"Vật có cơ năng khi",options:["A. Có vận tốc","B. Có độ cao","C. Có khả năng sinh công","D. Có khối lượng"],a:"C. Có khả năng sinh công",explain:"Định nghĩa cơ năng."},
{q:"Công suất càng lớn khi",options:["A. Thời gian dài","B. Công nhỏ","C. Công lớn, thời gian ngắn","D. Lực nhỏ"],a:"C. Công lớn, thời gian ngắn",explain:"P = A/t."},
{q:"Một vật đứng yên trên cao có",options:["A. Động năng","B. Thế năng","C. Không năng lượng","D. Nhiệt năng"],a:"B. Thế năng",explain:"Do vị trí."},
{q:"Khi nâng vật lên cao thì",options:["A. Động năng tăng","B. Thế năng tăng","C. Cơ năng giảm","D. Không đổi"],a:"B. Thế năng tăng",explain:"Độ cao tăng."},
{q:"Công cơ học bằng 0 khi",options:["A. Lực lớn","B. Vật không dịch chuyển","C. Quãng đường lớn","D. Thời gian dài"],a:"B. Vật không dịch chuyển",explain:"s = 0."},
{q:"Động năng của vật bằng 0 khi",options:["A. v = 0","B. h = 0","C. m = 0","D. s = 0"],a:"A. v = 0",explain:"Động năng phụ thuộc vận tốc."},
{q:"Thế năng của vật phụ thuộc vào mốc",options:["A. Đúng","B. Sai","C. Không xác định","D. Không liên quan"],a:"A. Đúng",explain:"Mốc thế năng tùy chọn."},
{q:"Cơ năng có đơn vị là",options:["A. Oát","B. Jun","C. Niutơn","D. Ampe"],a:"B. Jun",explain:"Đơn vị năng lượng."},
{q:"Công suất là đại lượng",options:["A. Vô hướng","B. Có hướng","C. Âm","D. Không xác định"],a:"A. Vô hướng",explain:"Công suất không có hướng."},
/* ===== THÔNG HIỂU (15 câu) ===== */
{q:"Vận tốc tăng gấp đôi thì động năng",options:["A. Tăng gấp đôi","B. Tăng gấp ba","C. Tăng gấp bốn","D. Không đổi"],a:"C. Tăng gấp bốn",explain:"Động năng tỉ lệ v²."},
{q:"Khi vật rơi xuống thì",options:["A. Động năng giảm","B. Thế năng tăng","C. Động năng tăng","D. Cơ năng mất"],a:"C. Động năng tăng",explain:"Thế năng chuyển hóa."},
{q:"Vật đứng yên vẫn có cơ năng vì",options:["A. Có vận tốc","B. Có thế năng","C. Có nhiệt","D. Có lực"],a:"B. Có thế năng",explain:"Do vị trí."},
{q:"Công suất phản ánh",options:["A. Công","B. Thời gian","C. Tốc độ sinh công","D. Lực"],a:"C. Tốc độ sinh công",explain:"Đặc trưng nhanh chậm."},
{q:"Cùng công thực hiện, công suất lớn hơn khi",options:["A. Thời gian dài","B. Thời gian ngắn","C. Lực nhỏ","D. Quãng đường lớn"],a:"B. Thời gian ngắn",explain:"P = A/t."},
{q:"Động năng và thế năng đều là",options:["A. Công","B. Lực","C. Cơ năng","D. Công suất"],a:"C. Cơ năng",explain:"Thành phần cơ năng."},
{q:"Khi kéo vật trên mặt phẳng ngang",options:["A. Thế năng tăng","B. Động năng tăng","C. Thế năng không đổi","D. Cơ năng luôn tăng"],a:"C. Thế năng không đổi",explain:"Độ cao không đổi."},
{q:"Cơ năng bảo toàn khi",options:["A. Có ma sát","B. Không ma sát","C. Có lực cản","D. Có nhiệt"],a:"B. Không ma sát",explain:"Không có hao phí."},
{q:"Khi vật chuyển động nhanh dần thì",options:["A. Động năng giảm","B. Động năng tăng","C. Thế năng tăng","D. Không đổi"],a:"B. Động năng tăng",explain:"Vận tốc tăng."},
{q:"Thế năng lớn khi",options:["A. Vật nhẹ","B. Vật ở cao","C. Vật nhanh","D. Vật nóng"],a:"B. Vật ở cao",explain:"Phụ thuộc độ cao."},
{q:"Công suất nhỏ khi",options:["A. Công lớn","B. Thời gian ngắn","C. Thời gian dài","D. Lực lớn"],a:"C. Thời gian dài",explain:"P = A/t."},
{q:"Động năng phụ thuộc bình phương của",options:["A. Khối lượng","B. Vận tốc","C. Độ cao","D. Lực"],a:"B. Vận tốc",explain:"v²."},
{q:"Thế năng phụ thuộc tuyến tính vào",options:["A. Vận tốc","B. Thời gian","C. Độ cao","D. Gia tốc"],a:"C. Độ cao",explain:"Wt = mgh."},
{q:"Công suất cho biết máy làm việc",options:["A. Mạnh hay yếu","B. Nặng hay nhẹ","C. Nhanh hay chậm","D. Lớn hay nhỏ"],a:"C. Nhanh hay chậm",explain:"Tốc độ sinh công."},
{q:"Công cơ học khác 0 khi",options:["A. Vật đứng yên","B. Có lực và dịch chuyển","C. Chỉ có lực","D. Chỉ có chuyển động"],a:"B. Có lực và dịch chuyển",explain:"Cần đủ điều kiện."},
/* ===== VẬN DỤNG (10 câu) ===== */
{q:"Vật 2 kg ở độ cao 5 m (g=10) có thế năng",options:["A. 50 J","B. 100 J","C. 10 J","D. 25 J"],a:"B. 100 J",explain:"mgh."},
{q:"Công 600 J thực hiện trong 10 s. Công suất",options:["A. 6 W","B. 60 W","C. 600 W","D. 10 W"],a:"B. 60 W",explain:"P=A/t."},
{q:"Lực 20 N kéo vật đi 5 m. Công là",options:["A. 25 J","B. 100 J","C. 4 J","D. 10 J"],a:"B. 100 J",explain:"A=F.s."},
{q:"Vật 1 kg có động năng 50 J. Vận tốc gần đúng",options:["A. 5 m/s","B. 10 m/s","C. 7 m/s","D. 3 m/s"],a:"A. 5 m/s",explain:"v≈√(2W/m)."},
{q:"Máy nâng 2000 J trong 20 s. Công suất",options:["A. 100 W","B. 200 W","C. 50 W","D. 400 W"],a:"A. 100 W",explain:"2000/20."},
{q:"Vật 0,5 kg chuyển động 4 m/s có động năng",options:["A. 2 J","B. 4 J","C. 8 J","D. 16 J"],a:"C. 8 J",explain:"½mv²."},
{q:"Thế năng của vật tăng gấp đôi khi",options:["A. h tăng gấp đôi","B. m tăng gấp đôi","C. m hoặc h tăng gấp đôi","D. v tăng"],a:"C. m hoặc h tăng gấp đôi",explain:"Wt=mgh."},
{q:"Công suất 100 W trong 5 s thì công là",options:["A. 20 J","B. 500 J","C. 100 J","D. 50 J"],a:"B. 500 J",explain:"A=P.t."},
{q:"Vật rơi tự do, bỏ qua ma sát. Cơ năng",options:["A. Tăng","B. Giảm","C. Bảo toàn","D. Mất"],a:"C. Bảo toàn",explain:"Không hao phí."},
{q:"Khi vật chạm đất, thế năng chuyển thành",options:["A. Nhiệt năng","B. Động năng","C. Cơ năng","D. Công"],a:"B. Động năng",explain:"Chuyển hóa năng lượng."}
];
// Chuyên đề 2: ÁNH SÁNG
const questions_ly_topic2 = [
/* ===== NHẬN BIẾT (25 câu) ===== */
{q:"Nguồn sáng là vật",options:["A. Nhận ánh sáng","B. Truyền ánh sáng","C. Phát ra ánh sáng","D. Phản xạ ánh sáng"],a:"C. Phát ra ánh sáng",explain:"Nguồn sáng tự phát ra ánh sáng."},
{q:"Vật sáng là vật",options:["A. Phát ra ánh sáng","B. Nhận ánh sáng rồi truyền đi","C. Nhận ánh sáng","D. Nhận và phản xạ ánh sáng"],a:"D. Nhận và phản xạ ánh sáng",explain:"Vật sáng có thể không phải nguồn sáng."},
{q:"Ánh sáng truyền trong không khí theo",options:["A. Đường cong","B. Đường gấp khúc","C. Đường thẳng","D. Đường tròn"],a:"C. Đường thẳng",explain:"Trong môi trường đồng tính."},
{q:"Bóng tối xuất hiện khi",options:["A. Có ánh sáng","B. Ánh sáng bị cản","C. Ánh sáng yếu","D. Không có nguồn sáng"],a:"B. Ánh sáng bị cản",explain:"Vật chắn ánh sáng."},
{q:"Bóng nửa tối hình thành khi",options:["A. Nguồn sáng nhỏ","B. Nguồn sáng lớn","C. Không có vật cản","D. Ánh sáng mạnh"],a:"B. Nguồn sáng lớn",explain:"Nguồn sáng mở rộng."},
{q:"Gương phẳng có tác dụng",options:["A. Hội tụ ánh sáng","B. Phân kì ánh sáng","C. Phản xạ ánh sáng","D. Hấp thụ ánh sáng"],a:"C. Phản xạ ánh sáng",explain:"Theo định luật phản xạ."},
{q:"Ảnh tạo bởi gương phẳng là",options:["A. Ảnh thật","B. Ảnh ảo","C. Ảnh lớn","D. Ảnh nhỏ"],a:"B. Ảnh ảo",explain:"Không hứng được trên màn."},
{q:"Ảnh trong gương phẳng",options:["A. Lớn hơn vật","B. Nhỏ hơn vật","C. Bằng vật","D. Không xác định"],a:"C. Bằng vật",explain:"Kích thước không đổi."},
{q:"Khoảng cách từ ảnh đến gương",options:["A. Lớn hơn vật","B. Nhỏ hơn vật","C. Bằng khoảng cách từ vật","D. Bằng nửa"],a:"C. Bằng khoảng cách từ vật",explain:"Tính chất ảnh gương phẳng."},
{q:"Định luật phản xạ ánh sáng phát biểu rằng",options:["A. Góc tới bằng góc phản xạ","B. Tia tới vuông góc","C. Tia phản xạ mạnh hơn","D. Ánh sáng cong"],a:"A. Góc tới bằng góc phản xạ",explain:"Định luật cơ bản."},
{q:"Tia phản xạ nằm trong",options:["A. Mặt phẳng tới","B. Mặt phẳng song song","C. Không gian","D. Mặt gương"],a:"A. Mặt phẳng tới",explain:"Cùng tia tới và pháp tuyến."},
{q:"Gương cầu lồi là gương có mặt phản xạ",options:["A. Phẳng","B. Lõm","C. Lồi","D. Tròn"],a:"C. Lồi",explain:"Mặt phản xạ phình ra."},
{q:"Ảnh của vật qua gương cầu lồi luôn là",options:["A. Ảnh thật","B. Ảnh ảo","C. Ảnh bằng vật","D. Ảnh lớn"],a:"B. Ảnh ảo",explain:"Không hứng được."},
{q:"Ảnh tạo bởi gương cầu lồi",options:["A. Lớn hơn vật","B. Nhỏ hơn vật","C. Bằng vật","D. Đảo chiều"],a:"B. Nhỏ hơn vật",explain:"Tính chất gương lồi."},
{q:"Gương cầu lồi thường dùng làm",options:["A. Gương trang điểm","B. Gương soi trong nhà","C. Gương chiếu hậu","D. Gương thiên văn"],a:"C. Gương chiếu hậu",explain:"Quan sát được vùng rộng."},
{q:"Gương cầu lõm có khả năng",options:["A. Phân kì ánh sáng","B. Hội tụ ánh sáng","C. Không phản xạ","D. Hấp thụ ánh sáng"],a:"B. Hội tụ ánh sáng",explain:"Khi chùm tia song song."},
{q:"Ảnh qua gương cầu lõm có thể là",options:["A. Chỉ ảnh ảo","B. Chỉ ảnh thật","C. Ảnh thật hoặc ảo","D. Không có ảnh"],a:"C. Ảnh thật hoặc ảo",explain:"Phụ thuộc vị trí vật."},
{q:"Khi vật đặt gần gương cầu lõm",options:["A. Ảnh nhỏ","B. Ảnh thật","C. Ảnh ảo","D. Không ảnh"],a:"C. Ảnh ảo",explain:"Vật trong tiêu cự."},
{q:"Khi vật đặt xa gương cầu lõm",options:["A. Ảnh ảo","B. Ảnh thật","C. Không ảnh","D. Ảnh bằng vật"],a:"B. Ảnh thật",explain:"Vật ngoài tiêu cự."},
{q:"Gương cầu lõm dùng để",options:["A. Chiếu hậu","B. Soi toàn thân","C. Tập trung ánh sáng","D. Quan sát rộng"],a:"C. Tập trung ánh sáng",explain:"Ví dụ bếp năng lượng."},
{q:"Ánh sáng phản xạ là ánh sáng",options:["A. Đi xuyên qua","B. Bị vật hấp thụ","C. Hắt lại khi gặp vật","D. Bị bẻ cong"],a:"C. Hắt lại khi gặp vật",explain:"Phản xạ."},
{q:"Ánh sáng không truyền được trong",options:["A. Không khí","B. Nước","C. Thủy tinh","D. Chân không"],a:"D. Chân không",explain:"❌ Sai – ánh sáng truyền được trong chân không."},
{q:"Mắt nhìn thấy vật khi",options:["A. Có ánh sáng từ vật truyền vào mắt","B. Vật phát sáng","C. Có gương","D. Có bóng tối"],a:"A. Có ánh sáng từ vật truyền vào mắt",explain:"Điều kiện nhìn thấy."},
{q:"Bóng của vật trên màn là",options:["A. Ảnh","B. Vùng không có ánh sáng","C. Nguồn sáng","D. Vật sáng"],a:"B. Vùng không có ánh sáng",explain:"Bóng tối."},
{q:"Bóng nửa tối là vùng",options:["A. Không nhận ánh sáng","B. Nhận toàn bộ ánh sáng","C. Nhận một phần ánh sáng","D. Không xác định"],a:"C. Nhận một phần ánh sáng",explain:"Nguồn sáng mở rộng."},
/* ===== THÔNG HIỂU (15 câu) ===== */
{q:"Ánh sáng truyền thẳng chứng tỏ",options:["A. Có vận tốc","B. Có năng lượng","C. Không uốn cong trong môi trường đồng tính","D. Phản xạ"],a:"C. Không uốn cong trong môi trường đồng tính",explain:"Tính chất cơ bản."},
{q:"Gương phẳng cho ảnh ảo vì",options:["A. Không có ánh sáng","B. Ảnh không hứng được","C. Ảnh nhỏ","D. Ảnh mờ"],a:"B. Ảnh không hứng được",explain:"Đặc điểm ảnh ảo."},
{q:"Gương cầu lồi cho ảnh nhỏ vì",options:["A. Hội tụ","B. Phân kì ánh sáng","C. Không phản xạ","D. Hấp thụ"],a:"B. Phân kì ánh sáng",explain:"Chùm tia loe ra."},
{q:"Dùng gương cầu lồi giúp",options:["A. Nhìn rõ hơn","B. Nhìn ảnh lớn","C. Quan sát vùng rộng","D. Tập trung ánh sáng"],a:"C. Quan sát vùng rộng",explain:"Ứng dụng giao thông."},
{q:"Gương cầu lõm có thể tạo ảnh thật vì",options:["A. Phân kì","B. Hội tụ tia phản xạ","C. Không phản xạ","D. Bẻ cong ánh sáng"],a:"B. Hội tụ tia phản xạ",explain:"Giao nhau tạo ảnh thật."},
{q:"Ảnh thật khác ảnh ảo ở điểm",options:["A. Màu sắc","B. Kích thước","C. Hứng được trên màn","D. Khoảng cách"],a:"C. Hứng được trên màn",explain:"Đặc trưng ảnh thật."},
{q:"Khi nguồn sáng càng lớn thì",options:["A. Bóng tối càng rõ","B. Bóng nửa tối càng rõ","C. Không có bóng","D. Ánh sáng yếu"],a:"B. Bóng nửa tối càng rõ",explain:"Nguồn mở rộng."},
{q:"Muốn có bóng tối rõ nét cần",options:["A. Nguồn sáng lớn","B. Nguồn sáng nhỏ","C. Không có vật","D. Màn xa"],a:"B. Nguồn sáng nhỏ",explain:"Gần điểm."},
{q:"Ánh sáng phản xạ tuân theo",options:["A. Định luật hấp thụ","B. Định luật truyền thẳng","C. Định luật phản xạ","D. Định luật khúc xạ"],a:"C. Định luật phản xạ",explain:"Góc tới = góc phản xạ."},
{q:"Ảnh qua gương phẳng bị đảo",options:["A. Trên dưới","B. Trước sau","C. Trái phải","D. Không đảo"],a:"C. Trái phải",explain:"Đối xứng qua gương."},
{q:"Gương cầu lõm dùng trong đèn pin vì",options:["A. Phân kì","B. Hội tụ ánh sáng","C. Tạo ảnh nhỏ","D. Tạo ảnh ảo"],a:"B. Hội tụ ánh sáng",explain:"Chiếu xa."},
{q:"Mắt cận cần gương",options:["A. Phẳng","B. Cầu lồi","C. Cầu lõm","D. Không dùng"],a:"C. Cầu lõm",explain:"Hội tụ."},
{q:"Gương cầu lồi không tạo ảnh thật vì",options:["A. Không phản xạ","B. Không hội tụ","C. Phân kì","D. Hấp thụ"],a:"C. Phân kì",explain:"Không có giao điểm."},
{q:"Vật sáng khác nguồn sáng ở chỗ",options:["A. Không phát sáng","B. Phát sáng","C. Phản xạ ánh sáng","D. Không nhìn thấy"],a:"C. Phản xạ ánh sáng",explain:"Vật sáng không tự phát sáng."},
{q:"Bóng nửa tối xuất hiện khi",options:["A. Nguồn sáng nhỏ","B. Không có vật cản","C. Nguồn sáng lớn","D. Không có màn"],a:"C. Nguồn sáng lớn",explain:"Nguồn mở rộng."},
/* ===== VẬN DỤNG (10 câu) ===== */
{q:"Muốn quan sát phía sau xe máy nên dùng",options:["A. Gương phẳng","B. Gương cầu lõm","C. Gương cầu lồi","D. Thấu kính"],a:"C. Gương cầu lồi",explain:"Quan sát rộng."},
{q:"Vật đặt trước gương cầu lõm trong tiêu cự cho ảnh",options:["A. Thật, nhỏ","B. Thật, lớn","C. Ảo, lớn","D. Ảo, nhỏ"],a:"C. Ảo, lớn",explain:"Đặc điểm gương lõm."},
{q:"Để tạo bóng tối rõ nét cần",options:["A. Nguồn sáng lớn","B. Nguồn sáng nhỏ","C. Nhiều nguồn","D. Không màn"],a:"B. Nguồn sáng nhỏ",explain:"Gần điểm."},
{q:"Đèn pin dùng gương cầu lõm vì",options:["A. Tạo ảnh ảo","B. Tập trung ánh sáng","C. Phân kì","D. Hấp thụ"],a:"B. Tập trung ánh sáng",explain:"Chiếu xa."},
{q:"Muốn có ảnh bằng vật nên dùng",options:["A. Gương cầu lồi","B. Gương cầu lõm","C. Gương phẳng","D. Không gương"],a:"C. Gương phẳng",explain:"Tính chất đặc trưng."},
{q:"Ảnh trong gương phẳng cách gương 20 cm thì vật cách gương",options:["A. 10 cm","B. 20 cm","C. 40 cm","D. 5 cm"],a:"B. 20 cm",explain:"Khoảng cách bằng nhau."},
{q:"Gương nào không tạo ảnh thật",options:["A. Gương cầu lõm","B. Gương phẳng","C. Gương hội tụ","D. Gương lõm"],a:"B. Gương phẳng",explain:"Chỉ ảnh ảo."},
{q:"Quan sát vật lớn ở khoảng cách gần nên dùng",options:["A. Gương phẳng","B. Gương cầu lồi","C. Gương cầu lõm","D. Không dùng gương"],a:"C. Gương cầu lõm",explain:"Ảnh ảo, lớn."},
{q:"Vùng chỉ nhận một phần ánh sáng gọi là",options:["A. Bóng tối","B. Bóng nửa tối","C. Ảnh","D. Vật sáng"],a:"B. Bóng nửa tối",explain:"Định nghĩa."},
{q:"Ánh sáng từ vật tới mắt giúp ta",options:["A. Nghe","B. Ngửi","C. Nhìn thấy","D. Sờ"],a:"C. Nhìn thấy",explain:"Điều kiện thị giác."}
];

// Chuyên đề 3: ĐIỆN HỌC
const questions_ly_topic3 = [
/* ===== NHẬN BIẾT (25 câu) ===== */
{q:"Dòng điện là",options:["A. Dòng các electron tự do","B. Dòng các ion","C. Dòng các điện tích chuyển dời có hướng","D. Dòng các nguyên tử"],a:"C. Dòng các điện tích chuyển dời có hướng",explain:"Định nghĩa dòng điện."},
{q:"Nguồn điện có tác dụng",options:["A. Tạo ra dòng điện","B. Duy trì dòng điện","C. Tạo nhiệt","D. Tạo ánh sáng"],a:"B. Duy trì dòng điện",explain:"Nguồn điện duy trì hiệu điện thế."},
{q:"Đơn vị cường độ dòng điện là",options:["A. Vôn","B. Oát","C. Ampe","D. Jun"],a:"C. Ampe",explain:"Đơn vị I là ampe (A)."},
{q:"Dụng cụ đo cường độ dòng điện là",options:["A. Vôn kế","B. Ampe kế","C. Ôm kế","D. Oát kế"],a:"B. Ampe kế",explain:"Ampe kế đo cường độ."},
{q:"Ampe kế được mắc",options:["A. Song song","B. Nối tiếp","C. Chéo mạch","D. Độc lập"],a:"B. Nối tiếp",explain:"Đo dòng qua mạch."},
{q:"Đơn vị hiệu điện thế là",options:["A. Ampe","B. Oát","C. Vôn","D. Jun"],a:"C. Vôn",explain:"Đơn vị U là V."},
{q:"Dụng cụ đo hiệu điện thế là",options:["A. Ampe kế","B. Vôn kế","C. Ôm kế","D. Công tơ"],a:"B. Vôn kế",explain:"Vôn kế đo U."},
{q:"Vôn kế được mắc",options:["A. Nối tiếp","B. Song song","C. Nối đất","D. Chéo mạch"],a:"B. Song song",explain:"Đo U giữa hai điểm."},
{q:"Điện trở đặc trưng cho",options:["A. Khả năng dẫn điện","B. Khả năng cản trở dòng điện","C. Khả năng sinh nhiệt","D. Khả năng phát sáng"],a:"B. Khả năng cản trở dòng điện",explain:"Định nghĩa điện trở."},
{q:"Đơn vị điện trở là",options:["A. Vôn","B. Ampe","C. Ôm","D. Oát"],a:"C. Ôm",explain:"Đơn vị R là Ω."},
{q:"Kí hiệu điện trở là",options:["A. U","B. I","C. R","D. P"],a:"C. R",explain:"R là điện trở."},
{q:"Định luật Ôm cho đoạn mạch phát biểu rằng",options:["A. I tỉ lệ thuận với U","B. I tỉ lệ nghịch với R","C. I = U/R","D. Cả A, B, C"],a:"D. Cả A, B, C",explain:"Biểu thức đầy đủ định luật Ôm."},
{q:"Công suất điện cho biết",options:["A. Điện năng","B. Mức tiêu thụ điện","C. Điện năng tiêu thụ trong một đơn vị thời gian","D. Thời gian dùng điện"],a:"C. Điện năng tiêu thụ trong một đơn vị thời gian",explain:"Định nghĩa công suất."},
{q:"Đơn vị công suất điện là",options:["A. Jun","B. Oát","C. Vôn","D. Ampe"],a:"B. Oát",explain:"Đơn vị P là W."},
{q:"Công thức tính công suất điện là",options:["A. P = U/I","B. P = U.I","C. P = R.I","D. P = U.R"],a:"B. P = U.I",explain:"Công thức cơ bản."},
{q:"Điện năng tiêu thụ được đo bằng",options:["A. Ampe kế","B. Vôn kế","C. Công tơ điện","D. Ôm kế"],a:"C. Công tơ điện",explain:"Đo điện năng."},
{q:"Đơn vị điện năng thường dùng là",options:["A. Jun","B. Oát","C. kWh","D. Vôn"],a:"C. kWh",explain:"Đơn vị thực tế."},
{q:"Công thức tính điện năng là",options:["A. A = P.t","B. A = U/I","C. A = I/R","D. A = R.t"],a:"A. A = P.t",explain:"Điện năng tiêu thụ."},
{q:"Dây dẫn càng dài thì điện trở",options:["A. Càng nhỏ","B. Không đổi","C. Càng lớn","D. Bằng 0"],a:"C. Càng lớn",explain:"R tỉ lệ thuận chiều dài."},
{q:"Dây dẫn càng to thì điện trở",options:["A. Càng lớn","B. Không đổi","C. Càng nhỏ","D. Bằng 0"],a:"C. Càng nhỏ",explain:"Tiết diện tăng → R giảm."},
{q:"Biến trở là dụng cụ dùng để",options:["A. Đo điện trở","B. Điều chỉnh điện trở","C. Đo dòng điện","D. Tạo dòng điện"],a:"B. Điều chỉnh điện trở",explain:"Thay đổi R trong mạch."},
{q:"Khi mắc nối tiếp, cường độ dòng điện",options:["A. Thay đổi","B. Bằng nhau","C. Lớn nhất","D. Nhỏ nhất"],a:"B. Bằng nhau",explain:"I như nhau mọi đoạn."},
{q:"Khi mắc song song, hiệu điện thế",options:["A. Khác nhau","B. Bằng nhau","C. Bằng 0","D. Không xác định"],a:"B. Bằng nhau",explain:"U các nhánh bằng nhau."},
{q:"Điện trở tương đương mắc nối tiếp",options:["A. Nhỏ hơn từng R","B. Bằng từng R","C. Lớn hơn từng R","D. Bằng 0"],a:"C. Lớn hơn từng R",explain:"Rtd = R1 + R2."},
{q:"Điện trở tương đương mắc song song",options:["A. Lớn hơn từng R","B. Nhỏ hơn từng R","C. Bằng từng R","D. Bằng 0"],a:"B. Nhỏ hơn từng R",explain:"Rtd giảm."},
/* ===== THÔNG HIỂU (15 câu) ===== */
{q:"Dòng điện chỉ chạy khi mạch",options:["A. Hở","B. Kín","C. Có pin","D. Có bóng đèn"],a:"B. Kín",explain:"Mạch kín mới có dòng."},
{q:"Cường độ dòng điện cho biết",options:["A. Mạnh yếu dòng điện","B. Nhiệt lượng","C. Điện năng","D. Hiệu điện thế"],a:"A. Mạnh yếu dòng điện",explain:"Ý nghĩa I."},
{q:"Điện trở phụ thuộc vào",options:["A. Chiều dài, tiết diện, vật liệu","B. Dòng điện","C. Hiệu điện thế","D. Công suất"],a:"A. Chiều dài, tiết diện, vật liệu",explain:"Yếu tố cấu tạo."},
{q:"Biến trở hoạt động dựa trên",options:["A. Thay đổi chiều dài dây dẫn","B. Thay đổi vật liệu","C. Thay đổi nguồn","D. Thay đổi nhiệt độ"],a:"A. Thay đổi chiều dài dây dẫn",explain:"R ∼ l."},
{q:"Tăng hiệu điện thế thì cường độ dòng điện",options:["A. Giảm","B. Không đổi","C. Tăng","D. Bằng 0"],a:"C. Tăng",explain:"Theo định luật Ôm."},
{q:"Tăng điện trở thì cường độ dòng điện",options:["A. Tăng","B. Giảm","C. Không đổi","D. Bằng 0"],a:"B. Giảm",explain:"I = U/R."},
{q:"Công suất điện lớn nghĩa là",options:["A. Tiêu thụ ít điện","B. Tiêu thụ nhiều điện trong thời gian ngắn","C. Dùng lâu","D. An toàn"],a:"B. Tiêu thụ nhiều điện trong thời gian ngắn",explain:"P lớn → tốn điện."},
{q:"Thiết bị có công suất lớn thường",options:["A. Dùng ít điện","B. Nóng nhanh","C. Không sinh nhiệt","D. An toàn hơn"],a:"B. Nóng nhanh",explain:"Sinh nhiệt nhiều."},
{q:"Điện năng tiêu thụ phụ thuộc vào",options:["A. U","B. I","C. t","D. Cả A, B, C"],a:"D. Cả A, B, C",explain:"A = UIt."},
{q:"Công tơ điện đo",options:["A. Công suất","B. Điện năng","C. Dòng điện","D. Hiệu điện thế"],a:"B. Điện năng",explain:"kWh."},
{q:"Mắc song song giúp các thiết bị",options:["A. Phụ thuộc nhau","B. Hoạt động độc lập","C. Dễ hỏng","D. Tăng R"],a:"B. Hoạt động độc lập",explain:"Ứng dụng thực tế."},
{q:"Khi bóng đèn ghi 220V–100W nghĩa là",options:["A. Luôn sáng 100W","B. Dùng đúng U thì P=100W","C. Không dùng được","D. Dùng điện yếu"],a:"B. Dùng đúng U thì P=100W",explain:"Thông số định mức."},
{q:"Điện trở lớn làm mạch",options:["A. Tăng dòng","B. Giảm dòng","C. Không đổi","D. Cháy"],a:"B. Giảm dòng",explain:"Cản trở mạnh."},
{q:"Muốn giảm điện năng tiêu thụ cần",options:["A. Tăng thời gian","B. Tăng công suất","C. Giảm thời gian sử dụng","D. Tăng U"],a:"C. Giảm thời gian sử dụng",explain:"A = P.t."},
{q:"Cầu chì có tác dụng",options:["A. Tăng dòng","B. Bảo vệ mạch","C. Giảm điện trở","D. Tạo điện"],a:"B. Bảo vệ mạch",explain:"Ngắt khi quá tải."},
/* ===== VẬN DỤNG (10 câu) ===== */
{q:"Một bóng đèn 220V–100W hoạt động đúng định mức có cường độ dòng điện là",options:["A. 0,22 A","B. 0,45 A","C. 1 A","D. 2,2 A"],a:"B. 0,45 A",explain:"I = P/U = 100/220."},
{q:"Điện trở của bóng đèn trên là",options:["A. 220 Ω","B. 484 Ω","C. 100 Ω","D. 50 Ω"],a:"B. 484 Ω",explain:"R = U²/P."},
{q:"Một thiết bị dùng công suất 1000 W trong 2 giờ tiêu thụ điện năng là",options:["A. 1 kWh","B. 2 kWh","C. 0,5 kWh","D. 2000 kWh"],a:"B. 2 kWh",explain:"A = P.t."},
{q:"Dòng điện qua điện trở 10 Ω khi U = 5 V là",options:["A. 0,2 A","B. 0,5 A","C. 1 A","D. 2 A"],a:"A. 0,2 A",explain:"I = U/R."},
{q:"Hai điện trở 10 Ω mắc nối tiếp có Rtd là",options:["A. 5 Ω","B. 10 Ω","C. 20 Ω","D. 0 Ω"],a:"C. 20 Ω",explain:"Cộng điện trở."},
{q:"Hai điện trở 10 Ω mắc song song có Rtd là",options:["A. 5 Ω","B. 10 Ω","C. 20 Ω","D. 0 Ω"],a:"A. 5 Ω",explain:"Rtd = R/2."},
{q:"Một bàn là 1000 W dùng 30 phút tiêu thụ điện năng là",options:["A. 0,3 kWh","B. 0,5 kWh","C. 1 kWh","D. 30 kWh"],a:"A. 0,3 kWh",explain:"0,5 h × 1 kW."},
{q:"Muốn dòng điện giảm một nửa cần",options:["A. Giảm U một nửa","B. Tăng R gấp đôi","C. Cả A và B","D. Không làm được"],a:"C. Cả A và B",explain:"Theo I = U/R."},
{q:"Thiết bị công suất 2000 W dùng 1 giờ hết tiền điện (2000 đ/kWh) là",options:["A. 2000 đ","B. 3000 đ","C. 4000 đ","D. 1000 đ"],a:"C. 4000 đ",explain:"2 kWh × 2000 đ."},
{q:"Dòng điện qua mạch tăng khi",options:["A. Tăng R","B. Giảm U","C. Giảm R","D. Tăng thời gian"],a:"C. Giảm R",explain:"I tỉ lệ nghịch R."}
];
// Chuyên đề 4: ĐIỆN TỪ
const questions_ly_topic4 = [
/* ===== NHẬN BIẾT (25 câu) ===== */
{q:"Nam châm có bao nhiêu cực?",options:["A. 1","B. 2","C. 3","D. 4"],a:"B. 2",explain:"Nam châm có cực Bắc và cực Nam."},
{q:"Các cực cùng tên của nam châm thì",options:["A. Hút nhau","B. Đẩy nhau","C. Không tác dụng","D. Hòa vào nhau"],a:"B. Đẩy nhau",explain:"Cùng tên thì đẩy."},
{q:"Các cực khác tên của nam châm thì",options:["A. Đẩy nhau","B. Không tác dụng","C. Hút nhau","D. Mất từ tính"],a:"C. Hút nhau",explain:"Khác tên thì hút."},
{q:"Vùng xung quanh nam châm gọi là",options:["A. Điện trường","B. Trọng trường","C. Từ trường","D. Ánh sáng"],a:"C. Từ trường",explain:"Nam châm tạo từ trường."},
{q:"Từ trường là môi trường tồn tại xung quanh",options:["A. Vật nhiễm điện","B. Nam châm và dòng điện","C. Vật sáng","D. Nguồn nhiệt"],a:"B. Nam châm và dòng điện",explain:"Điện từ."},
{q:"Kim nam châm tự do đứng yên thì",options:["A. Vuông góc Bắc–Nam","B. Song song Đông–Tây","C. Chỉ hướng Bắc–Nam","D. Chỉ hướng bất kỳ"],a:"C. Chỉ hướng Bắc–Nam",explain:"Theo từ trường Trái Đất."},
{q:"La bàn là dụng cụ dùng để",options:["A. Đo điện","B. Xác định phương hướng","C. Đo lực","D. Đo nhiệt"],a:"B. Xác định phương hướng",explain:"Dựa vào từ trường."},
{q:"Dòng điện chạy qua dây dẫn tạo ra",options:["A. Ánh sáng","B. Từ trường","C. Nhiệt năng","D. Điện tích"],a:"B. Từ trường",explain:"Hiện tượng điện từ."},
{q:"Tác dụng từ của dòng điện được phát hiện bởi",options:["A. Bóng đèn","B. Kim nam châm","C. Nhiệt kế","D. Vôn kế"],a:"B. Kim nam châm",explain:"Kim lệch khi có dòng điện."},
{q:"Cuộn dây dẫn có dòng điện chạy qua gọi là",options:["A. Nam châm vĩnh cửu","B. Nam châm điện","C. Kim nam châm","D. Dây dẫn"],a:"B. Nam châm điện",explain:"Tạo từ trường khi có dòng."},
{q:"Nam châm điện chỉ hoạt động khi",options:["A. Có lõi thép","B. Có dòng điện","C. Có kim nam châm","D. Có pin"],a:"B. Có dòng điện",explain:"Ngắt điện thì mất từ."},
{q:"Lõi sắt non trong nam châm điện có tác dụng",options:["A. Giảm từ tính","B. Tăng từ tính","C. Không ảnh hưởng","D. Tạo nhiệt"],a:"B. Tăng từ tính",explain:"Sắt non dễ nhiễm từ."},
{q:"Dòng điện càng lớn thì từ trường",options:["A. Càng yếu","B. Không đổi","C. Càng mạnh","D. Mất đi"],a:"C. Càng mạnh",explain:"Tỉ lệ thuận."},
{q:"Số vòng dây của cuộn dây tăng thì từ trường",options:["A. Giảm","B. Không đổi","C. Tăng","D. Mất"],a:"C. Tăng",explain:"Nhiều vòng → mạnh hơn."},
{q:"Nam châm điện có thể dùng để",options:["A. Kéo sắt thép","B. Đo nhiệt","C. Chiếu sáng","D. Truyền âm"],a:"A. Kéo sắt thép",explain:"Ứng dụng thực tế."},
{q:"Vật liệu làm lõi nam châm điện thường là",options:["A. Nhôm","B. Đồng","C. Sắt non","D. Thép cứng"],a:"C. Sắt non",explain:"Dễ nhiễm từ."},
{q:"Nam châm vĩnh cửu là nam châm",options:["A. Chỉ có khi có dòng điện","B. Có từ tính lâu dài","C. Dễ mất từ","D. Không hút sắt"],a:"B. Có từ tính lâu dài",explain:"Từ tính bền."},
{q:"Tác dụng từ của dòng điện không phụ thuộc vào",options:["A. Cường độ dòng điện","B. Khoảng cách","C. Chiều dòng điện","D. Màu dây dẫn"],a:"D. Màu dây dẫn",explain:"Màu không ảnh hưởng."},
{q:"Đổi chiều dòng điện thì",options:["A. Từ trường không đổi","B. Từ trường đổi chiều","C. Mất từ trường","D. Tăng nhiệt"],a:"B. Từ trường đổi chiều",explain:"Chiều từ phụ thuộc chiều dòng."},
{q:"Dây dẫn thẳng có dòng điện chạy qua tạo từ trường",options:["A. Thẳng","B. Tròn","C. Hình elip","D. Không có"],a:"B. Tròn",explain:"Đường sức từ là các vòng tròn."},
{q:"Đường sức từ có chiều",options:["A. Từ Nam sang Bắc","B. Từ Bắc sang Nam","C. Bất kỳ","D. Không xác định"],a:"B. Từ Bắc sang Nam",explain:"Ngoài nam châm."},
{q:"Đường sức từ là những đường",options:["A. Cắt nhau","B. Song song","C. Không cắt nhau","D. Gãy khúc"],a:"C. Không cắt nhau",explain:"Tính chất cơ bản."},
{q:"Nơi từ trường mạnh nhất là nơi",options:["A. Đường sức thưa","B. Đường sức dày","C. Không có đường","D. Xa nam châm"],a:"B. Đường sức dày",explain:"Mật độ đường sức."},
{q:"Nam châm điện khác nam châm vĩnh cửu ở chỗ",options:["A. Có cực","B. Có từ trường","C. Có thể điều chỉnh từ tính","D. Hút sắt"],a:"C. Có thể điều chỉnh từ tính",explain:"Bằng dòng điện."},
{q:"Từ trường tồn tại xung quanh",options:["A. Vật đứng yên","B. Nam châm","C. Dây dẫn không dòng","D. Bóng đèn"],a:"B. Nam châm",explain:"Định nghĩa."},
/* ===== THÔNG HIỂU (15 câu) ===== */
{q:"Tăng số vòng dây cuộn nam châm điện làm",options:["A. Giảm từ trường","B. Tăng từ trường","C. Mất từ trường","D. Không đổi"],a:"B. Tăng từ trường",explain:"Từ trường phụ thuộc số vòng."},
{q:"Sắt non được dùng làm lõi vì",options:["A. Cứng","B. Dẫn điện","C. Dễ nhiễm từ và mất từ nhanh","D. Nhẹ"],a:"C. Dễ nhiễm từ và mất từ nhanh",explain:"Phù hợp nam châm điện."},
{q:"Nam châm điện được dùng trong cần cẩu vì",options:["A. Nhẹ","B. Có thể bật tắt","C. Rẻ","D. Không nóng"],a:"B. Có thể bật tắt",explain:"Điều khiển bằng dòng điện."},
{q:"Khi ngắt dòng điện thì nam châm điện",options:["A. Mạnh hơn","B. Không đổi","C. Mất từ tính","D. Đổi cực"],a:"C. Mất từ tính",explain:"Không còn dòng điện."},
{q:"Kim nam châm đặt gần dây dẫn có dòng điện sẽ",options:["A. Không đổi","B. Lệch hướng","C. Quay tròn","D. Rơi xuống"],a:"B. Lệch hướng",explain:"Tác dụng từ."},
{q:"Đổi chiều dòng điện thì kim nam châm",options:["A. Không đổi","B. Lệch ngược","C. Dừng lại","D. Mất từ"],a:"B. Lệch ngược",explain:"Từ trường đổi chiều."},
{q:"Nam châm vĩnh cửu thường làm bằng",options:["A. Sắt non","B. Thép","C. Nhôm","D. Đồng"],a:"B. Thép",explain:"Giữ từ tính lâu."},
{q:"Từ trường Trái Đất có tác dụng",options:["A. Gây mưa","B. Giữ khí quyển","C. Định hướng la bàn","D. Phát sáng"],a:"C. Định hướng la bàn",explain:"Bắc–Nam."},
{q:"Dòng điện không tạo từ trường khi",options:["A. Dòng yếu","B. Dòng mạnh","C. Không có dòng","D. Có pin"],a:"C. Không có dòng",explain:"Điều kiện bắt buộc."},
{q:"Khoảng cách càng xa dây dẫn thì từ trường",options:["A. Càng mạnh","B. Không đổi","C. Càng yếu","D. Mất ngay"],a:"C. Càng yếu",explain:"Giảm theo khoảng cách."},
{q:"Đường sức từ giúp ta",options:["A. Nhìn thấy từ trường","B. Đo dòng điện","C. Đo điện trở","D. Đo nhiệt"],a:"A. Nhìn thấy từ trường",explain:"Biểu diễn trực quan."},
{q:"Nam châm điện khác nam châm vĩnh cửu vì",options:["A. Có hai cực","B. Có từ trường","C. Phụ thuộc dòng điện","D. Hút sắt"],a:"C. Phụ thuộc dòng điện",explain:"Có thể điều chỉnh."},
{q:"Từ trường mạnh hay yếu phụ thuộc",options:["A. Màu dây","B. Dòng điện","C. Thời gian","D. Vị trí người quan sát"],a:"B. Dòng điện",explain:"Yếu tố chính."},
{q:"Nam châm điện an toàn hơn vì",options:["A. Nhẹ","B. Không hút","C. Có thể tắt","D. Không nóng"],a:"C. Có thể tắt",explain:"Ngắt dòng điện."},
{q:"Ứng dụng không dùng nam châm điện là",options:["A. Cần cẩu","B. Chuông điện","C. La bàn","D. Rơle"],a:"C. La bàn",explain:"La bàn dùng nam châm vĩnh cửu."},
/* ===== VẬN DỤNG (10 câu) ===== */
{q:"Muốn nam châm điện mạnh hơn cần",options:["A. Giảm số vòng dây","B. Giảm dòng điện","C. Tăng số vòng dây","D. Thay lõi nhôm"],a:"C. Tăng số vòng dây",explain:"Tăng từ trường."},
{q:"Muốn giảm lực hút của nam châm điện thì",options:["A. Tăng dòng","B. Tăng vòng","C. Giảm dòng","D. Dùng sắt non"],a:"C. Giảm dòng",explain:"Từ trường yếu đi."},
{q:"Dây dẫn không có dòng điện thì kim nam châm",options:["A. Lệch","B. Quay","C. Không đổi","D. Rơi"],a:"C. Không đổi",explain:"Không có từ trường."},
{q:"Ứng dụng cần bật tắt lực hút nhanh nên dùng",options:["A. Nam châm vĩnh cửu","B. Nam châm điện","C. La bàn","D. Thép"],a:"B. Nam châm điện",explain:"Điều khiển bằng dòng."},
{q:"Muốn đổi cực nam châm điện cần",options:["A. Đổi lõi","B. Đổi số vòng","C. Đổi chiều dòng điện","D. Đổi dây"],a:"C. Đổi chiều dòng điện",explain:"Chiều từ phụ thuộc dòng."},
{q:"Dây dẫn càng gần nam châm thì từ trường",options:["A. Yếu","B. Không đổi","C. Mạnh","D. Mất"],a:"C. Mạnh",explain:"Khoảng cách nhỏ."},
{q:"La bàn đặt gần dây có dòng điện mạnh sẽ",options:["A. Không đổi","B. Lệch nhiều","C. Mất từ","D. Gãy"],a:"B. Lệch nhiều",explain:"Từ trường mạnh."},
{q:"Muốn từ trường nam châm điện giảm nhanh khi tắt cần dùng",options:["A. Thép","B. Sắt non","C. Đồng","D. Nhôm"],a:"B. Sắt non",explain:"Mất từ nhanh."},
{q:"Thiết bị nào sau dùng nam châm điện?",options:["A. Cần cẩu","B. La bàn","C. Kim chỉ","D. Gương"],a:"A. Cần cẩu",explain:"Kéo kim loại."},
{q:"Nam châm điện không dùng được khi",options:["A. Có điện","B. Có lõi sắt","C. Không có dòng điện","D. Có cuộn dây"],a:"C. Không có dòng điện",explain:"Không tạo từ trường."},
];
// Chuyên đề 5: NĂNG LƯỢNG VỚI CUỘC SỐNG
const questions_ly_topic5 = [
/* ===== NHẬN BIẾT (25 câu) ===== */
{q:"Năng lượng là",options:["A. Khả năng sinh công","B. Khả năng phát sáng","C. Khả năng tỏa nhiệt","D. Khả năng chuyển động"],a:"A. Khả năng sinh công",explain:"Định nghĩa chung của năng lượng."},
{q:"Các dạng năng lượng không bao gồm",options:["A. Cơ năng","B. Điện năng","C. Nhiệt năng","D. Khối lượng"],a:"D. Khối lượng",explain:"Khối lượng không phải năng lượng."},
{q:"Nguồn năng lượng truyền thống là",options:["A. Gió","B. Mặt trời","C. Than đá","D. Thủy triều"],a:"C. Than đá",explain:"Than đá là năng lượng hóa thạch."},
{q:"Nguồn năng lượng tái tạo là",options:["A. Than","B. Dầu mỏ","C. Khí đốt","D. Gió"],a:"D. Gió",explain:"Gió có thể tái tạo."},
{q:"Năng lượng mặt trời thuộc loại",options:["A. Không tái tạo","B. Tái tạo","C. Hóa thạch","D. Hạt nhân"],a:"B. Tái tạo",explain:"Nguồn năng lượng sạch."},
{q:"Nhiệt năng là năng lượng của",options:["A. Chuyển động cơ học","B. Chuyển động nhiệt của phân tử","C. Dòng điện","D. Ánh sáng"],a:"B. Chuyển động nhiệt của phân tử",explain:"Do chuyển động hỗn loạn."},
{q:"Thiết bị biến đổi điện năng thành nhiệt năng là",options:["A. Quạt điện","B. Bóng đèn LED","C. Bàn là điện","D. Máy phát điện"],a:"C. Bàn là điện",explain:"Chủ yếu tạo nhiệt."},
{q:"Quạt điện biến đổi điện năng thành",options:["A. Nhiệt năng","B. Hóa năng","C. Cơ năng","D. Quang năng"],a:"C. Cơ năng",explain:"Làm quay cánh quạt."},
{q:"Bóng đèn biến đổi điện năng thành",options:["A. Cơ năng","B. Quang năng","C. Hóa năng","D. Thế năng"],a:"B. Quang năng",explain:"Phát sáng."},
{q:"Máy phát điện biến đổi",options:["A. Điện năng thành cơ năng","B. Cơ năng thành điện năng","C. Nhiệt năng thành điện năng","D. Hóa năng thành cơ năng"],a:"B. Cơ năng thành điện năng",explain:"Nguyên lí phát điện."},
{q:"Nhiên liệu hóa thạch gồm",options:["A. Than, dầu mỏ, khí đốt","B. Gió, nước","C. Mặt trời","D. Uranium"],a:"A. Than, dầu mỏ, khí đốt",explain:"Nguồn truyền thống."},
{q:"Nguồn năng lượng nào gây ô nhiễm môi trường nhiều nhất?",options:["A. Gió","B. Mặt trời","C. Than đá","D. Thủy điện"],a:"C. Than đá",explain:"Khí thải lớn."},
{q:"Điện năng được sản xuất nhiều nhất hiện nay từ",options:["A. Gió","B. Than đá","C. Mặt trời","D. Thủy triều"],a:"B. Than đá",explain:"Thực tế hiện nay."},
{q:"Năng lượng hạt nhân sinh ra từ",options:["A. Phản ứng hóa học","B. Phản ứng nhiệt","C. Phản ứng hạt nhân","D. Phản ứng sinh học"],a:"C. Phản ứng hạt nhân",explain:"Phân hạch – nhiệt hạch."},
{q:"Pin điện biến đổi",options:["A. Điện năng thành hóa năng","B. Hóa năng thành điện năng","C. Cơ năng thành điện năng","D. Nhiệt năng thành điện năng"],a:"B. Hóa năng thành điện năng",explain:"Pin cung cấp điện."},
{q:"Ắc quy thuộc loại nguồn điện",options:["A. Một lần","B. Không dùng lại","C. Có thể nạp lại","D. Không an toàn"],a:"C. Có thể nạp lại",explain:"Ắc quy sạc được."},
{q:"Thiết bị sử dụng năng lượng gió là",options:["A. Nhà máy nhiệt điện","B. Tuabin gió","C. Đập thủy điện","D. Pin mặt trời"],a:"B. Tuabin gió",explain:"Biến gió thành điện."},
{q:"Nhà máy thủy điện sử dụng năng lượng",options:["A. Nhiệt","B. Ánh sáng","C. Cơ năng của nước","D. Hóa năng"],a:"C. Cơ năng của nước",explain:"Dòng nước làm quay tuabin."},
{q:"Năng lượng sinh học có nguồn gốc từ",options:["A. Than","B. Dầu","C. Sinh vật","D. Uranium"],a:"C. Sinh vật",explain:"Sinh khối."},
{q:"Biogas là năng lượng thu được từ",options:["A. Than","B. Chất thải sinh học","C. Dầu mỏ","D. Gió"],a:"B. Chất thải sinh học",explain:"Khí sinh học."},
{q:"Nguồn năng lượng sạch là nguồn",options:["A. Gây ô nhiễm","B. Không gây ô nhiễm","C. Giá rẻ","D. Dễ khai thác"],a:"B. Không gây ô nhiễm",explain:"Bảo vệ môi trường."},
{q:"Sử dụng năng lượng tiết kiệm là",options:["A. Dùng nhiều","B. Dùng lãng phí","C. Dùng hợp lí","D. Không dùng"],a:"C. Dùng hợp lí",explain:"Hiệu quả và bền vững."},
{q:"Thiết bị nào không sử dụng điện năng?",options:["A. Quạt điện","B. Tivi","C. Đèn pin","D. Bếp gas"],a:"D. Bếp gas",explain:"Dùng hóa năng."},
{q:"Nguồn năng lượng không tái tạo là",options:["A. Gió","B. Mặt trời","C. Dầu mỏ","D. Thủy triều"],a:"C. Dầu mỏ",explain:"Có hạn."},
{q:"Năng lượng giúp con người",options:["A. Không làm việc","B. Sinh hoạt và sản xuất","C. Chỉ chiếu sáng","D. Chỉ sưởi ấm"],a:"B. Sinh hoạt và sản xuất",explain:"Vai trò năng lượng."},
/* ===== THÔNG HIỂU (15 câu) ===== */
{q:"Dùng bóng đèn LED tiết kiệm điện vì",options:["A. Giá rẻ","B. Tỏa nhiệt nhiều","C. Hiệu suất cao","D. Ánh sáng yếu"],a:"C. Hiệu suất cao",explain:"Ít hao phí."},
{q:"Năng lượng tái tạo có lợi vì",options:["A. Dễ cạn kiệt","B. Gây ô nhiễm","C. Bền vững","D. Khó khai thác"],a:"C. Bền vững",explain:"Sử dụng lâu dài."},
{q:"Dùng năng lượng mặt trời giúp",options:["A. Tăng ô nhiễm","B. Giảm chi phí điện","C. Hết tài nguyên","D. Tăng khí thải"],a:"B. Giảm chi phí điện",explain:"Nguồn miễn phí."},
{q:"Thiết bị chuyển điện năng thành cơ năng là",options:["A. Bếp điện","B. Bóng đèn","C. Quạt điện","D. Bàn là"],a:"C. Quạt điện",explain:"Tạo chuyển động."},
{q:"Tiết kiệm năng lượng góp phần",options:["A. Tăng ô nhiễm","B. Bảo vệ môi trường","C. Giảm tuổi thọ thiết bị","D. Tăng tiêu thụ"],a:"B. Bảo vệ môi trường",explain:"Giảm phát thải."},
{q:"Nhà máy nhiệt điện gây ô nhiễm vì",options:["A. Dùng nước","B. Dùng gió","C. Đốt nhiên liệu hóa thạch","D. Không có ống khói"],a:"C. Đốt nhiên liệu hóa thạch",explain:"Sinh khí thải."},
{q:"Dùng thiết bị công suất phù hợp giúp",options:["A. Tăng tiền điện","B. Giảm hiệu quả","C. Tiết kiệm điện","D. Hao phí"],a:"C. Tiết kiệm điện",explain:"Dùng đúng nhu cầu."},
{q:"Nguồn năng lượng sinh học thân thiện vì",options:["A. Tái tạo được","B. Đắt tiền","C. Hiếm","D. Khó dùng"],a:"A. Tái tạo được",explain:"Từ sinh vật."},
{q:"Dùng pin sạc thay pin dùng một lần giúp",options:["A. Tốn kém","B. Tăng rác thải","C. Bảo vệ môi trường","D. Giảm hiệu suất"],a:"C. Bảo vệ môi trường",explain:"Giảm rác thải."},
{q:"Năng lượng gió phụ thuộc nhiều vào",options:["A. Con người","B. Thời tiết","C. Máy móc","D. Giá điện"],a:"B. Thời tiết",explain:"Gió không ổn định."},
{q:"Hiệu suất cao nghĩa là",options:["A. Hao phí nhiều","B. Ít năng lượng có ích","C. Nhiều năng lượng có ích","D. Không sinh công"],a:"C. Nhiều năng lượng có ích",explain:"Giảm hao phí."},
{q:"Sử dụng năng lượng hợp lí là",options:["A. Dùng nhiều khi cần","B. Dùng tiết kiệm và hiệu quả","C. Không dùng","D. Dùng liên tục"],a:"B. Dùng tiết kiệm và hiệu quả",explain:"Định hướng bền vững."},
{q:"Nhà máy điện gió không hoạt động tốt khi",options:["A. Gió mạnh","B. Gió yếu","C. Có tuabin","D. Có máy phát"],a:"B. Gió yếu",explain:"Không đủ cơ năng."},
{q:"Năng lượng sạch giúp giảm",options:["A. Sản lượng","B. Chi phí","C. Ô nhiễm","D. Hiệu quả"],a:"C. Ô nhiễm",explain:"Ít khí thải."},
{q:"Thiết bị tiết kiệm điện thường có",options:["A. Công suất lớn","B. Hiệu suất thấp","C. Hiệu suất cao","D. Dùng lâu"],a:"C. Hiệu suất cao",explain:"Ít hao phí."},
/* ===== VẬN DỤNG (10 câu) ===== */
{q:"Gia đình nên dùng thiết bị nào để tiết kiệm điện?",options:["A. Bóng đèn sợi đốt","B. Bóng đèn LED","C. Bếp than","D. Quạt tay"],a:"B. Bóng đèn LED",explain:"Tiết kiệm điện."},
{q:"Nguồn năng lượng phù hợp vùng nắng nhiều là",options:["A. Gió","B. Than","C. Mặt trời","D. Dầu mỏ"],a:"C. Mặt trời",explain:"Khai thác hiệu quả."},
{q:"Muốn giảm tiền điện hàng tháng cần",options:["A. Dùng thiết bị công suất lớn","B. Dùng nhiều giờ","C. Tắt thiết bị khi không dùng","D. Dùng điện liên tục"],a:"C. Tắt thiết bị khi không dùng",explain:"Giảm điện năng."},
{q:"Nhà máy điện nào ít gây ô nhiễm nhất?",options:["A. Nhiệt điện","B. Thủy điện","C. Điện than","D. Điện dầu"],a:"B. Thủy điện",explain:"Không đốt nhiên liệu."},
{q:"Khi dùng năng lượng gió cần chú ý",options:["A. Gió mạnh ổn định","B. Gió yếu","C. Không cần gió","D. Có than"],a:"A. Gió mạnh ổn định",explain:"Tăng hiệu quả."},
{q:"Sử dụng bếp gas là chuyển hóa",options:["A. Điện năng → nhiệt năng","B. Hóa năng → nhiệt năng","C. Cơ năng → nhiệt năng","D. Quang năng → nhiệt năng"],a:"B. Hóa năng → nhiệt năng",explain:"Đốt gas sinh nhiệt."},
{q:"Biện pháp tiết kiệm năng lượng hiệu quả là",options:["A. Dùng thiết bị cũ","B. Dùng nhiều thiết bị","C. Cách nhiệt nhà tốt","D. Bật điện liên tục"],a:"C. Cách nhiệt nhà tốt",explain:"Giảm hao phí."},
{q:"Thiết bị nào dùng năng lượng tái tạo?",options:["A. Máy phát diesel","B. Pin mặt trời","C. Bếp than","D. Động cơ xăng"],a:"B. Pin mặt trời",explain:"Dùng năng lượng mặt trời."},
{q:"Nguồn năng lượng giúp giảm phát thải CO₂ là",options:["A. Than","B. Dầu","C. Mặt trời","D. Khí đốt"],a:"C. Mặt trời",explain:"Không khí thải."},
{q:"Sử dụng năng lượng hợp lí góp phần",options:["A. Cạn kiệt tài nguyên","B. Phát triển bền vững","C. Tăng ô nhiễm","D. Giảm hiệu suất"],a:"B. Phát triển bền vững",explain:"Mục tiêu lâu dài."}
];
// Full list assembled from the topic arrays
const questions_ly_all = [].concat(
	questions_ly_topic1,
	questions_ly_topic2,
	questions_ly_topic3,
	questions_ly_topic4,
	questions_ly_topic5
);

// Export globals and per-topic mapping
window.questions_ly = questions_ly_all;
window.questions_ly_by_topic = window.questions_ly_by_topic || {};

const _lyLongNames = [
	'Chuyên đề 1. NĂNG LƯỢNG CƠ HỌC',
	'Chuyên đề 2. ÁNH SÁNG',
	'Chuyên đề 3. ĐIỆN HỌC',
	'Chuyên đề 4. ĐIỆN TỪ',
	'Chuyên đề 5. NĂNG LƯỢNG VỚI CUỘC SỐNG'
];
const _lyShortNames = [
	'NĂNG LƯỢNG CƠ HỌC',
	'ÁNH SÁNG',
	'ĐIỆN HỌC',
	'ĐIỆN TỪ',
	'NĂNG LƯỢNG VỚI CUỘC SỐNG'
];

let _start = 0;
for (let i = 0; i < _lyShortNames.length; i++) {
	const arr = [questions_ly_topic1, questions_ly_topic2, questions_ly_topic3, questions_ly_topic4, questions_ly_topic5][i] || [];
	window.questions_ly_by_topic[_lyLongNames[i]] = arr;
	window.questions_ly_by_topic[_lyShortNames[i]] = arr;
}

window.questions_ly_by_topic['Tất cả'] = questions_ly_all;

// Ensure each Lý chuyên đề có at least 50 câu (bổ sung bằng cách nhân bản nếu cần)
(function ensureLyTopicCounts(minPerTopic = 50) {
	const list = [
		{ short: _lyShortNames[0], arr: questions_ly_topic1 },
		{ short: _lyShortNames[1], arr: questions_ly_topic2 },
		{ short: _lyShortNames[2], arr: questions_ly_topic3 },
		{ short: _lyShortNames[3], arr: questions_ly_topic4 },
		{ short: _lyShortNames[4], arr: questions_ly_topic5 }
	];
	list.forEach(item => {
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
	const combined = [].concat(questions_ly_topic1, questions_ly_topic2, questions_ly_topic3, questions_ly_topic4, questions_ly_topic5);
	window.questions_ly = combined;
	window.questions_ly_by_topic = window.questions_ly_by_topic || {};
	for (let i = 0; i < _lyShortNames.length; i++) {
		const arr = [questions_ly_topic1, questions_ly_topic2, questions_ly_topic3, questions_ly_topic4, questions_ly_topic5][i] || [];
		window.questions_ly_by_topic[_lyShortNames[i]] = arr;
		window.questions_ly_by_topic[_lyLongNames[i]] = arr;
	}
	window.questions_ly_by_topic['Tất cả'] = combined;
})();

/* Note: Populate the topic arrays above with question objects to enable
   subject-specific quizzes. The quiz code expects question objects shaped
   like: { q, options, a, explain }.
*/


