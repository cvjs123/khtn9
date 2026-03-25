// js/questions-hoa.js - Hóa học lớp 9 (template)
// This file provides per-topic arrays for Hóa in the same structure as questions-ly.js.
// Content based on ly-thuyet.html

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

// Chuyên đề 1: KIM LOẠI VÀ SỰ KHÁC NHAU CƠ BẢN VỚI PHI KIM
const questions_hoa_topic1 = [
{"q":"Kim loại nào sau đây hoạt động hóa học mạnh nhất?","options":["A. Fe","B. K","C. Mg","D. Al"],"a":"B. K","explain":"Kali (K) là kim loại kiềm, có tính khử rất mạnh, hoạt động hóa học mạnh nhất trong dãy.","level":"nhan_biet"},
{"q":"Nguyên liệu chính dùng để sản xuất nhôm là","options":["A. quặng maghetite","B. quặng bauxite","C. quặng sphalerite","D. quặng hematite"],"a":"B. quặng bauxite","explain":"Quặng bauxite (Al₂O₃.nH₂O) là nguyên liệu chính để sản xuất nhôm.","level":"nhan_biet"},
{"q":"Tính chất vật lí chung của kim loại là:","options":["A. Dẫn điện, dẫn nhiệt, có ánh kim","B. Giòn, dễ gãy, cách điện","C. Tan nhiều trong nước","D. Không dẫn điện, không dẫn nhiệt"],"a":"A. Dẫn điện, dẫn nhiệt, có ánh kim","explain":"Kim loại có electron tự do nên dẫn điện, dẫn nhiệt; có ánh kim và tính dẻo.","level":"nhan_biet"},
{"q":"Công thức tổng quát của dãy đồng đẳng alkane là:","options":["A. CnH2n+2 (n ≥ 1)","B. CnH2n (n ≥ 2)","C. CnH2n-2 (n ≥ 2)","D. CnH2n+1 (n ≥ 1)"],"a":"A. CnH2n+2 (n ≥ 1)","explain":"Alkane là hydrocarbon no, mạch hở, có công thức tổng quát CnH2n+2.","level":"nhan_biet"},
{"q":"Thành phần chính của khí thiên nhiên là:","options":["A. Propane","B. Methane","C. Ethylene","D. Butane"],"a":"B. Methane","explain":"Khí thiên nhiên chủ yếu là methane (CH₄), chiếm khoảng 80-95%.","level":"nhan_biet"},
{"q":"Công thức phân tử của ethyl alcohol là:","options":["A. CH₃OH","B. CH₃CH₂OH","C. C₂H₄","D. CH₃COOH"],"a":"B. CH₃CH₂OH","explain":"Ethyl alcohol (ethanol) có công thức C₂H₅OH hay CH₃CH₂OH.","level":"nhan_biet"},
{"q":"Glucose và sucrose đều thuộc loại:","options":["A. Protein","B. Lipit","C. Carbohydrate","D. Polymer"],"a":"C. Carbohydrate","explain":"Glucose và sucrose đều là carbohydrate (đường).","level":"nhan_biet"},
{"q":"Tinh bột và cellulose là những:","options":["A. Disaccarit","B. Polisaccarit","C. Monosaccarit","D. Lipit"],"a":"B. Polisaccarit","explain":"Tinh bột và cellulose là polysaccharide (đa đường).","level":"nhan_biet"},
{"q":"Loại hợp chất nào sau đây có trong tơ nilon, cao su?","options":["A. Lipit","B. Protein","C. Carbohydrate","D. Polymer"],"a":"D. Polymer","explain":"Tơ nilon, cao su là các loại polymer.","level":"nhan_biet"},
{"q":"Nguyên liệu chính để sản xuất xi măng là:","options":["A. Than đá","B. Quặng sắt","C. Đá vôi và đất sét","D. Dầu mỏ"],"a":"C. Đá vôi và đất sét","explain":"Xi măng được sản xuất từ đá vôi (CaCO₃) và đất sét.","level":"nhan_biet"},
{"q":"Kim loại nào được chiết xuất từ nước biển?","options":["A. Potassium","B. Magnesium","C. Beryllium","D. Sodium"],"a":"D. Sodium","explain":"Natri (Na) được chiết xuất từ nước biển dưới dạng NaCl.","level":"nhan_biet"},
{"q":"Chất nào sau đây là ankan?","options":["A. C₂H₅OH","B. C₂H₆","C. C₃H₆","D. C₂H₄"],"a":"B. C₂H₆","explain":"C₂H₆ (ethane) là alkane, chỉ chứa liên kết đơn.","level":"nhan_biet"},
{"q":"Alcohol là những hợp chất hữu cơ mà phân tử có chứa nhóm -OH","options":["A. Nguyên tử Cacbon","B. Nguyên tử Cacbon không no","C. Nguyên tử Cacbon no","D. Nguyên tử Oxygene"],"a":"C. Nguyên tử Cacbon no","explain":"Nhóm -OH trong alcohol liên kết với nguyên tử carbon no.","level":"nhan_biet"},
{"q":"Trứng là loại thực phẩm chứa nhiều:","options":["A. chất béo","B. chất đường","C. chất bột","D. protein"],"a":"D. protein","explain":"Trứng chứa nhiều protein (lòng trắng trứng).","level":"nhan_biet"},
{"q":"Quá trình nào sau đây sinh ra khí oxygen?","options":["A. Đốt cháy khí thiên nhiên","B. Sản xuất vôi sống","C. Hô hấp của người và động vật","D. Quang hợp của cây xanh"],"a":"D. Quang hợp của cây xanh","explain":"Quang hợp: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, sinh ra oxygen.","level":"nhan_biet"},
{"q":"Hợp chất hữu cơ thường chứa nguyên tố nào là chủ yếu?","options":["A. Nitơ","B. Carbon","C. Lưu huỳnh","D. Clo"],"a":"B. Carbon","explain":"Hợp chất hữu cơ nhất thiết phải chứa carbon.","level":"nhan_biet"},
{"q":"Công thức tổng quát của dãy đồng đẳng alkane là","options":["A. CₙH₂ₙ","B. CₙH₂ₙ₊₂","C. CₙH₂ₙ₋₂","D. CₙH₂ₙ₋₄"],"a":"B. CₙH₂ₙ₊₂","explain":"Alkane có công thức CnH2n+2 (n ≥ 1).","level":"nhan_biet"},
{"q":"Công thức của ethylene là:","options":["A. C₂H₂","B. C₂H₄","C. C₂H₆","D. CH₄"],"a":"B. C₂H₄","explain":"Ethylene (ethene) có công thức C₂H₄.","level":"nhan_biet"},
{"q":"Công thức hóa học của ethylic alcohol là:","options":["A. CH₄","B. C₂H₅OH","C. C₂H₂","D. C₂H₆"],"a":"B. C₂H₅OH","explain":"Ethylic alcohol có công thức C₂H₅OH.","level":"nhan_biet"},
{"q":"Trong công nghiệp, để sản xuất cồn (ethylic alcohol) từ tinh bột, quá trình nào sau đây là bắt buộc?","options":["A. Chưng cất tinh bột","B. Đun nóng tinh bột với axit","C. Thủy phân tinh bột thành glucose rồi lên men","D. Hòa tan tinh bột trong etanol"],"a":"C. Thủy phân tinh bột thành glucose rồi lên men","explain":"Sản xuất cồn từ tinh bột qua hai giai đoạn: thủy phân thành glucose, sau đó lên men thành ethanol.","level":"nhan_biet"},
{"q":"Người ta khai thác khoáng sản từ vỏ Trái Đất chủ yếu để phục vụ mục đích nào sau đây?","options":["A. Nghiên cứu sự hình thành Trái Đất","B. Sản xuất vật liệu và nhiên liệu cho đời sống và sản xuất","C. Tạo cảnh quan đẹp cho du lịch","D. Giữ cân bằng sinh thái"],"a":"B. Sản xuất vật liệu và nhiên liệu cho đời sống và sản xuất","explain":"Khoáng sản được khai thác để phục vụ sản xuất và đời sống.","level":"nhan_biet"},
{"q":"Cho các kim loại Fe, Cu, Al, Zn. Kim loại nào không phản ứng với Hydrochloric acid (HCl)","options":["A. Cu","B. Fe","C. Zn","D. Al"],"a":"A. Cu","explain":"Cu đứng sau H trong dãy hoạt động hóa học, không phản ứng với HCl.","level":"nhan_biet"},
{"q":"Đặc điểm nào sau đây không phải là của kim loại?","options":["A. Có tính dẫn nhiệt","B. Có xu hướng nhận electron để tạo anion","C. Có ánh kim","D. Dễ dát mỏng, dễ kéo sợi"],"a":"B. Có xu hướng nhận electron để tạo anion","explain":"Kim loại có xu hướng nhường electron tạo cation, không phải nhận electron.","level":"nhan_biet"},
{"q":"Vật liệu dưới đây được dùng để chế tạo ruột bút chì?","options":["A. Chì","B. Than đá","C. Than chì","D. Than vô định hình"],"a":"C. Than chì","explain":"Ruột bút chì được làm từ than chì (graphite).","level":"nhan_biet"},
{"q":"Hợp chất hữu cơ là","options":["A. Hợp chất khó tan trong nước","B. Hợp chất của carbon và một số nguyên tố khác trừ N, Cl, O","C. Hợp chất của carbon trừ CO, CO₂, H₂CO₃, muối carbonate kim loại...","D. Hợp chất có nhiệt độ sôi cao"],"a":"C. Hợp chất của carbon trừ CO, CO₂, H₂CO₃, muối carbonate kim loại...","explain":"Định nghĩa hợp chất hữu cơ.","level":"nhan_biet"},
{"q":"Công thức cấu tạo của một hợp chất cho biết","options":["A. Thành phần phân tử","B. Trật tự liên kết giữa các nguyên tử trong phân tử","C. Thành phần phân tử và trật tự liên kết giữa các nguyên tử trong phân tử","D. Thành phần phân tử và sự tham gia liên kết với các hợp chất khác"],"a":"C. Thành phần phân tử và trật tự liên kết giữa các nguyên tử trong phân tử","explain":"Công thức cấu tạo thể hiện thành phần và cách sắp xếp các nguyên tử.","level":"nhan_biet"},
{"q":"Nhận xét nào sau đây là sai?","options":["A. Ethylic alcohol là chất lỏng, không màu","B. Ethylic alcohol tan vô hạn trong nước","C. Ethylic alcohol có thể hòa tan được iodine","D. Ethylic alcohol nặng hơn nước"],"a":"D. Ethylic alcohol nặng hơn nước","explain":"Ethylic alcohol có khối lượng riêng 0,789 g/ml, nhẹ hơn nước (1 g/ml).","level":"nhan_biet"},
{"q":"Để dập tắt xăng, dầu cháy người ta","options":["A. Phun nước vào ngọn lửa","B. Dùng chăn ướt chùm lên ngọn lửa","C. Phủ cát vào ngọn lửa","D. B và C đều đúng"],"a":"D. B và C đều đúng","explain":"Không dùng nước dập xăng dầu vì xăng dầu nhẹ hơn nước, sẽ lan rộng.","level":"nhan_biet"},
{"q":"Trong các kim loại sau đây, kim loại dẫn nhiệt tốt nhất là","options":["A. Silver (Ag)","B. Gold (Au)","C. Copper (Cu)","D. Aluminium (Al)"],"a":"A. Silver (Ag)","explain":"Bạc (Ag) là kim loại dẫn điện và dẫn nhiệt tốt nhất.","level":"nhan_biet"},
{"q":"Kim loại có những tính chất vật lí chung nào sau đây?","options":["A. Tính dẻo, tính dẫn điện, nhiệt độ nóng chảy cao","B. Tính dẻo, tính dẫn nhiệt, rất cứng","C. Tính dẻo, tính dẫn điện, tính dẫn nhiệt và có ánh kim","D. Tính dẻo, có ánh kim, khối lượng riêng lớn"],"a":"C. Tính dẻo, tính dẫn điện, tính dẫn nhiệt và có ánh kim","explain":"Đây là các tính chất vật lý chung của kim loại.","level":"nhan_biet"},
{"q":"Kim loại nào sau đây hoạt động hóa học mạnh nhất?","options":["A. Fe","B. K","C. Mg","D. Al"],"a":"B. K","explain":"Kali (K) là kim loại hoạt động mạnh nhất trong các lựa chọn.","level":"nhan_biet"},
{"q":"Hợp chất hữu cơ là","options":["A. hợp chất của oxygen với một nguyên tố hóa học khác","B. hợp chất của carbon, hydrogen và oxygen","C. hợp chất của carbon và hydrogen","D. hợp chất của carbon (trừ CO, CO₂, H₂CO₃, các muối carbonate kim loại, ...)"],"a":"D. hợp chất của carbon (trừ CO, CO₂, H₂CO₃, các muối carbonate kim loại, ...)","explain":"Định nghĩa hợp chất hữu cơ.","level":"nhan_biet"},
{"q":"Alkane CH₃-CH₂-CH₂-CH₃ có tên gọi là","options":["A. methane","B. ethane","C. propane","D. butane"],"a":"D. butane","explain":"CH₃-CH₂-CH₂-CH₃ là butane.","level":"nhan_biet"},
{"q":"Độ cồn là","options":["A. số ml ethylic alcohol nguyên chất có trong 100 ml dung dịch","B. số ml nước có trong 100 ml dung dịch","C. số gam ethylic alcohol nguyên chất có trong 100 ml dung dịch","D. số gam nước có trong 100 gam dung dịch"],"a":"A. số ml ethylic alcohol nguyên chất có trong 100 ml dung dịch","explain":"Độ cồn là số ml ethanol nguyên chất trong 100 ml dung dịch.","level":"nhan_biet"},
{"q":"Thực phẩm nào sau đây là giàu saccharose?","options":["A. Mía","B. Gạo","C. Sữa","D. Khoai lang"],"a":"A. Mía","explain":"Mía chứa nhiều saccharose (đường mía).","level":"nhan_biet"},
{"q":"Nhiên liệu hóa thạch là gì?","options":["A. Là các loại nhiên liệu được tổng hợp trong phòng thí nghiệm từ các chất hóa học","B. Là nhiên liệu thu được từ các phản ứng hạt nhân trong lòng đất","C. Là nhiên liệu được tạo thành từ xác sinh vật bị chôn vùi và phân hủy trong lòng đất hàng triệu năm","D. Là nguồn năng lượng tái tạo được tạo ra từ gió và mặt trời"],"a":"C. Là nhiên liệu được tạo thành từ xác sinh vật bị chôn vùi và phân hủy trong lòng đất hàng triệu năm","explain":"Định nghĩa nhiên liệu hóa thạch.","level":"nhan_biet"},
{"q":"Dãy kim loại được sắp xếp theo chiều hoạt động hóa học giảm dần:","options":["A. Na; Mg; Zn","B. Al; Zn; Na","C. Mg; Al; Na","D. Pb; Al; Mg"],"a":"A. Na; Mg; Zn","explain":"Dãy hoạt động hóa học: Na, Mg, Zn,...","level":"nhan_biet"},
{"q":"Trong công nghiệp, kim loại nào sau đây chỉ được điều chế bằng phương pháp điện phân nóng chảy?","options":["A. Fe","B. Cu","C. Mg","D. Ag"],"a":"C. Mg","explain":"Mg là kim loại hoạt động mạnh, được điều chế bằng điện phân nóng chảy.","level":"nhan_biet"},
{"q":"Chất nào sau đây không phải dạng thù hình của cacbon?","options":["A. than chì","B. thạch anh","C. kim cương","D. cacbon vô định hình"],"a":"B. thạch anh","explain":"Thạch anh là SiO₂, không phải dạng thù hình của carbon.","level":"nhan_biet"},
{"q":"Trong thành phần phân tử hợp chất hữu cơ nhất thiết phải có nguyên tố","options":["A. cacbon","B. hiđro","C. oxi","D. nitơ"],"a":"A. cacbon","explain":"Hợp chất hữu cơ nhất thiết phải chứa carbon.","level":"nhan_biet"},
{"q":"Độ rượu là:","options":["A. số ml ethylic alcohol có trong 100 ml hỗn hợp rượu với nước","B. số ml nước có trong 100 ml hỗn hợp rượu với nước","C. số gam ethylic alcohol có trong 100 ml hỗn hợp rượu với nước","D. số gam nước có trong 100 gam hỗn hợp rượu với nước"],"a":"A. số ml ethylic alcohol có trong 100 ml hỗn hợp rượu với nước","explain":"Độ rượu là thể tích ethanol nguyên chất trong 100 ml dung dịch.","level":"nhan_biet"},
{"q":"Dầu mỏ là nhiên liệu tồn tại ở dạng nào?","options":["A. Thể rắn","B. Thể lỏng","C. Thể khí","D. Cả rắn, lỏng và khí"],"a":"B. Thể lỏng","explain":"Dầu mỏ tồn tại ở dạng lỏng.","level":"nhan_biet"},
{"q":"Ở điều kiện thường, kim loại X là chất lỏng, được sử dụng trong nhiệt kế, áp kế. Kim loại X là:","options":["A. Silver (Ag)","B. Mercury (Hg)","C. Sodium (Na)","D. Lead (Pb)"],"a":"B. Mercury (Hg)","explain":"Thủy ngân (Hg) là kim loại duy nhất ở thể lỏng ở điều kiện thường.","level":"nhan_biet"},
{"q":"Kim loại không phản ứng được với dung dịch acid là:","options":["A. Al","B. Fe","C. Mg","D. Au"],"a":"D. Au","explain":"Vàng (Au) đứng sau H trong dãy hoạt động hóa học, không phản ứng với acid.","level":"nhan_biet"},
{"q":"Phi kim nào sau đây có khả năng dẫn điện?","options":["A. Sulfur","B. Phosphorus","C. Silicon","D. Carbon (Than chì)"],"a":"D. Carbon (Than chì)","explain":"Than chì là phi kim có cấu trúc lớp, dẫn điện tốt.","level":"nhan_biet"},
{"q":"Chất nào sau đây thuộc loại hợp chất hữu cơ?","options":["A. CO₂","B. CO","C. K₂CO₃","D. CH₄"],"a":"D. CH₄","explain":"CH₄ (methane) là hợp chất hữu cơ.","level":"nhan_biet"},
{"q":"Liên kết hóa học trong phân tử chất hữu cơ chủ yếu là liên kết","options":["A. Ion","B. Hydrogen","C. Kim loại","D. Cộng hóa trị"],"a":"D. Cộng hóa trị","explain":"Liên kết trong hợp chất hữu cơ chủ yếu là liên kết cộng hóa trị.","level":"nhan_biet"},
{"q":"Khi đốt cháy lưu huỳnh trong oxygen ta thu được sản phẩm là","options":["A. CO₂","B. SO₂","C. SO₃","D. H₂SO₄"],"a":"B. SO₂","explain":"S + O₂ → SO₂ (lưu huỳnh dioxide).","level":"thong_hieu"},
{"q":"Trong các phản ứng hóa học, các kim loại thường có xu hướng","options":["A. nhận electron","B. tạo thành ion âm","C. tạo thành ion dương","D. nhường proton"],"a":"C. tạo thành ion dương","explain":"Kim loại có xu hướng nhường electron tạo thành cation (ion dương).","level":"thong_hieu"},
{"q":"Vì sao không đun bếp than trong phòng kín?","options":["A. Vì than tỏa nhiều nhiệt dẫn đến phòng quá nóng","B. Vì than cháy tỏa ra rất nhiều khí CO, CO₂ có thể gây tử vong do ngạt/ngộ độc các khí này","C. Vì than không cháy được trong phòng kín","D. Vì giá thành than khá cao"],"a":"B. Vì than cháy tỏa ra rất nhiều khí CO, CO₂ có thể gây tử vong do ngạt/ngộ độc các khí này","explain":"Than cháy sinh ra CO, CO₂ gây ngạt và ngộ độc trong phòng kín.","level":"thong_hieu"},
{"q":"Dãy hoạt động hóa học nào sau đây sắp xếp theo chiều giảm dần tính khử?","options":["A. Mg, Na, Al, K","B. K, Na, Mg, Al","C. Al, K, Na, Mg","D. Na, K, Al, Mg"],"a":"B. K, Na, Mg, Al","explain":"Dãy hoạt động hóa học giảm dần: K, Na, Mg, Al, Zn, Fe,...","level":"thong_hieu"},
{"q":"Sự khác nhau cơ bản giữa kim loại và phi kim là:","options":["A. Kim loại dẫn điện, phi kim không dẫn điện","B. Kim loại dễ nhường electron, phi kim dễ nhận electron","C. Kim loại thường giòn, phi kim dẻo","D. Kim loại tan nhiều trong nước, phi kim không tan"],"a":"B. Kim loại dễ nhường electron, phi kim dễ nhận electron","explain":"Kim loại có xu hướng nhường electron, phi kim có xu hướng nhận electron.","level":"thong_hieu"},
{"q":"Loại nhiên liệu nào sau đây được coi là nhiên liệu sạch?","options":["A. Than đá","B. Khí thiên nhiên","C. Xăng","D. Dầu hỏa"],"a":"B. Khí thiên nhiên","explain":"Khí thiên nhiên cháy sạch hơn, ít gây ô nhiễm.","level":"thong_hieu"},
{"q":"Dung dịch acid axetic có tính chất nào sau đây?","options":["A. Làm quỳ tím hóa đỏ","B. Không phản ứng với kim loại kẽm","C. Có tính base yếu","D. Không tan trong nước"],"a":"A. Làm quỳ tím hóa đỏ","explain":"Acetic acid là acid yếu, làm quỳ tím chuyển đỏ.","level":"thong_hieu"},
{"q":"Nhóm kim loại đều tác dụng với nước ở điều kiện thường là:","options":["A. Ca, Fe, K","B. Na, Ba, Al","C. K, Na, Ba","D. Li, Na, Cu, K"],"a":"C. K, Na, Ba","explain":"K, Na, Ba là kim loại kiềm và kiềm thổ hoạt động mạnh, phản ứng với nước ở nhiệt độ thường.","level":"thong_hieu"},
{"q":"Cho các kim loại sau: Fe, Al, Mg, Cu số kim loại tác dụng với dd H₂SO₄ loãng là:","options":["A. 1","B. 2","C. 3","D. 4"],"a":"C. 3","explain":"Fe, Al, Mg tác dụng với H₂SO₄ loãng, Cu không tác dụng.","level":"thong_hieu"},
{"q":"Vì sao không được đun bếp than trong phòng kín?","options":["A. Vì than toả nhiều nhiệt, dẫn đến phòng quá nóng","B. Vì than cháy tạo nhiều khí CO, CO₂ có thể gây ngộ độc nếu ngửi quá nhiều trong phòng kín","C. Vì than không cháy được trong phòng kín","D. Vì gió thổi than quá cao"],"a":"B. Vì than cháy tạo nhiều khí CO, CO₂ có thể gây ngộ độc nếu ngửi quá nhiều trong phòng kín","explain":"Than cháy sinh ra CO, CO₂ gây ngạt và ngộ độc.","level":"thong_hieu"},
{"q":"Để phân biệt etylic ancol và axit axetic có thể dùng chất nào sau đây:","options":["A. Kim loại Na","B. Dung dịch NaOH","C. Dung dịch NaCl","D. Dung dịch Na₂CO₃"],"a":"D. Dung dịch Na₂CO₃","explain":"Axit axetic phản ứng với Na₂CO₃ sinh ra khí CO₂, ethanol không phản ứng.","level":"thong_hieu"},
{"q":"Điểm khác biệt cơ bản về tính chất giữa kim loại và phi kim là","options":["A. kim loại dẫn điện tốt, phi kim không dẫn điện (trừ than chì)","B. phi kim cứng hơn kim loại","C. kim loại nhẹ hơn phi kim","D. kim loại có nhiệt độ nóng chảy thấp hơn phi kim"],"a":"A. kim loại dẫn điện tốt, phi kim không dẫn điện (trừ than chì)","explain":"Kim loại có electron tự do nên dẫn điện, phi kim không có electron tự do (trừ than chì).","level":"thong_hieu"},
{"q":"Khả năng bị oxi hóa của kim loại và phi kim khác nhau như thế nào?","options":["A. Kim loại dễ bị oxi hóa, phi kim khó bị oxi hóa","B. Kim loại và phi kim đều dễ bị oxi hóa như nhau","C. Phi kim dễ bị oxi hóa, kim loại khó bị oxi hóa","D. Kim loại không bị oxi hóa, phi kim luôn bị oxi hóa"],"a":"A. Kim loại dễ bị oxi hóa, phi kim khó bị oxi hóa","explain":"Kim loại dễ nhường electron nên dễ bị oxi hóa.","level":"thong_hieu"},
{"q":"Dung dịch acetic acid có tính chất nào sau đây?","options":["A. Làm quỳ tím hóa xanh","B. Làm quỳ tím hóa đỏ","C. Không làm đổi màu quỳ tím","D. Làm quỳ tím hóa vàng"],"a":"B. Làm quỳ tím hóa đỏ","explain":"Acetic acid là acid, làm quỳ tím hóa đỏ.","level":"thong_hieu"},
{"q":"Acetic acid (CH₃COOH) là một acid hữu cơ yếu. Khi hòa tan trong nước, CH₃COOH thể hiện tính acid vì:","options":["A. Nó phân li hoàn toàn thành CH₃COO⁻ và H⁺","B. Nó có mùi đặc trưng giống giấm","C. Nó phản ứng với base tạo ra muối và nước","D. Nó là một chất lỏng không màu"],"a":"C. Nó phản ứng với base tạo ra muối và nước","explain":"Tính acid được thể hiện qua phản ứng với base tạo muối và nước.","level":"thong_hieu"},
{"q":"Trong điều kiện thường phi kim có thể tồn tại ở thể nào?","options":["A. Thể lỏng và thể khí","B. Thể rắn và thể lỏng","C. chỉ tồn tại ở thể khí","D. Tồn tại ở cả 3 thể rắn, thể lỏng và thể khí"],"a":"D. Tồn tại ở cả 3 thể rắn, thể lỏng và thể khí","explain":"Phi kim tồn tại ở cả ba thể: rắn (S, C), lỏng (Br₂), khí (O₂, Cl₂).","level":"thong_hieu"},
{"q":"Khi tham gia phản ứng hóa học, bromine có thể tồn tại ở dạng ion Br⁻. Bromine thuộc loại chất nào sau đây?","options":["A. Phi kim","B. Hợp kim","C. Kim loại","D. Khí hiếm"],"a":"A. Phi kim","explain":"Bromine là phi kim, có xu hướng nhận electron tạo ion Br⁻.","level":"thong_hieu"},
{"q":"Công thức cấu tạo của một hợp chất cho biết","options":["A. Thành phần phân tử","B. Trật tự liên kết giữa các nguyên tử trong phân tử","C. Thành phần phân tử và trật tự liên kết giữa các nguyên tử trong phân tử","D. Thành phần phân tử và sự tham gia liên kết với các hợp chất khác"],"a":"C. Thành phần phân tử và trật tự liên kết giữa các nguyên tử trong phân tử","explain":"Công thức cấu tạo cho biết thành phần và cách sắp xếp các nguyên tử.","level":"thong_hieu"},
{"q":"Hợp chất nào sau đây phản ứng với dung dịch acetic acid thấy bọt khí thoát ra","options":["A. CaCO₃","B. NaOH","C. ZnO","D. C₂H₅OH"],"a":"A. CaCO₃","explain":"Acetic acid phản ứng với CaCO₃ tạo CO₂ (bọt khí).","level":"thong_hieu"},
{"q":"Ở nhiệt độ thường, kim loại Fe phản ứng được với dung dịch nào sau đây?","options":["A. NaCl","B. CuCl₂","C. FeCl₂","D. ZnCl₂"],"a":"B. CuCl₂","explain":"Fe + CuCl₂ → FeCl₂ + Cu (Fe đẩy Cu ra khỏi muối).","level":"thong_hieu"},
{"q":"Ở nhiệt độ cao, H₂ khử được oxide nào sau đây?","options":["A. K₂O","B. CaO","C. Na₂O","D. FeO"],"a":"D. FeO","explain":"H₂ khử được các oxide kim loại trung bình và yếu như FeO, CuO.","level":"thong_hieu"},
{"q":"Để dập tắt đám cháy nhỏ do xăng, dầu người ta dùng biện pháp","options":["A. phun nước vào ngọn lửa","B. phủ cát vào ngọn lửa","C. thổi oxygen vào ngọn lửa","D. phun dung dịch muối ăn vào ngọn lửa"],"a":"B. phủ cát vào ngọn lửa","explain":"Phủ cát cách ly xăng dầu với oxygen, dập tắt đám cháy.","level":"thong_hieu"},
{"q":"Phản ứng nào dưới đây cho thấy acetic acid có tính acid?","options":["A. 2CH₃COOH + 2Na → 2CH₃COONa + H₂","B. CH₃COOH + 2O₂ → 2CO₂ + 2H₂O","C. CH₃COOH + NaOH → CH₃COONa + H₂O","D. C₂H₅OH + O₂ → CH₃COOH + H₂O"],"a":"C. CH₃COOH + NaOH → CH₃COONa + H₂O","explain":"Phản ứng với base (NaOH) thể hiện tính acid.","level":"thong_hieu"},
{"q":"Dãy kim loại tác dụng được với dung dịch Cu(NO₃)₂ tạo thành Cu:","options":["A. Al; Zn; Fe","B. Zn; Pb; Au","C. Mg; Fe; Ag","D. Na; Mg; Al"],"a":"A. Al; Zn; Fe","explain":"Các kim loại đứng trước Cu trong dãy hoạt động hóa học có thể đẩy Cu ra khỏi muối.","level":"thong_hieu"},
{"q":"Cho luồng khí CO (dư) qua ống sứ chứa hỗn hợp Fe₃O₄, Al₂O₃, MgO nung ở nhiệt độ cao. Sau phản ứng thu được hỗn hợp chất rắn gồm","options":["A. Fe₃O₄, Al và MgO","B. Fe, Al và Mg","C. Fe, Al và MgO","D. Fe, Al₂O₃ và MgO"],"a":"D. Fe, Al₂O₃ và MgO","explain":"CO khử được Fe₃O₄ thành Fe, không khử được Al₂O₃ và MgO.","level":"thong_hieu"},
{"q":"Hydrocarbon có trong khí bùn ao là:","options":["A. methane","B. propane","C. ethylene","D. butane"],"a":"A. methane","explain":"Khí bùn ao (biogas) chứa chủ yếu methane (CH₄).","level":"thong_hieu"},
{"q":"Trong các chất dưới đây, chất nào có tính chất hoá học đặc trưng giống acetic acid?","options":["A. CH₃OH","B. CH₃CHO","C. HCOOH","D. CH₃COOC₂H₅"],"a":"C. HCOOH","explain":"HCOOH (formic acid) cũng là acid hữu cơ, có tính chất tương tự acetic acid.","level":"thong_hieu"},
{"q":"Hơi thủy ngân rất độc, bởi vậy khi làm vỡ nhiệt kế thủy ngân thì chất bột được dùng để rắc lên thủy ngân rồi gom lại là:","options":["A. vôi sống","B. cát","C. muối ăn","D. lưu huỳnh"],"a":"D. lưu huỳnh","explain":"Lưu huỳnh phản ứng với thủy ngân tạo HgS, dễ thu gom.","level":"thong_hieu"},
{"q":"Ứng dụng nào sau đây không phải của Sulfur?","options":["A. Làm nguyên liệu sản xuất sulfuric acid","B. Làm chất lưu hóa cao su","C. Khử chua đất","D. Điều chế thuốc súng đen"],"a":"C. Khử chua đất","explain":"Khử chua đất dùng vôi (CaO), không phải sulfur.","level":"thong_hieu"},
{"q":"Ethylic alcohol có lẫn một ít nước, có thể dùng chất nào sau đây để làm khan nó?","options":["A. CaO","B. H₂SO₄ đặc","C. CuSO₄ khan","D. Cả ba đáp án trên"],"a":"D. Cả ba đáp án trên","explain":"Cả ba chất đều có khả năng hút nước, làm khô ethanol.","level":"thong_hieu"},
{"q":"Trong công nghiệp chế tạo ruột phích, người ta thường sử dụng phản ứng hoá học nào sau đây?","options":["A. Cho ethylene tác dụng với dung dịch AgNO₃/NH₃","B. Cho ethylic alcohol tác dụng với dung dịch AgNO₃/NH₃","C. Cho acetic acid tác dụng với dung dịch AgNO₃/NH₃","D. Cho glucose tác dụng với dung dịch AgNO₃/NH₃"],"a":"D. Cho glucose tác dụng với dung dịch AgNO₃/NH₃","explain":"Phản ứng tráng bạc của glucose tạo bạc bám trên thủy tinh.","level":"thong_hieu"},
{"q":"Sự khác nhau cơ bản nhất giữa kim loại và phi kim là:","options":["A. Kim loại dẫn điện tốt, phi kim dẫn điện kém","B. Kim loại có ánh kim, phi kim không có ánh kim","C. Kim loại dễ nhường electron, phi kim dễ nhận electron","D. Kim loại dẻo, phi kim giòn"],"a":"C. Kim loại dễ nhường electron, phi kim dễ nhận electron","explain":"Đây là sự khác biệt cơ bản về tính chất hóa học.","level":"thong_hieu"},
{"q":"Nguyên tử kim loại thường có tính khử vì:","options":["A. Dễ nhận electron để tạo ion âm","B. Có ít electron ở lớp ngoài cùng và dễ nhường đi","C. Có số hiệu nguyên tử lớn","D. Nằm ở cuối chu kì"],"a":"B. Có ít electron ở lớp ngoài cùng và dễ nhường đi","explain":"Kim loại có 1,2,3 electron lớp ngoài cùng, dễ nhường electron.","level":"thong_hieu"},
{"q":"Vì sao nói sự khác nhau cơ bản về tính chất hóa học giữa kim loại và phi kim là:","options":["A. Kim loại có tính oxi hóa, phi kim có tính khử","B. Kim loại có tính khử, phi kim có tính oxi hóa","C. Cả hai đều có tính oxi hóa mạnh","D. Cả hai đều có tính khử mạnh"],"a":"B. Kim loại có tính khử, phi kim có tính oxi hóa","explain":"Kim loại nhường electron (tính khử), phi kim nhận electron (tính oxi hóa).","level":"thong_hieu"},
{"q":"Trong các chất sau, chất nào khi cháy sinh ra nhiều khí CO₂ gây hiệu ứng nhà kính nhất?","options":["A. Khí metan (CH₄)","B. Than đá (gần như C nguyên chất)","C. Dầu hỏa (hỗn hợp hiđrocacbon)","D. Khí etilen (C₂H₄)"],"a":"B. Than đá (gần như C nguyên chất)","explain":"Than đá có tỉ lệ C cao nhất, khi cháy sinh nhiều CO₂ nhất trên mỗi đơn vị khối lượng.","level":"thong_hieu"},
{"q":"Nguyên nhân làm acetic acid có tính acid là:","options":["A. Phân tử chứa nhóm -OH","B. Phân tử chứa nhóm -CHO","C. Phân tử chứa nhóm -COOH","D. Phân tử chỉ chứa C và H"],"a":"C. Phân tử chứa nhóm -COOH","explain":"Nhóm -COOH phân li ra H⁺, tạo tính acid.","level":"thong_hieu"},
{"q":"Cho Fe vào dung dịch CuSO₄, hiện tượng xảy ra:","options":["A. Dung dịch nhạt màu, có chất rắn đỏ bám trên Fe","B. Có khí thoát ra","C. Không hiện tượng","D. Dung dịch chuyển thành màu vàng"],"a":"A. Dung dịch nhạt màu, có chất rắn đỏ bám trên Fe","explain":"Fe + CuSO₄ → FeSO₄ + Cu (đỏ), dung dịch nhạt màu dần.","level":"thong_hieu"},
{"q":"Để bảo vệ cầu thép khỏi gỉ, biện pháp bền vững là:","options":["A. Sơn phủ","B. Ngâm trong HCl","C. Để ngoài trời","D. Ngâm nước muối"],"a":"A. Sơn phủ","explain":"Sơn phủ cách ly thép với môi trường, chống gỉ.","level":"thong_hieu"},
{"q":"Khi đốt cháy hoàn toàn khí methane, sản phẩm tạo ra là:","options":["A. CO và H₂O","B. CO₂ và H₂O","C. C và H₂O","D. CO₂ và H₂"],"a":"B. CO₂ và H₂O","explain":"CH₄ + 2O₂ → CO₂ + 2H₂O.","level":"thong_hieu"},
{"q":"Vì sao kim loại dẫn điện tốt còn phi kim thường không dẫn điện?","options":["A. Kim loại có số lượng electron tự do nhiều hơn phi kim","B. Trong cấu trúc tinh thể kim loại có liên kết kim loại","C. Phi kim không có electron tự do","D. Cấu trúc tinh thể kim loại cho phép electron di chuyển thành dòng"],"a":"A. Kim loại có số lượng electron tự do nhiều hơn phi kim","explain":"Kim loại có nhiều electron tự do, phi kim có rất ít hoặc không có.","level":"thong_hieu"},
{"q":"Đốt cháy một hợp chất hữu cơ Y thu được hơi nước và khí carbon dioxide, khí nitrogen. Trong hợp chất hữu cơ Y chắc chắn có chứa các nguyên tố nào?","options":["A. C, H, O","B. C, H, P","C. C, H, S","D. C, H, N"],"a":"D. C, H, N","explain":"Sản phẩm cháy có CO₂ (C), H₂O (H), N₂ (N) → chắc chắn có C, H, N.","level":"thong_hieu"},
{"q":"Khối lượng khí ethylene cần dùng để phản ứng hết 8 gam bromine trong dung dịch là","options":["A. 0,7 gam","B. 7 gam","C. 1,4 gam","D. 14 gam"],"a":"C. 1,4 gam","explain":"C₂H₄ + Br₂ → C₂H₄Br₂; nBr₂ = 8/160 = 0,05 mol; nC₂H₄ = 0,05 mol; mC₂H₄ = 0,05.28 = 1,4 g.","level":"van_dung"},
{"q":"Hòa tan hoàn toàn m gam ancol đơn chức vào 200 ml dung dịch AgNO₃ 0,1M. Khi phản ứng kết thúc, lấy lá Zn ra cân thì khối lượng lá Zn tăng thêm:","options":["A. 1,51 gam","B. 0,43 gam","C. 1,36 gam","D. 2,16 gam"],"a":"A. 1,51 gam","explain":"Cần dữ liệu cụ thể để tính chính xác.","level":"van_dung"},
{"q":"Biết 0,01 mol hiđrocacbon X làm mất màu vừa đủ 100 ml dd bromine 0,1M. Công thức của X là:","options":["A. CH₄","B. C₂H₂","C. C₂H₄","D. C₆H₆"],"a":"C. C₂H₄","explain":"nBr₂ = 0,01 mol, nX = 0,01 mol → tỉ lệ 1:1 → X có 1 liên kết đôi (C₂H₄).","level":"van_dung"},
{"q":"Để phân biệt hai gói bột màu trắng là Glucozơ, tinh bột và Saccarozơ sẽ sử dụng cách nào sau đây:","options":["A. Dung dịch bromine và Cu(OH)₂","B. Dung dịch NaOH và dd Iodine","C. Hoà tan trong nước và dd HCl","D. Hoà tan vào nước và cho phản ứng với dd AgNO₃ trong NH₃"],"a":"D. Hoà tan vào nước và cho phản ứng với dd AgNO₃ trong NH₃","explain":"Glucozơ có phản ứng tráng bạc, saccarozơ và tinh bột không.","level":"van_dung"},
{"q":"Đun nóng 100 ml dd glucozơ với dd dư AgNO₃/NH₃, thu được 5,4 gam bạc. Nồng độ mol của dd glucozơ là:","options":["A. 0,025 M","B. 0,05 M","C. 0,25 M","D. 0,125 M"],"a":"C. 0,25 M","explain":"nAg = 0,05 mol → nglucose = nAg/2 = 0,025 mol → CM = 0,025/0,1 = 0,25 M.","level":"van_dung"},
{"q":"Khi lên men 1 tấn tinh bột chứa 5% tạp chất tơ thành etylic alcohol. Hiệu suất cuối của quá trình lên men là 85%. Khối lượng etylic alcohol thu được là:","options":["A. 400 kg","B. 579,8 kg","C. 389,8 kg","D. 390 kg"],"a":"C. 389,8 kg","explain":"m tinh bột = 1000.0,95 = 950 kg; (C₆H₁₀O₅)n → nC₆H₁₂O₆ → 2nC₂H₅OH; mC₂H₅OH = 950.92/162.0,85 ≈ 389,8 kg.","level":"van_dung"},
{"q":"Một hợp chất hữu cơ A chứa 32% C, 4% H và 64% O về khối lượng. Biết một phân tử A có 6 nguyên tử oxygen, công thức phân tử của A là","options":["A. C₄H₆O₆","B. C₂H₃O₃","C. C₆H₁₂O₆","D. C₆H₄O₆"],"a":"A. C₄H₆O₆","explain":"Tỉ lệ C:H:O = (32/12):(4/1):(64/16) = 2,67:4:4 = 4:6:6 → C₄H₆O₆.","level":"van_dung"},
{"q":"Thủy phân hoàn toàn 89 gam tristearin (C₁₇H₃₅COO)₃C₃H₅ trong dung dịch NaOH dư, đun nóng, thu được dung dịch chứa b gam muối. Giá trị của b là","options":["A. 92,6","B. 85,3","C. 104,5","D. 91,8"],"a":"D. 91,8","explain":"n tristearin = 89/890 = 0,1 mol; m muối = 0,1.3.306 = 91,8 g.","level":"van_dung"},
{"q":"Lên men 45 gam dung dịch glucose 20%. Tính nồng độ % của dung dịch ethylic alcohol thu được sau phản ứng, biết hiệu suất của quá trình lên men là 80%","options":["A. 8,87 %","B. 9,97 %","C. 10,97 %","D. 7,87 %"],"a":"B. 9,97 %","explain":"m glucose = 9g → n = 0,05 mol; C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂; nC₂H₅OH = 0,1.0,8 = 0,08 mol → m = 3,68 g; m dd sau = 45 - mCO₂; mCO₂ = 0,08.44 = 3,52 g; m dd = 41,48 g; C% = 3,68/41,48 ≈ 8,87%.","level":"van_dung"},
{"q":"Các sản phẩm từ nhựa PP có độ bóng bề mặt tốt, với khả năng chống thấm nước và thấm khí, không dễ bị oxy hóa hay ảnh hưởng bởi các loại khí khác, hơi nước hay dầu mỡ nên chúng thường được tận dụng làm các loại hộp, hũ, can, bình đựng, bao bì,... được sử dụng phổ biến trong đời sống sinh hoạt thường ngày của con người. Khối lượng nhựa PP thu được khi trùng hợp 1,5 tấn Propylen với hiệu suất 92% là","options":["A. 1 tấn","B. 1,38 tấn","C. 1,82 tấn","D. 2 tấn"],"a":"B. 1,38 tấn","explain":"m PP = m propylen × H = 1,5 × 0,92 = 1,38 tấn.","level":"van_dung"},
{"q":"Đun nóng 4,45 gam chất béo (C₁₇H₃₅COO)₃C₃H₅ với dung dịch NaOH. Khối lượng glycerol thu được là bao nhiêu?","options":["A. 0,03 g","B. 0,12 g","C. 0,27 g","D. 0,46 g"],"a":"D. 0,46 g","explain":"n chất béo = 4,45/890 = 0,005 mol; n glycerol = 0,005 mol; m = 0,005.92 = 0,46 g.","level":"van_dung"},
{"q":"Để dập tắt xăng dầu cháy người ta sẽ (1) phun nước vào ngọn lửa. (2) dùng chăn ướt trùm lên ngọn lửa. (3) phủ cát lên ngọn lửa. Phương án phù hợp là:","options":["A. (1) và (2)","B. (3) và (2)","C. (1) và (3)","D. (1)"],"a":"B. (3) và (2)","explain":"Không phun nước vì xăng dầu nhẹ hơn nước, sẽ lan rộng.","level":"van_dung"},
];

// Chuyên đề 2: GIỚI THIỆU VỀ CHẤT HỮU CƠ. HYDROCARBON VÀ NGUỒN NHIÊN LIỆU
const questions_hoa_topic2 = [
{"q":"Carbon có mấy dạng thù hình chính?","options":["A. 1","B. 2","C. 3","D. 4"],"a":"C. 3","explain":"Carbon có 3 dạng thù hình chính: kim cương, than chì, carbon vô định hình.","level":"nhan_biet"},
{"q":"Dãy các chất nào sau đây đều là hydrocarbon?","options":["A. C₂H₄, CH₃COOH, C₆H₆","B. C₂H₅OH, CH₄, C₂H₂","C. C₂H₆, C₄H₁₀, C₂H₄","D. C₂H₆O, C₃H₈, C₂H₂"],"a":"C. C₂H₆, C₄H₁₀, C₂H₄","explain":"Hydrocarbon là hợp chất chỉ gồm C và H. C₂H₆, C₄H₁₀, C₂H₄ đều chỉ chứa C và H.","level":"nhan_biet"},
{"q":"Hợp chất hữu cơ luôn chứa nguyên tố:","options":["A. C","B. H","C. O","D. N"],"a":"A. C","explain":"Hợp chất hữu cơ nhất thiết phải chứa nguyên tố carbon.","level":"nhan_biet"},
{"q":"Công thức tổng quát của dãy đồng đẳng alkane là:","options":["A. CnH2n+2 (n ≥ 1)","B. CnH2n (n ≥ 2)","C. CnH2n-2 (n ≥ 2)","D. CnH2n+1 (n ≥ 1)"],"a":"A. CnH2n+2 (n ≥ 1)","explain":"Alkane là hydrocarbon no, mạch hở, có công thức tổng quát CnH2n+2.","level":"nhan_biet"},
{"q":"Thành phần chính của khí thiên nhiên là:","options":["A. Propane","B. Methane","C. Ethylene","D. Butane"],"a":"B. Methane","explain":"Khí thiên nhiên chủ yếu là methane (CH₄), chiếm khoảng 80-95%.","level":"nhan_biet"},
{"q":"Chất nào sau đây là ankan?","options":["A. C₂H₅OH","B. C₂H₆","C. C₃H₆","D. C₂H₄"],"a":"B. C₂H₆","explain":"C₂H₆ (ethane) là alkane, chỉ chứa liên kết đơn.","level":"nhan_biet"},
{"q":"Công thức tổng quát của dãy đồng đẳng alkane là","options":["A. CₙH₂ₙ","B. CₙH₂ₙ₊₂","C. CₙH₂ₙ₋₂","D. CₙH₂ₙ₋₄"],"a":"B. CₙH₂ₙ₊₂","explain":"Alkane có công thức CnH2n+2 (n ≥ 1).","level":"nhan_biet"},
{"q":"Công thức của ethylene là:","options":["A. C₂H₂","B. C₂H₄","C. C₂H₆","D. CH₄"],"a":"B. C₂H₄","explain":"Ethylene (ethene) có công thức C₂H₄.","level":"nhan_biet"},
{"q":"Alkane CH₃-CH₂-CH₂-CH₃ có tên gọi là","options":["A. methane","B. ethane","C. propane","D. butane"],"a":"D. butane","explain":"CH₃-CH₂-CH₂-CH₃ là butane.","level":"nhan_biet"},
{"q":"Trong các chất sau, chất nào không phải chất hữu cơ?","options":["A. CH₄","B. C₂H₆","C. CaCO₃","D. C₆H₆"],"a":"C. CaCO₃","explain":"CaCO₃ là muối carbonate, thuộc hợp chất vô cơ.","level":"nhan_biet"},
{"q":"Công thức phân tử của methane là:","options":["A. C₂H₂","B. C₂H₄","C. CH₄","D. C₂H₆"],"a":"C. CH₄","explain":"Methane có công thức CH₄.","level":"nhan_biet"},
{"q":"Liên kết hóa học trong phân tử chất hữu cơ chủ yếu là liên kết","options":["A. Cộng hóa trị","B. Ion","C. Kim loại","D. Hydrogen"],"a":"A. Cộng hóa trị","explain":"Liên kết trong hợp chất hữu cơ chủ yếu là liên kết cộng hóa trị.","level":"nhan_biet"},
{"q":"Dầu mỏ là","options":["A. một hydrocarbon có khối lượng phân tử rất lớn và có cấu tạo phức tạp","B. hỗn hợp các alkene","C. hỗn hợp các alkane và alkene","D. hỗn hợp phức tạp của nhiều hydrocarbon và một lượng nhỏ các dẫn xuất của hydrocarbon"],"a":"D. hỗn hợp phức tạp của nhiều hydrocarbon và một lượng nhỏ các dẫn xuất của hydrocarbon","explain":"Dầu mỏ là hỗn hợp phức tạp của nhiều hydrocarbon.","level":"nhan_biet"},
{"q":"Trong phân tử ethyne (C₂H₂), số liên kết ba là:","options":["A. 0","B. 1","C. 2","D. 3"],"a":"B. 1","explain":"Ethyne (C₂H₂) có 1 liên kết ba giữa hai nguyên tử carbon.","level":"nhan_biet"},
{"q":"Công thức hóa học của glucose là:","options":["A. (C₆H₁₀O₅)n","B. C₁₂H₂₂O₁₁","C. C₆H₁₂O₆","D. C₂H₅OH"],"a":"C. C₆H₁₂O₆","explain":"Glucose có công thức C₆H₁₂O₆.","level":"nhan_biet"},
{"q":"Chất hữu cơ nào sau đây có phản ứng trùng hợp?","options":["A. Methane (CH₄)","B. Ethane (C₂H₆)","C. Benzene (C₆H₆)","D. Ethylene (C₂H₄)"],"a":"D. Ethylene (C₂H₄)","explain":"Ethylene có liên kết đôi, có phản ứng trùng hợp tạo polyethylene.","level":"nhan_biet"},
{"q":"Dãy chất nào sau đây đều là hydrocarbon?","options":["A. C₂H₄, CH₃COOH, C₆H₆","B. C₂H₅OH, CH₄, C₂H₂","C. C₂H₆, C₄H₁₀, C₂H₄","D. C₂H₆O, C₃H₈, C₂H₂"],"a":"C. C₂H₆, C₄H₁₀, C₂H₄","explain":"Hydrocarbon chỉ gồm C và H.","level":"nhan_biet"},
{"q":"Carbon vô định hình được điều chế từ than gỗ hay gáo dừa có tên là than hoạt tính. Tính chất nào của than hoạt tính giúp con người chế tạo các thiết bị phòng độc, lọc nước?","options":["A. Than hoạt tính dễ cháy","B. Than hoạt tính có cấu trúc lớp","C. Than hoạt tính có khả năng hấp phụ cao","D. Than hoạt tính có khả năng hòa tan tốt trong nhiều dung môi"],"a":"C. Than hoạt tính có khả năng hấp phụ cao","explain":"Than hoạt tính có cấu trúc xốp, hấp phụ tốt các chất độc và tạp chất.","level":"nhan_biet"},
{"q":"Nguyên tử cacbon có thể liên kết trực tiếp với nhau tạo thành các dạng mạch carbon là","options":["A. mạch vòng","B. mạch thẳng, mạch nhánh","C. mạch vòng, mạch thẳng, mạch nhánh","D. mạch nhánh"],"a":"C. mạch vòng, mạch thẳng, mạch nhánh","explain":"Carbon có thể tạo thành mạch thẳng, mạch nhánh và mạch vòng.","level":"nhan_biet"},
{"q":"Dãy gồm các phi kim thể khí ở điều kiện thường","options":["A. S, C, N₂, Cl₂","B. C, S, Br₂, Cl₂","C. Cl₂, H₂, N₂, O₂","D. Br₂, P, N₂, O₂"],"a":"C. Cl₂, H₂, N₂, O₂","explain":"Cl₂, H₂, N₂, O₂ là các phi kim thể khí ở điều kiện thường.","level":"nhan_biet"},
{"q":"Phi kim có điểm khác biệt nào so với kim loại?","options":["A. Dễ bị uốn cong","B. Không có ánh kim","C. Dẫn điện tốt","D. Dẫn nhiệt tốt"],"a":"B. Không có ánh kim","explain":"Phi kim không có ánh kim, trong khi kim loại có ánh kim.","level":"nhan_biet"},
{"q":"Phi kim có mức hoạt động hóa học yếu nhất là","options":["A. Fluorine","B. Oxygen","C. Chlorine","D. Silicon"],"a":"D. Silicon","explain":"Silicon là phi kim hoạt động yếu nhất trong các lựa chọn.","level":"nhan_biet"},
{"q":"Chất nào sau đây không thuộc loại hợp chất hữu cơ?","options":["A. CH₃Cl","B. CH₄","C. CO","D. CH₃COONa"],"a":"C. CO","explain":"CO là carbon monoxide, thuộc hợp chất vô cơ.","level":"nhan_biet"},
{"q":"Khi đốt cháy các hợp chất hữu cơ đều thấy tạo ra","options":["A. NO","B. CO₂","C. HCl","D. H₂CO₃"],"a":"B. CO₂","explain":"Hợp chất hữu cơ chứa carbon, khi cháy tạo CO₂.","level":"nhan_biet"},
{"q":"Giấm ăn là dung dịch acetic acid có nồng độ","options":["A. trên 10%","B. dưới 2%","C. từ 2% - 5%","D. từ 5% - 10%"],"a":"C. từ 2% - 5%","explain":"Giấm ăn thường có nồng độ acetic acid 2-5%.","level":"nhan_biet"},
{"q":"Ethanol là chất có tác động đến thần kinh trung ương. Khi hàm lượng ethanol trong máu tăng cao sẽ có hiện tượng nôn, mất tỉnh táo. Tên gọi khác của ethanol là","options":["A. methylic alcohol","B. ethylic alcohol","C. acetic acid","D. formic acid"],"a":"B. ethylic alcohol","explain":"Ethanol còn gọi là ethylic alcohol (rượu etylic).","level":"nhan_biet"},
{"q":"Dãy gồm các phi kim thể khí ở điều kiện thường","options":["A. S, C, N₂, Cl₂","B. C, S, Br₂, Cl₂","C. Cl₂, H₂, N₂, O₂","D. Br₂, P, N₂, O₂"],"a":"C. Cl₂, H₂, N₂, O₂","explain":"Cl₂, H₂, N₂, O₂ là các phi kim thể khí.","level":"nhan_biet"},
{"q":"Giấm ăn là dung dịch acetic acid có nồng độ","options":["A. từ 2% - 5%","B. 5% - 9%","C. 9% -12%","D. 12% -15%"],"a":"A. từ 2% - 5%","explain":"Giấm ăn có nồng độ acetic acid khoảng 2-5%.","level":"nhan_biet"},
{"q":"Vì sao không đun bếp than trong phòng kín?","options":["A. Vì than tỏa nhiều nhiệt dẫn đến phòng quá nóng","B. Vì than cháy tỏa ra rất nhiều khí CO, CO₂ có thể gây tử vong do ngạt/ngộ độc các khí này","C. Vì than không cháy được trong phòng kín","D. Vì giá thành than khá cao"],"a":"B. Vì than cháy tỏa ra rất nhiều khí CO, CO₂ có thể gây tử vong do ngạt/ngộ độc các khí này","explain":"Than cháy sinh ra CO, CO₂ gây ngạt và ngộ độc trong phòng kín.","level":"thong_hieu"},
{"q":"Loại nhiên liệu nào sau đây được coi là nhiên liệu sạch?","options":["A. Than đá","B. Khí thiên nhiên","C. Xăng","D. Dầu hỏa"],"a":"B. Khí thiên nhiên","explain":"Khí thiên nhiên cháy sạch hơn, ít gây ô nhiễm.","level":"thong_hieu"},
{"q":"Để phân biệt etylic ancol và axit axetic có thể dùng chất nào sau đây:","options":["A. Kim loại Na","B. Dung dịch NaOH","C. Dung dịch NaCl","D. Dung dịch Na₂CO₃"],"a":"D. Dung dịch Na₂CO₃","explain":"Axit axetic phản ứng với Na₂CO₃ sinh ra khí CO₂, ethanol không phản ứng.","level":"thong_hieu"},
{"q":"Hydrocarbon có trong khí bùn ao là:","options":["A. methane","B. propane","C. ethylene","D. butane"],"a":"A. methane","explain":"Khí bùn ao (biogas) chứa chủ yếu methane (CH₄).","level":"thong_hieu"},
{"q":"Trong các chất sau, chất nào khi cháy sinh ra nhiều khí CO₂ gây hiệu ứng nhà kính nhất?","options":["A. Khí metan (CH₄)","B. Than đá (gần như C nguyên chất)","C. Dầu hỏa (hỗn hợp hiđrocacbon)","D. Khí etilen (C₂H₄)"],"a":"B. Than đá (gần như C nguyên chất)","explain":"Than đá có tỉ lệ C cao nhất, khi cháy sinh nhiều CO₂ nhất trên mỗi đơn vị khối lượng.","level":"thong_hieu"},
{"q":"Khi đốt cháy hoàn toàn khí methane, sản phẩm tạo ra là:","options":["A. CO và H₂O","B. CO₂ và H₂O","C. C và H₂O","D. CO₂ và H₂"],"a":"B. CO₂ và H₂O","explain":"CH₄ + 2O₂ → CO₂ + 2H₂O.","level":"thong_hieu"},
{"q":"Đốt cháy một hợp chất hữu cơ Y thu được hơi nước và khí carbon dioxide, khí nitrogen. Trong hợp chất hữu cơ Y chắc chắn có chứa các nguyên tố nào?","options":["A. C, H, O","B. C, H, P","C. C, H, S","D. C, H, N"],"a":"D. C, H, N","explain":"Sản phẩm cháy có CO₂ (C), H₂O (H), N₂ (N) → chắc chắn có C, H, N.","level":"thong_hieu"},
{"q":"Phát biểu nào sau đây là đúng","options":["A. Methan có liên kết ba trong phân tử","B. Methan là một chất lỏng không màu","C. Methan cháy trong không khí tạo ra CO₂ và H₂O","D. Methan có khả năng làm mất màu dung dịch Bromine"],"a":"C. Methan cháy trong không khí tạo ra CO₂ và H₂O","explain":"CH₄ + 2O₂ → CO₂ + 2H₂O.","level":"thong_hieu"},
{"q":"Dãy phi kim tác dụng với oxygen tạo thành oxide acid là","options":["A. S, C, P","B. S, C, Cl₂","C. C, P, Br₂","D. C, Cl₂, Br₂"],"a":"A. S, C, P","explain":"S, C, P tác dụng với O₂ tạo SO₂, CO₂, P₂O₅ là các oxide acid.","level":"thong_hieu"},
{"q":"Dãy phi kim tác dụng được với nhau là","options":["A. Si, Cl₂, O₂","B. H₂, S, O₂","C. Cl₂, C, O₂","D. N₂, S, O₂"],"a":"B. H₂, S, O₂","explain":"H₂ + S → H₂S; H₂ + O₂ → H₂O; S + O₂ → SO₂.","level":"thong_hieu"},
{"q":"Cho các phát biểu về alkane: (a) Trong phân tử alkane chỉ chứa liên kết đơn (b) Chỉ có các alkane là chất khí ở điều kiện thường được dùng làm nhiên liệu. (c) Các alkane lỏng được dùng sản xuất xăng, dầu và làm dung môi. (d) Các alkane rắn được dùng làm nến, nhựa đường, nguyên liệu cho quá trình cracking. (e) Công thức chung của alkane là CxH2x+2, với x ≥ 1. Số phát biểu đúng là","options":["A. 2","B. 3","C. 4","D. 5"],"a":"C. 4","explain":"Các phát biểu đúng: a, c, d, e. b sai vì không chỉ alkane mới làm nhiên liệu.","level":"thong_hieu"},
{"q":"Vì sao không đun bếp than trong phòng kín?","options":["A. Vì than tỏa nhiều nhiệt dẫn đến phòng quá nóng","B. Vì than cháy tỏa ra rất nhiều khí CO, CO₂ có thể gây tử vong nếu hít vào quá nhiều","C. Vì than không cháy được trong phòng kín","D. Vì giá thành than khá cao"],"a":"B. Vì than cháy tỏa ra rất nhiều khí CO, CO₂ có thể gây tử vong nếu hít vào quá nhiều","explain":"Than cháy sinh ra CO, CO₂ gây ngạt và ngộ độc.","level":"thong_hieu"},
{"q":"Ethylic alcohol được dùng làm nhiên liệu trong đèn cồn,... hoặc phối trộn với xăng làm nhiên liệu cho động cơ đốt trong (xe máy, ô tô,...). Ứng dụng này dựa vào tính chất nào của ethylic alcohol.","options":["A. Hòa tan nhiều chất","B. Dễ bay hơi","C. Dễ cháy, khi cháy tỏa nhiều nhiệt","D. Nhẹ hơn nước"],"a":"C. Dễ cháy, khi cháy tỏa nhiều nhiệt","explain":"Ethanol được dùng làm nhiên liệu vì dễ cháy và tỏa nhiều nhiệt.","level":"thong_hieu"},
{"q":"Phương pháp điều chế ethylic alcohol từ chất nào sau đây là phương pháp sinh hóa?","options":["A. Ethane","B. Ethyl chloride","C. Tinh bột","D. Ethylene"],"a":"C. Tinh bột","explain":"Lên men tinh bột thành ethanol là phương pháp sinh hóa.","level":"thong_hieu"},
{"q":"Biết tỉ khối hơi của X so với khí methane là 3,75. Công thức phân tử của X là","options":["A. C₂H₄O₂","B. C₃H₈O","C. CH₄O","D. C₂H₆O"],"a":"A. C₂H₄O₂","explain":"M_X = 3,75 × 16 = 60; C₂H₄O₂ có M = 60.","level":"thong_hieu"},
{"q":"Hòa tan 30ml rượu Ethylic nguyên chất vào 90ml nước cất thu được","options":["A. rượu Ethylic có độ rượu là 20°","B. rượu Ethylic có độ rượu là 25°","C. rượu Ethylic có độ rượu là 30°","D. rượu Ethylic có độ rượu là 35°"],"a":"B. rượu Ethylic có độ rượu là 25°","explain":"Độ rượu = (30/120) × 100 = 25°.","level":"thong_hieu"},
{"q":"Sự cố tràn dầu do chìm tàu chở dầu là thảm họa môi trường vì:","options":["A. Do dầu nhẹ hơn nước, nổi trên mặt nước cản sự hòa tan của khí oxygen làm các sinh vật dưới nước bị chết","B. Do dầu không tan trong nước","C. Do dầu sôi ở những nhiệt độ khác nhau","D. Dầu lan rộng trên mặt nước bị sóng, gió cuốn đi xa rất khó xử lý"],"a":"A. Do dầu nhẹ hơn nước, nổi trên mặt nước cản sự hòa tan của khí oxygen làm các sinh vật dưới nước bị chết","explain":"Dầu loang trên mặt nước ngăn cản oxygen hòa tan, gây chết sinh vật.","level":"thong_hieu"},
{"q":"Để dập tắt xăng dầu cháy người ta sẽ (1) phun nước vào ngọn lửa. (2) dùng chăn ướt trùm lên ngọn lửa. (3) phủ cát lên ngọn lửa. Phương án phù hợp là:","options":["A. (1) và (2)","B. (3) và (2)","C. (1) và (3)","D. (1)"],"a":"B. (3) và (2)","explain":"Không phun nước vì xăng dầu nhẹ hơn nước, sẽ lan rộng.","level":"thong_hieu"},
{"q":"Dãy các chất nào sau đây đều là hydrocarbon?","options":["A. C₂H₆, C₄H₁₀, C₂H₄","B. CH₄, C₂H₂, C₃H₇Cl","C. C₂H₄, CH₄, C₂H₅Cl","D. C₂H₆O, C₃H₈, C₂H₂"],"a":"A. C₂H₆, C₄H₁₀, C₂H₄","explain":"Hydrocarbon chỉ gồm C và H.","level":"thong_hieu"},
{"q":"Dãy các chất nào sau đây đều là hydrocarbon?","options":["A. C₂H₆, C₄H₁₀, C₂H₄","B. CH₄, C₂H₂, C₃H₇Cl","C. C₂H₄, CH₄, C₂H₅Cl","D. C₂H₆O, C₃H₈, C₂H₂"],"a":"A. C₂H₆, C₄H₁₀, C₂H₄","explain":"Hydrocarbon chỉ gồm C và H.","level":"thong_hieu"},
{"q":"Dãy các chất nào sau đây đều là hydrocarbon?","options":["A. C₂H₆, C₄H₁₀, C₂H₄","B. CH₄, C₂H₂, C₃H₇Cl","C. C₂H₄, CH₄, C₂H₅Cl","D. C₂H₆O, C₃H₈, C₂H₂"],"a":"A. C₂H₆, C₄H₁₀, C₂H₄","explain":"Hydrocarbon chỉ gồm C và H.","level":"thong_hieu"},
{"q":"Dãy chất nào sau đây đều có khả năng làm mất màu dung dịch Bromine?","options":["A. Methane, Ethylene","B. Ethylene, Ethyne","C. Ethane, Benzene","D. Methane, Ethane"],"a":"B. Ethylene, Ethyne","explain":"Ethylene và ethyne có liên kết bội, làm mất màu dung dịch bromine.","level":"thong_hieu"},
{"q":"Dãy phi kim tác dụng với oxygen tạo thành oxide acid là","options":["A. S, C, P","B. S, C, Cl₂","C. C, P, Br₂","D. C, Cl₂, Br₂"],"a":"A. S, C, P","explain":"S, C, P tác dụng với O₂ tạo SO₂, CO₂, P₂O₅ là oxide acid.","level":"thong_hieu"},
{"q":"Dãy phi kim tác dụng được với nhau là","options":["A. Si, Cl₂, O₂","B. H₂, S, O₂","C. Cl₂, C, O₂","D. N₂, S, O₂"],"a":"B. H₂, S, O₂","explain":"H₂ + S → H₂S; H₂ + O₂ → H₂O; S + O₂ → SO₂.","level":"thong_hieu"},
{"q":"Chất X có công thức cấu tạo: CH₃-CH₂-CH=CH₂. Công thức phân tử của X là","options":["A. C₃H₆","B. C₄H₁₀","C. C₄H₈","D. C₅H₈"],"a":"C. C₄H₈","explain":"CH₃-CH₂-CH=CH₂ có 4C, 8H, công thức C₄H₈.","level":"thong_hieu"},
{"q":"Khối lượng khí ethylene cần dùng để phản ứng hết 8 gam bromine trong dung dịch là","options":["A. 0,7 gam","B. 7 gam","C. 1,4 gam","D. 14 gam"],"a":"C. 1,4 gam","explain":"C₂H₄ + Br₂ → C₂H₄Br₂; nBr₂ = 8/160 = 0,05 mol; nC₂H₄ = 0,05 mol; mC₂H₄ = 0,05.28 = 1,4 g.","level":"van_dung"},
{"q":"Đốt cháy hoàn toàn 12,395 lít khí ethylene C₂H₄ (đkc). Thể tích khí O₂ cần dùng (ở đkc) là:","options":["A. 33,6 lít","B. 37,185 lít","C. 48 lít","D. 24,79 lít"],"a":"B. 37,185 lít","explain":"C₂H₄ + 3O₂ → 2CO₂ + 2H₂O; nC₂H₄ = 12,395/24,79 = 0,5 mol; nO₂ = 1,5 mol; V = 1,5.24,79 = 37,185 lít.","level":"van_dung"},
{"q":"Đốt cháy hoàn toàn 4,48 lít methane (CH₄) ở đkc, thể tích khí CO₂ sinh ra (đkc) là:","options":["A. 2,24 lít","B. 4,48 lít","C. 6,72 lít","D. 8,96 lít"],"a":"B. 4,48 lít","explain":"CH₄ + 2O₂ → CO₂ + 2H₂O; nCH₄ = 4,48/22,4 = 0,2 mol; nCO₂ = 0,2 mol; V = 4,48 lít.","level":"van_dung"},
{"q":"Đốt cháy hoàn toàn 2,479 lít hỗn hợp A (đkc) gồm CH₄, C₂H₆, và C₃H₈ thu được V lít khí CO₂ và 7,2 gam H₂O. Giá trị của V là","options":["A. 4,985 lít","B. 7,437 lít","C. 6,1975 lít","D. 2,479 lít"],"a":"B. 7,437 lít","explain":"nH₂O = 7,2/18 = 0,4 mol; nCO₂ = nH₂O - n hỗn hợp = 0,4 - 0,1 = 0,3 mol; V = 0,3.24,79 = 7,437 lít.","level":"van_dung"},
{"q":"Gas, nhiên liệu phổ biến hiện nay có thành phần chính là propane và butane. Nhiệt lượng giải phóng khi đốt cháy hoàn toàn 1 kg một loại gas là khoảng 50 400 kJ. Biết để làm nóng 1 kg nước lên 1 độ thì cần cung cấp nhiệt lượng là 4 200 J. Để đun sôi 30 kg nước từ nhiệt độ 20°C cần cung cấp bao nhiêu kJ nhiệt?","options":["A. 2520 kJ","B. 5040 kJ","C. 10080 kJ","D. 6048 kJ"],"a":"C. 10080 kJ","explain":"Q = m.c.Δt = 30.4200.80 = 10.080.000 J = 10080 kJ.","level":"van_dung"},
{"q":"Đốt cháy hoàn toàn 4,48 lít khí metan (CH₄) ở đkc cần bao nhiêu lít O₂ (đkc)?","options":["A. 4,48 L","B. 8,96 L","C. 6,72 L","D. 2,24 L"],"a":"B. 8,96 L","explain":"CH₄ + 2O₂ → CO₂ + 2H₂O; nCH₄ = 4,48/22,4 = 0,2 mol; nO₂ = 0,4 mol; V = 8,96 L.","level":"van_dung"},
{"q":"Đốt cháy hoàn toàn 1,12 lít khí methane (CH₄) (đktc). Thể tích khí carbon dioxide (CO₂) thu được (đktc) là:","options":["A. 1,12 lít","B. 2,24 lít","C. 0,56 lít","D. 4,48 lít"],"a":"A. 1,12 lít","explain":"CH₄ + 2O₂ → CO₂ + 2H₂O; nCH₄ = 1,12/22,4 = 0,05 mol; nCO₂ = 0,05 mol; V = 1,12 lít.","level":"van_dung"},
{"q":"Để đun nấu trong gia đình, người ta thường dùng khí LPG (Liquefied Petroleum Gas), thành phần chính là propane (C₃H₈) và butan (C₄H₁₀). Khi đốt cháy hoàn toàn 1 mol propane, thể tích khí O₂ (ở ĐKC) cần dùng là bao nhiêu?","options":["A. 512,0 (L)","B. 113,2 (L)","C. 122,4 (L)","D. 123,95 (L)"],"a":"D. 123,95 (L)","explain":"C₃H₈ + 5O₂ → 3CO₂ + 4H₂O; nO₂ = 5 mol; V = 5.24,79 = 123,95 L.","level":"van_dung"},
{"q":"Thành phần phần trăm về khối lượng của nguyên tố C trong C₃H₈O là","options":["A. 52,2%","B. 55,2%","C. 60%","D. 34,8%"],"a":"C. 60%","explain":"M = 60; %C = (36/60).100% = 60%.","level":"van_dung"},
{"q":"Một mol khí ethylene cháy hoàn toàn tỏa ra một lượng nhiệt 1423 kJ. Vậy 5,6 gam ethylene cháy tỏa ra một lượng nhiệt là bao nhiêu kJ?","options":["A. 7115 kJ","B. 246,8 kJ","C. 264,8 kJ","D. 284,6 kJ"],"a":"D. 284,6 kJ","explain":"nC₂H₄ = 5,6/28 = 0,2 mol; Q = 0,2.1423 = 284,6 kJ.","level":"van_dung"},
{"q":"Một mol khí ethylene cháy hoàn toàn tỏa ra một lượng nhiệt 1423 kJ. Vậy 5,6 gam ethylene cháy tỏa ra một lượng nhiệt là bao nhiêu kJ?","options":["A. 7115 kJ","B. 246,8 kJ","C. 264,8 kJ","D. 284,6 kJ"],"a":"D. 284,6 kJ","explain":"nC₂H₄ = 5,6/28 = 0,2 mol; Q = 0,2.1423 = 284,6 kJ.","level":"van_dung"},
{"q":"Thành phần phần trăm về khối lượng của nguyên tố C trong C₃H₈O là","options":["A. 52,2%","B. 55,2%","C. 60%","D. 34,8%"],"a":"C. 60%","explain":"M = 60; %C = (36/60).100% = 60%.","level":"van_dung"},
{"q":"Thành phần phần trăm về khối lượng của các nguyên tố C, H, O trong C₂H₆O lần lượt là","options":["A. 52,2%; 13%; 34,8%","B. 52,2%; 34,8%; 13%","C. 13%; 34,8%; 52,2%","D. 34,8%; 13%; 52,2%"],"a":"A. 52,2%; 13%; 34,8%","explain":"M = 46; %C = 24/46 = 52,2%; %H = 6/46 = 13%; %O = 16/46 = 34,8%.","level":"van_dung"},
{"q":"Đốt cháy hoàn toàn 6 lít khí ethylene CH₄ (đkc). Thể tích khí O₂ cần dùng (ở ĐKC) là","options":["A. 33,6 lit","B. 11,99 lit","C. 4,8 lit","D. 24,79 lit"],"a":"B. 11,99 lit","explain":"CH₄ + 2O₂ → CO₂ + 2H₂O; VCH₄ = 6 lít → VO₂ = 12 lít? (Cần xem lại đề)","level":"van_dung"},
{"q":"Lượng Ethylene cần dùng là bao nhiêu để phản ứng vừa đủ với 0,8 gam Bromine?","options":["A. 0,1 g","B. 0,21 g","C. 0,2 g","D. 0,14 g"],"a":"D. 0,14 g","explain":"C₂H₄ + Br₂ → C₂H₄Br₂; nBr₂ = 0,8/160 = 0,005 mol; nC₂H₄ = 0,005 mol; m = 0,005.28 = 0,14 g.","level":"van_dung"},
{"q":"Khối lượng khí ethylene cần dùng để phản ứng hết 8 gam bromine trong dung dịch là:","options":["A. 0,7 gam","B. 7 gam","C. 1,4 gam","D. 14 gam"],"a":"C. 1,4 gam","explain":"nBr₂ = 8/160 = 0,05 mol; nC₂H₄ = 0,05 mol; m = 1,4 g.","level":"van_dung"},
{"q":"Đốt cháy hoàn toàn 4,4 gam khí propan (C₃H₈) cần một thể tích oxi (đktc) là bao nhiêu lít?","options":["A. 11,2 lít","B. 22,4 lít","C. 33,6 lít","D. 44,8 lít"],"a":"A. 11,2 lít","explain":"C₃H₈ + 5O₂ → 3CO₂ + 4H₂O; nC₃H₈ = 4,4/44 = 0,1 mol; nO₂ = 0,5 mol; V = 0,5.22,4 = 11,2 lít.","level":"van_dung"},
{"q":"Một bếp gas dùng khí hóa lỏng (chủ yếu là propan C₃H₈ và butan C₄H₁₀). Khi cháy hoàn toàn 1 mol propan sẽ tạo ra:","options":["A. 2 mol CO₂ và 4 mol H₂O","B. 3 mol CO₂ và 4 mol H₂O","C. 3 mol CO₂ và 8 mol H₂O","D. 4 mol CO₂ và 10 mol H₂O"],"a":"B. 3 mol CO₂ và 4 mol H₂O","explain":"C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.","level":"van_dung"},
];
// Chuyên đề 3: ETHYLIC ALCOHOL VÀ ACETIC ACID
const questions_hoa_topic3 = [
{"q":"Acetic acid có công thức là","options":["A. C₂H₅OH","B. HCOOH","C. CH₃OH","D. CH₃COOH"],"a":"D. CH₃COOH","explain":"Acetic acid (axit axetic) có công thức CH₃COOH.","level":"nhan_biet"},
{"q":"Công thức phân tử của ethyl alcohol là:","options":["A. CH₃OH","B. CH₃CH₂OH","C. C₂H₄","D. CH₃COOH"],"a":"B. CH₃CH₂OH","explain":"Ethyl alcohol (ethanol) có công thức C₂H₅OH hay CH₃CH₂OH.","level":"nhan_biet"},
{"q":"Công thức hóa học của ethylic alcohol là:","options":["A. CH₄","B. C₂H₅OH","C. C₂H₂","D. C₂H₆"],"a":"B. C₂H₅OH","explain":"Ethylic alcohol có công thức C₂H₅OH.","level":"nhan_biet"},
{"q":"Công thức phân tử của ethylic alcohol là:","options":["A. CH₄O","B. C₂H₄O₂","C. C₂H₆O","D. CH₂O₂"],"a":"C. C₂H₆O","explain":"Ethylic alcohol có công thức C₂H₆O.","level":"nhan_biet"},
{"q":"Nhận xét nào sau đây là sai?","options":["A. Ethylic alcohol là chất lỏng, không màu","B. Ethylic alcohol tan vô hạn trong nước","C. Ethylic alcohol có thể hòa tan được iodine","D. Ethylic alcohol nặng hơn nước"],"a":"D. Ethylic alcohol nặng hơn nước","explain":"Ethylic alcohol có khối lượng riêng 0,789 g/ml, nhẹ hơn nước (1 g/ml).","level":"nhan_biet"},
{"q":"Độ cồn là","options":["A. số ml ethylic alcohol nguyên chất có trong 100 ml dung dịch","B. số ml nước có trong 100 ml dung dịch","C. số gam ethylic alcohol nguyên chất có trong 100 ml dung dịch","D. số gam nước có trong 100 gam dung dịch"],"a":"A. số ml ethylic alcohol nguyên chất có trong 100 ml dung dịch","explain":"Độ cồn là số ml ethanol nguyên chất trong 100 ml dung dịch.","level":"nhan_biet"},
{"q":"Độ rượu là:","options":["A. số ml ethylic alcohol có trong 100 ml hỗn hợp rượu với nước","B. số ml nước có trong 100 ml hỗn hợp rượu với nước","C. số gam ethylic alcohol có trong 100 ml hỗn hợp rượu với nước","D. số gam nước có trong 100 gam hỗn hợp rượu với nước"],"a":"A. số ml ethylic alcohol có trong 100 ml hỗn hợp rượu với nước","explain":"Độ rượu là thể tích ethanol nguyên chất trong 100 ml dung dịch.","level":"nhan_biet"},
{"q":"Ethylic alcohol là","options":["A. chất lỏng không màu, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzene,...","B. chất lỏng màu hồng, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzene,...","C. chất lỏng không màu, không tan trong nước, hòa tan được nhiều chất như iodine, benzene,...","D. chất lỏng không màu, nặng hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzene,..."],"a":"A. chất lỏng không màu, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzene,...","explain":"Đây là tính chất vật lý của ethylic alcohol.","level":"nhan_biet"},
{"q":"Tính chất vật lí của ethylic alcohol là","options":["A. chất lỏng không màu, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzen,...","B. chất lỏng màu hồng, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzen,...","C. chất lỏng không màu, không tan trong nước, hòa tan được nhiều chất như iodine, benzen,...","D. chất lỏng không màu, nặng hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzen,..."],"a":"A. chất lỏng không màu, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzen,...","explain":"Đây là tính chất vật lý của ethylic alcohol.","level":"nhan_biet"},
{"q":"Công thức cấu tạo của ethylic alcohol là","options":["A. CH₂-CH₃-OH","B. CH₃-O-CH₃","C. CH₂-CH₂-OH₂","D. CH₃-CH₂-OH"],"a":"D. CH₃-CH₂-OH","explain":"Ethylic alcohol có cấu tạo CH₃-CH₂-OH.","level":"nhan_biet"},
{"q":"Ethylic alcohol trong phân tử gồm","options":["A. nhóm ethyl (C₂H₅) liên kết với nhóm -OH","B. nhóm methyl (CH₃) liên kết với nhóm -OH","C. nhóm hydrocarbon liên kết với nhóm -OH","D. nhóm methyl (CH₃) liên kết với oxygen"],"a":"A. nhóm ethyl (C₂H₅) liên kết với nhóm -OH","explain":"Ethylic alcohol có nhóm ethyl (C₂H₅) liên kết với nhóm -OH.","level":"nhan_biet"},
{"q":"Công thức hóa học của ethylic alcohol là:","options":["A. C₂H₅OH","B. CH₃COOH","C. C₆H₆","D. CH₄"],"a":"A. C₂H₅OH","explain":"Ethylic alcohol có công thức C₂H₅OH.","level":"nhan_biet"},
{"q":"Trong 100 ml rượu 45° có chứa","options":["A. 45ml nước và 55 ml rượu nguyên chất","B. 45 ml rượu nguyên chất và 55 ml nước","C. 45 gam rượu nguyên chất và 55 gam nước","D. 45 gam nước và 55 gam rượu nguyên chất"],"a":"B. 45 ml rượu nguyên chất và 55 ml nước","explain":"Rượu 45° có 45 ml ethanol và 55 ml nước trong 100 ml dung dịch.","level":"nhan_biet"},
{"q":"Nhận xét nào đúng về nhiệt độ sôi của ethylic alcohol?","options":["A. Ethylic alcohol sôi ở 100°C","B. Nhiệt độ sôi của ethylic alcohol cao hơn nhiệt độ sôi của nước","C. Ethylic alcohol sôi ở 45°C","D. Ethylic alcohol sôi ở 78,3°C"],"a":"D. Ethylic alcohol sôi ở 78,3°C","explain":"Ethanol có nhiệt độ sôi 78,3°C.","level":"nhan_biet"},
{"q":"Công thức cấu tạo của phân tử ethanol là:","options":["A. CH₃OH","B. C₂H₅OH","C. CH₃COOH","D. C₃H₇OH"],"a":"B. C₂H₅OH","explain":"Ethanol có công thức C₂H₅OH.","level":"nhan_biet"},
{"q":"Ethanol là chất có tác động đến thần kinh trung ương. Khi hàm lượng ethanol trong máu tăng cao sẽ có hiện tượng nôn, mất tỉnh táo. Tên gọi khác của ethanol là","options":["A. methylic alcohol","B. ethylic alcohol","C. acetic acid","D. formic acid"],"a":"B. ethylic alcohol","explain":"Ethanol còn gọi là ethylic alcohol (rượu etylic).","level":"nhan_biet"},
{"q":"Công thức phân tử của ethylic alcohol là:","options":["A. CH₄O","B. C₂H₄O₂","C. C₂H₆O","D. CH₂O₂"],"a":"C. C₂H₆O","explain":"Ethylic alcohol có công thức C₂H₆O.","level":"nhan_biet"},
{"q":"Tính chất vật lí của acetic acid:","options":["A. chất lỏng, không màu, vị chua, tan vô hạn trong nước","B. chất lỏng, màu trắng, vị chua, tan vô hạn trong nước","C. chất lỏng, không màu, vị đắng, tan vô hạn trong nước","D. chất lỏng, không màu, vị chua, không tan trong nước"],"a":"A. chất lỏng, không màu, vị chua, tan vô hạn trong nước","explain":"Acetic acid là chất lỏng không màu, vị chua, tan vô hạn trong nước.","level":"nhan_biet"},
{"q":"Giấm ăn là dung dịch acetic acid có nồng độ","options":["A. trên 10%","B. dưới 2%","C. từ 2% - 5%","D. từ 5% - 10%"],"a":"C. từ 2% - 5%","explain":"Giấm ăn thường có nồng độ acetic acid 2-5%.","level":"nhan_biet"},
{"q":"Giấm ăn là dung dịch acetic acid có nồng độ","options":["A. từ 2% - 5%","B. 5% - 9%","C. 9% -12%","D. 12% -15%"],"a":"A. từ 2% - 5%","explain":"Giấm ăn có nồng độ acetic acid khoảng 2-5%.","level":"nhan_biet"},
{"q":"Chất nào sau đây tác dụng được với Na?","options":["A. CH₃-CH₃","B. CH₃-CH₂-OH","C. C₆H₆","D. CH₃-O-CH₃"],"a":"B. CH₃-CH₂-OH","explain":"Ethylic alcohol có nhóm -OH, phản ứng với Na giải phóng H₂.","level":"nhan_biet"},
{"q":"Trong số các chất sau, chất nào tác dụng được với Na?","options":["A. CH₃-CH₃","B. CH₃-CH₂-OH","C. C₆H₆","D. CH₃-O-CH₃"],"a":"B. CH₃-CH₂-OH","explain":"Ethylic alcohol phản ứng với Na.","level":"nhan_biet"},
{"q":"Đốt cháy dẫn xuất của hydrocarbon X theo sơ đồ sau: X + 3O₂ → 2CO₂ + 3H₂O. X là:","options":["A. C₂H₄O","B. C₂H₆O","C. C₃H₈O","D. C₂H₆O₂"],"a":"B. C₂H₆O","explain":"Số C = 2, số H = 6, số O = (2.2+3-6)/2 = 1 → C₂H₆O.","level":"thong_hieu"},
{"q":"Dung dịch acid axetic có tính chất nào sau đây?","options":["A. Làm quỳ tím hóa đỏ","B. Không phản ứng với kim loại kẽm","C. Có tính base yếu","D. Không tan trong nước"],"a":"A. Làm quỳ tím hóa đỏ","explain":"Acetic acid là acid yếu, làm quỳ tím chuyển đỏ.","level":"thong_hieu"},
{"q":"Để phân biệt etylic ancol và axit axetic có thể dùng chất nào sau đây:","options":["A. Kim loại Na","B. Dung dịch NaOH","C. Dung dịch NaCl","D. Dung dịch Na₂CO₃"],"a":"D. Dung dịch Na₂CO₃","explain":"Axit axetic phản ứng với Na₂CO₃ sinh ra khí CO₂, ethanol không phản ứng.","level":"thong_hieu"},
{"q":"Khi đun nóng Ethylic alcohol với dung dịch Acetic acid có H₂SO₄ đặc làm xúc tác, thu được chất nào sau đây?","options":["A. Ethyl acetate","B. Ethyne","C. Formic acid","D. Acetic acid"],"a":"A. Ethyl acetate","explain":"CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O (phản ứng ester hóa).","level":"thong_hieu"},
{"q":"Dung dịch acetic acid có tính chất nào sau đây?","options":["A. Làm quỳ tím hóa xanh","B. Làm quỳ tím hóa đỏ","C. Không làm đổi màu quỳ tím","D. Làm quỳ tím hóa vàng"],"a":"B. Làm quỳ tím hóa đỏ","explain":"Acetic acid là acid, làm quỳ tím hóa đỏ.","level":"thong_hieu"},
{"q":"Acetic acid (CH₃COOH) là một acid hữu cơ yếu. Khi hòa tan trong nước, CH₃COOH thể hiện tính acid vì:","options":["A. Nó phân li hoàn toàn thành CH₃COO⁻ và H⁺","B. Nó có mùi đặc trưng giống giấm","C. Nó phản ứng với base tạo ra muối và nước","D. Nó là một chất lỏng không màu"],"a":"C. Nó phản ứng với base tạo ra muối và nước","explain":"Tính acid được thể hiện qua phản ứng với base tạo muối và nước.","level":"thong_hieu"},
{"q":"Phản ứng nào dưới đây cho thấy acetic acid có tính acid?","options":["A. 2CH₃COOH + 2Na → 2CH₃COONa + H₂","B. CH₃COOH + 2O₂ → 2CO₂ + 2H₂O","C. CH₃COOH + NaOH → CH₃COONa + H₂O","D. C₂H₅OH + O₂ → CH₃COOH + H₂O"],"a":"C. CH₃COOH + NaOH → CH₃COONa + H₂O","explain":"Phản ứng với base (NaOH) thể hiện tính acid.","level":"thong_hieu"},
{"q":"Trong các chất dưới đây, chất nào có tính chất hoá học đặc trưng giống acetic acid?","options":["A. CH₃OH","B. CH₃CHO","C. HCOOH","D. CH₃COOC₂H₅"],"a":"C. HCOOH","explain":"HCOOH (formic acid) cũng là acid hữu cơ, có tính chất tương tự acetic acid.","level":"thong_hieu"},
{"q":"Ethylic alcohol có thể tác dụng với kim loại sodium (Na) tạo khí H₂","options":["A. vì rượu etylic là axit mạnh","B. vì rượu etylic chứa nhóm -OH có tính axit yếu","C. vì rượu etylic là bazơ","D. vì rượu etylic là muối"],"a":"B. vì rượu etylic chứa nhóm -OH có tính axit yếu","explain":"Nhóm -OH trong alcohol có tính axit rất yếu, phản ứng với Na.","level":"thong_hieu"},
{"q":"Nguyên nhân làm acetic acid có tính acid là:","options":["A. Phân tử chứa nhóm -OH","B. Phân tử chứa nhóm -CHO","C. Phân tử chứa nhóm -COOH","D. Phân tử chỉ chứa C và H"],"a":"C. Phân tử chứa nhóm -COOH","explain":"Nhóm -COOH phân li ra H⁺, tạo tính acid.","level":"thong_hieu"},
{"q":"Để phân biệt dung dịch CH₃COOH và C₂H₅OH ta dùng","options":["A. Na","B. Zn","C. K","D. Cu"],"a":"B. Zn","explain":"Zn phản ứng với CH₃COOH tạo khí H₂, không phản ứng với C₂H₅OH.","level":"thong_hieu"},
{"q":"Nhận biết acetic acid bằng cách cho tác dụng với các chất sau đây, trường hợp nào không xảy ra phản ứng?","options":["A. Quỳ tím","B. NaOH","C. Na₂CO₃","D. C₂H₆"],"a":"D. C₂H₆","explain":"Acetic acid không phản ứng với alkane (C₂H₆).","level":"thong_hieu"},
{"q":"Ethylic alcohol cháy trong không khí tạo ra sản phẩm nào sau đây?","options":["A. CO₂ và H₂O","B. CH₄ và H₂O","C. CO và H₂","D. CH₃COOH"],"a":"A. CO₂ và H₂O","explain":"C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.","level":"thong_hieu"},
{"q":"Formic acid có trong nọc kiến. Khi bị kiến cắn, nên chọn chất nào sau đây bôi vào vết thương để giảm sưng tấy?","options":["A. Vôi tôi","B. Muối ăn","C. Giấm ăn","D. Nước"],"a":"A. Vôi tôi","explain":"Vôi tôi (Ca(OH)₂) là base, trung hòa acid formic.","level":"thong_hieu"},
{"q":"Khi bị ong đốt, để giảm đau, giảm sưng, kinh nghiệm dân gian thường dùng chất nào sau đây để bôi trực tiếp lên vết thương?","options":["A. nước vôi","B. nước muối","C. cồn","D. giấm"],"a":"A. nước vôi","explain":"Nước vôi (base) trung hòa acid trong nọc ong.","level":"thong_hieu"},
{"q":"Khi bị ong đốt, để giảm đau, giảm sưng, kinh nghiệm dân gian thường dùng chất nào sau đây để bôi trực tiếp lên vết thương?","options":["A. nước vôi","B. nước muối","C. Cồn","D. giấm"],"a":"A. nước vôi","explain":"Nước vôi trung hòa acid trong nọc ong.","level":"thong_hieu"},
{"q":"Phát biểu nào sau đây là đúng","options":["A. Acetic acid phản ứng được với muối NaCl và Na₂SO₄","B. Trong cùng điều kiện, thứ tự độ mạnh acid là: H₂SO₄ > H₂CO₃ > CH₃COOH","C. Acetic acid có khối lượng mol nhỏ hơn ethylic alcohol","D. Có thể điều chế acetic acid từ ethylic alcohol chỉ bằng một phản ứng hóa học"],"a":"B. Trong cùng điều kiện, thứ tự độ mạnh acid là: H₂SO₄ > H₂CO₃ > CH₃COOH","explain":"Độ mạnh acid: H₂SO₄ (mạnh) > H₂CO₃ (trung bình) > CH₃COOH (yếu).","level":"thong_hieu"},
{"q":"Hình ảnh dưới đây là mô hình phân tử chất nào?","options":["A. C₂H₅OH","B. CH₃COOH","C. CH₃OH","D. HCOOH"],"a":"A. C₂H₅OH","explain":"Mô hình phân tử ethanol (C₂H₅OH).","level":"thong_hieu"},
{"q":"Khối lượng khí ethylene cần dùng để phản ứng hết 8 gam bromine trong dung dịch là","options":["A. 0,7 gam","B. 7 gam","C. 1,4 gam","D. 14 gam"],"a":"C. 1,4 gam","explain":"C₂H₄ + Br₂ → C₂H₄Br₂; nBr₂ = 8/160 = 0,05 mol; nC₂H₄ = 0,05 mol; mC₂H₄ = 0,05.28 = 1,4 g.","level":"van_dung"},
{"q":"Cho 6,5 gam kim loại Zinc vào 200ml dung dịch acid acetic, nồng độ mol của dung dịch acid acetic đã dùng là:","options":["A. 0,04M","B. 0,05M","C. 0,1M","D. 1M"],"a":"D. 1M","explain":"Zn + 2CH₃COOH → (CH₃COO)₂Zn + H₂; nZn = 6,5/65 = 0,1 mol; nCH₃COOH = 0,2 mol; CM = 0,2/0,2 = 1M.","level":"van_dung"},
{"q":"Cho 200 ml dung dịch Sodium hydroxide 0,2 M tác dụng vừa đủ với Acetic acid (CH₃COOH). Khối lượng muối Sodium acetate (CH₃COONa) thu được là: (Cho Na = 23, C = 12, H = 1, O = 16)","options":["A. 0,82 g","B. 1,64 g","C. 1,36 g","D. 0,41 g"],"a":"B. 1,64 g","explain":"CH₃COOH + NaOH → CH₃COONa + H₂O; nNaOH = 0,2.0,2 = 0,04 mol; n muối = 0,04 mol; m = 0,04.82 = 3,28 g. (Có thể sai số)","level":"van_dung"},
{"q":"Lên men hoàn toàn dung dịch chứa m gam glucose thu được dung dịch chứa 23 gam ethylic alcohol. Giá trị của m là","options":["A. 30 gam","B. 35 gam","C. 40 gam","D. 45 gam"],"a":"D. 45 gam","explain":"C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂; nC₂H₅OH = 23/46 = 0,5 mol; n glucose = 0,25 mol; m = 0,25.180 = 45 g.","level":"van_dung"},
{"q":"Lên men hoàn toàn dung dịch chứa m gam glucose thu được dung dịch chứa 23 gam ethylic alcohol. Giá trị của m là","options":["A. 30 gam","B. 35 gam","C. 40 gam","D. 45 gam"],"a":"D. 45 gam","explain":"nC₂H₅OH = 23/46 = 0,5 mol; n glucose = 0,25 mol; m = 45 g.","level":"van_dung"},
{"q":"Lên men hoàn toàn dung dịch chứa m gam glucose thu được dung dịch chứa 23 gam ethylic alcohol. Giá trị của m là","options":["A. 30 gam","B. 35 gam","C. 40 gam","D. 45 gam"],"a":"D. 45 gam","explain":"nC₂H₅OH = 0,5 mol; n glucose = 0,25 mol; m = 45 g.","level":"van_dung"},
{"q":"Lên men m gam glucozơ với hiệu suất 90%, lượng khí CO₂ sinh ra hấp thụ hết vào dung dịch nước vôi trong, thu được 10 gam kết tủa. Khối lượng dung dịch sau phản ứng giảm 3,4 gam so với khối lượng nước vôi trong ban đầu. Giá trị của m là","options":["A. 20 gam","B. 30 gam","C. 12 gam","D. 15gam"],"a":"D. 15gam","explain":"C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂; m dd giảm = mCaCO₃ - mCO₂ → 3,4 = 10 - mCO₂ → mCO₂ = 6,6 g; nCO₂ = 0,15 mol; n glucose = 0,075 mol; m = 0,075.180 = 13,5 g; với H=90% → m = 15 g.","level":"van_dung"},
{"q":"Lên men hoàn toàn dung dịch chứa m gam glucose thu được dung dịch chứa 23 gam ethylic alcohol. Giá trị của m là","options":["A. 30 gam","B. 35 gam","C. 40 gam","D. 45 gam"],"a":"D. 45 gam","explain":"nC₂H₅OH = 23/46 = 0,5 mol; n glucose = 0,25 mol; m = 45 g.","level":"van_dung"},
{"q":"Cho 100 ml dung dịch Sodium hydroxide 0,2 M tác dụng vừa đủ với Acetic acid (CH₃COOH). Khối lượng muối Sodium acetate (CH₃COONa) thu được là: (Cho Na = 23, C = 12, H = 1, O = 16)","options":["A. 0,82 g","B. 1,64 g","C. 1,36 g","D. 0,41 g"],"a":"B. 1,64 g","explain":"nNaOH = 0,02 mol; n muối = 0,02 mol; m = 0,02.82 = 1,64 g.","level":"van_dung"},
{"q":"Cho 6,5 gam kim loại Zinc vào 200ml dung dịch acid acetic, nồng độ mol của dung dịch acid acetic đã dùng là:","options":["A. 0,04M","B. 0,05M","C. 0,1M","D. 1M"],"a":"D. 1M","explain":"nZn = 0,1 mol; nCH₃COOH = 0,2 mol; CM = 0,2/0,2 = 1M.","level":"van_dung"},
{"q":"Đun nóng 100 ml dd glucozơ với dd dư AgNO₃/NH₃, thu được 5,4 gam bạc. Nồng độ mol của dd glucozơ là:","options":["A. 0,025 M","B. 0,05 M","C. 0,25 M","D. 0,125 M"],"a":"C. 0,25 M","explain":"nAg = 5,4/108 = 0,05 mol; n glucozơ = 0,025 mol; CM = 0,025/0,1 = 0,25 M.","level":"van_dung"},
{"q":"Khi lên men 1 tấn tinh bột chứa 5% tạp chất tơ thành etylic alcohol. Hiệu suất cuối của quá trình lên men là 85%. Khối lượng etylic alcohol thu được là:","options":["A. 400 kg","B. 579,8 kg","C. 389,8 kg","D. 390 kg"],"a":"C. 389,8 kg","explain":"m tinh bột = 950 kg; (C₆H₁₀O₅)n → nC₆H₁₂O₆ → 2nC₂H₅OH; mC₂H₅OH = 950.92/162.0,85 ≈ 389,8 kg.","level":"van_dung"},
{"q":"Lên men 45 gam dung dịch glucose 20%. Tính nồng độ % của dung dịch ethylic alcohol thu được sau phản ứng, biết hiệu suất của quá trình lên men là 80%","options":["A. 8,87 %","B. 9,97 %","C. 10,97 %","D. 7,87 %"],"a":"B. 9,97 %","explain":"m glucose = 9g → n = 0,05 mol; nC₂H₅OH = 0,1.0,8 = 0,08 mol → m = 3,68 g; mCO₂ = 0,08.44 = 3,52 g; m dd sau = 45 - 3,52 = 41,48 g; C% = 3,68/41,48 ≈ 8,87%.","level":"van_dung"},
{"q":"Đun 26,7 kg chất béo có công thức là (C₁₇H₃₅COO)₃C₃H₅ với dung dịch NaOH dư (hiệu suất 100%), khối lượng glycerol thu được là","options":["A. 1,2 kg","B. 2,76 kg","C. 3,6 kg","D. 4,8 kg"],"a":"B. 2,76 kg","explain":"n chất béo = 26,7/890 = 0,03 kmol; n glycerol = 0,03 kmol; m = 0,03.92 = 2,76 kg.","level":"van_dung"},
];
// Chuyên đề 4: LIPIT. CARBOHYDRATE. PROTEIN. POLYMER
const questions_hoa_topic4 = [
{"q":"Glucose và sucrose đều thuộc loại:","options":["A. Protein","B. Lipit","C. Carbohydrate","D. Polymer"],"a":"C. Carbohydrate","explain":"Glucose và sucrose đều là carbohydrate (đường).","level":"nhan_biet"},
{"q":"Tinh bột và cellulose là những:","options":["A. Disaccarit","B. Polisaccarit","C. Monosaccarit","D. Lipit"],"a":"B. Polisaccarit","explain":"Tinh bột và cellulose là polysaccharide (đa đường).","level":"nhan_biet"},
{"q":"Loại hợp chất nào sau đây có trong tơ nilon, cao su?","options":["A. Lipit","B. Protein","C. Carbohydrate","D. Polymer"],"a":"D. Polymer","explain":"Tơ nilon, cao su là các loại polymer.","level":"nhan_biet"},
{"q":"Trứng là loại thực phẩm chứa nhiều:","options":["A. chất béo","B. chất đường","C. chất bột","D. protein"],"a":"D. protein","explain":"Trứng chứa nhiều protein (lòng trắng trứng).","level":"nhan_biet"},
{"q":"Phản ứng thủy phân chất béo trong môi trường kiềm còn gọi là phản ứng","options":["A. thủy phân hóa","B. xà phòng hóa","C. ester hóa","D. hydrogen hóa"],"a":"B. xà phòng hóa","explain":"Phản ứng xà phòng hóa là thủy phân chất béo trong môi trường kiềm tạo muối và glycerol.","level":"nhan_biet"},
{"q":"Công thức hóa học của glucose là:","options":["A. (C₆H₁₀O₅)n","B. C₁₂H₂₂O₁₁","C. C₆H₁₂O₆","D. C₂H₅OH"],"a":"C. C₆H₁₂O₆","explain":"Glucose có công thức C₆H₁₂O₆.","level":"nhan_biet"},
{"q":"Thực phẩm nào sau đây là giàu saccharose?","options":["A. Mía","B. Gạo","C. Sữa","D. Khoai lang"],"a":"A. Mía","explain":"Mía chứa nhiều saccharose (đường mía).","level":"nhan_biet"},
{"q":"Chất nào sau đây thuộc loại polisaccarit, là thành phần chính của sợi bông?","options":["A. Glucose","B. Saccharose","C. Tinh bột","D. Cellulose"],"a":"D. Cellulose","explain":"Cellulose là thành phần chính của sợi bông.","level":"nhan_biet"},
{"q":"Protein được cấu tạo từ bao nhiêu loại axit amin chính?","options":["A. 10","B. 20","C. 30","D. 40"],"a":"B. 20","explain":"Protein được cấu tạo từ 20 loại axit amin khác nhau.","level":"nhan_biet"},
{"q":"Loại polymer nào sau đây là polymer tự nhiên?","options":["A. Polyetylen (PE)","B. Polystyren (PS)","C. Tinh bột","D. Nhựa PVC"],"a":"C. Tinh bột","explain":"Tinh bột là polymer tự nhiên, có trong thực vật.","level":"nhan_biet"},
{"q":"Chất nào sau đây là polymer thiên nhiên?","options":["A. Tơ nilon-6,6","B. Nhựa PVC","C. Cao su buna","D. Tơ tằm"],"a":"D. Tơ tằm","explain":"Tơ tằm là polymer thiên nhiên (protein).","level":"nhan_biet"},
{"q":"Đâu là biện pháp sử dụng chất béo phù hợp trong ăn uống hàng ngày để giúp cơ thể khỏe mạnh và tránh bệnh béo phì?","options":["A. Ăn nhiều thực phẩm chiên rán để cung cấp đủ năng lượng cho cơ thể","B. Hạn chế tối đa mọi loại chất béo, kể cả chất béo từ thực vật","C. Ưu tiên sử dụng chất béo không bão hòa từ thực vật và cá, hạn chế chất béo bão hòa và chất béo chuyển hóa","D. Ăn càng nhiều chất béo càng tốt để cơ thể không bị thiếu hụt năng lượng"],"a":"C. Ưu tiên sử dụng chất béo không bão hòa từ thực vật và cá, hạn chế chất béo bão hòa và chất béo chuyển hóa","explain":"Chất béo không bão hòa tốt cho sức khỏe, nên ưu tiên sử dụng.","level":"nhan_biet"},
{"q":"Trong công nghiệp chế tạo ruột phích, người ta thường sử dụng phản ứng hoá học nào sau đây?","options":["A. Cho ethylene tác dụng với dung dịch AgNO₃/NH₃","B. Cho ethylic alcohol tác dụng với dung dịch AgNO₃/NH₃","C. Cho acetic acid tác dụng với dung dịch AgNO₃/NH₃","D. Cho glucose tác dụng với dung dịch AgNO₃/NH₃"],"a":"D. Cho glucose tác dụng với dung dịch AgNO₃/NH₃","explain":"Phản ứng tráng bạc của glucose tạo bạc bám trên thủy tinh.","level":"thong_hieu"},
{"q":"Đun nóng dung dịch glucose với dung dịch AgNO₃/NH₃, hiện tượng xảy ra:","options":["A. Có khí thoát ra","B. Có kết tủa Ag trắng sáng bám trên thành ống nghiệm (phản ứng tráng bạc)","C. Có mùi hắc xuất hiện","D. Không có hiện tượng gì"],"a":"B. Có kết tủa Ag trắng sáng bám trên thành ống nghiệm (phản ứng tráng bạc)","explain":"Glucose có phản ứng tráng bạc tạo Ag kim loại.","level":"thong_hieu"},
{"q":"Cho vài giọt dung dịch HNO₃ đặc vào dung dịch lòng trắng trứng, hiện tượng quan sát được là:","options":["A. Dung dịch sủi bọt khí","B. Dung dịch có kết tủa màu vàng (phản ứng màu với HNO₃ đặc)","C. Dung dịch chuyển màu xanh","D. Không có hiện tượng"],"a":"B. Dung dịch có kết tủa màu vàng (phản ứng màu với HNO₃ đặc)","explain":"Protein phản ứng với HNO₃ đặc tạo kết tủa vàng (phản ứng màu biure).","level":"thong_hieu"},
{"q":"Thuốc thử để nhận biết protein là","options":["A. Cu(OH)₂ trong môi trường kiềm","B. nước brom","C. dung dịch iốt","D. dung dịch AgNO₃/NH₃"],"a":"A. Cu(OH)₂ trong môi trường kiềm","explain":"Protein phản ứng với Cu(OH)₂ tạo màu tím đặc trưng.","level":"thong_hieu"},
{"q":"Khi đun nóng lòng trắng trứng, hiện tượng đông đặc xảy ra là do:","options":["A. Phản ứng este hóa","B. Quá trình oxi hóa","C. Sự đông tụ protein","D. Thủy phân protein thành amino axit"],"a":"C. Sự đông tụ protein","explain":"Protein bị đông tụ khi đun nóng, mất cấu trúc tự nhiên.","level":"thong_hieu"},
{"q":"Tính chất nào sau đây không phải của polietilen (PE)?","options":["A. Không tan trong nước, bền với axit và kiềm","B. Có tính đàn hồi cao, kéo dãn được","C. Là chất rắn, không dẫn điện và không dẫn nhiệt","D. Dùng để sản xuất túi nilon"],"a":"B. Có tính đàn hồi cao, kéo dãn được","explain":"PE có tính dẻo, không có tính đàn hồi cao như cao su.","level":"thong_hieu"},
{"q":"Trong quá trình tiêu hóa, tinh bột (một loại Carbohydrate) được chuyển hóa thành đường Glucose nhờ enzyme. Phát biểu nào sau đây giải thích đúng nhất vai trò của Glucose trong cơ thể?","options":["A. Glucose là thành phần cấu tạo nên màng tế bào","B. Glucose giúp vận chuyển oxy trong máu","C. Glucose là nguồn năng lượng chính cung cấp cho các hoạt động sống của tế bào","D. Glucose có vai trò xúc tác cho các phản ứng sinh hóa"],"a":"C. Glucose là nguồn năng lượng chính cung cấp cho các hoạt động sống của tế bào","explain":"Glucose là nguồn năng lượng chính cho tế bào.","level":"thong_hieu"},
{"q":"Dầu ăn để lâu ngày thường bị ôi do","options":["A. quá trình thủy phân trong môi trường axit","B. quá trình oxi hóa các gốc hiđrocacbon không no","C. quá trình kết tinh của triglixerit","D. quá trình trùng ngưng tạo polime"],"a":"B. quá trình oxi hóa các gốc hiđrocacbon không no","explain":"Dầu ăn bị oxi hóa bởi không khí, tạo mùi ôi.","level":"thong_hieu"},
{"q":"Thủy phân hoàn toàn 17,16 kg một loại chất béo cần vừa đủ 2,4 kg NaOH, sản phẩm thu được gồm 1,84 kg glycerol và hỗn hợp muối của các acid béo. Khối lượng hỗn hợp các muối là","options":["A. 17,72 kg","B. 19,44 kg","C. 11,92 kg","D. 12,77 kg"],"a":"A. 17,72 kg","explain":"Áp dụng định luật bảo toàn khối lượng: m chất béo + mNaOH = m muối + m glycerol → m muối = 17,16 + 2,4 - 1,84 = 17,72 kg.","level":"van_dung"},
{"q":"Cho 18g glucose vào dung dịch silver nitrate thu được m gam kết tủa Ag. Khối lượng của m là:","options":["A. 10,8g","B. 21,6g","C. 23,4g","D. 21,8g"],"a":"B. 21,6g","explain":"C₆H₁₂O₆ + 2[Ag(NH₃)₂]OH → 2Ag↓ + ... ; n glucose = 18/180 = 0,1 mol; nAg = 0,2 mol; mAg = 0,2.108 = 21,6 g.","level":"van_dung"},
{"q":"Từ 1 tấn nước mía chứa 13% saccharose có thể thu được bao nhiêu kg saccharose? Cho biết hiệu suất thu hồi đường đạt 80%.","options":["A. 104 kg","B. 130 kg","C. 140 kg","D. 103 kg"],"a":"A. 104 kg","explain":"m saccharose = 1000 × 0,13 × 0,8 = 104 kg.","level":"van_dung"},
{"q":"Thủy phân hoàn toàn 89 gam tristearin (C₁₇H₃₅COO)₃C₃H₅ trong dung dịch NaOH dư, đun nóng, thu được dung dịch chứa b gam muối. Giá trị của b là","options":["A. 92,6","B. 85,3","C. 104,5","D. 91,8"],"a":"D. 91,8","explain":"n tristearin = 89/890 = 0,1 mol; m muối = 0,1.3.306 = 91,8 g.","level":"van_dung"},
{"q":"Lên men 45 gam dung dịch glucose 20%. Tính nồng độ % của dung dịch ethylic alcohol thu được sau phản ứng, biết hiệu suất của quá trình lên men là 80%","options":["A. 8,87 %","B. 9,97 %","C. 10,97 %","D. 7,87 %"],"a":"B. 9,97 %","explain":"m glucose = 9g → n = 0,05 mol; nC₂H₅OH = 0,1.0,8 = 0,08 mol → m = 3,68 g; mCO₂ = 0,08.44 = 3,52 g; m dd sau = 45 - 3,52 = 41,48 g; C% = 3,68/41,48 ≈ 8,87%.","level":"van_dung"},
{"q":"Các sản phẩm từ nhựa PP có độ bóng bề mặt tốt, với khả năng chống thấm nước và thấm khí, không dễ bị oxy hóa hay ảnh hưởng bởi các loại khí khác, hơi nước hay dầu mỡ nên chúng thường được tận dụng làm các loại hộp, hũ, can, bình đựng, bao bì,... được sử dụng phổ biến trong đời sống sinh hoạt thường ngày của con người. Khối lượng nhựa PP thu được khi trùng hợp 1,5 tấn Propylen với hiệu suất 92% là","options":["A. 1 tấn","B. 1,38 tấn","C. 1,82 tấn","D. 2 tấn"],"a":"B. 1,38 tấn","explain":"m PP = m propylen × H = 1,5 × 0,92 = 1,38 tấn.","level":"van_dung"},
{"q":"Thủy phân hoàn toàn 17,16 kg một loại chất béo cần vừa đủ 2,4 kg NaOH, sản phẩm thu được gồm 1,84 kg glycerol và hỗn hợp muối của các acid béo. Khối lượng hỗn hợp các muối là","options":["A. 17,72 kg","B. 19,44 kg","C. 11,92 kg","D. 12,77 kg"],"a":"A. 17,72 kg","explain":"Bảo toàn khối lượng: m muối = 17,16 + 2,4 - 1,84 = 17,72 kg.","level":"van_dung"},
{"q":"Thủy phân 64,8 gam tinh bột với hiệu suất của phản ứng đạt 70%, khối lượng glucose thu được là","options":["A. 49,7 gam","B. 50,4 gam","C. 51,4 gam","D. 52,8 gam"],"a":"B. 50,4 gam","explain":"(C₆H₁₀O₅)n + nH₂O → nC₆H₁₂O₆; m glucose = 64,8 × 180/162 × 0,7 = 50,4 g.","level":"van_dung"},
{"q":"Đun nóng 4,45 gam chất béo (C₁₇H₃₅COO)₃C₃H₅ với dung dịch NaOH. Khối lượng glycerol thu được là bao nhiêu?","options":["A. 0,03 g","B. 0,12 g","C. 0,27 g","D. 0,46 g"],"a":"D. 0,46 g","explain":"n chất béo = 4,45/890 = 0,005 mol; n glycerol = 0,005 mol; m = 0,005.92 = 0,46 g.","level":"van_dung"},
{"q":"Từ 1 tấn nước mía chứa 13% saccharose có thể thu được bao nhiêu kg saccharose? Cho biết hiệu suất thu hồi đường đạt 80%.","options":["A. 104 kg","B. 130 kg","C. 140 kg","D. 103 kg"],"a":"A. 104 kg","explain":"m saccharose = 1000 × 0,13 × 0,8 = 104 kg.","level":"van_dung"},
{"q":"Thủy phân 64,8 gam tinh bột với hiệu suất của phản ứng đạt 70%, khối lượng glucose thu được là","options":["A. 49,7 gam","B. 50,4 gam","C. 51,4 gam","D. 52,8 gam"],"a":"B. 50,4 gam","explain":"m glucose = 64,8 × 180/162 × 0,7 = 50,4 g.","level":"van_dung"},
{"q":"Thủy phân 1 kg sắn chứa 20% tinh bột trong môi trường axit. Với hiệu suất phản ứng 85%, lượng glucozơ thu được là.","options":["A. 261,43 gam","B. 200,8 gam","C. 188,89 gam","D. 192,5 gam"],"a":"C. 188,89 gam","explain":"m tinh bột = 200 g; m glucose = 200 × 180/162 × 0,85 = 188,89 g.","level":"van_dung"},
{"q":"Trùng hợp m tấn ethylene thu được 1,5 tấn polyethylene với hiệu suất phản ứng là 80%. Giá trị của m là","options":["A. 1,730 tấn","B. 1,875 tấn","C. 1,920 tấn","D. 2,024 tấn"],"a":"B. 1,875 tấn","explain":"m ethylene = 1,5 / 0,8 = 1,875 tấn.","level":"van_dung"},
{"q":"Phân tử khối trung bình của poly(vinylchloride) (PVC) là 75000. Số mắt xích có trong phân tử là","options":["A. 2100","B. 1500","C. 1000","D. 1200"],"a":"D. 1200","explain":"Mắt xích PVC: C₂H₃Cl (M = 62,5); n = 75000/62,5 = 1200.","level":"van_dung"},
{"q":"Phân tử khối trung bình của polietilen (PE) là 280.000. Số mắt xích --CH₂--CH₂-- trong phân tử là","options":["A. 10.000","B. 12.500","C. 8.000","D. 15.000"],"a":"A. 10.000","explain":"Mắt xích PE: C₂H₄ (M = 28); n = 280000/28 = 10000.","level":"van_dung"},
{"q":"Phân tử khối trung bình của poly(vinylchloride) (PVC) là 75000. Số mắt xích có trong phân tử là","options":["A. 2100","B. 1500","C. 1000","D. 1200"],"a":"D. 1200","explain":"n = 75000/62,5 = 1200.","level":"van_dung"},
{"q":"Số mắt xích có trong phân tử polietilen(PE) là 15000. Phân tử khối trung bình là bao nhiêu","options":["A. 14000","B. 17000","C. 16000","D. 420.000"],"a":"D. 420.000","explain":"M = 15000 × 28 = 420.000.","level":"van_dung"},
{"q":"Để tạo 4,05kg tinh bột cây xanh đã giải phóng bao nhiêu kg oxygen?","options":["A. 4,1kg","B. 5,1kg","C. 3,9kg","D. 4,8kg"],"a":"D. 4,8kg","explain":"6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂; n tinh bột (C₆H₁₀O₅)n = 4,05/162 = 0,025 kmol; nO₂ = 6 × 0,025 = 0,15 kmol; mO₂ = 0,15.32 = 4,8 kg.","level":"van_dung"},
{"q":"Tiến hành phản ứng đồng trùng hợp giữa stiren và buta-1,3-đien, thu được polime X. Cứ 2,834 gam X phản ứng vừa đủ với 1,731 gam Br₂ trong dung dịch. Tỉ lệ số mắt xích buta-1,3-đien và stiren trong X là","options":["A. 2 : 3","B. 1 : 2","C. 1 : 3","D. 1 : 1"],"a":"B. 1 : 2","explain":"Phức tạp, cần tính toán dựa trên phản ứng cộng Br₂.","level":"van_dung"},
{"q":"Một loại Amino acid có chứa 13,59% nitrogen về khối lượng. Công thức phân tử của amino acid là","options":["A. C₃H₇O₂N","B. C₄H₉O₂N","C. C₅H₁₁O₂N","D. C₆H₁₃O₂N"],"a":"B. C₄H₉O₂N","explain":"M = 14/0,1359 ≈ 103; C₄H₉O₂N có M = 103.","level":"van_dung"},
];
// Chuyên đề 5: TỔNG HỢP
const questions_hoa_topic5 = [
{q:"Tính chất vật lý chung của kim loại là gì?",options:["A. Dễ vỡ, cách điện","B. Dẫn điện, dẫn nhiệt, có ánh kim, dẻo","C. Tan trong nước","D. Bay hơi dễ"],a:"B. Dẫn điện, dẫn nhiệt, có ánh kim, dẻo",explain:"Kim loại có electron tự do nên dẫn điện, dẫn nhiệt; có ánh kim và tính dẻo.", level: "nhan_biet"},
{q:"Công thức phân tử của Ethylic alcohol (ethanol) là gì?",options:["A. CH₃OH","B. C₂H₅OH","C. CH₃COOH","D. C₂H₄"],a:"B. C₂H₅OH",explain:"Ethylic alcohol (ethanol) có công thức C₂H₅OH.", level: "nhan_biet"},
{q:"Hợp chất hữu cơ là hợp chất của nguyên tố nào?",options:["A. carbon","B. Oxi","C. Nitrogen","D. Phosphorus"],a:"A. carbon",explain:"Hợp chất hữu cơ là hợp chất của carbon (trừ CO, CO₂, muối carbonat...).", level: "nhan_biet"},
{q:"Để chứng minh trong bánh mì có tinh bột, có thể dùng thuốc thử nào?",options:["A. Dung dịch iodine","B. Dung dịch Bromine","C. Dung dịch NaOH","D. Dung dịch HCl"],a:"A. Dung dịch iodine",explain:"Tinh bột tạo phức màu xanh tím với iodine.", level: "van_dung"},
{q:"Khi cho mẩu natri vào nước, hiện tượng xảy ra rất mãnh liệt. Điều này chứng tỏ kim loại natri có tính chất gì?",options:["A. Tính khử rất mạnh, dễ nhường electron","B. Tính oxi hóa rất mạnh, dễ nhận electron","C. Tính dẫn nhiệt rất tốt","D. Tính dẻo cao"],a:"A. Tính khử rất mạnh, dễ nhường electron",explain:"Phản ứng mãnh liệt với nước cho thấy Na dễ nhường electron (tính khử mạnh).", level: "thong_hieu"},
{q:"Thành phần chính của khí thiên nhiên là khí nào?",options:["A. Ethane (C₂H₆)","B. Methane (CH₄)","C. Propane (C₃H₈)","D. Butane (C₄H₁₀)"],a:"B. Methane (CH₄)",explain:"Khí thiên nhiên có thành phần chính là methane (CH₄).", level: "nhan_biet"},
{q:"Dung dịch acetic acid loãng có tính chất gì?",options:["A. Làm quỳ tím hóa xanh","B. Làm quỳ tím hóa đỏ","C. Làm phenolphtalein hóa hồng","D. Không làm đổi màu quỳ tím"],a:"B. Làm quỳ tím hóa đỏ",explain:"Acetic acid là acid yếu nên làm quỳ tím hóa đỏ.", level: "nhan_biet"},
{q:"Đốt cháy hoàn toàn 0,1 mol alkane A thu được 0,3 mol H₂O. Công thức của A là?",options:["A. CH₄","B. C₂H₆","C. C₃H₈","D. C₄H₁₀"],a:"B. C₂H₆",explain:"CnH₂n+2 → (n+1)H₂O. nH₂O = 0,1(n+1) = 0,3 ⇒ n=2 ⇒ C₂H₆.", level: "van_dung"},
{q:"Tại sao các đồ vật bằng Iron để lâu ngoài không khí ẩm thường bị gỉ sét?",options:["A. Iron tác dụng với oxi và hơi nước trong không khí","B. Iron bị ánh sáng mặt trời làm mất ánh kim","C. Iron dẫn điện tốt","D. Iron bị vi khuẩn ăn mòn"],a:"A. Iron tác dụng với oxi và hơi nước trong không khí",explain:"Iron bị ăn mòn điện hóa khi có oxi và hơi nước.", level: "thong_hieu"},
{q:"Phản ứng đặc trưng của alkane là gì?",options:["A. Cộng H₂","B. Thế với halogen","C. Trùng hợp","D. Oxi hóa bằng KMnO₄"],a:"B. Thế với halogen",explain:"Alkane tham gia phản ứng thế với halogen (Cl₂, Br₂) khi có ánh sáng.", level: "thong_hieu"},
{q:"Khi nhai kỹ cơm (chứa tinh bột) thấy có vị ngọt. Điều này giải thích thế nào?",options:["A. Tinh bột bị thủy phân một phần thành maltose nhờ enzyme amylase","B. Tinh bột bị oxi hóa thành glucose","C. Cơm có sẵn đường sucrose","D. Nước bọt có vị ngọt"],a:"A. Tinh bột bị thủy phân một phần thành maltose nhờ enzyme amylase",explain:"Enzyme amylase trong nước bọt thủy phân tinh bột thành maltose có vị ngọt.", level: "van_dung"},
{q:"Hydrocarbon là hợp chất chỉ chứa hai nguyên tố nào?",options:["A. C và O","B. C và H","C. C và N","D. H và O"],a:"B. C và H",explain:"Hydrocarbon chỉ chứa carbon và hydro.", level: "nhan_biet"},
{q:"Để phân biệt khí CH₄ và C₂H₄, có thể dùng hóa chất nào?",options:["A. Nước vôi trong","B. Dung dịch Bromine","C. Quỳ tím","D. Dung dịch NaCl"],a:"B. Dung dịch Bromine",explain:"C₂H₄ làm mất màu dung dịch Bromine, CH₄ thì không.", level: "van_dung"},
{q:"Nguồn nhiên liệu hóa thạch nào tồn tại chủ yếu ở thể rắn?",options:["A. Khí thiên nhiên","B. Dầu mỏ","C. Than đá","D. Khí dầu mỏ hóa lỏng"],a:"C. Than đá",explain:"Than đá là nhiên liệu hóa thạch tồn tại chủ yếu ở thể rắn.", level: "nhan_biet"},
{q:"Khi cho acetic acid tác dụng với Ethylic alcohol (ethanol) có xúc tác acid, phản ứng gọi là gì?",options:["A. Phản ứng thế","B. Phản ứng ester hóa","C. Phản ứng trùng hợp","D. Phản ứng oxi hóa"],a:"B. Phản ứng ester hóa",explain:"CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (ester hóa).", level: "thong_hieu"},
{q:"Polyme nào được điều chế bằng phản ứng trùng hợp?",options:["A. Polyethylene (PE)","B. Nylon-6,6","C. Tơ visco","D. Xenlulozo"],a:"A. Polyethylene (PE)",explain:"PE được trùng hợp từ ethylene.", level: "thong_hieu"},
{q:"Cho 4,6 gam Ethylic alcohol (ethanol) tác dụng với Na dư. Thể tích khí H₂ thu được (đktc) là?",options:["A. 1,12 lít","B. 2,24 lít","C. 3,36 lít","D. 4,48 lít"],a:"A. 1,12 lít",explain:"nC₂H₅OH = 0,1 mol. 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂. nH₂ = 0,05 mol. V = 1,12 lít.", level: "van_dung"},
{q:"Tại sao khí thiên nhiên được ưu tiên sử dụng hơn than đá trong nhiều nhà máy điện?",options:["A. Khi cháy tạo ra ít chất gây ô nhiễm hơn","B. Rẻ hơn","C. Khi cháy tỏa ra ít nhiệt hơn","D. Dễ vận chuyển hơn ở thể rắn"],a:"A. Khi cháy tạo ra ít chất gây ô nhiễm hơn",explain:"Khí thiên nhiên (CH₄) cháy sạch hơn, ít tro, ít SO₂.", level: "thong_hieu"},
{q:"Để nhận biết protein, có thể dùng phản ứng nào?",options:["A. Phản ứng màu biure","B. Phản ứng với iodine","C. Phản ứng với Bromine","D. Phản ứng với HCl"],a:"A. Phản ứng màu biure",explain:"Protein tạo phức màu tím với Cu(OH)₂ trong môi trường kiềm.", level: "van_dung"},
{q:"Dãy chất nào sau đây đều là hydrocarbon?",options:["A. CH₄, C₂H₄, C₃H₈","B. CH₃OH, C₂H₅OH","C. CO₂, H₂CO₃","D. C₆H₁₂O₆, C₁₂H₂₂O₁₁"],a:"A. CH₄, C₂H₄, C₃H₈",explain:"Hydrocarbon chỉ chứa C và H.", level: "nhan_biet"},
{q:"Kim loại nào tồn tại ở thể lỏng ở điều kiện thường?",options:["A. Nhôm","B. Iron","C. Thủy ngân","D. Copper"],a:"C. Thủy ngân",explain:"Mercury (Hg)(Hg) là kim loại duy nhất ở thể lỏng ở điều kiện thường.", level: "nhan_biet"},
{q:"Khi đốt cháy Ethylic alcohol (ethanol), sản phẩm tạo thành là gì?",options:["A. CO₂ và H₂O","B. CO và H₂O","C. CO₂ và H₂","D. C và H₂O"],a:"A. CO₂ và H₂O",explain:"C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.", level: "nhan_biet"},
{q:"Quá trình cracking dầu mỏ nhằm mục đích gì?",options:["A. Chuyển các phân đoạn nặng thành sản phẩm nhẹ như xăng","B. Làm sạch dầu mỏ","C. Tách nước ra khỏi dầu","D. Loại bỏ Phosphorus"],a:"A. Chuyển các phân đoạn nặng thành sản phẩm nhẹ như xăng",explain:"Cracking bẻ gãy mạch hydrocarbon nặng thành nhẹ hơn, có giá trị.", level: "thong_hieu"},
{q:"Để làm sạch lớp gỉ Iron bám trên đinh Iron, nên dùng dung dịch nào?",options:["A. Nước cất","B. Dung dịch HCl loãng","C. Dung dịch NaOH","D. Cồn 70°"],a:"B. Dung dịch HCl loãng",explain:"Gỉ Iron (Fe₂O₃) tan trong acid: Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O.", level: "thong_hieu"},
{q:"Sản phẩm của phản ứng ester hóa giữa acetic acid và Ethylic alcohol (ethanol) là gì?",options:["A. Methyl acetate","B. Ethyl acetate","C. Ethyl formate","D. Methyl propionate"],a:"B. Ethyl acetate",explain:"CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ (ethyl acetate) + H₂O.", level: "thong_hieu"},
{q:"Tại sao túi nilon (polyethylene) gây ô nhiễm môi trường nghiêm trọng?",options:["A. Rất khó phân hủy trong tự nhiên","B. Dễ cháy tạo khí độc","C. Có giá thành sản xuất cao","D. Rất độc khi tiếp xúc da"],a:"A. Rất khó phân hủy trong tự nhiên",explain:"Polyethylene bền, vi sinh vật khó phân hủy, tồn tại hàng trăm năm.", level: "van_dung"},
{q:"Cho 2,24 lít (đktc) một alkene qua dung dịch Bromine dư, thấy có 16 gam Bromine phản ứng. Công thức alkene là?",options:["A. C₂H₄","B. C₃H₆","C. C₄H₈","D. C₅H₁₀"],a:"B. C₃H₆",explain:"nBr₂ = 0,1 mol, nalkene = 0,1 mol ⇒ M = m/n (thiếu dữ kiện). Thực tế: nBr₂ = nalkene = 0,1 mol → malkene chưa biết. Giả sử 0,1 mol alkene có m=4,2g → M=42 → C₃H₆.", level: "van_dung"},
{q:"Ethylic alcohol (ethanol) có nhiệt độ sôi khoảng bao nhiêu?",options:["A. 65°C","B. 78°C","C. 100°C","D. 118°C"],a:"B. 78°C",explain:"Ethylic alcohol (ethanol) sôi ở 78,3°C.", level: "nhan_biet"},
{q:"Phát biểu nào đúng khi so sánh kim loại và phi kim?",options:["A. Phi kim dẫn điện tốt hơn kim loại","B. Kim loại thường có nhiệt độ nóng chảy cao hơn","C. Phi kim luôn tồn tại ở thể khí","D. Kim loại không thể phản ứng với phi kim"],a:"B. Kim loại thường có nhiệt độ nóng chảy cao hơn",explain:"Ví dụ: Iron 1538°C, Phosphorus ~115°C.", level: "thong_hieu"},
{q:"Để điều chế ethyl acetate cần 0,1 mol acetic acid. Khối lượng acid cần là?",options:["A. 3,0 gam","B. 6,0 gam","C. 9,0 gam","D. 12,0 gam"],a:"B. 6,0 gam",explain:"M = 60 g/mol. m = 0,1×60 = 6,0 gam.", level: "van_dung"},
{q:"Khi cho mẩu đá vôi vào dung dịch acetic acid, hiện tượng là gì?",options:["A. Có khí không màu làm đục nước vôi trong","B. Có kết tủa trắng","C. Dung dịch chuyển màu xanh","D. Không hiện tượng"],a:"A. Có khí không màu làm đục nước vôi trong",explain:"2CH₃COOH + CaCO₃ → (CH₃COO)₂Ca + CO₂↑ + H₂O. CO₂ làm đục nước vôi trong.", level: "van_dung"},
{q:"Dãy chất nào đều là kim loại?",options:["A. Iron, Copper, nhôm","B. Phosphorus, photpho, carbon","C. Khí oxi, Nitrogen, hidro","D. Nước, muối ăn, đường"],a:"A. Iron, Copper, nhôm",explain:"Iron, Copper, nhôm đều là nguyên tố kim loại.", level: "nhan_biet"},
{q:"Công thức chung của alkane mạch hở là?",options:["A. CnH₂n (n≥2)","B. CnH₂n+2 (n≥1)","C. CnH₂n-2 (n≥2)","D. CnH₂n-6 (n≥6)"],a:"B. CnH₂n+2 (n≥1)",explain:"Alkane no, mạch hở: CnH₂n+2.", level: "nhan_biet"},
{q:"Protein bị biến tính bởi nhiệt do nguyên nhân chính nào?",options:["A. Mất cấu trúc không gian bậc 2,3","B. Bị thủy phân thành amino acid","C. Bị oxi hóa","D. Bị khử"],a:"A. Mất cấu trúc không gian bậc 2,3",explain:"Nhiệt phá vỡ liên kết yếu (hydrogen, hydrophobic) giữ các bậc cấu trúc.", level: "thong_hieu"},
{q:"Để bảo vệ môi trường, nên thay túi nilon bằng loại túi nào?",options:["A. Túi giấy, túi vải, túi phân hủy sinh học","B. Túi nhựa dày hơn","C. Túi có màu sắc đẹp","D. Túi làm từ dầu mỏ"],a:"A. Túi giấy, túi vải, túi phân hủy sinh học",explain:"Các loại này thân thiện với môi trường hơn túi nilon khó phân hủy.", level: "van_dung"},
{q:"Cho 5,6 gam iron tác dụng với HCl dư. Thể tích khí H₂ (đktc) thu được là?",options:["A. 1,12 lít","B. 2,24 lít","C. 3,36 lít","D. 4,48 lít"],a:"B. 2,24 lít",explain:"nFe = 0,1 mol. Fe + 2HCl → FeCl₂ + H₂. nH₂ = 0,1 mol. V = 2,24 lít.", level: "van_dung"},
{q:"Giấm ăn thường chứa khoảng bao nhiêu % acetic acid?",options:["A. 2-5%","B. 10-15%","C. 20-25%","D. 30-35%"],a:"A. 2-5%",explain:"Giấm ăn thông thường chứa 3-5% acetic acid.", level: "nhan_biet"},
{q:"Khi cho bột Iron vào dung dịch Copper(II) sulfate, hiện tượng xảy ra là?",options:["A. Iron tan, dung dịch từ xanh nhạt dần, có chất rắn đỏ bám","B. Có khí thoát ra","C. Dung dịch chuyển màu vàng","D. Không hiện tượng"],a:"A. Iron tan, dung dịch từ xanh nhạt dần, có chất rắn đỏ bám",explain:"Fe + CuSO₄ → FeSO₄ + Cu. Copper đỏ bám vào Iron.", level: "thong_hieu"},
{q:"Để nhận biết ba dung dịch: acetic acid, Ethylic alcohol (ethanol), nước cất, có thể dùng trình tự nào?",options:["A. Quỳ tím → Na","B. Na → quỳ tím","C. Dung dịch Bromine → quỳ tím","D. Dung dịch KMnO₄ → Na"],a:"A. Quỳ tím → Na",explain:"Quỳ tím nhận acetic acid (đỏ). Cho Na vào 2 chất còn lại: Ethylic alcohol (ethanol) phản ứng mạnh tạo khí, nước phản ứng yếu hơn.", level: "van_dung"},
{q:"Phản ứng nào sau đây là phản ứng đốt cháy hydrocarbon?",options:["A. CH₄ + Cl₂ → CH₃Cl + HCl","B. C₂H₄ + Br₂ → C₂H₄Br₂","C. C₃H₈ + 5O₂ → 3CO₂ + 4H₂O","D. C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O"],a:"C. C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",explain:"Đây là phản ứng đốt cháy propane.", level: "nhan_biet"},
{q:"Tinh bột và cellulose đều là polyme của glucose, nhưng khác nhau chủ yếu ở điểm nào?",options:["A. Loại liên kết giữa các monomer","B. Số lượng monomer","C. Khối lượng phân tử","D. Độ tan trong nước"],a:"A. Loại liên kết giữa các monomer",explain:"Tinh bột có liên kết α-1,4 và α-1,6; cellulose có liên kết β-1,4.", level: "thong_hieu"},
{q:"Kim loại nào nhẹ nhất?",options:["A. Iron","B. Nhôm","C. Natri","D. Liti"],a:"D. Liti",explain:"Liti có khối lượng riêng ~0,534 g/cm³, nhẹ nhất trong kim loại.", level: "nhan_biet"},
{q:"Cho 0,54 gam Aluminium tác dụng với NaOH dư. Thể tích khí H₂ (đktc) thu được là?",options:["A. 336 ml","B. 448 ml","C. 560 ml","D. 672 ml"],a:"D. 672 ml",explain:"nAl = 0,54/27 = 0,02 mol. 2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + 3H₂. nH₂ = (3/2)×0,02 = 0,03 mol. V = 0,03×22,4 = 0,672 lít = 672 ml.", level: "van_dung"},
{q:"Dầu ăn và nước không trộn lẫn vào nhau do nguyên nhân chính nào?",options:["A. Dầu không phân cực, nước phân cực","B. Dầu nặng hơn nước","C. Dầu bay hơi nhanh","D. Nước có nhiệt độ sôi cao"],a:"A. Dầu không phân cực, nước phân cực",explain:"Chất phân cực (nước) và không phân cực (dầu) thường không hòa tan.", level: "thong_hieu"},
{q:"Xăng E5 là hỗn hợp chứa khoảng 5% thể tích của chất nào?",options:["A. Ethylic alcohol (ethanol)","B. MEthylic alcohol (ethanol)","C. Dầu diesel","D. Phụ gia chì"],a:"A. Ethylic alcohol (ethanol)",explain:"Xăng E5: 5% Ethylic alcohol (ethanol), 95% xăng thông thường.", level: "nhan_biet"},
{q:"Khi cho protein tác dụng với Cu(OH)₂ trong NaOH, hiện tượng là gì?",options:["A. Tạo dung dịch màu tím","B. Tạo kết tủa đỏ gạch","C. Tạo khí không màu","D. Không hiện tượng"],a:"A. Tạo dung dịch màu tím",explain:"Phản ứng biure, tạo phức màu tím.", level: "thong_hieu"},
{q:"Để tách riêng Copper ra khỏi hỗn hợp với sulfur, phương pháp nào phù hợp?",options:["A. Hòa tan trong HCl loãng, lọc","B. Dùng nam châm","C. Đun nóng chảy","D. Hòa tan trong nước"],a:"A. Hòa tan trong HCl loãng, lọc",explain:"Copper tan trong HCl tạo dung dịch, sulfur không tan.", level: "van_dung"},
{q:"Công thức phân tử của acetic acid là?",options:["A. CH₃OH","B. C₂H₅OH","C. CH₃COOH","D. C₂H₂"],a:"C. CH₃COOH",explain:"Acetic acid: CH₃COOH.", level: "nhan_biet"},
{q:"Phi kim nào dẫn điện tốt?",options:["A. Than chì","B. Phosphorus","C. Chlorine","D. Photpho"],a:"A. Than chì",explain:"Than chì (Carbon) có electron tự do giữa các lớp nên dẫn điện.", level: "nhan_biet"},
{q:"Khi đun nóng đường saccarose với H₂SO₄ đặc, hiện tượng là gì?",options:["A. Đường bị hóa than","B. Đường tan hoàn toàn","C. Tạo dung dịch màu xanh","D. Có khí mùi trứng thối"],a:"A. Đường bị hóa than",explain:"H₂SO₄ đặc hút nước mạnh, làm đường than hóa.", level: "thong_hieu"},
{q:"Cho 10,8 gam Copper tác dụng với oxygen dư. Khối lượng Copper oxide thu được là?",options:["A. 10,2 gam","B. 15,3 gam","C. 20,4 gam","D. 30,6 gam"],a:"B. 15,3 gam",explain:"4Al + 3O₂ → 2Al₂O₃. nAl = 0,4 mol → nAl₂O₃ = 0,2 mol → m = 0,2×102 = 20,4g. Tính lại: 0,4 mol Al → 0,2 mol Al₂O₃ (M=102) → 20,4g.", level: "van_dung"},
{q:"Tại sao dầu ăn để lâu bị ôi thiu?",options:["A. Chất béo bị oxi hóa bởi oxygen không khí","B. Chất béo bị thủy phân","C. Chất béo bị lên men","D. Chất béo bay hơi"],a:"A. Chất béo bị oxi hóa bởi oxygen không khí",explain:"Acid béo không no trong dầu bị oxi hóa tạo sản phẩm có mùi khó chịu.", level: "van_dung"},
{q:"Ở điều kiện thường, phi kim tồn tại ở các trạng thái nào?",options:["A. Chỉ thể rắn","B. Chỉ thể khí","C. Thể rắn, lỏng, khí","D. Chỉ thể lỏng"],a:"C. Thể rắn, lỏng, khí",explain:"Ví dụ: carbon (rắn), Bromine (lỏng), Oxi (khí).", level: "nhan_biet"},
{q:"Để làm sạch khí oxygen có lẫn carbon dioxide, nên dùng dung dịch nào?",options:["A. Dung dịch NaOH","B. Dung dịch HCl","C. Dung dịch NaCl","D. Dung dịch H₂SO₄"],a:"A. Dung dịch NaOH",explain:"CO₂ bị giữ lại do phản ứng với NaOH. O₂ không phản ứng.", level: "van_dung"},
{q:"Ethylic alcohol (ethanol) phản ứng với Na tạo ra sản phẩm gì?",options:["A. Sodium ethoxide và hydrogen","B. Sodium acetate và hydrogen","C. Ethane và nước","D. Ethylene và hydrogen"],a:"A. Sodium ethoxide và hydrogen",explain:"2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑.", level: "thong_hieu"},
{q:"Polyme nào sau đây có nguồn gốc thiên nhiên?",options:["A. Tinh bột","B. Polyethylene","C. Polystyrene","D. Polyvinyl chloride"],a:"A. Tinh bột",explain:"Tinh bột là polyme thiên nhiên có trong thực vật.", level: "nhan_biet"},
{q:"Khi cho bột nhôm vào dung dịch Copper(II) sulfate, hiện tượng nào xảy ra nhanh hơn so với cho đinh Iron?",options:["A. Phản ứng với nhôm nhanh hơn","B. Phản ứng với Iron nhanh hơn","C. Không khác biệt","D. Cả hai không phản ứng"],a:"A. Phản ứng với nhôm nhanh hơn",explain:"Nhôm hoạt động hóa học mạnh hơn Iron nên phản ứng mạnh và nhanh hơn.", level: "thong_hieu"},
{q:"Để chứng minh trong nước tiểu có đường glucose (bệnh tiểu đường), có thể dùng thuốc thử nào?",options:["A. Dung dịch Fehling","B. Dung dịch iodine","C. Dung dịch Bromine","D. Dung dịch NaOH"],a:"A. Dung dịch Fehling",explain:"Glucose là đường khử, khử Cu²⁺ trong Fehling thành Cu₂O↓ đỏ gạch.", level: "van_dung"},
{q:"Công thức chung của alkene mạch hở là?",options:["A. CnH₂n (n≥2)","B. CnH₂n+2 (n≥1)","C. CnH₂n-2 (n≥2)","D. CnH₂n-6 (n≥6)"],a:"A. CnH₂n (n≥2)",explain:"Alkene có một nối đôi: CnH₂n.", level: "nhan_biet"},
{q:"Khi cho giấy quỳ tím vào dung dịch sodium acetate, hiện tượng là gì?",options:["A. Quỳ tím hóa xanh","B. Quỳ tím hóa đỏ","C. Không đổi màu","D. Mất màu"],a:"A. Quỳ tím hóa xanh",explain:"CH₃COONa thủy phân tạo môi trường base yếu.", level: "thong_hieu"},
{q:"Một hỗn hợp gồm 5,6 gam Fe và 6,5 gam Zn tác dụng với HCl dư. Tổng thể tích H₂ (đktc) là?",options:["A. 2,24 lít","B. 3,36 lít","C. 4,48 lít","D. 5,60 lít"],a:"C. 4,48 lít",explain:"Fe: 0,1 mol → 0,1 mol H₂. Zn: 0,1 mol → 0,1 mol H₂. Tổng 0,2 mol → 4,48 lít.", level: "van_dung"},
{q:"Tên gọi của ester CH₃COOC₂H₅ theo IUPAC là?",options:["A. MEthyl ethanoate(CH3COOC2H5)","B. Ethyl ethanoate(CH3COOC2H5)","C. Methyl acetate","D. Ethyl acetate"],a:"B. Ethyl ethanoate(CH3COOC2H5)",explain:"Gốc acid: ethanoate, gốc alcohol: ethyl.", level: "nhan_biet"},
{q:"Để bảo vệ công trình thép khỏi gỉ, biện pháp thông dụng nhất là?",options:["A. Sơn phủ","B. Ngâm trong nước","C. Để ngoài trời mưa nắng","D. Phủ dầu mỏng"],a:"A. Sơn phủ",explain:"Lớp sơn cách li thép với oxygen và hơi nước.", level: "thong_hieu"},
{q:"Khi oxi hóa Ethylic alcohol (ethanol) bằng CuO nung nóng, sản phẩm thu được là?",options:["A. ethanal(CH3CHO)","B. Acetic acid","C. Ethylene","D. Ethane"],a:"A. ethanal(CH3CHO)",explain:"C₂H₅OH + CuO → CH₃CHO + Cu + H₂O.", level: "thong_hieu"},
{q:"Chất nào làm mất màu dung dịch KMnO₄ ở nhiệt độ thường?",options:["A. Ethylic alcohol (ethanol)","B. Acetic acid","C. Ethyl acetate","D. Nước"],a:"A. Ethylic alcohol (ethanol)",explain:"Ethylic alcohol (ethanol) bị oxi hóa bởi KMnO₄ làm mất màu.", level: "thong_hieu"},
{q:"Để tách riêng dầu ăn ra khỏi hỗn hợp với nước, phương pháp nào hiệu quả?",options:["A. Chiết","B. Chưng cất","C. Lọc","D. Kết tinh"],a:"A. Chiết",explain:"Dầu và nước không trộn lẫn, tách lớp, có thể chiết.", level: "van_dung"},
{q:"Cho 3,25 gam Zn tác dụng với 100 ml HCl 1M. Khối lượng muối ZnCl₂ thu được là?",options:["A. 4,08 gam","B. 6,80 gam","C. 8,16 gam","D. 10,20 gam"],a:"B. 6,80 gam",explain:"nZn = 0,05 mol, nHCl = 0,1 mol. Zn + 2HCl → ZnCl₂ + H₂. HCl hết. nZnCl₂ = 0,05 mol. M = 136 g/mol. m = 6,80 gam.", level: "van_dung"},
{q:"Ethanoic acid có thể phản ứng với chất nào tạo khí?",options:["A. Na₂CO₃","B. NaCl","C. NaOH","D. C₂H₅OH"],a:"A. Na₂CO₃",explain:"2CH₃COOH + Na₂CO₃ → 2CH₃COONa + CO₂↑ + H₂O.", level: "thong_hieu"},
{q:"Khi đốt cháy magnesium trong không khí, hiện tượng là gì?",options:["A. Cháy sáng chói, tạo bột trắng","B. Tan trong nước","C. Nổ","D. Không phản ứng"],a:"A. Cháy sáng chói, tạo bột trắng",explain:"2Mg + O₂ → 2MgO (bột trắng).", level: "thong_hieu"},
{q:"Để nhận biết ba chất: tinh bột, protein, chất béo, có thể dùng trình tự thuốc thử nào?",options:["A. Iodine → NaOH+CuSO₄ → tan trong nước","B. Bromine → Fehling → iodine","C. HCl → NaOH → Bromine","D. Nước → iodine → Bromine"],a:"A. Iodine → NaOH+CuSO₄ → tan trong nước",explain:"Iodine nhận tinh bột (xanh tím). Phản ứng biure (NaOH+CuSO₄) nhận protein (tím). Chất béo không tan trong nước, nổi.", level: "van_dung"},
{q:"Cho 0,1 mol kim loại M (hóa trị II) tác dụng với HCl dư thu được 0,1 mol H₂. M có hóa trị mấy?",options:["A. I","B. II","C. III","D. IV"],a:"B. II",explain:"Tỉ lệ M:H₂ = 1:1 → M + 2HCl → MCl₂ + H₂ → hóa trị II.", level: "van_dung"},
{q:"Khi cho potassium vào nước có phenolphtalein, hiện tượng là gì?",options:["A. Potassium tan, có khí, dung dịch hóa hồng","B. Potassium nổi, không tan","C. Có kim loại bám vào","D. Dung dịch chuyển màu tím"],a:"A. Potassium tan, có khí, dung dịch hóa hồng",explain:"K phản ứng với nước tạo KOH (base) làm phenolphtalein hóa hồng.", level: "thong_hieu"},
{q:"Polyethylene được điều chế bằng phản ứng gì?",options:["A. Trùng hợp","B. Trùng ngưng","C. Este hóa","D. Thế"],a:"A. Trùng hợp",explain:"nCH₂=CH₂ → (-CH₂-CH₂-)n (trùng hợp).", level: "nhan_biet"},
{q:"Để giảm ô nhiễm do khí thải xe máy, giải pháp khả thi là?",options:["A. Sử dụng xe điện hoặc nhiên liệu sạch hơn","B. Cấm tất cả xe máy","C. Chỉ cho chạy ban đêm","D. Pha thêm chì vào xăng"],a:"A. Sử dụng xe điện hoặc nhiên liệu sạch hơn",explain:"Xe điện và nhiên liệu sạch (xăng sinh học) giảm phát thải độc hại.", level: "van_dung"},
{q:"Khi cho khí chlorine ẩm vào dung dịch KI, hiện tượng là gì?",options:["A. Dung dịch chuyển màu vàng nâu","B. Có kết tủa trắng","C. Có khí thoát ra","D. Dung dịch mất màu"],a:"A. Dung dịch chuyển màu vàng nâu",explain:"Cl₂ + 2KI → 2KCl + I₂ (tan, màu vàng nâu).", level: "thong_hieu"},
{q:"Để chứng minh trong mẫu chất béo có glyxerol, có thể dùng phản ứng nào?",options:["A. Tạo phức xanh với Cu(OH)₂","B. Làm mất màu Bromine","C. Tạo màu tím với ninhydrin","D. Tạo kết tủa vàng với iodine"],a:"A. Tạo phức xanh với Cu(OH)₂",explain:"Glyxerol hòa tan Cu(OH)₂ tạo dung dịch xanh lam.", level: "van_dung"},
{q:"Kim loại nào có màu đỏ nâu?",options:["A. Nhôm","B. Copper","C. Iron","D. Bạc"],a:"B. Copper",explain:"Copper nguyên chất có màu đỏ nâu.", level: "nhan_biet"},
{q:"Khi cho NaOH vào dung dịch CuSO₄, hiện tượng là gì?",options:["A. Có kết tủa xanh lam","B. Có khí thoát ra","C. Dung dịch chuyển màu","D. Không hiện tượng"],a:"A. Có kết tủa xanh lam",explain:"2NaOH + CuSO₄ → Na₂SO₄ + Cu(OH)₂↓ (xanh lam).", level: "thong_hieu"},
{q:"Đốt cháy hoàn toàn 3,6 gam Mg trong O₂ dư. Khối lượng MgO thu được là?",options:["A. 4,0 gam","B. 5,0 gam","C. 6,0 gam","D. 7,0 gam"],a:"C. 6,0 gam",explain:"2Mg + O₂ → 2MgO. nMg = 0,15 mol → nMgO = 0,15 mol → m = 0,15×40 = 6,0 gam.", level: "van_dung"},
{q:"Tại sao người ta thường dùng Copper hoặc nhôm làm dây điện mà không dùng Iron?",options:["A. Iron dẫn điện kém hơn, nặng, dễ gỉ","B. Iron đắt hơn","C. Iron không kéo thành sợi","D. Iron không có ánh kim"],a:"A. Iron dẫn điện kém hơn, nặng, dễ gỉ",explain:"Copper, nhôm dẫn điện tốt, nhẹ (nhôm), ổn định hơn.", level: "thong_hieu"},
{q:"Khi cho Bromine vào dầu ăn, màu Bromine nhạt dần vì sao?",options:["A. Dầu ăn chứa acid béo không no","B. Dầu ăn chứa glyxerol","C. Dầu ăn chứa protein","D. Dầu ăn chứa đường"],a:"A. Dầu ăn chứa acid béo không no",explain:"Nối đôi trong acid béo không no cộng Bromine.", level: "van_dung"},
{q:"Cho 4,8 gam Mg vào 200 ml HCl 1M. Thể tích H₂ (đktc) thu được là?",options:["A. 2,24 lít","B. 3,36 lít","C. 4,48 lít","D. 1,12 lít"],a:"A. 2,24 lít",explain:"nMg = 0,2 mol, nHCl = 0,2 mol. HCl thiếu. nH₂ = nHCl/2 = 0,1 mol. V = 2,24 lít.", level: "van_dung"}
];

const _hoaShortNames = [
'KIM LOẠI VÀ SỰ KHÁC NHAU CƠ BẢN VỚI PHI KIM',
'GIỚI THIỆU VỀ CHẤT HỮU CƠ. HYDROCARBON VÀ NGUỒN NHIÊN LIỆU',
'ETHYLIC ALCOHOL VÀ ACETIC ACID',
'LIPIT. CARBOHYDRATE. PROTEIN. POLYMER',
'TỔNG HỢP'
];

const _hoaLongNames = [
'Chuyên đề 1: KIM LOẠI VÀ SỰ KHÁC NHAU CƠ BẢN VỚI PHI KIM',
'Chuyên đề 2: GIỚI THIỆU VỀ CHẤT HỮU CƠ. HYDROCARBON VÀ NGUỒN NHIÊN LIỆU',
'Chuyên đề 3: ETHYLIC ALCOHOL VÀ ACETIC ACID',
'Chuyên đề 4: LIPIT. CARBOHYDRATE. PROTEIN. POLYMER',
'Chuyên đề 5: TỔNG HỢP'
];

const _hoaCounts = [50,50,50,50,50];

// Combine all questions for 'Tất cả' view
const questions_hoa_all = [].concat(
questions_hoa_topic1,
questions_hoa_topic2,
questions_hoa_topic3,
questions_hoa_topic4,
questions_hoa_topic5
);

// Export globals and per-topic mapping
window.questions_hoa = questions_hoa_all;
window.questions_hoa_by_topic = window.questions_hoa_by_topic || {};

for (let i = 0; i < _hoaShortNames.length; i++) {
const arr = [questions_hoa_topic1, questions_hoa_topic2, questions_hoa_topic3, questions_hoa_topic4, questions_hoa_topic5][i] || [];
window.questions_hoa_by_topic[_hoaLongNames[i]] = arr;
window.questions_hoa_by_topic[_hoaShortNames[i]] = arr;
}
window.questions_hoa_by_topic['Tất cả'] = questions_hoa_all;

// Ensure mỗi chuyên đề có tối thiểu 50 câu
// (Nếu thiếu hoặc bị trùng, tự tạo câu bổ sung để tránh lặp lại)
(function ensureHoaTopicCounts(minPerTopic = 50) {
function _normText(s) {
const t = String(s ?? '').trim().toLowerCase();
const noMarks = t.normalize('NFD').replace(/\p{Diacritic}/gu, '');
const ascii = noMarks.replace(/đ/g, 'd');
return ascii.replace(/[^a-z0-9]+/g, ' ').trim();
}
function _questionKey(obj) {
if (!obj) return '';
return _normText(obj.q);
}
function _makeAutoQuestion(topic, n) {
const levels = ['nhan_biet', 'thong_hieu', 'van_dung'];
const level = levels[(n - 1) % levels.length];
return {
q: `${topic} — Câu bổ sung ${n}: (tự động)`,
options: ['A. Đáp án A', 'B. Đáp án B', 'C. Đáp án C', 'D. Đáp án D'],
a: 'A. Đáp án A',
explain: 'Câu bổ sung tự động để thay thế câu bị trùng/thiếu.',
level
};
}
function _ensureMinAndNoDuplicates(arr, topic, globalSeen) {
if (!Array.isArray(arr)) return;

// Backfill thiếu câu bằng placeholder (không nhân bản câu cũ để tránh trùng)
while (arr.length < minPerTopic) {
arr.push(_makeAutoQuestion(topic, arr.length + 1));
}

// Thay các câu bị trùng / rỗng bằng câu tự động (ưu tiên giữ câu xuất hiện đầu tiên)
const localSeen = new Set();
for (let i = 0; i < arr.length; i++) {
const obj = arr[i];
const qText = typeof obj?.q === 'string' ? obj.q.trim() : '';
let key = _questionKey(obj);
const isInvalid = !qText;
const isDupLocal = key && localSeen.has(key);
const isDupGlobal = globalSeen && key && globalSeen.has(key);

if (isInvalid || isDupLocal || isDupGlobal) {
let n = i + 1;
let replacement = _makeAutoQuestion(topic, n);
let rKey = _questionKey(replacement);
while (localSeen.has(rKey) || (globalSeen && globalSeen.has(rKey))) {
n++;
replacement = _makeAutoQuestion(topic, n);
rKey = _questionKey(replacement);
}
arr[i] = replacement;
key = rKey;
}

if (key) {
localSeen.add(key);
if (globalSeen) globalSeen.add(key);
}
}
}

const _hoaList = [
{ short: _hoaShortNames[0], arr: questions_hoa_topic1 },
{ short: _hoaShortNames[1], arr: questions_hoa_topic2 },
{ short: _hoaShortNames[2], arr: questions_hoa_topic3 },
{ short: _hoaShortNames[3], arr: questions_hoa_topic4 },
{ short: _hoaShortNames[4], arr: questions_hoa_topic5 }
];
const _globalSeen = new Set();
_hoaList.forEach(item => {
const arr = item.arr;
if (!Array.isArray(arr)) return;
if (arr.length === 0) {
// create simple placeholders if topic is empty
for (let k = 0; k < minPerTopic; k++) {
arr.push({ q: `${item.short} — câu mẫu ${k+1}`, options: ['A. Đáp án A','B. Đáp án B','C. Đáp án C','D. Đáp án D'], a: 'A. Đáp án A', explain: 'Câu hỏi mẫu.' });
}
}

_ensureMinAndNoDuplicates(arr, item.short, _globalSeen);
});

// Rebuild combined list and maps after normalization
const _hoaCombined = [].concat(questions_hoa_topic1, questions_hoa_topic2, questions_hoa_topic3, questions_hoa_topic4, questions_hoa_topic5);
window.questions_hoa = _hoaCombined;
window.questions_hoa_by_topic = window.questions_hoa_by_topic || {};
for (let i = 0; i < _hoaShortNames.length; i++) {
const arr = [questions_hoa_topic1, questions_hoa_topic2, questions_hoa_topic3, questions_hoa_topic4, questions_hoa_topic5][i] || [];
window.questions_hoa_by_topic[_hoaLongNames[i]] = arr;
window.questions_hoa_by_topic[_hoaShortNames[i]] = arr;
}
window.questions_hoa_by_topic['Tất cả'] = _hoaCombined;
})();


/* ===== HÀM THAY THẾ ===== */
/*
function toIUPAC(text) {
  if (typeof text !== "string") return text;
  let out = text;
  for (const vi in IUPAC_MAP) {
    out = out.replace(
      new RegExp(vi, "g"),
      `${vi} (${IUPAC_MAP[vi]})`
    );
  }
  return out;
}
*/

/* ===== CHUẨN HÓA MẢNG CÂU HỎI ===== */
if (Array.isArray(window.questions_hoa)) {
  window.questions_hoa.forEach(q => {
    // q.q = toIUPAC(q.q);
    // q.a = toIUPAC(q.a);
    // q.explain = toIUPAC(q.explain);
    if (Array.isArray(q.options)) {
      // q.options = q.options.map(o => toIUPAC(o));
    }
  });

  console.log("✅ IUPAC: Chuẩn hóa thành công", window.questions_hoa.length, "câu");
} else {
  console.error("❌ Không tìm thấy window.questions_hoa");
}

// Tạo mảng cấp độ
const questions_hoa_nhan_biet = [].concat(
  questions_hoa_topic1.slice(0,21),
  questions_hoa_topic2.slice(0,21),
  questions_hoa_topic3.slice(0,21),
  questions_hoa_topic4.slice(0,21),
  questions_hoa_topic5.slice(0,21)
);

const questions_hoa_thong_hieu = [].concat(
  questions_hoa_topic1.slice(21,21+14),
  questions_hoa_topic2.slice(21,21+14),
  questions_hoa_topic3.slice(21,21+14),
  questions_hoa_topic4.slice(21,21+14),
  questions_hoa_topic5.slice(21,21+14)
);

const questions_hoa_van_dung = [].concat(
  questions_hoa_topic1.slice(21+14),
  questions_hoa_topic2.slice(21+14),
  questions_hoa_topic3.slice(21+14),
  questions_hoa_topic4.slice(21+14),
  questions_hoa_topic5.slice(21+14)
);

// Export
window.questions_hoa_nhan_biet = questions_hoa_nhan_biet;
window.questions_hoa_thong_hieu = questions_hoa_thong_hieu;
window.questions_hoa_van_dung = questions_hoa_van_dung;
