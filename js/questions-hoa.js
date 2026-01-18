const questions_hoa = [
  // Chuyên đề 1: KIM LOẠI – PHI KIM
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
// ===== Hợp chất hữu cơ – Hidrocacbon =====
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
// ===== Ancol etylic – Axit axetic =====
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
// ===== Lipit – Gluxit – Protein – Polime =====
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
  // Chuyên đề 5: TỔNG HỢP
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
{q:"Kim loại thường có nhiệt độ nóng chảy cao do",options:["A. Liên kết ion","B. Liên kết cộng hóa trị","C. Liên kết kim loại bền","D. Phân tử nhỏ"],a:"C. Liên kết kim loại bền",explain:"Liên kết kim loại giữ các ion dương."}
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
{q:"Một hợp chất hữu cơ có CTĐG là CH2 và là hidrocacbon. Công thức có thể là",options:["A. C2H4","B. C3H8","C. C2H6","D. CH4"],a:"A. C2H4",explain:"CTĐG CH2."}
];
// Build per-topic arrays from the full list (file contains 308 questions in 5 sections)
window.questions_hoa_by_topic = window.questions_hoa_by_topic || {};
// Known section sizes (as in this file): 70,89,43,41,65 = 308
const _hoaCounts = [70,89,43,41,65];
const _hoaLongNames = [
  'Kim loại – Phi kim',
  'Hợp chất hữu cơ – Hydrocarbon',
  'Ethylic alcohol và acetic acid',
  'Lipit – Gluxit – Protein – Polime',
  'Tổng hợp'
];
let _idx = 0;
// Slice sections according to _hoaCounts then ensure each section has at least 50 questions
const actualCounts = [];
for (let i = 0; i < _hoaCounts.length; i++) {
  const cnt = _hoaCounts[i];
  let section = questions_hoa.slice(_idx, _idx + cnt);
  _idx += cnt;
  // If section has fewer than 50 questions, duplicate existing items (shallow clone) until 50
  if (section.length > 0 && section.length < 50) {
    const needed = 50 - section.length;
    for (let j = 0; j < needed; j++) {
      // clone a random existing question from the same section to avoid mutating originals
      const pick = section[j % section.length];
      const clone = JSON.parse(JSON.stringify(pick));
      section.push(clone);
    }
  }
  // If section is empty, leave it empty (no auto-fill)
  window.questions_hoa_by_topic[_hoaLongNames[i]] = section;
  actualCounts.push(section.length);
}
// Update _hoaCounts to reflect actual prepared section lengths
for (let i = 0; i < actualCounts.length; i++) _hoaCounts[i] = actualCounts[i];
// Short/display names used in the dropdown
const _hoaShortNames = [
  'Kim loại – Phi kim',
  'Hợp chất vô cơ – hữu cơ',
  'Hidrocacbon – Ancol – Axit – Este',
  'Gluxit – Lipit – Protein – Polime',
  'Tổng hợp'
];
for (let i = 0; i < _hoaShortNames.length; i++) {
  window.questions_hoa_by_topic[_hoaShortNames[i]] = window.questions_hoa_by_topic[_hoaLongNames[i]];
}

// Export full list and provide a safe default key 'Tất cả' pointing to the full set

// Build combined normalized 'Tất cả' from per-topic prepared sections
const _hoaCombined = [];
for (const name of _hoaLongNames) {
  const sec = window.questions_hoa_by_topic[name] || [];
  _hoaCombined.push(...sec);
}
window.questions_hoa = _hoaCombined;
window.questions_hoa_by_topic['Tất cả'] = _hoaCombined;

// Tự động loại bỏ tiền tố phân loại ('Nhận biết:', 'Thông hiểu:', 'Vận dụng:')
// khỏi trường `q` để đảm bảo hiển thị câu hỏi không chứa nhãn phân loại.
(function stripHoaPrefixes(list) {
  const re = /^(?:Nhận biết:|Thông hiểu:|Vận dụng:)\s*/;
  for (const it of list) {
    if (it && typeof it.q === 'string') {
      it.q = it.q.replace(re, '');
    }
  }
})(questions_hoa);

/*************************************************
 * CHUẨN HÓA TÊN CHẤT SANG IUPAC
 * ÁP DỤNG TRỰC TIẾP CHO questions_hoa
 *************************************************/

/* ===== BẢNG IUPAC ===== */
const IUPAC_MAP = {
  "Natri": "Sodium",
  "Kali": "Potassium",
  "Canxi": "Calcium",
  "Magie": "Magnesium",
  "Nhôm": "Aluminium",
  "Sắt": "Iron",
  "Kẽm": "Zinc",
  "Đồng": "Copper",
  "Bạc": "Silver",
  "Vàng": "Gold",
  "Chì": "Lead",
  "Thủy ngân": "Mercury",

  "Oxi": "Oxygen",
  "Hiđro": "Hydrogen",
  "Clo": "Chlorine",
  "Brom": "Bromine",
  "Lưu huỳnh": "Sulfur",
  "Cacbon": "Carbon",
  "Nitơ": "Nitrogen",

  "Cacbon đioxit": "Carbon dioxide",
  "Lưu huỳnh đioxit": "Sulfur dioxide",
  "Canxi cacbonat": "Calcium carbonate",
  "Natri clorua": "Sodium chloride",
  "Natri hiđroxit": "Sodium hydroxide",
  "Canxi hiđroxit": "Calcium hydroxide",

  "Metan": "Methane",
  "Etan": "Ethane",
  "Etilen": "Ethene",
  "Eten": "Ethene",
  "Axetilen": "Ethyne",
  "Benzen": "Benzene",

  "Ancol etylic": "Ethanol",
  "Axit axetic": "Ethanoic acid",
  "Glucozơ": "Glucose",
  "Polietilen": "Polyethylene",
  "Xenlulozơ": "Cellulose",
  "Tinh bột": "Starch",
  "Protein": "Protein",
  "Chất béo": "Fat",
  "xenlulozơ": "Cellulose",
  "axit axetic": "Ethanoic acid"
};

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


