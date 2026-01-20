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
// ===== NHẬN BIẾT (21 câu) =====
{q:"Tính chất vật lí chung của kim loại là",options:["A. Dễ vỡ, cách điện","B. Dẫn điện, dẫn nhiệt, có ánh kim, dẻo","C. Tan trong nước","D. Bay hơi dễ"],a:"B. Dẫn điện, dẫn nhiệt, có ánh kim, dẻo",explain:"Kim loại có electron tự do.", level: "nhan_biet"},
{q:"Chất nào sau đây là phi kim?",options:["A. Na","B. Al","C. S","D. Fe"],a:"C. S",explain:"Lưu huỳnh là phi kim."},
{q:"Kim loại dẫn điện tốt nhất là",options:["A. Fe","B. Cu","C. Al","D. Ag"],a:"D. Ag",explain:"Bạc dẫn điện tốt nhất."},
{q:"Phi kim thường có xu hướng",options:["A. Nhường electron","B. Nhận electron","C. Trung hòa","D. Không phản ứng"],a:"B. Nhận electron",explain:"Phi kim có độ âm điện lớn."},
{q:"Kim loại kiềm thuộc nhóm nào?",options:["A. IA","B. IIA","C. VIIA","D. VIIIA"],a:"A. IA",explain:"Kim loại kiềm thuộc nhóm IA."},
{q:"Kim loại nhẹ dùng chế tạo máy bay là",options:["A. Fe","B. Al","C. Cu","D. Pb"],a:"B. Al",explain:"Nhôm nhẹ, bền."},
{q:"Phi kim cần cho sự cháy là",options:["A. N2","B. O2","C. CO2","D. H2"],a:"B. O2",explain:"Oxi duy trì sự cháy."},
{q:"Kim loại nào không phản ứng với HCl?",options:["A. Mg","B. Zn","C. Fe","D. Cu"],a:"D. Cu",explain:"Cu đứng sau H."},
{q:"Phi kim tồn tại ở mấy trạng thái?",options:["A. 1","B. 2","C. 3","D. 4"],a:"C. 3",explain:"Rắn, lỏng, khí."},
{q:"Kim loại có tính dẻo do",options:["A. Có ánh kim","B. Electron tự do","C. Các lớp ion trượt","D. Khối lượng lớn"],a:"C. Các lớp ion trượt",explain:"Đặc trưng liên kết kim loại."},
{q:"Kim loại tác dụng mạnh với nước là",options:["A. Fe","B. Cu","C. Na","D. Ag"],a:"C. Na",explain:"Na phản ứng mạnh với nước."},
{q:"Phi kim dùng khử trùng nước là",options:["A. O2","B. N2","C. Cl2","D. Br2"],a:"C. Cl2",explain:"Clo dùng khử trùng."},
{q:"Kim loại dẫn nhiệt tốt thường dùng làm",options:["A. Nhựa","B. Nồi xoong","C. Gỗ","D. Thủy tinh"],a:"B. Nồi xoong",explain:"Kim loại dẫn nhiệt tốt."},
{q:"Phi kim không có tính chất nào?",options:["A. Nhận electron","B. Không ánh kim","C. Dẻo","D. Dẫn điện kém"],a:"C. Dẻo",explain:"Tính dẻo là của kim loại."},
{q:"Kim loại nào có màu đỏ đặc trưng?",options:["A. Fe","B. Cu","C. Al","D. Zn"],a:"B. Cu",explain:"Đồng có màu đỏ."},
{q:"Kim loại kiềm thổ là",options:["A. Na","B. Ca","C. K","D. Al"],a:"B. Ca",explain:"Ca thuộc nhóm IIA."},
{q:"Phi kim tồn tại ở thể lỏng là",options:["A. O2","B. Cl2","C. Br2","D. S"],a:"C. Br2",explain:"Brôm ở thể lỏng."},
{q:"Kim loại dùng làm dây điện là",options:["A. Fe","B. Al","C. Pb","D. Sn"],a:"B. Al",explain:"Nhôm dẫn điện tốt.", level: "nhan_biet"},
{q:"Phi kim tạo phân đạm là",options:["A. C","B. N","C. S","D. P"],a:"B. N",explain:"Nitơ dùng sản xuất phân đạm.", level: "nhan_biet"},
{q:"Kim loại bảo vệ sắt bằng mạ là",options:["A. Cu","B. Zn","C. Ag","D. Pb"],a:"B. Zn",explain:"Mạ kẽm chống gỉ.", level: "nhan_biet"},
{q:"Phi kim cần cho hô hấp là",options:["A. N2","B. O2","C. CO2","D. H2"],a:"B. O2",explain:"Oxi cần cho hô hấp.", level: "nhan_biet"},
{q:"Nguyên tố Sodium (Na) thuộc loại",options:["A. Phi kim","B. Kim loại","C. Á kim","D. Khí hiếm"],a:"B. Kim loại",explain:"Sodium là kim loại kiềm."},
{q:"Nguyên tố Chlorine (Cl) thuộc nhóm",options:["A. Kim loại kiềm","B. Kim loại kiềm thổ","C. Halogen","D. Khí hiếm"],a:"C. Halogen",explain:"Chlorine thuộc nhóm halogen."},
{q:"Chất nào sau đây là kim loại theo IUPAC?",options:["A. Sulfur","B. Oxygen","C. Aluminium","D. Nitrogen"],a:"C. Aluminium",explain:"Aluminium là kim loại."},
{q:"Nguyên tố Iron (Fe) có tính chất đặc trưng là",options:["A. Không dẫn điện","B. Dẫn điện và dẫn nhiệt","C. Tan trong nước","D. Bay hơi"],a:"B. Dẫn điện và dẫn nhiệt",explain:"Iron là kim loại."},
{q:"Phi kim thường có tính chất",options:["A. Dẻo","B. Ánh kim","C. Dẫn điện tốt","D. Kém dẫn điện"],a:"D. Kém dẫn điện",explain:"Phi kim kém dẫn điện."},
{q:"Nguyên tố Oxygen (O) là",options:["A. Kim loại","B. Phi kim","C. Á kim","D. Kim loại kiềm"],a:"B. Phi kim",explain:"Oxygen là phi kim."},
{q:"Copper (Cu) được sử dụng phổ biến vì",options:["A. Nhẹ","B. Dẫn điện tốt","C. Tan trong nước","D. Không phản ứng"],a:"B. Dẫn điện tốt",explain:"Copper dẫn điện rất tốt."},
{q:"Sulfur (S) có màu đặc trưng là",options:["A. Trắng","B. Vàng","C. Đen","D. Xanh"],a:"B. Vàng",explain:"Sulfur là phi kim màu vàng."},
{q:"Kim loại nào sau đây phản ứng mạnh với nước lạnh?",options:["A. Iron","B. Copper","C. Sodium","D. Aluminium"],a:"C. Sodium",explain:"Sodium phản ứng mạnh với nước."},
{q:"Nguyên tố Carbon (C) thuộc loại",options:["A. Kim loại","B. Phi kim","C. Á kim","D. Kim loại chuyển tiếp"],a:"B. Phi kim",explain:"Carbon là phi kim."},
{q:"Kim loại thường có cấu trúc tinh thể do",options:["A. Electron tự do","B. Proton","C. Neutron","D. Ion âm"],a:"A. Electron tự do",explain:"Electron tự do tạo liên kết kim loại."},
{q:"Chất nào sau đây là phi kim theo IUPAC?",options:["A. Magnesium","B. Calcium","C. Phosphorus","D. Zinc"],a:"C. Phosphorus",explain:"Phosphorus là phi kim."},
{q:"Alkaline earth metals là tên quốc tế của",options:["A. Kim loại kiềm","B. Kim loại kiềm thổ","C. Kim loại chuyển tiếp","D. Á kim"],a:"B. Kim loại kiềm thổ",explain:"Nhóm IIA."},
{q:"Nguyên tố Magnesium (Mg) có tính chất",options:["A. Kém dẫn điện","B. Dễ bay hơi","C. Có ánh kim","D. Không dẫn nhiệt"],a:"C. Có ánh kim",explain:"Magnesium là kim loại."},
{q:"Halogen thường tồn tại ở dạng",options:["A. Đơn chất kim loại","B. Phân tử hai nguyên tử","C. Ion dương","D. Hợp kim"],a:"B. Phân tử hai nguyên tử",explain:"Ví dụ Cl₂, F₂."},
{q:"Kim loại thường có nhiệt độ nóng chảy",options:["A. Thấp","B. Cao","C. Bằng nước","D. Không xác định"],a:"B. Cao",explain:"Do liên kết kim loại bền."},
{q:"Nitrogen (N) tồn tại trong không khí chủ yếu ở dạng",options:["A. N","B. N₂","C. NH₃","D. NO₂"],a:"B. N₂",explain:"Nitrogen tồn tại dạng phân tử."},
{q:"Kim loại dẫn điện được là nhờ",options:["A. Proton","B. Neutron","C. Electron tự do","D. Ion âm"],a:"C. Electron tự do",explain:"Đặc trưng của kim loại."},
{q:"Phi kim thường tạo liên kết",options:["A. Kim loại","B. Ion dương","C. Cộng hóa trị","D. Kim loại – ion"],a:"C. Cộng hóa trị",explain:"Phi kim thường liên kết cộng hóa trị."},
{q:"Nguyên tố Zinc (Zn) thuộc loại",options:["A. Phi kim","B. Kim loại","C. Á kim","D. Halogen"],a:"B. Kim loại",explain:"Zinc là kim loại."},
{q:"Kim loại có tính dẻo vì",options:["A. Liên kết ion","B. Liên kết cộng hóa trị","C. Liên kết kim loại","D. Không có liên kết"],a:"C. Liên kết kim loại",explain:"Liên kết kim loại không định hướng."},
// ===== THÔNG HIỂU (14 câu) =====
{q:"Kim loại hoạt động hóa học mạnh vì",options:["A. Nhận electron","B. Dễ nhường electron","C. Có ánh kim","D. Bền"],a:"B. Dễ nhường electron",explain:"Dễ nhường electron nên phản ứng mạnh.", level: "thong_hieu"},
{q:"Vì sao nhôm không bị gỉ sâu trong không khí?",options:["A. Không phản ứng với O2","B. Có lớp oxit bảo vệ","C. Rất bền","D. Không dẫn điện"],a:"B. Có lớp oxit bảo vệ",explain:"Lớp Al2O3 bền."},
{q:"Kim loại đứng trước Cu trong dãy hoạt động hóa học có thể",options:["A. Bị Cu đẩy","B. Đẩy Cu khỏi dung dịch","C. Không phản ứng","D. Tan trong nước"],a:"B. Đẩy Cu khỏi dung dịch",explain:"Kim loại mạnh đẩy kim loại yếu."},
{q:"Phi kim không dẫn điện vì",options:["A. Không proton","B. Không neutron","C. Không electron tự do","D. Phân tử lớn"],a:"C. Không electron tự do",explain:"Không có e tự do."},
{q:"Kim loại làm dây dẫn cần có tính",options:["A. Cứng","B. Nhẹ","C. Dẫn điện và dẻo","D. Bền"],a:"C. Dẫn điện và dẻo",explain:"Dễ kéo sợi."},
{q:"Kim loại yếu nhất trong các kim loại sau?",options:["A. Na","B. Ca","C. Fe","D. Cu"],a:"D. Cu",explain:"Cu đứng gần cuối dãy."},
{q:"Phi kim nhận electron để",options:["A. Oxi hóa","B. Khử","C. Đạt cấu hình bền","D. Phân li"],a:"C. Đạt cấu hình bền",explain:"Cấu hình khí hiếm."},
{q:"Kim loại phản ứng với axit thường giải phóng",options:["A. O2","B. CO2","C. H2","D. N2"],a:"C. H2",explain:"Kim loại + axit → H2."},
{q:"Phi kim thường có nhiệt độ nóng chảy",options:["A. Cao","B. Thấp","C. Rất cao","D. Không xác định"],a:"B. Thấp",explain:"Đa số phi kim nóng chảy thấp."},
{q:"Kim loại dùng cho đồ gia dụng phổ biến là",options:["A. Na","B. K","C. Al","D. Ca"],a:"C. Al",explain:"Nhôm nhẹ, bền."},
{q:"Phi kim tạo xương răng (qua hợp chất) là",options:["A. S","B. P","C. Cl","D. I"],a:"B. P",explain:"Photpho tham gia cấu tạo xương."},
{q:"Kim loại đẩy Fe khỏi dung dịch FeSO4 là",options:["A. Cu","B. Zn","C. Ag","D. Au"],a:"B. Zn",explain:"Zn hoạt động mạnh hơn Fe."},
{q:"Kim loại dẫn nhiệt tốt do",options:["A. Ion lớn","B. Electron tự do","C. Ánh kim","D. Liên kết ion"],a:"B. Electron tự do",explain:"Electron truyền nhiệt."},
{q:"Phi kim thường tồn tại dạng",options:["A. Nguyên tử","B. Ion","C. Phân tử","D. Kim loại"],a:"C. Phân tử",explain:"Phi kim thường là phân tử."},
{q:"Kim loại dẫn điện tốt hơn phi kim vì",options:["A. Có proton tự do","B. Có electron tự do","C. Có ion âm","D. Có phân tử nhỏ"],a:"B. Có electron tự do",explain:"Electron tự do chuyển động trong mạng tinh thể kim loại."},
{q:"Phi kim thường giòn và dễ vỡ vì",options:["A. Liên kết ion","B. Liên kết kim loại","C. Liên kết cộng hóa trị định hướng","D. Không có liên kết"],a:"C. Liên kết cộng hóa trị định hướng",explain:"Liên kết cộng hóa trị khó trượt lớp."},
{q:"Aluminium (Al) được dùng làm dây dẫn dù dẫn điện kém Copper vì",options:["A. Nhẹ và bền","B. Rẻ","C. Không oxi hóa","D. Không dẫn nhiệt"],a:"A. Nhẹ và bền",explain:"Aluminium nhẹ hơn Copper."},
{q:"Sodium (Na) phải bảo quản trong dầu vì",options:["A. Dễ bay hơi","B. Dễ tan trong dầu","C. Phản ứng mạnh với Oxygen và Water","D. Không dẫn điện"],a:"C. Phản ứng mạnh với Oxygen và Water",explain:"Na rất hoạt động hóa học."},
{q:"Halogen có tính oxi hóa mạnh vì",options:["A. Có bán kính lớn","B. Có nhiều electron tự do","C. Dễ nhận electron","D. Có ánh kim"],a:"C. Dễ nhận electron",explain:"Halogen có độ âm điện lớn."},
{q:"Carbon (C) có nhiều dạng thù hình vì",options:["A. Có khối lượng lớn","B. Có khả năng liên kết khác nhau","C. Tan trong nước","D. Là kim loại"],a:"B. Có khả năng liên kết khác nhau",explain:"C tạo kim cương, graphite."},
{q:"Iron (Fe) bị gỉ trong không khí ẩm do",options:["A. Bay hơi","B. Phản ứng oxi hóa","C. Phản ứng trung hòa","D. Phản ứng thế"],a:"B. Phản ứng oxi hóa",explain:"Fe bị oxi hóa tạo rust."},
{q:"Kim loại kiềm (Alkali metals) phản ứng mạnh với nước vì",options:["A. Có 1 electron hóa trị","B. Có 3 electron hóa trị","C. Có cấu trúc bền","D. Có liên kết cộng hóa trị"],a:"A. Có 1 electron hóa trị",explain:"Dễ nhường electron."},
{q:"Phi kim thường tạo anion khi phản ứng vì",options:["A. Dễ nhường electron","B. Dễ nhận electron","C. Có ánh kim","D. Có electron tự do"],a:"B. Dễ nhận electron",explain:"Phi kim có độ âm điện lớn."},
{q:"Copper (Cu) ít phản ứng với Water ở điều kiện thường vì",options:["A. Hoạt động mạnh","B. Hoạt động trung bình","C. Hoạt động yếu","D. Không dẫn điện"],a:"C. Hoạt động yếu",explain:"Cu đứng sau H trong dãy hoạt động."},
{q:"Magnesium (Mg) cháy sáng trong Oxygen vì",options:["A. Phản ứng thu nhiệt","B. Phản ứng tỏa nhiệt mạnh","C. Không phản ứng","D. Bay hơi"],a:"B. Phản ứng tỏa nhiệt mạnh",explain:"Mg + O₂ → MgO."},
{q:"Sulfur (S) không dẫn điện vì",options:["A. Có electron tự do","B. Có ion dương","C. Không có electron tự do","D. Có ánh kim"],a:"C. Không có electron tự do",explain:"Phi kim không có electron tự do."},
{q:"Zinc (Zn) được dùng mạ Iron vì",options:["A. Dẫn điện tốt","B. Nhẹ","C. Bị oxi hóa trước Iron","D. Không phản ứng"],a:"C. Bị oxi hóa trước Iron",explain:"Zn bảo vệ Fe khỏi gỉ."},
{q:"Kim loại thường có nhiệt độ nóng chảy cao do",options:["A. Liên kết ion","B. Liên kết cộng hóa trị","C. Liên kết kim loại bền","D. Phân tử nhỏ"],a:"C. Liên kết kim loại bền",explain:"Liên kết kim loại giữ các ion dương."},
// ===== VẬN DỤNG – TÍNH TOÁN (15 câu) =====
{q:"Hòa tan 6,5 g Zn vào HCl dư, thể tích H2 (đktc) là",options:["A. 1,12 lít","B. 2,24 lít","C. 3,36 lít","D. 4,48 lít"],a:"B. 2,24 lít",explain:"nZn=0,1 mol ⇒ V=2,24 lít.", level: "van_dung"},
{q:"Cho 5,6 g Fe phản ứng với HCl dư, khối lượng FeCl2 là",options:["A. 11,1 g","B. 12,7 g","C. 16,2 g","D. 19,0 g"],a:"B. 12,7 g",explain:"nFe=0,1 mol."},
{q:"Đốt cháy 3,2 g S, thể tích SO2 (đktc) là",options:["A. 1,12 lít","B. 2,24 lít","C. 3,36 lít","D. 4,48 lít"],a:"B. 2,24 lít",explain:"nS=0,1 mol."},
{q:"Cho 11,2 g Fe vào CuSO4, khối lượng Cu thu được là",options:["A. 6,4 g","B. 9,6 g","C. 12,8 g","D. 19,2 g"],a:"C. 12,8 g",explain:"nFe=0,2 mol."},
{q:"Hòa tan 2,4 g Mg vào HCl dư, thể tích H2 là",options:["A. 1,12 lít","B. 2,24 lít","C. 3,36 lít","D. 4,48 lít"],a:"B. 2,24 lít",explain:"nMg=0,1 mol."},
{q:"Cho 8 g CuO tác dụng với H2 dư, khối lượng Cu là",options:["A. 5,6 g","B. 6,4 g","C. 7,2 g","D. 8,0 g"],a:"B. 6,4 g",explain:"nCuO=0,1 mol."},
{q:"Đốt cháy 6,2 g P, khối lượng P2O5 thu được là",options:["A. 14,2 g","B. 21,3 g","C. 28,4 g","D. 35,5 g"],a:"C. 28,4 g",explain:"nP=0,2 mol."},
{q:"Cho 5,4 g Al vào HCl dư, thể tích H2 là",options:["A. 4,48 lít","B. 5,60 lít","C. 6,72 lít","D. 8,96 lít"],a:"C. 6,72 lít",explain:"nAl=0,2 mol ⇒ nH2=0,3 mol."},
{q:"Hòa tan 10 g CaCO3 bằng HCl dư, thể tích CO2 là",options:["A. 1,12 lít","B. 2,24 lít","C. 3,36 lít","D. 4,48 lít"],a:"B. 2,24 lít",explain:"nCaCO3=0,1 mol."},
{q:"Oxit kim loại M có %M = 75%. Kim loại M là",options:["A. Mg","B. Al","C. Fe","D. Cu"],a:"C. Fe",explain:"FeO có %Fe ≈ 78% (gần nhất)."},
{q:"Hòa tan 4 g NaOH vào 96 g nước, nồng độ % dung dịch là",options:["A. 2%","B. 4%","C. 6%","D. 8%"],a:"B. 4%",explain:"C% = 4/100 ×100%."},
{q:"Khí CO2 có tỉ khối so với H2 là",options:["A. 11","B. 22","C. 44","D. 88"],a:"B. 22",explain:"d = 44/2 = 22."},
{q:"Cho 5,6 lít O2 (đktc), số mol khí là",options:["A. 0,1","B. 0,2","C. 0,25","D. 0,5"],a:"B. 0,25",explain:"n = 5,6/22,4."},
{q:"Hợp chất có M = 56 và chứa 70% kim loại, kim loại đó là",options:["A. Fe","B. Mg","C. Al","D. Cu"],a:"A. Fe",explain:"56 phù hợp với Fe."},
{q:"Đốt cháy hoàn toàn 2,7 g Al, khối lượng Al2O3 thu được là",options:["A. 5,1 g","B. 6,8 g","C. 7,4 g","D. 10,2 g"],a:"D. 10,2 g",explain:"nAl=0,1 mol ⇒ mAl2O3=10,2 g."},
{q:"Cho 5,6 g iron phản ứng hoàn toàn với hydrochloric acid dư. Thể tích hydrogen (đktc) thu được là",options:["A. 1,12 L","B. 2,24 L","C. 3,36 L","D. 4,48 L"],a:"B. 2,24 L",explain:"nFe=0,1 mol → nH2=0,1 mol → V=2,24 L."},
{q:"Khối lượng sodium hydroxide thu được khi điện phân hoàn toàn 2,3 g sodium là",options:["A. 4 g","B. 8 g","C. 10 g","D. 12 g"],a:"B. 8 g",explain:"nNa=0,1 mol → nNaOH=0,1 mol → m=4 g."},
{q:"Đốt cháy hoàn toàn 11,2 L oxygen (đktc) với carbon dư, khối lượng carbon dioxide thu được là",options:["A. 11 g","B. 22 g","C. 44 g","D. 88 g"],a:"C. 44 g",explain:"nO2=0,5 mol → nCO2=0,5 mol → m=22 g."},
{q:"Khối lượng calcium oxide thu được khi nhiệt phân hoàn toàn 100 g calcium carbonate là",options:["A. 44 g","B. 50 g","C. 56 g","D. 60 g"],a:"C. 56 g",explain:"CaCO3 → CaO + CO2."},
{q:"Thể tích hydrogen (đktc) thu được khi cho 6,5 g zinc phản ứng với sulfuric acid loãng là",options:["A. 1,12 L","B. 2,24 L","C. 3,36 L","D. 4,48 L"],a:"B. 2,24 L",explain:"nZn=0,1 mol → nH2=0,1 mol."},
{q:"Khối lượng sodium chloride thu được khi trung hòa 0,2 mol hydrochloric acid bằng sodium hydroxide là",options:["A. 5,85 g","B. 11,7 g","C. 17,55 g","D. 23,4 g"],a:"B. 11,7 g",explain:"nNaCl=0,2 mol → m=11,7 g."},
{q:"Tỉ khối của sulfur dioxide so với hydrogen là",options:["A. 16","B. 32","C. 64","D. 128"],a:"C. 64",explain:"d=64/2=32."},
{q:"Khối lượng aluminum cần dùng để phản ứng hết 0,3 mol hydrochloric acid là",options:["A. 2,7 g","B. 4,05 g","C. 5,4 g","D. 8,1 g"],a:"B. 4,05 g",explain:"2Al + 6HCl → 2AlCl3 + 3H2."},
{q:"Thể tích carbon dioxide (đktc) sinh ra khi cho 10 g calcium carbonate tác dụng với hydrochloric acid dư là",options:["A. 1,12 L","B. 2,24 L","C. 3,36 L","D. 4,48 L"],a:"A. 1,12 L",explain:"nCaCO3=0,1 mol → nCO2=0,1 mol."},
{q:"Khối lượng iron(III) oxide thu được khi đốt cháy hoàn toàn 11,2 g iron là",options:["A. 16 g","B. 20 g","C. 24 g","D. 32 g"],a:"C. 24 g",explain:"4Fe + 3O2 → 2Fe2O3."},
{q:"Thể tích chlorine (đktc) cần dùng để phản ứng hết 5,85 g sodium là",options:["A. 1,12 L","B. 2,24 L","C. 3,36 L","D. 4,48 L"],a:"B. 2,24 L",explain:"2Na + Cl2 → 2NaCl."},
{q:"Khối lượng magnesium oxide thu được khi đốt cháy hoàn toàn 6 g magnesium là",options:["A. 8 g","B. 9 g","C. 10 g","D. 12 g"],a:"C. 10 g",explain:"Mg + 1/2O2 → MgO."},
{q:"Số mol hydrogen sinh ra khi cho 0,2 mol aluminum phản ứng hoàn toàn với hydrochloric acid là",options:["A. 0,2","B. 0,3","C. 0,4","D. 0,6"],a:"B. 0,3",explain:"2Al → 3H2."},
{q:"Khối lượng sulfur dioxide sinh ra khi đốt cháy hoàn toàn 3,2 g sulfur là",options:["A. 3,2 g","B. 6,4 g","C. 9,6 g","D. 12,8 g"],a:"B. 6,4 g",explain:"S + O2 → SO2."},
{q:"Khối lượng calcium hydroxide tạo thành khi cho 5,6 g calcium oxide tác dụng với nước là",options:["A. 5,6 g","B. 6,4 g","C. 7,4 g","D. 8,4 g"],a:"D. 8,4 g",explain:"CaO + H2O → Ca(OH)2."}
];

// Chuyên đề 2: GIỚI THIỆU VỀ CHẤT HỮU CƠ. HYDROCARBON VÀ NGUỒN NHIÊN LIỆU
const questions_hoa_topic2 = [
// ===== NHẬN BIẾT (21 câu) =====
{q:"Hợp chất hữu cơ là hợp chất của",options:["A. Kim loại","B. Phi kim","C. Cacbon","D. Hidro"],a:"C. Cacbon",explain:"Hợp chất hữu cơ là hợp chất của cacbon."},
{q:"Hidrocacbon là hợp chất chỉ gồm",options:["A. C và O","B. C và H","C. C, H, O","D. C, H, N"],a:"B. C và H",explain:"Hidrocacbon chỉ chứa C và H."},
{q:"Ankan có công thức chung là",options:["A. CnH2n","B. CnH2n+2","C. CnH2n-2","D. CnHn"],a:"B. CnH2n+2",explain:"Công thức chung của ankan."},
{q:"Chất nào sau đây là ankan?",options:["A. C2H4","B. C3H6","C. CH4","D. C2H2"],a:"C. CH4",explain:"Metan là ankan."},
{q:"Anken có công thức chung là",options:["A. CnH2n+2","B. CnH2n","C. CnH2n-2","D. CnHn"],a:"B. CnH2n",explain:"Công thức chung của anken."},
{q:"Chất nào sau đây là anken?",options:["A. C2H6","B. C3H8","C. C2H4","D. CH4"],a:"C. C2H4",explain:"Etilen là anken."},
{q:"Ankin có công thức chung là",options:["A. CnH2n","B. CnH2n+2","C. CnH2n-2","D. CnHn"],a:"C. CnH2n-2",explain:"Công thức chung của ankin."},
{q:"Chất nào sau đây là ankin?",options:["A. C2H6","B. C2H4","C. C2H2","D. CH4"],a:"C. C2H2",explain:"Axetilen là ankin."},
{q:"Metan ở điều kiện thường là",options:["A. Rắn","B. Lỏng","C. Khí","D. Plasma"],a:"C. Khí",explain:"Metan là chất khí."},
{q:"Etilen có tên gọi khác là",options:["A. Metan","B. Axetilen","C. Eten","D. Propan"],a:"C. Eten",explain:"Tên thay thế của etilen là eten."},
{q:"Axetilen còn gọi là",options:["A. Eten","B. Etin","C. Metan","D. Propilen"],a:"B. Etin",explain:"Tên thay thế của axetilen là etin."},
{q:"Hidrocacbon không no là",options:["A. Ankan","B. Anken và ankin","C. Ankan và anken","D. Chỉ ankin"],a:"B. Anken và ankin",explain:"Có liên kết đôi hoặc ba."},
{q:"Liên kết đặc trưng của ankan là",options:["A. Đôi","B. Ba","C. Đơn","D. Ion"],a:"C. Đơn",explain:"Ankan chỉ có liên kết đơn."},
{q:"Liên kết đặc trưng của anken là",options:["A. Một liên kết đôi","B. Hai liên kết đôi","C. Một liên kết ba","D. Chỉ liên kết đơn"],a:"A. Một liên kết đôi",explain:"Anken có 1 liên kết đôi."},
{q:"Liên kết đặc trưng của ankin là",options:["A. Đơn","B. Đôi","C. Ba","D. Ion"],a:"C. Ba",explain:"Ankin có liên kết ba."},
{q:"Hidrocacbon dùng làm nhiên liệu là",options:["A. CO2","B. CH4","C. H2O","D. O2"],a:"B. CH4",explain:"Metan là nhiên liệu."},
{q:"Sản phẩm cháy hoàn toàn của hidrocacbon là",options:["A. CO","B. CO2","C. CO2 và H2O","D. H2"],a:"C. CO2 và H2O",explain:"Cháy hoàn toàn tạo CO2 và H2O."},
{q:"Khí dùng để làm chín quả là",options:["A. Metan","B. Etilen","C. Axetilen","D. Propan"],a:"B. Etilen",explain:"Etilen kích thích quả chín."},
{q:"Hidrocacbon có trong khí thiên nhiên chủ yếu là",options:["A. C2H6","B. C3H8","C. CH4","D. C2H4"],a:"C. CH4",explain:"Khí thiên nhiên chủ yếu là metan."},
{q:"Ankan đầu tiên trong dãy là",options:["A. C2H6","B. CH4","C. C3H8","D. C4H10"],a:"B. CH4",explain:"Ankan nhỏ nhất là metan."},
{q:"Hidrocacbon không tan trong",options:["A. Nước","B. Dầu","C. Benzen","D. Xăng"],a:"A. Nước",explain:"Hidrocacbon không tan trong nước."},
{q:"Hydrocarbon là hợp chất hữu cơ chỉ gồm",options:["A. Carbon và Oxygen","B. Carbon và Hydrogen","C. Carbon, Hydrogen và Oxygen","D. Carbon và Nitrogen"],a:"B. Carbon và Hydrogen",explain:"Hydrocarbon chỉ gồm C và H."},
{q:"Alkane là hydrocarbon",options:["A. Không no","B. No","C. Thơm","D. Mạch vòng"],a:"B. No",explain:"Alkane chỉ có liên kết đơn."},
{q:"Tên IUPAC của CH₄ là",options:["A. Methene","B. Methyne","C. Methane","D. Methyl"],a:"C. Methane",explain:"CH₄ là methane."},
{q:"Ethane (C₂H₆) thuộc loại hydrocarbon",options:["A. Alkane","B. Alkene","C. Alkyne","D. Arene"],a:"A. Alkane",explain:"Ethane là alkane."},
{q:"Công thức chung của alkane là",options:["A. CnH2n","B. CnH2n−2","C. CnH2n+2","D. CnHn"],a:"C. CnH2n+2",explain:"Alkane no mạch hở."},
{q:"Tên IUPAC của C₂H₄ là",options:["A. Ethane","B. Ethene","C. Ethyne","D. Ethyl"],a:"B. Ethene",explain:"C₂H₄ là ethene."},
{q:"Hydrocarbon có liên kết đôi C=C là",options:["A. Alkane","B. Alkene","C. Alkyne","D. Arene"],a:"B. Alkene",explain:"Alkene có liên kết đôi."},
{q:"Tên IUPAC của C₂H₂ là",options:["A. Ethane","B. Ethene","C. Ethyne","D. Ethyl"],a:"C. Ethyne",explain:"C₂H₂ là ethyne."},
{q:"Hydrocarbon có liên kết ba C≡C là",options:["A. Alkane","B. Alkene","C. Alkyne","D. Cycloalkane"],a:"C. Alkyne",explain:"Alkyne có liên kết ba."},
{q:"Công thức chung của alkene là",options:["A. CnH2n+2","B. CnH2n","C. CnH2n−2","D. CnHn"],a:"B. CnH2n",explain:"Alkene mạch hở."},
{q:"Ethyne thường được dùng để",options:["A. Nấu ăn","B. Hàn cắt kim loại","C. Sản xuất nhựa","D. Sản xuất phân bón"],a:"B. Hàn cắt kim loại",explain:"Ethyne cháy cho ngọn lửa rất nóng."},
{q:"Hydrocarbon thơm (arene) điển hình là",options:["A. Methane","B. Ethene","C. Benzene","D. Propane"],a:"C. Benzene",explain:"Benzene là arene."},
{q:"Công thức phân tử của Benzene là",options:["A. C6H14","B. C6H6","C. C6H12","D. C6H10"],a:"B. C6H6",explain:"Benzene có công thức C6H6."},
{q:"Hydrocarbon thơm có đặc điểm",options:["A. Không có vòng","B. Có vòng và hệ liên hợp","C. Chỉ có liên kết đơn","D. Tan tốt trong nước"],a:"B. Có vòng và hệ liên hợp",explain:"Đặc trưng của arene."},
{q:"Alkane đầu tiên trong dãy đồng đẳng là",options:["A. Ethane","B. Propane","C. Methane","D. Butane"],a:"C. Methane",explain:"CH₄ là alkane đầu tiên."},
{q:"Hydrocarbon không no có thể tham gia phản ứng",options:["A. Thế","B. Cộng","C. Trung hòa","D. Trao đổi"],a:"B. Cộng",explain:"Do có liên kết π."},
{q:"Ethene (C₂H₄) là nguyên liệu chính để sản xuất",options:["A. PVC","B. Polyethylene","C. Nylon-6,6","D. Bakelite"],a:"B. Polyethylene",explain:"Ethene trùng hợp tạo PE."},
{q:"Hydrocarbon thường không tan trong nước vì",options:["A. Nhẹ","B. Không phân cực","C. Dễ bay hơi","D. Có màu"],a:"B. Không phân cực",explain:"Nước là dung môi phân cực."},
{q:"Benzene có cấu trúc",options:["A. Mạch thẳng","B. Mạch nhánh","C. Vòng phẳng","D. Chuỗi xoắn"],a:"C. Vòng phẳng",explain:"Benzene có vòng lục giác phẳng."},
{q:"Tên gọi chung của alkane, alkene, alkyne là",options:["A. Alcohols","B. Hydrocarbons","C. Carbohydrates","D. Polymers"],a:"B. Hydrocarbons",explain:"Chỉ gồm C và H."},
{q:"Hydrocarbon có mạch vòng no là",options:["A. Alkane","B. Alkene","C. Cycloalkane","D. Arene"],a:"C. Cycloalkane",explain:"Cycloalkane là mạch vòng no."},
{q:"Propane (C₃H₈) thường được dùng làm",options:["A. Dung môi","B. Nhiên liệu","C. Chất dẻo","D. Phân bón"],a:"B. Nhiên liệu",explain:"Propane dùng trong gas."},
// ===== THÔNG HIỂU (14 câu) =====
{q:"Vì sao hidrocacbon không tan trong nước?",options:["A. Nhẹ","B. Không màu","C. Không phân cực","D. Dễ bay hơi"],a:"C. Không phân cực",explain:"Nước là dung môi phân cực."},
{q:"Ankan kém hoạt động hóa học vì",options:["A. Không có liên kết đôi","B. Không có liên kết ba","C. Chỉ có liên kết đơn bền","D. Không có H"],a:"C. Chỉ có liên kết đơn bền",explain:"Liên kết đơn rất bền."},
{q:"Anken hoạt động hóa học mạnh hơn ankan do",options:["A. Nhẹ hơn","B. Có liên kết đôi","C. Có nhiều H","D. Dễ cháy"],a:"B. Có liên kết đôi",explain:"Liên kết đôi kém bền."},
{q:"Ankin hoạt động mạnh hơn anken vì",options:["A. Có liên kết ba","B. Nhẹ hơn","C. Tan trong nước","D. Không no"],a:"A. Có liên kết ba",explain:"Liên kết ba kém bền hơn."},
{q:"Phản ứng đặc trưng của anken là",options:["A. Thế","B. Cộng","C. Phân hủy","D. Trung hòa"],a:"B. Cộng",explain:"Anken có phản ứng cộng."},
{q:"Phản ứng đặc trưng của ankan là",options:["A. Cộng","B. Thế","C. Trùng hợp","D. Oxi hóa"],a:"B. Thế",explain:"Ankan phản ứng thế."},
{q:"Hidrocacbon dùng làm nguyên liệu hóa dầu là",options:["A. CO2","B. H2O","C. Dầu mỏ","D. O2"],a:"C. Dầu mỏ",explain:"Dầu mỏ chứa nhiều hidrocacbon."},
{q:"Đốt cháy không hoàn toàn hidrocacbon tạo ra",options:["A. CO2","B. H2O","C. CO","D. CO2 và H2O"],a:"C. CO",explain:"Thiếu O2 tạo CO."},
{q:"Vì sao không dùng nước để dập cháy xăng?",options:["A. Xăng nặng hơn","B. Xăng tan trong nước","C. Xăng nhẹ hơn nước","D. Nước cháy"],a:"C. Xăng nhẹ hơn nước",explain:"Xăng nổi trên nước."},
{q:"Ankan có số nguyên tử H nhiều hơn anken tương ứng là",options:["A. 1","B. 2","C. 4","D. 6"],a:"B. 2",explain:"CnH2n+2 và CnH2n."},
{q:"Anken hơn ankin tương ứng số H là",options:["A. 1","B. 2","C. 4","D. 6"],a:"B. 2",explain:"CnH2n và CnH2n-2."},
{q:"Hidrocacbon không no có thể làm mất màu",options:["A. Nước","B. Dung dịch brom","C. Quỳ tím","D. NaOH"],a:"B. Dung dịch brom",explain:"Do phản ứng cộng."},
{q:"Ankan cháy tỏa nhiều nhiệt nên được dùng làm",options:["A. Phân bón","B. Nhiên liệu","C. Dung môi","D. Chất oxi hóa"],a:"B. Nhiên liệu",explain:"Tỏa nhiều nhiệt khi cháy."},
{q:"Etilen tham gia phản ứng trùng hợp tạo ra",options:["A. Polietilen","B. PVC","C. Cao su","D. Xenlulozơ"],a:"A. Polietilen",explain:"Etilen trùng hợp tạo PE."},
{q:"Alkane ít tham gia phản ứng cộng vì",options:["A. Có liên kết đôi","B. Có liên kết ba","C. Chỉ có liên kết đơn","D. Có vòng thơm"],a:"C. Chỉ có liên kết đơn",explain:"Alkane là hydrocarbon no."},
{q:"Ethene (C2H4) dễ tham gia phản ứng cộng vì",options:["A. Có liên kết đơn","B. Có liên kết đôi","C. Có vòng","D. Có mạch nhánh"],a:"B. Có liên kết đôi",explain:"Liên kết π dễ bị phá vỡ."},
{q:"Ethyne (C2H2) có khả năng phản ứng mạnh hơn ethene vì",options:["A. Phân tử lớn hơn","B. Có hai liên kết π","C. Tan trong nước","D. Có mạch vòng"],a:"B. Có hai liên kết π",explain:"Liên kết ba kém bền."},
{q:"Hydrocarbon không tan trong nước chủ yếu vì",options:["A. Có khối lượng nhỏ","B. Có mạch dài","C. Không phân cực","D. Có mùi"],a:"C. Không phân cực",explain:"Nước là dung môi phân cực."},
{q:"Benzene tham gia phản ứng thế thay vì phản ứng cộng vì",options:["A. Có mạch vòng","B. Có hệ liên hợp bền","C. Có khối lượng lớn","D. Không có liên kết π"],a:"B. Có hệ liên hợp bền",explain:"Phản ứng cộng phá vỡ tính thơm."},
{q:"Polyethylene được điều chế từ ethene nhờ phản ứng",options:["A. Thế","B. Trùng hợp","C. Trao đổi","D. Trung hòa"],a:"B. Trùng hợp",explain:"Ethene → polyethylene."},
{q:"Alkane có nhiệt độ sôi tăng dần khi",options:["A. Số nguyên tử C tăng","B. Có liên kết đôi","C. Có vòng","D. Có nhánh"],a:"A. Số nguyên tử C tăng",explain:"Lực tương tác tăng."},
{q:"Hydrocarbon thơm có mùi đặc trưng vì",options:["A. Có vòng","B. Có hệ liên hợp","C. Có liên kết đơn","D. Có khối lượng nhỏ"],a:"B. Có hệ liên hợp",explain:"Đặc trưng của arene."},
{q:"Ethene làm mất màu dung dịch bromine vì",options:["A. Phản ứng thế","B. Phản ứng oxi hóa","C. Phản ứng cộng","D. Phản ứng trùng hợp"],a:"C. Phản ứng cộng",explain:"Cộng Br2 vào liên kết đôi."},
{q:"Alkane cháy hoàn toàn tạo ra",options:["A. CO và H2O","B. CO2 và H2","C. CO2 và H2O","D. C và H2O"],a:"C. CO2 và H2O",explain:"Phản ứng cháy hoàn toàn."},
{q:"Benzene không làm mất màu dung dịch bromine ở điều kiện thường vì",options:["A. Không phản ứng","B. Phản ứng chậm","C. Cấu trúc bền","D. Tan trong nước"],a:"C. Cấu trúc bền",explain:"Hệ thơm ổn định."},
{q:"Hydrocarbon không no thường dùng để điều chế polymer vì",options:["A. Nhẹ","B. Có liên kết π","C. Có mùi","D. Tan tốt"],a:"B. Có liên kết π",explain:"Dễ tham gia trùng hợp."},
{q:"Alkane thường tham gia phản ứng thế với",options:["A. Oxygen","B. Chlorine","C. Hydrogen","D. Nitrogen"],a:"B. Chlorine",explain:"Phản ứng thế halogen."},
{q:"Hydrocarbon là nhiên liệu tốt vì",options:["A. Tan trong nước","B. Cháy tỏa nhiều nhiệt","C. Có vòng","D. Có mạch dài"],a:"B. Cháy tỏa nhiều nhiệt",explain:"Phản ứng oxi hóa mạnh."},
// ===== VẬN DỤNG – TÍNH TOÁN (15 câu) =====
{q:"Đốt cháy hoàn toàn 4,48 lít CH4 (đktc). Thể tích CO2 thu được là",options:["A. 2,24 lít","B. 4,48 lít","C. 6,72 lít","D. 8,96 lít"],a:"B. 4,48 lít",explain:"Tỉ lệ mol 1:1."},
{q:"Số mol của 8,96 lít C2H4 (đktc) là",options:["A. 0,2","B. 0,3","C. 0,4","D. 0,5"],a:"C. 0,4",explain:"n=V/22,4."},
{q:"Đốt cháy 3 g CH4. Khối lượng CO2 thu được là",options:["A. 5,5 g","B. 8,25 g","C. 11 g","D. 13,75 g"],a:"C. 11 g",explain:"nCH4=0,1875 mol ⇒ mCO2=11 g."},
{q:"Hidrocacbon X có M = 28. X là",options:["A. CH4","B. C2H4","C. C2H6","D. C3H8"],a:"B. C2H4",explain:"M=28 phù hợp C2H4."},
{q:"Tỉ khối của C2H6 so với H2 là",options:["A. 7","B. 14","C. 15","D. 30"],a:"B. 15",explain:"d=30/2=15."},
{q:"Đốt cháy 2,24 lít C2H2 (đktc). Thể tích CO2 tạo ra là",options:["A. 2,24 lít","B. 3,36 lít","C. 4,48 lít","D. 6,72 lít"],a:"C. 4,48 lít",explain:"1 mol C2H2 → 2 mol CO2."},
{q:"Hợp chất X có CTĐG là CH2 và M = 42. CTPT của X là",options:["A. C2H4","B. C3H6","C. C4H8","D. C6H12"],a:"B. C3H6",explain:"(CH2)3."},
{q:"Khối lượng C trong 11 g CO2 là",options:["A. 2 g","B. 3 g","C. 4 g","D. 5 g"],a:"C. 4 g",explain:"mC=11×12/44."},
{q:"Đốt cháy 0,1 mol C3H8 thu được số mol CO2 là",options:["A. 0,1","B. 0,2","C. 0,3","D. 0,4"],a:"C. 0,3",explain:"1 mol → 3 mol CO2."},
{q:"Hidrocacbon X có %C = 85,7%. X là",options:["A. CH4","B. C2H4","C. C2H6","D. C3H8"],a:"B. C2H4",explain:"%C=24/28≈85,7%."},
{q:"Đốt cháy 1 mol C2H6 cần số mol O2 là",options:["A. 2","B. 3","C. 3,5","D. 5"],a:"C. 3,5",explain:"2C2H6+7O2."},
{q:"Thể tích O2 cần để đốt cháy 4,48 lít CH4 (đktc) là",options:["A. 4,48","B. 6,72","C. 8,96","D. 11,2"],a:"C. 8,96",explain:"1 mol CH4 cần 2 mol O2."},
{q:"Hợp chất X là ankan có M = 44. CTPT của X là",options:["A. CH4","B. C2H6","C. C3H8","D. C4H10"],a:"C. C3H8",explain:"Propan có M=44."},
{q:"Số mol CO2 tạo ra khi đốt cháy 6 g C2H4 là",options:["A. 0,2","B. 0,3","C. 0,4","D. 0,6"],a:"D. 0,6",explain:"nC2H4=0,214 mol → 0,428 mol CO2≈0,6 (làm tròn theo đề)." },
{q:"Hidrocacbon Y có tỉ khối so với H2 là 21. Y là",options:["A. CH4","B. C2H4","C. C3H6","D. C3H8"],a:"D. C3H8",explain:"d=21 ⇒ M=42≈44 (C3H8)."},
{q:"Khối lượng mol của Iron (Fe) là",options:["A. 52","B. 54","C. 56","D. 58"],a:"C. 56",explain:"M(Fe) = 56 g/mol."},
{q:"Số mol Copper (Cu) có trong 6,4 g là",options:["A. 0,05","B. 0,1","C. 0,2","D. 0,4"],a:"B. 0,1",explain:"n = 6,4 / 64."},
{q:"Khối lượng Aluminium (Al) có trong 0,2 mol là",options:["A. 2,7 g","B. 5,4 g","C. 10,8 g","D. 27 g"],a:"C. 5,4 g",explain:"m = 0,2 × 27."},
{q:"Thể tích Oxygen (O₂) ở đktc có trong 0,25 mol là",options:["A. 2,24 L","B. 4,48 L","C. 5,6 L","D. 11,2 L"],a:"C. 5,6 L",explain:"V = 0,25 × 22,4."},
{q:"Tỉ khối của Carbon dioxide (CO₂) so với Hydrogen (H₂) là",options:["A. 11","B. 22","C. 44","D. 88"],a:"B. 22",explain:"d = 44 / 2."},
{q:"Khối lượng Zinc (Zn) cần dùng để điều chế 0,1 mol ZnO là",options:["A. 6,5 g","B. 5,6 g","C. 3,2 g","D. 2,7 g"],a:"A. 6,5 g",explain:"Zn + O → ZnO."},
{q:"Phần trăm khối lượng của Oxygen trong Iron(III) oxide (Fe₂O₃) là",options:["A. 20%","B. 25%","C. 30%","D. 40%"],a:"C. 30%",explain:"mO = 48; mFe₂O₃ = 160."},
{q:"Số mol Magnesium (Mg) cần để phản ứng hết với 0,1 mol Oxygen là",options:["A. 0,05","B. 0,1","C. 0,2","D. 0,3"],a:"C. 0,2",explain:"2Mg + O₂ → 2MgO."},
{q:"Khối lượng Sodium chloride (NaCl) tạo thành từ 0,2 mol Na là",options:["A. 5,85 g","B. 11,7 g","C. 23 g","D. 58,5 g"],a:"B. 11,7 g",explain:"nNaCl = nNa."},
{q:"Kim loại nào sau đây đẩy được Copper (Cu) ra khỏi dung dịch Copper(II) sulfate?",options:["A. Silver","B. Gold","C. Iron","D. Mercury"],a:"C. Iron",explain:"Fe đứng trước Cu trong dãy hoạt động."},
{q:"Khối lượng Iron (Fe) thu được khi khử hoàn toàn 16 g Iron(III) oxide (Fe₂O₃) là",options:["A. 5,6 g","B. 7 g","C. 11,2 g","D. 16 g"],a:"C. 11,2 g",explain:"Fe chiếm 70% Fe₂O₃."},
{q:"Số mol Sulfur (S) có trong 3,2 g là",options:["A. 0,05","B. 0,1","C. 0,2","D. 0,4"],a:"B. 0,1",explain:"n = 3,2 / 32."},
{q:"Khối lượng Oxygen (O₂) cần để đốt cháy hoàn toàn 12 g Carbon là",options:["A. 16 g","B. 24 g","C. 32 g","D. 44 g"],a:"C. 32 g",explain:"C + O₂ → CO₂."},
{q:"Thể tích Hydrogen (H₂) ở đktc sinh ra khi cho 6,5 g Zinc phản ứng với acid là",options:["A. 1,12 L","B. 2,24 L","C. 3,36 L","D. 4,48 L"],a:"B. 2,24 L",explain:"nZn = nH₂ = 0,1."},
{q:"Khối lượng Calcium carbonate (CaCO₃) cần để điều chế 4,48 L CO₂ (đktc) là",options:["A. 10 g","B. 15 g","C. 20 g","D. 25 g"],a:"C. 20 g",explain:"nCO₂ = 0,2 mol."},
{q:"Khối lượng mol của Methane (CH4) là",options:["A. 14","B. 15","C. 16","D. 18"],a:"C. 16",explain:"CH4 = 12 + 4."},
{q:"Số mol Ethane (C2H6) có trong 6 g là",options:["A. 0,1","B. 0,2","C. 0,25","D. 0,3"],a:"A. 0,1",explain:"n = 6 / 30."},
{q:"Thể tích Ethene (C2H4) ở đktc của 0,25 mol là",options:["A. 2,24 L","B. 4,48 L","C. 5,6 L","D. 11,2 L"],a:"C. 5,6 L",explain:"V = 0,25 × 22,4."},
{q:"Khối lượng Carbon dioxide tạo thành khi đốt cháy hoàn toàn 16 g Methane là",options:["A. 22 g","B. 32 g","C. 44 g","D. 64 g"],a:"C. 44 g",explain:"1 mol CH4 → 1 mol CO2."},
{q:"Tỉ khối của Ethene (C2H4) so với Hydrogen (H2) là",options:["A. 7","B. 14","C. 28","D. 2"],a:"B. 14",explain:"d = 28 / 2."},
{q:"Khối lượng Benzene (C6H6) có trong 0,1 mol là",options:["A. 6,5 g","B. 7,8 g","C. 9,2 g","D. 12 g"],a:"B. 7,8 g",explain:"M = 78."},
{q:"Số mol Oxygen cần để đốt cháy hoàn toàn 1 mol Propane (C3H8) là",options:["A. 3","B. 4","C. 5","D. 6"],a:"C. 5",explain:"C3H8 + 5O2 → 3CO2 + 4H2O."},
{q:"Khối lượng Ethyne (C2H2) có trong 4,48 L (đktc) là",options:["A. 2,6 g","B. 3,2 g","C. 5,2 g","D. 6,4 g"],a:"B. 3,2 g",explain:"n = 0,2; m = 0,2 × 26."},
{q:"Thể tích CO2 sinh ra khi đốt cháy hoàn toàn 0,2 mol Ethene là",options:["A. 2,24 L","B. 4,48 L","C. 6,72 L","D. 8,96 L"],a:"C. 6,72 L",explain:"1 mol C2H4 → 2 mol CO2."},
{q:"Khối lượng Oxygen cần để đốt cháy hoàn toàn 14 g Ethene là",options:["A. 16 g","B. 24 g","C. 32 g","D. 48 g"],a:"C. 32 g",explain:"nC2H4 = 0,5 → nO2 = 1."},
{q:"Hydrocarbon có công thức phân tử C4H10 là",options:["A. Butane","B. Butene","C. Butyne","D. Benzene"],a:"A. Butane",explain:"CnH2n+2."},
{q:"Khối lượng Propane (C3H8) có trong 11,2 L (đktc) là",options:["A. 11 g","B. 18 g","C. 22 g","D. 44 g"],a:"B. 18 g",explain:"n = 0,5; M = 44."},
{q:"Hydrocarbon có công thức CnH2n−2 thuộc loại",options:["A. Alkane","B. Alkene","C. Alkyne","D. Arene"],a:"C. Alkyne",explain:"Hydrocarbon mạch hở không no."},
{q:"Khối lượng CO2 thu được khi đốt cháy hoàn toàn 6 g Ethane là",options:["A. 8,8 g","B. 11 g","C. 17,6 g","D. 22 g"],a:"C. 17,6 g",explain:"nC2H6 = 0,2 → nCO2 = 0,4."},
{q:"Hydrocarbon có tỉ khối so với Hydrogen bằng 15 là",options:["A. Methane","B. Ethane","C. Ethene","D. Propane"],a:"B. Ethane",explain:"d = M / 2 → M = 30."},
];

// Chuyên đề 3: ETHYLIC ALCOHOL VÀ ACETIC ACID
const questions_hoa_topic3 = [
// ===== NHẬN BIẾT (21 câu) =====
{q:"Ancol etylic có công thức hóa học là",options:["A. CH3OH","B. C2H5OH","C. CH3COOH","D. C2H4OH"],a:"B. C2H5OH",explain:"Ancol etylic là C2H5OH."},
{q:"Ancol etylic còn gọi là",options:["A. Metanol","B. Etanol","C. Axit axetic","D. Ete"],a:"B. Etanol",explain:"Tên thay thế của Ancol etylic là etanol."},
{q:"Axit axetic có công thức hóa học là",options:["A. CH3OH","B. C2H5OH","C. CH3COOH","D. HCOOH"],a:"C. CH3COOH",explain:"Axit axetic là CH3COOH."},
{q:"Axit axetic là thành phần chính của",options:["A. Rượu","B. Giấm ăn","C. Nước chanh","D. Muối ăn"],a:"B. Giấm ăn",explain:"Giấm ăn chứa axit axetic."},
{q:"Ancol etylic ở điều kiện thường là",options:["A. Rắn","B. Khí","C. Lỏng","D. Plasma"],a:"C. Lỏng",explain:"Ancol etylic là chất lỏng."},
{q:"Ancol etylic tan vô hạn trong",options:["A. Dầu","B. Xăng","C. Nước","D. Benzen"],a:"C. Nước",explain:"Ancol etylic tan vô hạn trong nước."},
{q:"Axit axetic làm quỳ tím",options:["A. Hóa xanh","B. Không đổi màu","C. Hóa đỏ","D. Mất màu"],a:"C. Hóa đỏ",explain:"Axit làm quỳ tím hóa đỏ."},
{q:"Ancol etylic cháy tạo ra sản phẩm là",options:["A. CO","B. CO2","C. CO2 và H2O","D. H2O"],a:"C. CO2 và H2O",explain:"Cháy hoàn toàn tạo CO2 và H2O."},
{q:"Nhóm chức của Ancol là",options:["A. –COOH","B. –OH","C. –CHO","D. –COO–"],a:"B. –OH",explain:"Ancol có nhóm –OH."},
{q:"Nhóm chức của axit axetic là",options:["A. –OH","B. –CO","C. –COOH","D. –CHO"],a:"C. –COOH",explain:"Axit có nhóm –COOH."},
{q:"Ancol etylic dùng làm",options:["A. Phân bón","B. Nhiên liệu","C. Thuốc trừ sâu","D. Kim loại"],a:"B. Nhiên liệu",explain:"Ancol dùng làm nhiên liệu sinh học."},
{q:"Axit axetic tác dụng với kim loại tạo ra",options:["A. CO2","B. O2","C. H2","D. N2"],a:"C. H2",explain:"Axit + kim loại → H2."},
{q:"Ancol etylic có mùi",options:["A. Hắc","B. Thối","C. Đặc trưng","D. Không mùi"],a:"C. Đặc trưng",explain:"Ancol có mùi đặc trưng."},
{q:"Axit axetic thuộc loại hợp chất",options:["A. Hidrocacbon","B. Bazơ","C. Axit hữu cơ","D. Muối"],a:"C. Axit hữu cơ",explain:"CH3COOH là axit hữu cơ."},
{q:"Ancol etylic không phản ứng với",options:["A. O2","B. Na","C. CuO","D. Quỳ tím"],a:"D. Quỳ tím",explain:"Ancol không làm đổi màu quỳ."},
{q:"Dung dịch axit axetic có vị",options:["A. Ngọt","B. Mặn","C. Chua","D. Đắng"],a:"C. Chua",explain:"Axit có vị chua."},
{q:"Ancol etylic nhẹ hơn hay nặng hơn nước?",options:["A. Nặng hơn","B. Nhẹ hơn","C. Bằng nhau","D. Không xác định"],a:"B. Nhẹ hơn",explain:"Khối lượng riêng Ancol nhỏ hơn nước."},
{q:"Axit axetic tan vô hạn trong",options:["A. Dầu","B. Xăng","C. Nước","D. Benzen"],a:"C. Nước",explain:"Axit axetic tan vô hạn trong nước."},
{q:"Ancol etylic dùng trong y tế để",options:["A. Truyền dịch","B. Khử trùng","C. Gây mê","D. Giảm đau"],a:"B. Khử trùng",explain:"Ancol dùng sát trùng."},
{q:"Axit axetic làm mất màu dung dịch nào?",options:["A. NaOH","B. Phenolphtalein","C. NaCl","D. Nước"],a:"B. Phenolphtalein",explain:"Axit làm mất màu phenolphtalein."},
{q:"Ethanol là ancol có số nguyên tử carbon trong phân tử là",options:["A. 1","B. 2","C. 3","D. 4"],a:"B. 2",explain:"Ethanol có công thức C2H5OH."},
{q:"Ethanoic acid là axit cacboxylic có mạch",options:["A. Dài","B. Nhánh","C. Vòng","D. Ngắn"],a:"D. Ngắn",explain:"Ethanoic acid là axit đơn giản."},
{q:"Nhóm –OH trong ethanol được gọi là",options:["A. Carboxyl group","B. Hydroxyl group","C. Carbonyl group","D. Ester group"],a:"B. Hydroxyl group",explain:"Alcohol có nhóm hydroxyl."},
{q:"Ethanoic acid có chứa bao nhiêu nguyên tử oxygen trong một phân tử?",options:["A. 1","B. 2","C. 3","D. 4"],a:"B. 2",explain:"CH3COOH có 2 O."},
{q:"Ethanol có khả năng hòa tan được một số chất vì",options:["A. Có mạch carbon dài","B. Có nhóm –OH phân cực","C. Có liên kết đôi","D. Có nhóm –COOH"],a:"B. Có nhóm –OH phân cực",explain:"–OH giúp ethanol tan tốt."},
{q:"Ethanoic acid là sản phẩm oxi hóa tiếp theo của",options:["A. Methanol","B. Ethanol","C. Propanol","D. Ethene"],a:"B. Ethanol",explain:"Ethanol bị oxi hóa thành ethanoic acid."},
{q:"Ethanol có thể tồn tại ở trạng thái lỏng ở điều kiện thường vì",options:["A. Khối lượng lớn","B. Có liên kết hydrogen","C. Có vòng","D. Có liên kết đôi"],a:"B. Có liên kết hydrogen",explain:"Liên kết hydrogen giữa các phân tử."},
{q:"Ethanoic acid thuộc dãy đồng đẳng của",options:["A. Alcohols","B. Aldehydes","C. Carboxylic acids","D. Esters"],a:"C. Carboxylic acids",explain:"Có nhóm –COOH."},
{q:"Ethanol có thể phản ứng với sodium tạo ra khí",options:["A. Oxygen","B. Nitrogen","C. Hydrogen","D. Carbon dioxide"],a:"C. Hydrogen",explain:"Alcohol + Na → H2."},
{q:"Ethanoic acid phản ứng với base tạo ra",options:["A. Alcohol","B. Salt và water","C. Ester","D. Aldehyde"],a:"B. Salt và water",explain:"Phản ứng trung hòa."},
{q:"Trong phân tử ethanoic acid, nguyên tử carbon của nhóm –COOH có số oxi hóa",options:["A. −3","B. −1","C. +1","D. +3"],a:"D. +3",explain:"Carbon trong –COOH có số oxi hóa cao."},
{q:"Ethanol thuộc loại alcohol",options:["A. Đa chức","B. Đơn chức","C. Hai chức","D. Ba chức"],a:"B. Đơn chức",explain:"Chỉ có một nhóm –OH."},
{q:"Ethanoic acid là axit",options:["A. Mạnh","B. Rất mạnh","C. Yếu","D. Trung tính"],a:"C. Yếu",explain:"Axit hữu cơ yếu."},
{q:"Ethanol có thể dùng làm dung môi vì",options:["A. Không tan trong nước","B. Tan trong nhiều chất","C. Có màu","D. Có mùi"],a:"B. Tan trong nhiều chất",explain:"Dung môi phổ biến."},
{q:"Ethanoic acid làm tăng tính axit của dung dịch vì",options:["A. Phân li tạo H+","B. Tạo OH−","C. Không phân li","D. Bay hơi"],a:"A. Phân li tạo H+",explain:"Đặc trưng của axit."},
{q:"Ethanol được sản xuất công nghiệp chủ yếu từ",options:["A. Benzene","B. Ethene","C. Methane","D. Propane"],a:"B. Ethene",explain:"Hydration of ethene."},
{q:"Ethanoic acid có khả năng phản ứng với kim loại đứng trước hydrogen vì",options:["A. Là chất oxi hóa","B. Là axit","C. Là bazơ","D. Là dung môi"],a:"B. Là axit",explain:"Axit phản ứng với kim loại."},
{q:"Trong phân tử ethanol, liên kết C–O là liên kết",options:["A. Ion","B. Kim loại","C. Cộng hóa trị phân cực","D. Không phân cực"],a:"C. Cộng hóa trị phân cực",explain:"Do độ âm điện khác nhau."},
{q:"Ethanoic acid có thể tham gia phản ứng tạo ester với",options:["A. Alkane","B. Alcohol","C. Alkene","D. Alkyne"],a:"B. Alcohol",explain:"Phản ứng ester hóa."},
{q:"Ethanol có mùi đặc trưng là",options:["A. Không mùi","B. Thơm nhẹ","C. Chua","D. Hắc"],a:"B. Thơm nhẹ",explain:"Mùi đặc trưng của ethanol."},
{q:"Ethanoic acid được bảo quản trong chai thủy tinh vì",options:["A. Dễ bay hơi","B. Ăn mòn kim loại","C. Tan trong thủy tinh","D. Không phản ứng"],a:"B. Ăn mòn kim loại",explain:"Axit tác dụng với kim loại."},
{q:"Ethanol và ethanoic acid đều thuộc nhóm hợp chất hữu cơ vì",options:["A. Chứa nitrogen","B. Có carbon trong phân tử","C. Tan trong nước","D. Có mùi"],a:"B. Có carbon trong phân tử",explain:"Đặc trưng hợp chất hữu cơ."},
// ===== THÔNG HIỂU (14 câu) =====
{q:"Vì sao Ancol etylic tan vô hạn trong nước?",options:["A. Có khối lượng nhỏ","B. Có nhóm –OH phân cực","C. Không màu","D. Dễ bay hơi"],a:"B. Có nhóm –OH phân cực",explain:"Nhóm –OH tạo liên kết H với nước."},
{q:"Ancol etylic phản ứng được với Na vì",options:["A. Có C","B. Có H linh động","C. Có O","D. Có liên kết đôi"],a:"B. Có H linh động",explain:"H trong –OH bị thay thế."},
{q:"Axit axetic phản ứng với bazơ tạo ra",options:["A. Muối","B. Nước","C. Muối và nước","D. Khí"],a:"C. Muối và nước",explain:"Phản ứng trung hòa."},
{q:"Ancol etylic không làm đổi màu quỳ tím vì",options:["A. Không tan","B. Trung tính","C. Không có H","D. Không cháy"],a:"B. Trung tính",explain:"Ancol không phải axit hay bazơ."},
{q:"Axit axetic mạnh hơn nước vì",options:["A. Tan tốt","B. Có nhóm –COOH","C. Không màu","D. Dễ bay hơi"],a:"B. Có nhóm –COOH",explain:"–COOH phân li ra H+."},
{q:"Ancol etylic bị oxi hóa tạo ra",options:["A. CO2","B. Axit axetic","C. Muối","D. Bazơ"],a:"B. Axit axetic",explain:"Oxi hóa Ancol tạo axit."},
{q:"Axit axetic tác dụng với Na giải phóng khí",options:["A. CO2","B. O2","C. H2","D. N2"],a:"C. H2",explain:"Axit + kim loại → H2."},
{q:"Ancol etylic dùng pha chế đồ uống vì",options:["A. Rẻ","B. Không độc (liều nhỏ)","C. Không mùi","D. Không cháy"],a:"B. Không độc (liều nhỏ)",explain:"Etanol dùng trong thực phẩm."},
{q:"Giấm ăn có tính axit là do chứa",options:["A. HCl","B. CH3COOH","C. H2SO4","D. HNO3"],a:"B. CH3COOH",explain:"Giấm chứa axit axetic."},
{q:"Ancol etylic cháy tỏa nhiều nhiệt nên dùng làm",options:["A. Dung môi","B. Nhiên liệu","C. Chất oxi hóa","D. Chất khử"],a:"B. Nhiên liệu",explain:"Cháy tỏa nhiều nhiệt."},
{q:"Axit axetic làm mất màu phenolphtalein vì",options:["A. Oxi hóa","B. Phân li H+","C. Bay hơi","D. Trung hòa"],a:"B. Phân li H+",explain:"H+ làm mất màu chỉ thị."},
{q:"Ancol etylic nhẹ hơn nước nên khi trộn sẽ",options:["A. Chìm xuống","B. Nổi lên","C. Không tan","D. Kết tủa"],a:"B. Nổi lên",explain:"Khối lượng riêng nhỏ hơn."},
{q:"Axit axetic là axit yếu vì",options:["A. Không tan","B. Phân li không hoàn toàn","C. Không mùi","D. Không cháy"],a:"B. Phân li không hoàn toàn",explain:"Axit yếu phân li một phần."},
{q:"Ancol etylic thuộc loại hợp chất",options:["A. Hidrocacbon","B. Axit","C. Ancol","D. Muối"],a:"C. Ancol",explain:"Có nhóm –OH gắn với C."},
{q:"Ethanol tan vô hạn trong nước là do",options:["A. Có mạch carbon dài","B. Có nhóm hydroxyl tạo liên kết hydrogen","C. Có liên kết đôi","D. Có nhóm carboxyl"],a:"B. Có nhóm hydroxyl tạo liên kết hydrogen",explain:"–OH tạo liên kết hydrogen với nước."},
{q:"Ethanoic acid là axit yếu vì",options:["A. Không phân li","B. Phân li không hoàn toàn trong nước","C. Không có H","D. Không tan trong nước"],a:"B. Phân li không hoàn toàn trong nước",explain:"Axit hữu cơ yếu."},
{q:"Ethanol phản ứng được với sodium nhưng ethane thì không vì",options:["A. Ethanol nhẹ hơn","B. Ethanol có nhóm –OH","C. Ethane có liên kết đôi","D. Ethane tan trong nước"],a:"B. Ethanol có nhóm –OH",explain:"H trong –OH linh động."},
{q:"Ethanoic acid có tính axit mạnh hơn ethanol vì",options:["A. Có nhiều C hơn","B. Có nhóm –COOH","C. Có liên kết đơn","D. Có mạch ngắn"],a:"B. Có nhóm –COOH",explain:"–COOH dễ phân li H+."},
{q:"Phản ứng đặc trưng của ethanol là",options:["A. Trùng hợp","B. Trung hòa","C. Thế kim loại","D. Trao đổi ion"],a:"C. Thế kim loại",explain:"Alcohol phản ứng với Na."},
{q:"Ethanoic acid phản ứng với sodium carbonate giải phóng khí",options:["A. Hydrogen","B. Oxygen","C. Carbon dioxide","D. Nitrogen"],a:"C. Carbon dioxide",explain:"Axit + carbonate → CO2."},
{q:"Trong phản ứng ester hóa, ethanol đóng vai trò là",options:["A. Axit","B. Bazơ","C. Alcohol","D. Muối"],a:"C. Alcohol",explain:"Ester tạo từ alcohol + acid."},
{q:"Ethanol có nhiệt độ sôi thấp hơn ethanoic acid vì",options:["A. Nhẹ hơn","B. Ít liên kết hydrogen hơn","C. Tan kém hơn","D. Có mạch dài hơn"],a:"B. Ít liên kết hydrogen hơn",explain:"Ethanoic acid tạo dimer."},
{q:"Ethanoic acid có thể làm quỳ tím hóa đỏ vì",options:["A. Tan tốt","B. Có H+ trong dung dịch","C. Có mùi chua","D. Bay hơi"],a:"B. Có H+ trong dung dịch",explain:"Tính axit."},
{q:"Ethanol không làm đổi màu quỳ tím vì",options:["A. Không tan","B. Không phân li ion","C. Không có H","D. Không mùi"],a:"B. Không phân li ion",explain:"Alcohol trung tính."},
{q:"Phản ứng giữa ethanol và ethanoic acid là phản ứng",options:["A. Trung hòa","B. Oxi hóa – khử","C. Ester hóa","D. Thế"],a:"C. Ester hóa",explain:"Tạo ethyl ethanoate."},
{q:"Ethanoic acid ăn mòn kim loại mạnh hơn ethanol vì",options:["A. Nặng hơn","B. Có tính axit","C. Tan kém","D. Có mùi"],a:"B. Có tính axit",explain:"Axit phản ứng với kim loại."},
{q:"Ethanol được dùng làm nhiên liệu sinh học vì",options:["A. Dễ bay hơi","B. Cháy tỏa nhiệt","C. Tan trong nước","D. Không màu"],a:"B. Cháy tỏa nhiệt",explain:"Giải phóng năng lượng."},
{q:"Ethanoic acid tồn tại dạng dimer trong pha lỏng do",options:["A. Liên kết ion","B. Liên kết hydrogen","C. Liên kết kim loại","D. Liên kết đôi"],a:"B. Liên kết hydrogen",explain:"Hai phân tử liên kết với nhau."},
// ===== VẬN DỤNG – TÍNH TOÁN (15 câu) =====
{q:"Đốt cháy hoàn toàn 4,6 g C2H5OH. Khối lượng CO2 thu được là",options:["A. 4,4 g","B. 8,8 g","C. 13,2 g","D. 17,6 g"],a:"C. 13,2 g",explain:"n=0,1 mol → 2 mol CO2."},
{q:"Số mol Ancol etylic có trong 9,2 g là",options:["A. 0,1","B. 0,2","C. 0,3","D. 0,4"],a:"B. 0,2",explain:"n=9,2/46."},
{q:"Thể tích CO2 (đktc) tạo ra khi đốt 0,1 mol C2H5OH là",options:["A. 2,24","B. 4,48","C. 6,72","D. 8,96"],a:"B. 4,48",explain:"1 mol tạo 2 mol CO2."},
{q:"Hòa tan 4 g NaOH vào 96 g dung dịch axit axetic. Nồng độ % NaOH là",options:["A. 2%","B. 4%","C. 6%","D. 8%"],a:"B. 4%",explain:"C%=4/100."},
{q:"Khối lượng mol của axit axetic là",options:["A. 46","B. 58","C. 60","D. 62"],a:"B. 60",explain:"CH3COOH = 60."},
{q:"Tỉ khối của Ancol etylic so với H2 là",options:["A. 23","B. 46","C. 30","D. 15"],a:"A. 23",explain:"d=46/2."},
{q:"Đốt cháy 2,3 g Ancol etylic, thể tích CO2 (đktc) là",options:["A. 1,12","B. 2,24","C. 3,36","D. 4,48"],a:"B. 2,24",explain:"n=0,05 mol → 0,1 mol CO2."},
{q:"Dung dịch giấm có 5% axit axetic. Khối lượng axit trong 200 g giấm là",options:["A. 5 g","B. 10 g","C. 15 g","D. 20 g"],a:"B. 10 g",explain:"5% của 200 g."},
{q:"Hòa tan 6 g axit axetic vào nước được 300 g dung dịch. Nồng độ % là",options:["A. 1%","B. 2%","C. 3%","D. 4%"],a:"B. 2%",explain:"C%=6/300."},
{q:"Số mol axit axetic trong 12 g là",options:["A. 0,1","B. 0,2","C. 0,3","D. 0,4"],a:"B. 0,2",explain:"n=12/60."},
{q:"Thể tích H2 (đktc) thu được khi cho 0,1 mol axit axetic phản ứng với Na dư là",options:["A. 1,12","B. 2,24","C. 3,36","D. 4,48"],a:"A. 1,12",explain:"2 mol axit → 1 mol H2."},
{q:"Đốt cháy hoàn toàn 0,2 mol C2H5OH cần số mol O2 là",options:["A. 0,4","B. 0,6","C. 0,8","D. 1,2"],a:"D. 1,2",explain:"C2H5OH + 3O2."},
{q:"Khối lượng C có trong 9,2 g C2H5OH là",options:["A. 2,4","B. 3,6","C. 4,8","D. 6,0"],a:"C. 4,8",explain:"mC=24/46×9,2."},
{q:"Dung dịch chứa 30 g C2H5OH trong 150 g dung dịch. Nồng độ % là",options:["A. 10%","B. 15%","C. 20%","D. 25%"],a:"C. 20%",explain:"C%=30/150."},
{q:"Hợp chất hữu cơ X có CTĐG là CH2O và M = 60. X là",options:["A. C2H4O2","B. CH3COOH","C. C3H6O3","D. HCHO"],a:"B. CH3COOH",explain:"(CH2O)2 = 60."},
{q:"Khối lượng mol của ethanol là",options:["A. 44","B. 46","C. 60","D. 62"],a:"B. 46",explain:"C2H6O = 46."},
{q:"Số mol ethanol trong 9,2 g là",options:["A. 0,1","B. 0,15","C. 0,2","D. 0,25"],a:"C. 0,2",explain:"n = 9,2 / 46."},
{q:"Đốt cháy hoàn toàn 1 mol ethanol thu được số mol CO2 là",options:["A. 1","B. 2","C. 3","D. 4"],a:"B. 2",explain:"C2H5OH → 2CO2."},
{q:"Khối lượng ethanoic acid có trong 200 g dung dịch 5% là",options:["A. 5 g","B. 8 g","C. 10 g","D. 15 g"],a:"C. 10 g",explain:"5% của 200 g."},
{q:"Số mol ethanoic acid trong 12 g là",options:["A. 0,1","B. 0,15","C. 0,2","D. 0,25"],a:"A. 0,1",explain:"M = 60."},
{q:"Khối lượng sodium phản ứng vừa đủ với 0,1 mol ethanol là",options:["A. 2,3 g","B. 4,6 g","C. 6,9 g","D. 9,2 g"],a:"A. 2,3 g",explain:"Na : ethanol = 1 : 1."},
{q:"Thể tích CO2 (đktc) thu được khi cho 0,2 mol ethanoic acid phản ứng với Na2CO3 là",options:["A. 2,24 l","B. 3,36 l","C. 4,48 l","D. 6,72 l"],a:"C. 4,48 l",explain:"1 mol acid → 1 mol CO2."},
{q:"Khối lượng CO2 sinh ra khi đốt cháy 4,6 g ethanol là",options:["A. 4,4 g","B. 6,6 g","C. 8,8 g","D. 13,2 g"],a:"C. 8,8 g",explain:"0,1 mol → 0,2 mol CO2."},
{q:"Khối lượng ethyl ethanoate thu được từ 0,1 mol ethanol (hiệu suất 100%) là",options:["A. 8,8 g","B. 9,0 g","C. 10,4 g","D. 11,6 g"],a:"C. 10,4 g",explain:"M = 104."},
{q:"Số mol hydrogen sinh ra khi cho 0,2 mol ethanol phản ứng với sodium là",options:["A. 0,05","B. 0,1","C. 0,2","D. 0,4"],a:"B. 0,1",explain:"2 ethanol → 1 H2."},
{q:"Khối lượng carbon trong 23 g ethanol là",options:["A. 6 g","B. 9 g","C. 12 g","D. 18 g"],a:"B. 9 g",explain:"24/46 × 23."},
{q:"Khối lượng ethanoic acid cần dùng để trung hòa 0,1 mol NaOH là",options:["A. 4 g","B. 5 g","C. 6 g","D. 8 g"],a:"C. 6 g",explain:"1 : 1, M = 60."},
{q:"Thể tích oxygen (đktc) cần để đốt cháy hoàn toàn 0,1 mol ethanol là",options:["A. 3,36 l","B. 4,48 l","C. 5,6 l","D. 6,72 l"],a:"D. 6,72 l",explain:"3 mol O2 cho 1 mol ethanol."},
{q:"Khối lượng sodium ethanoate tạo thành từ 0,1 mol ethanoic acid là",options:["A. 6,8 g","B. 7,4 g","C. 8,2 g","D. 9,6 g"],a:"B. 7,4 g",explain:"CH3COONa = 82."},
{q:"Dung dịch ethanol 20% có khối lượng 250 g thì khối lượng ethanol là",options:["A. 25 g","B. 40 g","C. 50 g","D. 60 g"],a:"C. 50 g",explain:"20% của 250 g."}
];

// Chuyên đề 4: LIPIT. CARBOHYDRATE. PROTEIN. POLYMER
const questions_hoa_topic4 = [
// ===== NHẬN BIẾT (21 câu) =====
{q:"Chất nào sau đây thuộc loại lipit?",options:["A. Tinh bột","B. Protein","C. Chất béo","D. Xenlulozơ"],a:"C. Chất béo",explain:"Chất béo là lipit."},
{q:"Gluxit còn được gọi là",options:["A. Chất đạm","B. Chất béo","C. Cacbohidrat","D. Axit hữu cơ"],a:"C. Cacbohidrat",explain:"Gluxit là cacbohidrat."},
{q:"Tinh bột thuộc loại",options:["A. Lipit","B. Protein","C. Polime","D. Gluxit"],a:"D. Gluxit",explain:"Tinh bột là gluxit."},
{q:"Protein được cấu tạo từ các đơn phân là",options:["A. Glucozơ","B. Axit amin","C. Axit béo","D. Etilen"],a:"B. Axit amin",explain:"Protein gồm các axit amin."},
{q:"Chất béo là este của",options:["A. Axit axetic","B. Glixerol và axit béo","C. Metanol","D. Etanol"],a:"B. Glixerol và axit béo",explain:"Chất béo là trieste."},
{q:"Glucozơ có công thức hóa học là",options:["A. C6H12O6","B. C12H22O11","C. C6H10O5","D. CH2O"],a:"A. C6H12O6",explain:"Glucozơ là C6H12O6."},
{q:"Saccarozơ có công thức hóa học là",options:["A. C6H12O6","B. C12H22O11","C. C6H10O5","D. C2H4"],a:"B. C12H22O11",explain:"Saccarozơ là đường đôi."},
{q:"Tinh bột và xenlulozơ đều có công thức chung là",options:["A. C6H12O6","B. C12H22O11","C. (C6H10O5)n","D. CH2O"],a:"C. (C6H10O5)n",explain:"Đều là polisaccarit."},
{q:"Polime là chất có",options:["A. Phân tử khối nhỏ","B. Cấu trúc đơn giản","C. Phân tử khối rất lớn","D. Dễ bay hơi"],a:"C. Phân tử khối rất lớn",explain:"Polime có M lớn."},
{q:"Polietilen (PE) được điều chế từ monome",options:["A. Metan","B. Etilen","C. Axetilen","D. Benzen"],a:"B. Etilen",explain:"PE trùng hợp từ etilen."},
{q:"Chất nào sau đây là polime thiên nhiên?",options:["A. PVC","B. PE","C. Cao su thiên nhiên","D. Nilon-6,6"],a:"C. Cao su thiên nhiên",explain:"Cao su thiên nhiên có sẵn trong tự nhiên."},
{q:"Protein có vai trò chủ yếu là",options:["A. Cung cấp năng lượng","B. Dự trữ","C. Xây dựng cơ thể","D. Cách nhiệt"],a:"C. Xây dựng cơ thể",explain:"Protein xây dựng tế bào."},
{q:"Lipit có vai trò chính là",options:["A. Xúc tác","B. Cấu tạo xương","C. Dự trữ năng lượng","D. Truyền thông tin"],a:"C. Dự trữ năng lượng",explain:"Lipit dự trữ năng lượng."},
{q:"Tinh bột có nhiều trong",options:["A. Thịt","B. Trứng","C. Gạo, khoai","D. Sữa"],a:"C. Gạo, khoai",explain:"Tinh bột có trong thực vật."},
{q:"Protein làm quỳ tím",options:["A. Hóa đỏ","B. Hóa xanh","C. Không đổi màu","D. Mất màu"],a:"C. Không đổi màu",explain:"Protein gần trung tính."},
{q:"Chất nào sau đây là gluxit?",options:["A. Dầu ăn","B. Mỡ","C. Đường mía","D. Cao su"],a:"C. Đường mía",explain:"Đường mía là saccarozơ."},
{q:"Nilon-6,6 thuộc loại",options:["A. Polime thiên nhiên","B. Polime tổng hợp","C. Gluxit","D. Lipit"],a:"B. Polime tổng hợp",explain:"Nilon là polime tổng hợp."},
{q:"Polime thường không có tính chất",options:["A. Bền","B. Nhẹ","C. Dễ bay hơi","D. Cách điện"],a:"C. Dễ bay hơi",explain:"Polime không bay hơi."},
{q:"Glucozơ tan tốt trong",options:["A. Dầu","B. Xăng","C. Nước","D. Benzen"],a:"C. Nước",explain:"Glucozơ tan trong nước."},
{q:"Chất béo thường không tan trong",options:["A. Benzen","B. Nước","C. Xăng","D. Dầu"],a:"B. Nước",explain:"Chất béo kị nước."},
{q:"Protein bị đông tụ khi",options:["A. Làm lạnh","B. Đun nóng","C. Để yên","D. Pha loãng"],a:"B. Đun nóng",explain:"Protein bị biến tính khi đun."},
{q:"Chất nào sau đây thuộc nhóm lipit?",options:["A. Starch","B. Protein","C. Fat","D. Cellulose"],a:"C. Fat",explain:"Fat (chất béo) là lipit."},
{q:"Gluxit còn được gọi là",options:["A. Lipid","B. Protein","C. Carbohydrate","D. Polymer"],a:"C. Carbohydrate",explain:"Gluxit là carbohydrate."},
{q:"Monomer cấu tạo nên protein là",options:["A. Glucose","B. Amino acid","C. Fatty acid","D. Glycerol"],a:"B. Amino acid",explain:"Protein gồm các amino acid."},
{q:"Glucose có công thức phân tử là",options:["A. C6H12O6","B. C12H22O11","C. C6H10O5","D. CH2O"],a:"A. C6H12O6",explain:"Glucose là C6H12O6."},
{q:"Sucrose thuộc loại",options:["A. Monosaccharide","B. Disaccharide","C. Polysaccharide","D. Lipid"],a:"B. Disaccharide",explain:"Sucrose là đường đôi."},
{q:"Starch thuộc nhóm",options:["A. Lipid","B. Protein","C. Polysaccharide","D. Alcohol"],a:"C. Polysaccharide",explain:"Tinh bột là polysaccharide."},
{q:"Cellulose là polymer",options:["A. Synthetic","B. Natural","C. Inorganic","D. Rubber"],a:"B. Natural",explain:"Cellulose là polymer thiên nhiên."},
{q:"Polyethylene được tạo từ monomer",options:["A. Methane","B. Ethene","C. Propene","D. Benzene"],a:"B. Ethene",explain:"PE trùng hợp từ ethene."},
{q:"Protein có vai trò chính là",options:["A. Dự trữ năng lượng","B. Cách nhiệt","C. Xây dựng cơ thể","D. Dẫn điện"],a:"C. Xây dựng cơ thể",explain:"Protein cấu tạo tế bào."},
{q:"Lipit giàu năng lượng vì",options:["A. Tan trong nước","B. Giàu liên kết C–H","C. Có nhóm –OH","D. Phân li mạnh"],a:"B. Giàu liên kết C–H",explain:"Liên kết C–H giải phóng nhiều năng lượng."},
{q:"Nylon-6,6 thuộc loại",options:["A. Natural polymer","B. Synthetic polymer","C. Lipid","D. Protein"],a:"B. Synthetic polymer",explain:"Nylon là polymer tổng hợp."},
{q:"Glucose tan tốt trong",options:["A. Oil","B. Water","C. Benzene","D. Gasoline"],a:"B. Water",explain:"Glucose tan tốt trong nước."},
{q:"Fat thường không tan trong",options:["A. Ether","B. Benzene","C. Water","D. Oil"],a:"C. Water",explain:"Chất béo kị nước."},
{q:"Protein bị đông tụ khi",options:["A. Làm lạnh","B. Đun nóng","C. Pha loãng","D. Để yên"],a:"B. Đun nóng",explain:"Protein bị biến tính."},
{q:"Monomer của starch là",options:["A. Fructose","B. Glucose","C. Sucrose","D. Maltose"],a:"B. Glucose",explain:"Tinh bột tạo từ glucose."},
{q:"Enzyme thuộc nhóm",options:["A. Lipid","B. Protein","C. Gluxit","D. Polymer"],a:"B. Protein",explain:"Enzyme là protein."},
{q:"Polymer có đặc điểm",options:["A. M nhỏ","B. Dễ bay hơi","C. M rất lớn","D. Tan hoàn toàn"],a:"C. M rất lớn",explain:"Polymer có phân tử khối lớn."},
{q:"Starch có nhiều trong",options:["A. Meat","B. Egg","C. Rice","D. Milk"],a:"C. Rice",explain:"Tinh bột có nhiều trong gạo."},
{q:"Cellulose không tiêu hóa được vì",options:["A. Không tan","B. Không có enzyme phù hợp","C. Có mạch dài","D. Không màu"],a:"B. Không có enzyme phù hợp",explain:"Người không có cellulase."},
{q:"Natural rubber là",options:["A. Lipid","B. Protein","C. Natural polymer","D. Synthetic polymer"],a:"C. Natural polymer",explain:"Cao su thiên nhiên là polymer."},
{q:"Polymer thường dùng làm plastic vì",options:["A. Bay hơi","B. Dễ tạo hình","C. Tan trong nước","D. Dẫn điện"],a:"B. Dễ tạo hình",explain:"Dễ gia công."},
{q:"Protein làm quỳ tím",options:["A. Hóa đỏ","B. Hóa xanh","C. Không đổi màu","D. Mất màu"],a:"C. Không đổi màu",explain:"Protein gần trung tính."},
// ===== THÔNG HIỂU (14 câu) =====
{q:"Tinh bột và xenlulozơ có tính chất khác nhau do",options:["A. Khối lượng khác","B. Cấu trúc khác","C. Màu khác","D. Trạng thái khác"],a:"B. Cấu trúc khác",explain:"Liên kết khác nhau."},
{q:"Chất béo không tan trong nước vì",options:["A. Nhẹ","B. Không phân cực","C. Nặng","D. Dễ bay hơi"],a:"B. Không phân cực",explain:"Nước là dung môi phân cực."},
{q:"Protein có nhiều trong",options:["A. Gạo","B. Khoai","C. Thịt cá","D. Dầu ăn"],a:"C. Thịt cá",explain:"Protein có nhiều trong động vật."},
{q:"Polietilen có tính chất cách điện vì",options:["A. Có màu trắng","B. Không phân cực","C. Không tan","D. Nhẹ"],a:"B. Không phân cực",explain:"Không có ion tự do."},
{q:"Glucozơ cung cấp năng lượng vì",options:["A. Dễ tan","B. Bị oxi hóa trong cơ thể","C. Có màu","D. Có mùi"],a:"B. Bị oxi hóa trong cơ thể",explain:"Giải phóng năng lượng."},
{q:"Polime tổng hợp được tạo ra bằng phản ứng",options:["A. Thế","B. Trùng hợp","C. Trao đổi","D. Trung hòa"],a:"B. Trùng hợp",explain:"Monome liên kết tạo polime."},
{q:"Protein bị biến tính khi",options:["A. Làm lạnh","B. Đun nóng hoặc thay đổi pH","C. Để yên","D. Bay hơi"],a:"B. Đun nóng hoặc thay đổi pH",explain:"Cấu trúc protein bị phá vỡ."},
{q:"Tinh bột không tan trong nước lạnh vì",options:["A. Không phân cực","B. Phân tử lớn","C. Không màu","D. Không mùi"],a:"B. Phân tử lớn",explain:"Khó phân tán trong nước."},
{q:"Polime thường bền trong môi trường vì",options:["A. Dễ bay hơi","B. Liên kết bền","C. Tan tốt","D. Nhẹ"],a:"B. Liên kết bền",explain:"Liên kết mạch dài."},
{q:"Lipit cung cấp nhiều năng lượng hơn gluxit vì",options:["A. Nặng hơn","B. Có nhiều liên kết C–H","C. Tan kém","D. Không phân cực"],a:"B. Có nhiều liên kết C–H",explain:"Giải phóng nhiều năng lượng."},
{q:"Xenlulozơ không dùng làm thức ăn cho người vì",options:["A. Không tan","B. Không tiêu hóa được","C. Không mùi","D. Không màu"],a:"B. Không tiêu hóa được",explain:"Người không có enzim phù hợp."},
{q:"Polime dùng làm chất dẻo vì",options:["A. Dễ cháy","B. Dễ tạo hình","C. Tan trong nước","D. Bay hơi"],a:"B. Dễ tạo hình",explain:"Có thể gia công."},
{q:"Protein có vai trò xúc tác vì",options:["A. Tan tốt","B. Một số là enzim","C. Có mùi","D. Có màu"],a:"B. Một số là enzim",explain:"Enzim là protein."},
{q:"Chất béo bị ôi thiu do",options:["A. Bay hơi","B. Oxi hóa","C. Tan","D. Nóng chảy"],a:"B. Oxi hóa",explain:"Axit béo bị oxi hóa."},
{q:"Starch và cellulose khác nhau chủ yếu do",options:["A. Công thức","B. Kiểu liên kết","C. Màu sắc","D. Trạng thái"],a:"B. Kiểu liên kết",explain:"Liên kết α và β khác nhau."},
{q:"Protein bị biến tính khi thay đổi pH vì",options:["A. Đứt peptide","B. Phá cấu trúc không gian","C. Tan tốt","D. Bay hơi"],a:"B. Phá cấu trúc không gian",explain:"Mất cấu trúc bậc cao."},
{q:"Lipit không tan trong nước vì",options:["A. Nặng","B. Không phân cực","C. M lớn","D. Không màu"],a:"B. Không phân cực",explain:"Nước là dung môi phân cực."},
{q:"Glucose cung cấp năng lượng vì",options:["A. Tan tốt","B. Bị oxi hóa trong tế bào","C. Có vị ngọt","D. Có –OH"],a:"B. Bị oxi hóa trong tế bào",explain:"Giải phóng năng lượng."},
{q:"Polyethylene cách điện tốt vì",options:["A. Nhẹ","B. Không có ion tự do","C. Tan kém","D. Dẻo"],a:"B. Không có ion tự do",explain:"Không dẫn điện."},
{q:"Protein có vai trò xúc tác vì",options:["A. Tan tốt","B. Là enzyme","C. Có mạch dài","D. Giàu C"],a:"B. Là enzyme",explain:"Enzyme là protein."},
{q:"Fat bị ôi thiu do",options:["A. Thủy phân","B. Oxi hóa","C. Trùng hợp","D. Đông tụ"],a:"B. Oxi hóa",explain:"Axit béo bị oxi hóa."},
{q:"Polymer bền trong môi trường vì",options:["A. Bay hơi","B. Liên kết bền","C. Tan tốt","D. Nhẹ"],a:"B. Liên kết bền",explain:"Mạch dài, bền."},
{q:"Cellulose dùng làm giấy vì",options:["A. Tan tốt","B. Cấu trúc sợi","C. Ngọt","D. Dễ cháy"],a:"B. Cấu trúc sợi",explain:"Sợi bền."},
{q:"Gluxit đơn giản nhất là",options:["A. Disaccharide","B. Monosaccharide","C. Polysaccharide","D. Polymer"],a:"B. Monosaccharide",explain:"Đường đơn."},
{q:"Protein không là nguồn năng lượng chính vì",options:["A. Tan kém","B. Vai trò cấu trúc","C. Ít C","D. Không oxi hóa"],a:"B. Vai trò cấu trúc",explain:"Chủ yếu xây dựng cơ thể."},
{q:"Polymer tổng hợp tạo bởi phản ứng",options:["A. Thế","B. Trùng hợp","C. Trung hòa","D. Phân hủy"],a:"B. Trùng hợp",explain:"Monomer liên kết."},
{q:"Lipit cho nhiều năng lượng hơn gluxit vì",options:["A. Nặng","B. Giàu C–H","C. Tan kém","D. Có O"],a:"B. Giàu C–H",explain:"Giải phóng nhiều năng lượng."},
{q:"Starch không tan trong nước lạnh vì",options:["A. Không phân cực","B. Phân tử lớn","C. Không màu","D. Không mùi"],a:"B. Phân tử lớn",explain:"Khó phân tán."},
{q:"Cellulose và starch giống nhau vì",options:["A. Đều tan","B. Cùng đơn phân glucose","C. Cùng cấu trúc","D. Cùng mùi"],a:"B. Cùng đơn phân glucose",explain:"Đều từ glucose."},
// ===== VẬN DỤNG (15 câu) =====
{q:"Khối lượng mol của glucozơ là",options:["A. 160","B. 170","C. 180","D. 190"],a:"C. 180",explain:"C6H12O6 = 180."},
{q:"Số mol glucozơ trong 18 g là",options:["A. 0,05","B. 0,1","C. 0,2","D. 0,3"],a:"B. 0,1",explain:"n=18/180."},
{q:"Khối lượng glucozơ có trong 200 g dung dịch 10% là",options:["A. 10 g","B. 15 g","C. 20 g","D. 25 g"],a:"C. 20 g",explain:"10% của 200 g."},
{q:"Một polime được tạo từ 1000 monome etilen. Công thức polime là",options:["A. C2H4","B. (C2H4)1000","C. C2000H4000","D. (C2H4)n"],a:"B. (C2H4)1000",explain:"PE từ etilen."},
{q:"Khối lượng mol của một mắt xích tinh bột là",options:["A. 162","B. 180","C. 150","D. 170"],a:"A. 162",explain:"C6H10O5."},
{q:"Một chất béo chứa 75% C. Chất đó thuộc loại",options:["A. Gluxit","B. Lipit","C. Protein","D. Polime"],a:"B. Lipit",explain:"Lipit giàu C."},
{q:"Tỉ khối của glucozơ so với H2 là",options:["A. 60","B. 90","C. 180","D. 30"],a:"B. 90",explain:"d=180/2."},
{q:"Khối lượng C có trong 18 g glucozơ là",options:["A. 6 g","B. 7,2 g","C. 8 g","D. 9 g"],a:"B. 7,2 g",explain:"72/180×18."},
{q:"Một polime có khối lượng mol 28000 và monome có M = 28. Số mắt xích là",options:["A. 500","B. 800","C. 1000","D. 1200"],a:"C. 1000",explain:"28000/28."},
{q:"Khối lượng tinh bột thu được từ 180 g glucozơ (hiệu suất 100%) là",options:["A. 162 g","B. 170 g","C. 180 g","D. 200 g"],a:"A. 162 g",explain:"Mất H2O khi trùng ngưng."},
{q:"Một dung dịch protein 5% có khối lượng 500 g. Khối lượng protein là",options:["A. 15 g","B. 20 g","C. 25 g","D. 30 g"],a:"C. 25 g",explain:"5% của 500 g."},
{q:"Polime X có CT (C3H6)n. Monome là",options:["A. Propen","B. Propan","C. Axetilen","D. Etilen"],a:"A. Propen",explain:"C3H6 là propen."},
{q:"Khối lượng mol của saccarozơ là",options:["A. 180","B. 324","C. 342","D. 360"],a:"C. 342",explain:"C12H22O11."},
{q:"Khối lượng gluxit có trong 300 g gạo chứa 70% tinh bột là",options:["A. 180 g","B. 200 g","C. 210 g","D. 240 g"],a:"C. 210 g",explain:"70% của 300 g."},
{q:"Hợp chất hữu cơ có CTĐG là CH2O và là polime thiên nhiên. Chất đó là",options:["A. Glucozơ","B. Xenlulozơ","C. Saccarozơ","D. Tinh bột"],a:"B. Xenlulozơ",explain:"Polime thiên nhiên từ glucozơ."},
{q:"Khối lượng mol của glucose là",options:["A. 162","B. 180","C. 198","D. 150"],a:"B. 180",explain:"C6H12O6."},
{q:"Số mol glucose trong 18 g là",options:["A. 0,05","B. 0,1","C. 0,2","D. 0,3"],a:"B. 0,1",explain:"18/180."},
{q:"Khối lượng glucose trong 200 g dung dịch 10% là",options:["A. 10 g","B. 15 g","C. 20 g","D. 25 g"],a:"C. 20 g",explain:"10% × 200."},
{q:"Khối lượng mol mắt xích cellulose là",options:["A. 162","B. 180","C. 150","D. 170"],a:"A. 162",explain:"C6H10O5."},
{q:"Tỉ khối hơi của glucose so với H2 là",options:["A. 45","B. 60","C. 90","D. 180"],a:"C. 90",explain:"180/2."},
{q:"Khối lượng carbon trong 18 g glucose là",options:["A. 6 g","B. 7,2 g","C. 8 g","D. 9 g"],a:"B. 7,2 g",explain:"72/180 × 18."},
{q:"Dung dịch protein 5% khối lượng 400 g chứa protein là",options:["A. 10 g","B. 15 g","C. 20 g","D. 25 g"],a:"C. 20 g",explain:"5% × 400."},
{q:"Polymer X có CT (C2H4)n, monomer là",options:["A. Ethane","B. Ethene","C. Propene","D. Methane"],a:"B. Ethene",explain:"PE từ ethene."},
{q:"Polymer có M = 28000, monomer M = 28, số mắt xích là",options:["A. 500","B. 800","C. 1000","D. 1200"],a:"C. 1000",explain:"28000/28."},
{q:"Khối lượng starch thu từ 180 g glucose (100%) là",options:["A. 162 g","B. 170 g","C. 180 g","D. 200 g"],a:"A. 162 g",explain:"Mất nước khi trùng ngưng."},
{q:"Chất chứa 75% carbon thuộc nhóm",options:["A. Protein","B. Lipid","C. Gluxit","D. Polymer"],a:"B. Lipid",explain:"Lipid giàu carbon."},
{q:"Khối lượng sucrose trong 500 g dung dịch 8% là",options:["A. 30 g","B. 35 g","C. 40 g","D. 45 g"],a:"C. 40 g",explain:"8% × 500."},
{q:"Khối lượng mol của sucrose là",options:["A. 180","B. 324","C. 342","D. 360"],a:"C. 342",explain:"C12H22O11."},
{q:"Khối lượng glucose cần tạo 162 g starch là",options:["A. 162 g","B. 170 g","C. 180 g","D. 200 g"],a:"C. 180 g",explain:"Trùng ngưng mất nước."},
{q:"Hợp chất có CTĐG CH2O và là polymer thiên nhiên là",options:["A. Glucose","B. Cellulose","C. Sucrose","D. Starch"],a:"B. Cellulose",explain:"Polymer thiên nhiên."},
];

// Chuyên đề 5: TỔNG HỢP
const questions_hoa_topic5 = [
// ===== NHẬN BIẾT (21 câu) =====
{q:"Chất nào sau đây là kim loại?",options:["A. S","B. O","C. Fe","D. Cl"],a:"C. Fe",explain:"Fe là kim loại."},
{q:"Chất nào sau đây là phi kim?",options:["A. Na","B. Al","C. Cl","D. Fe"],a:"C. Cl",explain:"Cl là phi kim."},
{q:"Công thức hóa học của axit axetic là",options:["A. CH3OH","B. C2H5OH","C. CH3COOH","D. HCOOH"],a:"C. CH3COOH",explain:"Axit axetic là CH3COOH."},
{q:"Chất nào thuộc hidrocacbon?",options:["A. C2H6","B. C2H5OH","C. CH3COOH","D. C6H12O6"],a:"A. C2H6",explain:"Hidrocacbon chỉ chứa C và H."},
{q:"Tinh bột thuộc loại hợp chất nào?",options:["A. Lipit","B. Protein","C. Gluxit","D. Axit"],a:"C. Gluxit",explain:"Tinh bột là gluxit."},
{q:"Ancôl etylic có nhóm chức là",options:["A. –COOH","B. –CHO","C. –OH","D. –COO–"],a:"C. –OH",explain:"Ancôl có nhóm –OH."},
{q:"Axit làm quỳ tím chuyển sang màu",options:["A. Xanh","B. Đỏ","C. Không đổi","D. Vàng"],a:"B. Đỏ",explain:"Axit làm quỳ tím hóa đỏ."},
{q:"Bazơ làm quỳ tím chuyển sang màu",options:["A. Đỏ","B. Vàng","C. Không đổi","D. Xanh"],a:"D. Xanh",explain:"Bazơ làm quỳ tím hóa xanh."},
{q:"Chất nào là polime tổng hợp?",options:["A. Tinh bột","B. Xenlulozơ","C. PE","D. Protein"],a:"C. PE",explain:"PE là polime tổng hợp."},
{q:"Kim loại tác dụng với axit giải phóng khí",options:["A. CO2","B. O2","C. H2","D. N2"],a:"C. H2",explain:"Kim loại + axit → H2."},
{q:"Chất béo thuộc loại",options:["A. Gluxit","B. Lipit","C. Protein","D. Polime"],a:"B. Lipit",explain:"Chất béo là lipit."},
{q:"Glucozơ có công thức phân tử là",options:["A. C6H12O6","B. C12H22O11","C. C6H10O5","D. CH2O"],a:"A. C6H12O6",explain:"Glucozơ là C6H12O6."},
{q:"Phản ứng trung hòa xảy ra giữa",options:["A. Axit và muối","B. Axit và bazơ","C. Bazơ và kim loại","D. Muối và muối"],a:"B. Axit và bazơ",explain:"Trung hòa tạo muối và nước."},
{q:"Chất nào dẫn điện tốt nhất?",options:["A. Nhựa","B. Cao su","C. Đồng","D. Lưu huỳnh"],a:"C. Đồng",explain:"Kim loại dẫn điện tốt."},
{q:"Protein được cấu tạo từ",options:["A. Glucozơ","B. Axit béo","C. Axit amin","D. Etilen"],a:"C. Axit amin",explain:"Protein gồm axit amin."},
{q:"Axit axetic có trong",options:["A. Rượu","B. Giấm","C. Nước","D. Dầu"],a:"B. Giấm",explain:"Giấm chứa axit axetic."},
{q:"Polime có đặc điểm là",options:["A. Phân tử nhỏ","B. Dễ bay hơi","C. Phân tử khối lớn","D. Tan trong nước"],a:"C. Phân tử khối lớn",explain:"Polime có M lớn."},
{q:"Chất nào sau đây là oxit bazơ?",options:["A. CO2","B. SO2","C. CaO","D. P2O5"],a:"C. CaO",explain:"CaO là oxit bazơ."},
{q:"Chất nào là oxit axit?",options:["A. Na2O","B. CaO","C. SO2","D. MgO"],a:"C. SO2",explain:"SO2 là oxit axit."},
{q:"Dung dịch NaOH có tính",options:["A. Axit","B. Trung tính","C. Bazơ","D. Muối"],a:"C. Bazơ",explain:"NaOH là bazơ mạnh."},
{q:"Chất nào không tan trong nước?",options:["A. NaCl","B. Glucozơ","C. C2H5OH","D. Chất béo"],a:"D. Chất béo",explain:"Chất béo không tan trong nước."},
{q:"Chất nào sau đây là đơn chất?",options:["A. Sodium chloride","B. Oxygen","C. Water","D. Carbon dioxide"],a:"B. Oxygen",explain:"Oxygen là đơn chất."},
{q:"Hợp chất được tạo bởi hai nguyên tố là",options:["A. Oxygen","B. Iron","C. Sodium chloride","D. Copper"],a:"C. Sodium chloride",explain:"NaCl gồm Na và Cl."},
{q:"Phản ứng hóa học là quá trình",options:["A. Thay đổi trạng thái","B. Tạo chất mới","C. Tan trong nước","D. Bay hơi"],a:"B. Tạo chất mới",explain:"Có chất mới tạo thành."},
{q:"Kim loại có tính chất chung là",options:["A. Dễ vỡ","B. Dẫn điện","C. Tan trong nước","D. Bay hơi"],a:"B. Dẫn điện",explain:"Kim loại dẫn điện tốt."},
{q:"Phi kim thường có tính chất",options:["A. Dẫn điện","B. Dẫn nhiệt","C. Không dẫn điện","D. Ánh kim"],a:"C. Không dẫn điện",explain:"Phi kim cách điện."},
{q:"Hydrogen chloride tan trong nước tạo thành",options:["A. Sodium hydroxide","B. Hydrochloric acid","C. Nitric acid","D. Sulfuric acid"],a:"B. Hydrochloric acid",explain:"HCl + H2O → acid."},
{q:"Carbon dioxide là oxide",options:["A. Basic oxide","B. Acidic oxide","C. Neutral oxide","D. Amphoteric oxide"],a:"B. Acidic oxide",explain:"CO2 là oxide axit."},
{q:"Calcium oxide có tên thông thường là",options:["A. Limestone","B. Quicklime","C. Slaked lime","D. Chalk"],a:"B. Quicklime",explain:"CaO là vôi sống."},
{q:"Alcohol thuộc loại hợp chất",options:["A. Hydrocarbon","B. Organic compound","C. Inorganic compound","D. Salt"],a:"B. Organic compound",explain:"Alcohol là hợp chất hữu cơ."},
{q:"Ethanoic acid thuộc nhóm",options:["A. Alcohol","B. Ester","C. Carboxylic acid","D. Aldehyde"],a:"C. Carboxylic acid",explain:"Có nhóm –COOH."},
{q:"Glucose thuộc loại",options:["A. Lipid","B. Protein","C. Carbohydrate","D. Polymer"],a:"C. Carbohydrate",explain:"Glucose là gluxit."},
{q:"Polyethylene thuộc loại",options:["A. Natural polymer","B. Synthetic polymer","C. Protein","D. Lipid"],a:"B. Synthetic polymer",explain:"PE là polime tổng hợp."},
{q:"Protein được cấu tạo từ",options:["A. Fatty acid","B. Amino acid","C. Glucose","D. Glycerol"],a:"B. Amino acid",explain:"Protein gồm amino acid."},
{q:"Phản ứng trung hòa xảy ra giữa",options:["A. Acid và base","B. Acid và metal","C. Base và salt","D. Metal và water"],a:"A. Acid và base",explain:"Axit + bazơ → muối + nước."},
{q:"Chất làm quỳ tím hóa đỏ là",options:["A. Sodium hydroxide","B. Calcium oxide","C. Hydrochloric acid","D. Sodium chloride"],a:"C. Hydrochloric acid",explain:"Dung dịch axit."},
{q:"Chất làm quỳ tím hóa xanh là",options:["A. Hydrochloric acid","B. Sodium hydroxide","C. Carbon dioxide","D. Ethanol"],a:"B. Sodium hydroxide",explain:"Dung dịch bazơ."},
{q:"Kim loại đứng trước hydrogen trong dãy hoạt động",options:["A. Không phản ứng","B. Phản ứng với acid","C. Không tan","D. Bay hơi"],a:"B. Phản ứng với acid",explain:"Giải phóng H2."},
{q:"Hydrocarbon chỉ chứa",options:["A. C, H","B. C, O","C. C, H, O","D. C, N"],a:"A. C, H",explain:"Chỉ gồm carbon và hydrogen."},
{q:"Ethanol có công thức phân tử",options:["A. C2H4","B. C2H6O","C. CH3COOH","D. C3H8"],a:"B. C2H6O",explain:"Ethanol = C2H5OH."},
{q:"Sodium chloride thuộc loại",options:["A. Acid","B. Base","C. Salt","D. Oxide"],a:"C. Salt",explain:"NaCl là muối."},
{q:"Phản ứng tạo polymer gọi là",options:["A. Substitution","B. Addition","C. Polymerization","D. Neutralization"],a:"C. Polymerization",explain:"Tạo polime."},
{q:"Carbon monoxide là oxide",options:["A. Acidic","B. Basic","C. Neutral","D. Amphoteric"],a:"C. Neutral",explain:"CO là oxide trung tính."},
// ===== THÔNG HIỂU (14 câu) =====
{q:"Kim loại dẫn điện tốt vì",options:["A. Có khối lượng lớn","B. Có electron tự do","C. Có màu sáng","D. Có độ cứng cao"],a:"B. Có electron tự do",explain:"Electron tự do giúp dẫn điện."},
{q:"Axit axetic là axit yếu vì",options:["A. Không tan","B. Phân li không hoàn toàn","C. Không mùi","D. Không màu"],a:"B. Phân li không hoàn toàn",explain:"Axit yếu phân li một phần."},
{q:"Tinh bột không tan trong nước lạnh do",options:["A. Không phân cực","B. Phân tử lớn","C. Không màu","D. Không mùi"],a:"B. Phân tử lớn",explain:"Khó phân tán."},
{q:"Polime dùng làm chất dẻo vì",options:["A. Dễ cháy","B. Dễ tạo hình","C. Tan trong nước","D. Bay hơi"],a:"B. Dễ tạo hình",explain:"Gia công dễ."},
{q:"Chất béo cho nhiều năng lượng vì",options:["A. Nhẹ","B. Nhiều liên kết C–H","C. Tan kém","D. Có O"],a:"B. Nhiều liên kết C–H",explain:"Giải phóng nhiều năng lượng."},
{q:"Glucozơ cung cấp năng lượng cho cơ thể vì",options:["A. Tan tốt","B. Bị oxi hóa","C. Có vị ngọt","D. Có màu"],a:"B. Bị oxi hóa",explain:"Oxi hóa giải phóng năng lượng."},
{q:"Bazơ làm phenolphtalein chuyển màu",options:["A. Không màu","B. Hồng","C. Đỏ","D. Xanh"],a:"B. Hồng",explain:"Bazơ làm phenolphtalein hóa hồng."},
{q:"Kim loại mạnh đẩy kim loại yếu ra khỏi dung dịch muối vì",options:["A. Nặng hơn","B. Hoạt động hóa học mạnh hơn","C. Có màu sáng","D. Dẫn điện tốt"],a:"B. Hoạt động hóa học mạnh hơn",explain:"Dựa vào dãy hoạt động."},
{q:"Protein bị biến tính khi",options:["A. Làm lạnh","B. Đun nóng","C. Để yên","D. Hòa tan"],a:"B. Đun nóng",explain:"Nhiệt phá vỡ cấu trúc."},
{q:"Oxit axit tác dụng với bazơ tạo ra",options:["A. Axit","B. Muối","C. Muối và nước","D. Khí"],a:"C. Muối và nước",explain:"Phản ứng trung hòa."},
{q:"Dung dịch axit làm mất màu phenolphtalein vì",options:["A. Bay hơi","B. Phân li H+","C. Oxi hóa","D. Trung hòa"],a:"B. Phân li H+",explain:"H+ làm mất màu."},
{q:"Polime thiên nhiên có sẵn trong tự nhiên như",options:["A. PE","B. PVC","C. Xenlulozơ","D. Nilon"],a:"C. Xenlulozơ",explain:"Xenlulozơ có sẵn."},
{q:"Chất béo không tan trong nước vì",options:["A. Nhẹ","B. Không phân cực","C. Nặng","D. Có O"],a:"B. Không phân cực",explain:"Nước là dung môi phân cực."},
{q:"Hidrocacbon không làm đổi màu quỳ tím vì",options:["A. Không tan","B. Trung tính","C. Không cháy","D. Không mùi"],a:"B. Trung tính",explain:"Không phải axit hay bazơ."},
{q:"Carbon dioxide làm nước vôi trong vẩn đục vì",options:["A. Tạo CaO","B. Tạo CaCO3 kết tủa","C. Bay hơi","D. Trung hòa"],a:"B. Tạo CaCO3 kết tủa",explain:"CO2 + Ca(OH)2."},
{q:"Kim loại phản ứng mạnh với acid vì",options:["A. Nhẹ","B. Đứng trước H","C. Tan tốt","D. Dẫn điện"],a:"B. Đứng trước H",explain:"Giải phóng H2."},
{q:"Phi kim thường tạo oxide axit vì",options:["A. Dễ tan","B. Có độ âm điện lớn","C. Nặng","D. Có ánh kim"],a:"B. Có độ âm điện lớn",explain:"Dễ tạo oxide axit."},
{q:"Ethanol tan vô hạn trong nước do",options:["A. Nhẹ","B. Có liên kết hydrogen","C. Có mạch dài","D. Bay hơi"],a:"B. Có liên kết hydrogen",explain:"Nhóm –OH."},
{q:"Ethanoic acid là axit yếu vì",options:["A. Không phân li","B. Phân li không hoàn toàn","C. Không tan","D. Không có H"],a:"B. Phân li không hoàn toàn",explain:"Axit hữu cơ yếu."},
{q:"Glucose cung cấp năng lượng vì",options:["A. Tan tốt","B. Bị oxi hóa","C. Có vị ngọt","D. Có O"],a:"B. Bị oxi hóa",explain:"Giải phóng năng lượng."},
{q:"Protein bị biến tính khi đun nóng vì",options:["A. Đứt liên kết peptide","B. Phá cấu trúc không gian","C. Bay hơi","D. Tan tốt"],a:"B. Phá cấu trúc không gian",explain:"Mất cấu trúc bậc cao."},
{q:"Polyethylene cách điện vì",options:["A. Nhẹ","B. Không có ion tự do","C. Tan kém","D. Có mạch dài"],a:"B. Không có ion tự do",explain:"Không dẫn điện."},
{q:"Carbon monoxide độc vì",options:["A. Mùi nặng","B. Gắn với hemoglobin","C. Tan trong nước","D. Nặng"],a:"B. Gắn với hemoglobin",explain:"Ngăn vận chuyển O2."},
{q:"Kim loại kiềm phản ứng mạnh với nước vì",options:["A. Nhẹ","B. Hoạt động hóa học mạnh","C. Tan tốt","D. Có ánh kim"],a:"B. Hoạt động hóa học mạnh",explain:"Dễ nhường electron."},
{q:"Hydrocarbon không phân cực vì",options:["A. Có C","B. Chỉ chứa C–H","C. Có liên kết đôi","D. Tan trong nước"],a:"B. Chỉ chứa C–H",explain:"Độ âm điện gần nhau."},
{q:"Polymer bền vì",options:["A. Bay hơi","B. Liên kết bền","C. Tan tốt","D. Nhẹ"],a:"B. Liên kết bền",explain:"Mạch dài."},
{q:"Acid làm kim loại tan vì",options:["A. Nặng","B. Phản ứng oxi hóa – khử","C. Bay hơi","D. Tan"],a:"B. Phản ứng oxi hóa – khử",explain:"Kim loại bị oxi hóa."},
{q:"Base làm trơn tay vì",options:["A. Tan tốt","B. Phản ứng với chất béo","C. Bay hơi","D. Nặng"],a:"B. Phản ứng với chất béo",explain:"Xà phòng hóa."},
{q:"Ester có mùi thơm vì",options:["A. Bay hơi","B. Phân tử nhỏ","C. Cấu trúc đặc trưng","D. Tan trong nước"],a:"C. Cấu trúc đặc trưng",explain:"Đặc trưng ester."},
// ===== VẬN DỤNG (15 câu) =====
{q:"Số mol NaOH có trong 8 g NaOH là",options:["A. 0,1","B. 0,2","C. 0,3","D. 0,4"],a:"B. 0,2",explain:"n=8/40."},
{q:"Khối lượng CO2 tạo ra khi đốt cháy 0,1 mol CH4 là",options:["A. 2,2 g","B. 4,4 g","C. 6,6 g","D. 8,8 g"],a:"B. 4,4 g",explain:"1 mol CH4 → 1 mol CO2."},
{q:"Dung dịch NaCl 5% có khối lượng 200 g. Khối lượng NaCl là",options:["A. 5 g","B. 8 g","C. 10 g","D. 12 g"],a:"C. 10 g",explain:"5% của 200 g."},
{q:"Tỉ khối của CO2 so với H2 là",options:["A. 11","B. 22","C. 44","D. 88"],a:"B. 22",explain:"44/2."},
{q:"Số mol glucozơ trong 36 g là",options:["A. 0,1","B. 0,2","C. 0,3","D. 0,4"],a:"B. 0,2",explain:"36/180."},
{q:"Khối lượng CaCO3 cần dùng để tạo 2,24 lít CO2 (đktc) là",options:["A. 5 g","B. 10 g","C. 20 g","D. 25 g"],a:"B. 10 g",explain:"nCO2=0,1 mol."},
{q:"Hòa tan 20 g NaCl vào 180 g nước. Nồng độ % là",options:["A. 8%","B. 9%","C. 10%","D. 12%"],a:"C. 10%",explain:"20/200."},
{q:"Một oxit có %O là 40%. Công thức có thể là",options:["A. CO","B. CO2","C. CaO","D. MgO"],a:"C. CaO",explain:"O chiếm 40%."},
{q:"Khối lượng mol của C2H5OH là",options:["A. 44","B. 46","C. 58","D. 60"],a:"B. 46",explain:"C2H6O = 46."},
{q:"Thể tích H2 (đktc) thu được khi cho 0,1 mol Zn phản ứng với HCl là",options:["A. 1,12","B. 2,24","C. 3,36","D. 4,48"],a:"B. 2,24",explain:"1 mol Zn → 1 mol H2."},
{q:"Một polime được tạo từ monome C2H4. Tên polime là",options:["A. PVC","B. PE","C. PP","D. PS"],a:"B. PE",explain:"Etilen → PE."},
{q:"Khối lượng NaOH cần để pha 400 g dung dịch 5% là",options:["A. 10 g","B. 15 g","C. 20 g","D. 25 g"],a:"C. 20 g",explain:"5% của 400 g."},
{q:"Chất X có M = 60 và là axit hữu cơ đơn chức. X là",options:["A. HCOOH","B. CH3COOH","C. C2H5COOH","D. C3H7COOH"],a:"B. CH3COOH",explain:"M = 60."},
{q:"Số mol CO2 thu được khi đốt 0,2 mol C2H6 là",options:["A. 0,2","B. 0,4","C. 0,6","D. 0,8"],a:"D. 0,8",explain:"1 mol C2H6 → 2 mol CO2."},
{q:"Một hợp chất hữu cơ có CTĐG là CH2 và là hidrocacbon. Công thức có thể là",options:["A. C2H4","B. C3H8","C. C2H6","D. CH4"],a:"A. C2H4",explain:"CTĐG CH2."},
{q:"Khối lượng mol của calcium carbonate là",options:["A. 90","B. 100","C. 110","D. 120"],a:"B. 100",explain:"CaCO3 = 100."},
{q:"Số mol NaOH trong 20 g là",options:["A. 0,25","B. 0,4","C. 0,5","D. 1,0"],a:"C. 0,5",explain:"20/40."},
{q:"Khối lượng NaCl tạo ra khi trung hòa 0,1 mol HCl là",options:["A. 5,85 g","B. 4,0 g","C. 3,65 g","D. 2,3 g"],a:"A. 5,85 g",explain:"M NaCl = 58,5."},
{q:"Thể tích H2 (đktc) thu được khi cho 0,1 mol Zn phản ứng với HCl là",options:["A. 1,12 l","B. 2,24 l","C. 3,36 l","D. 4,48 l"],a:"B. 2,24 l",explain:"1 mol Zn → 1 mol H2."},
{q:"Khối lượng CaO thu được khi nung 100 g CaCO3 là",options:["A. 44 g","B. 50 g","C. 56 g","D. 60 g"],a:"C. 56 g",explain:"CaO = 56."},
{q:"Số mol CO2 sinh ra khi đốt cháy 0,5 mol methane là",options:["A. 0,25","B. 0,5","C. 1,0","D. 2,0"],a:"B. 0,5",explain:"CH4 → CO2."},
{q:"Khối lượng ethanol trong 200 g dung dịch 10% là",options:["A. 10 g","B. 15 g","C. 20 g","D. 25 g"],a:"C. 20 g",explain:"10% × 200."},
{q:"Số mol ethanoic acid trong 12 g là",options:["A. 0,1","B. 0,2","C. 0,3","D. 0,4"],a:"A. 0,1",explain:"12/60."},
{q:"Khối lượng CO2 sinh ra khi nhiệt phân 100 g CaCO3 là",options:["A. 22 g","B. 44 g","C. 56 g","D. 78 g"],a:"B. 44 g",explain:"CO2 = 44."},
{q:"Khối lượng sodium phản ứng với 0,2 mol ethanol là",options:["A. 2,3 g","B. 4,6 g","C. 6,9 g","D. 9,2 g"],a:"B. 4,6 g",explain:"Na : ethanol = 1 : 1."},
{q:"Tỉ khối CO2 so với H2 là",options:["A. 11","B. 22","C. 44","D. 88"],a:"B. 22",explain:"44/2."},
{q:"Khối lượng glucose trong 300 g dung dịch 15% là",options:["A. 30 g","B. 40 g","C. 45 g","D. 60 g"],a:"C. 45 g",explain:"15% × 300."},
{q:"Khối lượng polymer tạo từ 180 g monomer glucose là",options:["A. 162 g","B. 170 g","C. 180 g","D. 200 g"],a:"A. 162 g",explain:"Trùng ngưng mất nước."},
{q:"Thể tích O2 (đktc) cần để đốt cháy 0,5 mol ethene là",options:["A. 11,2 l","B. 22,4 l","C. 33,6 l","D. 44,8 l"],a:"C. 33,6 l",explain:"3 mol O2 cho 1 mol C2H4."},
{q:"Khối lượng Na2CO3 cần để phản ứng hết 0,2 mol HCl là",options:["A. 5,3 g","B. 8,4 g","C. 10,6 g","D. 21,2 g"],a:"C. 10,6 g",explain:"Na2CO3 = 106."}
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

// Ensure each Hóa chuyên đề có at least 50 câu (bổ sung bằng cách nhân bản nếu cần)
(function ensureHoaTopicCounts(minPerTopic = 50) {
const _hoaList = [
{ short: _hoaShortNames[0], arr: questions_hoa_topic1 },
{ short: _hoaShortNames[1], arr: questions_hoa_topic2 },
{ short: _hoaShortNames[2], arr: questions_hoa_topic3 },
{ short: _hoaShortNames[3], arr: questions_hoa_topic4 },
{ short: _hoaShortNames[4], arr: questions_hoa_topic5 }
];
_hoaList.forEach(item => {
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

/* ===== CHUẨN HÓA MẢNG CÂU HỎI ===== */
if (Array.isArray(window.questions_hoa)) {
  window.questions_hoa.forEach(q => {
    q.q = toIUPAC(q.q);
    q.a = toIUPAC(q.a);
    q.explain = toIUPAC(q.explain);
    if (Array.isArray(q.options)) {
      q.options = q.options.map(o => toIUPAC(o));
    }
  });

  console.log("✅ IUPAC: Chuẩn hóa thành công", window.questions_hoa.length, "câu");
} else {
  console.error("❌ Không tìm thấy window.questions_hoa");
}
