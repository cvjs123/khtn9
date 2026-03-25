// js/short-exam-questions.js
// Ngân hàng câu hỏi riêng cho Ô 8 (Đề ngắn 3 môn).
// Format mỗi câu: { q: "...", options: ["A. ...","B. ...","C. ...","D. ..."], a: "A. ...", explain?: "...", level?: "nhan_biet|thong_hieu|van_dung" }

(function () {
    const ly = [
  {
    "q": "Thế năng hấp dẫn phụ thuộc vào",
    "options": ["A. khối lượng", "B. trọng lượng riêng", "C. khối lượng và vị trí của vật so với mặt đất", "D. khối lượng và vận tốc của vật"],
    "a": "C. khối lượng và vị trí của vật so với mặt đất",
    "level": "nhan_biet"
  },
  {
    "q": "Động năng của vật phụ thuộc vào",
    "options": ["A. khối lượng", "B. vận tốc của vật", "C. khối lượng và chất làm vật", "D. khối lượng và vận tốc của vật"],
    "a": "D. khối lượng và vận tốc của vật",
    "level": "nhan_biet"
  },
  {
    "q": "Một vật được ném thẳng đứng lên cao, cơ năng của vật thay đổi như thế nào trong quá trình chuyển động lên cao?",
    "options": ["A. Tăng dần", "B. Giảm dần", "C. Không đổi", "D. Ban đầu tăng, sau đó giảm"],
    "a": "C. Không đổi",
    "level": "thong_hieu"
  },
  {
    "q": "Một động cơ điện hoạt động liên tục trong 10 giây, thực hiện một công là 1500 J. Công suất trung bình của động cơ là bao nhiêu?",
    "options": ["A. 15 W", "B. 150 W", "C. 15000 W", "D. 0.15 W"],
    "a": "B. 150 W",
    "level": "van_dung"
  },
  {
    "q": "Một tia sáng khi truyền từ nước ra không khí thì",
    "options": ["A. góc khúc xạ lớn hơn góc tới", "B. tia khúc xạ luôn nằm trùng với pháp tuyến", "C. tia khúc xạ hợp với pháp tuyến một góc 30°", "D. góc khúc xạ vẫn nằm trong môi trường nước"],
    "a": "A. góc khúc xạ lớn hơn góc tới",
    "level": "nhan_biet"
  },
  {
    "q": "Khi vật đặt rất gần thấu kính hội tụ (nhưng vẫn trong khoảng tiêu cự), ảnh thu được sẽ là",
    "options": ["A. ảnh thật, ngược chiều, lớn hơn vật", "B. ảnh ảo, cùng chiều, nhỏ hơn vật", "C. ảnh ảo, cùng chiều, lớn hơn vật", "D. ảnh thật, cùng chiều, nhỏ hơn vật"],
    "a": "C. ảnh ảo, cùng chiều, lớn hơn vật",
    "level": "thong_hieu"
  },
  {
    "q": "Đoạn mạch gồm hai điện trở R₁ và R₂ mắc song song có điện trở tương đương là:",
    "options": ["A. R₁ + R₂", "B. (R₁.R₂)/(R₁+R₂)", "C. (R₁+R₂)/(R₁.R₂)", "D. R₁ - R₂"],
    "a": "B. (R₁.R₂)/(R₁+R₂)",
    "level": "nhan_biet"
  },
  {
    "q": "Đặt một hiệu điện thế U vào hai đầu đoạn mạch gồm hai điện trở R₁ và R₂ mắc nối tiếp. Biểu thức nào sau đây không đúng?",
    "options": ["A. U = U₁ + U₂", "B. I = I₁ + I₂", "C. I = I₁ = I₂", "D. U₁/U₂ = R₁/R₂"],
    "a": "B. I = I₁ + I₂",
    "level": "thong_hieu"
  },
  {
    "q": "Hiệu điện thế trên hai đầu một mạch điện gồm hai điện trở R₁ và R₂ ghép nối tiếp nhau bằng U. Hiệu điện thế trên hai đầu điện trở R₁ là",
    "options": ["A. U.R₁/(R₁+R₂)", "B. U.R₂/(R₁+R₂)", "C. U.(R₁+R₂)/R₁", "D. U.(R₁+R₂)/R₂"],
    "a": "A. U.R₁/(R₁+R₂)",
    "level": "van_dung"
  },
  {
    "q": "Ba điện trở R₁, R₂, R₃ được mắc song song vào hai điểm A và B. Biết cường độ dòng điện qua R₂ là 0,6A và R₁ = 20 Ω, R₂ = 30 Ω, R₃ = 60 Ω. Cường độ dòng điện qua R₁, R₃ và qua mạch chính có giá trị lần lượt là",
    "options": ["A. 0,9 A, 0,3 A và 1,8 A", "B. 0,9 A, 0,3 A và 1,5 A", "C. 0,5 A, 0,3 A và 1,8 A", "D. 0,9 A, 0,5 A và 1,8 A"],
    "a": "B. 0,9 A, 0,3 A và 1,5 A",
    "level": "van_dung"
  },
  {
    "q": "Khi nào thì dòng điện cảm ứng trong cuộn dây đổi chiều?",
    "options": ["A. Khi số đường sức từ xuyên qua tiết diện cuộn dây tăng hoặc giảm", "B. Khi cường độ dòng điện trong cuộn dây thay đổi", "C. Khi cuộn dây được đặt trong từ trường đều", "D. Khi số đường sức từ xuyên qua tiết diện cuộn dây giữ nguyên"],
    "a": "A. Khi số đường sức từ xuyên qua tiết diện cuộn dây tăng hoặc giảm",
    "level": "nhan_biet"
  },
  {
    "q": "Thiết bị nào sau đây hoạt động dựa trên tác dụng từ của dòng điện xoay chiều?",
    "options": ["A. Bàn là điện", "B. Bếp điện", "C. Rơ le điện", "D. Máy sấy tóc"],
    "a": "C. Rơ le điện",
    "level": "thong_hieu"
  },
  {
    "q": "Yếu tố nào sau đây là quan trọng nhất trong việc duy trì sự cân bằng năng lượng trên Trái Đất?",
    "options": ["A. Tốc độ gió", "B. Lượng mưa", "C. Hoạt động của con người", "D. Nguồn năng lượng từ Mặt trời"],
    "a": "D. Nguồn năng lượng từ Mặt trời",
    "level": "nhan_biet"
  },
  {
    "q": "Đặc điểm nào sau đây là ưu điểm chính của năng lượng tái tạo so với năng lượng truyền thống?",
    "options": ["A. Chi phí đầu tư ban đầu thấp", "B. Ít gây ô nhiễm môi trường", "C. Dễ dàng lưu trữ với số lượng lớn", "D. Phụ thuộc nhiều vào thời tiết"],
    "a": "B. Ít gây ô nhiễm môi trường",
    "level": "thong_hieu"
  },
  {
    "q": "Trong những vật sau, cho biết vật nào có động năng lớn nhất?",
    "options": ["A. Máy bay đang chuyển động trên bầu trời", "B. Quả bóng đang bay tới rổ", "C. Ô tô đang di chuyển trên đường cao tốc", "D. Viên bị đang lăn trên sàn"],
    "a": "A. Máy bay đang chuyển động trên bầu trời",
    "level": "nhan_biet"
  },
  {
    "q": "Một vật có khối lượng không đổi đang chuyển động thẳng đều. Khi tốc độ của vật tăng lên gấp đôi thì động năng của vật",
    "options": ["A. giảm một nửa", "B. tăng gấp đôi", "C. không thay đổi", "D. tăng gấp 4 lần"],
    "a": "D. tăng gấp 4 lần",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật được thả rơi tự do, trong quá trình rơi thì",
    "options": ["A. động năng của vật không đổi", "B. thế năng của vật không đổi", "C. tổng động năng và thế năng của vật luôn thay đổi", "D. tổng động năng và thế năng của vật không thay đổi"],
    "a": "D. tổng động năng và thế năng của vật không thay đổi",
    "level": "nhan_biet"
  },
  {
    "q": "Con ngựa kéo xe chuyển động đều với tốc độ 9 km/h. Lực kéo là 200N. Công suất của ngựa có giá trị là",
    "options": ["A. 500 W", "B. 200 W", "C. 1000 W", "D. 1500W"],
    "a": "A. 500 W",
    "level": "van_dung"
  },
  {
    "q": "Theo định luật khúc xạ ánh sáng thì",
    "options": ["A. góc khúc xạ tỉ lệ với góc tới", "B. sin của góc khúc xạ tỉ lệ với sin của góc tới", "C. cosin của góc khúc xạ tỉ lệ với cosin của góc tới", "D. sin của góc khúc xạ tỉ lệ nghịch với sin của góc tới"],
    "a": "B. sin của góc khúc xạ tỉ lệ với sin của góc tới",
    "level": "nhan_biet"
  },
  {
    "q": "Vật AB đặt trước thấu kính hội tụ có tiêu cự f và cách thấu kính một khoảng OA cho ảnh A'B' ngược chiều cao bằng vật AB thì",
    "options": ["A. OA = f", "B. OA = 2f", "C. OA > f", "D. OA < f"],
    "a": "B. OA = 2f",
    "level": "thong_hieu"
  },
  {
    "q": "Biểu thức đúng của định luật Ohm là",
    "options": ["A. I = U.R", "B. I = U/R", "C. I = R/U", "D. U = I.R"],
    "a": "B. I = U/R",
    "level": "nhan_biet"
  },
  {
    "q": "Trong thí nghiệm khảo sát định luật Ohm, có thể làm thay đổi đại lượng nào trong số các đại lượng gồm hiệu điện thế, cường độ dòng điện, điện trở dây dẫn?",
    "options": ["A. Chỉ thay đổi cường độ dòng điện", "B. Chỉ thay đổi điện trở dây dẫn", "C. Chỉ thay đổi hiệu điện thế", "D. Cả ba đại lượng trên"],
    "a": "D. Cả ba đại lượng trên",
    "level": "thong_hieu"
  },
  {
    "q": "Mạch điện đơn giản gồm nguồn điện cấp điện cho một điện trở đủ lớn. Để xác định công suất của mạch điện, Minh phải dùng ampe kế và vôn kế. Để thực hiện đúng phép đo. Minh cần mắc",
    "options": ["A. ampe kế nối tiếp với vôn kế và nối tiếp với điện trở", "B. vôn kế song song với ampe kế và song song với điện trở", "C. vôn kế song song với điện trở rồi nối tiếp cụm này với ampe kế", "D. ampe kế song song với điện trở rồi nối tiếp cụm này với vôn kế"],
    "a": "C. vôn kế song song với điện trở rồi nối tiếp cụm này với ampe kế",
    "level": "van_dung"
  },
  {
    "q": "Cho đoạn mạch gồm hai điện trở R1 và R2 mắc song song. Biết hiệu điện thế hai đầu đoạn mạch là U = 24 V; giá trị các điện trở là R1 = R2 = 8 Ω. Trong thời gian 12 phút, công của dòng điện sản ra trong mạch là:",
    "options": ["A. 103680 J", "B. 1027,8 J", "C. 712,8 J", "D. 172,8 J"],
    "a": "A. 103680 J",
    "level": "van_dung"
  },
  {
    "q": "Cách nào dưới đây có thể tạo ra dòng điện cảm ứng?",
    "options": ["A. Nối hai cực của pin vào hai đầu cuộn dây dẫn", "B. Đưa một cực của nam châm từ ngoài vào trong một cuộn dây dẫn kín", "C. Nối hai cực của nam châm với hai đầu cuộn dây dẫn", "D. Đưa một cực của acquy từ ngoài vào trong một cuộn dây dẫn kín"],
    "a": "B. Đưa một cực của nam châm từ ngoài vào trong một cuộn dây dẫn kín",
    "level": "nhan_biet"
  },
  {
    "q": "Máy khử rung tim hoạt động dựa trên tác dụng gì của dòng điện?",
    "options": ["A. Tác dụng nhiệt", "B. Tác dụng phát sáng", "C. Tác dụng từ", "D. Tác dụng sinh lí"],
    "a": "D. Tác dụng sinh lí",
    "level": "thong_hieu"
  },
  {
    "q": "Nhiên liệu hóa thạch là:",
    "options": ["A. nguồn nhiên liệu tái tạo", "B. đá chứa ít nhất 50% xác động và thực vật", "C. chỉ bao gồm dầu mỏ, than đá", "D. nhiên liệu hình thành từ xác sinh vật bị chôn vùi và biến đổi hàng triệu năm trước"],
    "a": "D. nhiên liệu hình thành từ xác sinh vật bị chôn vùi và biến đổi hàng triệu năm trước",
    "level": "nhan_biet"
  },
  {
    "q": "Đặc điểm của năng lượng mặt trời:",
    "options": ["A. Chịu ảnh hưởng bởi thiên tai", "B. Phát ra tiếng ồn gây ảnh hưởng đến môi trường sống của sinh vật", "C. Được khai thác gián tiếp qua các thiết bị thu nhiệt", "D. Phụ thuộc lớn vào các mùa trong năm"],
    "a": "C. Được khai thác gián tiếp qua các thiết bị thu nhiệt",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật có khả năng sinh công có:",
    "options": ["A. Động lượng", "B. Năng lượng cơ học", "C. Lực đàn hồi", "D. Quán tính"],
    "a": "B. Năng lượng cơ học",
    "level": "nhan_biet"
  },
  {
    "q": "Hiện tượng tia sáng truyền từ môi trường trong suốt này sang môi trường trong suốt khác bị gãy khúc tại mặt phân cách gọi là:",
    "options": ["A. Sự phản xạ ánh sáng", "B. Sự khúc xạ ánh sáng", "C. Sự phản xạ toàn phần", "D. Sự tán xạ ánh sáng"],
    "a": "B. Sự khúc xạ ánh sáng",
    "level": "nhan_biet"
  },
  {
    "q": "Đơn vị đo cường độ dòng điện trong hệ SI là:",
    "options": ["A. Vôn (V)", "B. Oát (W)", "C. Ampe (A)", "D. Ôm (Ω)"],
    "a": "C. Ampe (A)",
    "level": "nhan_biet"
  },
  {
    "q": "Hiện tượng nào sau đây chứng tỏ dòng điện có từ tính?",
    "options": ["A. Dây dẫn có điện phát sáng", "B. Dây dẫn có điện làm quay kim nam châm đặt gần", "C. Dây dẫn có điện phát ra âm thanh", "D. Dây dẫn có điện nóng lên"],
    "a": "B. Dây dẫn có điện làm quay kim nam châm đặt gần",
    "level": "nhan_biet"
  },
  {
    "q": "Trong các dạng năng lượng dưới đây, dạng năng lượng nào là năng lượng tái tạo?",
    "options": ["A. Than đá", "B. Dầu mỏ", "C. Năng lượng gió", "D. Khí đốt tự nhiên"],
    "a": "C. Năng lượng gió",
    "level": "nhan_biet"
  },
  {
    "q": "Khi tăng hiệu điện thế đặt vào hai đầu dây dẫn kim loại lên gấp đôi, cường độ dòng điện qua dây dẫn sẽ thay đổi thế nào (nếu điện trở không đổi)?",
    "options": ["A. Tăng gấp đôi", "B. Giảm một nửa", "C. Không thay đổi", "D. Tăng gấp bốn lần"],
    "a": "A. Tăng gấp đôi",
    "level": "thong_hieu"
  },
  {
    "q": "Một quả bóng đang rơi tự do từ độ cao xuống đất. Trong quá trình rơi (bỏ qua lực cản không khí), dạng năng lượng của quả bóng thay đổi như thế nào?",
    "options": ["A. Động năng tăng, thế năng giảm", "B. Động năng giảm, thế năng tăng", "C. Động năng và thế năng đều tăng", "D. Động năng và thế năng đều giảm"],
    "a": "A. Động năng tăng, thế năng giảm",
    "level": "thong_hieu"
  },
  {
    "q": "Tại sao khi nhìn từ dưới nước lên trên không khí, nếu góc tới của tia sáng lớn hơn một giá trị nào đó thì ta không còn nhìn thấy không khí nữa mà chỉ thấy mặt nước như một chiếc gương?",
    "options": ["A. Vì ánh sáng bị hấp thụ hoàn toàn", "B. Vì ánh sáng bị phản xạ toàn phần trở lại trong nước", "C. Vì ánh sáng bị tán xạ mạnh trong không khí", "D. Vì không khí không cho ánh sáng truyền qua"],
    "a": "B. Vì ánh sáng bị phản xạ toàn phần trở lại trong nước",
    "level": "thong_hieu"
  },
  {
    "q": "Khi hiệu điện thế đặt vào hai đầu dây dẫn tăng gấp 3 lần, còn điện trở dây dẫn không đổi thì cường độ dòng điện qua dây dẫn sẽ:",
    "options": ["A. Tăng gấp 2 lần", "B. Tăng gấp 3 lần", "C. Không đổi", "D. Giảm đi 3 lần"],
    "a": "B. Tăng gấp 3 lần",
    "level": "thong_hieu"
  },
  {
    "q": "Tại sao trong máy biến áp, người ta quấn cuộn dây quanh lõi sắt?",
    "options": ["A. Để giảm điện trở của cuộn dây", "B. Để làm đẹp và chắc chắn hơn", "C. Để từ thông qua các vòng dây tăng, hiệu quả cảm ứng điện từ lớn hơn", "D. Để làm mát cuộn dây khi có dòng điện chạy qua"],
    "a": "C. Để từ thông qua các vòng dây tăng, hiệu quả cảm ứng điện từ lớn hơn",
    "level": "thong_hieu"
  },
  {
    "q": "Vì sao việc sử dụng nhiều năng lượng hóa thạch (than, dầu, khí đốt) gây ô nhiễm môi trường?",
    "options": ["A. Vì chúng có nhiệt lượng thấp, khó đốt cháy hoàn toàn", "B. Vì khi cháy sinh ra khí thải gây hiệu ứng nhà kính và các chất độc hại", "C. Vì khi khai thác chúng thường khó khăn và tốn kém", "D. Vì chúng là nguồn năng lượng không tái tạo"],
    "a": "B. Vì khi cháy sinh ra khí thải gây hiệu ứng nhà kính và các chất độc hại",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật khối lượng 2 kg được nâng lên độ cao 5 m so với mặt đất. Lấy g = 9,8 m/s². Thế năng của vật so với mặt đất bằng:",
    "options": ["A. 19,6 J", "B. 49 J", "C. 98 J", "D. 196 J"],
    "a": "C. 98 J",
    "level": "van_dung"
  },
  {
    "q": "Một ô tô khối lượng 1000 kg đang chuyển động với vận tốc 10 m/s. Động năng của ô tô là:",
    "options": ["A. 10 000 J", "B. 20 000 J", "C. 50 000 J", "D. 100 000 J"],
    "a": "C. 50 000 J",
    "level": "van_dung"
  },
  {
    "q": "Khi một vật chuyển động rơi tự do từ trên xuống dưới thì",
    "options": ["A. thế năng của vật giảm dần", "B. động năng của vật giảm dần", "C. thế năng của vật tăng dần", "D. động lượng của vật giảm dần"],
    "a": "A. thế năng của vật giảm dần",
    "level": "nhan_biet"
  },
  {
    "q": "Thế năng trọng trường của một vật không phụ thuộc vào",
    "options": ["A. khối lượng của vật", "B. trọng lượng của vật", "C. độ cao của vật", "D. tốc độ của vật"],
    "a": "D. tốc độ của vật",
    "level": "nhan_biet"
  },
  {
    "q": "Trường hợp nào sau đây, vật vừa có động năng tăng, vừa có thế năng tăng?",
    "options": ["A. Quả táo đang rơi từ trên cành xuống đất", "B. Máy bay đang cất cánh", "C. Xe đạp đang xuống dốc", "D. Ô tô đang chạy đều trên đường cao tốc"],
    "a": "B. Máy bay đang cất cánh",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật khối lượng 1500 kg được cần cẩu nâng đều lên độ cao 20 m trong khoảng thời gian 15 s. Công suất trung bình của lực nâng của cần cẩu là",
    "options": ["A. 15000 W", "B. 22500 W", "C. 20000 W", "D. 1000 W"],
    "a": "C. 20000 W",
    "level": "van_dung"
  },
  {
    "q": "Hoàn thành câu phát biểu sau: 'Hiện tượng khúc xạ ánh sáng là hiện tượng tia sáng khi truyền từ môi trường trong suốt này sang môi trường trong suốt khác, tia sáng bị ...... tại mặt phân cách giữa hai môi trường'.",
    "options": ["A. uốn cong", "B. gãy khúc", "C. dừng lại", "D. quay trở lại"],
    "a": "B. gãy khúc",
    "level": "nhan_biet"
  },
  {
    "q": "Khi f < d < 2f, ảnh của vật qua thấu kính là",
    "options": ["A. Ảnh thật, ngược chiều và lớn hơn vật", "B. Ảnh ảo, cùng chiều và nhỏ hơn vật", "C. Ảnh ảo, ngược chiều và nhỏ hơn vật", "D. Ảnh thật, cùng chiều và nhỏ hơn vật"],
    "a": "A. Ảnh thật, ngược chiều và lớn hơn vật",
    "level": "thong_hieu"
  },
  {
    "q": "Cường độ dòng điện chạy qua một dây dẫn phụ thuộc như thế nào vào hiệu điện thế giữa hai đầu dây dẫn đó?",
    "options": ["A. Không thay đổi khi thay đổi hiệu điện thế", "B. Tỉ lệ thuận với hiệu điện thế", "C. Tỉ lệ nghịch với hiệu điện thế", "D. Giảm khi hiệu điện thế tăng"],
    "a": "B. Tỉ lệ thuận với hiệu điện thế",
    "level": "nhan_biet"
  },
  {
    "q": "Cường độ dòng điện qua bóng đèn tỉ lệ thuận với hiệu điện thế giữa hai đầu bóng đèn. Điều đó có nghĩa là nếu hiệu điện thế tăng 1,2 lần thì",
    "options": ["A. Cường độ dòng điện tăng 2,4 lần", "B. Cường độ dòng điện tăng 1,2 lần", "C. Cường độ dòng điện giảm 1,2 lần", "D. Cường độ dòng điện giảm 2,4 lần"],
    "a": "B. Cường độ dòng điện tăng 1,2 lần",
    "level": "thong_hieu"
  },
  {
    "q": "Cho mạch điện gồm R₁ = 10Ω; R₂ = 15Ω được mắc nối tiếp vào nguồn điện có hiệu điện thế 9V. Tính điện trở tương đương của mạch điện.",
    "options": ["A. 6Ω", "B. 25Ω", "C. 10Ω", "D. 15Ω"],
    "a": "B. 25Ω",
    "level": "van_dung"
  },
  {
    "q": "Hai điện trở R₁ và R₂ = 4R₁ được mắc song song với nhau. Khi tính theo R₁ thì điện trở tương đương của đoạn mạch này có kết quả nào dưới đây?",
    "options": ["A. 5R₁", "B. 4R₁", "C. 0,8R₁", "D. 1,25R₁"],
    "a": "C. 0,8R₁",
    "level": "van_dung"
  },
  {
    "q": "Ta có thể dùng nam châm nào để tạo ra dòng điện",
    "options": ["A. Nam châm vĩnh cửu", "B. Nam châm điện", "C. Cả Nam châm vĩnh cửu và nam châm điện", "D. Không có loại nam châm nào cả"],
    "a": "C. Cả Nam châm vĩnh cửu và nam châm điện",
    "level": "nhan_biet"
  },
  {
    "q": "Một máy biến thế có số vòng dây cuộn sơ cấp gấp 3 lần số vòng dây cuộn thứ cấp thì hiệu điện thế ở hai đầu cuộn thứ cấp so với hiệu điện thế ở hai đầu cuộn sơ cấp sẽ:",
    "options": ["A. Giảm 3 lần", "B. Tăng 3 lần", "C. Giảm 6 lần", "D. Tăng 6 lần"],
    "a": "A. Giảm 3 lần",
    "level": "thong_hieu"
  },
  {
    "q": "Năng lượng hóa thạch được tạo nên từ",
    "options": ["A. Nguồn nhiên liệu tái tạo", "B. Việc phân hủy xác các vật sống qua hàng triệu năm", "C. Chỉ bao gồm dầu mỏ và than đá", "D. Đá chứa ít nhất 50% xác động và thực vật"],
    "a": "B. Việc phân hủy xác các vật sống qua hàng triệu năm",
    "level": "nhan_biet"
  },
  {
    "q": "Điểm nào sau đây không là ưu điểm của năng lượng từ gió?",
    "options": ["A. Không gây ô nhiễm môi trường", "B. Không tốn nhiên liệu", "C. Thiết bị gọn nhẹ", "D. Có công suất rất lớn"],
    "a": "D. Có công suất rất lớn",
    "level": "thong_hieu"
  },
  {
    "q": "Biểu thức tính động năng của vật là",
    "options": ["A. Wđ = 1/2.mv²", "B. Wđ = mv²", "C. Wđ = 1/2.mv", "D. Wđ = 2mv²"],
    "a": "A. Wđ = 1/2.mv²",
    "level": "nhan_biet"
  },
  {
    "q": "Một người công nhân dùng lực kéo không đổi có độ lớn 100 N để kéo một bao xi măng đi đều trên sàn nhà theo phương ngang một quãng đường 5 mét. Biết lực kéo cùng hướng với chuyển động. Người công nhân thực hiện công đó trong 10 giây. Câu nào sau đây đúng khi nói về công và công suất?",
    "options": ["A. Công mà người công nhân thực hiện là 500 J, và công suất là 50 W", "B. Công mà người công nhân thực hiện là 500 J, và công suất là 100 W", "C. Công mà người công nhân thực hiện là 5 J, và công suất là 10 W", "D. Công mà người công nhân thực hiện là 100 J, và công suất là 10 W"],
    "a": "A. Công mà người công nhân thực hiện là 500 J, và công suất là 50 W",
    "level": "van_dung"
  },
  {
    "q": "Động năng của một vận động viên có khối lượng 70 kg chạy đều hết quãng đường 400 m trong thời gian 45 s là",
    "options": ["A. 2,765.10³J", "B. 2,47.10⁵J", "C. 2,42.10⁹J", "D. 3,2.10⁶J"],
    "a": "A. 2,765.10³J",
    "level": "van_dung"
  },
  {
    "q": "Một vật có khối lượng 2 kg rơi từ độ cao 8 m xuống độ cao 3 m so với mặt đất. Công của trọng lực sinh ra trong quá trình này là",
    "options": ["A. 100 J", "B. 160 J", "C. 120 J", "D. 60 J"],
    "a": "A. 100 J",
    "level": "van_dung"
  },
  {
    "q": "Điều kiện cần để xảy ra hiện tượng phản xạ toàn phần nào sau đây là đúng?",
    "options": ["A. Tia sáng tới đi từ môi trường có chiết suất nhỏ sang môi trường có chiết suất lớn hơn", "B. Tia sáng tới đi từ môi trường có chiết suất lớn hơn đến mặt phân cách với môi trường có chiết suất nhỏ hơn", "C. Tia sáng tới phải đi vuông góc với mặt phân cách giữa hai môi trường trong suốt", "D. Tia sáng tới phải đi song song với mặt phân cách giữa hai môi trường trong suốt"],
    "a": "B. Tia sáng tới đi từ môi trường có chiết suất lớn hơn đến mặt phân cách với môi trường có chiết suất nhỏ hơn",
    "level": "thong_hieu"
  },
  {
    "q": "Một thấu kính hội tụ có tiêu cự f = 20cm. Một vật thật AB cách thấu kính 40cm. Ảnh thu được là ảnh",
    "options": ["A. thật, cách thấu kính 40 cm, ngược chiều vật và độ cao bằng vật", "B. thật, cách thấu kính 20 cm, ngược chiều vật và độ cao bằng vật", "C. thật, cách thấu kính 40 cm, cùng chiều vật và bằng vật", "D. ảo, cách thấu kính 10 cm, cùng chiều vật và lớn hơn vật"],
    "a": "A. thật, cách thấu kính 40 cm, ngược chiều vật và độ cao bằng vật",
    "level": "van_dung"
  },
  {
    "q": "Biểu thức đúng của định luật Ohm là",
    "options": ["A. I = U/R", "B. U = I/R", "C. R = U/I", "D. U = IR"],
    "a": "A. I = U/R",
    "level": "nhan_biet"
  },
  {
    "q": "Đoạn mạch gồm các điện trở mắc nối tiếp là đoạn mạch không có đặc điểm nào dưới đây?",
    "options": ["A. Dòng điện chạy qua các điện trở của đoạn mạch có cùng cường độ", "B. Đoạn mạch có những điểm nối chung chỉ của hai điện trở", "C. Đoạn mạch có những điểm nối chung của nhiều điện trở", "D. Đoạn mạch có những điện trở mắc liên tiếp với nhau và không có mạch rẽ"],
    "a": "C. Đoạn mạch có những điểm nối chung của nhiều điện trở",
    "level": "thong_hieu"
  },
  {
    "q": "Hai điện trở R₁ = 15 Ω, R₂ = 30 Ω mắc nối tiếp nhau trong một đoạn mạch. Phải mắc nối tiếp thêm vào đoạn mạch một điện trở R₃ bằng bao nhiêu để điện trở tương đương của đoạn mạch là 55?",
    "options": ["A. 10 Ω", "B. 11 Ω", "C. 12 Ω", "D. 13 Ω"],
    "a": "A. 10 Ω",
    "level": "van_dung"
  },
  {
    "q": "Cho một mạch điện có điện trở không đổi. Khi dòng điện trong mạch là I thì công suất tiêu thụ của mạch là P. Khi dòng điện trong mạch là 2I thì công suất tiêu thụ của mạch là",
    "options": ["A. P", "B. 2P", "C. 4P", "D. P/2"],
    "a": "C. 4P",
    "level": "van_dung"
  },
  {
    "q": "Trường hợp nào dưới đây trong cuộn dây không xuất hiện dòng điện cảm ứng xoay chiều?",
    "options": ["A. Đặt trục Bắc Nam của thanh nam châm trùng với trục của một ống dây rồi cho nam châm quay quanh trục đó", "B. Cho cuộn dây dẫn kín quay trong từ trường của nam châm và cắt các đường sức từ của từ trường", "C. Liên tục cho một cực của nam châm lại gần rồi ra xa một đầu cuộn dây dẫn kín", "D. Cho nam châm quay trước một cuộn dây dẫn kín, các đường sức từ bị cuộn dây cắt ngang"],
    "a": "A. Đặt trục Bắc Nam của thanh nam châm trùng với trục của một ống dây rồi cho nam châm quay quanh trục đó",
    "level": "thong_hieu"
  },
  {
    "q": "Trên hình thanh nam châm chuyển động như thế nào thì không tạo ra dòng điện cảm ứng trong cuộn dây",
    "options": ["A. Chuyển động từ ngoài vào trong cuộn dây", "B. Quay quanh trục AB", "C. Quay quanh trục PQ", "D. Quay quanh trục CD"],
    "a": "C. Quay quanh trục PQ",
    "level": "thong_hieu"
  },
  {
    "q": "Nhóm nguồn năng lượng nào sau đây được xem là bền vững và ít tác động tiêu cực đến môi trường?",
    "options": ["A. Ánh sáng mặt trời, gió và sóng biển", "B. Than đá, dầu mỏ và khí thiên nhiên", "C. Than đá, nhiên liệu hạt nhân và nhiên liệu hydrogen", "D. Ánh sáng mặt trời, nhiên liệu hạt nhân và dầu mỏ"],
    "a": "A. Ánh sáng mặt trời, gió và sóng biển",
    "level": "nhan_biet"
  },
  {
    "q": "Phát biểu nào sau đây là không đúng?",
    "options": ["A. Năng lượng từ dòng chảy không có nguồn gốc từ mặt trời mà do sự chênh lệch độ cao ở bề mặt đất", "B. Năng lượng từ gió và từ sóng biển cũng có nguồn gốc từ năng lượng mặt trời", "C. Năng lượng mặt trời làm chênh lệch nhiệt độ giữa các vùng trên Trái Đất gây ra gió và dòng hải lưu", "D. Động năng và thế năng của hơi nước ở trên cao được chuyển hoá từ nhiệt năng của Mặt Trời"],
    "a": "A. Năng lượng từ dòng chảy không có nguồn gốc từ mặt trời mà do sự chênh lệch độ cao ở bề mặt đất",
    "level": "thong_hieu"
  },
  {
    "q": "Động năng của vật phụ thuộc vào",
    "options": ["A. khối lượng", "B. tốc độ của vật", "C. khối lượng và chất làm vật", "D. khối lượng và tốc độ của vật"],
    "a": "D. khối lượng và tốc độ của vật",
    "level": "nhan_biet"
  },
  {
    "q": "Tại nơi có gia tốc trọng trường g, chọn gốc thế năng tại mặt đất thì biểu thức tính thế năng trọng trường của một vật có khối lượng m đặt tại độ cao h là",
    "options": ["A. Wt = mgh", "B. Wt = mgh²", "C. Wt = 1/2.mgh", "D. Wt = 1/2.mgh²"],
    "a": "A. Wt = mgh",
    "level": "nhan_biet"
  },
  {
    "q": "Thả một vật từ độ cao h xuống mặt đất. Hãy cho biết trong quá trình rơi cơ năng đã chuyển hóa như thế nào?",
    "options": ["A. Động năng chuyển hóa thành thế năng", "B. Thế năng chuyển hóa thành động năng", "C. Không có sự chuyển hóa nào", "D. Động năng giảm còn thế năng tăng"],
    "a": "B. Thế năng chuyển hóa thành động năng",
    "level": "thong_hieu"
  },
  {
    "q": "Một động cơ có công suất 5KW được dùng để nâng 1 vật có trọng lượng 2500N lên cao 20m. Công mà động cơ thực hiện là",
    "options": ["A. 50 J", "B. 500 J", "C. 5000 J", "D. 50000 J"],
    "a": "D. 50000 J",
    "level": "van_dung"
  },
  {
    "q": "Hiện tượng khúc xạ là hiện tượng ánh sáng bị",
    "options": ["A. gãy khúc khi truyền xiên góc qua mặt phân cách giữa hai môi trường trong suốt", "B. giảm cường độ khi truyền qua mặt phân cách giữa hai môi trường trong suốt", "C. hắt lại môi trường cũ khi truyền tới mặt phân cách giữa hai môi trường trong suốt", "D. thay đổi màu sắc khi truyền qua mặt phân cách giữa hai môi trường trong suốt"],
    "a": "A. gãy khúc khi truyền xiên góc qua mặt phân cách giữa hai môi trường trong suốt",
    "level": "nhan_biet"
  },
  {
    "q": "Công thức liên hệ công suất của dòng điện, cường độ dòng điện, trên một đoạn mạch giữa hai đầu có hiệu điện thế U là",
    "options": ["A. P = U.I", "B. P = U/I", "C. P = I/U", "D. P = U²/I"],
    "a": "A. P = U.I",
    "level": "nhan_biet"
  },
  {
    "q": "Phát biểu nào sau đây không đúng đối với đoạn mạch gồm các điện trở mắc nối tiếp?",
    "options": ["A. Cường độ dòng điện là như nhau tại mọi vị trí của đoạn mạch", "B. Hiệu điện thế giữa hai đầu đoạn mạch bằng tổng các hiệu điện thế giữa hai đầu mỗi điện trở mắc trong đoạn mạch", "C. Hiệu điện thế giữa hai đầu đoạn mạch bằng hiệu điện thế giữa hai đầu mỗi điện trở mắc trong đoạn mạch", "D. Hiệu điện thế giữa hai đầu mỗi điện trở mắc trong đoạn mạch tỉ lệ thuận với điện trở đó"],
    "a": "C. Hiệu điện thế giữa hai đầu đoạn mạch bằng hiệu điện thế giữa hai đầu mỗi điện trở mắc trong đoạn mạch",
    "level": "thong_hieu"
  },
  {
    "q": "Nội dung định luật Ohm là",
    "options": ["A. cường độ dòng điện chạy qua dây dẫn tỉ lệ với hiệu điện thế giữa hai đầu dây dẫn và tỉ lệ với điện trở của dây", "B. cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế giữa hai đầu dây dẫn và không tỉ lệ với điện trở của dây", "C. cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế giữa hai đầu dây dẫn và tỉ lệ nghịch với điện trở của dây", "D. cường độ dòng điện chạy qua dây dẫn tỉ lệ nghịch với hiệu điện thế giữa hai đầu dây dẩn và tỉ lệ thuận với điện trở của dây"],
    "a": "C. cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế giữa hai đầu dây dẫn và tỉ lệ nghịch với điện trở của dây",
    "level": "thong_hieu"
  },
  {
    "q": "Hai điện trở R₁ và R₂ được mắc song song với nhau, trong đó R₁ = 2R₂, dòng điện mạch chính có cường độ I = 1,2 A và dòng điện đi qua điện trở R₂ có cường độ I₂ = 0,4 A. Giá trị điện trở R₂ là",
    "options": ["A. 10 Ω", "B. 12 Ω", "C. 15 Ω", "D. 13 Ω"],
    "a": "B. 12 Ω",
    "level": "van_dung"
  },
  {
    "q": "Dòng điện xoay chiều là",
    "options": ["A. dòng điện luân phiên đổi chiều", "B. dòng điện không đổi", "C. dòng điện có chiều từ trái qua phải", "D. dòng điện có một chiều cố định"],
    "a": "A. dòng điện luân phiên đổi chiều",
    "level": "nhan_biet"
  },
  {
    "q": "Dòng điện xoay chiều không có tác dụng gì?",
    "options": ["A. Tác dụng hóa học", "B. Tác dụng phát sáng", "C. Tác dụng từ", "D. Tác dụng sinh lí"],
    "a": "A. Tác dụng hóa học",
    "level": "thong_hieu"
  },
  {
    "q": "Nước từ đại dương bốc hơi được gió đưa vào lục địa gây mưa rơi xuống thành các dạng nước rồi đổ ra đại dương, hiện tượng đó là",
    "options": ["A. vòng tuần hoàn địa chất", "B. vòng tuần hoàn nhỏ của nước", "C. vòng tuần hoàn của sinh vật", "D. vòng tuần hoàn lớn của nước"],
    "a": "D. vòng tuần hoàn lớn của nước",
    "level": "nhan_biet"
  },
  {
    "q": "Năng lượng tái tạo vẫn tồn tại một số hạn chế là",
    "options": ["A. khả năng phát triển cao", "B. phụ thuộc vào tình trạng thời tiết", "C. giảm thiểu tác động của biến đổi khí hậu", "D. tăng độ phụ thuộc vào nguồn năng lượng hóa thạch"],
    "a": "B. phụ thuộc vào tình trạng thời tiết",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật có khối lượng 2 kg đang chuyển động với vận tốc 3 m/s. Động năng của vật là:",
    "options": ["A. 3 J", "B. 6 J", "C. 9 J", "D. 18 J"],
    "a": "C. 9 J",
    "level": "nhan_biet"
  },
  {
    "q": "Thế năng hấp dẫn của một vật phụ thuộc vào yếu tố nào sau đây?",
    "options": ["A. Khối lượng, độ cao so với mốc chọn thế năng, gia tốc trọng trường", "B. Vận tốc và khối lượng", "C. Gia tốc và độ cao", "D. Thể tích và độ cao"],
    "a": "A. Khối lượng, độ cao so với mốc chọn thế năng, gia tốc trọng trường",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật có cơ năng 50 J. Tại vị trí nào vật có động năng 20 J thì thế năng của nó bằng bao nhiêu?",
    "options": ["A. 30 J", "B. 20 J", "C. 50 J", "D. 70 J"],
    "a": "A. 30 J",
    "level": "van_dung"
  },
  {
    "q": "Một lực 20 N tác dụng vào vật làm vật dịch chuyển 5 m theo phương của lực. Công của lực là:",
    "options": ["A. 100 J", "B. 25 J", "C. 200 J", "D. 5 J"],
    "a": "A. 100 J",
    "level": "thong_hieu"
  },
  {
    "q": "Hiện tượng tia sáng bị gãy khúc khi truyền qua mặt phân cách giữa hai môi trường trong suốt gọi là:",
    "options": ["A. Phản xạ ánh sáng", "B. Tán sắc ánh sáng", "C. Khúc xạ ánh sáng", "D. Phản xạ toàn phần"],
    "a": "C. Khúc xạ ánh sáng",
    "level": "nhan_biet"
  },
  {
    "q": "Trong thí nghiệm với thấu kính hội tụ, ảnh ảo, cùng chiều, lớn hơn vật thu được khi vật đặt:",
    "options": ["A. Ngoài tiêu cự", "B. Tại tiêu điểm", "C. Trong khoảng tiêu cự", "D. Vô cực"],
    "a": "C. Trong khoảng tiêu cự",
    "level": "thong_hieu"
  },
  {
    "q": "Điện trở của một dây dẫn và chiều dài dây có mối quan hệ",
    "options": ["A. tỉ lệ thuận", "B. tỉ lệ nghịch", "C. bằng nhau", "D. không phụ thuộc"],
    "a": "A. tỉ lệ thuận",
    "level": "nhan_biet"
  },
  {
    "q": "Một đoạn mạch gồm hai điện trở R₁ = 6 Ω và R₂ = 3 Ω mắc nối tiếp. Điện trở tương đương là:",
    "options": ["A. 2 Ω", "B. 9 Ω", "C. 18 Ω", "D. 1/2 Ω"],
    "a": "B. 9 Ω",
    "level": "thong_hieu"
  },
  {
    "q": "Đặt hiệu điện thế 12 V vào hai đầu đoạn mạch gồm hai điện trở R₁ = 6 Ω và R₂ = 6 Ω mắc song song. Cường độ dòng điện trong mạch chính là:",
    "options": ["A. 2 A", "B. 1 A", "C. 4 A", "D. 6 A"],
    "a": "C. 4 A",
    "level": "van_dung"
  },
  {
    "q": "Một bóng đèn có ghi 220 V -- 100 W được sử dụng đúng định mức trong 2 giờ. Điện năng tiêu thụ của đèn là:",
    "options": ["A. 0,1 kWh", "B. 0,2 kWh", "C. 0,5 kWh", "D. 2,0 kWh"],
    "a": "B. 0,2 kWh",
    "level": "thong_hieu"
  },
  {
    "q": "Nguyên tắc tạo ra dòng điện xoay chiều dựa vào hiện tượng:",
    "options": ["A. Tĩnh điện học", "B. Cảm ứng điện từ", "C. Quang điện", "D. Nhiệt điện"],
    "a": "B. Cảm ứng điện từ",
    "level": "nhan_biet"
  },
  {
    "q": "Các tai nạn về điện chứng tỏ dòng điện xoay chiều có tác dụng",
    "options": ["A. Tác dụng nhiệt", "B. Tác dụng từ", "C. Tác dụng sinh lí", "D. Tác dụng phát sáng"],
    "a": "C. Tác dụng sinh lí",
    "level": "thong_hieu"
  },
  {
    "q": "Năng lượng mặt trời là dạng năng lượng:",
    "options": ["A. Tái tạo, có thể cạn kiệt", "B. Tái tạo, không cạn kiệt", "C. Hóa thạch, không cạn kiệt", "D. Hóa thạch, có thể cạn kiệt"],
    "a": "B. Tái tạo, không cạn kiệt",
    "level": "nhan_biet"
  },
  {
    "q": "Vòng năng lượng trên Trái Đất bắt nguồn chủ yếu từ:",
    "options": ["A. Năng lượng mặt trời", "B. Năng lượng gió", "C. Năng lượng nước chảy", "D. Năng lượng địa nhiệt"],
    "a": "A. Năng lượng mặt trời",
    "level": "thong_hieu"
  },
  {
    "q": "Đơn vị nào sau đây không phải đơn vị của động năng?",
    "options": ["A. J", "B. kg.m²/s²", "C. N.m", "D. N.s"],
    "a": "D. N.s",
    "level": "nhan_biet"
  },
  {
    "q": "Khi con lắc đơn đến vị trí cao nhất thì",
    "options": ["A. động năng đạt giá trị cực đại", "B. thế năng bằng động năng", "C. thế năng đạt giá trị cực đại", "D. cơ năng bằng không"],
    "a": "C. thế năng đạt giá trị cực đại",
    "level": "thong_hieu"
  },
  {
    "q": "Một ô tô có công suất của động cơ 100kW đang chạy trên đường. Tính công của động cơ thực hiện trong thời gian 10s.",
    "options": ["A. 1000J", "B. 1000000J", "C. 10000J", "D. 100000J"],
    "a": "B. 1000000J",
    "level": "van_dung"
  },
  {
    "q": "Một động cơ thực hiện 1000J trong thời gian 5 giây. Công suất của động cơ là bao nhiêu?",
    "options": ["A. 125 W", "B. 200 W", "C. 500 W", "D. 600 W"],
    "a": "B. 200 W",
    "level": "van_dung"
  },
  {
    "q": "Hiện tượng khúc xạ ánh sáng là hiện tượng tia sáng tới khi gặp mặt phân cách giữa hai môi trường:",
    "options": ["A. Bị hắt trở lại môi trường cũ", "B. Bị hấp thụ hoàn toàn và không truyền đi vào môi trường trong suốt thứ hai", "C. Tiếp tục đi thẳng vào môi trường trong suốt thứ hai", "D. Bị gãy khúc tại mặt phân cách giữa hai môi trường và đi vào môi trường trong suốt thứ hai"],
    "a": "D. Bị gãy khúc tại mặt phân cách giữa hai môi trường và đi vào môi trường trong suốt thứ hai",
    "level": "nhan_biet"
  },
  {
    "q": "Vật AB đặt trước thấu kính hội tụ cho ảnh A'B'; ảnh và vật nằm về cùng một phía đối với thấu kính. Ảnh A'B'",
    "options": ["A. là ảnh thật, lớn hơn vật", "B. là ảnh ảo, nhỏ hơn vật", "C. ngược chiều với vật", "D. là ảnh ảo, cùng chiều với vật"],
    "a": "D. là ảnh ảo, cùng chiều với vật",
    "level": "thong_hieu"
  },
  {
    "q": "Cường độ dòng điện chạy qua một dây dẫn phụ thuộc như thế nào vào hiệu điện thế giữa hai đầu dây dẫn đó?",
    "options": ["A. Không thay đổi khi thay đổi hiệu điện thế", "B. Tỉ lệ nghịch với hiệu điện thế", "C. Tỉ lệ thuận với hiệu điện thế", "D. Giảm khi hiệu điện thế tăng"],
    "a": "C. Tỉ lệ thuận với hiệu điện thế",
    "level": "nhan_biet"
  },
  {
    "q": "Cường độ dòng điện qua bóng đèn tỉ lệ thuận với hiệu điện thế giữa hai đầu bóng đèn. Điều đó có nghĩa là nếu hiệu điện thế tăng 1,2 lần thì:",
    "options": ["A. Cường độ dòng điện tăng 2,4 lần", "B. Cường độ dòng điện giảm 2,4 lần", "C. Cường độ dòng điện giảm 1,2 lần", "D. Cường độ dòng điện tăng 1,2 lần"],
    "a": "D. Cường độ dòng điện tăng 1,2 lần",
    "level": "thong_hieu"
  },
  {
    "q": "Cho hai điện trở R₁ = R₂ = 20Ω được mắc song song với nhau. Điện trở tương đương của đoạn mạch có giá trị là:",
    "options": ["A. 20Ω", "B. 40Ω", "C. 10Ω", "D. 80Ω"],
    "a": "C. 10Ω",
    "level": "van_dung"
  },
  {
    "q": "Bóng đèn có điện trở 8Ω và cường độ dòng điện định mức là 2A. Tính công suất định mức của bóng đèn?",
    "options": ["A. 32W", "B. 16W", "C. 4W", "D. 0,5W"],
    "a": "A. 32W",
    "level": "van_dung"
  },
  {
    "q": "Trong hiện tượng cảm ứng điện từ ta nhận biết được:",
    "options": ["A. Dòng điện xuất hiện trong cuộn dây dẫn đặt gần nam châm", "B. Dòng điện xuất hiện trong cuộn dây đặt trong từ trường của nam châm", "C. Dòng điện xuất hiện khi một cuộn dây dẫn kín quay trong từ trường của nam châm", "D. Dòng điện xuất hiện trong cuộn dây khi cuộn dây chạm vào nam châm"],
    "a": "C. Dòng điện xuất hiện khi một cuộn dây dẫn kín quay trong từ trường của nam châm",
    "level": "nhan_biet"
  },
  {
    "q": "Tác dụng nào của dòng điện xoay chiều phụ thuộc vào chiều dòng điện?",
    "options": ["A. Tác dụng nhiệt", "B. Tác dụng phát sáng", "C. Tác dụng từ", "D. Tác dụng sinh lí"],
    "a": "C. Tác dụng từ",
    "level": "thong_hieu"
  },
  {
    "q": "Năng lượng hóa thạch được tạo nên từ:",
    "options": ["A. Nguồn nhiên liệu tái tạo", "B. Đá chứa ít nhất 50% xác động và thực vật", "C. Chỉ bao gồm dầu mỏ và than đá", "D. Việc phân hủy xác các vật sống qua hàng triệu năm"],
    "a": "D. Việc phân hủy xác các vật sống qua hàng triệu năm",
    "level": "nhan_biet"
  },
  {
    "q": "Nội dung nào sau đây không phải là ưu điểm của năng lượng mặt trời?",
    "options": ["A. Nguồn năng lượng luôn sẵn trong thiên nhiên", "B. Không phát thải các chất gây ô nhiễm", "C. Không gây hiệu ứng nhà kính", "D. Giá thành sản xuất pin mặt trời rẻ"],
    "a": "D. Giá thành sản xuất pin mặt trời rẻ",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật có khối lượng 2 kg đang chuyển động với vận tốc 5 m/s. Động năng của vật là",
    "options": ["A. 10 J", "B. 25 J", "C. 50 J", "D. 100 J"],
    "a": "B. 25 J",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật khối lượng 1,5 kg ở độ cao 10 m so với mặt đất. Lấy g =10m/s². Thế năng của vật là",
    "options": ["A. 15 J", "B. 100 J", "C. 150 J", "D. 300 J"],
    "a": "C. 150 J",
    "level": "thong_hieu"
  },
  {
    "q": "Cơ năng của vật bằng",
    "options": ["A. tổng động năng và thế năng của vật", "B. tích động năng và thế năng của vật", "C. hiệu động năng và thế năng của vật", "D. tổng động năng và công suất của vật"],
    "a": "A. tổng động năng và thế năng của vật",
    "level": "nhan_biet"
  },
  {
    "q": "Một máy bơm nước có công suất 500 W hoạt động trong 10 phút. Công của máy bơm thực hiện là",
    "options": ["A. 3 000 J", "B. 30 000 J", "C. 300 000 J", "D. 3 000 000 J"],
    "a": "C. 300 000 J",
    "level": "van_dung"
  },
  {
    "q": "Hiện tượng tia sáng truyền từ môi trường trong suốt này sang môi trường trong suốt khác bị gãy khúc tại mặt phân cách gọi là",
    "options": ["A. phản xạ ánh sáng", "B. tán sắc ánh sáng", "C. khúc xạ ánh sáng", "D. phản xạ toàn phần"],
    "a": "C. khúc xạ ánh sáng",
    "level": "nhan_biet"
  },
  {
    "q": "Khi chiếu một chùm tia sáng đơn sắc từ không khí vào lăng kính thủy tinh, hiện tượng nào xảy ra?",
    "options": ["A. Tia sáng chỉ phản xạ lại trong không khí", "B. Tia sáng đi thẳng, không bị lệch", "C. Tia sáng bị khúc xạ lệch về phía đáy lăng kính", "D. Tia sáng biến mất"],
    "a": "C. Tia sáng bị khúc xạ lệch về phía đáy lăng kính",
    "level": "thong_hieu"
  },
  {
    "q": "Điện trở của dây dẫn phụ thuộc vào",
    "options": ["A. vật liệu, chiều dài và tiết diện của dây", "B. cường độ dòng điện qua dây", "C. hiệu điện thế hai đầu dây", "D. công suất của dòng điện"],
    "a": "A. vật liệu, chiều dài và tiết diện của dây",
    "level": "nhan_biet"
  },
  {
    "q": "Biểu thức định luật Ohm là",
    "options": ["A. I = U/R", "B. U = I+R", "C. R = U.I", "D. U = R - I"],
    "a": "A. I = U/R",
    "level": "nhan_biet"
  },
  {
    "q": "Hai điện trở R₁ = 6 Ω, R₂ = 3 Ω mắc song song. Điện trở tương đương của đoạn mạch là",
    "options": ["A. 9 Ω", "B. 2 Ω", "C. 18 Ω", "D. 4,5 Ω"],
    "a": "B. 2 Ω",
    "level": "thong_hieu"
  },
  {
    "q": "Một bóng đèn có công suất định mức 40 W được sử dụng đúng định mức trong 2 giờ. Điện năng tiêu thụ của bóng đèn là",
    "options": ["A. 0,08 kWh", "B. 0,8 kWh", "C. 8 kWh", "D. 80 kWh"],
    "a": "A. 0,08 kWh",
    "level": "van_dung"
  },
  {
    "q": "Nguyên tắc tạo ra dòng điện xoay chiều dựa vào",
    "options": ["A. hiện tượng cảm ứng điện từ", "B. hiện tượng điện phân", "C. hiện tượng nhiệt điện", "D. hiện tượng quang điện"],
    "a": "A. hiện tượng cảm ứng điện từ",
    "level": "nhan_biet"
  },
  {
    "q": "Dòng điện xoay chiều có thể gây ra tác dụng nào sau đây?",
    "options": ["A. Quang học", "B. Điện phân", "C. Nhiệt, từ", "D. Nhiệt, từ, sinh lý"],
    "a": "D. Nhiệt, từ, sinh lý",
    "level": "thong_hieu"
  },
  {
    "q": "Vòng năng lượng trên Trái Đất chủ yếu liên quan đến:",
    "options": ["A. Sự chuyển động của các hành tinh", "B. Năng lượng Mặt Trời", "C. Năng lượng hạt nhân", "D. Năng lượng gió"],
    "a": "B. Năng lượng Mặt Trời",
    "level": "nhan_biet"
  },
  {
    "q": "Năng lượng tái tạo là",
    "options": ["A. năng lượng sử dụng một lần rồi cạn kiệt", "B. năng lượng hóa thạch như than đá, dầu mỏ", "C. năng lượng có khả năng tái sinh, không cạn kiệt", "D. năng lượng từ phản ứng hạt nhân"],
    "a": "C. năng lượng có khả năng tái sinh, không cạn kiệt",
    "level": "thong_hieu"
  },
  {
    "q": "Trong các vật sau, vật nào không có động năng?",
    "options": ["A. Hòn bi nằm yên trên mặt sàn", "B. Hòn bi lăn trên sàn nhà", "C. Máy bay đang bay", "D. Viên đạn đang bay"],
    "a": "A. Hòn bi nằm yên trên mặt sàn",
    "level": "nhan_biet"
  },
  {
    "q": "Nếu chọn mặt đất làm mốc để tính thế năng thì trong các vật sau đây vật nào không có thế năng?",
    "options": ["A. Máy bay đang bay", "B. Xe máy đang chuyển động trên mặt đường", "C. Chiếc lá đang rơi", "D. Quyển sách đặt trên bàn"],
    "a": "B. Xe máy đang chuyển động trên mặt đường",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật có khối lượng 1 kg rơi tự do từ độ cao h = 10 m xuống đất. Động năng của vật ngay trước khi chạm đất là",
    "options": ["A. 100 J", "B. 1 J", "C. 10 J", "D. 0,1 J"],
    "a": "A. 100 J",
    "level": "van_dung"
  },
  {
    "q": "Một máy cơ có công suất P = 160W, máy đã sinh ra công A= 720000J. Vậy thời gian máy đã hoạt động là",
    "options": ["A. 1 giờ", "B. 1 giờ 5 phút", "C. 1 giờ 10 phút", "D. 1 giờ 15 phút"],
    "a": "D. 1 giờ 15 phút",
    "level": "van_dung"
  },
  {
    "q": "Trong hiện tượng khúc xạ ánh sáng. So với góc tới, góc khúc xạ",
    "options": ["A. nhỏ hơn", "B. lớn hơn hoặc bằng", "C. lớn hơn", "D. nhỏ hơn hoặc lớn hơn"],
    "a": "D. nhỏ hơn hoặc lớn hơn",
    "level": "thong_hieu"
  },
  {
    "q": "Đặt ngón tay trước một thấu kính, rồi đặt mắt sau thấu kính ta thấy một ảnh cùng chiều và nhỏ hơn chính ngón tay đó. Ảnh đó là ảnh thật hay ảnh ảo? Thấu kính là hội tụ hay phân kì?",
    "options": ["A. Ảnh đó là ảnh thật, thấu kính đó là thấu kính hội tụ", "B. Ảnh đó là ảnh ảo, thấu kính đó là thấu kính hội tụ", "C. Ảnh đó là ảnh thật, thấu kính đó là thấu kính phân kì", "D. Ảnh đó là ảnh ảo, thấu kính đó là thấu kính phân kì"],
    "a": "D. Ảnh đó là ảnh ảo, thấu kính đó là thấu kính phân kì",
    "level": "thong_hieu"
  },
  {
    "q": "Đồ thị biểu diễn sự phụ thuộc của cường độ dòng điện vào hiệu điện thế giữa hai đầu dây dẫn có dạng là",
    "options": ["A. một đường thẳng đi qua gốc tọa độ", "B. một đường cong đi qua gốc tọa độ", "C. một đường thẳng không đi qua gốc tọa độ", "D. một đường cong không đi qua gốc tọa độ"],
    "a": "A. một đường thẳng đi qua gốc tọa độ",
    "level": "nhan_biet"
  },
  {
    "q": "Cho ba điện trở R₁=R₂=R₃=R mắc song song với nhau. Điện trở tương đương đương của đoạn mạch nhận giá trị nào trong các giá trị sau đây?",
    "options": ["A. R/3", "B. 2R", "C. 3R", "D. R"],
    "a": "A. R/3",
    "level": "thong_hieu"
  },
  {
    "q": "Cho một mạch điện gồm 3 điện trở có giá trị lần lượt là R1 = 8Ω, R2 = 12Ω, R3 = 6Ω mắc nối tiếp nhau. Đặt vào hai đầu đoạn mạch một hiệu điện thế U = 65 V. Cường độ dòng điện qua mạch có thể là",
    "options": ["A. I = 1,5A", "B. I = 2,25A", "C. I = 2,5 A", "D. I = 3A"],
    "a": "C. I = 2,5 A",
    "level": "van_dung"
  },
  {
    "q": "Cho mạch điện có sơ đồ như hình bên. Trong đó điện trở R₁ = 10Ω, R₂ = 20Ω, hiệu điện thế hai đầu đoạn mạch AB bằng 12V. Số chỉ của vôn kế và ampe kế lần lượt là bao nhiêu?",
    "options": ["A. Uᵥ = 4V; Iₐ = 0,4A", "B. Uᵥ = 12V; Iₐ = 0,4A", "C. Uᵥ = 0,6V; Iₐ = 0,4A", "D. Một cặp giá trị khác"],
    "a": "C. Uᵥ = 0,6V; Iₐ = 0,4A",
    "level": "van_dung"
  },
  {
    "q": "Điều kiện để xuất hiện dòng điện cảm ứng trong cuộn dây dẫn kín là",
    "options": ["A. số đường sức từ qua tiết diện dây lúc lớn, lúc nhỏ (biến thiên)", "B. số đường sức từ qua tiết diện dây là rất nhỏ", "C. số đường sức từ qua tiết diện dây là bằng không", "D. số đường sức từ qua tiết diện dây là rất lớn"],
    "a": "A. số đường sức từ qua tiết diện dây lúc lớn, lúc nhỏ (biến thiên)",
    "level": "nhan_biet"
  },
  {
    "q": "Trong y học, tác dụng sinh lý của dòng điện được sử dụng trong",
    "options": ["A. chụp X-quang", "B. chạy điện khi châm cứu", "C. đo điện não đồ", "D. đo huyết áp"],
    "a": "B. chạy điện khi châm cứu",
    "level": "thong_hieu"
  },
  {
    "q": "Ở quá trình quang hợp, thực vật hấp thụ năng lượng mặt trời, chuyển hóa năng lượng mặt trời thành dạng năng lượng nào?",
    "options": ["A. Quang năng", "B. Nhiệt năng", "C. Hóa năng", "D. Động năng"],
    "a": "C. Hóa năng",
    "level": "nhan_biet"
  },
  {
    "q": "Đất nước Hà Lan nổi tiếng với hình ảnh của những chiếc cối xay gió. Theo em, thông qua những chiếc cối xay gió, năng lượng của gió có thể chuyển hóa chủ yếu thành dạng năng lượng nào?",
    "options": ["A. Năng lượng động năng", "B. Năng lượng thế năng", "C. Năng lượng nhiệt năng", "D. Năng lượng hóa năng"],
    "a": "D. Năng lượng hóa năng",
    "level": "thong_hieu"
  },
  {
    "q": "Năng lượng mà vật có được khi chuyển động gọi là gì?",
    "options": ["A. Thế năng", "B. Cơ năng", "C. Động năng", "D. Nhiệt năng"],
    "a": "C. Động năng",
    "level": "nhan_biet"
  },
  {
    "q": "Thả một vật từ độ cao h xuống mặt đất. Hãy cho biết trong quá trình rơi cơ năng đã chuyển hóa như thế nào?",
    "options": ["A. Động năng chuyển hóa thành thế năng", "B. Thế năng chuyển hóa thành động năng", "C. Không có sự chuyển hóa nào", "D. Động năng giảm còn thế năng tăng"],
    "a": "B. Thế năng chuyển hóa thành động năng",
    "level": "nhan_biet"
  },
  {
    "q": "Trong quá trình vật chuyển động, động năng và thế năng của vật có thể chuyển hóa qua lại cho nhau. Hãy cho biết ví dụ nào sau đây nói về sự chuyển hóa này?",
    "options": ["A. Quả bóng được ném lên cao và rơi xuống", "B. Nước chảy từ trên cao xuống thấp làm quay tua bin", "C. Xe đạp di chuyển từ đỉnh dốc xuống chân", "D. Tất cả các ví dụ trên đều là ví dụ về sự chuyển hóa động năng và thế năng của vật"],
    "a": "D. Tất cả các ví dụ trên đều là ví dụ về sự chuyển hóa động năng và thế năng của vật",
    "level": "thong_hieu"
  },
  {
    "q": "Một máy cơ có công suất P = 160W, máy đã sinh ra công A= 720kJ. Vậy thời gian máy đã hoạt động là:",
    "options": ["A. 1 giờ", "B. 1 giờ 5 phút", "C. 1 giờ 10 phút", "D. 1 giờ 15 phút"],
    "a": "D. 1 giờ 15 phút",
    "level": "van_dung"
  },
  {
    "q": "Khi tia sáng đi từ môi trường nước sang môi trường không khí:",
    "options": ["A. góc khúc xạ lớn hơn góc tới", "B. góc khúc xạ nhỏ hơn góc tới", "C. góc khúc xạ bằng góc tới", "D. không xác định được"],
    "a": "A. góc khúc xạ lớn hơn góc tới",
    "level": "nhan_biet"
  },
  {
    "q": "Dùng thấu kính phân kì quan sát dòng chữ, ta thấy:",
    "options": ["A. dòng chữ lớn hơn so với khi nhìn bình thường", "B. dòng chữ như khi nhìn bình thường", "C. dòng chữ nhỏ hơn so với khi nhìn bình thường", "D. không nhìn được dòng chữ"],
    "a": "C. dòng chữ nhỏ hơn so với khi nhìn bình thường",
    "level": "thong_hieu"
  },
  {
    "q": "Trong đoạn mạch mắc nối tiếp, công thức nào sau đây là đúng?",
    "options": ["A. U = U₁ = U₂ = ... = Uₙ", "B. I = I₁ + I₂ + ... + Iₙ", "C. Rₜđ = R₁ + R₂ + ... + Rₙ", "D. Rₜđ = R₁ = R₂ = ... = Rₙ"],
    "a": "C. Rₜđ = R₁ + R₂ + ... + Rₙ",
    "level": "nhan_biet"
  },
  {
    "q": "Đoạn mạch gồm các điện trở mắc nối tiếp không có đặc điểm nào dưới đây?",
    "options": ["A. giữa hai đầu đoạn mạch có hiệu điện thế", "B. đoạn mạch có chứa nhiều mạch rẽ nhánh", "C. dòng điện chạy qua các điện trở của đoạn mạch có cùng cường độ dòng điện", "D. đoạn mạch gồm những điện trở mắc liên tiếp với nhau và không có mạch rẽ"],
    "a": "B. đoạn mạch có chứa nhiều mạch rẽ nhánh",
    "level": "nhan_biet"
  },
  {
    "q": "Trên nhiều dụng cụ điện trong gia đình thường có ghi số Watt (W). Số Watt này có ý nghĩa gì?",
    "options": ["A. Công suất tiêu thụ điện của dụng cụ điện khi nó được sử dụng với những hiệu điện thế nhỏ hơn 220V", "B. Công suất tiêu thụ điện của dụng cụ khi nó được sử dụng với đúng hiệu điện thế 220V", "C. Công mà dòng điện thực hiện trong một phút khi dụng cụ này được sử dụng với đúng hiệu điện thế 220V", "D. Điện năng mà dụng cụ tiêu thụ trong một giờ khi nó được sử dụng với đúng hiệu điện thế 220V"],
    "a": "B. Công suất tiêu thụ điện của dụng cụ khi nó được sử dụng với đúng hiệu điện thế 220V",
    "level": "thong_hieu"
  },
  {
    "q": "Hai điện trở R₁ = 5 Ω, R₂ = 15 Ω mắc nối tiếp. Cường độ dòng điện qua điện trở là R₁ là 2A. Phát biểu nào sau đây là sai?",
    "options": ["A. Điện trở tương đương của cả đoạn mạch là 20 Ω", "B. Cường độ dòng điện qua điện trở R₂ là 2.A", "C. Cường độ dòng điện chạy trong mạch là 2.A", "D. Hiệu điện thế giữa hai đầu đoạn mạch là là 20 V"],
    "a": "D. Hiệu điện thế giữa hai đầu đoạn mạch là là 20 V",
    "level": "van_dung"
  },
  {
    "q": "Dòng điện cảm ứng chỉ xuất hiện trong cuộn dây dẫn kín trong thời gian có sự..... qua tiết diện S của cuộn dây.",
    "options": ["A. biến đổi của cường độ dòng điện", "B. biến đổi của thời gian", "C. biến đổi của dòng điện cảm ứng", "D. biến đổi của số đường sức từ"],
    "a": "D. biến đổi của số đường sức từ",
    "level": "nhan_biet"
  },
  {
    "q": "Điều kiện để xuất hiện dòng điện cảm ứng trong cuộn dây dẫn kín là gì?",
    "options": ["A. Cuộn dây phải đặt trong từ trường", "B. Nam châm đứng yên trong từ trường", "C. Số đường sức từ xuyên qua tiết diện cuộn dây dẫn kín phải biến thiên", "D. Cả A, B và C đều đúng"],
    "a": "C. Số đường sức từ xuyên qua tiết diện cuộn dây dẫn kín phải biến thiên",
    "level": "thong_hieu"
  },
  {
    "q": "Nguồn phát điện gây ô nhiễm môi trường nhiều nhất là:",
    "options": ["A. pin năng lượng mặt trời", "B. nhà máy phát điện gió", "C. nhà máy thủy điện", "D. nhà máy nhiệt điện"],
    "a": "D. nhà máy nhiệt điện",
    "level": "nhan_biet"
  },
  {
    "q": "Các thiết bị chuyển đổi năng lượng từ sóng biển như thiết bị dạng phao kéo, thiết bị dạng phao nổi... Các thiết bị này hoạt động dựa vào nguyên tắc biến đổi cơ năng của sóng biển thành",
    "options": ["A. quang năng", "B. hóa năng", "C. nhiệt năng", "D. điện năng"],
    "a": "D. điện năng",
    "level": "thong_hieu"
  },
  {
    "q": "Vật nào dưới đây có động năng?",
    "options": ["A. Quả bóng nằm yên trên mặt đất", "B. Viên phấn đặt trên bàn", "C. Chiếc xe đạp đang chạy trên đường", "D. Quyển sách đặt trong cặp"],
    "a": "C. Chiếc xe đạp đang chạy trên đường",
    "level": "nhan_biet"
  },
  {
    "q": "Một vật có khối lượng m được đưa lên cao so với mặt đất một độ cao h. Khi đó vật có:",
    "options": ["A. Thế năng trọng trường", "B. Động năng", "C. Không có năng lượng cơ học", "D. Vừa có động năng vừa có thế năng"],
    "a": "A. Thế năng trọng trường",
    "level": "thong_hieu"
  },
  {
    "q": "Một quả bóng khối lượng 0,5 kg đang lăn trên mặt đất với vận tốc 4 m/s. Động năng của quả bóng là:",
    "options": ["A. 2 J", "B. 4 J", "C. 8 J", "D. 16 J"],
    "a": "B. 4 J",
    "level": "van_dung"
  },
  {
    "q": "Một vật có khối lượng 2 kg được nâng lên độ cao 5 m so với mặt đất. Lấy g=10 m/s². Thế năng của vật so với mặt đất là:",
    "options": ["A. 10 J", "B. 50 J", "C. 100 J", "D. 200 J"],
    "a": "C. 100 J",
    "level": "van_dung"
  },
  {
    "q": "Hiện tượng nào sau đây là sự khúc xạ ánh sáng?",
    "options": ["A. Ảnh của người soi gương phẳng", "B. Bóng cây in trên mặt đất", "C. Chiếc đũa cắm một phần vào cốc nước trông như bị gãy khúc", "D. Hình ảnh phản chiếu trên mặt hồ"],
    "a": "C. Chiếc đũa cắm một phần vào cốc nước trông như bị gãy khúc",
    "level": "nhan_biet"
  },
  {
    "q": "Một vật sáng đặt trước thấu kính hội tụ, trong khoảng từ tiêu điểm đến thấu kính. Ảnh của vật qua thấu kính sẽ như thế nào?",
    "options": ["A. Ảnh thật, ngược chiều, nhỏ hơn vật", "B. Ảnh thật, ngược chiều, lớn hơn vật", "C. Ảnh ảo, cùng chiều, lớn hơn vật", "D. Ảnh ảo, cùng chiều, nhỏ hơn vật"],
    "a": "C. Ảnh ảo, cùng chiều, lớn hơn vật",
    "level": "thong_hieu"
  },
  {
    "q": "Trong mạch điện mắc nối tiếp hai điện trở, đại lượng nào sau đây giống nhau ở hai điện trở?",
    "options": ["A. Hiệu điện thế", "B. Cường độ dòng điện", "C. Công suất tỏa nhiệt", "D. Điện trở"],
    "a": "B. Cường độ dòng điện",
    "level": "thong_hieu"
  },
  {
    "q": "Trong các phát biểu sau, phát biểu nào đúng với định luật Ôm?",
    "options": ["A. Cường độ dòng điện tỉ lệ nghịch với điện trở và hiệu điện thế", "B. Cường độ dòng điện tỉ lệ thuận với hiệu điện thế và tỉ lệ nghịch với điện trở", "C. Cường độ dòng điện trong dây dẫn chỉ phụ thuộc vào điện trở", "D. Cường độ dòng điện trong dây dẫn chỉ phụ thuộc vào hiệu điện thế"],
    "a": "B. Cường độ dòng điện tỉ lệ thuận với hiệu điện thế và tỉ lệ nghịch với điện trở",
    "level": "nhan_biet"
  },
  {
    "q": "Hai điện trở R1=6 Ω và R2=12 Ω được mắc nối tiếp vào hiệu điện thế U=18V. Cường độ dòng điện chạy trong mạch là:",
    "options": ["A. 0,5 A", "B. 1,0 A", "C. 1,5 A", "D. 2,0 A"],
    "a": "B. 1,0 A",
    "level": "van_dung"
  },
  {
    "q": "Một mạch điện gồm R₁ =4 Ω và R₂ =6 Ω mắc song song với nhau, rồi mắc nối tiếp với điện trở R3=10 Ω. Đặt vào hai đầu đoạn mạch hiệu điện thế U=24 V. Cường độ dòng điện chạy trong mạch là:",
    "options": ["A. 1,2 A", "B. 1,5 A", "C. 2,0 A", "D. 2,4 A"],
    "a": "C. 2,0 A",
    "level": "van_dung"
  },
  {
    "q": "Dòng điện xoay chiều được tạo ra dựa trên hiện tượng nào?",
    "options": ["A. Hiện tượng phản xạ ánh sáng", "B. Hiện tượng khúc xạ ánh sáng", "C. Hiện tượng cảm ứng điện từ", "D. Hiện tượng điện phân"],
    "a": "C. Hiện tượng cảm ứng điện từ",
    "level": "nhan_biet"
  },
  {
    "q": "Nguyên tắc tạo ra dòng điện xoay chiều là:",
    "options": ["A. Dựa vào sự nhiễm điện do cọ xát", "B. Dựa vào sự biến đổi số đường sức từ qua khung dây dẫn kín, làm xuất hiện dòng điện cảm ứng", "C. Dựa vào sự phóng điện giữa hai cực của nguồn điện", "D. Dựa vào sự dẫn điện của chất điện phân"],
    "a": "B. Dựa vào sự biến đổi số đường sức từ qua khung dây dẫn kín, làm xuất hiện dòng điện cảm ứng",
    "level": "thong_hieu"
  },
  {
    "q": "Tại sao đốt nhiên liệu hóa thạch có hại cho môi trường?",
    "options": ["A. đốt nhiên liệu hóa thạch làm phá hủy tầng ozone", "B. đốt nhiên liệu hóa thạch khiến tăng thêm thủy ngân có hại cho đường thủy", "C. Những đám mây do đốt nhiên liệu hóa thạch tạo ra mang lại mưa và lũ lụt quá mức", "D. Các khí phát ra khi đốt nhiên liệu hóa thạch dẫn đến thay đổi khí hậu toàn cầu"],
    "a": "D. Các khí phát ra khi đốt nhiên liệu hóa thạch dẫn đến thay đổi khí hậu toàn cầu",
    "level": "thong_hieu"
  },
  {
    "q": "Phát biểu nào sau đây là đúng khi nói về tiết kiệm điện?",
    "options": ["A. Tiết kiệm điện trong gia đình không liên quan đến vấn đề ô nhiễm môi trường", "B. Dùng điện lãng phí sẽ gây nguy hiểm tới tính mạng con người", "C. Giảm bớt chi phí cho gia đình và tiết kiệm tài nguyên cho đất nước", "D. Dùng điện nhiều sẽ làm dây dẫn dễ hỏng và dễ cháy, chập điện"],
    "a": "C. Giảm bớt chi phí cho gia đình và tiết kiệm tài nguyên cho đất nước",
    "level": "nhan_biet"
  },
  {
    "q": "Động năng của một vật phụ thuộc vào yếu tố nào?",
    "options": ["A. Khối lượng và tốc độ của vật", "B. Khối lượng và độ cao của vật", "C. Tốc độ và hình dạng của vật", "D. Độ cao và hình dạng của vật"],
    "a": "A. Khối lượng và tốc độ của vật",
    "level": "nhan_biet"
  },
  {
    "q": "Cơ năng của một vật được xác định bởi",
    "options": ["A. tổng nhiệt năng và động năng", "B. tổng động năng và thế năng", "C. tổng thế năng và nhiệt năng", "D. tổng hoá năng và động năng"],
    "a": "B. tổng động năng và thế năng",
    "level": "nhan_biet"
  },
  {
    "q": "Một chiếc xe có khối lượng 1 000 kg chuyển động với tốc độ 20 m/s. Tính công cần thiết để đưa xe từ trạng thái đứng yên lên tốc độ này.",
    "options": ["A. 200 000 J", "B. 400 000 J", "C. 100 000 J", "D. 500 000 J"],
    "a": "A. 200 000 J",
    "level": "thong_hieu"
  },
  {
    "q": "Một công nhân dùng sức kéo một vật nặng 500 N lên cao 10 m trong thời gian 0,5 phút. Tính công suất cần thiết mà công nhân thực hiện.",
    "options": ["A. 100 W", "B. 50 W", "C. 166,7 W", "D. 10 W"],
    "a": "C. 166,7 W",
    "level": "van_dung"
  },
  {
    "q": "Chiếu một chùm tia sáng song song tới thấu kính hội tụ, chùm tia ló thu được là chùm",
    "options": ["A. hội tụ", "B. song song", "C. phân kì", "D. sáng hội tụ tại quang tâm của thấu kính"],
    "a": "A. hội tụ",
    "level": "nhan_biet"
  },
  {
    "q": "Một lăng kính có tiết diện thẳng là tam giác vuông như Hình 7.2. Biết góc ABC = 30°, góc chiết quang của lăng kính có giá trị bằng",
    "options": ["A. 30°", "B. 90°", "C. 60°", "D. 30°, 90° hoặc 60° tuỳ thuộc vào đường truyền của tia sáng"],
    "a": "D. 30°, 90° hoặc 60° tuỳ thuộc vào đường truyền của tia sáng",
    "level": "thong_hieu"
  },
  {
    "q": "Điện trở của dây dẫn không phụ thuộc vào yếu tố nào dưới đây?",
    "options": ["A. Vật liệu làm dây dẫn", "B. Khối lượng riêng của chất làm dây dẫn", "C. Chiều dài dây dẫn", "D. Tiết diện dây dẫn"],
    "a": "B. Khối lượng riêng của chất làm dây dẫn",
    "level": "nhan_biet"
  },
  {
    "q": "Sử dụng loại đèn nào dưới đây tiết kiệm điện nhất?",
    "options": ["A. Đèn compact", "B. Đèn dây tóc nóng sáng", "C. Đèn LED (điốt phát quang)", "D. Đèn ống (đèn huỳnh quang)"],
    "a": "C. Đèn LED (điốt phát quang)",
    "level": "nhan_biet"
  },
  {
    "q": "Một bóng đèn có ghi 220 V - 100 W được mắc vào hiệu điện thế 220 V. Biết đèn được sử dụng trung bình 4 giờ một ngày. Điện năng tiêu thụ của bóng đèn này trong 30 ngày là bao nhiêu?",
    "options": ["A. 12 kW.h", "B. 400 kW.h", "C. 1 440 kW.h", "D. 43 200 kW.h"],
    "a": "A. 12 kW.h",
    "level": "thong_hieu"
  },
  {
    "q": "Trên một bóng đèn có ghi 12 V - 6 W. Đèn này được sử dụng với đúng hiệu điện thế định mức. Khi đó điện trở của đèn là:",
    "options": ["A. 0,5A", "B. 2A", "C. 0,3A", "D. 0,4A"],
    "a": "A. 0,5A",
    "level": "van_dung"
  },
  {
    "q": "Dòng điện cảm ứng xuất hiện trong cuộn dây dẫn kín khi",
    "options": ["A. có đường sức từ xuyên qua tiết diện của cuộn dây dẫn kín", "B. số đường sức từ xuyên qua tiết diện của cuộn dây dẫn kín biến thiên", "C. cuộn dây dẫn kín đặt trong từ trường của nam châm vĩnh cửu", "D. nối hai đầu của cuộn dây dẫn kín với nguồn điện một chiều"],
    "a": "B. số đường sức từ xuyên qua tiết diện của cuộn dây dẫn kín biến thiên",
    "level": "nhan_biet"
  },
  {
    "q": "Phát biểu nào sau đây là đúng về tác dụng nhiệt của dòng điện xoay chiều?",
    "options": ["A. Dòng điện xoay chiều chạy qua vật dẫn làm vật dẫn nóng lên", "B. Dòng điện xoay chiều không chạy qua được điện trở", "C. Dòng điện xoay chiều không có tác dụng nhiệt khi chạy qua động cơ điện", "D. Tác dụng nhiệt của dòng điện xoay chiều làm đèn LED phát sáng"],
    "a": "A. Dòng điện xoay chiều chạy qua vật dẫn làm vật dẫn nóng lên",
    "level": "thong_hieu"
  },
  {
    "q": "Phát biểu nào sau đây là không đúng?",
    "options": ["A. Năng lượng từ gió trên Trái Đất cũng được chuyển hoá từ năng lượng mặt trời", "B. Vòng tuần hoàn của nước cũng là một trong các vòng năng lượng trên Trái Đất", "C. Năng lượng sinh khối dựa vào sự phân huỷ của thực vật nên không có nguồn gốc từ năng lượng mặt trời", "D. Sự chuyển hoá năng lượng giữa các vật sống thông qua trao đổi chất, chuỗi thức ăn, hô hấp ở sinh vật,... cũng có nguồn gốc từ năng lượng mặt trời"],
    "a": "C. Năng lượng sinh khối dựa vào sự phân huỷ của thực vật nên không có nguồn gốc từ năng lượng mặt trời",
    "level": "nhan_biet"
  },
  {
    "q": "Phát biểu nào sau đây là không đúng?",
    "options": ["A. Năng lượng tái tạo chỉ khai thác được theo một mùa trong năm", "B. Khai thác điện gió có thể gây tiếng ồn, làm thay đổi hệ sinh thái", "C. Công nghệ khai thác năng lượng từ sóng biển hiện nay có hiệu suất chưa cao", "D. Các nhà máy thuỷ điện sử dụng năng lượng tái tạo để sản xuất điện"],
    "a": "A. Năng lượng tái tạo chỉ khai thác được theo một mùa trong năm",
    "level": "thong_hieu"
  },
  {
    "q": "Đơn vị nào sau đây không được dùng để đo công suất?",
    "options": ["A. W", "B. J/s", "C. HP", "D. m/s"],
    "a": "D. m/s",
    "level": "nhan_biet"
  },
  {
    "q": "Nếu chọn mặt đất làm mốc để tính thế năng thì trong các vật sau đây vật nào không có thế năng?",
    "options": ["A. Viên đạn đang bay", "B. Lò xo để tự nhiên ở một độ cao so với mặt đất", "C. Hòn bi đang lăn trên mặt đất", "D. Lò xo bị ép đặt ngay trên mặt đất"],
    "a": "C. Hòn bi đang lăn trên mặt đất",
    "level": "nhan_biet"
  },
  {
    "q": "Một tia sáng Mặt Trời truyền qua một lăng kính sẽ ló ra như thế nào?",
    "options": ["A. Bị tách ra thành nhiều tia sáng có màu khác nhau", "B. Vẫn là một tia sáng trắng", "C. Bị tách ra nhiều thành tia sáng trắng", "D. Là một tia sáng trắng có viền màu"],
    "a": "A. Bị tách ra thành nhiều tia sáng có màu khác nhau",
    "level": "nhan_biet"
  },
  {
    "q": "Khi nhìn một hòn sỏi trong chậu nước, ta thấy hòn sỏi như được 'nâng lên'. Hiện tượng này liên quan đến",
    "options": ["A. sự truyền thẳng của ánh sáng", "B. sự khúc xạ của ánh sáng", "C. sự phản xạ của ánh sáng", "D. khả năng quan sát của mắt người"],
    "a": "B. sự khúc xạ của ánh sáng",
    "level": "thong_hieu"
  },
  {
    "q": "Có ba môi trường trong suốt với cùng góc tới. Nếu tia sáng truyền từ (1) vào (2) thì góc khúc xạ là 32°. Nếu tia sáng truyền từ (1) vào (3) thì góc khúc xạ là 43°. Góc tới hạn phản xạ toàn phần ở mặt phân cách (2) và (3) gần giá trị nào nhất sau đây?",
    "options": ["A. 30°", "B. 42°", "C. 46°", "D. 51°"],
    "a": "D. 51°",
    "level": "van_dung"
  },
  {
    "q": "Một người quan sát vật AB qua một thấu kính phân kì, đặt cách mắt 8cm thì thấy ảnh của mọi vật ở xa, gần đều hiện lên cách mắt trong khoảng 64cm trở lại. Xác định tiêu cự của thấu kính phân kì.",
    "options": ["A. 60 cm", "B. 56 cm", "C. 50 cm", "D. 80 cm"],
    "a": "B. 56 cm",
    "level": "van_dung"
  },
  {
    "q": "Trong gia đình, các thiết bị đun nóng bằng điện sứ được sử dụng nhiều điện năng nhất. Biện pháp tiết kiệm nào dưới đây là hợp lý nhất?",
    "options": ["A. Không sử dụng các thiết bị đun nóng bằng điện", "B. Không đun nấu bằng điện", "C. Chỉ sử dụng các thiết bị nung nóng bằng điện trong thời gian tối thiểu cần thiết", "D. Không đun nấu bằng điện và chỉ sử dụng các thiết bị nung nóng khác như bàn là, máy sấy tóc"],
    "a": "C. Chỉ sử dụng các thiết bị nung nóng bằng điện trong thời gian tối thiểu cần thiết",
    "level": "nhan_biet"
  },
  {
    "q": "Hai bóng đèn mắc nối tiếp rồi mắc vào nguồn điện. Để hai đèn cùng sáng bình thường ta phải chọn hai bóng đèn như thế nào?",
    "options": ["A. Có cùng hiệu điện thế định mức", "B. Có cùng công suất định mức", "C. Có cùng cường độ dòng điện định mức", "D. Có cùng điện trở"],
    "a": "C. Có cùng cường độ dòng điện định mức",
    "level": "thong_hieu"
  },
  {
    "q": "Đặt một hiệu điện thế U như nhau vào hai đầu điện trở R1 và R2 biết R2 = 2R1. Nếu hai điện trở R1 và R2 mắc nối tiếp thì cường độ dòng điện là I = 0,2A. Nếu mắc hai điện trở R1 và R2 song song vào hiệu điện thế trên thì cường độ dòng điện trong mạch chính là",
    "options": ["A. 0,2A", "B. 0,3A", "C. 0,4A", "D. 0,9A"],
    "a": "D. 0,9A",
    "level": "van_dung"
  },
  {
    "q": "Công có ích của một động cơ điện trong thời gian làm việc 10 phút là 211200J, hiệu suất của động cơ là 80%. Biết rằng hiệu điện thế của động cơ là 220V, cường độ dòng điện qua động cơ là:",
    "options": ["A. 2A", "B. 2,5A", "C. 3,5A", "D. 4,5A"],
    "a": "A. 2A",
    "level": "van_dung"
  },
  {
    "q": "Trong hiện tượng cảm ứng điện từ ta nhận biết được điều gì?",
    "options": ["A. Dòng điện xuất hiện trong cuộn dây dẫn đặt gần nam châm", "B. Dòng điện xuất hiện trong cuộn dây đặt trong từ trường của nam châm", "C. Dòng điện xuất hiện khi một cuộn dây dẫn kín quay trong từ trường của nam châm", "D. Dòng điện xuất hiện trong cuộn dây khi cuộn dây chạm vào nam châm"],
    "a": "C. Dòng điện xuất hiện khi một cuộn dây dẫn kín quay trong từ trường của nam châm",
    "level": "nhan_biet"
  },
  {
    "q": "Cách nào dưới đây không thể tạo ra dòng điện?",
    "options": ["A. Quay nam châm vĩnh cửu trước ống dây dẫn kín", "B. Đặt nam châm vĩnh cửu trước ống dây dẫn kín", "C. Đưa một cực của nam châm từ ngoài vào trong một cuộn dây dẫn kín", "D. Rút cuộn dây ra xa nam châm vĩnh cửu"],
    "a": "B. Đặt nam châm vĩnh cửu trước ống dây dẫn kín",
    "level": "thong_hieu"
  },
  {
    "q": "Đâu không là ưu điểm của các nguồn năng lượng tái tạo?",
    "options": ["A. Ít tác động tiêu cực đến môi trường", "B. Có khả năng bổ sung, tái tạo nhanh chóng", "C. Rẻ tiền, là dạng chất đốt quan trọng trong đời sống cũng như sản xuất", "D. Sẵn có trong tự nhiên để sử dụng"],
    "a": "C. Rẻ tiền, là dạng chất đốt quan trọng trong đời sống cũng như sản xuất",
    "level": "nhan_biet"
  },
  {
    "q": "Đâu là nhược điểm của việc khai thác và sử dụng năng lượng mặt trời?",
    "options": ["A. Khó có khả năng bị cạn kiệt trong tương lai", "B. Không gây ra tiếng ồn", "C. Không phát thải các chất gây ô nhiễm không khí", "D. Hệ thống hấp thụ nhiệt mặt trời có hiệu suất chuyển hóa năng lượng thấp"],
    "a": "D. Hệ thống hấp thụ nhiệt mặt trời có hiệu suất chuyển hóa năng lượng thấp",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật được thả rơi tự do, trong quá trình rơi",
    "options": ["A. động năng của vật không đổi", "B. thế năng của vật không đổi", "C. tổng động năng và thế năng của vật không thay đổi", "D. tổng động năng và thế năng của vật luôn thay đổi"],
    "a": "C. tổng động năng và thế năng của vật không thay đổi",
    "level": "nhan_biet"
  },
  {
    "q": "Trong quá trình dao động của một con lắc đơn thì tại vị trí cân bằng",
    "options": ["A. động năng đạt giá trị cực đại", "B. thế năng đạt giá trị cực đại", "C. cơ năng bằng không", "D. thế năng bằng động năng"],
    "a": "A. động năng đạt giá trị cực đại",
    "level": "thong_hieu"
  },
  {
    "q": "Cơ năng của một vật là",
    "options": ["A. tổng động năng và thế năng của vật", "B. tổng động năng và nhiệt năng của vật", "C. tổng thế năng và quang năng của vật", "D. tổng nhiệt năng mà vật nhận thêm được"],
    "a": "A. tổng động năng và thế năng của vật",
    "level": "nhan_biet"
  },
  {
    "q": "Một vật có khối lượng không đổi đang chuyển động thẳng đều. Khi tốc độ của vật tăng lên gấp đôi thì động năng của vật",
    "options": ["A. giảm một nửa", "B. tăng gấp đôi", "C. không thay đổi", "D. tăng gấp 4 lần"],
    "a": "D. tăng gấp 4 lần",
    "level": "van_dung"
  },
  {
    "q": "Chiết suất tuyệt đối n của môi trường có giá trị",
    "options": ["A. n = c.v", "B. n = n₁/n₂", "C. n = c/v", "D. n = i.r"],
    "a": "C. n = c/v",
    "level": "nhan_biet"
  },
  {
    "q": "Một hòn sỏi nhỏ đặt tại vị trí A trong nước. Mắt đặt trong không khí tại vị trí M nhìn thấy hình ảnh hòn sỏi trong nước tại vị trí B. Các hình bên dưới mô tả đường đi của chùm tia sáng từ hòn sỏi đến mắt. Hình nào mô tả đúng đường đi của các tia sáng?",
    "options": ["A. Hình a và b", "B. Hình c và d", "C. Hình a và c", "D. Hình b và d"],
    "a": "D. Hình b và d",
    "level": "thong_hieu"
  },
  {
    "q": "Dòng điện xoay chiều là",
    "options": ["A. dòng điện không đổi", "B. dòng điện có một chiều cố định", "C. dòng điện luân phiên đổi chiều", "D. dòng diện có chiều từ trái qua phải"],
    "a": "C. dòng điện luân phiên đổi chiều",
    "level": "nhan_biet"
  },
  {
    "q": "Trong thí nghiệm như hình sau, dòng điện xoay chiều xuất hiện trong cuộn dây dẫn kín khi",
    "options": ["A. nam châm và cuộn dây đều quay quanh trục PQ", "B. nam châm đứng yên, cuộn dây quay quanh trục PQ", "C. nam châm đứng yên, cuộn dây quay quanh trục AB", "D. nam châm và cuộn dây chuyển động thẳng cùng chiều với cùng vận tốc"],
    "a": "C. nam châm đứng yên, cuộn dây quay quanh trục AB",
    "level": "thong_hieu"
  },
  {
    "q": "Biết điện trở tương đương của đoạn mạch gồm 2 điện trở R₁, R₂ mắc song song với nhau là 10 Ω. Biết cường độ qua mạch là 2,5A. Tính U₁.",
    "options": ["A. 12 V", "B. 3V", "C. 25V", "D. 30V"],
    "a": "C. 25V",
    "level": "van_dung"
  },
  {
    "q": "Khi đặt vào hai đầu dây dẫn một hiệu điện thế là 12V thì cường độ dòng điện chạy qua nó là 0,6A. Nếu hiệu thế đặt vào hai đầu dây dẫn đó tăng lên đến 36V thì cường độ dòng điện chạy qua nó là bao nhiêu?",
    "options": ["A. 1,2 A", "B. 0,8 A", "C. 0,4 A", "D. 1,8A"],
    "a": "D. 1,8A",
    "level": "van_dung"
  },
  {
    "q": "Một máy biến thế có số vòng dây cuộn sơ cấp gấp 3 lần số vòng dây cuộn thứ cấp thì hiệu điện thế ở hai đầu cuộn thứ cấp so với hiệu điện thế ở hai đầu cuộn sơ cấp sẽ:",
    "options": ["A. Giảm 3 lần", "B. Tăng 3 lần", "C. Giảm 6 lần", "D. Tăng 6 lần"],
    "a": "A. Giảm 3 lần",
    "level": "thong_hieu"
  },
  {
    "q": "Hãy chỉ ra kết luận không chính xác. Dòng điện xoay chiều có tác dụng gì?",
    "options": ["A. Tác dụng nhiệt", "B. Tác dụng quang", "C. Tác dụng từ", "D. Tác dụng sinh lí"],
    "a": "D. Tác dụng sinh lí",
    "level": "thong_hieu"
  },
  {
    "q": "Khi dùng quạt điện, ta nhận biết năng lượng điện nhờ biểu hiện nào?",
    "options": ["A. Cánh quạt vẫn đứng yên", "B. Cánh quạt bắt đầu quay", "C. Ngửi thấy mùi thơm từ quạt", "D. Thấy không khí xung quanh nóng lên"],
    "a": "B. Cánh quạt bắt đầu quay",
    "level": "nhan_biet"
  },
  {
    "q": "Trên tầng 2 đang có các học sinh ngồi học trong lớp, dạng năng lượng chính xuất hiện ở đây là:",
    "options": ["A. Động năng", "B. Thế năng hấp dẫn", "C. Nhiệt năng", "D. Hóa năng"],
    "a": "B. Thế năng hấp dẫn",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật được ném thẳng đứng lên cao từ mặt đất. Bỏ qua sức cản không khí. Trong quá trình vật đang đi lên, cơ năng của vật:",
    "options": ["A. Chỉ thay đổi khi vật chạm đất", "B. Giảm dần", "C. Không đổi", "D. Tăng dần"],
    "a": "C. Không đổi",
    "level": "nhan_biet"
  },
  {
    "q": "Hai máy nâng A và B cùng thực hiện một công A như nhau trong khoảng thời gian lần lượt là t_A và t_B. Biết t_A < t_B. Quan hệ nào sau đây là đúng về công suất P_A và P_B của hai máy?",
    "options": ["A. Không thể so sánh được", "B. P_A = P_B", "C. P_A < P_B", "D. P_A > P_B"],
    "a": "D. P_A > P_B",
    "level": "thong_hieu"
  },
  {
    "q": "Một lực F có độ lớn 100 N tác dụng vào một vật làm vật dịch chuyển được quãng đường 20 m theo phương hợp với phương của lực F một góc 60°. Công do lực F thực hiện là:",
    "options": ["A. 1000 J", "B. 0 J", "C. 1732 J", "D. 2000 J"],
    "a": "A. 1000 J",
    "level": "van_dung"
  },
  {
    "q": "Một vật khối lượng m = 2 kg đang chuyển động với vận tốc v = 10 m/s ở độ cao h = 5 m so với mặt đất. Cơ năng của vật là:",
    "options": ["A. 300 J", "B. 200 J", "C. 500 J", "D. 100 J"],
    "a": "B. 200 J",
    "level": "van_dung"
  },
  {
    "q": "Hiện tượng khúc xạ ánh sáng là hiện tượng tia sáng bị gãy khúc khi:",
    "options": ["A. Gặp bề mặt phân cách giữa hai môi trường và bị hắt trở lại", "B. Truyền từ môi trường có chiết suất nhỏ sang môi trường có chiết suất lớn", "C. Chiếu xiên góc từ môi trường trong suốt này sang môi trường trong suốt khác", "D. Truyền trong môi trường trong suốt, đồng tính"],
    "a": "C. Chiếu xiên góc từ môi trường trong suốt này sang môi trường trong suốt khác",
    "level": "nhan_biet"
  },
  {
    "q": "Vật sáng AB đặt trước thấu kính hội tụ. Ảnh A′B′ thu được là ảnh ảo. Đặc điểm của ảnh A′B′ so với vật AB là:",
    "options": ["A. Ngược chiều, nhỏ hơn vật", "B. Ngược chiều, lớn hơn vật", "C. Cùng chiều, lớn hơn vật", "D. Cùng chiều, nhỏ hơn vật"],
    "a": "C. Cùng chiều, lớn hơn vật",
    "level": "thong_hieu"
  },
  {
    "q": "Điện trở R của một dây dẫn kim loại không phụ thuộc vào yếu tố nào sau đây?",
    "options": ["A. Hiệu điện thế đặt vào hai đầu dây dẫn", "B. Tiết diện dây dẫn", "C. Chiều dài dây dẫn", "D. Vật liệu làm dây dẫn"],
    "a": "A. Hiệu điện thế đặt vào hai đầu dây dẫn",
    "level": "nhan_biet"
  },
  {
    "q": "Hai điện trở R₁ và R₂ được mắc nối tiếp vào hiệu điện thế U. Gọi I₁, I₂ là cường độ dòng điện qua R₁, R₂ và U₁, U₂ là hiệu điện thế hai đầu R₁, R₂. Kết luận nào sau đây là đúng?",
    "options": ["A. Rₜđ = (R₁+R₂)/(R₁R₂)", "B. I₁ = I₂", "C. U₁ = U₂", "D. I₁ = 2I₂"],
    "a": "B. I₁ = I₂",
    "level": "thong_hieu"
  },
  {
    "q": "Hai điện trở R₁ = 30 Ω và R₂ = 60 Ω được mắc song song vào mạch điện có hiệu điện thế U=12 V. Cường độ dòng điện chạy qua mạch chính là:",
    "options": ["A. 0.4 A", "B. 0.8 A", "C. 0.2 A", "D. 0.6 A"],
    "a": "D. 0.6 A",
    "level": "van_dung"
  },
  {
    "q": "Một bếp điện hoạt động bình thường với hiệu điện thế U = 220 V và cường độ dòng điện I = 5 A. Công suất điện của bếp là:",
    "options": ["A. 44 W", "B. 1100 W", "C. 1100 J", "D. 225 W"],
    "a": "B. 1100 W",
    "level": "van_dung"
  },
  {
    "q": "Dòng điện xoay chiều được tạo ra dựa trên hiện tượng nào sau đây?",
    "options": ["A. Lực Lorentz làm lệch hướng chuyển động của electron", "B. Tương tác giữa hai nam châm", "C. Dòng điện chạy qua dây dẫn sinh ra từ trường", "D. Hiện tượng cảm ứng điện từ"],
    "a": "D. Hiện tượng cảm ứng điện từ",
    "level": "nhan_biet"
  },
  {
    "q": "Dòng điện xoay chiều có các tác dụng sau, ngoại trừ:",
    "options": ["A. Tác dụng quang", "B. Tác dụng hóa học (điện phân)", "C. Tác dụng nhiệt", "D. Tác dụng từ"],
    "a": "B. Tác dụng hóa học (điện phân)",
    "level": "thong_hieu"
  },
  {
    "q": "Nguồn năng lượng nào sau đây là nguồn năng lượng tái tạo?",
    "options": ["A. Khí đốt tự nhiên", "B. Than đá", "C. Năng lượng gió", "D. Dầu mỏ"],
    "a": "C. Năng lượng gió",
    "level": "nhan_biet"
  },
  {
    "q": "Nguồn năng lượng chủ yếu cung cấp cho hầu hết các hoạt động sống và các quá trình tự nhiên trên Trái Đất là:",
    "options": ["A. Năng lượng Mặt Trời", "B. Năng lượng địa nhiệt", "C. Năng lượng hạt nhân", "D. Năng lượng thủy triều"],
    "a": "A. Năng lượng Mặt Trời",
    "level": "thong_hieu"
  },
  {
    "q": "Khi nào một vật có cơ năng?",
    "options": ["A. Khi vật có khối lượng lớn", "B. Khi vật ở độ cao", "C. Khi vật chuyển động hoặc nằm ở độ cao", "D. Khi vật nằm yên"],
    "a": "C. Khi vật chuyển động hoặc nằm ở độ cao",
    "level": "nhan_biet"
  },
  {
    "q": "Động năng của vật phụ thuộc vào yếu tố nào?",
    "options": ["A. Chỉ khối lượng", "B. Chỉ vận tốc", "C. Khối lượng và vận tốc", "D. Trọng lượng"],
    "a": "C. Khối lượng và vận tốc",
    "level": "nhan_biet"
  },
  {
    "q": "Một vật có khối lượng 2 kg rơi tự do từ độ cao 5 m. Tính cơ năng của vật tại điểm bắt đầu rơi.",
    "options": ["A. 10 J", "B. 100 J", "C. 50 J", "D. 200 J"],
    "a": "B. 100 J",
    "level": "van_dung"
  },
  {
    "q": "Trong chuyển động rơi tự do, năng lượng nào chuyển hóa thành năng lượng nào?",
    "options": ["A. Nhiệt năng → Thế năng", "B. Thế năng → Động năng", "C. Động năng → Thế năng", "D. Hóa năng → Cơ năng"],
    "a": "B. Thế năng → Động năng",
    "level": "thong_hieu"
  },
  {
    "q": "Hoàn thành câu phát biểu sau: 'Hiện tượng khúc xạ ánh sáng là hiện tượng tia sáng khi truyền từ môi trường trong suốt này sang môi trường trong suốt khác, tia sáng bị ...... tại mặt phân cách giữa hai môi trường'.",
    "options": ["A. uốn cong", "B. gãy khúc", "C. dừng lại", "D. quay trở lại"],
    "a": "B. gãy khúc",
    "level": "nhan_biet"
  },
  {
    "q": "Hiện tượng nào sau đây là hiện tượng khúc xạ ánh sáng?",
    "options": ["A. Ánh sáng đổi hướng khi truyền từ không khí sang nước", "B. Ánh sáng phản xạ trên gương", "C. Ánh sáng bị hấp thụ", "D. Ánh sáng bị tán sắc qua lăng kính"],
    "a": "A. Ánh sáng đổi hướng khi truyền từ không khí sang nước",
    "level": "thong_hieu"
  },
  {
    "q": "Cường độ dòng điện chạy qua một dây dẫn phụ thuộc như thế nào vào hiệu điện thế giữa hai đầu dây dẫn đó?",
    "options": ["A. Không thay đổi khi thay đổi hiệu điện thế", "B. Tỉ lệ thuận với hiệu điện thế", "C. Tỉ lệ nghịch với hiệu điện thế", "D. Giảm khi hiệu điện thế tăng"],
    "a": "B. Tỉ lệ thuận với hiệu điện thế",
    "level": "nhan_biet"
  },
  {
    "q": "Điện trở tương đương của hai điện trở 2Ω và 3Ω mắc nối tiếp là:",
    "options": ["A. 5Ω", "B. 6Ω", "C. 1,2Ω", "D. 0,4Ω"],
    "a": "A. 5Ω",
    "level": "thong_hieu"
  },
  {
    "q": "Một bóng đèn có ghi 6V - 3W. Cường độ dòng điện qua đèn khi hoạt động bình thường là:",
    "options": ["A. 0,25A", "B. 0,5A", "C. 2A", "D. 1A"],
    "a": "B. 0,5A",
    "level": "van_dung"
  },
  {
    "q": "Nếu điện năng tiêu thụ trong 1 giờ là 0,5 kWh, thì năng lượng tương ứng là bao nhiêu?",
    "options": ["A. 500 J", "B. 1800 J", "C. 1800 kJ", "D. 1800000 J"],
    "a": "D. 1800000 J",
    "level": "van_dung"
  },
  {
    "q": "Ta có thể dùng nam châm nào để tạo ra dòng điện",
    "options": ["A. Nam châm vĩnh cửu", "B. Nam châm điện", "C. Cả Nam châm vĩnh cửu và nam châm điện", "D. Không có loại nam châm nào cả"],
    "a": "C. Cả Nam châm vĩnh cửu và nam châm điện",
    "level": "nhan_biet"
  },
  {
    "q": "Dòng điện xoay chiều có đặc điểm gì?",
    "options": ["A. Không đổi chiều", "B. Có chiều không đổi", "C. Đổi chiều liên tục", "D. Chỉ chạy trong dây dẫn đồng"],
    "a": "C. Đổi chiều liên tục",
    "level": "thong_hieu"
  },
  {
    "q": "Năng lượng gió thuộc loại:",
    "options": ["A. Năng lượng hóa thạch", "B. Năng lượng hạt nhân", "C. Năng lượng tái tạo", "D. Năng lượng hóa học"],
    "a": "C. Năng lượng tái tạo",
    "level": "nhan_biet"
  },
  {
    "q": "Sử dụng năng lượng tái tạo có lợi ích gì?",
    "options": ["A. Gây ô nhiễm môi trường", "B. Làm cạn kiệt tài nguyên", "C. Không gây ô nhiễm và có thể tái tạo lâu dài", "D. Giá thành rẻ hơn nhiên liệu hóa thạch"],
    "a": "C. Không gây ô nhiễm và có thể tái tạo lâu dài",
    "level": "thong_hieu"
  },
  {
    "q": "Khi một vật chuyển động theo phương thẳng đứng trong trọng trường và không có lực cản, đại lượng nào sau đây luôn thay đổi?",
    "options": ["A. Gia tốc của vật", "B. Thế năng của vật", "C. Trọng lực của vật", "D. Khối lượng của vật"],
    "a": "B. Thế năng của vật",
    "level": "nhan_biet"
  },
  {
    "q": "Một nhóm HS đẩy một xe chở đất đi từ A đến B trên một đoạn đường bằng phẳng nằm ngang. Tới B họ đổ hết đất trên xe xuống rồi lại đẩy xe không đi theo đường cũ về A. So sánh công sinh ra ở lượt đi và lượt về. Câu trả lời nào sau đây là đúng?",
    "options": ["A. Công ở lượt đi bằng công ở lượt về vì đoạn đường đi được như nhau", "B. Công ở lượt đi lớn hơn vì lực kéo ở lượt đi lớn hơn lực kéo ở lượt về", "C. Công ở lượt về lớn hơn vì xe không thì đi nhanh hơn", "D. Công ở lượt đi nhỏ hơn vì kéo xe nặng thì đi chậm hơn"],
    "a": "B. Công ở lượt đi lớn hơn vì lực kéo ở lượt đi lớn hơn lực kéo ở lượt về",
    "level": "thong_hieu"
  },
  {
    "q": "Một đầu máy xe lửa kéo một đoàn tàu chuyển động đều với vận tốc 54 km/h. Biết lực kéo của đầu máy là 5.10⁴ N. Công suất của đầu máy đó là",
    "options": ["A. 750 kW", "B. 2700 kW", "C. 75 kW", "D. 270 kW"],
    "a": "A. 750 kW",
    "level": "van_dung"
  },
  {
    "q": "Một xe A có khối lượng 500 kg chuyển động với vận tốc 10 m/s. Một xe B có khối lượng 1000 kg chuyển động với vận tốc 5 m/s. Động năng của xe A và B tương ứng là WđA và WđB. Kết luận đúng là",
    "options": ["A. WđA = WđB", "B. WđA = 2WđB", "C. WđA = 0,5WđB", "D. WđA = 4WđB"],
    "a": "A. WđA = WđB",
    "level": "van_dung"
  },
  {
    "q": "Chọn phát biểu đúng khi nói về ánh sáng trắng.",
    "options": ["A. Ánh sáng trắng được tạo từ bảy ánh sáng màu khác nhau", "B. Ánh sáng trắng được tạo từ ba màu cơ bản là đỏ, xanh lá và xanh dương", "C. Ánh sáng trắng truyền qua lăng kính cho dải ánh sáng màu liên tục từ đỏ đến tím", "D. Ánh sáng trắng là ánh sáng đơn sắc có màu trắng"],
    "a": "C. Ánh sáng trắng truyền qua lăng kính cho dải ánh sáng màu liên tục từ đỏ đến tím",
    "level": "nhan_biet"
  },
  {
    "q": "Vật đặt ở vị trí nào trước thấu kính phân kì cho ảnh trùng với vị trí tiêu điểm",
    "options": ["A. Đặt trong khoảng tiêu cự", "B. Đặt ngoài khoảng tiêu cự", "C. Đặt tại tiêu điểm", "D. Đặt rất xa"],
    "a": "D. Đặt rất xa",
    "level": "thong_hieu"
  },
  {
    "q": "Trên một biến trở con chạy có ghi R_b (100 Ω - 2 A). Phát biểu nào sau đây là đúng về con số 2 A?",
    "options": ["A. Cường độ dòng điện lớn nhất được phép qua biến trở", "B. Cường độ dòng điện bé nhất được phép qua biến trở", "C. Cường độ dòng điện định mức của biến trở", "D. Cường độ dòng điện trung bình qua biến trở"],
    "a": "A. Cường độ dòng điện lớn nhất được phép qua biến trở",
    "level": "nhan_biet"
  },
  {
    "q": "Khi tăng hiệu điện thế giữa hai đầu vật dẫn, cường độ dòng điện chạy qua vật dẫn sẽ:",
    "options": ["A. Tăng lên", "B. Giảm đi", "C. Không thay đổi", "D. Tăng lên theo cấp số nhân"],
    "a": "A. Tăng lên",
    "level": "thong_hieu"
  },
  {
    "q": "Sơ đồ nào dưới đây biểu diễn mạch điện gồm 2 điện trở mắc song song?",
    "options": ["A. Hình 1", "B. Hình 2", "C. Hình 3", "D. Hình 4"],
    "a": "A. Hình 1",
    "level": "van_dung"
  },
  {
    "q": "Cho đoạn mạch có hiệu điện thế hai đầu không đổi, khi điện trở trong mạch được điều chỉnh tăng 2 lần thì trong cùng khoảng thời gian, năng lượng tiêu thụ của mạch",
    "options": ["A. giảm 2 lần", "B. giảm 4 lần", "C. tăng 2 lần", "D. không đổi"],
    "a": "A. giảm 2 lần",
    "level": "van_dung"
  },
  {
    "q": "Dòng điện xoay chiều có những tác dụng nào sau đây:",
    "options": ["A. Tác dụng nhiệt, tác dụng phát sáng, tác dụng từ, tác dụng hóa học", "B. Tác dụng phát sáng, tác dụng từ, tác dụng nhiệt, tác dụng sinh lí", "C. Tác dụng hóa học, tác dụng từ, tác dụng phát sáng, tác dụng sinh lí", "D. Tác dụng nhiệt, tác dụng từ, tác dụng hóa học, tác dụng sinh lí"],
    "a": "B. Tác dụng phát sáng, tác dụng từ, tác dụng nhiệt, tác dụng sinh lí",
    "level": "nhan_biet"
  },
  {
    "q": "Dùng một thanh nam châm và một vòng dây dẫn như hình bên. Dòng điện cảm ứng xuất hiện trong những thời gian nào?",
    "options": ["A. Trong thời gian đưa nam châm lại gần vòng dây", "B. Trong thời gian đưa nam châm ra xa vòng dây", "C. Trong thời gian giữ cố định nam châm trong lòng vòng dây", "D. Trong thời gian đưa nam châm lại gần và ra xa vòng dây"],
    "a": "D. Trong thời gian đưa nam châm lại gần và ra xa vòng dây",
    "level": "thong_hieu"
  },
  {
    "q": "Năng lượng tái tạo là năng lượng từ những nguồn có đặc điểm gì?",
    "options": ["A. Năng lượng tái tạo là năng lượng từ những nguồn liên tục được coi là vô hạn", "B. Năng lượng tái tạo là năng lượng từ những nguồn không liên tục được coi là vô hạn", "C. Năng lượng tái tạo là năng lượng từ nguồn nhiên liệu", "D. Năng lượng tái tạo là năng lượng từ những nguồn có thế tái chế"],
    "a": "A. Năng lượng tái tạo là năng lượng từ những nguồn liên tục được coi là vô hạn",
    "level": "nhan_biet"
  },
  {
    "q": "Năng lượng hóa thạch được tạo nên từ",
    "options": ["A. Nguồn nhiên liệu tái tạo", "B. Đá chứa ít nhất 50% xác động và thực vật", "C. Chỉ bao gồm dầu mỏ và than đá", "D. Việc phân hủy xác các vật sống qua hàng triệu năm"],
    "a": "D. Việc phân hủy xác các vật sống qua hàng triệu năm",
    "level": "thong_hieu"
  },
  {
    "q": "Động năng của một vật phụ thuộc vào yếu tố nào?",
    "options": ["A. Khối lượng và tốc độ của vật", "B. Khối lượng và độ cao của vật", "C. Tốc độ và hình dạng của vật", "D. Độ cao và hình dạng của vật"],
    "a": "A. Khối lượng và tốc độ của vật",
    "level": "nhan_biet"
  },
  {
    "q": "Một vật nhỏ được ném lên từ điểm M phía trên mặt đất; vật lên tới điểm N thì dừng và rơi xuống. Bỏ qua sức cản của không khí. Trong quá trình MN?",
    "options": ["A. thế năng giảm", "B. cơ năng cực đại tại N", "C. cơ năng không đổi", "D. động năng tăng"],
    "a": "C. cơ năng không đổi",
    "level": "nhan_biet"
  },
  {
    "q": "Hai vật có khối lượng là m và 2m đặt ở hai độ cao lần lượt là 2h và h. Thế năng trọng trường của vật thức nhất so với vật thứ hai là",
    "options": ["A. bằng hai lần vật thứ hai", "B. bằng một nửa vật thứ hai", "C. bằng vật thứ hai", "D. bằng 1/4 vật thứ hai"],
    "a": "C. bằng vật thứ hai",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật khối lượng 1500 kg được cần cẩu nâng đều lên độ cao 20 m trong khoảng thời gian 15 s. Công suất trung bình của lực nâng của cần cẩu là",
    "options": ["A. 15000 W", "B. 20000 W", "C. 22500 W", "D. 1000 W"],
    "a": "B. 20000 W",
    "level": "van_dung"
  },
  {
    "q": "Trong hiện tượng khúc xạ ánh sáng. Khi ánh sáng truyền từ môi trường không khí vào môi trường nước. So với góc tới, góc khúc xạ",
    "options": ["A. nhỏ hơn", "B. lớn hơn hoặc bằng", "C. lớn hơn", "D. nhỏ hơn hoặc lớn hơn"],
    "a": "A. nhỏ hơn",
    "level": "nhan_biet"
  },
  {
    "q": "Đặt một vật AB hình mũi tên vuông góc với trục chính của thấu kính hội tụ tiêu cự f và cách thấu kính một khoảng d = 2f thì ảnh A'B' của AB qua thấu kính có tính chất:",
    "options": ["A. ảnh thật, cùng chiều và nhỏ hơn vật", "B. ảnh thật, ngược chiều và lớn hơn vật", "C. ảnh thật, ngược chiều và nhỏ hơn vật", "D. ảnh thật, ngược chiều và lớn bằng vật"],
    "a": "D. ảnh thật, ngược chiều và lớn bằng vật",
    "level": "thong_hieu"
  },
  {
    "q": "Biểu thức đúng của định luật Ohm là:",
    "options": ["A. I = U.R", "B. I = U/R", "C. R = U.I", "D. U = I/R"],
    "a": "B. I = U/R",
    "level": "nhan_biet"
  },
  {
    "q": "Biểu thức nào sau đây xác định điện trở của dây dẫn?",
    "options": ["A. R = ρ.l/S", "B. R = ρ.S/l", "C. R = l/(ρ.S)", "D. R = S/(ρ.l)"],
    "a": "A. R = ρ.l/S",
    "level": "nhan_biet"
  },
  {
    "q": "Cho ba điện trở R₁ = R₂ = R₃ = R mắc song song với nhau. Điện trở tương đương đương của đoạn mạch nhận giá trị nào trong các giá trị sau đây?",
    "options": ["A. R/3", "B. 2R", "C. 3R", "D. R"],
    "a": "A. R/3",
    "level": "thong_hieu"
  },
  {
    "q": "Một bóng đèn điện có ghi 220V - 100W được mắc vào hiệu điện thế 220V. Biết đèn này được sử dụng trung bình 4 giờ trong 1 ngày. Điện năng tiêu thụ của bóng đèn này trong 30 ngày là bao nhiêu?",
    "options": ["A. 400 kW.h", "B. 12 kW.h", "C. 1440 kW.h", "D. 43200 kW.h"],
    "a": "B. 12 kW.h",
    "level": "van_dung"
  },
  {
    "q": "Dòng điện xoay chiều là:",
    "options": ["A. dòng điện có cường độ và chiều luân phiên đổi theo thời gian", "B. dòng điện có cường độ và chiều không đổi theo thời gian", "C. dòng điện có chiều từ trái qua số đường sức từ xuyên qua tiết diện S của cuộn dây tăng lên", "D. số đường sức từ xuyên qua tiết diện S của cuộn dây không thay đổi"],
    "a": "A. dòng điện có cường độ và chiều luân phiên đổi theo thời gian",
    "level": "nhan_biet"
  },
  {
    "q": "Các thiết bị nào sau đây không sử dụng dòng điện xoay chiều?",
    "options": ["A. Máy thu thanh dùng pin", "B. Bóng đèn dây tóc mắc vào điện nhà 220V", "C. Tủ lạnh", "D. Ấm đun nước"],
    "a": "A. Máy thu thanh dùng pin",
    "level": "thong_hieu"
  },
  {
    "q": "Năng lượng hóa thạch được tạo nên từ",
    "options": ["A. Nguồn nhiên liệu tái tạo", "B. Đá chứa ít nhất 50% xác động và thực vật", "C. Chỉ bao gồm dầu mỏ và than đá", "D. Việc phân hủy xác các vật sống qua hàng triệu năm"],
    "a": "D. Việc phân hủy xác các vật sống qua hàng triệu năm",
    "level": "nhan_biet"
  },
  {
    "q": "Đâu không phải là ưu điểm của các nguồn năng lượng tái tạo?",
    "options": ["A. Ít tác động tiêu cực đến môi trường", "B. Có khả năng bổ sung, tái tạo nhanh chóng", "C. Rẻ tiền, là dạng chất đốt quan trọng trong đời sống cũng như sản xuất", "D. Sẵn có trong tự nhiên để sử dụng"],
    "a": "C. Rẻ tiền, là dạng chất đốt quan trọng trong đời sống cũng như sản xuất",
    "level": "thong_hieu"
  },
  {
    "q": "Động năng của một vật phụ thuộc vào yếu tố nào?",
    "options": ["A. Khối lượng và tốc độ của vật", "B. Khối lượng và độ cao của vật", "C. Tốc độ và hình dạng của vật", "D. Độ cao và hình dạng của vật"],
    "a": "A. Khối lượng và tốc độ của vật",
    "level": "nhan_biet"
  },
  {
    "q": "Đơn vị đo của thế năng trọng trường là gì?",
    "options": ["A. Niuton (N)", "B. Jun (J)", "C. Kilôgam (kg)", "D. Mét trên giây bình phương (m/s²)"],
    "a": "B. Jun (J)",
    "level": "nhan_biet"
  },
  {
    "q": "Phát biểu nào dưới đây là đúng?",
    "options": ["A. Máy có công suất lớn thì hiệu suất của máy đó nhất định cao", "B. Hiệu suất của một máy có thể lớn hơn 1", "C. Máy có hiệu suất cao thì công suất của máy nhất định lớn", "D. Máy có công suất lớn thì thời gian sinh công sẽ nhanh"],
    "a": "D. Máy có công suất lớn thì thời gian sinh công sẽ nhanh",
    "level": "thong_hieu"
  },
  {
    "q": "Khi ánh sáng truyền từ môi trường chiết suất lớn sang môi trường có chiết suất nhỏ hơn thì",
    "options": ["A. không thể có hiện tượng phản xạ toàn phần", "B. có thể xảy ra hiện tượng phản xạ toàn phần", "C. hiện tượng phản xạ toàn phần xảy ra khi góc tới lớn nhất", "D. luôn luôn xảy ra hiện tượng phản xạ toàn phần"],
    "a": "B. có thể xảy ra hiện tượng phản xạ toàn phần",
    "level": "thong_hieu"
  },
  {
    "q": "Tốc độ ánh sáng trong không khí là v₁, trong nước là v₂. Một tia sáng chiếu từ nước ra ngoài không khí với góc tới là i, có góc khúc xạ là r. Kết luận nào dưới đây là đúng?",
    "options": ["A. v₁ > v₂; i > r", "B. v₁ > v₂; i < r", "C. v₁ < v₂; i > r", "D. v₁ < v₂; i < r"],
    "a": "B. v₁ > v₂; i < r",
    "level": "thong_hieu"
  },
  {
    "q": "Nội dung định luật Ohm là:",
    "options": ["A. Cường độ dòng điện chạy qua một đoạn dây dẫn tỉ lệ với hiệu điện thế giữa hai đầu đoạn dây và tỉ lệ với điện trở của nó", "B. Cường độ dòng điện chạy qua một đoạn dây dẫn tỉ lệ thuận với hiệu điện thế giữa hai đầu đoạn dây và không tỉ lệ với điện trở của nó", "C. Cường độ dòng điện chạy qua một đoạn dây dẫn tỉ lệ thuận với hiệu điện thế giữa hai đầu đoạn dây và tỉ lệ nghịch với điện trở của nó", "D. Cường độ dòng điện chạy qua một đoạn dây dẫn tỉ lệ nghịch với hiệu điện thế giữa hai đầu đoạn dây và tỉ lệ thuận với điện trở của nó"],
    "a": "C. Cường độ dòng điện chạy qua một đoạn dây dẫn tỉ lệ thuận với hiệu điện thế giữa hai đầu đoạn dây và tỉ lệ nghịch với điện trở của nó",
    "level": "nhan_biet"
  },
  {
    "q": "Điện trở của dây dẫn không phụ thuộc vào yếu tố nào dưới đây?",
    "options": ["A. Vật liệu làm dây dẫn", "B. Khối lượng của dây dẫn", "C. Chiều dài của dây dẫn", "D. Tiết diện của dây dẫn"],
    "a": "B. Khối lượng của dây dẫn",
    "level": "nhan_biet"
  },
  {
    "q": "Một bóng đèn có ghi (220V- 60W) mắc vào một nguồn điện. Khi đó cường độ dòng điện qua đèn là 0,18A thì ta thấy đèn sáng",
    "options": ["A. bình thường", "B. sáng yếu", "C. sáng mạnh", "D. không sáng"],
    "a": "B. sáng yếu",
    "level": "thong_hieu"
  },
  {
    "q": "Cường độ dòng điện chạy qua một bóng đèn là 1,2A khi mắc nó vào hiệu điện thế 12V. Muốn cường độ dòng điện chạy qua bóng đèn tăng thêm 0,3A thì hiệu điện thế giữa hai đầu bóng đèn tăng hoặc giảm bao nhiêu?",
    "options": ["A. tăng 5V", "B. tăng 3V", "C. giảm 3V", "D. giảm 2V"],
    "a": "B. tăng 3V",
    "level": "van_dung"
  },
  {
    "q": "Trong hiện tượng cảm ứng điện từ ta nhận biết được điều gì?",
    "options": ["A. Dòng điện xuất hiện trong cuộn dây dẫn đặt gần nam châm", "B. Dòng điện xuất hiện trong cuộn dây đặt trong từ trường của nam châm", "C. Dòng điện xuất hiện khi một cuộn dây dẫn kín quay trong từ trường của nam châm", "D. Dòng điện xuất hiện trong cuộn dây khi cuộn dây chạm vào nam châm"],
    "a": "C. Dòng điện xuất hiện khi một cuộn dây dẫn kín quay trong từ trường của nam châm",
    "level": "nhan_biet"
  },
  {
    "q": "Các thiết bị nào sau đây không sử dụng dòng điện xoay chiều?",
    "options": ["A. Máy thu thanh dùng pin", "B. Bóng đèn dây tóc mắc vào điện nhà 220V", "C. Tủ lạnh", "D. Ấm đun nước"],
    "a": "A. Máy thu thanh dùng pin",
    "level": "thong_hieu"
  },
  {
    "q": "Trong tự nhiên, các nhóm nguồn năng lượng gồm có:",
    "options": ["A. Nguồn năng lượng tái tạo và nguồn năng lượng không tái tạo", "B. Nguồn năng lượng tái tạo và nguồn năng lượng nhân tạo", "C. Nguồn năng lượng nhân tạo và nguồn năng lượng không tái tạo", "D. Nguồn năng lượng nhân tạo và nguồn năng lượng tái tạo"],
    "a": "A. Nguồn năng lượng tái tạo và nguồn năng lượng không tái tạo",
    "level": "nhan_biet"
  },
  {
    "q": "Ở quá trình quang hợp, thực vật hấp thụ năng lượng mặt trời, chuyển hóa năng lượng mặt trời thành dạng năng lượng nào?",
    "options": ["A. Quang năng", "B. Nhiệt năng", "C. Hóa năng", "D. Động năng"],
    "a": "C. Hóa năng",
    "level": "thong_hieu"
  },
  {
    "q": "Đơn vị đo công cơ học là gì?",
    "options": ["A. Watt (W)", "B. Joule (J)", "C. Niutơn (N)", "D. Ampe (A)"],
    "a": "B. Joule (J)",
    "level": "nhan_biet"
  },
  {
    "q": "Khi một vật được ném thẳng đứng lên cao, sự chuyển hóa năng lượng diễn ra như thế nào (bỏ qua sức cản không khí)?",
    "options": ["A. Thế năng chuyển hóa thành Động năng", "B. Cơ năng chuyển hóa thành Nhiệt năng", "C. Động năng chuyển hóa thành Thế năng", "D. Động năng và Thế năng không đổi"],
    "a": "C. Động năng chuyển hóa thành Thế năng",
    "level": "thong_hieu"
  },
  {
    "q": "Một người kéo thùng hàng chuyển động đều trên mặt phẳng ngang một đoạn 10 mét với lực kéo 50 N hợp với phương ngang một góc 30°. Công mà người đó thực hiện là bao nhiêu?",
    "options": ["A. 500 J", "B. 250√3 J", "C. 250√3 J", "D. 250 J"],
    "a": "C. 250√3 J",
    "level": "van_dung"
  },
  {
    "q": "Một vật có khối lượng 2 kg đang nằm ở độ cao 5 m so với mặt đất (g = 10 m/s²). Cơ năng của vật tại vị trí này bằng bao nhiêu nếu vật đang chuyển động với vận tốc 2 m/s?",
    "options": ["A. 100 J", "B. 104 J", "C. 96 J", "D. 40 J"],
    "a": "B. 104 J",
    "level": "van_dung"
  },
  {
    "q": "Hiện tượng khúc xạ ánh sáng là gì?",
    "options": ["A. Tia sáng phản xạ lại tại môi trường cũ khi gặp mặt phân cách hai môi trường", "B. Toàn bộ tia sáng giữ lại ở mặt phân cách giữa hai môi trường trong suốt", "C. Tia sáng bị phân tích thành nhiều màu", "D. Tia sáng bị gãy khúc khi truyền từ môi trường này sang môi trường trong suốt khác"],
    "a": "D. Tia sáng bị gãy khúc khi truyền từ môi trường này sang môi trường trong suốt khác",
    "level": "nhan_biet"
  },
  {
    "q": "Ảnh của một vật qua thấu kính hội tụ là ảnh ảo khi vật được đặt ở vị trí nào?",
    "options": ["A. Ngoài khoảng tiêu cự (d > f)", "B. Trong khoảng tiêu cự (d < f)", "C. Tại tiêu điểm (d = f)", "D. Tại tâm quang học"],
    "a": "B. Trong khoảng tiêu cự (d < f)",
    "level": "thong_hieu"
  },
  {
    "q": "Phát biểu nào sau đây là nội dung của Định luật Ohm?",
    "options": ["A. Cường độ dòng điện chạy qua dây dẫn tỉ lệ nghịch với hiệu điện thế đặt vào hai đầu dây dẫn", "B. Hiệu điện thế đặt vào hai đầu dây dẫn tỉ lệ nghịch với điện trở của dây", "C. Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây dẫn và tỉ lệ nghịch với điện trở của dây", "D. Công suất điện tỉ lệ với bình phương cường độ dòng điện"],
    "a": "C. Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây dẫn và tỉ lệ nghịch với điện trở của dây",
    "level": "nhan_biet"
  },
  {
    "q": "Cho hai điện trở R₁ và R₂ được mắc song song. Điện trở tương đương (Rₜđ) của đoạn mạch là:",
    "options": ["A. Rₜđ = R₁ + R₂", "B. Rₜđ = (R₁R₂)/(R₁+R₂)", "C. 1/Rₜđ = 1/R₁ + 1/R₂", "D. Rₜđ = R₁R₂"],
    "a": "C. 1/Rₜđ = 1/R₁ + 1/R₂",
    "level": "thong_hieu"
  },
  {
    "q": "Một bóng đèn có ghi 6V - 3W. Khi đèn sáng bình thường, dòng điện chạy qua đèn có cường độ là bao nhiêu?",
    "options": ["A. 0,5 A", "B. 2 A", "C. 0,2 A", "D. 18 A"],
    "a": "A. 0,5 A",
    "level": "van_dung"
  },
  {
    "q": "Hai điện trở R₁ = 4Ω và R₂ = 6Ω được mắc nối tiếp vào nguồn điện có hiệu điện thế 12V. Cường độ dòng điện chạy qua mạch chính là bao nhiêu?",
    "options": ["A. 1,2 A", "B. 3 A", "C. 0,5 A", "D. 2 A"],
    "a": "A. 1,2 A",
    "level": "van_dung"
  },
  {
    "q": "Nguyên tắc tạo ra dòng điện xoay chiều là dựa trên hiện tượng vật lí nào?",
    "options": ["A. Tác dụng hóa học của dòng điện", "B. Hiện tượng cảm ứng điện từ", "C. Sự nhiễm từ", "D. Sự khúc xạ ánh sáng"],
    "a": "B. Hiện tượng cảm ứng điện từ",
    "level": "nhan_biet"
  },
  {
    "q": "Dòng điện xoay chiều có tác dụng nào sau đây được ứng dụng phổ biến nhất trong các thiết bị như bàn là, bếp điện?",
    "options": ["A. Tác dụng từ", "B. Tác dụng phát sáng", "C. Tác dụng hóa học", "D. Tác dụng nhiệt"],
    "a": "D. Tác dụng nhiệt",
    "level": "thong_hieu"
  },
  {
    "q": "Dạng năng lượng nào sau đây là năng lượng tái tạo?",
    "options": ["A. Than đá", "B. Dầu mỏ", "C. Khí đốt", "D. Năng lượng gió"],
    "a": "D. Năng lượng gió",
    "level": "nhan_biet"
  },
  {
    "q": "Nguồn năng lượng nào được coi là trung tâm của 'Vòng năng lượng trên Trái Đất'?",
    "options": ["A. Năng lượng địa nhiệt", "B. Năng lượng hạt nhân", "C. Năng lượng Mặt Trời", "D. Năng lượng từ sóng biển"],
    "a": "C. Năng lượng Mặt Trời",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật khối lượng 2kg đang chuyển động với vận tốc 3m/s. Động năng của vật là",
    "options": ["A. 3J", "B. 6J", "C. 9J", "D. 18J"],
    "a": "C. 9J",
    "level": "van_dung"
  },
  {
    "q": "Một vật khối lượng 1kg được kéo lên cao 5m. Lấy g=10m/s². Thế năng của vật là",
    "options": ["A. 5J", "B. 10J", "C. 25J", "D. 50J"],
    "a": "D. 50J",
    "level": "van_dung"
  },
  {
    "q": "Một máy bơm nước có công suất 500W bơm nước trong 20s. Công thực hiện là",
    "options": ["A. 10000J", "B. 5000J", "C. 2500J", "D. 20000J"],
    "a": "A. 10000J",
    "level": "van_dung"
  },
  {
    "q": "Một ô tô khối lượng 1000kg đang chạy với vận tốc 10 m/s. Động năng là",
    "options": ["A. 5.10⁴J", "B. 1.10⁵J", "C. 5.10³J", "D. 1.10⁶J"],
    "a": "A. 5.10⁴J",
    "level": "van_dung"
  },
  {
    "q": "Hiện tượng nào là sự khúc xạ ánh sáng?",
    "options": ["A. Mặt trời mọc", "B. Thìa trong nước bị gãy", "C. Ảnh gương phẳng", "D. Thấu kính phân kì"],
    "a": "B. Thìa trong nước bị gãy",
    "level": "nhan_biet"
  },
  {
    "q": "Dụng cụ nào hoạt động dựa vào phản xạ toàn phần?",
    "options": ["A. Gương phẳng", "B. Thấu kính", "C. Cáp quang", "D. Kính lúp"],
    "a": "C. Cáp quang",
    "level": "thong_hieu"
  },
  {
    "q": "Công thức tính điện trở?",
    "options": ["A. R=UI", "B. R=U/I", "C. R=I/U", "D. R=U+I"],
    "a": "B. R=U/I",
    "level": "nhan_biet"
  },
  {
    "q": "Hai điện trở R₁= 6Ω, R₂ = 12Ω mắc song song. Điện trở tương đương?",
    "options": ["A. 18Ω", "B. 4Ω", "C. 8Ω", "D. 2Ω"],
    "a": "B. 4Ω",
    "level": "thong_hieu"
  },
  {
    "q": "Một đoạn mạch nối tiếp R₁=10Ω, R₂=20Ω. Điện trở tương đương?",
    "options": ["A. 30Ω", "B. 10Ω", "C. 20Ω", "D. 15Ω"],
    "a": "A. 30Ω",
    "level": "thong_hieu"
  },
  {
    "q": "Một bóng đèn ghi 6V -- 3W. Cường độ định mức?",
    "options": ["A. 0,25A", "B. 0,5A", "C. 2A", "D. 18A"],
    "a": "B. 0,5A",
    "level": "van_dung"
  },
  {
    "q": "Nguyên tắc tạo ra dòng điện xoay chiều dựa vào?",
    "options": ["A. Cảm ứng điện từ", "B. Dòng điện một chiều", "C. Điện phân", "D. Tác dụng nhiệt"],
    "a": "A. Cảm ứng điện từ",
    "level": "nhan_biet"
  },
  {
    "q": "Tác dụng nào không phải của dòng điện xoay chiều?",
    "options": ["A. Nhiệt", "B. Quang", "C. Từ", "D. Hóa học"],
    "a": "D. Hóa học",
    "level": "thong_hieu"
  },
  {
    "q": "Năng lượng Mặt Trời thuộc loại?",
    "options": ["A. Hóa thạch", "B. Tái tạo", "C. Không tái tạo", "D. Nhiệt điện"],
    "a": "B. Tái tạo",
    "level": "nhan_biet"
  },
  {
    "q": "Vòng tuần hoàn năng lượng trên Trái Đất chủ yếu bắt nguồn từ?",
    "options": ["A. Gió", "B. Hạt nhân", "C. Mặt Trời", "D. Địa nhiệt"],
    "a": "C. Mặt Trời",
    "level": "thong_hieu"
  },
  {
    "q": "Cơ năng của một vật là:",
    "options": ["A. Năng lượng do vật có khối lượng", "B. Tổng động năng và thế năng của vật", "C. Năng lượng của vật chỉ khi chuyển động", "D. Công mà vật thực hiện được"],
    "a": "B. Tổng động năng và thế năng của vật",
    "level": "nhan_biet"
  },
  {
    "q": "Đơn vị của cơ năng trong hệ SI là:",
    "options": ["A. N (Niutơn)", "B. J (Jun)", "C. W (Oát)", "D. kg (kilôgam)"],
    "a": "B. J (Jun)",
    "level": "nhan_biet"
  },
  {
    "q": "Khi quả bóng rơi tự do từ trên cao xuống, sự biến đổi năng lượng nào sau đây xảy ra?",
    "options": ["A. Động năng biến thành thế năng", "B. Thế năng biến thành động năng", "C. Thế năng và động năng đồng thời giảm", "D. Tổng cơ năng của quả bóng luôn giảm"],
    "a": "B. Thế năng biến thành động năng",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật khối lượng 2 kg chuyển động với vận tốc 5 m/s. Động năng của vật là:",
    "options": ["A. 10 J", "B. 12,5 J", "C. 20 J", "D. 25 J"],
    "a": "D. 25 J",
    "level": "van_dung"
  },
  {
    "q": "Tia sáng là gì?",
    "options": ["A. Một vạch sáng nhìn thấy bằng mắt", "B. Đường thẳng chỉ phương truyền ánh sáng", "C. Đường gấp khúc biểu diễn ánh sáng đi trong không khí", "D. Nguồn sáng phát ra ánh sáng"],
    "a": "B. Đường thẳng chỉ phương truyền ánh sáng",
    "level": "nhan_biet"
  },
  {
    "q": "Vật nào sau đây được coi là nguồn sáng?",
    "options": ["A. Mặt Trời", "B. Mặt Trăng", "C. Một chiếc gương", "D. Quyển vở trắng để ngoài nắng"],
    "a": "A. Mặt Trời",
    "level": "nhan_biet"
  },
  {
    "q": "Cường độ dòng điện được xác định bằng:",
    "options": ["A. Điện áp chia cho điện trở", "B. Điện lượng chuyển qua tiết diện dây dẫn trong một đơn vị thời gian", "C. Nhiệt lượng do dòng điện tỏa ra", "D. Công mà dòng điện thực hiện được"],
    "a": "B. Điện lượng chuyển qua tiết diện dây dẫn trong một đơn vị thời gian",
    "level": "nhan_biet"
  },
  {
    "q": "Đơn vị của điện trở trong hệ SI là:",
    "options": ["A. Vôn (V)", "B. Ampe (A)", "C. Ôm (Ω)", "D. Oát (W)"],
    "a": "C. Ôm (Ω)",
    "level": "nhan_biet"
  },
  {
    "q": "Theo định luật Ôm, khi điện trở không đổi, nếu tăng hiệu điện thế giữa hai đầu dây dẫn thì:",
    "options": ["A. Cường độ dòng điện giảm", "B. Cường độ dòng điện tăng", "C. Cường độ dòng điện không đổi", "D. Dây dẫn bị đứt"],
    "a": "B. Cường độ dòng điện tăng",
    "level": "thong_hieu"
  },
  {
    "q": "Một bóng đèn có điện trở 12 Ω, đặt vào hiệu điện thế 6 V. Cường độ dòng điện qua đèn là:",
    "options": ["A. 0,25 A", "B. 0,5 A", "C. 1 A", "D. 2 A"],
    "a": "B. 0,5 A",
    "level": "van_dung"
  },
  {
    "q": "Vật liệu nào sau đây dẫn điện tốt nhất?",
    "options": ["A. Cao su", "B. Nhựa", "C. Đồng", "D. Thủy tinh"],
    "a": "C. Đồng",
    "level": "nhan_biet"
  },
  {
    "q": "Một đoạn dây dẫn có điện trở R được mắc vào hiệu điện thế U. Nếu tăng hiệu điện thế lên gấp đôi thì cường độ dòng điện qua dây dẫn sẽ:",
    "options": ["A. Không đổi", "B. Tăng gấp đôi", "C. Giảm một nửa", "D. Tăng gấp bốn"],
    "a": "B. Tăng gấp đôi",
    "level": "thong_hieu"
  },
  {
    "q": "Nguồn năng lượng nào sau đây là năng lượng tái tạo?",
    "options": ["A. Than đá", "B. Dầu mỏ", "C. Năng lượng mặt trời", "D. Khí đốt tự nhiên"],
    "a": "C. Năng lượng mặt trời",
    "level": "nhan_biet"
  },
  {
    "q": "Một chiếc xe máy chuyển động, năng lượng hóa học từ xăng chuyển hóa thành những dạng năng lượng nào?",
    "options": ["A. Năng lượng nhiệt và năng lượng ánh sáng", "B. Năng lượng cơ học và năng lượng nhiệt", "C. Năng lượng điện và năng lượng cơ học", "D. Năng lượng hóa học và năng lượng cơ học"],
    "a": "B. Năng lượng cơ học và năng lượng nhiệt",
    "level": "thong_hieu"
  },
  {
    "q": "Đại lượng nào sau đây là dạng năng lượng cơ học?",
    "options": ["A. Nhiệt năng", "B. Hóa năng", "C. Thế năng", "D. Điện năng"],
    "a": "C. Thế năng",
    "level": "nhan_biet"
  },
  {
    "q": "Một vật có khối lượng 2 kg được đặt ở độ cao 5 m so với mặt đất. Bỏ qua sức cản không khí, chọn gốc thế năng ở mặt đất. Thế năng hấp dẫn của vật là:",
    "options": ["A. 10 J", "B. 20 J", "C. 50 J", "D. 100 J"],
    "a": "D. 100 J",
    "level": "van_dung"
  },
  {
    "q": "Một vật có động năng 80 J và thế năng 20 J. Cơ năng của vật bằng bao nhiêu?",
    "options": ["A. 20 J", "B. 60 J", "C. 80 J", "D. 100 J"],
    "a": "D. 100 J",
    "level": "thong_hieu"
  },
  {
    "q": "Một viên bi thả rơi tự do từ độ cao 10 m. Khi bi rơi đến độ cao 4 m (so với mặt đất), bỏ qua sức cản không khí, tỉ số giữa động năng và thế năng của viên bi là:",
    "options": ["A. 2 : 3", "B. 3 : 2", "C. 3 : 5", "D. 5 : 3"],
    "a": "B. 3 : 2",
    "level": "van_dung"
  },
  {
    "q": "Hiện tượng khúc xạ ánh sáng xảy ra khi:",
    "options": ["A. Ánh sáng truyền qua một môi trường trong suốt", "B. Ánh sáng truyền từ môi trường này sang môi trường khác", "C. Ánh sáng truyền thẳng trong không khí", "D. Ánh sáng bị hấp thụ hoàn toàn"],
    "a": "B. Ánh sáng truyền từ môi trường này sang môi trường khác",
    "level": "nhan_biet"
  },
  {
    "q": "Trong hiện tượng phản xạ toàn phần, điều kiện nào sau đây đúng?",
    "options": ["A. Góc tới lớn hơn góc giới hạn, ánh sáng truyền từ môi trường chiết suất lớn sang môi trường chiết suất nhỏ", "B. Góc tới nhỏ hơn góc giới hạn", "C. Góc tới bằng 0°", "D. Ánh sáng truyền từ môi trường chiết suất nhỏ sang môi trường chiết suất lớn"],
    "a": "A. Góc tới lớn hơn góc giới hạn, ánh sáng truyền từ môi trường chiết suất lớn sang môi trường chiết suất nhỏ",
    "level": "thong_hieu"
  },
  {
    "q": "Nội dung định luật Ohm là",
    "options": ["A. cường độ dòng điện chạy qua một đoạn dây dẫn tỉ lệ với hiệu điện thế giữa hai đầu đoạn dây và tỉ lệ với điện trở của nó", "B. cường độ dòng điện chạy qua một đoạn dây dẫn tỉ lệ thuận với hiệu điện thế giữa hai đầu đoạn dây và không tỉ lệ với điện trở của nó", "C. cường độ dòng điện chạy qua một đoạn dây dẫn tỉ lệ thuận với hiệu điện thế giữa hai đầu đoạn dây và tỉ lệ nghịch với điện trở của nó", "D. cường độ dòng điện chạy qua một đoạn dây dẫn tỉ lệ nghịch với hiệu điện thế giữa hai đầu đoạn dây và tỉ lệ thuận với điện trở của nó"],
    "a": "C. cường độ dòng điện chạy qua một đoạn dây dẫn tỉ lệ thuận với hiệu điện thế giữa hai đầu đoạn dây và tỉ lệ nghịch với điện trở của nó",
    "level": "nhan_biet"
  },
  {
    "q": "Một dây dẫn có điện trở 12 Ω, đặt vào hiệu điện thế 24 V. Cường độ dòng điện chạy qua dây dẫn là:",
    "options": ["A. 0,5 A", "B. 1 A", "C. 2 A", "D. 4 A"],
    "a": "C. 2 A",
    "level": "van_dung"
  },
  {
    "q": "Dụng cụ nào sau đây dùng để đo cường độ dòng điện?",
    "options": ["A. Ampe kế", "B. Vôn kế", "C. Công tơ điện", "D. Đồng hồ đo công suất"],
    "a": "A. Ampe kế",
    "level": "nhan_biet"
  },
  {
    "q": "Một người đang sử dụng bóng đèn tròn dây tóc 75W. Người này thay bằng bóng đèn ống 60W. Trung bình mỗi ngày thắp sáng 10h. Số đếm của công tơ giảm bớt bao nhiêu mỗi tháng? Cho 1 tháng = 30 ngày.",
    "options": ["A. 1,5 kWh", "B. 4,5 kWh", "C. 3,0 kWh", "D. 15 kWh"],
    "a": "B. 4,5 kWh",
    "level": "van_dung"
  },
  {
    "q": "Đường sức từ của dòng điện thẳng dài có hướng như thế nào?",
    "options": ["A. Là những đường thẳng song song với dây", "B. Là những đường cong khép kín, có tâm trên dây", "C. Là những đường thẳng cắt dây tại một điểm", "D. Là những đường cong mở rộng ra vô tận"],
    "a": "B. Là những đường cong khép kín, có tâm trên dây",
    "level": "thong_hieu"
  },
  {
    "q": "Máy phát điện xoay chiều hoạt động dựa trên hiện tượng",
    "options": ["A. tĩnh điện học", "B. cảm ứng điện từ", "C. dẫn nhiệt", "D. bức xạ điện từ"],
    "a": "B. cảm ứng điện từ",
    "level": "nhan_biet"
  },
  {
    "q": "Năng lượng tái tạo nào sau đây được sử dụng rộng rãi ở Việt Nam?",
    "options": ["A. Năng lượng hạt nhân", "B. Năng lượng địa nhiệt", "C. Năng lượng mặt trời và gió", "D. Năng lượng hóa thạch"],
    "a": "C. Năng lượng mặt trời và gió",
    "level": "thong_hieu"
  },
  {
    "q": "Ưu điểm nổi bật của năng lượng tái tạo là",
    "options": ["A. rẻ hơn so với năng lượng hóa thạch", "B. không gây ô nhiễm môi trường, có thể khai thác lâu dài", "C. có công suất rất lớn, dễ khai thác ở mọi nơi", "D. dễ dự trữ và vận chuyển"],
    "a": "B. không gây ô nhiễm môi trường, có thể khai thác lâu dài",
    "level": "thong_hieu"
  },
  {
    "q": "Dạng năng lượng vật có được khi ở một độ cao nào đó so với mặt đất hoặc vật được chọn làm mốc gọi là gì?",
    "options": ["A. Động năng", "B. Thế năng", "C. Quang năng", "D. Hóa năng"],
    "a": "B. Thế năng",
    "level": "nhan_biet"
  },
  {
    "q": "Trong các trường hợp dưới đây, trường hợp nào trọng lực thực hiện công?",
    "options": ["A. Đầu tàu hỏa đang kéo đoàn tàu chuyển động", "B. Người công nhân dùng ròng rọc cố định kéo vật nặng lên", "C. Ô tô đang chuyển động trên đường nằm ngang", "D. Quả nặng rơi từ trên xuống"],
    "a": "D. Quả nặng rơi từ trên xuống",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật có khối lượng m = 250g chuyển động với tốc độ v = 18 m/s. Động năng của vật bằng:",
    "options": ["A. 4,5 J", "B. 9 J", "C. 81 J", "D. 450 J"],
    "a": "C. 81 J",
    "level": "van_dung"
  },
  {
    "q": "Một máy cơ có công suất P = 540W, máy đã sinh ra công A = 1080kJ. Vậy thời gian máy đã hoạt động là",
    "options": ["A. 20 giây", "B. 200 giây", "C. 2000 giây", "D. 20000 giây"],
    "a": "C. 2000 giây",
    "level": "van_dung"
  },
  {
    "q": "Phát biểu nào sau đây là nội dung của định luật khúc xạ ánh sáng?",
    "options": ["A. Tia khúc xạ nằm trong mặt phẳng tới và ở bên kia pháp tuyến so với tia sáng tới", "B. Góc khúc xạ bao giờ cũng khác 0", "C. Góc tới tăng bao nhiêu lần thì góc khúc xạ tăng bấy nhiêu lần", "D. Góc tới luôn luôn lớn hơn góc khúc xạ"],
    "a": "A. Tia khúc xạ nằm trong mặt phẳng tới và ở bên kia pháp tuyến so với tia sáng tới",
    "level": "nhan_biet"
  },
  {
    "q": "Vật sáng AB được đặt vuông góc với trục chính tại tiêu điểm của một thấu kính phân kì có tiêu cự f sẽ thu được ảnh có đặc điểm gì?",
    "options": ["A. Ảnh thật, cùng chiều và lớn hơn vật", "B. Ảnh ảo, cùng chiều và lớn hơn vật", "C. Ảnh thật, cùng chiều và nhỏ hơn vật", "D. Ảnh ảo, cùng chiều và nhỏ hơn vật"],
    "a": "D. Ảnh ảo, cùng chiều và nhỏ hơn vật",
    "level": "thong_hieu"
  },
  {
    "q": "Đơn vị đo điện trở là",
    "options": ["A. vôn (V)", "B. ôm (Ω)", "C. ampe (A)", "D. oát (W)"],
    "a": "B. ôm (Ω)",
    "level": "nhan_biet"
  },
  {
    "q": "Hai đầu đoạn mạch có một hiệu điện thế không đổi, nếu điện trở của mạch giảm 2 lần thì công suất điện của mạch:",
    "options": ["A. tăng 4 lần", "B. không đổi", "C. giảm 4 lần", "D. tăng 2 lần"],
    "a": "D. tăng 2 lần",
    "level": "van_dung"
  },
  {
    "q": "Cho hai điện trở R₁ = 30Ω và R₂ = 25Ω được mắc nối tiếp nhau. Điện trở tương đương của mạch là",
    "options": ["A. Rₜđ = 25Ω", "B. Rₜđ = 30Ω", "C. Rₜđ = 15Ω", "D. Rₜđ = 55Ω"],
    "a": "D. Rₜđ = 55Ω",
    "level": "thong_hieu"
  },
  {
    "q": "Hai điện trở R₁, R₂ mắc song song với nhau. Biết R₁ = 10Ω, điện trở tương đương của mạch là Rₜđ = 5Ω. Điện trở R₂ nhận giá trị nào dưới đây?",
    "options": ["A. 5 Ω", "B. 10 Ω", "C. 15 Ω", "D. 25 Ω"],
    "a": "B. 10 Ω",
    "level": "van_dung"
  },
  {
    "q": "Nguyên tắc tạo dòng điện xoay chiều dựa trên:",
    "options": ["A. Hiện tượng phản xạ", "B. Hiện tượng cảm ứng điện từ", "C. Hiện tượng tán sắc", "D. Hiện tượng nhiễm điện"],
    "a": "B. Hiện tượng cảm ứng điện từ",
    "level": "nhan_biet"
  },
  {
    "q": "Chọn phát biểu đúng về dòng điện xoay chiều:",
    "options": ["A. Dòng điện xoay chiều có tác dụng từ yếu hơn dòng điện một chiều", "B. Dòng điện xoay chiều có tác dụng nhiệt yếu hơn dòng điện một chiều", "C. Dòng điện xoay chiều có tác dụng sinh lý mạnh hơn dòng điện một chiều", "D. Dòng điện xoay chiều tác dụng một cách không liên tục"],
    "a": "D. Dòng điện xoay chiều tác dụng một cách không liên tục",
    "level": "thong_hieu"
  },
  {
    "q": "Năng lượng được dự trữ bên trong hạt nhân nguyên tử được gọi là:",
    "options": ["A. năng lượng gió", "B. năng lượng nước", "C. năng lượng hạt nhân", "D. năng lượng mặt trời"],
    "a": "C. năng lượng hạt nhân",
    "level": "nhan_biet"
  },
  {
    "q": "Đâu không phải là ưu điểm của các nguồn năng lượng tái tạo?",
    "options": ["A. Ít tác động tiêu cực đến môi trường", "B. Có khả năng bổ sung, tái tạo nhanh chóng", "C. Rẻ tiền, là dạng chất đốt quan trọng trong đời sống cũng như sản xuất", "D. Sẵn có trong tự nhiên để sử dụng"],
    "a": "C. Rẻ tiền, là dạng chất đốt quan trọng trong đời sống cũng như sản xuất",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật có khối lượng 2 kg đang chuyển động với vận tốc 5 m/s, tính Động năng của vật?",
    "options": ["A. 25J", "B. 50J", "C. 12,5J", "D. 100J"],
    "a": "A. 25J",
    "level": "van_dung"
  },
  {
    "q": "Một vật khối lượng 1 kg ở độ cao 5 m so với mặt đất, tính Thế năng trọng trường của vật (Chọn gốc thế năng tại mặt đất, cho g = 10 m/s²) ?",
    "options": ["A. 5J", "B. 10J", "C. 50J", "D. 500J"],
    "a": "C. 50J",
    "level": "van_dung"
  },
  {
    "q": "Trong các công thức sau, đâu là công thức tính công cơ học?",
    "options": ["A. A = F.s", "B. A = F/v", "C. A = P.t", "D. A = m.g"],
    "a": "A. A = F.s",
    "level": "nhan_biet"
  },
  {
    "q": "Một động cơ thực hiện được một Công 600J trong 20s, tính Công suất của động cơ?",
    "options": ["A. 10 W", "B. 20 W", "C. 30 W", "D. 40 W"],
    "a": "C. 30 W",
    "level": "van_dung"
  },
  {
    "q": "Tia sáng truyền từ không khí vào nước theo phương pháp tuyến thì",
    "options": ["A. góc khúc xạ lớn hơn góc tới", "B. góc khúc xạ bằng góc tới", "C. góc khúc xạ nhỏ hơn góc tới", "D. tia sáng bị phản xạ toàn phần"],
    "a": "B. góc khúc xạ bằng góc tới",
    "level": "thong_hieu"
  },
  {
    "q": "Ảnh của một vật qua thấu kính hội tụ khi đặt ngoài tiêu cự là:",
    "options": ["A. Ảnh ảo, cùng chiều, lớn hơn vật", "B. Ảnh thật, ngược chiều, nhỏ hơn vật", "C. Ảnh thật, ngược chiều, lớn hơn vật", "D. Ảnh ảo, cùng chiều, nhỏ hơn vật"],
    "a": "C. Ảnh thật, ngược chiều, lớn hơn vật",
    "level": "thong_hieu"
  },
  {
    "q": "Điện trở của một dây dẫn phụ thuộc vào",
    "options": ["A. chiều dài của dây dẫn", "B. nhiệt độ, khối lượng dây dẫn", "C. cường độ dòng điện", "D. hiệu điện thế"],
    "a": "A. chiều dài của dây dẫn",
    "level": "nhan_biet"
  },
  {
    "q": "Cường độ dòng điện trong một đoạn mạch có các điện trở mắc nối tiếp nhau thì",
    "options": ["A. tỉ lệ nghịch với độ lớn mỗi điện trở", "B. bằng nhau tại mọi điểm trong mạch", "C. tỉ lệ thuận với độ lớn mỗi điện trở", "D. bằng tổng các cường độ dòng điện qua mỗi điện trở"],
    "a": "B. bằng nhau tại mọi điểm trong mạch",
    "level": "thong_hieu"
  },
  {
    "q": "Trong các công thức sau, đâu là công thức tính Công suất điện?",
    "options": ["A. P = U/I", "B. P = U.I", "C. P = R.I", "D. P = U/R"],
    "a": "B. P = U.I",
    "level": "nhan_biet"
  },
  {
    "q": "Trên Bàn ủi điện có ghi 1000 W - 220V, tính lượng Điện năng tiêu thụ của bàn ủi khi hoạt động trong 1h?",
    "options": ["A. 1000J", "B. 3600J", "C. 1000 Wh", "D. 3600 Wh"],
    "a": "C. 1000 Wh",
    "level": "van_dung"
  },
  {
    "q": "Dòng điện xoay chiều được tạo ra trong trường hợp nào dưới đây?",
    "options": ["A. Nối hai cực của một bình ắc quy 12V bằng dây dẫn điện", "B. Đặt hai điện cực trái dấu gần nhau", "C. Đặt lõi thép trong lòng khung dây", "D. Cho Nam châm quay trong một khung dây"],
    "a": "D. Cho Nam châm quay trong một khung dây",
    "level": "nhan_biet"
  },
  {
    "q": "Trong nồi cơm điện, điện năng được chuyển hóa thành",
    "options": ["A. cơ năng", "B. hóa năng", "C. năng lượng ánh sáng", "D. nhiệt năng"],
    "a": "D. nhiệt năng",
    "level": "thong_hieu"
  },
  {
    "q": "Hiệu ứng nhà kính làm",
    "options": ["A. Mặt trời nóng lên", "B. Trái đất lạnh đi", "C. Trái Đất nóng lên", "D. Mặt trời lạnh đi"],
    "a": "C. Trái Đất nóng lên",
    "level": "nhan_biet"
  },
  {
    "q": "Nguồn năng lượng nào sau đây là năng lượng tái tạo?",
    "options": ["A. Than đá", "B. Dầu mỏ", "C. Năng lượng Mặt Trời", "D. Khí đốt"],
    "a": "C. Năng lượng Mặt Trời",
    "level": "nhan_biet"
  },
  {
    "q": "Khi một vật đang chuyển động nhanh dần đều thì động năng của nó:",
    "options": ["A. Không đổi", "B. Tăng dần", "C. Giảm dần", "D. Bằng 0"],
    "a": "B. Tăng dần",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật có khối lượng 2 kg, được nâng lên cao 5 m so với mặt đất. Lấy g = 10 m/s². Thế năng của vật bằng:",
    "options": ["A. 50 J", "B. 100 J", "C. 10 J", "D. 20 J"],
    "a": "B. 100 J",
    "level": "van_dung"
  },
  {
    "q": "Một ô tô đang chạy, người lái tắt động cơ nhưng xe vẫn đi thêm một quãng đường rồi mới dừng hẳn. Điều này chứng tỏ:",
    "options": ["A. Quán tính của ô tô nhỏ", "B. Có lực ma sát tác dụng lên ô tô", "C. Ô tô có thế năng", "D. Ô tô có động năng"],
    "a": "D. Ô tô có động năng",
    "level": "thong_hieu"
  },
  {
    "q": "Một quả bóng có khối lượng 0,5 kg rơi tự do từ độ cao 10 m. Bỏ qua sức cản không khí, vận tốc của bóng khi chạm đất gần nhất là:",
    "options": ["A. 10 m/s", "B. 14 m/s", "C. 20 m/s", "D. 5 m/s"],
    "a": "B. 14 m/s",
    "level": "van_dung"
  },
  {
    "q": "Khi tia sáng truyền từ không khí vào nước thì hiện tượng xảy ra là:",
    "options": ["A. Tia sáng không bị gãy khúc", "B. Tia sáng bị phản xạ toàn phần", "C. Tia sáng bị gãy khúc (khúc xạ)", "D. Vận tốc tia sáng tăng"],
    "a": "C. Tia sáng bị gãy khúc (khúc xạ)",
    "level": "nhan_biet"
  },
  {
    "q": "Ảnh của vật tạo bởi gương phẳng luôn là:",
    "options": ["A. Ảnh thật, cùng chiều", "B. Ảnh ảo, ngược chiều", "C. Ảnh ảo, cùng chiều, bằng vật", "D. Ảnh thật, nhỏ hơn vật"],
    "a": "C. Ảnh ảo, cùng chiều, bằng vật",
    "level": "nhan_biet"
  },
  {
    "q": "Đơn vị điện trở là:",
    "options": ["A. W (oát)", "B. V (vôn)", "C. A (ampe)", "D. Ω (ôm)"],
    "a": "D. Ω (ôm)",
    "level": "nhan_biet"
  },
  {
    "q": "Dụng cụ để đo hiệu điện thế là:",
    "options": ["A. Ampe kế", "B. Oát kế", "C. Vôn kế", "D. Công tơ điện"],
    "a": "C. Vôn kế",
    "level": "nhan_biet"
  },
  {
    "q": "Một bóng đèn ghi 6V -- 3W. Khi mắc đèn vào đúng hiệu điện thế định mức, cường độ dòng điện qua đèn là:",
    "options": ["A. 0,2 A", "B. 0,5 A", "C. 2 A", "D. 3 A"],
    "a": "B. 0,5 A",
    "level": "van_dung"
  },
  {
    "q": "Hai điện trở R1 = 6Ω, R2 = 12Ω mắc song song vào hiệu điện thế U = 12V. Cường độ dòng điện trong mạch chính là:",
    "options": ["A. 1 A", "B. 2 A", "C. 3 A", "D. 4 A"],
    "a": "C. 3 A",
    "level": "van_dung"
  },
  {
    "q": "Nam châm điện khác nam châm vĩnh cửu ở chỗ:",
    "options": ["A. Có hai cực từ", "B. Từ tính mạnh hơn", "C. Có thể mất từ tính khi ngắt dòng điện", "D. Có cực Bắc, cực Nam"],
    "a": "C. Có thể mất từ tính khi ngắt dòng điện",
    "level": "thong_hieu"
  },
  {
    "q": "Hiện tượng cảm ứng điện từ xảy ra khi:",
    "options": ["A. Cho dòng điện đi qua dây dẫn", "B. Đưa nam châm lại gần hoặc ra xa cuộn dây", "C. Đưa dây dẫn lại gần nam châm nhưng đứng yên", "D. Dây dẫn không đổi từ thông"],
    "a": "B. Đưa nam châm lại gần hoặc ra xa cuộn dây",
    "level": "thong_hieu"
  },
  {
    "q": "Nguồn năng lượng sạch, thân thiện với môi trường là:",
    "options": ["A. Than đá", "B. Dầu mỏ", "C. Năng lượng mặt trời", "D. Khí tự nhiên"],
    "a": "C. Năng lượng mặt trời",
    "level": "nhan_biet"
  },
  {
    "q": "Một trong những biện pháp tiết kiệm năng lượng là:",
    "options": ["A. Sử dụng bóng đèn dây tóc", "B. Bật quạt điện khi không có người", "C. Dùng thiết bị điện đúng công suất và tắt khi không cần thiết", "D. Đun nước bằng ấm điện khi chưa có nước"],
    "a": "C. Dùng thiết bị điện đúng công suất và tắt khi không cần thiết",
    "level": "thong_hieu"
  },
  {
    "q": "Động năng của vật được xác định bằng biểu thức nào dưới đây?",
    "options": ["A. Wđ = mv²", "B. Wđ = 1/2 mv²", "C. Wđ = mv", "D. Wđ = 1/2 mv"],
    "a": "B. Wđ = 1/2 mv²",
    "level": "nhan_biet"
  },
  {
    "q": "Nhân viên y tế đẩy xe bằng cáng bằng một lực có phương nằm ngang làm xe dịch chuyển theo hướng của lực. Phát biểu nào đúng?",
    "options": ["A. Thực hiện công", "B. Không sinh công", "C. Làm thay đổi công suất", "D. Thay đổi hướng của xe"],
    "a": "A. Thực hiện công",
    "level": "nhan_biet"
  },
  {
    "q": "Thế năng trọng trường phụ thuộc vào những yếu tố nào?",
    "options": ["A. Khối lượng vật", "B. Độ cao của vật so với mặt đất", "C. Khối lượng và độ cao của vật so với mặt đất", "D. Khối lượng và vận tốc của vật"],
    "a": "C. Khối lượng và độ cao của vật so với mặt đất",
    "level": "thong_hieu"
  },
  {
    "q": "Một vật có khối lượng m = 10 kg rơi từ độ cao 5 m xuống mặt đất. Tính thế năng trọng trường của vật tại độ cao đó bằng bao nhiêu?",
    "options": ["A. 565,2 J", "B. 65,2 J", "C. 446,8 J", "D. 500 J"],
    "a": "D. 500 J",
    "level": "van_dung"
  },
  {
    "q": "Nhận định nào sau đây không đúng về hiện tượng khúc xạ ánh sáng khi ánh sáng truyền từ không khí sang nước?",
    "options": ["A. Tia khúc xạ nằm ở môi trường thứ 2 tiếp giáp với môi trường chứa tia tới", "B. Tia khúc xạ nằm trong mặt phẳng chứa tia tới và pháp tuyến", "C. Khi góc tới bằng 0, góc khúc xạ bằng 80°", "D. Góc khúc xạ luôn bằng góc tới"],
    "a": "D. Góc khúc xạ luôn bằng góc tới",
    "level": "thong_hieu"
  },
  {
    "q": "Chiếu ánh sáng màu Lục phát ra từ một đèn LED vào mặt ghi của một đĩa CD rồi quan sát ánh sáng phản xạ từ mặt đĩa theo đủ mọi phía. Ta sẽ thấy những ánh sáng màu gì?",
    "options": ["A. Thấy các ánh sáng có đủ mọi màu", "B. Chỉ thấy ánh sáng màu lục", "C. Không thấy có ánh sáng", "D. Thấy ánh sáng màu đen"],
    "a": "B. Chỉ thấy ánh sáng màu lục",
    "level": "thong_hieu"
  },
  {
    "q": "Có hai điện trở R₁ = 2 Ω, được mắc nối tiếp R₂ = 4 Ω. Biết cường độ dòng điện chạy qua điện trở R₁ là 1 A. Cường độ dòng điện qua điện trở R₂ là",
    "options": ["A. 0,5 A", "B. 1 A", "C. 3 A", "D. 2 A"],
    "a": "B. 1 A",
    "level": "thong_hieu"
  },
  {
    "q": "Có hai điện trở R₁ = 2 Ω, R₂ = 3 Ω được mắc song song vào mạch điện. Điện trở tương đương của đoạn mạch là:",
    "options": ["A. 5 Ω", "B. 1 Ω", "C. 6 Ω", "D. 1,2 Ω"],
    "a": "D. 1,2 Ω",
    "level": "thong_hieu"
  },
  {
    "q": "Một bóng đèn có ghi: 9V-4,5W, khi mắc bóng đèn trên vào hiệu điện thế 9V thì cường độ dòng điện qua bóng đèn là:",
    "options": ["A. 3A", "B. 6A", "C. 0,5A", "D. 18A"],
    "a": "C. 0,5A",
    "level": "van_dung"
  },
  {
    "q": "Biết hiệu điện thế giữa hai đầu dây dẫn là 6V. Điện năng tiêu thụ trên dây dẫn khi dòng điện có cường độ 2A chạy qua trong 1 giờ là:",
    "options": ["A. 12J", "B. 43200J", "C. 10800J", "D. 1200J"],
    "a": "B. 43200J",
    "level": "van_dung"
  },
  {
    "q": "Cách để tạo ra được dòng điện cảm ứng trong dynamo xe đạp?",
    "options": ["A. Làm cho nam châm trong dynamo quay trước cuộn dây", "B. Cho bánh xe cọ xát mạnh vào núm dynamo", "C. Nối hai đầu của đinamô với hai cực của acquy", "D. Cho xe đạp chạy nhanh trên đường"],
    "a": "A. Làm cho nam châm trong dynamo quay trước cuộn dây",
    "level": "nhan_biet"
  },
  {
    "q": "Đặt một nam châm điện A có dòng điện xoay chiều chạy qua trước một cuộn dây dẫn kín B. Sau khi công tắc K đóng thì trong cuộn dây B có xuất hiện dòng điện cảm ứng. Người ta sử dụng tác dụng nào của dòng điện xoay chiều?",
    "options": ["A. Tác dụng cơ", "B. Tác dụng nhiệt", "C. Tác dụng quang", "D. Tác dụng từ"],
    "a": "D. Tác dụng từ",
    "level": "thong_hieu"
  },
  {
    "q": "Nhiên liệu hoá thạch khi đốt cháy thải ra nhiều khí thải gây ra hiện tượng gì?",
    "options": ["A. Hiệu ứng nhà kính", "B. Hiệu ứng Coriolis", "C. Hiệu ứng chim mồi", "D. Hiệu ứng võng mạc"],
    "a": "A. Hiệu ứng nhà kính",
    "level": "nhan_biet"
  },
  {
    "q": "Năng lượng mặt trời có sẵn trong tự nhiên được chuyển hoá trực tiếp thành dạng năng lượng nào trong Pin quang điện?",
    "options": ["A. Pin quang điện", "B. Bình ắc quy", "C. Pin con thỏ", "D. Máy phát điện"],
    "a": "A. Pin quang điện",
    "level": "thong_hieu"
  }
];

    const hoa = [
  {
    "q": "Kim loại nào sau đây hoạt động hóa học mạnh nhất?",
    "options": ["A. Fe", "B. K", "C. Mg", "D. Al"],
    "a": "B. K",
    "level": "nhan_biet"
  },
  {
    "q": "Carbon có mấy dạng thù hình chính?",
    "options": ["A. 1", "B. 2", "C. 3", "D. 4"],
    "a": "C. 3",
    "level": "nhan_biet"
  },
  {
    "q": "Nguyên liệu chính dùng để sản xuất nhôm là",
    "options": ["A. quặng maghetite", "B. quặng bauxite", "C. quặng sphalerite", "D. quặng hematite"],
    "a": "B. quặng bauxite",
    "level": "nhan_biet"
  },
  {
    "q": "Khi đốt cháy lưu huỳnh trong oxygen ta thu được sản phẩm là",
    "options": ["A. CO₂", "B. SO₂", "C. SO₃", "D. H₂SO₄"],
    "a": "B. SO₂",
    "level": "thong_hieu"
  },
  {
    "q": "Trong các phản ứng hóa học, các kim loại thường có xu hướng",
    "options": ["A. nhận electron", "B. tạo thành ion âm", "C. tạo thành ion dương", "D. nhường proton"],
    "a": "C. tạo thành ion dương",
    "level": "thong_hieu"
  },
  {
    "q": "Dãy các chất nào sau đây đều là hydrocarbon?",
    "options": ["A. C₂H₄, CH₃COOH, C₆H₆", "B. C₂H₅OH, CH₄, C₂H₂", "C. C₂H₆, C₄H₁₀, C₂H₄", "D. C₂H₆O, C₃H₈, C₂H₂"],
    "a": "C. C₂H₆, C₄H₁₀, C₂H₄",
    "level": "nhan_biet"
  },
  {
    "q": "Hợp chất hữu cơ luôn chứa nguyên tố:",
    "options": ["A. C", "B. H", "C. O", "D. N"],
    "a": "A. C",
    "level": "nhan_biet"
  },
  {
    "q": "Vì sao không đun bếp than trong phòng kín?",
    "options": ["A. Vì than tỏa nhiều nhiệt dẫn đến phòng quá nóng", "B. Vì than cháy tỏa ra rất nhiều khí CO, CO₂ có thể gây tử vong do ngạt/ngộ độc các khí này", "C. Vì than không cháy được trong phòng kín", "D. Vì giá thành than khá cao"],
    "a": "B. Vì than cháy tỏa ra rất nhiều khí CO, CO₂ có thể gây tử vong do ngạt/ngộ độc các khí này",
    "level": "thong_hieu"
  },
  {
    "q": "Khối lượng khí ethylene cần dùng để phản ứng hết 8 gam bromine trong dung dịch là",
    "options": ["A. 0,7 gam", "B. 7 gam", "C. 1,4 gam", "D. 14 gam"],
    "a": "C. 1,4 gam",
    "level": "van_dung"
  },
  {
    "q": "Acetic acid có công thức là",
    "options": ["A. C₂H₅OH", "B. HCOOH", "C. CH₃OH", "D. CH₃COOH"],
    "a": "D. CH₃COOH",
    "level": "nhan_biet"
  },
  {
    "q": "Đốt cháy dẫn xuất của hydrocarbon X theo sơ đồ sau: X + 3O₂ → 2CO₂ + 3H₂O. X là:",
    "options": ["A. C₂H₄O", "B. C₂H₆O", "C. C₃H₈O", "D. C₂H₆O₂"],
    "a": "B. C₂H₆O",
    "level": "thong_hieu"
  },
  {
    "q": "Thủy phân hoàn toàn 17,16 kg một loại chất béo cần vừa đủ 2,4 kg NaOH, sản phẩm thu được gồm 1,84 kg glycerol và hỗn hợp muối của các acid béo. Khối lượng hỗn hợp các muối là",
    "options": ["A. 17,72 kg", "B. 19,44 kg", "C. 11,92 kg", "D. 12,77 kg"],
    "a": "A. 17,72 kg",
    "level": "van_dung"
  },
  {
    "q": "Cho 18g glucose vào dung dịch silver nitrate thu được m gam kết tủa Ag. Khối lượng của m là:",
    "options": ["A. 10,8g", "B. 21,6g", "C. 23,4g", "D. 21,8g"],
    "a": "B. 21,6g",
    "level": "van_dung"
  },
  {
    "q": "Từ 1 tấn nước mía chứa 13% saccharose có thể thu được bao nhiêu kg saccharose? Cho biết hiệu suất thu hồi đường đạt 80%.",
    "options": ["A. 104 kg", "B. 130 kg", "C. 140 kg", "D. 103 kg"],
    "a": "A. 104 kg",
    "level": "van_dung"
  },
  {
    "q": "Tính chất vật lí chung của kim loại là:",
    "options": ["A. Dẫn điện, dẫn nhiệt, có ánh kim", "B. Giòn, dễ gãy, cách điện", "C. Tan nhiều trong nước", "D. Không dẫn điện, không dẫn nhiệt"],
    "a": "A. Dẫn điện, dẫn nhiệt, có ánh kim",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy hoạt động hóa học nào sau đây sắp xếp theo chiều giảm dần tính khử?",
    "options": ["A. Mg, Na, Al, K", "B. K, Na, Mg, Al", "C. Al, K, Na, Mg", "D. Na, K, Al, Mg"],
    "a": "B. K, Na, Mg, Al",
    "level": "thong_hieu"
  },
  {
    "q": "Sự khác nhau cơ bản giữa kim loại và phi kim là:",
    "options": ["A. Kim loại dẫn điện, phi kim không dẫn điện", "B. Kim loại dễ nhường electron, phi kim dễ nhận electron", "C. Kim loại thường giòn, phi kim dẻo", "D. Kim loại tan nhiều trong nước, phi kim không tan"],
    "a": "B. Kim loại dễ nhường electron, phi kim dễ nhận electron",
    "level": "thong_hieu"
  },
  {
    "q": "Công thức tổng quát của dãy đồng đẳng alkane là:",
    "options": ["A. CnH2n+2 (n ≥ 1)", "B. CnH2n (n ≥ 2)", "C. CnH2n-2 (n ≥ 2)", "D. CnH2n+1 (n ≥ 1)"],
    "a": "A. CnH2n+2 (n ≥ 1)",
    "level": "nhan_biet"
  },
  {
    "q": "Thành phần chính của khí thiên nhiên là:",
    "options": ["A. Propane", "B. Methane", "C. Ethylene", "D. Butane"],
    "a": "B. Methane",
    "level": "nhan_biet"
  },
  {
    "q": "Loại nhiên liệu nào sau đây được coi là nhiên liệu sạch?",
    "options": ["A. Than đá", "B. Khí thiên nhiên", "C. Xăng", "D. Dầu hỏa"],
    "a": "B. Khí thiên nhiên",
    "level": "thong_hieu"
  },
  {
    "q": "Công thức phân tử của ethyl alcohol là:",
    "options": ["A. CH₃OH", "B. CH₃CH₂OH", "C. C₂H₄", "D. CH₃COOH"],
    "a": "B. CH₃CH₂OH",
    "level": "nhan_biet"
  },
  {
    "q": "Dung dịch acid axetic có tính chất nào sau đây?",
    "options": ["A. Làm quỳ tím hóa đỏ", "B. Không phản ứng với kim loại kẽm", "C. Có tính base yếu", "D. Không tan trong nước"],
    "a": "A. Làm quỳ tím hóa đỏ",
    "level": "thong_hieu"
  },
  {
    "q": "Glucose và sucrose đều thuộc loại:",
    "options": ["A. Protein", "B. Lipit", "C. Carbohydrate", "D. Polymer"],
    "a": "C. Carbohydrate",
    "level": "nhan_biet"
  },
  {
    "q": "Tinh bột và cellulose là những:",
    "options": ["A. Disaccarit", "B. Polisaccarit", "C. Monosaccarit", "D. Lipit"],
    "a": "B. Polisaccarit",
    "level": "nhan_biet"
  },
  {
    "q": "Loại hợp chất nào sau đây có trong tơ nilon, cao su?",
    "options": ["A. Lipit", "B. Protein", "C. Carbohydrate", "D. Polymer"],
    "a": "D. Polymer",
    "level": "nhan_biet"
  },
  {
    "q": "Nguyên liệu chính để sản xuất xi măng là:",
    "options": ["A. Than đá", "B. Quặng sắt", "C. Đá vôi và đất sét", "D. Dầu mỏ"],
    "a": "C. Đá vôi và đất sét",
    "level": "nhan_biet"
  },
  {
    "q": "Cho phản ứng: 2Na + 2H₂O → 2NaOH + H₂↑. Phát biểu nào sau đây đúng?",
    "options": ["A. Na là chất oxi hóa", "B. Na bị khử", "C. H₂O là chất khử", "D. Na là chất khử"],
    "a": "D. Na là chất khử",
    "level": "van_dung"
  },
  {
    "q": "Khi đun nóng Ethylic alcohol với dung dịch Acetic acid có H₂SO₄ đặc làm xúc tác, thu được chất nào sau đây?",
    "options": ["A. Ethyl acetate", "B. Ethyne", "C. Formic acid", "D. Acetic acid"],
    "a": "A. Ethyl acetate",
    "level": "thong_hieu"
  },
  {
    "q": "Kim loại nào được chiết xuất từ nước biển?",
    "options": ["A. Potassium", "B. Magnesium", "C. Beryllium", "D. Sodium"],
    "a": "D. Sodium",
    "level": "nhan_biet"
  },
  {
    "q": "Nhóm kim loại đều tác dụng với nước ở điều kiện thường là:",
    "options": ["A. Ca, Fe, K", "B. Na, Ba, Al", "C. K, Na, Ba", "D. Li, Na, Cu, K"],
    "a": "C. K, Na, Ba",
    "level": "thong_hieu"
  },
  {
    "q": "Cho các kim loại sau: Fe, Al, Mg, Cu số kim loại tác dụng với dd H₂SO₄ loãng là:",
    "options": ["A. 1", "B. 2", "C. 3", "D. 4"],
    "a": "C. 3",
    "level": "thong_hieu"
  },
  {
    "q": "Hòa tan hoàn toàn m gam ancol đơn chức vào 200 ml dung dịch AgNO₃ 0,1M. Khi phản ứng kết thúc, lấy lá Zn ra cân thì khối lượng lá Zn tăng thêm:",
    "options": ["A. 1,51 gam", "B. 0,43 gam", "C. 1,36 gam", "D. 2,16 gam"],
    "a": "A. 1,51 gam",
    "level": "van_dung"
  },
  {
    "q": "Chất nào sau đây là ankan?",
    "options": ["A. C₂H₅OH", "B. C₂H₆", "C. C₃H₆", "D. C₂H₄"],
    "a": "B. C₂H₆",
    "level": "nhan_biet"
  },
  {
    "q": "Vì sao không được đun bếp than trong phòng kín?",
    "options": ["A. Vì than toả nhiều nhiệt, dẫn đến phòng quá nóng", "B. Vì than cháy tạo nhiều khí CO, CO₂ có thể gây ngộ độc nếu ngửi quá nhiều trong phòng kín", "C. Vì than không cháy được trong phòng kín", "D. Vì gió thổi than quá cao"],
    "a": "B. Vì than cháy tạo nhiều khí CO, CO₂ có thể gây ngộ độc nếu ngửi quá nhiều trong phòng kín",
    "level": "thong_hieu"
  },
  {
    "q": "Biết 0,01 mol hiđrocacbon X làm mất màu vừa đủ 100 ml dd bromine 0,1M. Công thức của X là:",
    "options": ["A. CH₄", "B. C₂H₂", "C. C₂H₄", "D. C₆H₆"],
    "a": "C. C₂H₄",
    "level": "van_dung"
  },
  {
    "q": "Alcohol là những hợp chất hữu cơ mà phân tử có chứa nhóm -OH",
    "options": ["A. Nguyên tử Cacbon", "B. Nguyên tử Cacbon không no", "C. Nguyên tử Cacbon no", "D. Nguyên tử Oxygene"],
    "a": "C. Nguyên tử Cacbon no",
    "level": "nhan_biet"
  },
  {
    "q": "Để phân biệt etylic ancol và axit axetic có thể dùng chất nào sau đây:",
    "options": ["A. Kim loại Na", "B. Dung dịch NaOH", "C. Dung dịch NaCl", "D. Dung dịch Na₂CO₃"],
    "a": "D. Dung dịch Na₂CO₃",
    "level": "thong_hieu"
  },
  {
    "q": "Để phân biệt hai gói bột màu trắng là Glucozơ, tinh bột và Saccarozơ sẽ sử dụng cách nào sau đây:",
    "options": ["A. Dung dịch bromine và Cu(OH)₂", "B. Dung dịch NaOH và dd Iodine", "C. Hoà tan trong nước và dd HCl", "D. Hoà tan vào nước và cho phản ứng với dd AgNO₃ trong NH₃"],
    "a": "D. Hoà tan vào nước và cho phản ứng với dd AgNO₃ trong NH₃",
    "level": "van_dung"
  },
  {
    "q": "Đun nóng 100 ml dd glucozơ với dd dư AgNO₃/NH₃, thu được 5,4 gam bạc. Nồng độ mol của dd glucozơ là:",
    "options": ["A. 0,025 M", "B. 0,05 M", "C. 0,25 M", "D. 0,125 M"],
    "a": "C. 0,25 M",
    "level": "van_dung"
  },
  {
    "q": "Trứng là loại thực phẩm chứa nhiều:",
    "options": ["A. chất béo", "B. chất đường", "C. chất bột", "D. protein"],
    "a": "D. protein",
    "level": "nhan_biet"
  },
  {
    "q": "Khi lên men 1 tấn tinh bột chứa 5% tạp chất tơ thành etylic alcohol. Hiệu suất cuối của quá trình lên men là 85%. Khối lượng etylic alcohol thu được là:",
    "options": ["A. 400 kg", "B. 579,8 kg", "C. 389,8 kg", "D. 390 kg"],
    "a": "C. 389,8 kg",
    "level": "van_dung"
  },
  {
    "q": "Quá trình nào sau đây sinh ra khí oxygen?",
    "options": ["A. Đốt cháy khí thiên nhiên", "B. Sản xuất vôi sống", "C. Hô hấp của người và động vật", "D. Quang hợp của cây xanh"],
    "a": "D. Quang hợp của cây xanh",
    "level": "nhan_biet"
  },
  {
    "q": "Hợp chất hữu cơ thường chứa nguyên tố nào là chủ yếu?",
    "options": ["A. Nitơ", "B. Carbon", "C. Lưu huỳnh", "D. Clo"],
    "a": "B. Carbon",
    "level": "nhan_biet"
  },
  {
    "q": "Công thức tổng quát của dãy đồng đẳng alkane là",
    "options": ["A. CₙH₂ₙ", "B. CₙH₂ₙ₊₂", "C. CₙH₂ₙ₋₂", "D. CₙH₂ₙ₋₄"],
    "a": "B. CₙH₂ₙ₊₂",
    "level": "nhan_biet"
  },
  {
    "q": "Công thức của ethylene là:",
    "options": ["A. C₂H₂", "B. C₂H₄", "C. C₂H₆", "D. CH₄"],
    "a": "B. C₂H₄",
    "level": "nhan_biet"
  },
  {
    "q": "Điểm khác biệt cơ bản về tính chất giữa kim loại và phi kim là",
    "options": ["A. kim loại dẫn điện tốt, phi kim không dẫn điện (trừ than chì)", "B. phi kim cứng hơn kim loại", "C. kim loại nhẹ hơn phi kim", "D. kim loại có nhiệt độ nóng chảy thấp hơn phi kim"],
    "a": "A. kim loại dẫn điện tốt, phi kim không dẫn điện (trừ than chì)",
    "level": "thong_hieu"
  },
  {
    "q": "Khả năng bị oxi hóa của kim loại và phi kim khác nhau như thế nào?",
    "options": ["A. Kim loại dễ bị oxi hóa, phi kim khó bị oxi hóa", "B. Kim loại và phi kim đều dễ bị oxi hóa như nhau", "C. Phi kim dễ bị oxi hóa, kim loại khó bị oxi hóa", "D. Kim loại không bị oxi hóa, phi kim luôn bị oxi hóa"],
    "a": "A. Kim loại dễ bị oxi hóa, phi kim khó bị oxi hóa",
    "level": "thong_hieu"
  },
  {
    "q": "Công thức hóa học của ethylic alcohol là:",
    "options": ["A. CH₄", "B. C₂H₅OH", "C. C₂H₂", "D. C₂H₆"],
    "a": "B. C₂H₅OH",
    "level": "nhan_biet"
  },
  {
    "q": "Dung dịch acetic acid có tính chất nào sau đây?",
    "options": ["A. Làm quỳ tím hóa xanh", "B. Làm quỳ tím hóa đỏ", "C. Không làm đổi màu quỳ tím", "D. Làm quỳ tím hóa vàng"],
    "a": "B. Làm quỳ tím hóa đỏ",
    "level": "thong_hieu"
  },
  {
    "q": "Để đốt cháy hoàn toàn 2,24 lít khí ethylene (C₂H₄) ở điều kiện chuẩn, cần dùng:",
    "options": ["A. 2,24 lít O₂", "B. 3,36 lít O₂", "C. 4,48 lít O₂", "D. 5,60 lít O₂"],
    "a": "C. 4,48 lít O₂",
    "level": "van_dung"
  },
  {
    "q": "Trong công nghiệp, để sản xuất cồn (ethylic alcohol) từ tinh bột, quá trình nào sau đây là bắt buộc?",
    "options": ["A. Chưng cất tinh bột", "B. Đun nóng tinh bột với axit", "C. Thủy phân tinh bột thành glucose rồi lên men", "D. Hòa tan tinh bột trong etanol"],
    "a": "C. Thủy phân tinh bột thành glucose rồi lên men",
    "level": "nhan_biet"
  },
  {
    "q": "Acetic acid (CH₃COOH) là một acid hữu cơ yếu. Khi hòa tan trong nước, CH₃COOH thể hiện tính acid vì:",
    "options": ["A. Nó phân li hoàn toàn thành CH₃COO⁻ và H⁺", "B. Nó có mùi đặc trưng giống giấm", "C. Nó phản ứng với base tạo ra muối và nước", "D. Nó là một chất lỏng không màu"],
    "a": "C. Nó phản ứng với base tạo ra muối và nước",
    "level": "thong_hieu"
  },
  {
    "q": "Một học sinh cho biết: \"Một chất béo có cấu tạo từ glycerol và acid béo no.\" Khi đun nóng chất béo này với dung dịch NaOH, sản phẩm thu được là:",
    "options": ["A. Glycerol và muối của acid béo", "B. Glucose và acid béo", "C. Amino acid và glycerol", "D. Muối vô cơ và nước"],
    "a": "A. Glycerol và muối của acid béo",
    "level": "van_dung"
  },
  {
    "q": "Một dung dịch có khả năng làm mất màu dung dịch Bromine và tạo kết tủa khi đun nóng với AgNO₃/NH₃. Chất này thuộc loại:",
    "options": ["A. Tinh bột", "B. Saccharose", "C. Glucose", "D. Cellulose"],
    "a": "C. Glucose",
    "level": "van_dung"
  },
  {
    "q": "Một loại polymer có cấu trúc gồm nhiều đơn vị amino axit liên kết với nhau bằng liên kết peptide. Khi thủy phân hoàn toàn polymer này trong môi trường acid, sản phẩm thu được là:",
    "options": ["A. Glycerol và acid béo", "B. Amino acid", "C. Cellulose", "D. Acid amin và đường"],
    "a": "B. Amino acid",
    "level": "van_dung"
  },
  {
    "q": "Người ta khai thác khoáng sản từ vỏ Trái Đất chủ yếu để phục vụ mục đích nào sau đây?",
    "options": ["A. Nghiên cứu sự hình thành Trái Đất", "B. Sản xuất vật liệu và nhiên liệu cho đời sống và sản xuất", "C. Tạo cảnh quan đẹp cho du lịch", "D. Giữ cân bằng sinh thái"],
    "a": "B. Sản xuất vật liệu và nhiên liệu cho đời sống và sản xuất",
    "level": "nhan_biet"
  },
  {
    "q": "Cho các kim loại Fe, Cu, Al, Zn. Kim loại nào không phản ứng với Hydrochloric acid (HCl)",
    "options": ["A. Cu", "B. Fe", "C. Zn", "D. Al"],
    "a": "A. Cu",
    "level": "nhan_biet"
  },
  {
    "q": "Đặc điểm nào sau đây không phải là của kim loại?",
    "options": ["A. Có tính dẫn nhiệt", "B. Có xu hướng nhận electron để tạo anion", "C. Có ánh kim", "D. Dễ dát mỏng, dễ kéo sợi"],
    "a": "B. Có xu hướng nhận electron để tạo anion",
    "level": "nhan_biet"
  },
  {
    "q": "Vật liệu dưới đây được dùng để chế tạo ruột bút chì?",
    "options": ["A. Chì", "B. Than đá", "C. Than chì", "D. Than vô định hình"],
    "a": "C. Than chì",
    "level": "nhan_biet"
  },
  {
    "q": "Trong điều kiện thường phi kim có thể tồn tại ở thể nào?",
    "options": ["A. Thể lỏng và thể khí", "B. Thể rắn và thể lỏng", "C. chỉ tồn tại ở thể khí", "D. Tồn tại ở cả 3 thể rắn, thể lỏng và thể khí"],
    "a": "D. Tồn tại ở cả 3 thể rắn, thể lỏng và thể khí",
    "level": "thong_hieu"
  },
  {
    "q": "Khi tham gia phản ứng hóa học, bromine có thể tồn tại ở dạng ion Br⁻. Bromine thuộc loại chất nào sau đây?",
    "options": ["A. Phi kim", "B. Hợp kim", "C. Kim loại", "D. Khí hiếm"],
    "a": "A. Phi kim",
    "level": "thong_hieu"
  },
  {
    "q": "Hợp chất hữu cơ là",
    "options": ["A. Hợp chất khó tan trong nước", "B. Hợp chất của carbon và một số nguyên tố khác trừ N, Cl, O", "C. Hợp chất của carbon trừ CO, CO₂, H₂CO₃, muối carbonate kim loại...", "D. Hợp chất có nhiệt độ sôi cao"],
    "a": "C. Hợp chất của carbon trừ CO, CO₂, H₂CO₃, muối carbonate kim loại...",
    "level": "nhan_biet"
  },
  {
    "q": "Công thức cấu tạo của một hợp chất cho biết",
    "options": ["A. Thành phần phân tử", "B. Trật tự liên kết giữa các nguyên tử trong phân tử", "C. Thành phần phân tử và trật tự liên kết giữa các nguyên tử trong phân tử", "D. Thành phần phân tử và sự tham gia liên kết với các hợp chất khác"],
    "a": "C. Thành phần phân tử và trật tự liên kết giữa các nguyên tử trong phân tử",
    "level": "thong_hieu"
  },
  {
    "q": "Một hợp chất hữu cơ A chứa 32% C, 4% H và 64% O về khối lượng. Biết một phân tử A có 6 nguyên tử oxygen, công thức phân tử của A là",
    "options": ["A. C₄H₆O₆", "B. C₂H₃O₃", "C. C₆H₁₂O₆", "D. C₆H₄O₆"],
    "a": "A. C₄H₆O₆",
    "level": "van_dung"
  },
  {
    "q": "Nhận xét nào sau đây là sai?",
    "options": ["A. Ethylic alcohol là chất lỏng, không màu", "B. Ethylic alcohol tan vô hạn trong nước", "C. Ethylic alcohol có thể hòa tan được iodine", "D. Ethylic alcohol nặng hơn nước"],
    "a": "D. Ethylic alcohol nặng hơn nước",
    "level": "nhan_biet"
  },
  {
    "q": "Hợp chất nào sau đây phản ứng với dung dịch acetic acid thấy bọt khí thoát ra",
    "options": ["A. CaCO₃", "B. NaOH", "C. ZnO", "D. C₂H₅OH"],
    "a": "A. CaCO₃",
    "level": "thong_hieu"
  },
  {
    "q": "Thủy phân hoàn toàn 89 gam tristearin (C₁₇H₃₅COO)₃C₃H₅ trong dung dịch NaOH dư, đun nóng, thu được dung dịch chứa b gam muối. Giá trị của b là",
    "options": ["A. 92,6", "B. 85,3", "C. 104,5", "D. 91,8"],
    "a": "D. 91,8",
    "level": "van_dung"
  },
  {
    "q": "Lên men 45 gam dung dịch glucose 20%. Tính nồng độ % của dung dịch ethylic alcohol thu được sau phản ứng, biết hiệu suất của quá trình lên men là 80%",
    "options": ["A. 8,87 %", "B. 9,97 %", "C. 10,97 %", "D. 7,87 %"],
    "a": "B. 9,97 %",
    "level": "van_dung"
  },
  {
    "q": "Các sản phẩm từ nhựa PP có độ bóng bề mặt tốt, với khả năng chống thấm nước và thấm khí, không dễ bị oxy hóa hay ảnh hưởng bởi các loại khí khác, hơi nước hay dầu mỡ nên chúng thường được tận dụng làm các loại hộp, hũ, can, bình đựng, bao bì,... được sử dụng phổ biến trong đời sống sinh hoạt thường ngày của con người. Khối lượng nhựa PP thu được khi trùng hợp 1,5 tấn Propylen với hiệu suất 92% là",
    "options": ["A. 1 tấn", "B. 1,38 tấn", "C. 1,82 tấn", "D. 2 tấn"],
    "a": "B. 1,38 tấn",
    "level": "van_dung"
  },
  {
    "q": "Để dập tắt xăng, dầu cháy người ta",
    "options": ["A. Phun nước vào ngọn lửa", "B. Dùng chăn ướt chùm lên ngọn lửa", "C. Phủ cát vào ngọn lửa", "D. B và C đều đúng"],
    "a": "D. B và C đều đúng",
    "level": "nhan_biet"
  },
  {
    "q": "Trong các kim loại sau đây, kim loại dẫn nhiệt tốt nhất là",
    "options": ["A. Silver (Ag)", "B. Gold (Au)", "C. Copper (Cu)", "D. Aluminium (Al)"],
    "a": "A. Silver (Ag)",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại có những tính chất vật lí chung nào sau đây?",
    "options": ["A. Tính dẻo, tính dẫn điện, nhiệt độ nóng chảy cao", "B. Tính dẻo, tính dẫn nhiệt, rất cứng", "C. Tính dẻo, tính dẫn điện, tính dẫn nhiệt và có ánh kim", "D. Tính dẻo, có ánh kim, khối lượng riêng lớn"],
    "a": "C. Tính dẻo, tính dẫn điện, tính dẫn nhiệt và có ánh kim",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại nào sau đây hoạt động hóa học mạnh nhất?",
    "options": ["A. Fe", "B. K", "C. Mg", "D. Al"],
    "a": "B. K",
    "level": "nhan_biet"
  },
  {
    "q": "Ở nhiệt độ thường, kim loại Fe phản ứng được với dung dịch nào sau đây?",
    "options": ["A. NaCl", "B. CuCl₂", "C. FeCl₂", "D. ZnCl₂"],
    "a": "B. CuCl₂",
    "level": "thong_hieu"
  },
  {
    "q": "Ở nhiệt độ cao, H₂ khử được oxide nào sau đây?",
    "options": ["A. K₂O", "B. CaO", "C. Na₂O", "D. FeO"],
    "a": "D. FeO",
    "level": "thong_hieu"
  },
  {
    "q": "Hợp chất hữu cơ là",
    "options": ["A. hợp chất của oxygen với một nguyên tố hóa học khác", "B. hợp chất của carbon, hydrogen và oxygen", "C. hợp chất của carbon và hydrogen", "D. hợp chất của carbon (trừ CO, CO₂, H₂CO₃, các muối carbonate kim loại, ...)"],
    "a": "D. hợp chất của carbon (trừ CO, CO₂, H₂CO₃, các muối carbonate kim loại, ...)",
    "level": "nhan_biet"
  },
  {
    "q": "Alkane CH₃-CH₂-CH₂-CH₃ có tên gọi là",
    "options": ["A. methane", "B. ethane", "C. propane", "D. butane"],
    "a": "D. butane",
    "level": "nhan_biet"
  },
  {
    "q": "Để dập tắt đám cháy nhỏ do xăng, dầu người ta dùng biện pháp",
    "options": ["A. phun nước vào ngọn lửa", "B. phủ cát vào ngọn lửa", "C. thổi oxygen vào ngọn lửa", "D. phun dung dịch muối ăn vào ngọn lửa"],
    "a": "B. phủ cát vào ngọn lửa",
    "level": "thong_hieu"
  },
  {
    "q": "Độ cồn là",
    "options": ["A. số ml ethylic alcohol nguyên chất có trong 100 ml dung dịch", "B. số ml nước có trong 100 ml dung dịch", "C. số gam ethylic alcohol nguyên chất có trong 100 ml dung dịch", "D. số gam nước có trong 100 gam dung dịch"],
    "a": "A. số ml ethylic alcohol nguyên chất có trong 100 ml dung dịch",
    "level": "nhan_biet"
  },
  {
    "q": "Phản ứng nào dưới đây cho thấy acetic acid có tính acid?",
    "options": ["A. 2CH₃COOH + 2Na → 2CH₃COONa + H₂", "B. CH₃COOH + 2O₂ → 2CO₂ + 2H₂O", "C. CH₃COOH + NaOH → CH₃COONa + H₂O", "D. C₂H₅OH + O₂ → CH₃COOH + H₂O"],
    "a": "C. CH₃COOH + NaOH → CH₃COONa + H₂O",
    "level": "thong_hieu"
  },
  {
    "q": "Đâu là biện pháp sử dụng chất béo phù hợp trong ăn uống hàng ngày để giúp cơ thể khỏe mạnh và tránh bệnh béo phì?",
    "options": ["A. Ăn nhiều thực phẩm chiên rán để cung cấp đủ năng lượng cho cơ thể", "B. Hạn chế tối đa mọi loại chất béo, kể cả chất béo từ thực vật", "C. Ưu tiên sử dụng chất béo không bão hòa từ thực vật và cá, hạn chế chất béo bão hòa và chất béo chuyển hóa", "D. Ăn càng nhiều chất béo càng tốt để cơ thể không bị thiếu hụt năng lượng"],
    "a": "C. Ưu tiên sử dụng chất béo không bão hòa từ thực vật và cá, hạn chế chất béo bão hòa và chất béo chuyển hóa",
    "level": "van_dung"
  },
  {
    "q": "Thực phẩm nào sau đây là giàu saccharose?",
    "options": ["A. Mía", "B. Gạo", "C. Sữa", "D. Khoai lang"],
    "a": "A. Mía",
    "level": "nhan_biet"
  },
  {
    "q": "Biện pháp nào sau đây giúp sử dụng tinh bột một cách hợp lý để đảm bảo sức khỏe?",
    "options": ["A. Ăn càng nhiều cơm, bún, bánh mì trong ngày càng tốt để đủ năng lượng", "B. Loại bỏ hoàn toàn tinh bột trong khẩu phần ăn để giảm cân", "C. Ăn tinh bột điều độ, kết hợp với chất đạm, chất béo và rau xanh trong mỗi bữa ăn", "D. Chỉ ăn tinh bột vào buổi sáng, bỏ ăn trưa và tối để tránh tăng cân"],
    "a": "C. Ăn tinh bột điều độ, kết hợp với chất đạm, chất béo và rau xanh trong mỗi bữa ăn",
    "level": "van_dung"
  },
  {
    "q": "Nhiên liệu hóa thạch là gì?",
    "options": ["A. Là các loại nhiên liệu được tổng hợp trong phòng thí nghiệm từ các chất hóa học", "B. Là nhiên liệu thu được từ các phản ứng hạt nhân trong lòng đất", "C. Là nhiên liệu được tạo thành từ xác sinh vật bị chôn vùi và phân hủy trong lòng đất hàng triệu năm", "D. Là nguồn năng lượng tái tạo được tạo ra từ gió và mặt trời"],
    "a": "C. Là nhiên liệu được tạo thành từ xác sinh vật bị chôn vùi và phân hủy trong lòng đất hàng triệu năm",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy kim loại được sắp xếp theo chiều hoạt động hóa học giảm dần:",
    "options": ["A. Na; Mg; Zn", "B. Al; Zn; Na", "C. Mg; Al; Na", "D. Pb; Al; Mg"],
    "a": "A. Na; Mg; Zn",
    "level": "nhan_biet"
  },
  {
    "q": "Trong công nghiệp, kim loại nào sau đây chỉ được điều chế bằng phương pháp điện phân nóng chảy?",
    "options": ["A. Fe", "B. Cu", "C. Mg", "D. Ag"],
    "a": "C. Mg",
    "level": "nhan_biet"
  },
  {
    "q": "Chất nào sau đây không phải dạng thù hình của cacbon?",
    "options": ["A. than chì", "B. thạch anh", "C. kim cương", "D. cacbon vô định hình"],
    "a": "B. thạch anh",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy kim loại tác dụng được với dung dịch Cu(NO₃)₂ tạo thành Cu:",
    "options": ["A. Al; Zn; Fe", "B. Zn; Pb; Au", "C. Mg; Fe; Ag", "D. Na; Mg; Al"],
    "a": "A. Al; Zn; Fe",
    "level": "thong_hieu"
  },
  {
    "q": "Cho luồng khí CO (dư) qua ống sứ chứa hỗn hợp Fe₃O₄, Al₂O₃, MgO nung ở nhiệt độ cao. Sau phản ứng thu được hỗn hợp chất rắn gồm",
    "options": ["A. Fe₃O₄, Al và MgO", "B. Fe, Al và Mg", "C. Fe, Al và MgO", "D. Fe, Al₂O₃ và MgO"],
    "a": "D. Fe, Al₂O₃ và MgO",
    "level": "thong_hieu"
  },
  {
    "q": "Trong thành phần phân tử hợp chất hữu cơ nhất thiết phải có nguyên tố",
    "options": ["A. cacbon", "B. hiđro", "C. oxi", "D. nitơ"],
    "a": "A. cacbon",
    "level": "nhan_biet"
  },
  {
    "q": "Hydrocarbon có trong khí bùn ao là:",
    "options": ["A. methane", "B. propane", "C. ethylene", "D. butane"],
    "a": "A. methane",
    "level": "thong_hieu"
  },
  {
    "q": "Đốt cháy hoàn toàn 12,395 lít khí ethylene C₂H₄ (đkc). Thể tích khí O₂ cần dùng (ở đkc) là:",
    "options": ["A. 33,6 lít", "B. 37,185 lít", "C. 48 lít", "D. 24,79 lít"],
    "a": "B. 37,185 lít",
    "level": "van_dung"
  },
  {
    "q": "Độ rượu là:",
    "options": ["A. số ml ethylic alcohol có trong 100 ml hỗn hợp rượu với nước", "B. số ml nước có trong 100 ml hỗn hợp rượu với nước", "C. số gam ethylic alcohol có trong 100 ml hỗn hợp rượu với nước", "D. số gam nước có trong 100 gam hỗn hợp rượu với nước"],
    "a": "A. số ml ethylic alcohol có trong 100 ml hỗn hợp rượu với nước",
    "level": "nhan_biet"
  },
  {
    "q": "Trong các chất dưới đây, chất nào có tính chất hoá học đặc trưng giống acetic acid?",
    "options": ["A. CH₃OH", "B. CH₃CHO", "C. HCOOH", "D. CH₃COOC₂H₅"],
    "a": "C. HCOOH",
    "level": "thong_hieu"
  },
  {
    "q": "Thủy phân hoàn toàn triglyceride X trong dung dịch NaOH thu được C₁₅H₃₁COONa và C₃H₅(OH)₃. Công thức của X là:",
    "options": ["A. (C₁₇H₃₁COO)₃C₃H₅", "B. (C₁₅H₃₁COO)₃C₃H₅", "C. (C₁₇H₃₃COO)₃C₃H₅", "D. (C₁₇H₃₅COO)₃C₃H₅"],
    "a": "B. (C₁₅H₃₁COO)₃C₃H₅",
    "level": "van_dung"
  },
  {
    "q": "Từ 1 tấn nước mía chứa 13% saccharose có thể thu được bao nhiêu kg saccharose? Cho biết hiệu suất thu hồi đường đạt 80%.",
    "options": ["A. 104 kg", "B. 130 kg", "C. 140 kg", "D. 103 kg"],
    "a": "A. 104 kg",
    "level": "van_dung"
  },
  {
    "q": "Thủy phân 64,8 gam tinh bột với hiệu suất của phản ứng đạt 70%, khối lượng glucose thu được là",
    "options": ["A. 49,7 gam", "B. 50,4 gam", "C. 51,4 gam", "D. 52,8 gam"],
    "a": "B. 50,4 gam",
    "level": "van_dung"
  },
  {
    "q": "Dầu mỏ là nhiên liệu tồn tại ở dạng nào?",
    "options": ["A. Thể rắn", "B. Thể lỏng", "C. Thể khí", "D. Cả rắn, lỏng và khí"],
    "a": "B. Thể lỏng",
    "level": "nhan_biet"
  },
  {
    "q": "Ở điều kiện thường, kim loại X là chất lỏng, được sử dụng trong nhiệt kế, áp kế. Kim loại X là:",
    "options": ["A. Silver (Ag)", "B. Mercury (Hg)", "C. Sodium (Na)", "D. Lead (Pb)"],
    "a": "B. Mercury (Hg)",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại không phản ứng được với dung dịch acid là:",
    "options": ["A. Al", "B. Fe", "C. Mg", "D. Au"],
    "a": "D. Au",
    "level": "nhan_biet"
  },
  {
    "q": "Hơi thủy ngân rất độc, bởi vậy khi làm vỡ nhiệt kế thủy ngân thì chất bột được dùng để rắc lên thủy ngân rồi gom lại là:",
    "options": ["A. vôi sống", "B. cát", "C. muối ăn", "D. lưu huỳnh"],
    "a": "D. lưu huỳnh",
    "level": "thong_hieu"
  },
  {
    "q": "Phi kim nào sau đây có khả năng dẫn điện?",
    "options": ["A. Sulfur", "B. Phosphorus", "C. Silicon", "D. Carbon (Than chì)"],
    "a": "D. Carbon (Than chì)",
    "level": "nhan_biet"
  },
  {
    "q": "Ứng dụng nào sau đây không phải của Sulfur?",
    "options": ["A. Làm nguyên liệu sản xuất sulfuric acid", "B. Làm chất lưu hóa cao su", "C. Khử chua đất", "D. Điều chế thuốc súng đen"],
    "a": "C. Khử chua đất",
    "level": "thong_hieu"
  },
  {
    "q": "Chất nào sau đây thuộc loại hợp chất hữu cơ?",
    "options": ["A. CO₂", "B. CO", "C. K₂CO₃", "D. CH₄"],
    "a": "D. CH₄",
    "level": "nhan_biet"
  },
  {
    "q": "Liên kết hóa học trong phân tử chất hữu cơ chủ yếu là liên kết",
    "options": ["A. Ion", "B. Hydrogen", "C. Kim loại", "D. Cộng hóa trị"],
    "a": "D. Cộng hóa trị",
    "level": "nhan_biet"
  },
  {
    "q": "Gas, nhiên liệu phổ biến hiện nay có thành phần chính là propane và butane. Nhiệt lượng giải phóng khi đốt cháy hoàn toàn 1 kg một loại gas là khoảng 50 400 kJ. Biết để làm nóng 1 kg nước lên 1 độ thì cần cung cấp nhiệt lượng là 4 200 J. Để đun sôi 30 kg nước từ nhiệt độ 20°C cần cung cấp bao nhiêu kJ nhiệt?",
    "options": ["A. 2520 kJ", "B. 5040 kJ", "C. 10080 kJ", "D. 6048 kJ"],
    "a": "C. 10080 kJ",
    "level": "van_dung"
  },
  {
    "q": "Ethylic alcohol có lẫn một ít nước, có thể dùng chất nào sau đây để làm khan nó?",
    "options": ["A. CaO", "B. H₂SO₄ đặc", "C. CuSO₄ khan", "D. Cả ba đáp án trên"],
    "a": "D. Cả ba đáp án trên",
    "level": "thong_hieu"
  },
  {
    "q": "Giấm ăn có nồng độ acetic acid thường là:",
    "options": ["A. 1% - 2%", "B. 2% - 5%", "C. 10% - 12%", "D. 25% - 30%"],
    "a": "B. 2% - 5%",
    "level": "nhan_biet"
  },
  {
    "q": "Cho 6,5 gam kim loại Zinc vào 200ml dung dịch acid acetic, nồng độ mol của dung dịch acid acetic đã dùng là:",
    "options": ["A. 0,04M", "B. 0,05M", "C. 0,1M", "D. 1M"],
    "a": "D. 1M",
    "level": "van_dung"
  },
  {
    "q": "Phản ứng thủy phân chất béo trong môi trường kiềm còn gọi là phản ứng",
    "options": ["A. thủy phân hóa", "B. xà phòng hóa", "C. ester hóa", "D. hydrogen hóa"],
    "a": "B. xà phòng hóa",
    "level": "nhan_biet"
  },
  {
    "q": "Tính khối lượng glucose có trong 300 mL dung dịch 0,25M",
    "options": ["A. 10,80 gam", "B. 18,90 gam", "C. 13,50 gam", "D. 8,10 gam"],
    "a": "C. 13,50 gam",
    "level": "van_dung"
  },
  {
    "q": "Trong công nghiệp chế tạo ruột phích, người ta thường sử dụng phản ứng hoá học nào sau đây?",
    "options": ["A. Cho ethylene tác dụng với dung dịch AgNO₃/NH₃", "B. Cho ethylic alcohol tác dụng với dung dịch AgNO₃/NH₃", "C. Cho acetic acid tác dụng với dung dịch AgNO₃/NH₃", "D. Cho glucose tác dụng với dung dịch AgNO₃/NH₃"],
    "a": "D. Cho glucose tác dụng với dung dịch AgNO₃/NH₃",
    "level": "thong_hieu"
  },
  {
    "q": "Sự khác nhau cơ bản nhất giữa kim loại và phi kim là:",
    "options": ["A. Kim loại dẫn điện tốt, phi kim dẫn điện kém", "B. Kim loại có ánh kim, phi kim không có ánh kim", "C. Kim loại dễ nhường electron, phi kim dễ nhận electron", "D. Kim loại dẻo, phi kim giòn"],
    "a": "C. Kim loại dễ nhường electron, phi kim dễ nhận electron",
    "level": "nhan_biet"
  },
  {
    "q": "Trong Bảng tuần hoàn các nguyên tố hóa học, các nguyên tố kim loại thường nằm ở đâu?",
    "options": ["A. Góc trên bên phải", "B. Ở giữa và bên trái", "C. Ở cuối chu kì", "D. Rải rác khắp bảng"],
    "a": "B. Ở giữa và bên trái",
    "level": "nhan_biet"
  },
  {
    "q": "Tính chất nào sau đây không phải tính chất vật lí đặc trưng của kim loại?",
    "options": ["A. Dẫn điện", "B. Dẻo, dễ dát mỏng", "C. Có ánh kim", "D. Dễ bay hơi ở nhiệt độ thường"],
    "a": "D. Dễ bay hơi ở nhiệt độ thường",
    "level": "nhan_biet"
  },
  {
    "q": "Nguyên tử kim loại thường có tính khử vì:",
    "options": ["A. Dễ nhận electron để tạo ion âm", "B. Có ít electron ở lớp ngoài cùng và dễ nhường đi", "C. Có số hiệu nguyên tử lớn", "D. Nằm ở cuối chu kì"],
    "a": "B. Có ít electron ở lớp ngoài cùng và dễ nhường đi",
    "level": "thong_hieu"
  },
  {
    "q": "Vì sao nói sự khác nhau cơ bản về tính chất hóa học giữa kim loại và phi kim là:",
    "options": ["A. Kim loại có tính oxi hóa, phi kim có tính khử", "B. Kim loại có tính khử, phi kim có tính oxi hóa", "C. Cả hai đều có tính oxi hóa mạnh", "D. Cả hai đều có tính khử mạnh"],
    "a": "B. Kim loại có tính khử, phi kim có tính oxi hóa",
    "level": "thong_hieu"
  },
  {
    "q": "Trong các chất sau, chất nào không phải chất hữu cơ?",
    "options": ["A. CH₄", "B. C₂H₆", "C. CaCO₃", "D. C₆H₆"],
    "a": "C. CaCO₃",
    "level": "nhan_biet"
  },
  {
    "q": "Trong các chất sau, chất nào khi cháy sinh ra nhiều khí CO₂ gây hiệu ứng nhà kính nhất?",
    "options": ["A. Khí metan (CH₄)", "B. Than đá (gần như C nguyên chất)", "C. Dầu hỏa (hỗn hợp hiđrocacbon)", "D. Khí etilen (C₂H₄)"],
    "a": "B. Than đá (gần như C nguyên chất)",
    "level": "thong_hieu"
  },
  {
    "q": "Đốt cháy hoàn toàn 4,48 lít methane (CH₄) ở đkc, thể tích khí CO₂ sinh ra (đkc) là:",
    "options": ["A. 2,24 lít", "B. 4,48 lít", "C. 6,72 lít", "D. 8,96 lít"],
    "a": "B. 4,48 lít",
    "level": "van_dung"
  },
  {
    "q": "Công thức hóa học của ethylic alcohol là:",
    "options": ["A. C₂H₅OH", "B. CH₃COOH", "C. C₆H₆", "D. CH₄"],
    "a": "A. C₂H₅OH",
    "level": "nhan_biet"
  },
  {
    "q": "Nguyên nhân làm acetic acid có tính acid là:",
    "options": ["A. Phân tử chứa nhóm -OH", "B. Phân tử chứa nhóm -CHO", "C. Phân tử chứa nhóm -COOH", "D. Phân tử chỉ chứa C và H"],
    "a": "C. Phân tử chứa nhóm -COOH",
    "level": "thong_hieu"
  },
  {
    "q": "Đun nóng dung dịch glucose với dung dịch AgNO₃/NH₃, hiện tượng xảy ra:",
    "options": ["A. Có khí thoát ra", "B. Có kết tủa Ag trắng sáng bám trên thành ống nghiệm (phản ứng tráng bạc)", "C. Có mùi hắc xuất hiện", "D. Không có hiện tượng gì"],
    "a": "B. Có kết tủa Ag trắng sáng bám trên thành ống nghiệm (phản ứng tráng bạc)",
    "level": "van_dung"
  },
  {
    "q": "Cho vài giọt dung dịch HNO₃ đặc vào dung dịch lòng trắng trứng, hiện tượng quan sát được là:",
    "options": ["A. Dung dịch sủi bọt khí", "B. Dung dịch có kết tủa màu vàng (phản ứng màu với HNO₃ đặc)", "C. Dung dịch chuyển màu xanh", "D. Không có hiện tượng"],
    "a": "B. Dung dịch có kết tủa màu vàng (phản ứng màu với HNO₃ đặc)",
    "level": "van_dung"
  },
  {
    "q": "Chất nào sau đây là polymer thiên nhiên?",
    "options": ["A. Tơ nilon-6,6", "B. Nhựa PVC", "C. Cao su buna", "D. Tơ tằm"],
    "a": "D. Tơ tằm",
    "level": "van_dung"
  },
  {
    "q": "Tài nguyên khoáng sản nào sau đây được khai thác chủ yếu để luyện nhôm?",
    "options": ["A. Hematit (Fe₂O₃)", "B. Đá vôi (CaCO₃)", "C. Bauxite (Al₂O₃·nH₂O)", "D. Pyrit (FeS₂)"],
    "a": "C. Bauxite (Al₂O₃·nH₂O)",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại nào dẫn điện tốt nhất?",
    "options": ["A. Fe", "B. Cu", "C. Ag", "D. Al"],
    "a": "C. Ag",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại nào nhẹ, được dùng làm khung máy bay?",
    "options": ["A. Fe", "B. Cu", "C. Al", "D. Zn"],
    "a": "C. Al",
    "level": "nhan_biet"
  },
  {
    "q": "Tính chất hóa học chung của kim loại là:",
    "options": ["A. Tác dụng với phi kim, dung dịch acid, dung dịch muối", "B. Tác dụng với phi kim, kiềm, nước", "C. Tác dụng với phi kim và dung dịch base", "D. Tác dụng với tất cả các chất"],
    "a": "A. Tác dụng với phi kim, dung dịch acid, dung dịch muối",
    "level": "nhan_biet"
  },
  {
    "q": "Cho Fe vào dung dịch CuSO₄, hiện tượng xảy ra:",
    "options": ["A. Dung dịch nhạt màu, có chất rắn đỏ bám trên Fe", "B. Có khí thoát ra", "C. Không hiện tượng", "D. Dung dịch chuyển thành màu vàng"],
    "a": "A. Dung dịch nhạt màu, có chất rắn đỏ bám trên Fe",
    "level": "thong_hieu"
  },
  {
    "q": "Để bảo vệ cầu thép khỏi gỉ, biện pháp bền vững là:",
    "options": ["A. Sơn phủ", "B. Ngâm trong HCl", "C. Để ngoài trời", "D. Ngâm nước muối"],
    "a": "A. Sơn phủ",
    "level": "thong_hieu"
  },
  {
    "q": "Công thức phân tử của methane là:",
    "options": ["A. C₂H₂", "B. C₂H₄", "C. CH₄", "D. C₂H₆"],
    "a": "C. CH₄",
    "level": "nhan_biet"
  },
  {
    "q": "Liên kết hóa học trong phân tử chất hữu cơ chủ yếu là liên kết",
    "options": ["A. Cộng hóa trị", "B. Ion", "C. Kim loại", "D. Hydrogen"],
    "a": "A. Cộng hóa trị",
    "level": "nhan_biet"
  },
  {
    "q": "Khi đốt cháy hoàn toàn khí methane, sản phẩm tạo ra là:",
    "options": ["A. CO và H₂O", "B. CO₂ và H₂O", "C. C và H₂O", "D. CO₂ và H₂"],
    "a": "B. CO₂ và H₂O",
    "level": "thong_hieu"
  },
  {
    "q": "Vì sao khí gas hóa lỏng (LPG) được ưa dùng làm nhiên liệu sinh hoạt?",
    "options": ["A. Rẻ tiền, dễ cháy, ít khói", "B. Khí không màu, không mùi, khó thoát", "C. Không độc hại tuyệt đối", "D. Dễ sản xuất, ít hao hụt"],
    "a": "A. Rẻ tiền, dễ cháy, ít khói",
    "level": "van_dung"
  },
  {
    "q": "Công thức cấu tạo của phân tử ethanol là:",
    "options": ["A. CH₃OH", "B. C₂H₅OH", "C. CH₃COOH", "D. C₃H₇OH"],
    "a": "B. C₂H₅OH",
    "level": "nhan_biet"
  },
  {
    "q": "Formic acid có trong nọc kiến. Khi bị kiến cắn, nên chọn chất nào sau đây bôi vào vết thương để giảm sưng tấy?",
    "options": ["A. Vôi tôi", "B. Muối ăn", "C. Giấm ăn", "D. Nước"],
    "a": "A. Vôi tôi",
    "level": "thong_hieu"
  },
  {
    "q": "Chất nào dưới đây thuộc loại polisaccarit, là thành phần chính của sợi bông?",
    "options": ["A. Glucose", "B. Saccharose", "C. Tinh bột", "D. Cellulose"],
    "a": "D. Cellulose",
    "level": "van_dung"
  },
  {
    "q": "Một loại Amino acid có chứa 13,59% nitrogen về khối lượng. Công thức phân tử của amino acid là",
    "options": ["A. C₃H₇O₂N", "B. C₄H₉O₂N", "C. C₅H₁₁O₂N", "D. C₆H₁₃O₂N"],
    "a": "B. C₄H₉O₂N",
    "level": "van_dung"
  },
  {
    "q": "Phân tử khối trung bình của polyethylene (PE) là 420.000. Số mắt xích có trong phân tử là.",
    "options": ["A. 14000", "B. 15000", "C. 16000", "D. 17000"],
    "a": "B. 15000",
    "level": "van_dung"
  },
  {
    "q": "Nguyên tố nào sau đây là kim loại?",
    "options": ["A. Oxi", "B. Clo", "C. Lưu huỳnh", "D. Nhôm"],
    "a": "D. Nhôm",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại nào sau đây nhẹ nhất (có khối lượng riêng nhỏ nhất)?",
    "options": ["A. Lithium (Li)", "B. Sodium (Na)", "C. Potassium (K)", "D. Rubidium (Rb)"],
    "a": "A. Lithium (Li)",
    "level": "nhan_biet"
  },
  {
    "q": "Lưu hóa cao su là ứng dụng của phi kim nào sau đây?",
    "options": ["A. Lưu huỳnh", "B. Chlorine", "C. Carbon", "D. Phosphorus"],
    "a": "A. Lưu huỳnh",
    "level": "nhan_biet"
  },
  {
    "q": "Khí (X) được dùng để khử trùng nước sinh hoạt. Khí (X) là chất nào sau đây?",
    "options": ["A. CO₂", "B. O₂", "C. Cl₂", "D. N₂"],
    "a": "C. Cl₂",
    "level": "thong_hieu"
  },
  {
    "q": "Vì sao kim loại dẫn điện tốt còn phi kim thường không dẫn điện?",
    "options": ["A. Kim loại có số lượng electron tự do nhiều hơn phi kim", "B. Trong cấu trúc tinh thể kim loại có liên kết kim loại", "C. Phi kim không có electron tự do", "D. Cấu trúc tinh thể kim loại cho phép electron di chuyển thành dòng"],
    "a": "A. Kim loại có số lượng electron tự do nhiều hơn phi kim",
    "level": "thong_hieu"
  },
  {
    "q": "Dầu mỏ là",
    "options": ["A. một hydrocarbon có khối lượng phân tử rất lớn và có cấu tạo phức tạp", "B. hỗn hợp các alkene", "C. hỗn hợp các alkane và alkene", "D. hỗn hợp phức tạp của nhiều hydrocarbon và một lượng nhỏ các dẫn xuất của hydrocarbon"],
    "a": "D. hỗn hợp phức tạp của nhiều hydrocarbon và một lượng nhỏ các dẫn xuất của hydrocarbon",
    "level": "nhan_biet"
  },
  {
    "q": "Đốt cháy một hợp chất hữu cơ Y thu được hơi nước và khí carbon dioxide, khí nitrogen. Trong hợp chất hữu cơ Y chắc chắn có chứa các nguyên tố nào?",
    "options": ["A. C, H, O", "B. C, H, P", "C. C, H, S", "D. C, H, N"],
    "a": "D. C, H, N",
    "level": "thong_hieu"
  },
  {
    "q": "Đốt cháy hoàn toàn 4,48 lít khí metan (CH₄) ở đkc cần bao nhiêu lít O₂ (đkc)?",
    "options": ["A. 4,48 L", "B. 8,96 L", "C. 6,72 L", "D. 2,24 L"],
    "a": "B. 8,96 L",
    "level": "van_dung"
  },
  {
    "q": "Tính chất vật lí của ethylic alcohol là",
    "options": ["A. chất lỏng không màu, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzen,...", "B. chất lỏng màu hồng, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzen,...", "C. chất lỏng không màu, không tan trong nước, hòa tan được nhiều chất như iodine, benzen,...", "D. chất lỏng không màu, nặng hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzen,..."],
    "a": "A. chất lỏng không màu, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzen,...",
    "level": "nhan_biet"
  },
  {
    "q": "Phát biểu nào sau đây là đúng",
    "options": ["A. Acetic acid phản ứng được với muối NaCl và Na₂SO₄", "B. Trong cùng điều kiện, thứ tự độ mạnh acid là: H₂SO₄ > H₂CO₃ > CH₃COOH", "C. Acetic acid có khối lượng mol nhỏ hơn ethylic alcohol", "D. Có thể điều chế acetic acid từ ethylic alcohol chỉ bằng một phản ứng hóa học"],
    "a": "B. Trong cùng điều kiện, thứ tự độ mạnh acid là: H₂SO₄ > H₂CO₃ > CH₃COOH",
    "level": "thong_hieu"
  },
  {
    "q": "Thuỷ phân chất béo trong môi trường kiềm thu được:",
    "options": ["A. Glycerol và muối của một acid béo", "B. Glycerol và acid béo", "C. Glycerol và xà phòng", "D. Glycerol và muối của các acid béo"],
    "a": "D. Glycerol và muối của các acid béo",
    "level": "van_dung"
  },
  {
    "q": "Phân tử khối trung bình của polietilen (PE) là 280.000. Số mắt xích --CH₂--CH₂-- trong phân tử là",
    "options": ["A. 10.000", "B. 12.500", "C. 8.000", "D. 15.000"],
    "a": "A. 10.000",
    "level": "van_dung"
  },
  {
    "q": "Thành phần chính của đá vôi là",
    "options": ["A. CaCO₃", "B. CaO", "C. Ca(OH)₂", "D. Na₂CO₃"],
    "a": "A. CaCO₃",
    "level": "nhan_biet"
  },
  {
    "q": "Chất nào sau đây là acid?",
    "options": ["A. NaOH", "B. HCl", "C. NaCl", "D. CuO"],
    "a": "B. HCl",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại nào sau đây hoạt động hóa học mạnh nhất trong các lựa chọn?",
    "options": ["A. Fe", "B. Cu", "C. K", "D. Ag"],
    "a": "C. K",
    "level": "nhan_biet"
  },
  {
    "q": "Ở điều kiện thường, chất khí nào sau đây nhẹ hơn không khí? (Biết M không khí ≈ 29 g/mol)",
    "options": ["A. CO₂ (M = 44 g/mol)", "B. H₂ (M = 2 g/mol)", "C. O₂ (M = 32 g/mol)", "D. Cl₂ (M = 71 g/mol)"],
    "a": "B. H₂ (M = 2 g/mol)",
    "level": "nhan_biet"
  },
  {
    "q": "Phản ứng hóa học nào sau đây là phản ứng thế?",
    "options": ["A. Fe + S → FeS", "B. CaO + H₂O → Ca(OH)₂", "C. Zn + 2HCl → ZnCl₂ + H₂", "D. 2KClO₃ → 2KCl + 3O₂"],
    "a": "C. Zn + 2HCl → ZnCl₂ + H₂",
    "level": "thong_hieu"
  },
  {
    "q": "Dung dịch Ba(OH)₂ không phản ứng với chất nào sau đây?",
    "options": ["A. HCl", "B. Na₂SO₄", "C. CuO", "D. CO₂"],
    "a": "C. CuO",
    "level": "thong_hieu"
  },
  {
    "q": "Trong phân tử ethyne (C₂H₂), số liên kết ba là:",
    "options": ["A. 0", "B. 1", "C. 2", "D. 3"],
    "a": "B. 1",
    "level": "nhan_biet"
  },
  {
    "q": "Chất hữu cơ nào sau đây có phản ứng trùng hợp?",
    "options": ["A. Methane (CH₄)", "B. Ethane (C₂H₆)", "C. Benzene (C₆H₆)", "D. Ethylene (C₂H₄)"],
    "a": "D. Ethylene (C₂H₄)",
    "level": "thong_hieu"
  },
  {
    "q": "Đốt cháy hoàn toàn 1,12 lít khí methane (CH₄) (đktc). Thể tích khí carbon dioxide (CO₂) thu được (đktc) là:",
    "options": ["A. 1,12 lít", "B. 2,24 lít", "C. 0,56 lít", "D. 4,48 lít"],
    "a": "A. 1,12 lít",
    "level": "van_dung"
  },
  {
    "q": "Công thức hóa học của glucose là:",
    "options": ["A. (C₆H₁₀O₅)n", "B. C₁₂H₂₂O₁₁", "C. C₆H₁₂O₆", "D. C₂H₅OH"],
    "a": "C. C₆H₁₂O₆",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy chất nào sau đây đều có khả năng làm mất màu dung dịch Bromine?",
    "options": ["A. Methane, Ethylene", "B. Ethylene, Ethyne", "C. Ethane, Benzene", "D. Methane, Ethane"],
    "a": "B. Ethylene, Ethyne",
    "level": "thong_hieu"
  },
  {
    "q": "Cho 200 ml dung dịch HCl 1 M tác dụng với MgO. Khối lượng MgO cần dùng là: (Cho Mg = 24, O = 16)",
    "options": ["A. 4 g", "B. 8 g", "C. 2 g", "D. 1 g"],
    "a": "A. 4 g",
    "level": "van_dung"
  },
  {
    "q": "Khối lượng Iron (Fe) có thể điều chế được từ 160 kg Iron(III) oxide (Fe₂O₃) bằng phản ứng với Carbon monoxide (CO) với hiệu suất phản ứng là 80% là: (Cho Fe = 56, O = 16)",
    "options": ["A. 89,6 kg", "B. 112 kg", "C. 100 kg", "D. 140 kg"],
    "a": "A. 89,6 kg",
    "level": "van_dung"
  },
  {
    "q": "Cho 100 ml dung dịch Sodium hydroxide 0,2 M tác dụng vừa đủ với Acetic acid (CH₃COOH). Khối lượng muối Sodium acetate (CH₃COONa) thu được là: (Cho Na = 23, C = 12, H = 1, O = 16)",
    "options": ["A. 0,82 g", "B. 1,64 g", "C. 1,36 g", "D. 0,41 g"],
    "a": "B. 1,64 g",
    "level": "van_dung"
  },
  {
    "q": "Thủy tinh thông thường có thành phần chính là:",
    "options": ["A. CaCO₃", "B. SiO₂", "C. Fe₂O₃", "D. Al₂O₃"],
    "a": "B. SiO₂",
    "level": "nhan_biet"
  },
  {
    "q": "Ở điều kiện thường, kim loại ở trạng thái lỏng là",
    "options": ["A. Ag", "B. Cu", "C. Al", "D. Hg"],
    "a": "D. Hg",
    "level": "nhan_biet"
  },
  {
    "q": "Ở nhiệt độ thường, kim loại Fe phản ứng được với dung dịch",
    "options": ["A. FeCl₂", "B. NaCl", "C. MgCl₂", "D. CuCl₂"],
    "a": "D. CuCl₂",
    "level": "thong_hieu"
  },
  {
    "q": "Những hợp kim có tính chất nào dưới đây được ứng dụng để chế tạo tên lửa, tàu vũ trụ, máy bay?",
    "options": ["A. Những hợp kim nhẹ, bền, chịu được nhiệt độ cao, áp suất cao", "B. Những hợp kim không gỉ, có tính dẻo cao", "C. Những hợp kim có tính cứng cao", "D. Những hợp kim có tính dẫn điện tốt"],
    "a": "A. Những hợp kim nhẹ, bền, chịu được nhiệt độ cao, áp suất cao",
    "level": "thong_hieu"
  },
  {
    "q": "Chọn phát biểu sai.",
    "options": ["A. Kim loại dẫn điện tốt hơn phi kim", "B. Phi kim dẫn điện tốt hơn kim loại", "C. Phi kim có nhiệt độ sôi thấp hơn kim loại", "D. Phi kim có nhiệt độ nóng chảy thấp hơn kim loại"],
    "a": "B. Phi kim dẫn điện tốt hơn kim loại",
    "level": "thong_hieu"
  },
  {
    "q": "Carbon vô định hình được điều chế từ than gỗ hay gáo dừa có tên là than hoạt tính. Tính chất nào của than hoạt tính giúp con người chế tạo các thiết bị phòng độc, lọc nước?",
    "options": ["A. Than hoạt tính dễ cháy", "B. Than hoạt tính có cấu trúc lớp", "C. Than hoạt tính có khả năng hấp phụ cao", "D. Than hoạt tính có khả năng hòa tan tốt trong nhiều dung môi"],
    "a": "C. Than hoạt tính có khả năng hấp phụ cao",
    "level": "nhan_biet"
  },
  {
    "q": "Cho các phát biểu về alkane: (a) Trong phân tử alkane chỉ chứa liên kết đơn (b) Chỉ có các alkane là chất khí ở điều kiện thường được dùng làm nhiên liệu. (c) Các alkane lỏng được dùng sản xuất xăng, dầu và làm dung môi. (d) Các alkane rắn được dùng làm nến, nhựa đường, nguyên liệu cho quá trình cracking. (e) Công thức chung của alkane là CxH2x+2, với x ≥ 1. Số phát biểu đúng là",
    "options": ["A. 2", "B. 3", "C. 4", "D. 5"],
    "a": "C. 4",
    "level": "thong_hieu"
  },
  {
    "q": "Khối lượng khí ethylene cần dùng để phản ứng hết 8 gam bromine trong dung dịch là:",
    "options": ["A. 0,7 gam", "B. 7 gam", "C. 1,4 gam", "D. 14 gam"],
    "a": "C. 1,4 gam",
    "level": "van_dung"
  },
  {
    "q": "Vì sao không đun bếp than trong phòng kín?",
    "options": ["A. Vì than tỏa nhiều nhiệt dẫn đến phòng quá nóng", "B. Vì than cháy tỏa ra rất nhiều khí CO, CO₂ có thể gây tử vong nếu hít vào quá nhiều", "C. Vì than không cháy được trong phòng kín", "D. Vì giá thành than khá cao"],
    "a": "B. Vì than cháy tỏa ra rất nhiều khí CO, CO₂ có thể gây tử vong nếu hít vào quá nhiều",
    "level": "thong_hieu"
  },
  {
    "q": "Ethanol là chất có tác động đến thần kinh trung ương. Khi hàm lượng ethanol trong máu tăng cao sẽ có hiện tượng nôn, mất tỉnh táo. Tên gọi khác của ethanol là",
    "options": ["A. methylic alcohol", "B. ethylic alcohol", "C. acetic acid", "D. formic acid"],
    "a": "B. ethylic alcohol",
    "level": "nhan_biet"
  },
  {
    "q": "Khi bị ong đốt, để giảm đau, giảm sưng, kinh nghiệm dân gian thường dùng chất nào sau đây để bôi trực tiếp lên vết thương?",
    "options": ["A. nước vôi", "B. nước muối", "C. cồn", "D. giấm"],
    "a": "A. nước vôi",
    "level": "thong_hieu"
  },
  {
    "q": "Lên men hoàn toàn dung dịch chứa m gam glucose thu được dung dịch chứa 23 gam ethylic alcohol. Giá trị của m là",
    "options": ["A. 30 gam", "B. 35 gam", "C. 40 gam", "D. 45 gam"],
    "a": "D. 45 gam",
    "level": "van_dung"
  },
  {
    "q": "Cho sơ đồ chuyển hóa sau: Tinh bột → X → Y → acid axetic. X và Y lần lượt là:",
    "options": ["A. glucose, ethylic alcohol", "B. maltose, glucose", "C. glucose, ethyl acetate", "D. ethylic alcohol, aldehyde acetic"],
    "a": "A. glucose, ethylic alcohol",
    "level": "van_dung"
  },
  {
    "q": "Nguyên tố phổ biến thứ tư ở vỏ trái đất là",
    "options": ["A. oxygen", "B. carbon", "C. silicon", "D. iron"],
    "a": "D. iron",
    "level": "nhan_biet"
  },
  {
    "q": "Đặc điểm cấu tạo nguyên tử nào sau đây là của hầu hết các kim loại?",
    "options": ["A. Có 4 electron lớp ngoài cùng", "B. Có 5, 6, 7 electron lớp ngoài cùng", "C. Có 1, 2, 3 electron lớp ngoài cùng", "D. Luôn có 8 electron lớp ngoài cùng"],
    "a": "C. Có 1, 2, 3 electron lớp ngoài cùng",
    "level": "nhan_biet"
  },
  {
    "q": "Tính chất vật lý đặc trưng của kim loại là:",
    "options": ["A. Giòn, dễ vỡ", "B. Dẫn điện kém", "C. Thường không có ánh kim", "D. Có ánh kim, dẫn điện, dẫn nhiệt tốt"],
    "a": "D. Có ánh kim, dẫn điện, dẫn nhiệt tốt",
    "level": "nhan_biet"
  },
  {
    "q": "Phi kim nào sau đây ở trạng thái lỏng ở điều kiện thường?",
    "options": ["A. Oxygen", "B. Lưu huỳnh", "C. Bromine", "D. Than chì"],
    "a": "C. Bromine",
    "level": "nhan_biet"
  },
  {
    "q": "Phát biểu nào sau đây sai khi so sánh kim loại và phi kim?",
    "options": ["A. Kim loại có xu hướng nhường electron, phi kim có xu hướng nhận electron", "B. Kim loại thường tạo oxide base, phi kim thường tạo oxide acid", "C. Kim loại có độ âm điện thấp, phi kim có độ âm điện cao", "D. Kim loại có bán kính nguyên tử nhỏ, phi kim có bán kính nguyên tử lớn (trong cùng chu kì)"],
    "a": "D. Kim loại có bán kính nguyên tử nhỏ, phi kim có bán kính nguyên tử lớn (trong cùng chu kì)",
    "level": "thong_hieu"
  },
  {
    "q": "Dựa vào tính chất hóa học, có thể phân biệt một kim loại hoạt động mạnh (ví dụ: Na) và một phi kim hoạt động mạnh (ví dụ: Cl₂) bằng cách nào?",
    "options": ["A. Dùng quỳ tím", "B. Quan sát màu sắc", "C. Cho tác dụng với nước (Na phản ứng mạnh với nước, Cl₂ ít tan và phản ứng yếu hơn)", "D. Đốt trong không khí"],
    "a": "C. Cho tác dụng với nước (Na phản ứng mạnh với nước, Cl₂ ít tan và phản ứng yếu hơn)",
    "level": "thong_hieu"
  },
  {
    "q": "Chất hữu cơ là hợp chất của carbon (trừ các oxide của carbon, muối cacbonat, xianua...). Dãy chất nào sau đây chỉ gồm các chất hữu cơ?",
    "options": ["A. CO₂; CH₄; C₆H₁₂O₆", "B. CaCO₃; C₂H₄; CH₃COOH", "C. CH₄; C₂H₂; C₆H₆", "D. NaCN; C₂H₅OH; HCN"],
    "a": "C. CH₄; C₂H₂; C₆H₆",
    "level": "nhan_biet"
  },
  {
    "q": "Nguyên tử cacbon có thể liên kết trực tiếp với nhau tạo thành các dạng mạch carbon là",
    "options": ["A. mạch vòng", "B. mạch thẳng, mạch nhánh", "C. mạch vòng, mạch thẳng, mạch nhánh", "D. mạch nhánh"],
    "a": "C. mạch vòng, mạch thẳng, mạch nhánh",
    "level": "nhan_biet"
  },
  {
    "q": "Khí Methan (CH₄) là thành phần chính của khí thiên nhiên. Phát biểu nào sau đây về Methan là đúng?",
    "options": ["A. Methan có liên kết ba trong phân tử", "B. Methan là một chất lỏng không màu", "C. Methan cháy trong không khí tạo ra CO₂ và H₂O", "D. Methan có khả năng làm mất màu dung dịch Bromine"],
    "a": "C. Methan cháy trong không khí tạo ra CO₂ và H₂O",
    "level": "thong_hieu"
  },
  {
    "q": "Để đun nấu trong gia đình, người ta thường dùng khí LPG (Liquefied Petroleum Gas), thành phần chính là propane (C₃H₈) và butan (C₄H₁₀). Khi đốt cháy hoàn toàn 1 mol propane, thể tích khí O₂ (ở ĐKC) cần dùng là bao nhiêu?",
    "options": ["A. 512,0 (L)", "B. 113,2 (L)", "C. 122,4 (L)", "D. 123,95 (L)"],
    "a": "D. 123,95 (L)",
    "level": "van_dung"
  },
  {
    "q": "Công thức hóa học của Ethylic alcohol (rượu etylic) là:",
    "options": ["A. CH₃OH", "B. C₃H₇OH", "C. C₂H₅OH", "D. CH₃COOH"],
    "a": "C. C₂H₅OH",
    "level": "nhan_biet"
  },
  {
    "q": "Axit axetic (CH₃COOH) có thể tác dụng với chất nào sau đây để tạo thành muối và nước?",
    "options": ["A. Đồng (Cu)", "B. Benzen (C₆H₆)", "C. Calcium oxide (CaO)", "D. Khí oxygen (O₂)"],
    "a": "C. Calcium oxide (CaO)",
    "level": "thong_hieu"
  },
  {
    "q": "Trong quá trình tiêu hóa, tinh bột (một loại Carbohydrate) được chuyển hóa thành đường Glucose nhờ enzyme. Phát biểu nào sau đây giải thích đúng nhất vai trò của Glucose trong cơ thể?",
    "options": ["A. Glucose là thành phần cấu tạo nên màng tế bào", "B. Glucose giúp vận chuyển oxy trong máu", "C. Glucose là nguồn năng lượng chính cung cấp cho các hoạt động sống của tế bào", "D. Glucose có vai trò xúc tác cho các phản ứng sinh hóa"],
    "a": "C. Glucose là nguồn năng lượng chính cung cấp cho các hoạt động sống của tế bào",
    "level": "van_dung"
  },
  {
    "q": "Dầu ăn và mỡ động vật đều là Lipit. Khi cho dầu ăn vào nước, hiện tượng xảy ra là:",
    "options": ["A. Dầu ăn tan hoàn toàn trong nước", "B. Dầu ăn tạo thành dung dịch đồng nhất với nước", "C. Dầu ăn nổi lên trên mặt nước và không tan", "D. Dầu ăn lắng xuống đáy cốc nước"],
    "a": "C. Dầu ăn nổi lên trên mặt nước và không tan",
    "level": "van_dung"
  },
  {
    "q": "Protein là một polymer sinh học quan trọng. Chức năng nào sau đây không phải là chức năng chính của protein?",
    "options": ["A. Xúc tác sinh học (enzyme)", "B. Vận chuyển các chất trong cơ thể", "C. Cung cấp năng lượng khi thiếu hụt các chất khác", "D. Là nguồn năng lượng dự trữ chính, tích lũy dưới dạng mỡ"],
    "a": "D. Là nguồn năng lượng dự trữ chính, tích lũy dưới dạng mỡ",
    "level": "van_dung"
  },
  {
    "q": "Dãy gồm các phi kim thể khí ở điều kiện thường",
    "options": ["A. S, C, N₂, Cl₂", "B. C, S, Br₂, Cl₂", "C. Cl₂, H₂, N₂, O₂", "D. Br₂, P, N₂, O₂"],
    "a": "C. Cl₂, H₂, N₂, O₂",
    "level": "nhan_biet"
  },
  {
    "q": "Phi kim có điểm khác biệt nào so với kim loại?",
    "options": ["A. Dễ bị uốn cong", "B. Không có ánh kim", "C. Dẫn điện tốt", "D. Dẫn nhiệt tốt"],
    "a": "B. Không có ánh kim",
    "level": "nhan_biet"
  },
  {
    "q": "Phi kim có mức hoạt động hóa học yếu nhất là",
    "options": ["A. Fluorine", "B. Oxygen", "C. Chlorine", "D. Silicon"],
    "a": "D. Silicon",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy phi kim tác dụng với oxygen tạo thành oxide acid là",
    "options": ["A. S, C, P", "B. S, C, Cl₂", "C. C, P, Br₂", "D. C, Cl₂, Br₂"],
    "a": "A. S, C, P",
    "level": "thong_hieu"
  },
  {
    "q": "Dãy phi kim tác dụng được với nhau là",
    "options": ["A. Si, Cl₂, O₂", "B. H₂, S, O₂", "C. Cl₂, C, O₂", "D. N₂, S, O₂"],
    "a": "B. H₂, S, O₂",
    "level": "thong_hieu"
  },
  {
    "q": "Chất nào sau đây không thuộc loại hợp chất hữu cơ?",
    "options": ["A. CH₃Cl", "B. CH₄", "C. CO", "D. CH₃COONa"],
    "a": "C. CO",
    "level": "nhan_biet"
  },
  {
    "q": "Khi đốt cháy các hợp chất hữu cơ đều thấy tạo ra",
    "options": ["A. NO", "B. CO₂", "C. HCl", "D. H₂CO₃"],
    "a": "B. CO₂",
    "level": "nhan_biet"
  },
  {
    "q": "Thành phần phần trăm về khối lượng của nguyên tố C trong C₃H₈O là",
    "options": ["A. 52,2%", "B. 55,2%", "C. 60%", "D. 34,8%"],
    "a": "C. 60%",
    "level": "van_dung"
  },
  {
    "q": "Giấm ăn là dung dịch acetic acid có nồng độ",
    "options": ["A. trên 10%", "B. dưới 2%", "C. từ 2% - 5%", "D. từ 5% - 10%"],
    "a": "C. từ 2% - 5%",
    "level": "nhan_biet"
  },
  {
    "q": "Ethanol là chất có tác động đến thần kinh trung ương. Khi hàm lượng ethanol trong máu tăng cao sẽ có hiện tượng nôn, mất tỉnh táo. Tên gọi khác của ethanol là",
    "options": ["A. methylic alcohol", "B. ethylic alcohol", "C. acetic acid", "D. formic acid"],
    "a": "B. ethylic alcohol",
    "level": "nhan_biet"
  },
  {
    "q": "Ethylic alcohol được dùng làm nhiên liệu trong đèn cồn,... hoặc phối trộn với xăng làm nhiên liệu cho động cơ đốt trong (xe máy, ô tô,...). Ứng dụng này dựa vào tính chất nào của ethylic alcohol.",
    "options": ["A. Hòa tan nhiều chất", "B. Dễ bay hơi", "C. Dễ cháy, khi cháy tỏa nhiều nhiệt", "D. Nhẹ hơn nước"],
    "a": "C. Dễ cháy, khi cháy tỏa nhiều nhiệt",
    "level": "thong_hieu"
  },
  {
    "q": "Thủy phân 64,8 gam tinh bột với hiệu suất của phản ứng đạt 70%, khối lượng glucose thu được là",
    "options": ["A. 49,7 gam", "B. 50,4 gam", "C. 51,4 gam", "D. 52,8 gam"],
    "a": "B. 50,4 gam",
    "level": "van_dung"
  },
  {
    "q": "Tiến hành phản ứng đồng trùng hợp giữa stiren và buta-1,3-đien, thu được polime X. Cứ 2,834 gam X phản ứng vừa đủ với 1,731 gam Br₂ trong dung dịch. Tỉ lệ số mắt xích buta-1,3-đien và stiren trong X là",
    "options": ["A. 2 : 3", "B. 1 : 2", "C. 1 : 3", "D. 1 : 1"],
    "a": "B. 1 : 2",
    "level": "van_dung"
  },
  {
    "q": "Các sản phẩm từ nhựa PP có độ bóng bề mặt tốt, với khả năng chống thấm nước và thấm khí, không dễ bị oxy hóa hay ảnh hưởng bởi các loại khí khác, hơi nước hay dầu mỡ nên chúng thường được tận dụng làm các loại hộp, hũ, can, bình đựng, bao bì,... được sử dụng phổ biến trong đời sống sinh hoạt thường ngày của con người. Khối lượng nhựa PP thu được khi trùng hợp 1,5 tấn Propylen với hiệu suất 92% là",
    "options": ["A. 1 tấn", "B. 1,38 tấn", "C. 1,82 tấn", "D. 2 tấn"],
    "a": "B. 1,38 tấn",
    "level": "van_dung"
  },
  {
    "q": "Dãy gồm các phi kim thể khí ở điều kiện thường",
    "options": ["A. S, C, N₂, Cl₂", "B. C, S, Br₂, Cl₂", "C. Cl₂, H₂, N₂, O₂", "D. Br₂, P, N₂, O₂"],
    "a": "C. Cl₂, H₂, N₂, O₂",
    "level": "nhan_biet"
  },
  {
    "q": "Phi kim có điểm khác biệt nào so với kim loại?",
    "options": ["A. Dễ bị uốn cong", "B. Không có ánh kim", "C. Dẫn điện tốt", "D. Dẫn nhiệt tốt"],
    "a": "B. Không có ánh kim",
    "level": "nhan_biet"
  },
  {
    "q": "Phi kim có mức hoạt động hóa học yếu nhất là",
    "options": ["A. Fluorine", "B. Oxygen", "C. Chlorine", "D. Silicon"],
    "a": "D. Silicon",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy phi kim tác dụng với oxygen tạo thành oxide acid là",
    "options": ["A. S, C, P", "B. S, C, Cl₂", "C. C, P, Br₂", "D. C, Cl₂, Br₂"],
    "a": "A. S, C, P",
    "level": "thong_hieu"
  },
  {
    "q": "Dãy phi kim tác dụng được với nhau là",
    "options": ["A. Si, Cl₂, O₂", "B. H₂, S, O₂", "C. Cl₂, C, O₂", "D. N₂, S, O₂"],
    "a": "B. H₂, S, O₂",
    "level": "thong_hieu"
  },
  {
    "q": "Chất nào sau đây không thuộc loại hợp chất hữu cơ?",
    "options": ["A. CH₃Cl", "B. CH₄", "C. CO", "D. CH₃COONa"],
    "a": "C. CO",
    "level": "nhan_biet"
  },
  {
    "q": "Khi đốt cháy các hợp chất hữu cơ đều thấy tạo ra",
    "options": ["A. NO", "B. CO₂", "C. HCl", "D. H₂CO₃"],
    "a": "B. CO₂",
    "level": "nhan_biet"
  },
  {
    "q": "Thành phần phần trăm về khối lượng của nguyên tố C trong C₃H₈O là",
    "options": ["A. 52,2%", "B. 55,2%", "C. 60%", "D. 34,8%"],
    "a": "C. 60%",
    "level": "van_dung"
  },
  {
    "q": "Giấm ăn là dung dịch acetic acid có nồng độ",
    "options": ["A. trên 10%", "B. dưới 2%", "C. từ 2% - 5%", "D. từ 5% - 10%"],
    "a": "C. từ 2% - 5%",
    "level": "nhan_biet"
  },
  {
    "q": "Phương pháp điều chế ethylic alcohol từ chất nào sau đây là phương pháp sinh hóa?",
    "options": ["A. Ethane", "B. Ethyl chloride", "C. Tinh bột", "D. Ethylene"],
    "a": "C. Tinh bột",
    "level": "thong_hieu"
  },
  {
    "q": "Thủy phân 64,8 gam tinh bột với hiệu suất của phản ứng đạt 70%, khối lượng glucose thu được là",
    "options": ["A. 49,7 gam", "B. 50,4 gam", "C. 51,4 gam", "D. 52,8 gam"],
    "a": "B. 50,4 gam",
    "level": "van_dung"
  },
  {
    "q": "Tiến hành phản ứng đồng trùng hợp giữa stiren và buta-1,3-đien, thu được polime X. Cứ 2,834 gam X phản ứng vừa đủ với 1,731 gam Br₂ trong dung dịch. Tỉ lệ số mắt xích buta-1,3-đien và stiren trong X là",
    "options": ["A. 2 : 3", "B. 1 : 2", "C. 1 : 3", "D. 1 : 1"],
    "a": "B. 1 : 2",
    "level": "van_dung"
  },
  {
    "q": "Các sản phẩm từ nhựa PP có độ bóng bề mặt tốt, với khả năng chống thấm nước và thấm khí, không dễ bị oxy hóa hay ảnh hưởng bởi các loại khí khác, hơi nước hay dầu mỡ nên chúng thường được tận dụng làm các loại hộp, hũ, can, bình đựng, bao bì,... được sử dụng phổ biến trong đời sống sinh hoạt thường ngày của con người. Khối lượng nhựa PP thu được khi trùng hợp 1,5 tấn Propylen với hiệu suất 92% là",
    "options": ["A. 1 tấn", "B. 1,38 tấn", "C. 1,82 tấn", "D. 2 tấn"],
    "a": "B. 1,38 tấn",
    "level": "van_dung"
  },
  {
    "q": "Nguyên tố phổ biến nhất ở vỏ trái đất là",
    "options": ["A. oxygen", "B. carbon", "C. silicon", "D. iron"],
    "a": "A. oxygen",
    "level": "nhan_biet"
  },
  {
    "q": "Ở điều kiện thường, dãy các kim loại nào sau đây có khả năng dẫn điện giảm dần theo chiều từ trái qua phải?",
    "options": ["A. Ag, Cu, Fe, Al, Au", "B. Ag, Cu, Au, Al, Fe", "C. Au, Ag, Cu, Al, Fe", "D. Al, Cu, Fe, Au, Ag"],
    "a": "B. Ag, Cu, Au, Al, Fe",
    "level": "nhan_biet"
  },
  {
    "q": "Trong các chất sau, chất nào được ứng dụng để sản xuất nước Javel, chất tẩy rửa?",
    "options": ["A. Carbon", "B. Lưu huỳnh", "C. Silicon", "D. Chlorine"],
    "a": "D. Chlorine",
    "level": "nhan_biet"
  },
  {
    "q": "Đuy - ra là một loại hợp kim của nhôm, nhẹ và bền thường được dùng trong công nghiệp chế tạo máy bay, ô tô, tàu vũ trụ... Hợp kim Đuy - ra có thành phần là",
    "options": ["A. Al, Cu và một số nguyên tố khác như Mn, Mg,...", "B. Al₂O₃, K₂O và một số nguyên tố khác như Mn, Fe, Si", "C. Al, Ag và một số nguyên tố khác như Mn, Fe, Si", "D. Al₂O₃ và một số nguyên tố khác như Mn, Fe, Si"],
    "a": "A. Al, Cu và một số nguyên tố khác như Mn, Mg,...",
    "level": "thong_hieu"
  },
  {
    "q": "Carbon vô định hình được điều chế từ than gỗ hay gáo dừa có tên là than hoạt tính. Tính chất nào của than hoạt tính giúp con người chế tạo các thiết bị phòng độc, lọc nước?",
    "options": ["A. Than hoạt tính dễ cháy", "B. Than hoạt tính có cấu trúc lớp", "C. Than hoạt tính có khả năng hấp phụ cao", "D. Than hoạt tính có khả năng hòa tan tốt trong nhiều dung môi"],
    "a": "C. Than hoạt tính có khả năng hấp phụ cao",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại có nhiệt độ nóng chảy thấp nhất là:",
    "options": ["A. bạc", "B. vàng", "C. tungsten", "D. thủy ngân"],
    "a": "D. thủy ngân",
    "level": "nhan_biet"
  },
  {
    "q": "Khi mở vòi nước máy, nếu chú ý một chút sẽ phát hiện mùi lạ. Đó là do nước máy còn lưu giữ vết tích của thuốc sát trùng. Đó chính là chlorine và người ta giải thích khả năng diệt khuẩn là do",
    "options": ["A. chlorine độc nên có tính sát trùng", "B. chlorine có tính oxi hóa mạnh", "C. chlorine tác dụng với nước tạo ra HClO chất này có tính oxi hóa mạnh", "D. một nguyên nhân khác"],
    "a": "C. chlorine tác dụng với nước tạo ra HClO chất này có tính oxi hóa mạnh",
    "level": "thong_hieu"
  },
  {
    "q": "Đặc điểm nào sau đây là của Alkane?",
    "options": ["A. Chỉ có liên kết đôi", "B. Chỉ có liên kết đơn", "C. Có ít nhất một vòng no", "D. Có ít nhất một liên kết đôi"],
    "a": "B. Chỉ có liên kết đơn",
    "level": "nhan_biet"
  },
  {
    "q": "Lên men hoàn toàn dung dịch chứa m gam glucose thu được dung dịch chứa 23 gam ethylic alcohol. Giá trị của m là",
    "options": ["A. 30 gam", "B. 35 gam", "C. 40 gam", "D. 45 gam"],
    "a": "D. 45 gam",
    "level": "van_dung"
  },
  {
    "q": "Biết tỉ khối hơi của X so với khí methane là 3,75. Công thức phân tử của X là",
    "options": ["A. C₂H₄O₂", "B. C₃H₈O", "C. CH₄O", "D. C₂H₆O"],
    "a": "A. C₂H₄O₂",
    "level": "thong_hieu"
  },
  {
    "q": "Chất X có công thức cấu tạo: CH₃-CH₂-CH=CH₂. Công thức phân tử của X là",
    "options": ["A. C₃H₆", "B. C₄H₁₀", "C. C₄H₈", "D. C₅H₈"],
    "a": "C. C₄H₈",
    "level": "nhan_biet"
  },
  {
    "q": "Hòa tan 30ml rượu Ethylic nguyên chất vào 90ml nước cất thu được",
    "options": ["A. rượu Ethylic có độ rượu là 20°", "B. rượu Ethylic có độ rượu là 25°", "C. rượu Ethylic có độ rượu là 30°", "D. rượu Ethylic có độ rượu là 35°"],
    "a": "B. rượu Ethylic có độ rượu là 25°",
    "level": "thong_hieu"
  },
  {
    "q": "Thủy phân hoàn toàn 17,16 kg một loại chất béo cần vừa đủ 2,4 kg NaOH, sản phẩm thu được gồm 1,84 kg glycerol và hỗn hợp muối của các acid béo. Khối lượng hỗn hợp các muối là",
    "options": ["A. 17,72 kg", "B. 19,44 kg", "C. 11,92 kg", "D. 12,77 kg"],
    "a": "A. 17,72 kg",
    "level": "van_dung"
  },
  {
    "q": "Trùng hợp m tấn ethylene thu được 1,5 tấn polyethylene với hiệu suất phản ứng là 80%. Giá trị của m là",
    "options": ["A. 1,730 tấn", "B. 1,875 tấn", "C. 1,920 tấn", "D. 2,024 tấn"],
    "a": "B. 1,875 tấn",
    "level": "van_dung"
  },
  {
    "q": "Từ 1 tấn nước mía chứa 13% saccharose có thể thu được bao nhiêu kg saccharose? Cho biết hiệu suất thu hồi đường đạt 80%.",
    "options": ["A. 103kg", "B. 104 kg", "C. 130 kg", "D. 140kg"],
    "a": "B. 104 kg",
    "level": "van_dung"
  },
  {
    "q": "Kim loại có những tính chất vật lí chung nào sau đây?",
    "options": ["A. Tính dẻo, tính dẫn điện, nhiệt độ nóng chảy cao", "B. Tính dẻo, tính dẫn nhiệt, rất cứng", "C. Tính dẻo, tính dẫn điện, tính dẫn nhiệt và có ánh kim", "D. Tính dẻo, có ánh kim, khối lượng riêng lớn"],
    "a": "C. Tính dẻo, tính dẫn điện, tính dẫn nhiệt và có ánh kim",
    "level": "nhan_biet"
  },
  {
    "q": "Ở điều kiện thường, kim loại nào sau đây tác dụng mạnh với H₂O?",
    "options": ["A. Fe", "B. Ba", "C. Cu", "D. Mg"],
    "a": "B. Ba",
    "level": "nhan_biet"
  },
  {
    "q": "Trong số các kim loại Zn, Fe, Cu, Ni, kim loại hoạt động hóa học mạnh nhất là",
    "options": ["A. Zn", "B. Fe", "C. Ag", "D. Cu"],
    "a": "A. Zn",
    "level": "nhan_biet"
  },
  {
    "q": "Để điều chế Al kim loại ta có thể dùng phương pháp nào trong các phương pháp sau đây?",
    "options": ["A. Dùng Zn đẩy AlCl₃ ra khỏi muối", "B. Dùng CO khử Al₂O₃", "C. Điện phân nóng chảy Al₂O₃", "D. Điện phân dung dịch AlCl₃"],
    "a": "C. Điện phân nóng chảy Al₂O₃",
    "level": "thong_hieu"
  },
  {
    "q": "Dãy gồm các phi kim thể khí ở điều kiện thường là",
    "options": ["A. S, P, N₂, Cl₂", "B. C, S, Br₂, Cl₂", "C. Cl₂, H₂, N₂, O₂", "D. Br₂, Cl₂, N₂, O₂"],
    "a": "C. Cl₂, H₂, N₂, O₂",
    "level": "thong_hieu"
  },
  {
    "q": "Hợp chất hữu cơ là",
    "options": ["A. Hợp chất khó tan trong nước", "B. Hợp chất của carbon và một số nguyên tố khác trừ N, Cl, O", "C. Hợp chất của carbon trừ CO, CO₂, H₂CO₃, muối carbonate kim loại...", "D. Hợp chất có nhiệt độ sôi cao"],
    "a": "C. Hợp chất của carbon trừ CO, CO₂, H₂CO₃, muối carbonate kim loại...",
    "level": "nhan_biet"
  },
  {
    "q": "Đốt cháy hoàn toàn 2,479 lít hỗn hợp A (đkc) gồm CH₄, C₂H₆, và C₃H₈ thu được V lít khí CO₂ và 7,2 gam H₂O. Giá trị của V là",
    "options": ["A. 4,985 lít", "B. 7,437 lít", "C. 6,1975 lít", "D. 2,479 lít"],
    "a": "B. 7,437 lít",
    "level": "van_dung"
  },
  {
    "q": "Sự cố tràn dầu do chìm tàu chở dầu là thảm họa môi trường vì:",
    "options": ["A. Do dầu nhẹ hơn nước, nổi trên mặt nước cản sự hòa tan của khí oxygen làm các sinh vật dưới nước bị chết", "B. Do dầu không tan trong nước", "C. Do dầu sôi ở những nhiệt độ khác nhau", "D. Dầu lan rộng trên mặt nước bị sóng, gió cuốn đi xa rất khó xử lý"],
    "a": "A. Do dầu nhẹ hơn nước, nổi trên mặt nước cản sự hòa tan của khí oxygen làm các sinh vật dưới nước bị chết",
    "level": "thong_hieu"
  },
  {
    "q": "Nhận xét nào đúng về nhiệt độ sôi của ethylic alcohol?",
    "options": ["A. Ethylic alcohol sôi ở 100°C", "B. Nhiệt độ sôi của ethylic alcohol cao hơn nhiệt độ sôi của nước", "C. Ethylic alcohol sôi ở 45°C", "D. Ethylic alcohol sôi ở 78,3°C"],
    "a": "D. Ethylic alcohol sôi ở 78,3°C",
    "level": "nhan_biet"
  },
  {
    "q": "Khi bị ong đốt, để giảm đau, giảm sưng, kinh nghiệm dân gian thường dùng chất nào sau đây để bôi trực tiếp lên vết thương?",
    "options": ["A. Nước vôi", "B. Nước muối", "C. Cồn", "D. Giấm"],
    "a": "A. Nước vôi",
    "level": "thong_hieu"
  },
  {
    "q": "Thủy phân hoàn toàn 17,16 kg một loại chất béo cần vừa đủ 2,4 kg NaOH, sản phẩm thu được gồm 1,84 kg glycerol và hỗn hợp muối của các acid béo. Khối lượng hỗn hợp các muối là",
    "options": ["A. 17,72 kg", "B. 19,44 kg", "C. 11,92 kg", "D. 12,77 kg"],
    "a": "A. 17,72 kg",
    "level": "van_dung"
  },
  {
    "q": "Từ 1 tấn nước mía chứa 13% saccharose có thể thu được bao nhiêu kg saccharose? Cho biết hiệu suất thu hồi đường đạt 80%.",
    "options": ["A. 103kg", "B. 104 kg", "C. 130 kg", "D. 140kg"],
    "a": "B. 104 kg",
    "level": "van_dung"
  },
  {
    "q": "Đun nóng 4,45 gam chất béo (C₁₇H₃₅COO)₃C₃H₅ với dung dịch NaOH. Khối lượng glycerol thu được là bao nhiêu?",
    "options": ["A. 0,03 g", "B. 0,12 g", "C. 0,27 g", "D. 0,46 g"],
    "a": "D. 0,46 g",
    "level": "van_dung"
  },
  {
    "q": "Đá vôi được khai thác chủ yếu từ?",
    "options": ["A. Cát", "B. Núi đá vôi", "C. Nước biển", "D. Đất sét trắng"],
    "a": "B. Núi đá vôi",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại nào ở điều kiện thường ở thể lỏng trong các kim loại sau?",
    "options": ["A. Na", "B. Ca", "C. Li", "D. Hg"],
    "a": "D. Hg",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy kim loại được sắp xếp theo chiều hoạt động hóa học tăng dần là",
    "options": ["A. K, Al, Mg, Cu, Fe", "B. Cu, Fe, Mg, Al, K", "C. Cu, Fe, Al, Mg, K", "D. K, Cu, Al, Mg, Fe"],
    "a": "C. Cu, Fe, Al, Mg, K",
    "level": "nhan_biet"
  },
  {
    "q": "Trong các chất sau, chất nào được ứng dụng để sản xuất nước Javel, chất tẩy rửa?",
    "options": ["A. Carbon", "B. Lưu huỳnh", "C. Silicon", "D. Chlorine"],
    "a": "D. Chlorine",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy các kim loại đều tác dụng với dung dịch HCl là",
    "options": ["A. Na, Al, Cu, Mg", "B. K, Na, Al, Ag", "C. Na, Fe, Cu, Mg", "D. Zn, Mg, Na, Al"],
    "a": "D. Zn, Mg, Na, Al",
    "level": "thong_hieu"
  },
  {
    "q": "Khi tham gia phản ứng hóa học, kim loại thường",
    "options": ["A. nhận electron → tạo ion âm", "B. nhường electron → tạo ion dương", "C. không tạo ion", "D. vừa nhường vừa nhận electron"],
    "a": "B. nhường electron → tạo ion dương",
    "level": "thong_hieu"
  },
  {
    "q": "Hợp chất hữu cơ là những hợp chất của",
    "options": ["A. nguyên tố kim loại với oxygen", "B. nguyên tố phi kim với oxygen", "C. nguyên tố carbon (trừ CO, CO₂, muối carbonate,...)", "D. nguyên tố hydrogen và oxygen"],
    "a": "C. nguyên tố carbon (trừ CO, CO₂, muối carbonate,...)",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy các chất nào sau đây đều là hydrocarbon?",
    "options": ["A. C₂H₆, C₄H₁₀, C₂H₄", "B. CH₄, C₂H₂, C₃H₇Cl", "C. C₂H₄, CH₄, C₂H₅Cl", "D. C₂H₆O, C₃H₈, C₂H₂"],
    "a": "A. C₂H₆, C₄H₁₀, C₂H₄",
    "level": "thong_hieu"
  },
  {
    "q": "Để dập tắt xăng dầu cháy người ta sẽ (1) phun nước vào ngọn lửa. (2) dùng chăn ướt trùm lên ngọn lửa. (3) phủ cát lên ngọn lửa. Phương án phù hợp là:",
    "options": ["A. (1) và (2)", "B. (3) và (2)", "C. (1) và (3)", "D. (1)"],
    "a": "B. (3) và (2)",
    "level": "van_dung"
  },
  {
    "q": "Ethylic alcohol là",
    "options": ["A. chất lỏng không màu, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzene,...", "B. chất lỏng màu hồng, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzene,...", "C. chất lỏng không màu, không tan trong nước, hòa tan được nhiều chất như iodine, benzene,...", "D. chất lỏng không màu, nặng hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzene,..."],
    "a": "A. chất lỏng không màu, nhẹ hơn nước, tan vô hạn trong nước, hòa tan được nhiều chất như iodine, benzene,...",
    "level": "nhan_biet"
  },
  {
    "q": "Acetic acid có tính acid vì trong phân tử",
    "options": ["A. có chứa nhóm -OH", "B. có chứa nhóm -COO", "C. có chứa nhóm -C=O", "D. có chứa nhóm -COOH"],
    "a": "D. có chứa nhóm -COOH",
    "level": "thong_hieu"
  },
  {
    "q": "Thủy phân hoàn toàn 17,16 kg một loại chất béo cần vừa đủ 2,4 kg NaOH, sản phẩm thu được gồm 1,84 kg glycerol và hỗn hợp muối của các acid béo. Khối lượng hỗn hợp các muối là",
    "options": ["A. 17,72 kg", "B. 19,44 kg", "C. 11,92 kg", "D. 12,77 kg"],
    "a": "A. 17,72 kg",
    "level": "van_dung"
  },
  {
    "q": "Cho các phát biểu sau về glucose: (1) Có trong thân cây mía, củ cải đường,... (2) Có công thức phân tử là C₆H₁₂O₆. (3) Là chất kết tinh, không màu, vị ngọt, tan tốt trong nước. (4) Có phản ứng tráng bạc. (5) Có phản ứng lên men tạo thành ethylic alcohol. (6) Dùng để pha chế thuốc. Số phát biểu đúng về glucose là",
    "options": ["A. 2", "B. 3", "C. 4", "D. 5"],
    "a": "C. 4",
    "level": "van_dung"
  },
  {
    "q": "Phân tử khối trung bình của poly(vinylchloride) (PVC) là 75000. Số mắt xích có trong phân tử là",
    "options": ["A. 2100", "B. 1500", "C. 1000", "D. 1200"],
    "a": "D. 1200",
    "level": "van_dung"
  },
  {
    "q": "Nhiên liệu hóa thạch",
    "options": ["A. là nguồn nhiên liệu tái tạo", "B. là đá chứa ít nhất 50% xác động và thực vật", "C. được tạo thành từ quá trình phân hủy kị khí xác các sinh vật chôn vùi hàng triệu năm trước", "D. chỉ bao gồm dầu mỏ, than đá"],
    "a": "C. được tạo thành từ quá trình phân hủy kị khí xác các sinh vật chôn vùi hàng triệu năm trước",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại có thể kéo dài thành sợi, dễ dát mỏng hoặc uốn cong do có",
    "options": ["A. tính dẫn điện", "B. ánh kim", "C. tính dẻo", "D. tính dẫn nhiệt"],
    "a": "C. tính dẻo",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại nào sau đây tác dụng được với H₂O ở nhiệt độ thường?",
    "options": ["A. Au", "B. Cu", "C. Ag", "D. Na"],
    "a": "D. Na",
    "level": "nhan_biet"
  },
  {
    "q": "Carbon vô định hình được điều chế từ than gỗ hay gáo dừa có tên là than hoạt tính. Tính chất nào của than hoạt tính giúp con người chế tạo các thiết bị phòng độc, lọc nước?",
    "options": ["A. Than hoạt tính dễ cháy", "B. Than hoạt tính có cấu trúc lớp", "C. Than hoạt tính có khả năng hấp phụ cao", "D. Than hoạt tính có khả năng hòa tan tốt trong nhiều dung môi"],
    "a": "C. Than hoạt tính có khả năng hấp phụ cao",
    "level": "nhan_biet"
  },
  {
    "q": "Những hợp kim có tính chất nào dưới đây được ứng dụng để chế tạo tên lửa, tàu vũ trụ, máy bay?",
    "options": ["A. Những hợp kim nhẹ, bền, chịu được nhiệt độ cao, áp suất cao", "B. Những hợp kim không gỉ, có tính dẻo cao", "C. Những hợp kim có tính cứng cao", "D. Những hợp kim có tính dẫn điện tốt"],
    "a": "A. Những hợp kim nhẹ, bền, chịu được nhiệt độ cao, áp suất cao",
    "level": "thong_hieu"
  },
  {
    "q": "Chọn phát biểu sai",
    "options": ["A. Kim loại dẫn điện tốt hơn phi kim", "B. Phi kim dẫn điện tốt hơn kim loại", "C. Phi kim có nhiệt độ sôi thấp hơn kim loại", "D. Phi kim có nhiệt độ nóng chảy thấp hơn kim loại"],
    "a": "B. Phi kim dẫn điện tốt hơn kim loại",
    "level": "thong_hieu"
  },
  {
    "q": "Liên kết hoá học trong hợp chất hữu cơ thường là",
    "options": ["A. liên kết kim loại", "B. liên kết ion", "C. liên kết hydrogen", "D. liên kết cộng hoá trị"],
    "a": "D. liên kết cộng hoá trị",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy các chất nào sau đây đều là hydrocarbon?",
    "options": ["A. C₂H₆, C₄H₁₀, C₂H₄", "B. CH₄, C₂H₂, C₃H₇Cl", "C. C₂H₄, CH₄, C₂H₅Cl", "D. C₂H₆O, C₃H₈, C₂H₂"],
    "a": "A. C₂H₆, C₄H₁₀, C₂H₄",
    "level": "thong_hieu"
  },
  {
    "q": "Khối lượng khí ethylene cần dùng để phản ứng hết 8 gam bromine trong dung dịch là:",
    "options": ["A. 0,7 gam", "B. 7 gam", "C. 1,4 gam", "D. 14 gam"],
    "a": "A. 0,7 gam",
    "level": "van_dung"
  },
  {
    "q": "Chất nào sau đây tác dụng được với Na?",
    "options": ["A. CH₃-CH₃", "B. CH₃-CH₂-OH", "C. C₆H₆", "D. CH₃-O-CH₃"],
    "a": "B. CH₃-CH₂-OH",
    "level": "nhan_biet"
  },
  {
    "q": "Khi bị ong đốt, để giảm đau, giảm sưng, kinh nghiệm dân gian thường dùng chất nào sau đây để bôi trực tiếp lên vết thương?",
    "options": ["A. nước vôi", "B. nước muối", "C. cồn", "D. giấm"],
    "a": "A. nước vôi",
    "level": "thong_hieu"
  },
  {
    "q": "Phản ứng xà phòng hoá chứng minh điều gì về tính chất hoá học của chất béo?",
    "options": ["A. Chất béo không phản ứng với kiềm", "B. Chất béo phản ứng với nước tạo thành glycerol và muối acid béo", "C. Chất béo phản ứng với kiềm tạo thành glycerol và muối acid béo", "D. Chất béo không thể tạo ra glycerol"],
    "a": "C. Chất béo phản ứng với kiềm tạo thành glycerol và muối acid béo",
    "level": "van_dung"
  },
  {
    "q": "Lên men hoàn toàn dung dịch chứa m gam glucose thu được dung dịch chứa 23 gam ethylic alcohol. Giá trị của m là",
    "options": ["A. 30 gam", "B. 35 gam", "C. 40 gam", "D. 45 gam"],
    "a": "D. 45 gam",
    "level": "van_dung"
  },
  {
    "q": "Cho các đặc điểm sau đây về polymer: (a) Dễ bay hơi. (b) Dễ tan trong nước. (c) ở thể rắn, một số ít ở dạng lỏng. (d) Không bay hơi. (e) Không thấm khí. (g) Không dẫn điện. Có bao nhiêu đặc điểm đúng?",
    "options": ["A. 2", "B. 3", "C. 4", "D. 5"],
    "a": "C. 4",
    "level": "van_dung"
  },
  {
    "q": "Nhiên liệu hóa thạch là.",
    "options": ["A. Nguồn nhiên liệu tái tạo", "B. Đá chứa ít nhất 50% xác động và thực vật", "C. Các loại nhiên liệu tự nhiên được tạo thành từ quá trình phân hủy các sinh vật chôn vùi hàng triệu năm", "D. chỉ bao gồm dầu mỏ, than đá"],
    "a": "C. Các loại nhiên liệu tự nhiên được tạo thành từ quá trình phân hủy các sinh vật chôn vùi hàng triệu năm",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại tác dụng với chất nào sau đây để tạo thành oxide?",
    "options": ["A. hydrogen", "B. chlorine", "C. oxygen", "D. sodium"],
    "a": "C. oxygen",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại Cu đẩy được kim loại nào ra khỏi dung dịch muối?",
    "options": ["A. Fe", "B. Ag", "C. Zn", "D. Mg"],
    "a": "B. Ag",
    "level": "thong_hieu"
  },
  {
    "q": "Dãy nào sau đây gồm các nguyên tố đều là phi kim?",
    "options": ["A. F, O, Na, N", "B. O, Cl, Br, H", "C. H, N, O, K", "D. K, Na, Mg, Al"],
    "a": "B. O, Cl, Br, H",
    "level": "nhan_biet"
  },
  {
    "q": "Cho hỗn hợp bột gồm Al, Fe, Mg và Cu vào dung dịch HCl dư, sau phản ứng thu được chất rắn T không tan. Vậy T là",
    "options": ["A. Al", "B. Fe", "C. Mg", "D. Cu"],
    "a": "D. Cu",
    "level": "thong_hieu"
  },
  {
    "q": "Hình vẽ mô tả thí nghiệm khí X tác dụng với chất rắn Y, nung nóng sinh ra khí Z. Phương trình hoá học của phản ứng tạo thành khí Z là",
    "options": ["A. CuO + H₂ → Cu + H₂O", "B. Fe₂O₃ + 3H₂ → 2Fe + 3H₂O", "C. CuO + CO → Cu + CO₂", "D. 2HCl + CaCO₃ → CaCl₂ + CO₂ + H₂O"],
    "a": "D. 2HCl + CaCO₃ → CaCl₂ + CO₂ + H₂O",
    "level": "thong_hieu"
  },
  {
    "q": "Dãy các chất nào sau đây đều là hydrocarbon?",
    "options": ["A. C₂H₆, C₄H₁₀, C₂H₄", "B. CH₄, C₂H₂, C₃H₇Cl", "C. C₂H₄, CH₄, C₂H₅Cl", "D. C₂H₆O, C₃H₈, C₂H₂"],
    "a": "A. C₂H₆, C₄H₁₀, C₂H₄",
    "level": "thong_hieu"
  },
  {
    "q": "Thành phần phần trăm về khối lượng của các nguyên tố C, H, O trong C₂H₆O lần lượt là",
    "options": ["A. 52,2%; 13%; 34,8%", "B. 52,2%; 34,8%; 13%", "C. 13%; 34,8%; 52,2%", "D. 34,8%; 13%; 52,2%"],
    "a": "A. 52,2%; 13%; 34,8%",
    "level": "van_dung"
  },
  {
    "q": "Một mol khí ethylene cháy hoàn toàn tỏa ra một lượng nhiệt 1423 kJ. Vậy 5,6 gam ethylene cháy tỏa ra một lượng nhiệt là bao nhiêu kJ?",
    "options": ["A. 7115 kJ", "B. 246,8 kJ", "C. 264,8 kJ", "D. 284,6 kJ"],
    "a": "D. 284,6 kJ",
    "level": "van_dung"
  },
  {
    "q": "Hình ảnh dưới đây là mô hình phân tử chất nào?",
    "options": ["A. C₂H₅OH", "B. CH₃COOH", "C. CH₃OH", "D. HCOOH"],
    "a": "A. C₂H₅OH",
    "level": "nhan_biet"
  },
  {
    "q": "Để phân biệt dung dịch CH₃COOH và C₂H₅OH ta dùng",
    "options": ["A. Na", "B. Zn", "C. K", "D. Cu"],
    "a": "B. Zn",
    "level": "thong_hieu"
  },
  {
    "q": "Từ 1 tấn nước mía chứa 13% saccharose có thể thu được bao nhiêu kg saccharose? Cho biết hiệu suất thu hồi đường đạt 80%.",
    "options": ["A. 104 kg", "B. 130 kg", "C. 140kg", "D. 103kg"],
    "a": "A. 104 kg",
    "level": "van_dung"
  },
  {
    "q": "Lên men hoàn toàn dung dịch chứa m gam glucose thu được dung dịch chứa 23 gam ethylic alcohol. Giá trị của m là",
    "options": ["A. 30 gam", "B. 35 gam", "C. 40 gam", "D. 45 gam"],
    "a": "D. 45 gam",
    "level": "van_dung"
  },
  {
    "q": "Đun 26,7 kg chất béo có công thức là (C₁₇H₃₅COO)₃C₃H₅ với dung dịch NaOH dư (hiệu suất 100%), khối lượng glycerol thu được là",
    "options": ["A. 1,2 kg", "B. 2,76 kg", "C. 3,6 kg", "D. 4,8 kg"],
    "a": "B. 2,76 kg",
    "level": "van_dung"
  },
  {
    "q": "Thành phần chính của đá vôi là calcium carbonate. Công thức của calcium carbonate là",
    "options": ["A. CaSO₃", "B. CaCl₂", "C. CaCO₃", "D. Ca(HCO₃)₂"],
    "a": "C. CaCO₃",
    "level": "nhan_biet"
  },
  {
    "q": "Ở điều kiện thường, phi kim có thể tồn tại ở trạng thái",
    "options": ["A. Lỏng và khí", "B. Rắn và lỏng", "C. Rắn và khí", "D. Rắn, lỏng, khí"],
    "a": "D. Rắn, lỏng, khí",
    "level": "nhan_biet"
  },
  {
    "q": "Phi kim có điểm khác biệt nào so với kim loại?",
    "options": ["A. Dễ bị uốn cong", "B. Không có ánh kim", "C. Dẫn điện tốt", "D. Dẫn nhiệt tốt"],
    "a": "B. Không có ánh kim",
    "level": "nhan_biet"
  },
  {
    "q": "Ở điều kiện thường, kim loại nào sau đây ở trạng thái lỏng?",
    "options": ["A. Hg", "B. Ag", "C. Cu", "D. Al"],
    "a": "A. Hg",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy phi kim tác dụng với oxygen tạo thành oxide acid là",
    "options": ["A. S, C, P", "B. S, C, Cl₂", "C. C, P, Br₂", "D. C, Cl₂, Br₂"],
    "a": "A. S, C, P",
    "level": "thong_hieu"
  },
  {
    "q": "Dãy phi kim tác dụng được với nhau là",
    "options": ["A. Si, Cl₂, O₂", "B. H₂, S, O₂", "C. Cl₂, C, O₂", "D. N₂, S, O₂"],
    "a": "B. H₂, S, O₂",
    "level": "thong_hieu"
  },
  {
    "q": "Chất nào sau đây thuộc loại hợp chất hữu cơ?",
    "options": ["A. CO₂", "B. CO", "C. K₂CO₃", "D. CH₄"],
    "a": "D. CH₄",
    "level": "nhan_biet"
  },
  {
    "q": "Khi đốt cháy các hợp chất hữu cơ đều thấy tạo ra",
    "options": ["A. NO", "B. CO₂", "C. HCl", "D. H₂CO₃"],
    "a": "B. CO₂",
    "level": "nhan_biet"
  },
  {
    "q": "Thành phần phần trăm về khối lượng của nguyên tố C trong C₃H₈O là",
    "options": ["A. 52,2%", "B. 55,2%", "C. 60%", "D. 34,8%"],
    "a": "C. 60%",
    "level": "van_dung"
  },
  {
    "q": "Công thức phân tử của ethylic alcohol là",
    "options": ["A. C₂H₄", "B. C₂H₆O₂", "C. C₂H₆O", "D. CH₄O"],
    "a": "C. C₂H₆O",
    "level": "nhan_biet"
  },
  {
    "q": "Ethanol là chất có tác động đến thần kinh trung ương. Khi hàm lượng ethanol trong máu tăng cao sẽ có hiện tượng nôn, mất tỉnh táo. Tên gọi khác của ethanol là",
    "options": ["A. Methylic alcohol", "B. Ethylic alcohol", "C. Acetic acid", "D. Formic acid"],
    "a": "B. Ethylic alcohol",
    "level": "thong_hieu"
  },
  {
    "q": "Để làm sạch vết dầu ăn dính vào quần áo cần",
    "options": ["A. Giặt quần áo bằng nước lạnh", "B. Giặt kỹ quần áo bằng xà phòng", "C. Dùng acid mạnh để tẩy", "D. Giặt quần áo bằng nước muối"],
    "a": "B. Giặt kỹ quần áo bằng xà phòng",
    "level": "van_dung"
  },
  {
    "q": "Protein được cấu tạo từ bao nhiêu loại axit amin chính?",
    "options": ["A. 10", "B. 20", "C. 30", "D. 40"],
    "a": "B. 20",
    "level": "van_dung"
  },
  {
    "q": "Loại polymer nào sau đây là polymer tự nhiên?",
    "options": ["A. Polyetylen (PE)", "B. Polystyren (PS)", "C. Tinh bột", "D. Nhựa PVC"],
    "a": "C. Tinh bột",
    "level": "van_dung"
  },
  {
    "q": "Nguyên tố phổ biến thứ hai ở vỏ trái đất là",
    "options": ["A. Oxygen", "B. Carbon", "C. Silicon", "D. Iron"],
    "a": "C. Silicon",
    "level": "nhan_biet"
  },
  {
    "q": "Trong các chất sau, chất nào là chất bán dẫn?",
    "options": ["A. Iron", "B. Sodium", "C. Cacbon", "D. Silicon"],
    "a": "D. Silicon",
    "level": "nhan_biet"
  },
  {
    "q": "Silicon được sử dụng làm",
    "options": ["A. Điện cực", "B. trang sức", "C. Pin mặt trời", "D. Đồ dùng học tập"],
    "a": "C. Pin mặt trời",
    "level": "nhan_biet"
  },
  {
    "q": "Trong các chất sau, chất nào để sản xuất nước javel, chất tẩy rửa?",
    "options": ["A. Cacbon", "B. Lưu huỳnh", "C. Silicon", "D. Chlorine"],
    "a": "D. Chlorine",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy chất nào sau đây gồm các nguyên tố đều là phi kim?",
    "options": ["A. F, N, O, Na", "B. O, Cl, Br, H", "C. H, N, O, K", "D. K, Na, Mg, Al"],
    "a": "B. O, Cl, Br, H",
    "level": "thong_hieu"
  },
  {
    "q": "Chất được dùng để tẩy trắng giấy và bột giấy trong công nghiệp là",
    "options": ["A. N₂O", "B. CO₂", "C. SO₂", "D. NO₂"],
    "a": "C. SO₂",
    "level": "thong_hieu"
  },
  {
    "q": "Chất nào sau đây là chất hữu cơ?",
    "options": ["A. CO₂", "B. CH₄", "C. CO", "D. K₂CO₃"],
    "a": "B. CH₄",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy các chất nào sau đây đều là hydrocarbon?",
    "options": ["A. C₂H₄, CH₃COOH, C₆H₆", "B. C₂H₅OH, CH₄, C₂H₂", "C. C₂H₆, C₄H₁₀, C₂H₄", "D. C₂H₆O, C₃H₈, C₂H₂"],
    "a": "C. C₂H₆, C₄H₁₀, C₂H₄",
    "level": "thong_hieu"
  },
  {
    "q": "Một mol khí ethylene cháy hoàn toàn tỏa ra một lượng nhiệt 1423 kJ. Vậy 5,6 gam ethylene cháy tỏa ra một lượng nhiệt là bao nhiêu kJ?",
    "options": ["A. 7115 kJ", "B. 246,8 kJ", "C. 264,8 kJ", "D. 284,6 kJ"],
    "a": "D. 284,6 kJ",
    "level": "van_dung"
  },
  {
    "q": "Công thức cấu tạo của ethylic alcohol là",
    "options": ["A. CH₂-CH₃-OH", "B. CH₃-O-CH₃", "C. CH₂-CH₂-OH₂", "D. CH₃-CH₂-OH"],
    "a": "D. CH₃-CH₂-OH",
    "level": "nhan_biet"
  },
  {
    "q": "Biết tỉ khối hơi của X so với khí methane là 3,75. Công thức phân tử của X là",
    "options": ["A. C₂H₄O₂", "B. C₃H₈O", "C. CH₄O", "D. C₂H₆O"],
    "a": "A. C₂H₄O₂",
    "level": "thong_hieu"
  },
  {
    "q": "Để làm sạch vết dầu ăn dính vào quần áo cần",
    "options": ["A. Giặt quần áo bằng nước lạnh", "B. Giặt kỹ quần áo bằng xà phòng", "C. Dùng acid mạnh để tẩy", "D. Giặt quần áo bằng nước muối"],
    "a": "B. Giặt kỹ quần áo bằng xà phòng",
    "level": "van_dung"
  },
  {
    "q": "Lên men m gam glucozơ với hiệu suất 90%, lượng khí CO₂ sinh ra hấp thụ hết vào dung dịch nước vôi trong, thu được 10 gam kết tủa. Khối lượng dung dịch sau phản ứng giảm 3,4 gam so với khối lượng nước vôi trong ban đầu. Giá trị của m là",
    "options": ["A. 20 gam", "B. 30 gam", "C. 12 gam", "D. 15gam"],
    "a": "D. 15gam",
    "level": "van_dung"
  },
  {
    "q": "Thủy phân 1 kg sắn chứa 20% tinh bột trong môi trường axit. Với hiệu suất phản ứng 85%, lượng glucozơ thu được là.",
    "options": ["A. 261,43 gam", "B. 200,8 gam", "C. 188,89 gam", "D. 192,5 gam"],
    "a": "C. 188,89 gam",
    "level": "van_dung"
  },
  {
    "q": "Đá vôi thường dùng làm nguyên liệu",
    "options": ["A. sản xuất phân bón", "B. sản xuất mĩ phẩm", "C. công nghiệp silicate", "D. luyện kim"],
    "a": "C. công nghiệp silicate",
    "level": "nhan_biet"
  },
  {
    "q": "Kết luận nào sau đây không đúng?",
    "options": ["A. Kim loại dẻo nhất là sodium", "B. Kim loại có nhiệt độ nóng chảy thấp nhất là Mercury", "C. Kim loại có nhiệt độ nóng chảy cao nhất là tungsten", "D. Kim loại dẫn điện tốt nhất là silver"],
    "a": "A. Kim loại dẻo nhất là sodium",
    "level": "nhan_biet"
  },
  {
    "q": "Công thức hóa học của nguyên tố Iron là gì?",
    "options": ["A. Ag", "B. Au", "C. Fe", "D. Cu"],
    "a": "C. Fe",
    "level": "nhan_biet"
  },
  {
    "q": "Trong các chất sau, chất nào là phi kim?",
    "options": ["A. Sodium (Na)", "B. Copper (Cu)", "C. Sulfur (S)", "D. Iron (Fe)"],
    "a": "C. Sulfur (S)",
    "level": "nhan_biet"
  },
  {
    "q": "Các kim loại nào sau đây tác dụng được với dung dịch HCl?",
    "options": ["A. Au, Mg", "B. Al, Fe", "C. Zn, Ag", "D. Cu, Na"],
    "a": "B. Al, Fe",
    "level": "thong_hieu"
  },
  {
    "q": "Dãy kim loại tác dụng được với dung dịch Cu(NO₃)₂ tạo thành Cu:",
    "options": ["A. Al; Zn; Fe", "B. Zn; Pb; Au", "C. Mg; Fe; Ag", "D. Na; Mg; Al"],
    "a": "A. Al; Zn; Fe",
    "level": "thong_hieu"
  },
  {
    "q": "Chọn câu đúng trong các câu sau:",
    "options": ["A. Hóa học hữu cơ là ngành hóa học chuyên nghiên cứu các hợp chất có trong tự nhiên", "B. Hóa học hữu cơ là ngành hóa học chuyên nghiên cứu các hợp chất của cacbon", "C. Hóa học hữu cơ là ngành hóa học chuyên nghiên cứu về các hợp chất hữu cơ", "D. Hóa học hữu cơ là ngành hóa học chuyên nghiên cứu các chất trong cơ thể sống"],
    "a": "C. Hóa học hữu cơ là ngành hóa học chuyên nghiên cứu về các hợp chất hữu cơ",
    "level": "nhan_biet"
  },
  {
    "q": "Nhóm các chất đều là hợp chất hữu cơ là:",
    "options": ["A. K₂CO₃; CH₃COONa; C₂H₆", "B. C₆H₆; Ca(HCO₃)₂; C₁₂H₂₂O₁₁", "C. CH₄; CO₂; C₂H₆O", "D. CH₃Cl; C₂H₆O; C₃H₈"],
    "a": "D. CH₃Cl; C₂H₆O; C₃H₈",
    "level": "thong_hieu"
  },
  {
    "q": "Acetic acid có công thức C₂H₄O₂. Thành phần phần trăm theo khối lượng của nguyên tố oxi trong acetic acid là:",
    "options": ["A. %O = 53,33%", "B. %O = 40%", "C. %O = 6,67%", "D. %O = 25%"],
    "a": "A. %O = 53,33%",
    "level": "van_dung"
  },
  {
    "q": "Nhận biết acetic acid bằng cách cho tác dụng với các chất sau đây, trường hợp nào không xảy ra phản ứng?",
    "options": ["A. Quỳ tím", "B. NaOH", "C. Na₂CO₃", "D. C₂H₆"],
    "a": "D. C₂H₆",
    "level": "thong_hieu"
  },
  {
    "q": "Tính chất vật lí của acetic acid:",
    "options": ["A. chất lỏng, không màu, vị chua, tan vô hạn trong nước", "B. chất lỏng, màu trắng, vị chua, tan vô hạn trong nước", "C. chất lỏng, không màu, vị đắng, tan vô hạn trong nước", "D. chất lỏng, không màu, vị chua, không tan trong nước"],
    "a": "A. chất lỏng, không màu, vị chua, tan vô hạn trong nước",
    "level": "nhan_biet"
  },
  {
    "q": "Công thức phân tử của ethylic alcohol là:",
    "options": ["A. CH₄O", "B. C₂H₄O₂", "C. C₂H₆O", "D. CH₂O₂"],
    "a": "C. C₂H₆O",
    "level": "nhan_biet"
  },
  {
    "q": "Trong phòng thí nghiệm, một nhóm học sinh muốn phân biệt tinh bột và đường saccharose. Các em đã sử dụng thuốc thử nào để thực hiện phản ứng này?",
    "options": ["A. Dung dịch NaOH", "B. Dung dịch Cu(OH)₂ trong môi trường kiềm", "C. Dung dịch I₂", "D. Dung dịch HCl"],
    "a": "C. Dung dịch I₂",
    "level": "van_dung"
  },
  {
    "q": "Từ 1 tấn nước mía chứa 13% saccharose có thể thu được bao nhiêu kg saccharose? Cho biết hiệu suất thu hồi đường đạt 80%.",
    "options": ["A. 104 kg", "B. 130 kg", "C. 140kg", "D. 103kg"],
    "a": "A. 104 kg",
    "level": "van_dung"
  },
  {
    "q": "Lên men một lượng glucose thành ethylic alcohol thì thu được 100 ml alcohol 46°. Khối lượng riêng của alcohol nguyên chất là 0,8 gam/ml. Hấp thụ toàn bộ khí CO₂ sinh ra trong quá trình lên men vào dung dịch NaOH dư. Tính khối lượng muối thu được (các phản ứng xảy ra hoàn toàn)?",
    "options": ["A. 48,8 g", "B. 88,4 g", "C. 84,8 g", "D. 44,8 g"],
    "a": "C. 84,8 g",
    "level": "van_dung"
  },
  {
    "q": "Các kim loại thường có vẻ đẹp sáng lấp lánh, rất đẹp, nhiều kim loại được sử dụng làm đồ trang sức, vật dụng trang trí. Đó là tính chất vật lí nào của kim loại?",
    "options": ["A. Ánh kim", "B. Tính dẫn điện", "C. Tính dẫn nhiệt", "D. Tính dẻo"],
    "a": "A. Ánh kim",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại X có nhiệt độ nóng chảy cao nhất, được sử dụng làm dây tóc bóng đèn. Kim loại X là:",
    "options": ["A. Sắt", "B. Thủy ngân", "C. Vonfram", "D. Vàng"],
    "a": "C. Vonfram",
    "level": "nhan_biet"
  },
  {
    "q": "Cho dãy các kim loại sau: Au, K, Mg, Ag, Fe, Cu. Có bao nhiêu kim loại đứng sau H trong dãy hoạt động hóa học:",
    "options": ["A. 1", "B. 2", "C. 3", "D. 4"],
    "a": "C. 3",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy kim loại tác dụng được với dung dịch Cu(NO₃)₂ tạo thành Cu kim loại:",
    "options": ["A. Zn, Pb, Au", "B. Al, Zn, Fe", "C. Mg, Fe, Ag", "D. Na, Mg, Al"],
    "a": "B. Al, Zn, Fe",
    "level": "nhan_biet"
  },
  {
    "q": "Cho một lá kẽm (Zn) vào dung dịch chứa đồng (II) sunfat (CuSO₄). Quan sát thấy hiện tượng nào sau đây?",
    "options": ["A. Có khí thoát ra, lá kẽm tan dần", "B. Có một lớp kim loại màu đỏ bám vào lá kẽm, dung dịch nhạt màu xanh dần", "C. Không có hiện tượng gì xảy ra", "D. Dung dịch chuyển sang màu xanh đậm hơn"],
    "a": "B. Có một lớp kim loại màu đỏ bám vào lá kẽm, dung dịch nhạt màu xanh dần",
    "level": "nhan_biet"
  },
  {
    "q": "Trong các chất sau, chất nào là hợp chất hữu cơ?",
    "options": ["A. NaCl", "B. HCl", "C. C₂H₅OH", "D. CaCO₃"],
    "a": "C. C₂H₅OH",
    "level": "nhan_biet"
  },
  {
    "q": "Trong các hiđrocacbon sau: CH₄, C₂H₄, C₂H₂, C₆H₆. Chất nào có thể tham gia phản ứng cộng với dung dịch brom ở điều kiện thường?",
    "options": ["A. CH₄ và C₂H₄", "B. C₂H₄ và C₂H₂", "C. C₂H₄ và C₆H₆", "D. CH₄ và C₂H₂"],
    "a": "B. C₂H₄ và C₂H₂",
    "level": "thong_hieu"
  },
  {
    "q": "Đốt cháy hoàn toàn 4,4 gam khí propan (C₃H₈) cần một thể tích oxi (đktc) là bao nhiêu lít?",
    "options": ["A. 11,2 lít", "B. 22,4 lít", "C. 33,6 lít", "D. 44,8 lít"],
    "a": "A. 11,2 lít",
    "level": "van_dung"
  },
  {
    "q": "Ethylic alcohol trong phân tử gồm",
    "options": ["A. nhóm ethyl (C₂H₅) liên kết với nhóm -OH", "B. nhóm methyl (CH₃) liên kết với nhóm -OH", "C. nhóm hydrocarbon liên kết với nhóm -OH", "D. nhóm methyl (CH₃) liên kết với oxygen"],
    "a": "A. nhóm ethyl (C₂H₅) liên kết với nhóm -OH",
    "level": "nhan_biet"
  },
  {
    "q": "Trong số các chất sau, chất nào tác dụng được với Na?",
    "options": ["A. CH₃-CH₃", "B. CH₃-CH₂-OH", "C. C₆H₆", "D. CH₃-O-CH₃"],
    "a": "B. CH₃-CH₂-OH",
    "level": "thong_hieu"
  },
  {
    "q": "Dầu ăn để lâu ngày thường bị ôi do",
    "options": ["A. quá trình thủy phân trong môi trường axit", "B. quá trình oxi hóa các gốc hiđrocacbon không no", "C. quá trình kết tinh của triglixerit", "D. quá trình trùng ngưng tạo polime"],
    "a": "A. quá trình thủy phân trong môi trường axit",
    "level": "van_dung"
  },
  {
    "q": "Khi đun nóng lòng trắng trứng, hiện tượng đông đặc xảy ra là do:",
    "options": ["A. Phản ứng este hóa", "B. Quá trình oxi hóa", "C. Sự đông tụ protein", "D. Thủy phân protein thành amino axit"],
    "a": "C. Sự đông tụ protein",
    "level": "van_dung"
  },
  {
    "q": "Tính chất nào sau đây không phải của polietilen (PE)?",
    "options": ["A. Không tan trong nước, bền với axit và kiềm", "B. Có tính đàn hồi cao, kéo dãn được", "C. Là chất rắn, không dẫn điện và không dẫn nhiệt", "D. Dùng để sản xuất túi nilon"],
    "a": "B. Có tính đàn hồi cao, kéo dãn được",
    "level": "van_dung"
  },
  {
    "q": "Trong các hoạt động sau, hoạt động nào là khai thác tài nguyên từ vỏ Trái Đất?",
    "options": ["A. Trồng rừng phủ xanh đồi trọc", "B. Khai thác than đá, dầu mỏ, quặng sắt", "C. Nuôi cá trong ao hồ", "D. Xây dựng nhà máy thủy điện"],
    "a": "B. Khai thác than đá, dầu mỏ, quặng sắt",
    "level": "nhan_biet"
  },
  {
    "q": "Tính chất vật lý chung của kim loại là:",
    "options": ["A. Dẫn điện, dẫn nhiệt kém, dễ bay hơi", "B. Có ánh kim, dẫn điện và dẫn nhiệt tốt", "C. Không có ánh kim, dễ tan trong nước", "D. Mềm, nhẹ, không dẫn điện"],
    "a": "B. Có ánh kim, dẫn điện và dẫn nhiệt tốt",
    "level": "nhan_biet"
  },
  {
    "q": "Phi kim thường có tính chất hóa học nào sau đây?",
    "options": ["A. Dễ nhường electron trong phản ứng", "B. Không phản ứng với kim loại", "C. Dễ nhận electron khi phản ứng", "D. Luôn tồn tại ở trạng thái lỏng"],
    "a": "C. Dễ nhận electron khi phản ứng",
    "level": "nhan_biet"
  },
  {
    "q": "Nguyên tố nào sau đây là kim loại?",
    "options": ["A. Oxi", "B. Lưu huỳnh", "C. Natri", "D. Clo"],
    "a": "C. Natri",
    "level": "nhan_biet"
  },
  {
    "q": "Sự khác nhau cơ bản trong tính chất hóa học giữa kim loại và phi kim là:",
    "options": ["A. Kim loại dẫn điện, phi kim không", "B. Kim loại thường nhường electron, phi kim thường nhận electron", "C. Phi kim luôn nhẹ hơn kim loại", "D. Kim loại có ánh kim, phi kim không có"],
    "a": "B. Kim loại thường nhường electron, phi kim thường nhận electron",
    "level": "thong_hieu"
  },
  {
    "q": "Cho các nguyên tố: Na, Al, O, Cl. Cặp nào dưới đây gồm một kim loại và một phi kim?",
    "options": ["A. Na và Al", "B. O và Cl", "C. Na và O", "D. Al và Na"],
    "a": "C. Na và O",
    "level": "thong_hieu"
  },
  {
    "q": "Chất nào sau đây là hợp chất hữu cơ?",
    "options": ["A. CO₂", "B. H₂O", "C. CH₄", "D. NaCl"],
    "a": "C. CH₄",
    "level": "nhan_biet"
  },
  {
    "q": "Hiđrocacbon là hợp chất hữu cơ gồm những nguyên tố nào?",
    "options": ["A. C, H", "B. C, H, O", "C. C, O", "D. C, H, N"],
    "a": "A. C, H",
    "level": "nhan_biet"
  },
  {
    "q": "Tại sao khí metan (CH₄) có thể được dùng làm nhiên liệu?",
    "options": ["A. Vì dễ tan trong nước", "B. Vì phản ứng cháy tỏa nhiều nhiệt", "C. Vì là hợp chất vô cơ", "D. Vì không cháy được trong không khí"],
    "a": "B. Vì phản ứng cháy tỏa nhiều nhiệt",
    "level": "thong_hieu"
  },
  {
    "q": "Chất nào sau đây có thể dùng để nhận biết axit axetic (CH₃COOH) trong dung dịch?",
    "options": ["A. Phenolphtalein", "B. Quỳ tím", "C. Dung dịch brom", "D. Natri clorua"],
    "a": "B. Quỳ tím",
    "level": "nhan_biet"
  },
  {
    "q": "Khi cho etanol (C₂H₅OH) tác dụng với axit axetic (CH₃COOH) trong điều kiện thích hợp, sản phẩm chính thu được là:",
    "options": ["A. Etyl axetat và nước", "B. Axit fomic và metanol", "C. Metyl axetat và khí CO₂", "D. Axit axetic và khí H₂"],
    "a": "A. Etyl axetat và nước",
    "level": "thong_hieu"
  },
  {
    "q": "Đun nóng 8,8 gam tristearin (C₅₇H₁₁₀O₆) với dung dịch NaOH vừa đủ, thu được sản phẩm gồm xà phòng và glixerol. Khối lượng xà phòng thu được là:",
    "options": ["A. 9,2 gam", "B. 10,4 gam", "C. 12,2 gam", "D. 11,4 gam"],
    "a": "A. 9,2 gam",
    "level": "van_dung"
  },
  {
    "q": "Cho 1,8 gam glucozơ phản ứng hoàn toàn với lượng dư dung dịch AgNO₃/NH₃. Khối lượng bạc sinh ra là:",
    "options": ["A. 4,32 gam", "B. 3,24 gam", "C. 2,16 gam", "D. 1,08 gam"],
    "a": "C. 2,16 gam",
    "level": "van_dung"
  },
  {
    "q": "Chất nào sau đây được tạo ra từ phản ứng trùng ngưng?",
    "options": ["A. Poli(vinyl clorua)", "B. Polietilen", "C. Poli(metyl metacrylat)", "D. Poli(hexametylen adipamit)"],
    "a": "D. Poli(hexametylen adipamit)",
    "level": "van_dung"
  },
  {
    "q": "Hoạt động nào sau đây là ví dụ về việc khai thác tài nguyên từ vỏ Trái Đất?",
    "options": ["A. Trồng rừng trên đất đồi trọc", "B. Khai thác than đá từ lòng đất", "C. Nuôi cá ở vùng ven biển", "D. Tái chế chất thải nhựa"],
    "a": "B. Khai thác than đá từ lòng đất",
    "level": "nhan_biet"
  },
  {
    "q": "Một số dây điện trong nhà bị đứt lõi đồng. Người ta thường thay bằng dây nhôm vì",
    "options": ["A. nhôm dẫn điện kém hơn đồng, rẻ tiền hơn, nhẹ", "B. nhôm không dẫn điện nhưng bền", "C. nhôm dẫn điện tốt, nhẹ, rẻ hơn đồng", "D. nhôm có tính oxi hóa mạnh hơn đồng"],
    "a": "C. nhôm dẫn điện tốt, nhẹ, rẻ hơn đồng",
    "level": "thong_hieu"
  },
  {
    "q": "Người ta thường mạ kẽm (Zn) cho sắt (Fe) để chống gỉ. Nguyên nhân chủ yếu vì",
    "options": ["A. kẽm có màu sáng bóng, đẹp hơn sắt", "B. kẽm hoạt động hóa học mạnh hơn sắt, bị oxi hóa trước", "C. sắt và kẽm đều là kim loại màu trắng bạc", "D. sắt hoạt động mạnh hơn kẽm, nên không gỉ"],
    "a": "B. kẽm hoạt động hóa học mạnh hơn sắt, bị oxi hóa trước",
    "level": "thong_hieu"
  },
  {
    "q": "Khi bỏ một đoạn dây sắt sạch vào dung dịch coper(II) sunfate (CuSO₄), sau một thời gian trên dây sắt có một lớp đỏ bám vào. Chất rắn màu đỏ đó là",
    "options": ["A. Iron", "B. Coper", "C. Iron(II) sunfate", "D. Oxygen"],
    "a": "B. Coper",
    "level": "nhan_biet"
  },
  {
    "q": "Cho 3 kim loại: Sodium (Na), Iron (Fe), Coper (Cu). Nếu lần lượt cho tác dụng với dung dịch hydrochloric acid (HCl) loãng, thì số thí nghiệm có phản ứng xảy ra là",
    "options": ["A. 1", "B. 2", "C. 3", "D. 0"],
    "a": "B. 2",
    "level": "thong_hieu"
  },
  {
    "q": "Than chì được dùng làm điện cực trong pin điện hóa vì:",
    "options": ["A. Là phi kim nhưng dẫn điện tốt", "B. Là kim loại dẫn điện tốt", "C. Bền vững, không bị ăn mòn", "D. Tính oxi hóa mạnh"],
    "a": "A. Là phi kim nhưng dẫn điện tốt",
    "level": "nhan_biet"
  },
  {
    "q": "Khí methane (CH₄) sinh ra trong quá trình phân hủy rơm rạ, phân chuồng có thể dùng làm khí biogas. Tính chất hóa học đặc trưng của metane là",
    "options": ["A. tác dụng với dung dịch kiềm", "B. tham gia phản ứng cộng", "C. tham gia phản ứng cháy, tỏa nhiều nhiệt", "D. phản ứng trùng hợp"],
    "a": "C. tham gia phản ứng cháy, tỏa nhiều nhiệt",
    "level": "nhan_biet"
  },
  {
    "q": "Trong công nghiệp, khí ethylene (C₂H₄) được dùng để thúc quả chín. Nguyên nhân là vì ethylene:",
    "options": ["A. Là alkane, dễ cháy", "B. Là alkene, có liên kết đôi hoạt động", "C. Là acid hữu cơ, tác dụng với đường", "D. Là rượu, dễ bay hơi"],
    "a": "B. Là alkene, có liên kết đôi hoạt động",
    "level": "thong_hieu"
  },
  {
    "q": "Một học sinh đốt cháy khí metan (CH₄) trong không khí thu được khí CO₂ và hơi nước. Để đốt hết 1 mol metan, cần dùng bao nhiêu mol O₂?",
    "options": ["A. 1 mol", "B. 1,5 mol", "C. 2 mol", "D. 0,5 mol"],
    "a": "C. 2 mol",
    "level": "van_dung"
  },
  {
    "q": "Rượu ethylic có trong bia, rượu, khi uống quá nhiều sẽ ảnh hưởng thần kinh. Công thức phân tử của rượu ethylic là",
    "options": ["A. CH₃COOH", "B. C₂H₅OH", "C. C₂H₆", "D. C₂H₂"],
    "a": "B. C₂H₅OH",
    "level": "nhan_biet"
  },
  {
    "q": "Người ta pha giấm ăn từ acetic acid. Tính chất hóa học đặc trưng của acetic acid là",
    "options": ["A. tác dụng với dung dịch NaCl", "B. tác dụng với kim loại (Zn, Mg...)", "C. tác dụng với rượu ethylic tạo este", "D. không phản ứng được với base"],
    "a": "C. tác dụng với rượu ethylic tạo este",
    "level": "thong_hieu"
  },
  {
    "q": "Khi lên men 180 gam glucozơ thu được rượu etylic và khí CO₂. Hiệu suất phản ứng là 90%. Khối lượng rượu etylic (C₂H₅OH) thu được là:",
    "options": ["A. 69,0 gam", "B. 82,8 gam", "C. 74,5 gam", "D. 92,0 gam"],
    "a": "B. 82,8 gam",
    "level": "van_dung"
  },
  {
    "q": "Để trung hòa hoàn toàn 8,8 gam một axit béo đơn chức no cần vừa đủ 100 ml dung dịch NaOH 1M. Công thức phân tử của axit béo là:",
    "options": ["A. C₁₅H₃₁COOH", "B. C₁₇H₃₅COOH", "C. C₁₇H₃₃COOH", "D. C₁₇H₂₉COOH"],
    "a": "B. C₁₇H₃₅COOH",
    "level": "van_dung"
  },
  {
    "q": "Polietilen (PE) là polime được tạo bởi phản ứng trùng hợp etilen (C₂H₄). Biết khối lượng mol của một phân tử PE là 28000 g/mol. Hệ số trùng hợp (n) của phản ứng là",
    "options": ["A. 50", "B. 100", "C. 250", "D. 1000"],
    "a": "D. 1000",
    "level": "van_dung"
  },
  {
    "q": "Trong đời sống, đá vôi (CaCO₃) sau khi nung thành vôi sống (CaO) có nhiều ứng dụng. Một trong những ứng dụng của CaO là",
    "options": ["A. làm gạch chịu lửa", "B. khử chua đất trồng", "C. làm thủy tinh", "D. làm chất dẻo"],
    "a": "B. khử chua đất trồng",
    "level": "nhan_biet"
  },
  {
    "q": "Sản phẩm của phản ứng giữa kim loại với phi kim (trừ oxygen) là",
    "options": ["A. oxide", "B. base", "C. acid", "D. muối"],
    "a": "D. muối",
    "level": "nhan_biet"
  },
  {
    "q": "Các kim loại nào sau đây tác dụng được với dung dịch HCl?",
    "options": ["A. Au, Mg", "B. Al, Fe", "C. Zn, Ag", "D. Cu, Na"],
    "a": "B. Al, Fe",
    "level": "thong_hieu"
  },
  {
    "q": "Kim loại nhôm (Aluminium) bị hòa tan bởi H₂SO₄ loãng, thu được muối sulfate và khí hydrogen. Phản ứng mô tả hiện tượng trên là",
    "options": ["A. 2Al + H₂SO₄ → Al₂(SO₄)₃ + H₂", "B. 2Al + H₂SO₄ → Al₂SO₄ + H₂", "C. Al + 3H₂SO₄ → Al(SO₄)₃ + H₂", "D. 2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂"],
    "a": "D. 2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂",
    "level": "thong_hieu"
  },
  {
    "q": "Gang và thép là hợp kim của",
    "options": ["A. aluminum và copper", "B. iron và carbon", "C. carbon và silicon", "D. iron và aluminum"],
    "a": "B. iron và carbon",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy kim loại tác dụng được với dung dịch Cu(NO₃)₂ để tạo ra kim loại đồng là",
    "options": ["A. Zn, Al, Fe, Cu", "B. Zn, Al, Fe, Ag", "C. Zn, Mg, Al, Fe", "D. Cu, Fe, Al"],
    "a": "C. Zn, Mg, Al, Fe",
    "level": "thong_hieu"
  },
  {
    "q": "Alkene là những hydrocarbon có đặc điểm:",
    "options": ["A. mạch hở, có một liên kết ba C≡C", "B. mạch vòng, có một liên kết đôi C=C", "C. mạch hở, có một liên kết đôi C=C", "D. mạch vòng, chỉ có liên kết đơn"],
    "a": "C. mạch hở, có một liên kết đôi C=C",
    "level": "nhan_biet"
  },
  {
    "q": "Trong công nghiệp, các alkane được điều chế từ nguồn nào sau đây?",
    "options": ["A. Sodium acetate", "B. Dầu mỏ và khí dầu mỏ", "C. Aluminium carbide (Al₄C₃)", "D. Khí biogas"],
    "a": "B. Dầu mỏ và khí dầu mỏ",
    "level": "thong_hieu"
  },
  {
    "q": "Một mol khí ethylene cháy hoàn toàn tỏa ra một lượng nhiệt 1423 kJ. Vậy 5,6 gam ethylene cháy tỏa ra một lượng nhiệt là bao nhiêu kJ?",
    "options": ["A. 7115 kJ", "B. 246,8 kJ", "C. 264,8 kJ", "D. 284,6 kJ"],
    "a": "D. 284,6 kJ",
    "level": "van_dung"
  },
  {
    "q": "Trong 100 ml rượu 45° có chứa",
    "options": ["A. 45ml nước và 55 ml rượu nguyên chất", "B. 45 ml rượu nguyên chất và 55 ml nước", "C. 45 gam rượu nguyên chất và 55 gam nước", "D. 45 gam nước và 55 gam rượu nguyên chất"],
    "a": "B. 45 ml rượu nguyên chất và 55 ml nước",
    "level": "nhan_biet"
  },
  {
    "q": "Giấm ăn là dung dịch acetic acid có nồng độ là",
    "options": ["A. 2% - 5%", "B. 5% - 9%", "C. 9% -12%", "D. 12% -15%"],
    "a": "A. 2% - 5%",
    "level": "nhan_biet"
  },
  {
    "q": "Để làm sạch vết dầu ăn dính vào quần áo cần",
    "options": ["A. Giặt quần áo bằng nước lạnh", "B. Giặt kỹ quần áo bằng xà phòng", "C. Dùng acid mạnh để tẩy", "D. Giặt quần áo bằng nước muối"],
    "a": "B. Giặt kỹ quần áo bằng xà phòng",
    "level": "van_dung"
  },
  {
    "q": "Lên men hoàn toàn dung dịch chứa m gam glucose thu được dung dịch chứa 23 gam ethylic alcohol. Giá trị của m là",
    "options": ["A. 30 gam", "B. 35 gam", "C. 40 gam", "D. 45 gam"],
    "a": "D. 45 gam",
    "level": "van_dung"
  },
  {
    "q": "Cho sơ đồ chuyển hóa sau: Tinh bột → X → Y → acid axetic. X và Y lần lượt là:",
    "options": ["A. glucose, ethylic alcohol", "B. maltose, glucose", "C. glucose, ethyl acetate", "D. ethylic alcohol, aldehyde acetic"],
    "a": "A. glucose, ethylic alcohol",
    "level": "van_dung"
  },
  {
    "q": "Đâu không phải nguồn nhiên liệu từ vỏ Trái Đất?",
    "options": ["A. Nhiên liệu hạt nhân", "B. Dầu mỏ", "C. Khí đốt", "D. Than đá"],
    "a": "A. Nhiên liệu hạt nhân",
    "level": "nhan_biet"
  },
  {
    "q": "Tính chất vật lý nào sau đây không phải là của kim loại?",
    "options": ["A. dẫn điện tốt", "B. có ánh kim", "C. giòn, dễ vỡ", "D. dễ dát mỏng"],
    "a": "C. giòn, dễ vỡ",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại nào sau đây có tính dẫn điện tốt nhất?",
    "options": ["A. Aluminium", "B. Iron", "C. Copper", "D. Gold"],
    "a": "D. Gold",
    "level": "nhan_biet"
  },
  {
    "q": "Tính chất hóa học đặc trưng của kim loại là",
    "options": ["A. nhận electron trong phản ứng hóa học", "B. tác dụng với acid tạo muối và giải phóng hydrogen", "C. tạo oxide acid khi tác dụng với oxygen", "D. không phản ứng với nước"],
    "a": "B. tác dụng với acid tạo muối và giải phóng hydrogen",
    "level": "thong_hieu"
  },
  {
    "q": "Phản ứng nào sau đây không chứng minh được tính chất hóa học của kim loại?",
    "options": ["A. Zn + HCl → ZnCl₂ + H₂", "B. Fe + S → FeS", "C. Cu + O₂ → CuO", "D. Cl₂ + H₂ → 2HCl"],
    "a": "D. Cl₂ + H₂ → 2HCl",
    "level": "thong_hieu"
  },
  {
    "q": "Cặp chất thể hiện tính chất hóa học đối lập của kim loại và phi kim:",
    "options": ["A. Na và Cl₂", "B. Fe và Cu", "C. S và P", "D. O₂ và Cl₂"],
    "a": "A. Na và Cl₂",
    "level": "thong_hieu"
  },
  {
    "q": "Hợp chất hữu cơ là gì?",
    "options": ["A. Hợp chất chỉ chứa kim loại", "B. Hợp chất chứa oxi và hidro", "C. Hợp chất của cacbon (thường chứa H, có thể kèm O, N,...)", "D. Hợp chất chứa các nguyên tố halogen"],
    "a": "C. Hợp chất của cacbon (thường chứa H, có thể kèm O, N,...)",
    "level": "nhan_biet"
  },
  {
    "q": "Hợp chất hữu cơ thường có khả năng cháy trong không khí là vì:",
    "options": ["A. có chứa oxygen và nitrogen", "B. có chứa carbon và hydrogen, dễ bị oxi hóa", "C. là chất khí nên dễ cháy", "D. có cấu tạo đơn giản"],
    "a": "B. có chứa carbon và hydrogen, dễ bị oxi hóa",
    "level": "thong_hieu"
  },
  {
    "q": "So với hợp chất vô cơ, hợp chất hữu cơ thường có điểm khác biệt",
    "options": ["A. phản ứng nhanh hơn, dễ hơn", "B. không có tính phân cực", "C. phản ứng chậm, điều kiện phản ứng phức tạp hơn", "D. không phản ứng với các chất oxi hóa"],
    "a": "C. phản ứng chậm, điều kiện phản ứng phức tạp hơn",
    "level": "thong_hieu"
  },
  {
    "q": "Công thức hóa học của axit axetic là",
    "options": ["A. CH₄", "B. C₂H₄", "C. CH₃COOH", "D. C₂H₅OH"],
    "a": "C. CH₃COOH",
    "level": "nhan_biet"
  },
  {
    "q": "Ethylic alcohol có thể tác dụng với kim loại sodium (Na) tạo khí H₂",
    "options": ["A. vì rượu etylic là axit mạnh", "B. vì rượu etylic chứa nhóm -OH có tính axit yếu", "C. vì rượu etylic là bazơ", "D. vì rượu etylic là muối"],
    "a": "B. vì rượu etylic chứa nhóm -OH có tính axit yếu",
    "level": "thong_hieu"
  },
  {
    "q": "Thủy phân hoàn toàn saccarozơ trong môi trường axit thu được",
    "options": ["A. Glucozơ và fructozơ", "B. Glucozơ và galactozơ", "C. Fructozơ và mantozơ", "D. Glucozơ"],
    "a": "A. Glucozơ và fructozơ",
    "level": "van_dung"
  },
  {
    "q": "Chất nào sau đây tham gia phản ứng tráng bạc?",
    "options": ["A. Glucozơ", "B. Fructozơ", "C. Saccarozơ", "D. Mantozơ"],
    "a": "A. Glucozơ",
    "level": "van_dung"
  },
  {
    "q": "Thuốc thử để nhận biết protein là",
    "options": ["A. Cu(OH)₂ trong môi trường kiềm", "B. nước brom", "C. dung dịch iốt", "D. dung dịch AgNO₃/NH₃"],
    "a": "A. Cu(OH)₂ trong môi trường kiềm",
    "level": "van_dung"
  },
  {
    "q": "Loại khoáng sản nào sau đây là nhiên liệu?",
    "options": ["A. Sắt, mangan", "B. Than đá, dầu mỏ", "C. Muối ăn, apatit", "D. Vàng, bạc"],
    "a": "B. Than đá, dầu mỏ",
    "level": "nhan_biet"
  },
  {
    "q": "Vật liệu dưới đây được dùng để chế tạo mặt nạ phòng độc?",
    "options": ["A. Chì", "B. Than đá", "C. Than vô định hình", "D. Than chì"],
    "a": "C. Than vô định hình",
    "level": "nhan_biet"
  },
  {
    "q": "Nguyên tố nào sau đây không phải là kim loại?",
    "options": ["A. Fe", "B. K", "C. Cl", "D. Mg"],
    "a": "C. Cl",
    "level": "nhan_biet"
  },
  {
    "q": "Ở điều kiện thường, phi kim ở thể lỏng là",
    "options": ["A. oxygen", "B. chlorine", "C. carbon", "D. bromine"],
    "a": "D. bromine",
    "level": "nhan_biet"
  },
  {
    "q": "Sau khi nung đỏ hỗn hợp gồm Sulfur và Iron thu được sản phẩm là",
    "options": ["A. FeO", "B. FeS", "C. Fe₂O₃", "D. FeSO₄"],
    "a": "B. FeS",
    "level": "thong_hieu"
  },
  {
    "q": "Trong các kim loại sau đây kim loại nào ở điều kiện thường ở trạng thái lỏng?",
    "options": ["A. Na", "B. Al", "C. Hg", "D. Cu"],
    "a": "C. Hg",
    "level": "nhan_biet"
  },
  {
    "q": "Trong phân tử Butane có bao nhiêu nguyên tử C?",
    "options": ["A. 1", "B. 2", "C. 3", "D. 4"],
    "a": "D. 4",
    "level": "nhan_biet"
  },
  {
    "q": "Công thức phân tử nào sau đây là công thức của một alkene?",
    "options": ["A. C₂H₂", "B. CH₄", "C. C₂H₆", "D. C₄H₁₀"],
    "a": "A. C₂H₂",
    "level": "thong_hieu"
  },
  {
    "q": "Đốt cháy hoàn toàn 6 lít khí ethylene CH₄ (đkc). Thể tích khí O₂ cần dùng (ở ĐKC) là",
    "options": ["A. 33,6 lit", "B. 11,99 lit", "C. 4,8 lit", "D. 24,79 lit"],
    "a": "B. 11,99 lit",
    "level": "van_dung"
  },
  {
    "q": "Trên nhãn chai cồn rửa tay có ghi 'Cồn 70°'. Điều này có nghĩa là gì?",
    "options": ["A. Trong 100 ml dung dịch có 70 g ethyl alcohol nguyên chất", "B. Trong 100 ml dung dịch có 70 ml ethyl alcohol nguyên chất", "C. Trong 100 ml dung dịch có 70% khối lượng là ethyl alcohol nguyên chất", "D. Trong 70 ml dung dịch có 100 ml ethyl alcohol nguyên chất"],
    "a": "B. Trong 100 ml dung dịch có 70 ml ethyl alcohol nguyên chất",
    "level": "nhan_biet"
  },
  {
    "q": "Dung dịch sodium hydroxide phản ứng được với tất cả các chất trong dãy nào sau đây?",
    "options": ["A. NH₄Cl, NaHCO₃, AlCl₃", "B. NaOH, Ag, CuO", "C. NaOH, Na, CaCO₃", "D. NaOH, Cu, NaCl"],
    "a": "A. NH₄Cl, NaHCO₃, AlCl₃",
    "level": "thong_hieu"
  },
  {
    "q": "Để sản xuất xà phòng người ta đun nóng chất béo với dung dịch NaOH, Tính Khối lượng glixerol thu được trong quá trình xà phòng hóa 4,45 kg tristearin (C₁₇H₃₅COO)₃C₃H₅ có chứa 20% tạp chất với dung dịch NaOH (coi như phản ứng này xảy ra hoàn toàn)?",
    "options": ["A. 1,78 kg", "B. 0,368kg", "C. 0,89 kg", "D. 1,84 kg"],
    "a": "B. 0,368kg",
    "level": "van_dung"
  },
  {
    "q": "Một loại Amino acid có chứa 11,97% nitrogen về khối lượng. Công thức phân tử của amino acid là.",
    "options": ["A. C₃H₇O₂N", "B. C₄H₉O₂N", "C. C₅H₁₁O₂N", "D. C₆H₁₃O₂N"],
    "a": "C. C₅H₁₁O₂N",
    "level": "van_dung"
  },
  {
    "q": "Số mắt xích có trong phân tử polietilen(PE) là 15000. Phân tử khối trung bình là bao nhiêu",
    "options": ["A. 14000", "B. 17000", "C. 16000", "D. 420.000"],
    "a": "D. 420.000",
    "level": "van_dung"
  },
  {
    "q": "Thành phần chính của Đá vôi là",
    "options": ["A. Al₂O₃", "B. CaCO₃", "C. CaO", "D. SiO₂"],
    "a": "B. CaCO₃",
    "level": "nhan_biet"
  },
  {
    "q": "Chất có ánh kim là",
    "options": ["A. thủy tinh", "B. bạc", "C. gỗ", "D. giấy"],
    "a": "B. bạc",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại nào sau đây có nhiệt độ nóng chảy thấp nhất?",
    "options": ["A. Li", "B. Cu", "C. Ag", "D. Hg"],
    "a": "D. Hg",
    "level": "nhan_biet"
  },
  {
    "q": "Ở điều kiện thường, kim loại nào sau đây tác dụng mạnh với H₂O?",
    "options": ["A. Fe", "B. Ba", "C. Cu", "D. Mg"],
    "a": "B. Ba",
    "level": "nhan_biet"
  },
  {
    "q": "Chỉ dùng dung dịch NaOH, có thể phân biệt được cặp kim loại",
    "options": ["A. Fe, Cu", "B. Mg, Fe", "C. Al, Fe", "D. Fe, Ag"],
    "a": "C. Al, Fe",
    "level": "thong_hieu"
  },
  {
    "q": "Cho dãy các kim loại: K, Mg, Cu, Al. Số kim loại trong dãy phản ứng được với dung dịch HCl là",
    "options": ["A. 4", "B. 1", "C. 2", "D. 3"],
    "a": "D. 3",
    "level": "thong_hieu"
  },
  {
    "q": "Công thức tổng quát của alkane là",
    "options": ["A. CₙHₙ₊₂", "B. CₙH₂ₙ₊₂", "C. CₙH₂ₙ", "D. CₙH₂ₙ₋₂"],
    "a": "B. CₙH₂ₙ₊₂",
    "level": "nhan_biet"
  },
  {
    "q": "Để phân biệt Methane và Ethylene ta dùng",
    "options": ["A. oxygen", "B. dung dịch Bromine", "C. nước vôi trong", "D. dung dịch NaOH"],
    "a": "B. dung dịch Bromine",
    "level": "thong_hieu"
  },
  {
    "q": "Lượng Ethylene cần dùng là bao nhiêu để phản ứng vừa đủ với 0,8 gam Bromine?",
    "options": ["A. 0,1 g", "B. 0,21 g", "C. 0,2 g", "D. 0,14 g"],
    "a": "D. 0,14 g",
    "level": "van_dung"
  },
  {
    "q": "Công thức cấu tạo của ethylic alcohol là",
    "options": ["A. CH₂-CH₃-OH", "B. CH₃-O-CH₃", "C. CH₂-CH₂-OH₂", "D. CH₃-CH₂-OH"],
    "a": "D. CH₃-CH₂-OH",
    "level": "nhan_biet"
  },
  {
    "q": "Khi bị ong đốt, để giảm đau, giảm sưng, kinh nghiệm dân gian thường dùng chất nào sau đây để bôi trực tiếp lên vết thương?",
    "options": ["A. nước vôi", "B. nước muối", "C. Cồn", "D. giấm"],
    "a": "A. nước vôi",
    "level": "thong_hieu"
  },
  {
    "q": "Thủy phân hoàn toàn 17,24 gam chất béo cần dùng vừa đủ 0,06 mol NaOH, cô cạn dung dịch sau phản ứng thu được khối lượng muối là",
    "options": ["A. 16,7 g", "B. 17,8 g", "C. 1,78 g", "D. 6,14 g"],
    "a": "B. 17,8 g",
    "level": "van_dung"
  },
  {
    "q": "Để tạo 4,05kg tinh bột cây xanh đã giải phóng bao nhiêu kg oxygen?",
    "options": ["A. 4,1kg", "B. 5,1kg", "C. 3,9kg", "D. 4,8kg"],
    "a": "D. 4,8kg",
    "level": "van_dung"
  },
  {
    "q": "Phân tử khối trung bình của poly(vinylchloride) (PVC) là 75000. Số mắt xích có trong phân tử là",
    "options": ["A. 2100", "B. 1500", "C. 1000", "D. 1200"],
    "a": "D. 1200",
    "level": "van_dung"
  },
  {
    "q": "Nguyên tố nào chiếm vị trí thứ hai về độ phổ biến trong vỏ Trái Đất, thường liên kết với oxygen tạo thành các khoáng chất như cát?",
    "options": ["A. Oxygen", "B. Silic", "C. Nhôm", "D. Sắt"],
    "a": "B. Silic",
    "level": "van_dung"
  },
  {
    "q": "Trong số các kim loại sau, kim loại dẻo nhất là:",
    "options": ["A. bạc", "B. vàng", "C. tungsten", "D. thủy ngân"],
    "a": "B. vàng",
    "level": "nhan_biet"
  },
  {
    "q": "Kim loại có nhiệt độ nóng chảy thấp nhất là",
    "options": ["A. bạc", "B. vàng", "C. tungsten", "D. thủy ngân"],
    "a": "D. thủy ngân",
    "level": "nhan_biet"
  },
  {
    "q": "Dãy phi kim nào sau đây tác dụng với oxygen tạo thành oxide acid?",
    "options": ["A. S, C, P", "B. S, P, Cl₂", "C. Si, P, Br₂", "D. C, Cl₂, Br₂"],
    "a": "A. S, C, P",
    "level": "thong_hieu"
  },
  {
    "q": "Cho dãy các kim loại K, Zn, Ag, Al, Fe. Số kim loại đẩy được Cu ra khỏi dung dịch muối CuSO₄ là:",
    "options": ["A. 1", "B. 2", "C. 3", "D. 4"],
    "a": "C. 3",
    "level": "thong_hieu"
  },
  {
    "q": "Kim loại đừng liền sau AL trong dãy hoạt động hóa học của kim loại là:",
    "options": ["A. Na", "B. K", "C. Mg", "D. Zn"],
    "a": "D. Zn",
    "level": "thong_hieu"
  },
  {
    "q": "Chất nào sau đây không phải hợp chất hữu cơ?",
    "options": ["A. CH₃COOH", "B. (NH₄)₂CO₃", "C. C₆H₁₂O₆", "D. CH₄CH₂OH"],
    "a": "B. (NH₄)₂CO₃",
    "level": "nhan_biet"
  },
  {
    "q": "Một bếp gas dùng khí hóa lỏng (chủ yếu là propan C₃H₈ và butan C₄H₁₀). Khi cháy hoàn toàn 1 mol propan sẽ tạo ra:",
    "options": ["A. 2 mol CO₂ và 4 mol H₂O", "B. 3 mol CO₂ và 4 mol H₂O", "C. 3 mol CO₂ và 8 mol H₂O", "D. 4 mol CO₂ và 10 mol H₂O"],
    "a": "B. 3 mol CO₂ và 4 mol H₂O",
    "level": "thong_hieu"
  },
  {
    "q": "Hydrocarbon là hợp chất trong phân tử có",
    "options": ["A. nguyên tố carbon và hydrogen", "B. hai nguyên tố carbon và hydrogen", "C. nguyên tố carbon, hydrogen và oxygen", "D. nguyên tố carbon, hydrogen và có thể có thêm một nguyên tố khác"],
    "a": "B. hai nguyên tố carbon và hydrogen",
    "level": "nhan_biet"
  },
  {
    "q": "Axit axetic (CH₃COOH) là thành phần chính tạo vị chua cho:",
    "options": ["A. Giấm ăn", "B. Rượu vang", "C. Nước khoáng", "D. Dầu ăn"],
    "a": "A. Giấm ăn",
    "level": "nhan_biet"
  },
  {
    "q": "Etylic ancol cháy trong không khí tạo ra sản phẩm nào sau đây?",
    "options": ["A. CO₂ và H₂O", "B. CH₄ và H₂O", "C. CO và H₂", "D. CH₃COOH"],
    "a": "A. CO₂ và H₂O",
    "level": "thong_hieu"
  },
  {
    "q": "Để nhận biết dầu ăn và mỡ động vật, một học sinh nhỏ vài giọt dung dịch brom vào hai mẫu. Kết quả nào sau đây đúng?",
    "options": ["A. Cả dầu ăn và mỡ đều làm mất màu dung dịch brom", "B. Dầu ăn làm mất màu dung dịch brom, mỡ không làm mất màu", "C. Mỡ làm mất màu dung dịch brom, dầu ăn không làm mất màu", "D. Cả dầu ăn và mỡ đều không làm mất màu dung dịch brom"],
    "a": "D. Cả dầu ăn và mỡ đều không làm mất màu dung dịch brom",
    "level": "van_dung"
  },
  {
    "q": "Khi đun nóng mỡ lợn với dung dịch NaOH có xúc tác, thu được sản phẩm chính là:",
    "options": ["A. Glycerol và muối natri của axit béo", "B. Glycerol và axit béo tự do", "C. Ancol etylic và muối natri của axit béo", "D. Glycerol và este của axit béo"],
    "a": "A. Glycerol và muối natri của axit béo",
    "level": "van_dung"
  },
  {
    "q": "Một loại dầu ăn chứa chủ yếu các axit béo không no. Để bảo quản dầu ăn tốt hơn, người ta thường:",
    "options": ["A. Đun nóng lâu ngoài không khí", "B. Đậy kín và để nơi khô ráo, tránh ánh sáng", "C. Pha thêm axit mạnh để hạn chế phản ứng", "D. Ngâm trong nước để dầu không bị ôi thiu"],
    "a": "B. Đậy kín và để nơi khô ráo, tránh ánh sáng",
    "level": "van_dung"
  },
  {
    "q": "Tài nguyên khoáng sản được khai thác từ vỏ Trái Đất chủ yếu dùng để:",
    "options": ["A. Làm nguyên liệu cho sản xuất công nghiệp và đời sống", "B. Trang trí cảnh quan thiên nhiên", "C. Tạo màu cho nước biển", "D. Làm cho đất đai màu mỡ hơn"],
    "a": "A. Làm nguyên liệu cho sản xuất công nghiệp và đời sống",
    "level": "nhan_biet"
  }
];

    const sinh = [
  {
    "q": "Một gene có chiều dài 4080Å, số lượng nucleotide của gene đó là",
    "options": ["A. 2400", "B. 4800", "C. 1200", "D. 4080"],
    "a": "A. 2400",
    "level": "nhan_biet"
  },
  {
    "q": "Một gene có 480 adenine và 3120 liên kết hydrogen. Gene đó có số lượng nucleotide là",
    "options": ["A. 1200", "B. 2400", "C. 3600", "D. 3120"],
    "a": "B. 2400",
    "level": "thong_hieu"
  },
  {
    "q": "Một đoạn phân tử DNA ở sinh vật nhân thực có trình tự nucleotide trên mạch gốc là 3'...AAACAATGGGGA...5'. Trình tự nucleotide trên mạch mới được tổng hợp của đoạn DNA này là",
    "options": ["A. 5'...AAAGTTACCGGT...3'", "B. 5'...GGCCAATGGGGA...3'", "C. 5'...GTTGAAACCCCT...3'", "D. 5'...TTTGTTACCCCT...3'"],
    "a": "D. 5'...TTTGTTACCCCT...3'",
    "level": "van_dung"
  },
  {
    "q": "Phân tử nào sau đây được dùng làm khuôn cho quá trình dịch mã?",
    "options": ["A. rRNA", "B. mRNA", "C. tRNA", "D. Gene"],
    "a": "B. mRNA",
    "level": "nhan_biet"
  },
  {
    "q": "Trong quá trình phân bào, NST được quan sát rõ nhất dưới kính hiển vi ở kì nào, vì sao?",
    "options": ["A. Kì giữa, vì lúc này NST đóng xoắn tối đa", "B. Kì sau, vì lúc này NST phân ly nên quan sát được rõ hơn các kì sau", "C. Kì trung gian, vì lúc này ADN đã tự nhân đôi xong", "D. Kì trước vì lúc này NST đóng xoắn tối đa"],
    "a": "A. Kì giữa, vì lúc này NST đóng xoắn tối đa",
    "level": "nhan_biet"
  },
  {
    "q": "Kết thúc giảm phân, một tế bào sinh trứng sẽ tạo ra",
    "options": ["A. 4 tế bào trứng", "B. 2 tế bào trứng và 2 thể cực", "C. 1 tế bào trứng và 3 thể cực", "D. 3 tế bào trứng và 1 thể cực"],
    "a": "C. 1 tế bào trứng và 3 thể cực",
    "level": "thong_hieu"
  },
  {
    "q": "Ở cà chua 2n=24. Số NST có trong một tế bào của thể một khi đang ở kì sau của nguyên phân là",
    "options": ["A. 12", "B. 48", "C. 46", "D. 45"],
    "a": "C. 46",
    "level": "van_dung"
  },
  {
    "q": "Quan sát hình ảnh và cho biết tế bào đang ở giai đoạn nào của quá trình phân bào. Cho biết bộ NST lưỡng bội của loài bằng bao nhiêu? (Biết rằng quá trình phân bào bình thường)",
    "options": ["A. Kì giữa giảm phân 2, 2n = 10", "B. Kì giữa nguyên phân, 2n = 10", "C. Kì đầu nguyên phân, 2n = 10", "D. Kì giữa giảm phân 1,2n = 10"],
    "a": "A. Kì giữa giảm phân 2, 2n = 10",
    "level": "thong_hieu"
  },
  {
    "q": "Trong trường hợp trội lặn hoàn toàn thì phép lai nào sau đây cho F1 có 4 kiểu hình phân li 1:1:1:1?",
    "options": ["A. AaBb x AaBb", "B. AaBB x AABb", "C. AaBB x AaBb", "D. Aabb x aaBb"],
    "a": "D. Aabb x aaBb",
    "level": "van_dung"
  },
  {
    "q": "Ở đậu Hà Lan, gen A quy định thân cao, a quy định thân thấp, B quy định hạt màu vàng, b quy định hạt màu xanh. Phép lai cho đồng loạt thân cao, hạt màu vàng là",
    "options": ["A. AaBB x aabb", "B. AABb x aabb", "C. AAbb x aaBB", "D. AABb x Aabb"],
    "a": "C. AAbb x aaBB",
    "level": "thong_hieu"
  },
  {
    "q": "Trong trường hợp genne trội hoàn toàn, khi lai giữa hai bố mẹ thuần chủng, khác nhau 2 cặp tính trạng tương phản, sau đó F1 tự thụ phấn, tỉ lệ kiểu hình của F2 là",
    "options": ["A. 9:3:3:1", "B. 1:1:1:1", "C. 9:6:1", "D. 3:1"],
    "a": "A. 9:3:3:1",
    "level": "nhan_biet"
  },
  {
    "q": "Ở ruồi giấm, thân xám trội so với thân đen, cánh dài trội so với cánh cụt. Khi lai ruồi thân xám, cánh dài thuần chủng với ruồi thân đen, cánh cụt F1 toàn thân xám cánh dài. Cho con đực F1 lai với con cái thân đen, cánh cụt thu được tỉ lệ?",
    "options": ["A. 4 xám, dài : 1 đen, cụt", "B. 3 xám, dài : 1 đen, cụt", "C. 2 xám, dài : 1 đen, cụt", "D. 1 xám, dài : 1 đen, cụt"],
    "a": "D. 1 xám, dài : 1 đen, cụt",
    "level": "van_dung"
  },
  {
    "q": "Tính đa dạng và đặc thù của mỗi loại DNA do yếu tố nào sau đây qui định:",
    "options": ["A. Hàm lượng DNA trong nhân tế bào", "B. Số lượng các nucleotide", "C. Số lượng, thành phần, trật tự sắp xếp của các nucleotid trong phân tử DNA", "D. Tỉ lệ (A+T)/(G+C) trong phân tử DNA"],
    "a": "C. Số lượng, thành phần, trật tự sắp xếp của các nucleotid trong phân tử DNA",
    "level": "nhan_biet"
  },
  {
    "q": "Đột biến thay một cặp nuclêôtit giữa gen cấu trúc có thể làm cho mRNA tương ứng",
    "options": ["A. không thay đổi chiều dài so với mRNA bình thường", "B. ngắn hơn so với mRNA bình thường", "C. dài hơn so với mRNA bình thường", "D. có chiều dài không đổi hoặc ngắn hơn mARN bình thường"],
    "a": "A. không thay đổi chiều dài so với mRNA bình thường",
    "level": "thong_hieu"
  },
  {
    "q": "Nguyên tắc bán bảo toàn trong cơ chế nhân đôi của DNA là:",
    "options": ["A. Hai DNA mới được hình thành sau khi nhân đôi, hoàn toàn giống nhau và giống với DNA mẹ ban đầu", "B. Hai DNA mới được hình thành sau khi nhân đôi, có một DNA giống với DNA mẹ còn DNA kia có cấu trúc đã thay đổi", "C. Trong 2 DNA mới, mỗi DNA gồm có một mạch cũ và một mạch mới tổng hợp", "D. Sự nhân đôi xảy ra trên 2 mạch của DNA trên hai hướng ngược chiều nhau"],
    "a": "C. Trong 2 DNA mới, mỗi DNA gồm có một mạch cũ và một mạch mới tổng hợp",
    "level": "nhan_biet"
  },
  {
    "q": "Một phân tử DNA có 200 nuclêôtit loại Adenin, 800 nucleotit loại Guanin. Số vòng xoắn trong phân tử DNA là:",
    "options": ["A. 100 vòng", "B. 25 vòng", "C. 50 vòng", "D. 5 vòng"],
    "a": "A. 100 vòng",
    "level": "van_dung"
  },
  {
    "q": "Ở kì giữa của quá trình nguyên phân, các NST kép xếp thành mấy hàng trên mặt phẳng xích đạo?",
    "options": ["A. 1 hàng", "B. 2 hàng", "C. 3 hàng", "D. 4 hàng"],
    "a": "A. 1 hàng",
    "level": "nhan_biet"
  },
  {
    "q": "Vì sao nói cặp XY là cặp tương đồng không hoàn toàn?",
    "options": ["A. Vì NST X mang nhiều gen hơn NST Y", "B. Vì NST X có đoạn mang gen còn NST Y thì không có gen tương ứng", "C. Vì NST X và Y đều có đoạn mang cặp gen tương ứng", "D. Vì NST X dài hơn NST Y"],
    "a": "B. Vì NST X có đoạn mang gen còn NST Y thì không có gen tương ứng",
    "level": "thong_hieu"
  },
  {
    "q": "Ở đậu Hà Lan, gen A quy định hoa đỏ trội hoàn toàn so với gen a quy định hoa trắng. Cho cây hoa đỏ dị hợp tử tự thụ phấn. Hãy xác định tỉ lệ kiểu gen thu được ở F2 theo Quy luật Phân li của Mendel.",
    "options": ["A. 3 đỏ : 1 trắng", "B. 1 đỏ : 2 hồng : 1 trắng", "C. 1AA:1Aa:1aa", "D. 1AA:2Aa:1aa"],
    "a": "D. 1AA:2Aa:1aa",
    "level": "nhan_biet"
  },
  {
    "q": "Cơ sở tế bào học chủ yếu dẫn đến sự phân li của cặp alen (A,a) trong Quy luật Phân li của Mendel là do sự kiện nào dưới đây?",
    "options": ["A. Sự tiếp hợp và trao đổi chéo giữa các nhiễm sắc thể tương đồng ở kì đầu giảm phân I", "B. Sự phân li của các nhiễm sắc thể kép về hai cực tế bào ở kì sau giảm phân I", "C. Sự phân li của các cromatit trong nhiễm sắc thể kép về hai cực tế bào ở kì sau giảm phân II", "D. Sự xếp hàng của các nhiễm sắc thể trên mặt phẳng xích đạo ở kì giữa giảm phân I"],
    "a": "B. Sự phân li của các nhiễm sắc thể kép về hai cực tế bào ở kì sau giảm phân I",
    "level": "thong_hieu"
  },
  {
    "q": "Ở một loài thực vật, gen A quy định thân cao trội hoàn toàn so với a (thân thấp), gen B quy định hoa đỏ trội hoàn toàn so với b (hoa trắng). Giả sử hai cặp gen này nằm trên hai cặp nhiễm sắc thể tương đồng khác nhau và phân li độc lập. Khi cho cây F1 dị hợp tử về hai cặp gen (AaBb) tự thụ phấn, tỉ lệ kiểu hình thân cao, hoa trắng (A_bb) thu được ở đời con F2 là bao nhiêu?",
    "options": ["A. 1/4", "B. 1/16", "C. 3/16", "D. 9/16"],
    "a": "C. 3/16",
    "level": "thong_hieu"
  },
  {
    "q": "Lai phân tích là phép lai",
    "options": ["A. giữa hai cơ thể bố mẹ cùng loài có tính trạng tương phản với nhau", "B. giữa hai cơ thể thuần chủng khác nhau về một cặp tính trạng tương phản", "C. giữa cơ thể mang tính trạng trội với cơ thể mang tính trạng lặn để kiểm tra kiểu gen", "D. giữa cơ thể mang tính trạng trội với cơ thể mang tính trạng lặn tương phản để kiểm tra kiểu gen"],
    "a": "D. giữa cơ thể mang tính trạng trội với cơ thể mang tính trạng lặn tương phản để kiểm tra kiểu gen",
    "level": "nhan_biet"
  },
  {
    "q": "Cho phép lai P: bố AABbDdee x mẹ aaBbDdEe, biết mỗi gen quy định 1 tính trạng trội hoàn toàn. Số phát biểu đúng là: I. Bố có kiểu hình mang 3 tính trạng trội, 1 tính trạng lặn. II. Mẹ có kiểu hình mang 3 tính trạng trội, 2 tính trạng lặn. III. Mẹ cho 4 loại giao tử, bố cho 4 loại giao tử. IV. Phép lai đang xét đến 4 cặp gen quy định 4 cặp tính trạng. V. Phép lai cho F1 có 32 kiểu tổ hợp giao tử.",
    "options": ["A. 2", "B. 3", "C. 4", "D. 1"],
    "a": "A. 2",
    "level": "van_dung"
  },
  {
    "q": "Cho alen A quy định thân cao trội hoàn toàn so với alen a quy định thân thấp. Có bao nhiêu kiểu gen quy định kiểu hình thân cao?",
    "options": ["A. 1 kiểu gen", "B. 2 kiểu gen", "C. 3 kiểu gen", "D. 4 kiểu gen"],
    "a": "B. 2 kiểu gen",
    "level": "nhan_biet"
  },
  {
    "q": "Ở người, mắt nâu (N) là trội đối với mắt xanh (n). Khi một người đàn ông mắt nâu kết hôn với một người phụ nữ mắt xanh và họ có con trai mắt nâu, con gái mắt xanh. Có thể kết luận chắc chắn rằng",
    "options": ["A. người đàn ông có kiểu gen đồng hợp", "B. người đàn ông có kiểu gen dị hợp", "C. gen quy định màu mắt liên kết với NST X", "D. cả 2 bố mẹ đều có kiểu gen đồng hợp"],
    "a": "B. người đàn ông có kiểu gen dị hợp",
    "level": "thong_hieu"
  },
  {
    "q": "Trong nguyên phân NST kép được hình thành ở giai đoạn",
    "options": ["A. kì trung gian", "B. đầu kì đầu", "C. giữa kì đầu", "D. đầu kì giữa"],
    "a": "A. kì trung gian",
    "level": "nhan_biet"
  },
  {
    "q": "Một tế bào của lúa nước có 2n = 24 trải qua quá trình giảm phân hình thành giao tử. Số NST và số tâm động trong mỗi tế bào ở kì sau II lần lượt là",
    "options": ["A. 24 và 24", "B. 24 và 12", "C. 12 và 24", "D. 12 và 12"],
    "a": "A. 24 và 24",
    "level": "thong_hieu"
  },
  {
    "q": "Trong giảm phân, NST xếp thành 2 hàng trên mặt phẳng xích đạo vào kì nào?",
    "options": ["A. Kì đầu I", "B. Kì giữa I", "C. Kì giữa II", "D. Kì sau I"],
    "a": "B. Kì giữa I",
    "level": "nhan_biet"
  },
  {
    "q": "10 tế bào sinh trứng của Thỏ cái giảm phân bình thường tạo được bao nhiêu tế bào trứng?",
    "options": ["A. 5 trứng", "B. 10 trứng", "C. 40 trứng", "D. 1 trứng"],
    "a": "B. 10 trứng",
    "level": "thong_hieu"
  },
  {
    "q": "Đặc điểm nào sau đây không đúng khi nói về cấu trúc của phân tử DNA mạch kép?",
    "options": ["A. Cấu tạo theo nguyên tắc đa phân", "B. Cấu tạo theo nguyên tắc bổ sung", "C. Đơn phân gồm 4 loại nucleotit là A, U, G, C", "D. Được cấu tạo nên bới các nguyên tố C, H, O, N, P"],
    "a": "C. Đơn phân gồm 4 loại nucleotit là A, U, G, C",
    "level": "nhan_biet"
  },
  {
    "q": "RNA được tổng hợp dựa trên khuân mẫu là mạch nào của gen?",
    "options": ["A. Khi thì từ 1 mạch, khi thì từ 2 mạch", "B. Từ cả 2 mạch", "C. Từ mạch mang mã gốc", "D. Từ mạch bổ sung"],
    "a": "C. Từ mạch mang mã gốc",
    "level": "thong_hieu"
  },
  {
    "q": "Thành phần nào sau đây không tham gia trực tiếp vào quá trình hình thành chuỗi axit amin?",
    "options": ["A. mRNA", "B. DNA", "C. tRNA", "D. Riboxom"],
    "a": "B. DNA",
    "level": "nhan_biet"
  },
  {
    "q": "Một phân tử DNA mạch kép có A = 20%, tỉ lệ nucleotit loại G của DNA này là",
    "options": ["A. 30%", "B. 40%", "C. 50%", "D. 20%"],
    "a": "A. 30%",
    "level": "van_dung"
  },
  {
    "q": "NTBS được thể hiện trong cơ chế tự nhân đôi là",
    "options": ["A. A liên kết với T và ngược lại, G liên kết với C và ngược lại", "B. A liên kết với U, T liên kết với A; G liên kết với C; C liên kết với G", "C. A liên kết với G và ngược lại, T liên kết với C và ngược lại", "D. A liên kết với C và ngược lại, T liên kết với G và ngược lại"],
    "a": "A. A liên kết với T và ngược lại, G liên kết với C và ngược lại",
    "level": "nhan_biet"
  },
  {
    "q": "Người ta chia ARN thành các loại khác nhau là dựa vào",
    "options": ["A. Thành phần nuclêotít của ARN", "B. Chức năng của ARN", "C. Thành phần hoá học của ARN", "D. Cấu trúc không gian của ARN"],
    "a": "B. Chức năng của ARN",
    "level": "thong_hieu"
  },
  {
    "q": "Một gen có chiều dài 5100 A°. Gen đó có tổng số nucleotit là:",
    "options": ["A. 1500", "B. 2000", "C. 2500", "D. 3000"],
    "a": "D. 3000",
    "level": "van_dung"
  },
  {
    "q": "Phân tử ARN được tổng hợp có trình tự các Nucleotit:",
    "options": ["A. Bổ sung với mạch mã gốc", "B. Bổ sung với mạch mã sao", "C. Bổ sung với mạch mã gốc, trong đó T được thay bằng U", "D. Bổ sung với mạch mã sao, trong đó A được thay bằng U"],
    "a": "C. Bổ sung với mạch mã gốc, trong đó T được thay bằng U",
    "level": "thong_hieu"
  },
  {
    "q": "Sự tự nhân đôi của NST xẩy ra ở:",
    "options": ["A. Kì trung gian", "B. Kì đầu", "C. Kì giữa", "D. Kì sau và kì cuối"],
    "a": "A. Kì trung gian",
    "level": "nhan_biet"
  },
  {
    "q": "Ý nghĩa cơ bản của nguyên phân là:",
    "options": ["A. Sự phân chia đồøng đều chất nhân của tế bào mẹ cho hai tế bào con", "B. Sự sao chép nguyên ven bộ NST của tế bào mẹ cho hai tế bào con", "C. Sự phân li đồøng đều của các crômatit về hai tế bào con", "D. Sự phân chia đồøng đều chất tế bào của tế bào mẹ cho hai tế bào con"],
    "a": "B. Sự sao chép nguyên ven bộ NST của tế bào mẹ cho hai tế bào con",
    "level": "thong_hieu"
  },
  {
    "q": "Có 8 tinh bào bậc 1 ở chuột, qua giảm phân bình thường số tinh trùng được tạo ra là",
    "options": ["A. 32", "B. 24", "C. 8", "D. 16"],
    "a": "A. 32",
    "level": "van_dung"
  },
  {
    "q": "Giao tử được hình thành qua quá trình giảm phân có:",
    "options": ["A. Bộ NST lưỡng bội, mỗi NST ở trạng thái kép", "B. Bộ NST lưỡng bội, mỗi NST ở trạng thái đơn", "C. Bộ NST đơn bội, mỗi NST ở trạng thái kép", "D. Bộ NST đơn bội, mỗi NST ở trạng thái đơn"],
    "a": "D. Bộ NST đơn bội, mỗi NST ở trạng thái đơn",
    "level": "nhan_biet"
  },
  {
    "q": "Hiện tượng đồng tính là:",
    "options": ["A. Các cơ thể lai đều mang tính trạng giống nhau", "B. Các cơ thể lai chỉ mang tính trạng của một bên bố hoặc mẹ", "C. Các cơ thể lai mang tính trạng trung gian giữa bố và mẹ", "D. Các cơ thể lai đều mang tính trạng của cả bố và mẹ"],
    "a": "A. Các cơ thể lai đều mang tính trạng giống nhau",
    "level": "nhan_biet"
  },
  {
    "q": "Kiểu hình là:",
    "options": ["A. Tổ hợp toàn bộ các tính trạng của cơ thể", "B. Tính trạng của bố mẹ đem lai", "C. Tính trạng của các thế hệ lai", "D. Tính trạng của bố mẹ và các thế hệ lai"],
    "a": "A. Tổ hợp toàn bộ các tính trạng của cơ thể",
    "level": "nhan_biet"
  },
  {
    "q": "Cho tỉ lệ kiểu hình 1:1 là kết quả của phép lai",
    "options": ["A. P: AA x Aa", "B. P: AA x aa", "C. P: Aa x Aa", "D. P: Aa x aa"],
    "a": "D. P: Aa x aa",
    "level": "thong_hieu"
  },
  {
    "q": "Ơû đậu Hà Lan. Gen A: hạt vàng, a: hạt xanh, B: hạt trơn, b: hạt nhăn. A và B trội hoàn toàn so với a và b. Các gen phân li độc lập nhau. Bố, Mẹ có kiểu gen AaBb và aabb, thì tỉ lệ phân tính ở đời con là:",
    "options": ["A. Tỉ lệ phân li 1:1", "B. Tỉ lệ phân li 1:2:1", "C. Tỉ lệ phân li 3:1", "D. Tỉ lệ phân li 1:1:1:1"],
    "a": "D. Tỉ lệ phân li 1:1:1:1",
    "level": "van_dung"
  },
  {
    "q": "Nguyên tắc bổ sung trong cấu trúc của DNA dẫn đến hệ quả",
    "options": ["A. A = C, G = T", "B. A + T = G + C", "C. A + G = T + C", "D. A + C + T = C + T + G"],
    "a": "C. A + G = T + C",
    "level": "nhan_biet"
  },
  {
    "q": "Nhận xét nào sau đây đúng khi nói về đặc điểm cấu tạo của phân tử RNA?",
    "options": ["A. Cấu tạo 2 mạch xoắn song song", "B. Cấu tạo bằng 2 mạch thẳng", "C. Kích thước và khối lượng nhỏ hơn so với phân tử DNA", "D. Gồm có 4 loại đơn phân là A, T, G, C"],
    "a": "C. Kích thước và khối lượng nhỏ hơn so với phân tử DNA",
    "level": "thong_hieu"
  },
  {
    "q": "Quá trình truyền đạt thông tin di truyền từ DNA sang mRNA được gọi là quá trình",
    "options": ["A. tái bản DNA", "B. đột biến DNA", "C. dịch mã", "D. phiên mã"],
    "a": "D. phiên mã",
    "level": "nhan_biet"
  },
  {
    "q": "Một gen có chiều dài 5100Å, chu kỳ xoắn của gen là:",
    "options": ["A. 100 vòng", "B. 250 vòng", "C. 200 vòng", "D. 150 vòng"],
    "a": "D. 150 vòng",
    "level": "van_dung"
  },
  {
    "q": "Mỗi loài sinh vật có bộ nhiễm sắc thể đặc trưng bởi",
    "options": ["A. số lượng, hình dạng, cấu trúc NST", "B. số lượng, hình thái NST", "C. số lượng, cấu trúc NST", "D. số lượng không đổi"],
    "a": "A. số lượng, hình dạng, cấu trúc NST",
    "level": "nhan_biet"
  },
  {
    "q": "Bộ nhiễm sắc thể của loài sinh sản hữu tính được duy trì ổn định qua các thế hệ là nhờ",
    "options": ["A. sự phối hợp của quá trình nguyên phân và giảm phân", "B. sự phối hợp của quá trình nguyên phân và thụ tinh", "C. sự phối hợp của quá trình giảm phân và thụ tinh", "D. sự phối hợp của quá trình nguyên phân, giảm phân và thụ tinh"],
    "a": "D. sự phối hợp của quá trình nguyên phân, giảm phân và thụ tinh",
    "level": "thong_hieu"
  },
  {
    "q": "Trong trường hợp gene trội hoàn toàn, tỉ lệ phân li kiểu hình 1:1 ở F1 sẽ xuất hiện trong kết quả của phép lai nào dưới đây?",
    "options": ["A. Aa x aa", "B. aa x aa", "C. AA x Aa", "D. AA x AA"],
    "a": "A. Aa x aa",
    "level": "thong_hieu"
  },
  {
    "q": "Để các allele của một gen phân li đồng đều về các giao tử thì cần có điều kiện gì?",
    "options": ["A. Bố và mẹ phải thuần chủng", "B. Số lượng cá thế lai phải lớn", "C. Alen trội phải trội hoàn toàn so với allele lặn", "D. Quá trình giảm phân phải xảy ra bình thường"],
    "a": "D. Quá trình giảm phân phải xảy ra bình thường",
    "level": "thong_hieu"
  },
  {
    "q": "Trong thí nghiệm lai một cặp tính trạng, Menden đã đề ra giả thuyết về sự phân ly của các cặp:",
    "options": ["A. gene", "B. allele", "C. Tính trạng", "D. Nhân tố di truyền"],
    "a": "D. Nhân tố di truyền",
    "level": "nhan_biet"
  },
  {
    "q": "Kết quả cuối cùng của quá trình sao chép DNA là gì?",
    "options": ["A. Hai phân tử DNA giống nhau", "B. Một phân tử DNA duy nhất", "C. Hai phân tử RNA giống nhau", "D. Một phân tử RNA và một phân tử DNA"],
    "a": "A. Hai phân tử DNA giống nhau",
    "level": "nhan_biet"
  },
  {
    "q": "Nguyên tắc bổ sung được thể hiện trong cơ chế phiên mã là",
    "options": ["A. A liên kết với T, G liên kết với C", "B. A liên kết với U, G liên kết với C", "C. A liên kết với G, T liên kết với C", "D. A liên kết với C, G liên kết với T"],
    "a": "B. A liên kết với U, G liên kết với C",
    "level": "thong_hieu"
  },
  {
    "q": "Phát biểu nào sau đây đúng về quá trình tái bản DNA?",
    "options": ["A. Quá trình tái bản DNA là sự sao chép các phân tử DNA sau mỗi lần phân bào", "B. Enzyme DNA polymerase phá vỡ cấu trúc xoắn kép, tách mạch DNA thành hai mạch đơn", "C. Mạch mới được tổng hợp theo nguyên tắc bổ sung với mạch làm khuôn (A liên kết với T; G liên kết với C)", "D. Từ một phân tử DNA đã tạo ra hai phân tử DNA con có hai mạch mới hoàn toàn và có cấu trúc giống DNA mẹ ban đầu"],
    "a": "C. Mạch mới được tổng hợp theo nguyên tắc bổ sung với mạch làm khuôn (A liên kết với T; G liên kết với C)",
    "level": "thong_hieu"
  },
  {
    "q": "Một phân tử DNA tái bản liên tiếp 5 lần sẽ tạo ra bao nhiêu phân tử DNA?",
    "options": ["A. 6", "B. 32", "C. 25", "D. 64"],
    "a": "B. 32",
    "level": "van_dung"
  },
  {
    "q": "Cấu trúc của nhiễm sắc thể bao gồm những thành phần nào?",
    "options": ["A. DNA và protein", "B. DNA và lipit", "C. Protein và cacbohidrat", "D. DNA và cacbohidrat"],
    "a": "A. DNA và protein",
    "level": "nhan_biet"
  },
  {
    "q": "Ở người, số lượng nhiễm sắc thể trong một tế bào lưỡng bội bình thường là bao nhiêu?",
    "options": ["A. 46 nhiễm sắc thể", "B. 23 nhiễm sắc thể", "C. 48 nhiễm sắc thể", "D. 24 nhiễm sắc thể"],
    "a": "A. 46 nhiễm sắc thể",
    "level": "nhan_biet"
  },
  {
    "q": "Điểm khác nhau cơ bản nhất giữa nguyên phân và giảm phân là gì?",
    "options": ["A. Cả hai đều là quá trình phân bào tạo ra tế bào mới", "B. Nguyên phân tạo ra 2 tế bào con có bộ NST giống hệt tế bào mẹ, còn giảm phân tạo ra 4 tế bào con có bộ NST giảm đi một nửa", "C. Giảm phân xảy ra ở tế bào sinh dục, nguyên phân xảy ra ở tế bào sinh trưởng", "D. Cả hai đều tạo ra biến dị tổ hợp"],
    "a": "B. Nguyên phân tạo ra 2 tế bào con có bộ NST giống hệt tế bào mẹ, còn giảm phân tạo ra 4 tế bào con có bộ NST giảm đi một nửa",
    "level": "thong_hieu"
  },
  {
    "q": "Trong trường hợp gene trội hoàn toàn, khi lai giữa hai bố mẹ thuần chủng, khác nhau 1 cặp tính trạng tương phản, sau đó F1 tự thụ phấn, tỉ lệ kiểu hình của F2 là",
    "options": ["A. 9:3:3:1", "B. 1:1:1:1", "C. 9:6:1", "D. 3:1"],
    "a": "D. 3:1",
    "level": "nhan_biet"
  },
  {
    "q": "Điều kiện nghiệm đúng của quy luật phân li độc lập là",
    "options": ["A. các giao tử và các hợp tử có sức sống như nhau", "B. số lượng cá thể ở các thế hệ lai phải đủ lớn để số liệu thống kê được chính xác", "C. sự phân li NST như nhau khi tạo ra giao tử và sự kết hợp ngẫu nhiên của các kiểu giao tử khi thụ tinh", "D. mỗi gene nằm trên một cặp NST tương đồng"],
    "a": "D. mỗi gene nằm trên một cặp NST tương đồng",
    "level": "thong_hieu"
  },
  {
    "q": "Ở một loài thực vật, các gene quy định các tính trạng phân li độc lập và tổ hợp tự do. Cho cơ thể có kiểu gene AaBb tự thụ phấn thì tỷ lệ kiểu gene aabb ở đời con là",
    "options": ["A. 2/16", "B. 1/16", "C. 9/16", "D. 3/16"],
    "a": "B. 1/16",
    "level": "van_dung"
  },
  {
    "q": "Trong các phép lai sau, có bao nhiêu phép lai cho F1 có 3 kiểu gen tỉ lệ 1:2:1? I. AA x aa. II. AA x AA. III. AA x Aa. IV. Aa x Aa. V. aa x aa. VI. Aa x aa",
    "options": ["A. 1", "B. 2", "C. 3", "D. 4"],
    "a": "A. 1",
    "level": "van_dung"
  },
  {
    "q": "Đâu không phải là đơn phân cấu tạo nên phân tử DNA?",
    "options": ["A. Ađênin (A)", "B. Timin (T)", "C. Uraxin (U)", "D. Guanin (G)"],
    "a": "C. Uraxin (U)",
    "level": "nhan_biet"
  },
  {
    "q": "Quá trình tổng hợp RNA thông tin (mARN) từ một mạch khuôn của gen trong nhân tế bào được gọi là gì?",
    "options": ["A. Tái bản ADN", "B. Dịch mã", "C. Phiên mã", "D. Biến đổi hậu phiên"],
    "a": "C. Phiên mã",
    "level": "nhan_biet"
  },
  {
    "q": "Gene là gì?",
    "options": ["A. Một đoạn của DNA mã hóa cho một chuỗi polypeptide", "B. Toàn bộ bộ gen của một sinh vật", "C. Một phân tử RNA", "D. Một protein cấu tạo nên nhiễm sắc thể"],
    "a": "A. Một đoạn của DNA mã hóa cho một chuỗi polypeptide",
    "level": "nhan_biet"
  },
  {
    "q": "Cho các đặc điểm RNA: 1. Được cấu tạo bởi một mạch poliribônuclêôtit. 2. Đơn phân là adenine, timin, guanin, xitorin. 3. Cấu tạo theo nguyên tắc đa phân. 4. Trong cấu tạo có uraxin mà không có timin. Số đặc điểm chung có cả ở 3 loại ARN là",
    "options": ["A. 2,1,4", "B. 2,1,4", "C. 1,2,4", "D. 3,4"],
    "a": "D. 3,4",
    "level": "thong_hieu"
  },
  {
    "q": "Tính trạng là",
    "options": ["A. những biểu hiện của kiểu gene thành kiểu hình", "B. kiểu hình bên ngoài cơ thể sinh vật", "C. các đặc điểm bên trong cơ thể sinh vật", "D. những đặc điểm về hình thái, cấu tạo, sinh lý của một cơ thể"],
    "a": "D. những đặc điểm về hình thái, cấu tạo, sinh lý của một cơ thể",
    "level": "nhan_biet"
  },
  {
    "q": "Phương pháp cơ bản trong nghiên cứu Di truyền học của Mendel là gì?",
    "options": ["A. Phương pháp phân tích các thế hệ lai", "B. Thí nghiệm trên cây đậu Hà Lan có hoa lưỡng tính", "C. Dùng toán thống kê để tính toán kết quả thu được", "D. Theo dõi sự di truyền của các cặp tính trạng"],
    "a": "A. Phương pháp phân tích các thế hệ lai",
    "level": "nhan_biet"
  },
  {
    "q": "Ở người, gene A quy định mắt đen trội hoàn toàn so với gen a quy định mắt xanh. Mẹ và bố phải có kiểu gene và kiểu hình như thế nào để sinh con ra có người mắt đen, có người mắt xanh?",
    "options": ["A. Mẹ mắt đen (AA) × bố mắt xanh (aa)", "B. Mẹ mắt xanh (aa) × bố mắt đen (AA)", "C. Mẹ mắt đen (AA) × bố mắt đen (AA)", "D. Mẹ mắt đen (Aa) × bố mắt đen (Aa)"],
    "a": "D. Mẹ mắt đen (Aa) × bố mắt đen (Aa)",
    "level": "thong_hieu"
  },
  {
    "q": "Phép lai P: AaBb × aabb cho F1 có tỉ lệ kiểu gene",
    "options": ["A. 9:3:3:1", "B. 1:1:1:1", "C. 1:2:1:2:1", "D. 3:3:1:1"],
    "a": "B. 1:1:1:1",
    "level": "van_dung"
  },
  {
    "q": "Loại protein nào dưới đây tham gia cấu tạo nên nhiễm sắc thể ở sinh vật nhân thực?",
    "options": ["A. Papain", "B. Glucagon", "C. Histone", "D. ATPase"],
    "a": "C. Histone",
    "level": "thong_hieu"
  },
  {
    "q": "Khi nói về cặp NST tương đồng, phát biểu nào dưới đây là đúng?",
    "options": ["A. Mỗi cặp NST tương đồng gồm hai NST giống nhau về hình thái và kích thước, trong đó, một NST có nguồn gốc từ bố, một NST có nguồn gốc từ mẹ", "B. Mỗi cặp NST tương đồng gồm hai NST giống nhau về hình thái và kích thước, có nguồn gốc từ bố hoặc từ mẹ", "C. Mỗi cặp NST tương đồng gồm hai NST khác nhau về hình thái và kích thước, trong đó, một NST có nguồn gốc từ bố, một NST có nguồn gốc từ mẹ", "D. Mỗi cặp NST tương đồng gồm hai NST khác nhau về hình thái, kích thước, có nguồn gốc từ bố hoặc từ mẹ"],
    "a": "A. Mỗi cặp NST tương đồng gồm hai NST giống nhau về hình thái và kích thước, trong đó, một NST có nguồn gốc từ bố, một NST có nguồn gốc từ mẹ",
    "level": "thong_hieu"
  },
  {
    "q": "Đâu là ứng dụng của giảm phân trong thực tiễn?",
    "options": ["A. Nuôi cấy tế bào, mô, cơ quan của động vật và người", "B. Lai hữu tính tạo biến dị tổ hợp ở các giống cây trồng, vật nuôi", "C. Nhân nhanh các giống cây trồng có đặc tính tốt", "D. Tạo giống côn trùng bất thụ để thực hiện kiểm soát sinh học"],
    "a": "B. Lai hữu tính tạo biến dị tổ hợp ở các giống cây trồng, vật nuôi",
    "level": "van_dung"
  },
  {
    "q": "Một tế bào có 2n = 14. Số NST của tế bào ở kì sau là",
    "options": ["A. 14", "B. 28", "C. 7", "D. 42"],
    "a": "B. 28",
    "level": "van_dung"
  },
  {
    "q": "Xét phép lai P: AaBb × AaBb. Kiểu gen nào sau đây chiếm tỉ lệ thấp nhất:",
    "options": ["A. AABb", "B. AaBb", "C. AaBB", "D. AAbb"],
    "a": "D. AAbb",
    "level": "van_dung"
  },
  {
    "q": "Cơ thể mang kiểu gen AaBbDdeeFf khi giảm phân bình thường cho số loại giao tử là:",
    "options": ["A. 4", "B. 16", "C. 8", "D. 32"],
    "a": "B. 16",
    "level": "van_dung"
  },
  {
    "q": "Ở gà, vịt nhiễm sắc thể xác định giới tính là:",
    "options": ["A. Con cái: XX, con đực: XY", "B. Con đực: ZW, con cái ZZ", "C. Con cái ZW, con đực ZZ", "D. Con cái XO, con đực XX"],
    "a": "C. Con cái ZW, con đực ZZ",
    "level": "nhan_biet"
  },
  {
    "q": "Khi nói đến ý nghĩa của sự đóng xoắn của các NST trong quá trình phân bào, có bao nhiêu phát biểu sau đây đúng? I. Thuận lợi cho sự tự nhân đôi của NST. II. Thuận lợi cho sự phân li của NST. III. Thuận lợi cho sự tập hợp các NST tại mặt phẳng xích đạo của thoi vô sắc. IV. Thuận lợi cho sự vận động của NST trong phân bào.",
    "options": ["A. 1", "B. 2", "C. 3", "D. 4"],
    "a": "C. 3",
    "level": "thong_hieu"
  },
  {
    "q": "Hình vẽ mô tả hai tế bào ở hai cơ thể lưỡng bội đang phân bào bình thường. Xét các phát biểu sau: I. Tế bào 1 đang ở kì sau 2 của giảm phân với bộ NST 2n = 8. II. Tế bào 2 đang ở kì sau của giảm phân 2 với bộ NST 2n = 8. III. Cơ thể mang tế bào 1 có thể có kiểu gen đồng hợp hoặc dị hợp. IV. Cơ thể mang tế bào 2 có kiểu gen AaBb. Số phát biểu không đúng là:",
    "options": ["A. 3", "B. 4", "C. 2", "D. 1"],
    "a": "A. 3",
    "level": "van_dung"
  },
  {
    "q": "Khi nói về đột biến đảo đoạn nhiễm sắc thể, phát biểu nào sau đây đúng?",
    "options": ["A. Đột biến đảo đoạn nhiễm sắc thể làm thay đổi chiều dài của nhiễm sắc thể", "B. Đột biến đảo đoạn nhiễm sắc thể làm thay đổi trình tự phân bố các gen trên nhiễm sắc thể", "C. Đột biến đảo đoạn nhiễm sắc thể làm cho một số gen trên nhiễm sắc thể này được chuyển sang nhiễm sắc thể khác", "D. Đột biến đảo đoạn nhiễm sắc thể làm gia tăng số lượng gen trên nhiễm sắc thể"],
    "a": "B. Đột biến đảo đoạn nhiễm sắc thể làm thay đổi trình tự phân bố các gen trên nhiễm sắc thể",
    "level": "thong_hieu"
  },
  {
    "q": "Một đoạn AND dài 5100 Å tự sao 5 lần liên tiếp cần số nuclêôtit tự do là:",
    "options": ["A. 51000", "B. 93000", "C. 46500", "D. 96000"],
    "a": "B. 93000",
    "level": "van_dung"
  },
  {
    "q": "Một phân tử AND có cấu trúc xoắn kép, giả sử phân tử AND này có tỉ lệ (A+T)/(G+C) = 1/4 thì tỉ lệ nuclêôtit loại G của phân tử AND này là:",
    "options": ["A. 20%", "B. 40%", "C. 25%", "D. 10%"],
    "a": "B. 40%",
    "level": "van_dung"
  },
  {
    "q": "Quá trình nhân đôi AND được thực hiện theo nguyên tắc gì?",
    "options": ["A. Hai mạch được tổng hợp theo nguyên tắc bổ sung song song liên tục", "B. Một mạch được tổng hợp gián đoạn, một mạch được tổng hợp liên tục", "C. Nguyên tắc bổ sung và nguyên tắc bán bảo toàn", "D. Mạch liên tục hướng vào, mạch gián đoạn hướng ra chạc ba tái bản"],
    "a": "C. Nguyên tắc bổ sung và nguyên tắc bán bảo toàn",
    "level": "nhan_biet"
  },
  {
    "q": "Có bao nhiêu trường hợp sau đây được gọi là đột biến gen? (1) Gen tạo ra sau tái bản AND bị mất 1 cặp nucleotit. (2) Gen tạo ra sau tái bản AND bị thay thế ở 1 cặp nucleotit. (3) mARN tạo ra sau phiên mã bị mất 1 nucleotit. (4) Chuỗi polipeptit tạo ra sau dịch mã bị thay thế 1 axit amin.",
    "options": ["A. 4", "B. 1", "C. 2", "D. 3"],
    "a": "C. 2",
    "level": "thong_hieu"
  }
];

    const normalizeQuestionText = (q) => String(q ?? "").replace(/\s+/g, " ").trim();

    const dedupeQuestionsInPlace = (arr) => {
        const seen = new Set();
        for (let i = 0; i < arr.length;) {
            const key = normalizeQuestionText(arr[i]?.q);
            if (key && seen.has(key)) {
                arr.splice(i, 1);
                continue;
            }
            if (key) seen.add(key);
            i += 1;
        }
        return arr;
    };

    dedupeQuestionsInPlace(ly);
    dedupeQuestionsInPlace(hoa);
    dedupeQuestionsInPlace(sinh);

    window.short_exam_questions = { ly, hoa, sinh };
})();