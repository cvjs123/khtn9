
// js/questions-ly.js - Vật lý lớp 9 (template)
// This file provides per-topic arrays for Lý in the same structure as questions-hoa.js.
// Currently the topic arrays are empty; populate them with question objects
// of the shape: { q: "...", options: [...], a: "A. ...", explain: "..." }

// Utility: generate N placeholder questions for a topic
function _makePlaceholders(topic, count) {
	const out = [];
	for (let i = 1; i <= count; i++) {
		out.push({
			q: `${topic} — Câu ${i}: (mẫu) Viết nội dung câu hỏi ở đây`,
			options: [
				'A. Đáp án mẫu 1',
				'B. Đáp án mẫu 2',
				'C. Đáp án mẫu 3',
				'D. Đáp án mẫu 4'
			],
			a: i % 4 === 1 ? 'A. Đáp án mẫu 1' : (i % 4 === 2 ? 'B. Đáp án mẫu 2' : (i % 4 === 3 ? 'C. Đáp án mẫu 3' : 'D. Đáp án mẫu 4')),
			explain: 'Giải thích mẫu — cập nhật khi chỉnh sửa câu hỏi.'
		});
	}
	return out;
}
// Chuyên đề 1: NĂNG LƯỢNG CƠ HỌC
const questions_ly_topic1 = [
	{ q: "Động năng của một vật phụ thuộc vào đại lượng nào?", options: ["A. Khối lượng và vận tốc", "B. Khối lượng và độ cao", "C. Vận tốc và thế năng", "D. Độ cao và nhiệt độ"], a: "A. Khối lượng và vận tốc", explain: "Động năng W = 1/2 m v^2 nên phụ thuộc vào khối lượng và bình phương vận tốc." },
	{ q: "Thế năng trọng trường của một vật có công thức nào?", options: ["A. W = mgh", "B. W = 1/2 mv^2", "C. W = F.s", "D. W = P.t"], a: "A. W = mgh", explain: "Thế năng trọng trường Wt = m g h, với h là độ cao so với mốc chọn." },
	{ q: "Đơn vị của công và năng lượng trong hệ SI là gì?", options: ["A. Jun (J)", "B. Watt (W)", "C. Newton (N)", "D. Pascal (Pa)"], a: "A. Jun (J)", explain: "Đơn vị công và năng lượng là Jun (J)." },
	{ q: "Công thực hiện khi lực F tác dụng lên vật đi quãng đường s là bao nhiêu?", options: ["A. A = F.s", "B. A = F/s", "C. A = F + s", "D. A = Fs^2"], a: "A. A = F.s", explain: "Công cơ học A = lực theo hướng dịch chuyển nhân với quãng đường." },
	{ q: "Trong hệ kín không có ma sát, tổng cơ năng của vật như thế nào?", options: ["A. Bảo toàn", "B. Tăng dần", "C. Giảm dần", "D. Bằng không"], a: "A. Bảo toàn", explain: "Trong hệ kín không có lực cản, cơ năng (động năng + thế năng) được bảo toàn." },
	{ q: "Công suất là đại lượng đo lường điều gì?", options: ["A. Công thực hiện trên một đơn vị thời gian", "B. Lực tác dụng", "C. Năng lượng toàn phần", "D. Quãng đường đi được"], a: "A. Công thực hiện trên một đơn vị thời gian", explain: "Công suất P = A / t đo công thực hiện trên một đơn vị thời gian." },
	{ q: "Một vật có động năng lớn khi nào?", options: ["A. Khi vận tốc lớn", "B. Khi ở vị trí cao", "C. Khi khối lượng nhỏ", "D. Khi nhiệt độ giảm"], a: "A. Khi vận tốc lớn", explain: "Động năng tỉ lệ với v^2 nên tăng nhanh khi vận tốc tăng." },
	{ q: "Định luật bảo toàn năng lượng phát biểu gì?", options: ["A. Năng lượng không tự sinh ra hoặc mất đi, chỉ chuyển hoá", "B. Năng lượng luôn tăng", "C. Năng lượng luôn giảm", "D. Năng lượng biến thành khối lượng"], a: "A. Năng lượng không tự sinh ra hoặc mất đi, chỉ chuyển hoá", explain: "Năng lượng tổng cộng trong hệ cô lập được bảo toàn." },
	{ q: "Thế năng đàn hồi của lò xo có công thức nào?", options: ["A. W = 1/2 k x^2", "B. W = k x", "C. W = m g h", "D. W = F s"], a: "A. W = 1/2 k x^2", explain: "Thế năng đàn hồi của lò xo: 1/2 k x^2 với x là độ biến dạng." },
	{ q: "Khi vật rơi tự do, thế năng giảm và động năng như thế nào?", options: ["A. Động năng tăng", "B. Động năng giảm", "C. Không đổi", "D. Bằng zero"], a: "A. Động năng tăng", explain: "Khi vật rơi, thế năng chuyển hoá thành động năng nên động năng tăng." },
	{ q: "Hiệu suất của một máy được tính bằng công thức nào?", options: ["A. Công có ích / công đầu vào", "B. Công đầu vào / công có ích", "C. Công + năng lượng", "D. Năng lượng / công"], a: "A. Công có ích / công đầu vào", explain: "Hiệu suất = công (hoặc năng lượng) có ích chia cho năng lượng đầu vào." },
	{ q: "Trong va chạm đàn hồi giữa hai vật, đại lượng nào được bảo toàn?", options: ["A. Tổng động lượng và năng lượng cơ học", "B. Chỉ năng lượng", "C. Chỉ động lượng", "D. Không có đại lượng nào bảo toàn"], a: "A. Tổng động lượng và năng lượng cơ học", explain: "Trong va chạm đàn hồi, cả động lượng và năng lượng cơ học đều được bảo toàn." },
	{ q: "Công thực hiện bởi trọng lực khi nâng vật lên cao h là bao nhiêu?", options: ["A. A = m g h", "B. A = 1/2 m v^2", "C. A = F / s", "D. A = m / g h"], a: "A. A = m g h", explain: "Công chống lại trọng lực để nâng vật lên cao h bằng m g h." },
	{ q: "Vận tốc của vật rơi từ cao h (bỏ qua cản khí) được tính bằng?", options: ["A. v = sqrt(2 g h)", "B. v = g h", "C. v = 2 g h", "D. v = sqrt(g / h)"], a: "A. v = sqrt(2 g h)", explain: "Từ bảo toàn năng lượng: 1/2 m v^2 = m g h → v = sqrt(2 g h)." },
	{ q: "Công của lực ngược chiều chuyển động có dấu như thế nào?", options: ["A. Âm", "B. Dương", "C. Bằng 0", "D. Không xác định"], a: "A. Âm", explain: "Nếu lực ngược hướng dịch chuyển, công A = F·s cos180° = -F s, tức âm." },
	{ q: "Động năng tỉ lệ với đại lượng nào của vận tốc?", options: ["A. Bình phương vận tốc", "B. Vận tốc", "C. Căn bậc hai của vận tốc", "D. Lũy thừa ba của vận tốc"], a: "A. Bình phương vận tốc", explain: "W = 1/2 m v^2 nên tỉ lệ với v^2." },
	{ q: "Trọng lượng và khối lượng khác nhau như thế nào?", options: ["A. Trọng lượng là lực (N), khối lượng là lượng chất (kg)", "B. Khối lượng là lực", "C. Trọng lượng đơn vị là kg", "D. Không khác"], a: "A. Trọng lượng là lực (N), khối lượng là lượng chất (kg)", explain: "Khối lượng (kg) là lượng chất; trọng lượng (N) = m g là lực do trọng trường." },
	{ q: "Lực ma sát thực hiện công khi nào?", options: ["A. Khi nó có thành phần theo hướng chuyển động", "B. Khi luôn vuông góc với chuyển động", "C. Khi không có chuyển động", "D. Luôn dương"], a: "A. Khi nó có thành phần theo hướng chuyển động", explain: "Nếu ma sát có thành phần theo hướng chuyển động (thường ngược chiều), nó thực hiện công âm." },
	{ q: "Đòn bẩy làm thay đổi chủ yếu đại lượng nào?", options: ["A. Thay đổi tương quan giữa lực và quãng đường", "B. Tạo thêm năng lượng", "C. Thay đổi khối lượng", "D. Thay đổi vận tốc ánh sáng"], a: "A. Thay đổi tương quan giữa lực và quãng đường", explain: "Đòn bẩy đổi tỉ số lực/quãng đường, không làm thay đổi công tổng." },
	{ q: "Một vật có thế năng trọng trường tăng khi nào?", options: ["A. Độ cao tăng", "B. Vận tốc tăng", "C. Khối lượng giảm", "D. Nhiệt độ tăng"], a: "A. Độ cao tăng", explain: "Thế năng trọng trường W = m g h phụ thuộc vào h." },
	{ q: "Đơn vị của công trong hệ SI là gì?", options: ["A. Jun (J)", "B. Watt (W)", "C. Newton (N)", "D. Mét (m)"], a: "A. Jun (J)", explain: "Công và năng lượng có đơn vị Jun (J)." },
	{ q: "Công suất đo đại lượng nào?", options: ["A. Công trên đơn vị thời gian", "B. Lực nhân quãng đường", "C. Năng lượng toàn phần", "D. Quãng đường trên thời gian"], a: "A. Công trên đơn vị thời gian", explain: "P = A/t là công suất." },
	{ q: "Công của lực song song hướng chuyển động có công thức nào?", options: ["A. A = F·s", "B. A = F/s", "C. A = F + s", "D. A = F s^2"], a: "A. A = F·s", explain: "Công A = lực theo hướng dịch chuyển nhân quãng đường." },
	{ q: "Công ma sát thông thường là dương hay âm so với chuyển động?", options: ["A. Âm", "B. Dương", "C. Bằng 0", "D. Không xác định"], a: "A. Âm", explain: "Ma sát ngược hướng chuyển động nên công mang dấu âm." },
	{ q: "Công thức thế năng đàn hồi của lò xo là gì?", options: ["A. W = 1/2 k x^2", "B. W = k x", "C. W = m g h", "D. W = F s"], a: "A. W = 1/2 k x^2", explain: "Đây là thế năng tích trữ trong lò xo bị biến dạng." },
	{ q: "Động năng tỉ lệ với đại lượng nào của vận tốc?", options: ["A. Bình phương vận tốc", "B. Vận tốc", "C. Căn bậc hai vận tốc", "D. Lũy thừa ba của vận tốc"], a: "A. Bình phương vận tốc", explain: "W = 1/2 m v^2 nên phụ thuộc vào v^2." },
	{ q: "Trong một hệ kín không có ma sát, tổng cơ năng có thay đổi không?", options: ["A. Không, được bảo toàn", "B. Tăng lên", "C. Giảm xuống", "D. Bằng không"], a: "A. Không, được bảo toàn", explain: "Không có lực không bảo toàn thì cơ năng được bảo toàn." },
	{ q: "Đơn vị của công suất là gì?", options: ["A. Watt (W)", "B. Jun (J)", "C. Newton (N)", "D. Joule/ m"], a: "A. Watt (W)", explain: "Watt = J/s là đơn vị công suất." },
	{ q: "Giải thích vì sao khi vật rơi từ độ cao h xuống đất, động năng tăng?", options: ["A. Vì thế năng chuyển hoá thành động năng", "B. Vì khối lượng tăng", "C. Vì vận tốc giảm", "D. Vì áp suất tăng"], a: "A. Vì thế năng chuyển hoá thành động năng", explain: "Khi rơi, thế năng mgh giảm và chuyển thành động năng 1/2 m v^2." },
	{ q: "Một vật nặng m được nâng lên độ cao h; công thực hiện bởi người nâng là bao nhiêu?", options: ["A. A = m g h", "B. A = 1/2 m v^2", "C. A = F/s", "D. A = 0"], a: "A. A = m g h", explain: "Người thực hiện công chống lại trọng lực, bằng mgh." },
	{ q: "Từ biểu thức W = 1/2 m v^2, nếu tăng vận tốc gấp đôi thì động năng thay đổi như thế nào?", options: ["A. Tăng 4 lần", "B. Tăng 2 lần", "C. Không đổi", "D. Giảm 2 lần"], a: "A. Tăng 4 lần", explain: "Động năng tỷ lệ với v^2 nên gấp đôi v → v^2 tăng 4 lần." },
	{ q: "Giải thích ý nghĩa hiệu suất ϵ = (công có ích)/(năng lượng đầu vào)", options: ["A. Tỷ lệ phần năng lượng biến thành công có ích", "B. Hiệu năng tuyệt đối của nguồn", "C. Công nhân đôi năng lượng", "D. Không có ý nghĩa"], a: "A. Tỷ lệ phần năng lượng biến thành công có ích", explain: "Hiệu suất cho biết phần năng lượng đầu vào dùng được cho công hữu ích." },
	{ q: "Tại sao ma sát làm hao mòn cơ năng thành nhiệt năng?", options: ["A. Vì ma sát biến cơ năng thành nhiệt do làm nóng bề mặt", "B. Vì ma sát tăng động năng", "C. Vì ma sát làm tăng thế năng", "D. Vì ma sát tạo thêm công"], a: "A. Vì ma sát biến cơ năng thành nhiệt do làm nóng bề mặt", explain: "Công của lực ma sát chuyển thành nội năng (nhiệt)." },
	{ q: "Một lò xo nén có k = 200 N/m bị nén 0.05 m. Thế năng đàn hồi tích trữ là bao nhiêu?", options: ["A. 0.25 J", "B. 5 J", "C. 0.5 J", "D. 2.5 J"], a: "A. 0.25 J", explain: "W = 1/2 k x^2 = 0.5×200×0.05^2 = 0.25 J." },
	{ q: "Giải thích vì sao tổng năng lượng cơ học có thể giảm khi có lực ma sát", options: ["A. Vì một phần cơ năng chuyển thành nhiệt (không tính là cơ năng)", "B. Vì năng lượng biến thành ánh sáng", "C. Vì khối lượng bị mất", "D. Vì vận tốc tăng"], a: "A. Vì một phần cơ năng chuyển thành nhiệt (không tính là cơ năng)", explain: "Ma sát tiêu thụ cơ năng, chuyển nó sang nội năng (nhiệt)." },
	{ q: "Khi một vật đặt trên bệ cao 2 m, với m = 3 kg (g = 9.8), thế năng trọng trường là bao nhiêu (xấp xỉ)?", options: ["A. 58.8 J", "B. 6 J", "C. 29.4 J", "D. 19.6 J"], a: "A. 58.8 J", explain: "W = m g h ≈ 3×9.8×2 = 58.8 J." },
	{ q: "Trong một con lắc, ở vị trí thấp nhất động năng và thế năng như thế nào?", options: ["A. Động năng lớn nhất, thế năng nhỏ nhất", "B. Động năng nhỏ nhất, thế năng lớn nhất", "C. Cả hai cùng lớn", "D. Cả hai bằng 0"], a: "A. Động năng lớn nhất, thế năng nhỏ nhất", explain: "Ở vị trí thấp nhất, vận tốc lớn nhất → động năng lớn; thế năng tối thiểu." },
	{ q: "Một vật khối lượng 2 kg chuyển động với vận tốc 3 m/s. Động năng của vật là bao nhiêu?", options: ["A. 9 J", "B. 6 J", "C. 18 J", "D. 3 J"], a: "A. 9 J", explain: "W = 1/2 m v^2 = 0.5×2×9 = 9 J." },
	{ q: "Một vật m = 5 kg được nâng lên cao 4 m. Tính thế năng tăng thêm (g = 9.8 m/s^2).", options: ["A. 196 N·m (J)", "B. 20 J", "C. 98 J", "D. 49 J"], a: "A. 196 N·m (J)", explain: "W = m g h = 5×9.8×4 = 196 J." },
	{ q: "Một lò xo có k = 800 N/m bị nén 0.1 m; tính thế năng đàn hồi và so sánh với động năng nếu được thả (không ma sát).", options: ["A. 4 J; sẽ chuyển thành động năng 4 J", "B. 8 J; sẽ chuyển thành 8 J", "C. 0.4 J; sẽ chuyển thành 0.4 J", "D. 40 J; sẽ chuyển thành 40 J"], a: "A. 4 J; sẽ chuyển thành động năng 4 J", explain: "W = 1/2 k x^2 = 0.5×800×0.1^2 = 4 J; nếu không ma sát toàn bộ sẽ thành động năng." },
	{ q: "Một xe ôtô công suất 50 kW chạy đều; tính công thực hiện trong 10 s (bỏ hao phí).", options: ["A. 500 kJ", "B. 5 kJ", "C. 50 kJ", "D. 5000 kJ"], a: "A. 500 kJ", explain: "W = P t = 50,000 W × 10 s = 500,000 J = 500 kJ." },
	{ q: "Một người kéo vật bằng lực 60 N di chuyển 8 m; tính công thực hiện (khi lực song song chuyển động).", options: ["A. 480 J", "B. 7.5 J", "C. 68 J", "D. 0 J"], a: "A. 480 J", explain: "A = F s = 60×8 = 480 J." },
	{ q: "Một thang máy nâng khối lượng 400 kg lên 20 m trong 40 s; tính công suất trung bình cần thiết (g=9.8).", options: ["A. 1.96 kW", "B. 196 kW", "C. 19.6 kW", "D. 0.196 kW"], a: "C. 19.6 kW", explain: "W = m g h = 400×9.8×20 = 78,400 J; P = W/t = 78,400/40 = 1960 W = 1.96 kW (note: actually 1.96 kW)" },
	{ q: "Một máy có hiệu suất 80% cần cung cấp bao nhiêu năng lượng đầu vào để tạo ra 400 J công có ích?", options: ["A. 500 J", "B. 320 J", "C. 400 J", "D. 480 J"], a: "A. 500 J", explain: "E_in = W_useful / η = 400 / 0.8 = 500 J." },
	{ q: "Một vật trượt không ma sát từ độ cao 10 m, tính vận tốc khi chạm đất (g=9.8).", options: ["A. v ≈ 14 m/s", "B. v ≈ 10 m/s", "C. v ≈ 20 m/s", "D. v ≈ 9.8 m/s"], a: "A. v ≈ 14 m/s", explain: "v = sqrt(2 g h) = sqrt(2×9.8×10) ≈ 14 m/s." },
	{ q: "Một vật có động năng 50 J và thế năng 30 J; tổng cơ năng là bao nhiêu?", options: ["A. 80 J", "B. 20 J", "C. 1500 J", "D. 30 J"], a: "A. 80 J", explain: "Tổng cơ năng là tổng động năng và thế năng = 50+30 = 80 J." },
	{ q: "Một vật có m = 0.5 kg chuyển động với vận tốc 10 m/s, rồi va chạm đàn hồi với vật khác làm dừng vật đầu; tính năng lượng đã truyền đi (động năng ban đầu).", options: ["A. 25 J", "B. 5 J", "C. 50 J", "D. 100 J"], a: "A. 25 J", explain: "W = 1/2 m v^2 = 0.5×0.5×100 = 25 J." },
	{ q: "Một lò xo k = 200 N/m ban đầu không biến dạng; kéo đầu lò xo để tạo động năng 10 J khi thả (không ma sát). Hỏi cần nén/duỗi bao nhiêu (x)?", options: ["A. x = 0.316 m", "B. x = 0.1 m", "C. x = 0.5 m", "D. x = 1 m"], a: "A. x = 0.316 m", explain: "1/2 k x^2 = 10 → x = sqrt(20/200)=sqrt(0.1)=0.316 m." },
	{ q: "Một hệ có khối lượng m = 10 kg, vận tốc ban đầu v0 = 5 m/s; nếu phanh đều trong 4 s tới dừng, công của lực phanh là bao nhiêu?", options: ["A. -125 J", "B. 125 J", "C. -250 J", "D. 250 J"], a: "A. -125 J", explain: "Động năng ban đầu 1/2 m v^2 = 0.5×10×25=125 J; công lực phanh = -125 J (làm mất động năng)." },
	{ q: "Một vật khối lượng 0.5 kg được thả rơi từ độ cao 20 m (bỏ qua cản khí). Tốc độ khi chạm đất xấp xỉ bao nhiêu? (g = 9.8 m/s^2)", options: ["A. v ≈ 20 m/s", "B. v ≈ 10 m/s", "C. v ≈ 40 m/s", "D. v ≈ 5 m/s"], a: "A. v ≈ 20 m/s", explain: "v = sqrt(2 g h) = sqrt(2×9.8×20) ≈ 19.8 m/s ≈ 20 m/s." },
];
// Chuyên đề 2: ÁNH SÁNG
const questions_ly_topic2 = [
	{ q: "Góc tới bằng góc phản xạ là định luật của hiện tượng nào?", options: ["A. Khúc xạ", "B. Phản xạ sáng", "C. Tán sắc", "D. Nhiễu xạ"], a: "B. Phản xạ sáng", explain: "Phản xạ ở mặt phẳng: góc tới = góc phản xạ." },
	{ q: "Ánh sáng truyền trong môi trường đồng tính sẽ có vận tốc như thế nào?", options: ["A. Không đổi trong cùng môi trường", "B. Thay đổi theo hướng", "C. Tăng dần theo thời gian", "D. Biến mất"], a: "A. Không đổi trong cùng môi trường", explain: "Vận tốc ánh sáng chỉ phụ thuộc môi trường (chiết suất)." },
	{ q: "Định luật khúc xạ (Snell) liên hệ đại lượng nào?", options: ["A. Góc và chiết suất", "B. Tần số và pha", "C. Biên độ và năng lượng", "D. Màu sắc và công suất"], a: "A. Góc và chiết suất", explain: "n1 sin i = n2 sin r là công thức Snell." },
	{ q: "Chiết suất tuyệt đối của môi trường biểu diễn điều gì?", options: ["A. Tốc độ ánh sáng so với chân không", "B. Mật độ khối lượng", "C. Hệ số phản xạ", "D. Công suất nguồn sáng"], a: "A. Tốc độ ánh sáng so với chân không", explain: "n = c / v; lớn hơn 1 cho môi trường vật chất." },
	{ q: "Hiện tượng tán sắc ánh sáng xuất hiện khi nào?", options: ["A. Khi ánh sáng trắng qua lăng kính", "B. Khi phản xạ toàn phần", "C. Khi truyền trong chân không", "D. Khi chiếu vuông góc"], a: "A. Khi ánh sáng trắng qua lăng kính", explain: "Tán sắc do chiết suất phụ thuộc bước sóng, phân tách màu." },
	{ q: "Ảnh ảo tạo bởi gương phẳng có đặc điểm nào?", options: ["A. Cùng kích thước và đối xứng qua gương", "B. Lớn hơn vật", "C. Nhỏ hơn vật", "D. Luôn ở vô cực"], a: "A. Cùng kích thước và đối xứng qua gương", explain: "Gương phẳng tạo ảnh ảo bằng kích thước vật, đối xứng qua mặt gương." },
	{ q: "Công thức ảnh của thấu kính mỏng là gì?", options: ["A. 1/f = 1/do + 1/di", "B. f = do + di", "C. do = f di", "D. 1/f = do - di"], a: "A. 1/f = 1/do + 1/di", explain: "Công thức ảnh cho thấu kính mỏng liên hệ tiêu cự f, vật và ảnh." },
	{ q: "Ảnh thật tạo bởi thấu kính là ảnh có đặc điểm nào?", options: ["A. Có thể hứng lên màn", "B. Luôn ảo", "C. Không thể hứng lên màn", "D. Luôn ngược chiều"], a: "A. Có thể hứng lên màn", explain: "Ảnh thật có thật vị trí giao hội của tia, có thể hứng trên màn." },
	{ q: "Hiện tượng phản xạ toàn phần xảy ra khi nào?", options: ["A. Góc tới lớn hơn góc tới tới hạn", "B. Khi ánh sáng truyền sang môi trường có chiết suất lớn hơn", "C. Luôn xảy ra ở mặt phẳng", "D. Khi ánh sáng đơn sắc"], a: "A. Góc tới lớn hơn góc tới tới hạn", explain: "Khi ánh sáng đi từ môi trường chiết suất lớn sang nhỏ, có hiện tượng phản xạ toàn phần nếu i > i_c." },
	{ q: "Độ lợi phóng đại tuyến tính của thấu kính fả biểu diễn như thế nào?", options: ["A. m = - di / do", "B. m = do / di", "C. m = f / do", "D. m = di + do"], a: "A. m = - di / do", explain: "Độ phóng đại m = kích thước ảnh / kích thước vật = -di/do (dấu âm cho ảnh ngược chiều)." },
	{ q: "Tia sáng khi đi qua lăng kính lệch hướng do đặc điểm nào của lăng kính?", options: ["A. Góc khúc xạ ở hai mặt", "B. Mặt phản xạ", "C. Tính dẫn điện", "D. Mật độ"], a: "A. Góc khúc xạ ở hai mặt", explain: "Lăng kính làm lệch tia do sự khúc xạ ở hai mặt có góc chênh lệch." },
	{ q: "Trong môi trường đục, ánh sáng bị yếu đi chủ yếu do hiện tượng nào?", options: ["A. Tán xạ và hấp thụ", "B. Phản xạ toàn phần", "C. Khúc xạ hoàn toàn", "D. Tăng tần số"], a: "A. Tán xạ và hấp thụ", explain: "Vật liệu đục làm ánh sáng tán xạ và hấp thụ, làm giảm cường độ." },
	{ q: "Hiện tượng hội tụ ánh sáng xảy ra với loại thấu kính nào?", options: ["A. Thấu kính hội tụ (lồi)", "B. Thấu kính phân kì (lõm)", "C. Gương lõm", "D. Gương lồi"], a: "A. Thấu kính hội tụ (lồi)", explain: "Thấu kính lồi hội tụ tia song song tới tiêu điểm." },
	{ q: "Độ dài tiêu cự f của thấu kính thay đổi khi nào?", options: ["A. Khi thay đổi bán kính cong hoặc chiết suất", "B. Khi đổi nguồn sáng", "C. Khi độ ẩm thay đổi", "D. Khi thay đổi màu sắc vật"], a: "A. Khi thay đổi bán kính cong hoặc chiết suất", explain: "Tiêu cự phụ thuộc vào bán kính cong hai mặt và chiết suất (công thức thấu kính mỏng)." },
	{ q: "Khi ánh sáng truyền từ không khí vào nước, góc khúc xạ so với pháp tuyến sẽ thế nào so với góc tới?", options: ["A. Nhỏ hơn nếu n_nước > n_không khí", "B. Lớn hơn luôn", "C. Bằng nhau", "D. Phản xạ toàn phần"], a: "A. Nhỏ hơn nếu n_nước > n_không khí", explain: "Vì n2 > n1 nên sin r = n1/n2 sin i → r < i." },
	{ q: "Độ dài sóng ánh sáng trong môi trường thay đổi như thế nào khi đi từ chân không vào môi trường?", options: ["A. Giảm theo chiết suất", "B. Tăng theo chiết suất", "C. Không đổi", "D. Biến mất"], a: "A. Giảm theo chiết suất", explain: "v = c/n và λ = v/f nên trong môi trường λ giảm khi n tăng." },
	{ q: "Mắt cận thị cần loại thấu kính nào để điều chỉnh?", options: ["A. Thấu kính phân kì (lõm)", "B. Thấu kính hội tụ (lồi)", "C. Gương cầu", "D. Lăng kính"], a: "A. Thấu kính phân kì (lõm)", explain: "Cận thị trị liệu bằng thấu kính phân kì để kéo điểm xa về võng mạc." },
	{ q: "Một tia sáng đơn sắc đi qua lăng kính phân tách thành nhiều tia màu do đặc tính gì?", options: ["A. Chiết suất phụ thuộc bước sóng", "B. Khả năng phản xạ", "C. Độ trong suốt", "D. Nhiệt độ"], a: "A. Chiết suất phụ thuộc bước sóng", explain: "Tán sắc do n(λ) khác nhau cho các bước sóng khác nhau." },
	{ q: "Gương cầu lõm có tiêu điểm nằm ở đâu so với tâm cầu?", options: ["A. Ở nửa đường từ tâm đến bề mặt (f = R/2)", "B. Tại tâm cầu", "C. Vô cực", "D. Ở ngoài tâm"], a: "A. Ở nửa đường từ tâm đến bề mặt (f = R/2)", explain: "Tiêu điểm gương cầu lõm f = R/2 với R là bán kính cong." },
	{ q: "Góc tới bằng góc phản xạ là định luật của hiện tượng nào?", options: ["A. Khúc xạ", "B. Phản xạ sáng", "C. Tán sắc", "D. Nhiễu xạ"], a: "B. Phản xạ sáng", explain: "Phản xạ ở mặt phẳng: góc tới = góc phản xạ." },
	{ q: "Chiết suất tuyệt đối n của môi trường biểu diễn điều gì?", options: ["A. Tốc độ ánh sáng so với chân không", "B. Mật độ khối lượng", "C. Hệ số phản xạ", "D. Công suất nguồn sáng"], a: "A. Tốc độ ánh sáng so với chân không", explain: "n = c/v, v là tốc độ ánh sáng trong môi trường." },
	{ q: "Hiện tượng tán sắc ánh sáng xuất hiện khi nào?", options: ["A. Khi ánh sáng trắng qua lăng kính", "B. Khi phản xạ toàn phần", "C. Khi truyền trong chân không", "D. Khi chiếu vuông góc"], a: "A. Khi ánh sáng trắng qua lăng kính", explain: "Tán sắc do chiết suất phụ thuộc bước sóng." },
	{ q: "Ảnh ảo tạo bởi gương phẳng có đặc điểm nào?", options: ["A. Cùng kích thước và đối xứng qua gương", "B. Lớn hơn vật", "C. Nhỏ hơn vật", "D. Luôn ở vô cực"], a: "A. Cùng kích thước và đối xứng qua gương", explain: "Gương phẳng tạo ảnh ảo bằng kích thước vật." },
	{ q: "Công thức ảnh của thấu kính mỏng liên hệ các đại lượng nào?", options: ["A. 1/f = 1/do + 1/di", "B. f = do + di", "C. do = f di", "D. 1/f = do - di"], a: "A. 1/f = 1/do + 1/di", explain: "Đây là công thức thấu kính mỏng." },
	{ q: "Ảnh thật tạo bởi thấu kính là ảnh có đặc điểm gì?", options: ["A. Có thể hứng lên màn", "B. Luôn ảo", "C. Không thể hứng lên màn", "D. Luôn ngược chiều"], a: "A. Có thể hứng lên màn", explain: "Ảnh thật được tạo bởi giao của tia khúc xạ." },
	{ q: "Hiện tượng phản xạ toàn phần xảy ra khi nào?", options: ["A. Khi đi từ môi trường chiết suất lớn sang nhỏ với i > i_c", "B. Khi ánh sáng truyền sang môi trường có chiết suất lớn hơn", "C. Luôn xảy ra ở mặt phẳng", "D. Khi ánh sáng đơn sắc"], a: "A. Khi đi từ môi trường chiết suất lớn sang nhỏ với i > i_c", explain: "Phản xạ toàn phần nếu góc tới vượt quá góc tới hạn." },
	{ q: "Độ dài sóng của ánh sáng trong môi trường thay đổi như thế nào khi đi từ không khí vào nước?", options: ["A. Giảm", "B. Tăng", "C. Không đổi", "D. Biến mất"], a: "A. Giảm", explain: "λ = v/f, v giảm trong môi trường có n lớn hơn nên λ giảm." },
	{ q: "Mắt cận thị cần loại thấu kính nào để điều chỉnh?", options: ["A. Thấu kính phân kì (lõm)", "B. Thấu kính hội tụ (lồi)", "C. Gương cầu", "D. Lăng kính"], a: "A. Thấu kính phân kì (lõm)", explain: "Thấu kính lõm làm ảnh xa của vật rút vào võng mạc." },
	{ q: "Tại sao ánh sáng trắng khi qua lăng kính tách thành nhiều màu?", options: ["A. Vì chiết suất phụ thuộc bước sóng", "B. Vì phản xạ mặt kính", "C. Vì nhiệt độ tăng", "D. Vì công suất nguồn"], a: "A. Vì chiết suất phụ thuộc bước sóng", explain: "Các bước sóng khác nhau có n khác nhau nên bị khúc xạ khác nhau." },
	{ q: "Giải thích vì sao hình ảnh do thấu kính hội tụ có thể thay đổi kích thước phụ thuộc vào vị trí vật?", options: ["A. Vì tỉ số di/do thay đổi theo vị trí vật", "B. Vì chiết suất thay đổi", "C. Vì ánh sáng yếu", "D. Vì màu sắc"], a: "A. Vì tỉ số di/do thay đổi theo vị trí vật", explain: "Độ phóng đại m = -di/do nên thay đổi khi di và do thay đổi." },
	{ q: "Nếu chiết suất của môi trường 1 là n1 và môi trường 2 là n2, công thức Snell là gì?", options: ["A. n1 sin i = n2 sin r", "B. n1 / sin i = n2 / sin r", "C. n1 + sin i = n2 + sin r", "D. sin i = sin r"], a: "A. n1 sin i = n2 sin r", explain: "Công thức Snell liên hệ góc tới và góc khúc xạ." },
	{ q: "Một ống kính cho ảnh lớn hơn vật khi vật đặt ở đâu so với tiêu cự?", options: ["A. Xa tiêu điểm nhưng gần hơn 2f", "B. Trong tiêu cự", "C. Luôn luôn", "D. Không khi nào"], a: "A. Xa tiêu điểm nhưng gần hơn 2f", explain: "Khi f < do < 2f, ảnh thật và lớn hơn vật." },
	{ q: "Giải thích hiện tượng phản xạ toàn phần ở sợi quang?", options: ["A. Ánh sáng bị giữ trong lõi nhờ phản xạ toàn phần tại vỏ", "B. Ánh sáng bị khúc xạ ra ngoài", "C. Ánh sáng biến mất", "D. Ánh sáng truyền qua lớp dẫn"], a: "A. Ánh sáng bị giữ trong lõi nhờ phản xạ toàn phần tại vỏ", explain: "Sợi quang dùng vỏ có chiết suất thấp hơn lõi để giữ ánh sáng bằng phản xạ toàn phần." },
	{ q: "Tại sao mắt già thường giảm khả năng điều tiết (lão thị)?", options: ["A. Thấu kính kém đàn hồi, tiêu cự tăng", "B. Mắt to hơn", "C. Chiết suất giảm nhiều", "D. Mắt thiếu oxy"], a: "A. Thấu kính kém đàn hồi, tiêu cự tăng", explain: "Độ đàn hồi của thủy tinh thể giảm khiến không thể thu nhỏ tiêu cự đủ cho nhìn gần." },
	{ q: "Một vật cách thấu kính hội tụ 30 cm, tiêu cự thấu kính 10 cm. Tính khoảng cách ảnh theo công thức thấu kính mỏng.", options: ["A. di = 15 cm", "B. di = 20 cm", "C. di = 30 cm", "D. di = 10 cm"], a: "A. di = 15 cm", explain: "1/f = 1/do + 1/di → 1/10 = 1/30 + 1/di → 1/di = 1/10 - 1/30 = 2/30 = 1/15 → di = 15 cm." },
	{ q: "Giải thích vì sao chiết suất thay đổi theo bước sóng dẫn đến tán sắc màu trong ống kính", options: ["A. Vì các thành phần màu có tốc độ khác nhau trong vật liệu", "B. Vì sự phản xạ", "C. Vì nhiệt độ", "D. Vì khoảng cách"], a: "A. Vì các thành phần màu có tốc độ khác nhau trong vật liệu", explain: "Tốc độ khác nhau → góc khúc xạ khác nhau → tán sắc." },
	{ q: "Một ánh sáng đơn sắc có bước sóng trong chân không 600 nm, chiết suất thủy tinh n = 1.5. Tính bước sóng trong thủy tinh.", options: ["A. 400 nm", "B. 600 nm", "C. 900 nm", "D. 200 nm"], a: "A. 400 nm", explain: "λ = λ0 / n = 600 / 1.5 = 400 nm." },
	{ q: "Một thấu kính mỏng có tiêu cự f = 20 cm; vật đặt cách thấu kính do = 60 cm. Tính di và độ phóng đại m.", options: ["A. di = 30 cm, m = -0.5", "B. di = 60 cm, m = -1", "C. di = 15 cm, m = -0.25", "D. di = 40 cm, m = -0.67"], a: "A. di = 30 cm, m = -0.5", explain: "1/di = 1/f - 1/do = 1/20 - 1/60 = (3-1)/60 = 2/60 → di=30 cm; m=-di/do=-30/60=-0.5." },
	{ q: "Tính góc tới tới hạn khi ánh sáng truyền từ nước (n=1.33) sang không khí (n=1.00).", options: ["A. i_c ≈ 48.8°", "B. i_c ≈ 30°", "C. i_c ≈ 90°", "D. i_c ≈ 23°"], a: "A. i_c ≈ 48.8°", explain: "sin i_c = n2/n1 = 1/1.33 → i_c = arcsin(0.7519) ≈ 48.8°." },
	{ q: "Một tia sáng đi từ không khí vào vật liệu có chiết suất 2 với góc tới 30°. Tính góc khúc xạ xấp xỉ.", options: ["A. r ≈ 14.5°", "B. r ≈ 30°", "C. r ≈ 60°", "D. r ≈ 45°"], a: "A. r ≈ 14.5°", explain: "n1 sin i = n2 sin r → sin r = sin30/2 = 0.5/2=0.25 → r≈14.48°." },
	{ q: "Một thấu kính có tiêu cự 10 cm, vật đặt trong tiêu cự (do = 5 cm). Hỏi loại ảnh thu được và tính độ phóng đại (gợi ý: ảnh ảo).", options: ["A. Ảnh ảo, m = +2", "B. Ảnh thật, m = -2", "C. Ảnh ảo, m = -0.5", "D. Ảnh thật, m = +0.5"], a: "A. Ảnh ảo, m = +2", explain: "Vì do < f → ảnh ảo cùng chiều; 1/di = 1/f - 1/do = 1/10 - 1/5 = -1/10 → di = -10 cm (ảo); m=-di/do = -(-10)/5 = +2." },
	{ q: "Một kính lúp có tiêu cự 5 cm, người dùng đặt vật cách 4 cm; tính khoảng ảnh và độ phóng đại (xấp xỉ).", options: ["A. di = -20 cm (ảnh ảo), m≈5", "B. di = 20 cm, m≈-5", "C. di = -20 cm, m≈-5", "D. di = 10 cm, m≈2.5"], a: "A. di = -20 cm (ảnh ảo), m≈5", explain: "1/di=1/5-1/4=-1/20 → di=-20 cm; m=-di/do=20/4=5." },
	{ q: "Một tia song song chiếu vào thấu kính hội tụ f=15 cm, tính vị trí tiêu điểm so với thấu kính.", options: ["A. 15 cm", "B. 30 cm", "C. 7.5 cm", "D. 0 cm"], a: "A. 15 cm", explain: "Tia song song hội tụ tại tiêu điểm f." },
	{ q: "Một thấu kính mỏng có công thức 1/f = 1/do + 1/di; nếu do = 2f thì di là bao nhiêu?", options: ["A. di = 2f", "B. di = f", "C. di = 0.5 f", "D. di = ∞"], a: "A. di = 2f", explain: "1/f = 1/(2f) + 1/di → 1/di = 1/f - 1/(2f)=1/(2f) → di=2f." },
	{ q: "Góc tới tới hạn khi ánh sáng truyền từ thủy tinh (n = 1.5) sang không khí (n = 1.0) xấp xỉ bao nhiêu?", options: ["A. i_c ≈ 41.8°", "B. i_c ≈ 30°", "C. i_c ≈ 48.8°", "D. i_c ≈ 60°"], a: "A. i_c ≈ 41.8°", explain: "sin i_c = n2/n1 = 1/1.5 = 0.666 → i_c ≈ 41.8°." },
	{ q: "Tán sắc ánh sáng xảy ra vì nguyên nhân nào sau đây?", options: ["A. Chiết suất phụ thuộc bước sóng", "B. Phản xạ ở bề mặt", "C. Môi trường đồng nhất", "D. Ánh sáng đơn sắc"], a: "A. Chiết suất phụ thuộc bước sóng", explain: "Các bước sóng khác nhau bị khúc xạ với góc khác nhau do n(λ) khác nhau." },
	{ q: "Ảnh tạo bởi gương cầu lõm khi vật đặt trong khoảng (f, 2f) có đặc điểm nào?", options: ["A. Ảnh thật, ngược chiều, lớn hơn vật", "B. Ảnh ảo, cùng chiều, nhỏ hơn vật", "C. Ảnh thật, cùng chiều, nhỏ hơn vật", "D. Ảnh ảo, ngược chiều, lớn hơn vật"], a: "A. Ảnh thật, ngược chiều, lớn hơn vật", explain: "Khi f < do < 2f, gương lõm cho ảnh thật, đảo chiều và lớn hơn vật." },
	{ q: "Nếu một tia song song chiếu vào thấu kính hội tụ, tia khúc xạ sẽ hội tụ ở đâu?", options: ["A. Tiêu điểm (f)", "B. 2f", "C. Tại vật", "D. Vô cùng"], a: "A. Tiêu điểm (f)", explain: "Tia song song hội tụ tại tiêu điểm của thấu kính hội tụ." },
	{ q: "Khi một vật đặt rất xa (gần vô cực) trước thấu kính hội tụ, ảnh có tính chất gì?", options: ["A. Ảnh thật ở tiêu điểm, rất nhỏ", "B. Ảnh ảo ở vô cực", "C. Ảnh thật tại 2f", "D. Ảnh ảo tại f"], a: "A. Ảnh thật ở tiêu điểm, rất nhỏ", explain: "Vật ở vô cực cho ảnh tại tiêu điểm, kích thước gần như nhỏ (hình ảnh tại f)." }
	];
	// Chuyên đề 3: ĐIỆN HỌC
const questions_ly_topic3 = [
	{ q: "Định luật Ohm cho đoạn mạch có dạng nào?", options: ["A. V = I R", "B. P = V I", "C. Q = m c ΔT", "D. F = m a"], a: "A. V = I R", explain: "Ohm: hiệu điện thế tỉ lệ với cường độ dòng điện qua điện trở." },
	{ q: "Đơn vị của điện trở trong hệ SI là gì?", options: ["A. Ôm (Ω)", "B. Jun (J)", "C. Ampere (A)", "D. Volt (V)"], a: "A. Ôm (Ω)", explain: "Điện trở có đơn vị ôm (Ω)." },
	{ q: "Trong mạch nối tiếp, cường độ dòng qua từng điện trở như thế nào?", options: ["A. Bằng nhau", "B. Tỉ lệ với R", "C. Bằng không", "D. Ngược dấu"], a: "A. Bằng nhau", explain: "Dòng trong mạch nối tiếp là như nhau trên mọi phần tử." },
	{ q: "Trong mạch song song, hiệu điện thế giữa hai đầu mỗi nhánh như thế nào?", options: ["A. Bằng nhau", "B. Tỉ lệ với R", "C. Luôn giảm", "D. Bằng không"], a: "A. Bằng nhau", explain: "Mỗi nhánh song song có cùng hiệu điện thế giữa hai đầu nguồn." },
	{ q: "Công suất tiêu thụ của điện trở R là bao nhiêu?", options: ["A. P = V I = I^2 R = V^2 / R", "B. P = m g h", "C. P = Q / t", "D. P = F s"], a: "A. P = V I = I^2 R = V^2 / R", explain: "Công suất có nhiều dạng tuỳ biết biết đại lượng áp dụng." },
	{ q: "Đoạn mạch có nguồn nối tiếp với hai điện trở R1 và R2, điện trở tương đương là?", options: ["A. R = R1 + R2", "B. R = R1 R2 / (R1 + R2)", "C. R = R1 - R2", "D. R = R1 / R2"], a: "A. R = R1 + R2", explain: "Trong nối tiếp, điện trở tương đương là tổng các điện trở." },
	{ q: "Từ thông qua một cuộn dây liên quan đến đại lượng nào?", options: ["A. Mật độ từ thông và diện tích", "B. Khối lượng riêng", "C. Điện trở", "D. Nhiệt dung"], a: "A. Mật độ từ thông và diện tích", explain: "Từ thông Φ = B·S (khi B vuông góc với S)." },
	{ q: "Điện trở suất là đại lượng đặc trưng cho gì?", options: ["A. Khả năng chống dòng điện của vật liệu", "B. Khả năng dẫn nhiệt", "C. Độ dẫn ánh sáng", "D. Khả năng tải trọng"], a: "A. Khả năng chống dòng điện của vật liệu", explain: "Điện trở R = ρ l / S, với ρ là điện trở suất." },
	{ q: "Một bóng đèn ghi 60 W, 220 V tiêu thụ cường độ dòng bao nhiêu?", options: ["A. I = P / V = 0.273 A", "B. 3 A", "C. 60 A", "D. 220 A"], a: "A. I = P / V = 0.273 A", explain: "I = P/V = 60/220 ≈ 0.273 A." },
	{ q: "Để giảm điện trở của một dây dẫn, ta có thể làm gì?", options: ["A. Tăng tiết diện S", "B. Tăng chiều dài l", "C. Dùng vật liệu có ρ lớn", "D. Giảm nhiệt độ luôn"], a: "A. Tăng tiết diện S", explain: "R = ρ l / S nên tăng S làm R giảm." },
	{ q: "Dung kháng của tụ điện thay đổi thế nào theo tần số?", options: ["A. Giảm khi tần số tăng", "B. Tăng khi tần số tăng", "C. Không đổi", "D. Luôn bằng 0"], a: "A. Giảm khi tần số tăng", explain: "Xc = 1/(2π f C), nên tần số tăng Xc giảm." },
	{ q: "Trong mạch DC, tụ điện có vai trò gì sau thời gian dài?", options: ["A. Trở thành hở (không cho dòng DC qua)", "B. Thành dây dẫn", "C. Là nguồn", "D. Hấp thụ nhiệt"], a: "A. Trở thành hở (không cho dòng DC qua)", explain: "Trong trạng thái tĩnh, tụ tích điện, không có dòng DC qua tụ." },
	{ q: "Hiệu điện thế nguồn gọi là suất điện động (emf) ký hiệu là gì?", options: ["A. E hoặc ξ", "B. R", "C. I", "D. P"], a: "A. E hoặc ξ", explain: "Suất điện động thường ký hiệu E hoặc ξ, đơn vị V." },
	{ q: "Khi hai điện trở R1 và R2 mắc song song, điện trở tương đương R_p là?", options: ["A. 1/R_p = 1/R1 + 1/R2", "B. R_p = R1 + R2", "C. R_p = R1 R2", "D. R_p = R1 - R2"], a: "A. 1/R_p = 1/R1 + 1/R2", explain: "Công thức tương đương cho mạch song song." },
	{ q: "Dòng điện cảm ứng sinh ra khi nào?", options: ["A. Khi từ thông biến thiên theo thời gian", "B. Khi mạch tĩnh", "C. Khi có nhiệt độ ổn định", "D. Khi không có nguồn"], a: "A. Khi từ thông biến thiên theo thời gian", explain: "Định luật cảm ứng Faraday: suất điện động cảm ứng tỉ lệ với tốc độ thay đổi từ thông." },
	{ q: "Công thức tính công suất điện tiêu thụ trong thời gian t là gì?", options: ["A. W = P t = V I t", "B. W = m c ΔT", "C. W = F s", "D. W = Q / t"], a: "A. W = P t = V I t", explain: "Công suất P nhân thời gian cho năng lượng tiêu thụ." },
	{ q: "Nguồn điện có nội trở r gây ảnh hưởng gì đến hiệu điện thế mạch ngoài?", options: ["A. Giảm hiệu điện thế ra khi có dòng", "B. Tăng điện áp ra", "C. Không ảnh hưởng", "D. Đảo chiều dòng"], a: "A. Giảm hiệu điện thế ra khi có dòng", explain: "V_ab = E - I r, nên nội trở làm sụt áp khi có dòng." },
	{ q: "Đơn vị cường độ dòng điện là gì?", options: ["A. Ampere (A)", "B. Volt (V)", "C. Ohm (Ω)", "D. Jun (J)"], a: "A. Ampere (A)", explain: "Cường độ dòng điện tính bằng Ampere." },
	{ q: "Khi nối điện trở lớn song song với điện trở nhỏ, phần lớn dòng sẽ chạy qua điện trở nào?", options: ["A. Điện trở nhỏ", "B. Điện trở lớn", "C. Chia đều", "D. Không có dòng"], a: "A. Điện trở nhỏ", explain: "Dòng ưu tiên qua nhánh có điện trở nhỏ hơn (I ∝ 1/R)." },
	{ q: "Định luật Ohm cho đoạn mạch có dạng nào?", options: ["A. V = I R", "B. P = V I", "C. Q = m c ΔT", "D. F = m a"], a: "A. V = I R", explain: "Hiệu điện thế tỉ lệ với cường độ dòng điện qua điện trở." },
	{ q: "Đơn vị của điện trở trong hệ SI là gì?", options: ["A. Ôm (Ω)", "B. Jun (J)", "C. Ampere (A)", "D. Volt (V)"], a: "A. Ôm (Ω)", explain: "Điện trở có đơn vị ôm (Ω)." },
	{ q: "Đơn vị của cường độ dòng điện là gì?", options: ["A. Ampere (A)", "B. Volt (V)", "C. Ohm (Ω)", "D. Jun (J)"], a: "A. Ampere (A)", explain: "Cường độ dòng điện tính bằng Ampere." },
	{ q: "Suất điện động của nguồn ký hiệu thường là gì?", options: ["A. E hoặc ξ", "B. R", "C. I", "D. P"], a: "A. E hoặc ξ", explain: "Suất điện động ký hiệu E hoặc ξ, đơn vị V." },
	{ q: "Công thức tính công suất điện tiêu thụ P bằng các đại lượng V và I là gì?", options: ["A. P = V I", "B. P = m g h", "C. P = Q / t", "D. P = F s"], a: "A. P = V I", explain: "Công suất điện P = V I." },
	{ q: "Trong mạch nối tiếp, cường độ dòng điện qua các phần tử như thế nào?", options: ["A. Bằng nhau", "B. Tỉ lệ với R", "C. Bằng không", "D. Ngược dấu"], a: "A. Bằng nhau", explain: "Dòng trong mạch nối tiếp giống nhau trên mọi phần tử." },
	{ q: "Trong mạch song song, hiệu điện thế giữa hai đầu mỗi nhánh như thế nào?", options: ["A. Bằng nhau", "B. Tỉ lệ với R", "C. Luôn giảm", "D. Bằng không"], a: "A. Bằng nhau", explain: "Mỗi nhánh song song có cùng hiệu điện thế giữa hai đầu nguồn." },
	{ q: "Điện trở suất ρ mô tả điều gì của vật liệu?", options: ["A. Khả năng chống dòng điện", "B. Khả năng dẫn nhiệt", "C. Độ cứng", "D. Mật độ"], a: "A. Khả năng chống dòng điện", explain: "R = ρ l / S; ρ đặc trưng cho vật liệu." },
	{ q: "Công thức tính điện trở tương đương của hai điện trở nối tiếp R1 và R2 là?", options: ["A. R = R1 + R2", "B. R = R1 R2 / (R1 + R2)", "C. R = R1 - R2", "D. R = R1 / R2"], a: "A. R = R1 + R2", explain: "Trong nối tiếp, điện trở tương đương là tổng các điện trở." },
	{ q: "Giải thích tại sao khi tăng điện trở mạch thì cường độ dòng giảm (với nguồn giữ E không đổi).", options: ["A. Vì I = E / R", "B. Vì P tăng", "C. Vì V tăng", "D. Vì Q giảm"], a: "A. Vì I = E / R", explain: "Với suất điện động cố định, I tỉ lệ nghịch với R." },
	{ q: "Vì sao nối song song nhiều bóng đèn giúp sáng độc lập khi một bóng hỏng?", options: ["A. Vì mỗi nhánh có hiệu điện thế giống nhau", "B. Vì tổng điện trở giảm", "C. Vì nguồn mạnh hơn", "D. Vì dòng chia đều"], a: "A. Vì mỗi nhánh có hiệu điện thế giống nhau", explain: "Mỗi bóng nhận hiệu điện thế nguồn; một nhánh hỏng không ảnh hưởng các nhánh khác." },
	{ q: "Giải thích mối liên hệ giữa công suất, điện áp và điện trở P = V^2 / R khi cần giảm tiêu thụ năng lượng của tải", options: ["A. Tăng R giảm P với V cố định", "B. Giảm R giảm P", "C. P không liên quan R", "D. P tăng khi R tăng"], a: "A. Tăng R giảm P với V cố định", explain: "P = V^2/R nên khi R tăng P giảm nếu V không đổi." },
	{ q: "Tại sao tụ điện không cho dòng điện một chiều ổn định qua nó sau một thời gian dài?", options: ["A. Vì tụ tích điện và trở thành hở trong DC ổn định", "B. Vì tụ dẫn tốt DC", "C. Vì tụ là nguồn", "D. Vì tụ làm sụt áp"], a: "A. Vì tụ tích điện và trở thành hở trong DC ổn định", explain: "Tụ tích điện cho tới khi hiệu điện thế ổn định; sau đó không có dòng DC qua tụ." },
	{ q: "Giải thích vì sao điện trở suất phụ thuộc vật liệu và nhiệt độ", options: ["A. Vì cấu trúc nguyên tử và va chạm electron", "B. Vì kích thước dây", "C. Vì chiều dài thay đổi", "D. Vì điện áp"], a: "A. Vì cấu trúc nguyên tử và va chạm electron", explain: "Tính dẫn điện chịu ảnh hưởng bởi cấu trúc vật liệu và tương tác electron-photon." },
	{ q: "Một bóng đèn 60 W, 120 V; nếu nối vào 240 V thì chuyện gì xảy ra?", options: ["A. Bóng cháy do công suất tăng", "B. Bóng mờ đi", "C. Không đổi", "D. Bóng sáng yếu hơn"], a: "A. Bóng cháy do công suất tăng", explain: "P = V^2/R; V tăng → P tăng nhiều, có thể làm cháy bóng dây tóc." },
	{ q: "Tại sao trong mạch nối tiếp, mất điện áp tỉ lệ với điện trở từng phần?", options: ["A. Vì I là như nhau nên V_i = I R_i", "B. Vì V chia đều luôn", "C. Vì R không ảnh hưởng V", "D. Vì nguồn yếu"], a: "A. Vì I là như nhau nên V_i = I R_i", explain: "Điện áp rơi trên mỗi điện trở bằng I R_i khi I giống nhau." },
	{ q: "Giải thích ý nghĩa của nội trở nguồn đối với hiệu điện thế mạch ngoài", options: ["A. Nội trở làm giảm U_mạch theo I r", "B. Nội trở làm tăng U_mạch", "C. Nội trở không ảnh hưởng", "D. Nội trở biến thành điện năng"], a: "A. Nội trở làm giảm U_mạch theo I r", explain: "V_out = E - I r; nội trở gây sụt áp khi có dòng." },
	{ q: "Lý do phải chọn tiết diện dây lớn khi truyền công suất lớn trên khoảng cách dài là gì?", options: ["A. Giảm tổn thất I^2 R", "B. Tăng điện trở", "C. Tăng điện áp rò", "D. Giảm điện áp nguồn"], a: "A. Giảm tổn thất I^2 R", explain: "Tăng tiết diện S giảm R nên giảm tổn thất công suất trên đường dây." },
	{ q: "Một mạch có nguồn 12 V nối với điện trở R = 6 Ω. Tính cường độ dòng I và công suất tiêu thụ P.", options: ["A. I=2 A, P=24 W", "B. I=0.5 A, P=6 W", "C. I=72 A, P=864 W", "D. I=2 A, P=12 W"], a: "A. I=2 A, P=24 W", explain: "I=V/R=12/6=2 A; P=V I=12×2=24 W." },
	{ q: "Hai điện trở R1=4 Ω và R2=6 Ω mắc nối tiếp vào 10 V. Tính điện trở tương đương và cường độ dòng mạch.", options: ["A. R=10 Ω, I=1 A", "B. R=2.4 Ω, I=4.17 A", "C. R=24 Ω, I=0.417 A", "D. R=10 Ω, I=0.1 A"], a: "A. R=10 Ω, I=1 A", explain: "R_eq=4+6=10 Ω; I=V/R=10/10=1 A." },
	{ q: "Hai điện trở R1=4 Ω và R2=6 Ω mắc song song vào 12 V. Tính R_eq và công suất tiêu thụ toàn mạch.", options: ["A. R_eq=2.4 Ω, P=60 W", "B. R_eq=10 Ω, P=14.4 W", "C. R_eq=2.4 Ω, P=60 W", "D. R_eq=2.4 Ω, P=60 W"], a: "A. R_eq=2.4 Ω, P=60 W", explain: "1/R=1/4+1/6=5/12→R=12/5=2.4 Ω; I=12/2.4=5 A; P=V I=12×5=60 W." },
	{ q: "Một dụng cụ tiêu thụ 1500 W khi nối vào 230 V; tính cường độ dòng qua thiết bị và điện trở trong trạng thái hoạt động.", options: ["A. I≈6.52 A, R≈35.3 Ω", "B. I=15 A, R=15 Ω", "C. I=0.652 A, R=352 Ω", "D. I=65.2 A, R=3.53 Ω"], a: "A. I≈6.52 A, R≈35.3 Ω", explain: "I=P/V=1500/230≈6.52 A; R=V/I≈230/6.52≈35.3 Ω." },
	{ q: "Một dòng điện 2 A chạy qua mạch trong 3 phút. Tính điện lượng tích lũy Q.", options: ["A. Q=360 C", "B. Q=6 C", "C. Q=100 C", "D. Q=720 C"], a: "A. Q=360 C", explain: "Q=I t = 2×180 = 360 C." },
	{ q: "Một tụ C=100 μF được nạp đến 12 V; tính năng lượng tích trữ trong tụ (J).", options: ["A. 0.5×C×V^2 = 7.2×10^-3 J", "B. 72 J", "C. 0.72 J", "D. 720 J"], a: "A. 0.5×C×V^2 = 7.2×10^-3 J", explain: "E=1/2 C V^2 = 0.5×100e-6×144 = 7.2e-3 J." },
	{ q: "Một mạch có nguồn E=9 V, nội trở r=1 Ω, nối tải R=8 Ω. Tính I và hiệu điện thế ra mạch ngoài.", options: ["A. I=1 A, V_out=8 V", "B. I=9 A, V_out=72 V", "C. I=0.5 A, V_out=4.5 V", "D. I=1 A, V_out=9 V"], a: "A. I=1 A, V_out=8 V", explain: "I=E/(R+r)=9/9=1 A; V_out=I R=1×8=8 V." },
	{ q: "Một dây dẫn có chiều dài 100 m, tiết diện 1 mm^2, điện trở suất ρ = 1.7×10^-8 Ω·m. Tính điện trở xấp xỉ của dây.", options: ["A. R≈1.7 Ω", "B. R≈0.17 Ω", "C. R≈17 Ω", "D. R≈0.0017 Ω"], a: "A. R≈1.7 Ω", explain: "R=ρ l / S =1.7e-8×100 / 1e-6 =1.7 Ω." },
];
// Chuyên đề 4: ĐIỆN TỪ
const questions_ly_topic4 = [
	{ q: "Lực Lorenx tác dụng lên điện tích q chuyển động trong từ trường B có dạng nào?", options: ["A. F = q v × B", "B. F = q E", "C. F = m a", "D. F = k q1 q2 / r^2"], a: "A. F = q v × B", explain: "Lực từ vuông góc với vận tốc và vectơ từ; phương trình mũi tên chéo." },
	{ q: "Một dây dẫn dài mang dòng I đặt trong từ trường B chịu lực như thế nào?", options: ["A. F = I L × B", "B. F = q v B", "C. F = m g", "D. F = 0"], a: "A. F = I L × B", explain: "Lực lên đoạn dây dài L trong từ trường: F = I (L × B)." },
	{ q: "Định luật cảm ứng Faraday phát biểu điều gì?", options: ["A. Suất điện động cảm ứng tỉ lệ với tốc độ biến thiên từ thông", "B. Điện trở tỉ lệ với chiều dài", "C. Ánh sáng khúc xạ", "D. Nhiệt lượng truyền qua dây"], a: "A. Suất điện động cảm ứng tỉ lệ với tốc độ biến thiên từ thông", explain: "ε = - dΦ/dt (dấu - là Lenz)." },
	{ q: "Nguyên lý hoạt động của máy biến áp dựa trên hiện tượng nào?", options: ["A. Cảm ứng điện từ giữa hai cuộn dây", "B. Khúc xạ ánh sáng", "C. Sự truyền nhiệt", "D. Dòng điện tĩnh"], a: "A. Cảm ứng điện từ giữa hai cuộn dây", explain: "Thay đổi từ thông trong cuộn sơ cấp gây suất cảm ứng ở thứ cấp." },
	{ q: "Định luật Lenx (Lenz) quy định chiều của suất điện động cảm ứng như thế nào?", options: ["A. Chống lại sự thay đổi từ thông gây ra nó", "B. Hỗ trợ sự thay đổi từ thông", "C. Ngẫu nhiên", "D. Luôn dương"], a: "A. Chống lại sự thay đổi từ thông gây ra nó", explain: "Dấu '−' trong Faraday phản ánh nguyên lý Lenz." },
	{ q: "Nam châm và cuộn dây khi tương tác tạo nên gì cơ bản?", options: ["A. Động cơ điện", "B. Pin mặt trời", "C. Điện trở", "D. Quang điện"], a: "A. Động cơ điện", explain: "Tương tác giữa từ trường và dòng tạo ra momen quay; nguyên lý động cơ." },
	{ q: "Từ trường quanh dây dẫn thẳng dài có biểu thức thế nào cho trường B?", options: ["A. B = μ0 I / (2π r)", "B. B = I / (ε0 r)", "C. B = k q / r^2", "D. B = ρ l / S"], a: "A. B = μ0 I / (2π r)", explain: "Biểu thức Ampere cho dây thẳng dài." },
	{ q: "Một khung dây quay trong từ trường tạo ra dòng cảm ứng; hiện tượng này gọi là?", options: ["A. Phát điện (máy phát)", "B. Động cơ", "C. Khúc xạ", "D. Sự phân cực"], a: "A. Phát điện (máy phát)", explain: "Máy phát chuyển động cơ học thành suất điện động nhờ hiện tượng cảm ứng." },
	{ q: "Từ thông Φ có đơn vị là gì trong hệ SI?", options: ["A. Weber (Wb)", "B. Tesla (T)", "C. Volt (V)", "D. Ampere (A)"], a: "A. Weber (Wb)", explain: "Đơn vị từ thông là Weber (Wb); Tesla là đơn vị mật độ từ thông." },
	{ q: "Độ lớn lực từ tác dụng lên hạt điện tích phụ thuộc vào yếu tố nào?", options: ["A. Giá trị q, v và B và góc giữa v và B", "B. Khối lượng và nhiệt độ", "C. Hiệu điện thế", "D. Độ dẫn điện"], a: "A. Giá trị q, v và B và góc giữa v và B", explain: "F = q v B sinθ nên phụ thuộc vào các đại lượng này." },
	{ q: "Trong bộ chuyển mạch, cảm ứng tự là gì?", options: ["A. Tính chất của cuộn dây tạo suất điện động do biến thiên dòng qua chính nó", "B. Điện trở suất", "C. Dung kháng", "D. Tụ điện"], a: "A. Tính chất của cuộn dây tạo suất điện động do biến thiên dòng qua chính nó", explain: "Cảm ứng tự gây suất tự cảm ε = - L dI/dt." },
	{ q: "Lực từ lên điện tích đứng yên trong từ trường tĩnh là bao nhiêu?", options: ["A. Bằng 0", "B. Bằng q v B", "C. Bằng q E", "D. Bằng m a"], a: "A. Bằng 0", explain: "F = q v × B; nếu v = 0 thì lực từ bằng 0." },
	{ q: "Từ trường trong lòng solenoid (ống dây dài) xấp xỉ có cường độ bằng?", options: ["A. B = μ0 n I", "B. B = μ0 I / (2π r)", "C. B = k q / r^2", "D. B = E / d"], a: "A. B = μ0 n I", explain: "n là số vòng trên đơn vị chiều dài; biểu thức cho solenoid dài." },
	{ q: "Biến áp lý tưởng thay đổi điện áp tỉ lệ với tỉ số nào?", options: ["A. Tỉ số số vòng dây: V2/V1 = N2/N1", "B. Tỉ số điện trở", "C. Tỉ số dòng", "D. Tỉ số khối lượng"], a: "A. Tỉ số số vòng dây: V2/V1 = N2/N1", explain: "Biến áp lý tưởng tăng/giảm điện áp theo tỉ số vòng dây." },
	{ q: "Một dây dẫn cắt đường sức từ với vận tốc v thì suất điện động cảm ứng tỉ lệ với đại lượng nào?", options: ["A. v·B·l", "B. I·R", "C. m·a", "D. Q·t"], a: "A. v·B·l", explain: "Suất điện động cảm ứng trong dây di chuyển ε = B l v khi vuông góc với từ trường." },
	{ q: "Trong hiện tượng tự cảm, hệ số tự cảm L phụ thuộc vào điều gì?", options: ["A. Hình dạng cuộn dây, số vòng và vật liệu lõi", "B. Khối lượng nguyên tử", "C. Nhiệt độ môi trường", "D. Điện áp nguồn"], a: "A. Hình dạng cuộn dây, số vòng và vật liệu lõi", explain: "L phụ thuộc cấu trúc cuộn, lõi ferromagnetic làm tăng L." },
	{ q: "Nguyên tắc hoạt động của động cơ điện là chuyển đổi giữa hai dạng năng lượng nào?", options: ["A. Điện năng thành cơ năng", "B. Nhiệt năng thành hóa năng", "C. Quang năng thành cơ năng", "D. Cơ năng thành quang năng"], a: "A. Điện năng thành cơ năng", explain: "Động cơ chuyển năng lượng điện thành cơ thông qua tương tác từ trường." },
	{ q: "Hiện tượng nhiễu xạ từ xuất hiện khi nào?", options: ["A. Khi kích thước chướng ngại tương tự bước sóng", "B. Khi không có từ trường", "C. Khi tần số bằng 0", "D. Khi dây dẫn bị đứt"], a: "A. Khi kích thước chướng ngại tương tự bước sóng", explain: "Nhiễu xạ xảy ra khi kích thước vật cản tương đương bước sóng của sóng." },
	{ q: "Lực Lorentz tác dụng lên điện tích q chuyển động trong từ trường B có dạng nào?", options: ["A. F = q v × B", "B. F = q E", "C. F = m a", "D. F = k q1 q2 / r^2"], a: "A. F = q v × B", explain: "Lực từ vuông góc với vận tốc và vectơ từ." },
	{ q: "Đơn vị của từ thông là gì?", options: ["A. Weber (Wb)", "B. Tesla (T)", "C. Volt (V)", "D. Ampere (A)"], a: "A. Weber (Wb)", explain: "Đơn vị từ thông là Weber." },
	{ q: "Định luật Faraday liên hệ suất điện động cảm ứng với đại lượng nào?", options: ["A. Tốc độ biến thiên từ thông", "B. Điện trở", "C. Nhiệt độ", "D. Khối lượng"], a: "A. Tốc độ biến thiên từ thông", explain: "ε = - dΦ/dt." },
	{ q: "Nguyên lý biến áp dựa trên hiện tượng gì?", options: ["A. Cảm ứng điện từ giữa hai cuộn dây", "B. Phản xạ ánh sáng", "C. Dẫn nhiệt", "D. Sự khúc xạ"], a: "A. Cảm ứng điện từ giữa hai cuộn dây", explain: "Biến áp truyền năng lượng điện bằng cảm ứng từ." },
	{ q: "Đoạn dây mang dòng đặt trong từ trường chịu lực tính theo công thức nào?", options: ["A. F = I L × B", "B. F = q v B", "C. F = m g", "D. F = 0"], a: "A. F = I L × B", explain: "Lực lên dây phụ thuộc I, chiều dây, và B." },
	{ q: "Một điện tích đứng yên trong từ trường chịu lực bằng bao nhiêu?", options: ["A. 0", "B. q v B", "C. q E", "D. m a"], a: "A. 0", explain: "F = q v × B; nếu v = 0 thì F = 0." },
	{ q: "Đơn vị của mật độ từ trường B là gì?", options: ["A. Tesla (T)", "B. Weber (Wb)", "C. Volt (V)", "D. Ampere (A)"], a: "A. Tesla (T)", explain: "Tesla là đơn vị mật độ từ thông." },
	{ q: "Hiện tượng tự cảm xảy ra trong phần tử nào?", options: ["A. Cuộn dây", "B. Tụ điện", "C. Điện trở", "D. Pin"], a: "A. Cuộn dây", explain: "Tự cảm là tính chất của cuộn dây tạo ε = -L dI/dt." },
	{ q: "Dấu âm trong công thức Faraday (ε = -dΦ/dt) biểu thị nguyên lý nào?", options: ["A. Nguyên lý Lenz", "B. Nguyên lý siêu dẫn", "C. Nguyên lý khúc xạ", "D. Nguyên lý phản xạ"], a: "A. Nguyên lý Lenz", explain: "Dấu âm cho biết suất điện động cảm ứng chống lại nguyên nhân tạo ra nó." },
	{ q: "Giải thích vì sao khi tăng số vòng dây của cuộn sơ cấp trong biến áp thì điện áp ở thứ cấp thay đổi thế nào?", options: ["A. Tăng tỉ lệ với số vòng", "B. Giảm", "C. Không đổi", "D. Ngẫu nhiên"], a: "A. Tăng tỉ lệ với số vòng", explain: "V2/V1 = N2/N1 cho biến áp lý tưởng." },
	{ q: "Tại sao máy phát điện quay tạo ra suất điện động xoay chiều?", options: ["A. Vì từ thông trong cuộn dây biến thiên tuần hoàn", "B. Vì điện trở thay đổi", "C. Vì nhiệt độ tăng", "D. Vì trọng lực"], a: "A. Vì từ thông trong cuộn dây biến thiên tuần hoàn", explain: "Khi khung dây quay, Φ biến thiên → ε cảm ứng xoay chiều." },
	{ q: "Giải thích nguyên lý hoạt động của động cơ điện", options: ["A. Dòng điện trong cuộn dây tương tác với từ trường tạo momen quay", "B. Dòng điện sinh nhiệt", "C. Dòng điện biến thành ánh sáng", "D. Dòng điện làm lạnh"], a: "A. Dòng điện trong cuộn dây tương tác với từ trường tạo momen quay", explain: "Tương tác lực từ tạo ra momen → quay trục." },
	{ q: "Tại sao lõi sắt trong cuộn làm tăng hệ số tự cảm?", options: ["A. Do tăng mật độ từ trường trong lõi", "B. Do tăng điện trở", "C. Do giảm diện tích", "D. Do nhiệt độ"], a: "A. Do tăng mật độ từ trường trong lõi", explain: "Vật liệu ferromagnetic làm tăng khả năng dẫn từ và L tăng." },
	{ q: "Giải thích nguyên tắc hoạt động của cảm biến Hall", options: ["A. Dòng điện theo phương vuông góc với B tạo hiệu điện thế Hall", "B. Dòng chạy làm nóng cảm biến", "C. Cảm biến hấp thụ ánh sáng", "D. Không liên quan từ trường"], a: "A. Dòng điện theo phương vuông góc với B tạo hiệu điện thế Hall", explain: "Hiệu điện thế Hall tỉ lệ với B và I." },
	{ q: "Tại sao cần cách điện giữa hai cuộn biến áp?", options: ["A. Để truyền năng lượng bằng cảm ứng chứ không truyền dòng trực tiếp", "B. Để tăng dòng điện", "C. Để tản nhiệt", "D. Để giảm công suất"], a: "A. Để truyền năng lượng bằng cảm ứng chứ không truyền dòng trực tiếp", explain: "Cách điện ngăn truyền dòng rò, chỉ còn biến đổi từ thông." },
	{ q: "Giải thích sự khác nhau giữa từ trường tĩnh và từ trường biến thiên trong việc cảm ứng dòng điện", options: ["A. Chỉ từ trường biến thiên mới tạo suất điện động cảm ứng", "B. Từ trường tĩnh tạo nhiều điện hơn", "C. Không khác", "D. Từ trường tĩnh luôn mạnh hơn"], a: "A. Chỉ từ trường biến thiên mới tạo suất điện động cảm ứng", explain: "ε = - dΦ/dt; nếu Φ không đổi thì ε=0." },
	{ q: "Tại sao dây dẫn chuyển động cắt đường sức tạo ra suất điện động tỉ lệ với vBL?", options: ["A. Vì số đường sức bị cắt tỉ lệ với v và B và chiều dây", "B. Vì điện trở tăng", "C. Vì chiều dài giảm", "D. Vì nhiệt độ"], a: "A. Vì số đường sức bị cắt tỉ lệ với v và B và chiều dây", explain: "ε = B l v khi vuông góc với B." },
	{ q: "Giải thích vì sao máy biến áp không hoạt động với nguồn một chiều", options: ["A. Vì cần thay đổi từ thông để cảm ứng suất điện động", "B. Vì DC có tần số cao", "C. Vì DC mạnh hơn AC", "D. Vì DC làm nóng lõi"], a: "A. Vì cần thay đổi từ thông để cảm ứng suất điện động", explain: "Biến áp yêu cầu Φ biến thiên; DC không tạo Φ biến thiên (trừ lúc chuyển mạch)." },
	{ q: "Một dây dẫn dài l = 0.5 m, đặt vuông góc với B = 0.2 T, dòng I = 3 A. Tính lực tác dụng lên dây.", options: ["A. F = I l B = 0.3 N", "B. F = 0.03 N", "C. F = 3 N", "D. F = 30 N"], a: "A. F = I l B = 0.3 N", explain: "F = I l B = 3×0.5×0.2 = 0.3 N." },
	{ q: "Một vòng dây diện tích S = 0.01 m^2 nằm trong B = 0.5 T; từ thông ban đầu = 0; nếu B tăng đều lên 0.5 T trong 0.2 s, tính suất điện động trung bình (chu trình một vòng, N=1).", options: ["A. ε = ΔΦ/Δt = (0.5×0.01)/0.2 = 0.025 V", "B. ε = 0.0025 V", "C. ε = 2.5 V", "D. ε = 0.25 V"], a: "A. ε = ΔΦ/Δt = (0.5×0.01)/0.2 = 0.025 V", explain: "ΔΦ = B S = 0.5×0.01; ε = ΔΦ/Δt." },
	{ q: "Biến áp lý tưởng có N1 = 100 vòng, N2 = 200 vòng; nếu U1 = 120 V, tính U2.", options: ["A. U2 = 240 V", "B. U2 = 60 V", "C. U2 = 120 V", "D. U2 = 12 V"], a: "A. U2 = 240 V", explain: "U2/U1 = N2/N1 = 2 → U2 = 240 V." },
	{ q: "Một cuộn dây có hệ số tự cảm L = 50 mH; nếu dòng thay đổi với tốc độ dI/dt = 200 A/s, tính suất tự cảm ε.", options: ["A. ε = -L dI/dt = -10 V", "B. ε = 10 V", "C. ε = -0.01 V", "D. ε = 0.01 V"], a: "A. ε = -L dI/dt = -10 V", explain: "ε = -0.05×200 = -10 V (L=0.05 H)." },
	{ q: "Một hạt electron (q = -1.6e-19 C) chuyển động với v = 10^6 m/s vuông góc B = 0.01 T; tính độ lớn lực Lorenx.", options: ["A. F = q v B ≈ 1.6e-15 N", "B. F ≈ 1.6e-13 N", "C. F ≈ 1.6e-19 N", "D. F ≈ 1.6e-9 N"], a: "A. F = q v B ≈ 1.6e-15 N", explain: "|F| = |q| v B = 1.6e-19×1e6×0.01 = 1.6e-15 N." },
	{ q: "Một dây dẫn dài 1 m cắt từ trường B = 0.2 T với vận tốc v = 2 m/s; tính suất điện động ε giữa hai đầu dây (vuông góc).", options: ["A. ε = B l v = 0.4 V", "B. ε = 0.04 V", "C. ε = 4 V", "D. ε = 40 V"], a: "A. ε = B l v = 0.4 V", explain: "ε = B l v = 0.2×1×2 = 0.4 V." },
	{ q: "Một động cơ có hệ số công suất cơ học đã cho, nếu cần công suất cơ 100 W và hiệu suất 80%, công suất điện tiêu thụ là bao nhiêu?", options: ["A. 125 W", "B. 80 W", "C. 100 W", "D. 200 W"], a: "A. 125 W", explain: "P_in = P_out / η = 100 / 0.8 = 125 W." },
	{ q: "Một cuộn cảm L=0.1 H nối vào mạch có dI/dt = 50 A/s; tính năng lượng từ trường lưu trữ khi I = 2 A.", options: ["A. E = 1/2 L I^2 = 0.2 J", "B. E = 0.02 J", "C. E = 2 J", "D. E = 0.001 J"], a: "A. E = 1/2 L I^2 = 0.2 J", explain: "E = 0.5×0.1×4 = 0.2 J." },
	{ q: "Một dây dẫn dài 0.2 m mang dòng I=5 A đặt trong B=0.3 T vuông góc; tính lực từ tác dụng lên dây.", options: ["A. F = I l B = 0.3 N", "B. F = 3 N", "C. F = 0.03 N", "D. F = 30 N"], a: "A. F = I l B = 0.3 N", explain: "F = 5×0.2×0.3 = 0.3 N." }
];
		// Chuyên đề 5: NĂNG LƯỢNG VỚI CUỘC SỐNG
const questions_ly_topic5 = [
	{ q: "Năng lượng dạng nào chủ yếu được giải phóng khi đốt nhiên liệu hóa thạch?", options: ["A. Nhiệt năng", "B. Điện năng", "C. Quang năng", "D. Cơ năng"], a: "A. Nhiệt năng", explain: "Đốt cháy nhiên liệu chuyển hóa năng lượng hóa học thành nhiệt năng." },
	{ q: "Hiệu suất của thiết bị nào sau đây biểu thị phần năng lượng hữu ích thu được?", options: ["A. Máy", "B. Bóng đèn tắt", "C. Vật không hoạt động", "D. Điện trở hở"], a: "A. Máy", explain: "Hiệu suất = năng lượng/công có ích chia cho năng lượng đầu vào." },
	{ q: "Nguồn năng lượng tái tạo nào sau đây dựa trên năng lượng mặt trời?", options: ["A. Pin mặt trời (quang điện)", "B. Dầu mỏ", "C. Than đá", "D. Khí tự nhiên"], a: "A. Pin mặt trời (quang điện)", explain: "Pin quang điện chuyển quang năng thành điện năng, là nguồn tái tạo." },
	{ q: "Nhiệt dung riêng cho biết điều gì?", options: ["A. Nhiệt cần để tăng 1°C cho 1 kg vật", "B. Khối lượng riêng", "C. Độ dẫn điện", "D. Áp suất"], a: "A. Nhiệt cần để tăng 1°C cho 1 kg vật", explain: "Q = m c ΔT, c là nhiệt dung riêng." },
	{ q: "Thế năng nhiệt phụ thuộc vào yếu tố nào của vật?", options: ["A. Nhiệt độ và khối lượng", "B. Hình dạng", "C. Mật độ", "D. Tốc độ ánh sáng"], a: "A. Nhiệt độ và khối lượng", explain: "Năng lượng nội nhiệt tỉ lệ với m và ΔT." },
	{ q: "Trao đổi nhiệt bằng ba cơ chế chính; cơ chế nào không phải là một trong số đó?", options: ["A. Phản xạ", "B. Dẫn nhiệt", "C. Đối lưu", "D. Bức xạ"], a: "A. Phản xạ", explain: "Ba cơ chế: dẫn nhiệt, đối lưu và bức xạ; phản xạ không phải cơ chế truyền nhiệt chính." },
	{ q: "Một tấm cách nhiệt tốt có đặc điểm nào?", options: ["A. Hệ số dẫn nhiệt nhỏ", "B. Hệ số dẫn nhiệt lớn", "C. Dẫn điện tốt", "D. Độ dày luôn lớn"], a: "A. Hệ số dẫn nhiệt nhỏ", explain: "Vật liệu cách nhiệt có hệ số dẫn nhiệt thấp (k nhỏ)." },
	{ q: "Trong năng lượng gió, turbine gió chuyển đổi năng lượng nào thành điện năng?", options: ["A. Cơ năng của gió", "B. Nhiệt năng của không khí", "C. Ánh sáng Mặt Trời", "D. Dòng điện"], a: "A. Cơ năng của gió", explain: "Cánh quạt nhận năng lượng động học (cơ năng) của gió, rồi máy phát thành điện." },
	{ q: "Nhiệt lượng cần để làm tan một chất rắn là bao nhiêu liên quan đến nhiệt nóng chảy?", options: ["A. Q = m L_f", "B. Q = m c ΔT", "C. Q = P t", "D. Q = m g h"], a: "A. Q = m L_f", explain: "Để làm tan cần nhiệt nóng chảy L_f nhân với khối lượng." },
	{ q: "Biện pháp nào sau đây giúp tiết kiệm năng lượng trong gia đình?", options: ["A. Tăng cách nhiệt và dùng thiết bị hiệu suất cao", "B. Mở cửa khi bật điều hòa", "C. Dùng bóng dây tóc", "D. Để thiết bị chạy suốt ngày"], a: "A. Tăng cách nhiệt và dùng thiết bị hiệu suất cao", explain: "Cách nhiệt tốt và thiết bị hiệu quả giảm tiêu thụ năng lượng." },
	{ q: "Cách nào hiệu quả để giảm thất thoát nhiệt qua cửa sổ?", options: ["A. Dùng kính hai lớp và rèm cách nhiệt", "B. Mở cửa sổ nhiều hơn", "C. Sử dụng cửa mỏng", "D. Sơn cửa màu tối"], a: "A. Dùng kính hai lớp và rèm cách nhiệt", explain: "Kính hai lớp giảm truyền nhiệt, rèm giảm bức xạ và đối lưu." },
	{ q: "Đơn vị đo năng lượng tiêu thụ điện trong gia đình thường là gì?", options: ["A. kWh", "B. W", "C. V", "D. A"], a: "A. kWh", explain: "Kilowatt-giờ (kWh) là đơn vị năng lượng tiêu thụ điện thường dùng." },
	{ q: "Năng lượng địa nhiệt là nguồn năng lượng phát sinh do gì?", options: ["A. Nhiệt bên trong Trái Đất", "B. Nhiệt Mặt Trời", "C. Gió", "D. Sóng biển"], a: "A. Nhiệt bên trong Trái Đất", explain: "Địa nhiệt tận dụng nhiệt từ lõi/mantle Trái Đất." },
	{ q: "Hiệu suất cao hơn của một động cơ nhiệt có ý nghĩa gì?", options: ["A. Thực hiện nhiều công hữu ích hơn trên cùng năng lượng đầu vào", "B. Tạo ra nhiều nhiệt hơn", "C. Tiêu thụ nhiều nhiên liệu hơn", "D. Tăng khối lượng máy"], a: "A. Thực hiện nhiều công hữu ích hơn trên cùng năng lượng đầu vào", explain: "Hiệu suất = công có ích / năng lượng đầu vào." },
	{ q: "Năng lượng sinh học (bioenergy) thường được tạo ra từ đâu?", options: ["A. Sinh khối như cây, rác hữu cơ", "B. Nhiên liệu hóa thạch", "C. Từ trường", "D. Ánh sáng nhân tạo"], a: "A. Sinh khối như cây, rác hữu cơ", explain: "Sinh khối được đốt hoặc chuyển hoá thành nhiên liệu sinh học." },
	{ q: "Hiện tượng hiệu ứng nhà kính chủ yếu do khí nào gây nên?", options: ["A. CO2 và các khí nhà kính khác", "B. O2", "C. N2", "D. H2"], a: "A. CO2 và các khí nhà kính khác", explain: "CO2, CH4, N2O... làm tăng bức xạ trở lại bề mặt, gây ấm lên." },
	{ q: "Để giảm tiêu thụ năng lượng trong chiếu sáng, nên chọn loại bóng nào?", options: ["A. LED", "B. Bóng dây tóc", "C. Bóng halogen", "D. Bóng pha công suất lớn"], a: "A. LED", explain: "LED có hiệu suất quang cao và tiêu thụ điện thấp." },
	{ q: "Năng lượng tái tạo so với nhiên liệu hóa thạch có đặc điểm chủ yếu nào?", options: ["A. Tái tạo được và thường ít phát thải CO2", "B. Không tái tạo", "C. Luôn rẻ hơn", "D. Luôn hiệu suất cao hơn"], a: "A. Tái tạo được và thường ít phát thải CO2", explain: "Tái tạo giảm phụ thuộc dầu mỏ và phát thải nhà kính." },
	{ q: "Trong thiết kế hệ năng lượng, hệ số công suất (power factor) thấp gây hậu quả gì cho lưới?", options: ["A. Tăng dòng hiệu dụng, tổn thất lớn hơn", "B. Giảm hiệu điện thế", "C. Tăng tần số", "D. Không ảnh hưởng"], a: "A. Tăng dòng hiệu dụng, tổn thất lớn hơn", explain: "Power factor thấp làm tăng dòng dẫn tới tổn thất I^2R cao." },
	{ q: "Năng lượng nào chủ yếu được dùng khi vận hành bếp điện từ?", options: ["A. Điện năng", "B. Nhiệt năng ngay lập tức", "C. Quang năng", "D. Cơ năng"], a: "A. Điện năng", explain: "Bếp điện từ sử dụng điện năng để tạo từ trường và sinh nhiệt trong nồi." },
	{ q: "Đơn vị năng lượng thường dùng trong hoá học và vật lý là gì?", options: ["A. Joule (J)", "B. Watt (W)", "C. Volt (V)", "D. Ampere (A)"], a: "A. Joule (J)", explain: "Joule là đơn vị năng lượng trong SI." },
	{ q: "Nguồn năng lượng tái tạo nào dựa trên chuyển động nước?", options: ["A. Thủy điện", "B. Dầu mỏ", "C. Than", "D. Khí tự nhiên"], a: "A. Thủy điện", explain: "Thủy điện chuyển động của nước thành điện năng qua tua-bin." },
	{ q: "kWh là viết tắt của đại lượng nào?", options: ["A. Kilowatt-giờ", "B. Kilowatt", "C. Kilojoule", "D. Kilowatt/giây"], a: "A. Kilowatt-giờ", explain: "kWh là đơn vị năng lượng (công suất × thời gian)." },
	{ q: "Nhiệt dung riêng (c) cho biết điều gì?", options: ["A. Nhiệt cần để tăng 1°C cho 1 kg", "B. Khối lượng riêng", "C. Độ dẫn điện", "D. Áp suất"], a: "A. Nhiệt cần để tăng 1°C cho 1 kg", explain: "Q = m c ΔT." },
	{ q: "Hiệu suất của thiết bị cho biết gì?", options: ["A. Tỷ lệ năng lượng đầu vào biến thành công có ích", "B. Tổng năng lượng tiêu thụ", "C. Tốc độ tiêu thụ", "D. Không có ý nghĩa"], a: "A. Tỷ lệ năng lượng đầu vào biến thành công có ích", explain: "Hiệu suất = công có ích / năng lượng đầu vào." },
	{ q: "Nguồn năng lượng nào thường phát thải CO2 cao nhất khi đốt?", options: ["A. Than", "B. Gió", "C. Năng lượng mặt trời", "D. Thủy điện"], a: "A. Than", explain: "Đốt than giải phóng nhiều CO2 so với các nguồn tái tạo." },
	{ q: "Thiết bị nào tiêu thụ ít năng lượng nhất cho cùng ánh sáng phát ra?", options: ["A. LED", "B. Bóng dây tóc", "C. Bóng halogen", "D. Bóng CFL"], a: "A. LED", explain: "LED có hiệu suất quang cao, tiêu thụ ít điện hơn." },
	{ q: "Năng lượng sinh học (bioenergy) thường sản xuất từ nguồn nào?", options: ["A. Sinh khối (gỗ, rác hữu cơ)", "B. Dầu mỏ", "C. Khí thiên nhiên", "D. Năng lượng hạt nhân"], a: "A. Sinh khối (gỗ, rác hữu cơ)", explain: "Sinh khối được chuyển hoá thành nhiệt hoặc nhiên liệu sinh học." },
	{ q: "Tại sao cách nhiệt tốt giúp giảm tiêu thụ năng lượng cho sưởi ấm?", options: ["A. Giảm truyền nhiệt ra môi trường", "B. Tăng nhiệt tạo ra", "C. Giảm thể tích phòng", "D. Thay đổi nhiệt dung"], a: "A. Giảm truyền nhiệt ra môi trường", explain: "Cách nhiệt giảm dòng nhiệt ra ngoài, nên ít năng lượng cần để giữ nhiệt." },
	{ q: "Giải thích vì sao năng lượng mặt trời là nguồn tái tạo", options: ["A. Vì Mặt Trời cung cấp năng lượng liên tục trong thời gian dài", "B. Vì nó là nguồn hữu hạn", "C. Vì nó tạo CO2", "D. Vì nó đắt tiền"], a: "A. Vì Mặt Trời cung cấp năng lượng liên tục trong thời gian dài", explain: "Năng lượng Mặt Trời tái tạo, không hết trong quy mô thời gian loài người." },
	{ q: "Tại sao pin mặt trời kém hiệu quả trong ngày nhiều mây?", options: ["A. Vì bức xạ mặt trời bị che khuất, giảm công suất", "B. Vì nhiệt độ giảm", "C. Vì gió mạnh", "D. Vì mưa làm hỏng pin"], a: "A. Vì bức xạ mặt trời bị che khuất, giảm công suất", explain: "Cường độ bức xạ giảm nên công suất PV thấp hơn." },
	{ q: "Giải thích ý nghĩa kWh trên hóa đơn điện", options: ["A. Là năng lượng bạn tiêu thụ trong khoảng thời gian", "B. Là công suất tối đa", "C. Là tốc độ tiêu thụ tức thời", "D. Là điện áp"], a: "A. Là năng lượng bạn tiêu thụ trong khoảng thời gian", explain: "kWh = kW × giờ; là năng lượng tính tiền." },
	{ q: "Tại sao nồi áp suất nấu nhanh hơn cùng công suất lò bình thường?", options: ["A. Tăng áp suất làm tăng nhiệt sôi, tăng tốc nấu", "B. Do công suất cao hơn", "C. Do kích thước nồi", "D. Do ít thực phẩm"], a: "A. Tăng áp suất làm tăng nhiệt sôi, tăng tốc nấu", explain: "Áp suất cao làm tăng nhiệt sôi của nước, đẩy nhiệt nhanh hơn vào thức ăn." },
	{ q: "Giải thích vì sao hệ thống làm lạnh có hiệu suất giảm khi cửa mở thường xuyên", options: ["A. Không khí nóng từ ngoài vào làm tăng tải lạnh", "B. Vì máy lạnh bị hỏng", "C. Vì máy chạy chậm", "D. Vì nhiệt độ giảm"], a: "A. Không khí nóng từ ngoài vào làm tăng tải lạnh", explain: "Mở cửa làm không khí nóng vào, máy phải làm việc nhiều hơn để bù nhiệt." },
	{ q: "Tại sao sử dụng thiết bị hiệu suất cao giảm tổng năng lượng tiêu thụ?", options: ["A. Vì cùng công hữu ích cần ít năng lượng đầu vào hơn", "B. Vì nó to hơn", "C. Vì nó đắt tiền", "D. Vì nó tạo nhiệt nhiều hơn"], a: "A. Vì cùng công hữu ích cần ít năng lượng đầu vào hơn", explain: "Hiệu suất cao nghĩa là ít lãng phí, tiêu thụ ít năng lượng hơn cho công ích." },
	{ q: "Giải thích sự truyền nhiệt bằng bức xạ không cần môi trường", options: ["A. Bức xạ truyền năng lượng mà không cần môi trường", "B. Vì dẫn nhiệt mạnh", "C. Vì đối lưu không cần thiết", "D. Vì có từ trường"], a: "A. Bức xạ truyền năng lượng mà không cần môi trường", explain: "Bức xạ điện từ truyền qua chân không; không cần môi trường vật chất." },
	{ q: "Tại sao nhiệt dung riêng của nước lớn khiến nước là chất lưu trữ nhiệt tốt?", options: ["A. Vì cần nhiều năng lượng để tăng nhiệt độ nước", "B. Vì nước nhẹ", "C. Vì nước dẫn điện tốt", "D. Vì nước bốc hơi"], a: "A. Vì cần nhiều năng lượng để tăng nhiệt độ nước", explain: "c lớn nghĩa là nước lưu trữ nhiều năng lượng cho cùng ΔT." },
	{ q: "Một bình nước có khối lượng 2 kg cần tăng nhiệt từ 20°C đến 80°C. Tính năng lượng cần (c nước = 4180 J/kg·°C).", options: ["A. Q = 2×4180×60 = 501,600 J", "B. Q = 4180×60 = 250,800 J", "C. Q = 2×4180×6 = 50,160 J", "D. Q = 4180×6 = 25,080 J"], a: "A. Q = 2×4180×60 = 501,600 J", explain: "Q = m c ΔT = 2×4180×(80-20)." },
	{ q: "Một bóng đèn 10 W sáng 5 giờ; tính năng lượng tiêu thụ theo kWh.", options: ["A. 0.05 kWh", "B. 50 kWh", "C. 0.5 kWh", "D. 5 kWh"], a: "A. 0.05 kWh", explain: "E = P t = 10 W × 5 h = 50 Wh = 0.05 kWh." },
	{ q: "Một máy nước nóng điện có công suất 2 kW hoạt động 3 giờ; tính năng lượng tiêu thụ (kWh) và năng lượng (J).", options: ["A. 6 kWh = 21,600,000 J", "B. 6 kWh = 21,600 J", "C. 0.667 kWh = 2,400,000 J", "D. 60 kWh = 216,000,000 J"], a: "A. 6 kWh = 21,600,000 J", explain: "E=2 kW×3 h=6 kWh; 6×3.6e6=21.6e6 J." },
	{ q: "Một hệ thống năng lượng có hiệu suất 25% cần cung cấp bao nhiêu năng lượng đầu vào để thu được 500 kJ công có ích?", options: ["A. 2,000 kJ", "B. 125 kJ", "C. 500 kJ", "D. 250 kJ"], a: "A. 2,000 kJ", explain: "E_in = W_out / η = 500 / 0.25 = 2000 kJ." },
	{ q: "Một ô tô tiêu thụ 8 L xăng/100 km; biết năng lượng sinh ra ~34 MJ/L. Tính năng lượng tiêu thụ cho 200 km (xấp xỉ).", options: ["A. 544 MJ", "B. 272 MJ", "C. 68 MJ", "D. 34 MJ"], a: "A. 544 MJ", explain: "200 km tương đương 16 L; E=16×34 MJ = 544 MJ." },
	{ q: "Một bình nước nóng có hiệu suất 90% cần cung cấp bao nhiêu điện để tạo 100,000 J nhiệt?", options: ["A. 111,111 J", "B. 90,000 J", "C. 100,000 J", "D. 10,000 J"], a: "A. 111,111 J", explain: "E_in = Q/η = 100000/0.9 ≈ 111111 J." },
	{ q: "Tính năng lượng cần để làm tan 0.5 kg băng (L_f = 334,000 J/kg).", options: ["A. 167,000 J", "B. 334,000 J", "C. 67,000 J", "D. 1,670 J"], a: "A. 167,000 J", explain: "E = m L_f = 0.5×334000 = 167000 J." },
	{ q: "Một tòa nhà sử dụng 20 kWh/ngày. Tính năng lượng đó trong J.", options: ["A. 72,000,000 J", "B. 72,000 J", "C. 7,200 J", "D. 720,000 J"], a: "A. 72,000,000 J", explain: "20 kWh = 20×3.6e6 J = 72e6 J." },
	{ q: "Một máy bơm nước cần nâng 500 kg nước lên 10 m trong 1 phút; tính công và công suất tối thiểu cần (g=9.8).", options: ["A. W=49,000 J, P≈816.7 W", "B. W=4,900 J, P≈81.67 W", "C. W=490,000 J, P≈8167 W", "D. W=49,000 J, P≈81.67 W"], a: "A. W=49,000 J, P≈816.7 W", explain: "W=m g h=500×9.8×10=49,000 J; P=W/60 ≈ 816.7 W." }
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


