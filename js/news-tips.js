document.addEventListener('DOMContentLoaded', function() {
    const newsItems = [
        { title: 'TUYẾN SINH LỚP 10 THPT ĐẠI TRÀ MÔN KHTN 9', url: 'pages/exam-structure.html', caption: 'Chi tiết khung ma trận và chương trình bồi dưỡng cho môn KHTN.' },
        { title: 'Thông báo tuyển sinh & hướng dẫn — Bộ GD&ĐT', url: 'https://chinhphu.vn/?pageid=27160&docid=212363&classid=1', caption: 'Trang chính thức của Bộ GD&ĐT — kiểm tra thông báo, lịch thi, quy chế.' },
        { title: 'Tin tức & hướng dẫn Thi vào 10 — VnExpress', url: 'https://vnexpress.net/thi-vao-10', caption: 'Mục chuyên đề Thi vào 10: bài hướng dẫn, kinh nghiệm và thông báo liên quan.' },
        { title: 'Báo Giáo dục — VietnamNet (mục Giáo dục)', url: 'https://vietnamnet.vn/vn/giao-duc', caption: 'Cập nhật chính sách, tư vấn ôn tập và thông tin tuyển sinh.' },
        { title: 'Tuyên Quang: Chọn KHTN là môn thi thứ ba vào 10 được cân nhắc rất kỹ', url: 'https://giaoduc.net.vn/giam-doc-so-gddt-tuyen-quang-chon-khtn-la-mon-thi-thu-ba-vao-10-duoc-can-nhac-rat-ky-post257259.gd', caption: 'Bài viết, phóng sự và chia sẻ kinh nghiệm thi tuyển.' },
        { title: 'Sở GD&ĐT Tuyên Quang— Thông báo tuyển sinh', url: 'https://tuyenquang.edu.vn/van-ban-cong-van/van-ban-so-gd-dt/phong-qlclgd/thi-tuyen-sinh/huong-dan-tuyen-sinh-thcs-va-thpt-nam-hoc-2025-2026-cv-so-408-sgddt-qlcl-gdnn.html', caption: 'Trang Sở GD&ĐT địa phương — luôn kiểm tra thông báo vùng/thành phố.' }
    ];

    const tipsItems = [
        { title: 'Bảng tuần hoàn tương tác — Ptable', url: 'https://ptable.com', caption: 'Bảng tuần hoàn tương tác, thông tin chi tiết từng nguyên tố.' },
        { title: 'Bảng tính độ tan (hình ảnh) — Bảng tính tan dành cho THCS', url: 'images/solubility-table.png', caption: 'Hình ảnh bảng tính độ tan (đặt file images/solubility-table.png trong dự án hoặc thay bằng đường dẫn tới ảnh trên web).' },

        // Vật Lý: mẹo & công thức
        { title: 'Bảng công thức Vật Lý lớp 9 (hình ảnh)', url: 'images/physics-formulas-9.png', caption: 'Tổng hợp công thức thường gặp cho lớp 9 — lưu file images/physics-formulas-9.png vào dự án hoặc thay bằng URL ảnh.' },
        { title: 'Vật lý cơ bản & lời giải — Khan Academy (Physics)', url: 'https://www.khanacademy.org/science/physics', caption: 'Bài giảng, ví dụ và bài tập minh họa cho các chủ đề vật lý cơ bản.' },
        { title: 'Mẹo giải nhanh bài Vật Lý (playlist)', url: 'https://www.youtube.com/results?search_query=vật+lý+lớp+9+mẹo', caption: 'Tìm playlist/gợi ý mẹo giải nhanh trên YouTube (tìm kiếm theo từ khóa).' },

        // Hóa học: bảng tan + tham khảo
        { title: 'Bảng tính độ tan (bảng tan) — Wikipedia (Tiếng Việt)', url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BB%97_tan', caption: 'Bảng độ tan các muối và hợp chất thường gặp — phù hợp cho học sinh THCS/Lớp 9.' },

        // Sinh Học: mẹo & sơ đồ
        { title: 'Sơ đồ tư duy Sinh Học (mindmap) — ảnh', url: 'images/biology-mindmap.png', caption: 'Sơ đồ tóm tắt nhầm nhớ nhanh các chủ đề Sinh Học — lưu file images/biology-mindmap.png hoặc thay bằng URL.' },
        { title: 'Bài giảng Sinh Học cơ bản — Khan Academy (Biology)', url: 'https://www.khanacademy.org/science/biology', caption: 'Giải thích dạng bài, khái niệm và hoạt động tương tác cho sinh học cơ bản.' },
        { title: 'So sánh tế bào thực vật & động vật (ảnh)', url: 'images/cell-plant-animal.png', caption: 'Ảnh tóm tắt sự khác nhau giữa tế bào thực vật và động vật — đặt images/cell-plant-animal.png vào dự án.' },

        // Kỹ năng học & nguồn chung
        { title: 'Kỹ thuật ôn tập (Pomodoro, spaced repetition) — Khan Academy', url: 'https://www.khanacademy.org', caption: 'Hướng dẫn học theo chủ đề và kỹ thuật ôn tập hiệu quả.' },
        { title: 'Chiến lược học tập & ôn thi — Edutopia', url: 'https://www.edutopia.org', caption: 'Chiến lược học tập, quản lý thời gian và phương pháp giảng dạy hiệu quả.' },
        { title: 'Mẹo ôn thi & kinh nghiệm — VnExpress (Giáo dục)', url: 'https://vnexpress.net/giao-duc', caption: 'Bài viết, phỏng vấn và mẹo từ giáo viên, chuyên gia.' },
        { title: 'Mẹo ôn thi & hướng dẫn — VietnamNet (Giáo dục)', url: 'https://vietnamnet.vn/vn/giao-duc', caption: 'Tư vấn ôn tập, mẫu đề và kinh nghiệm thi tuyển.' },
        { title: 'Tài nguyên bài giảng & bài tập — Khan Academy (luyện tập)', url: 'https://www.khanacademy.org', caption: 'Bộ bài giảng miễn phí để củng cố kiến thức cơ bản.' }
    ];

    function populateList(containerId, items) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';
        items.forEach(item => {
            const a = document.createElement('a');
            a.className = 'list-group-item list-group-item-action d-flex align-items-start';
            a.href = item.url;
            a.target = '_blank';
            a.rel = 'noopener';

            const logo = document.createElement('img');
            let hostname = '';
            try {
                hostname = new URL(item.url).hostname;
            } catch (e) {
                hostname = '';
            }

            // prefer local logos for known hosts (keep logos stable and consistent)
            const localLogos = {
                'moet.gov.vn': 'images/moet.png',
                // 'tuyenquang.edu.vn': 'images/tuyenquang.png'  // Commented out due to missing image file
            };

            let matchedKey = null;
            if (hostname) {
                Object.keys(localLogos).forEach(k => { if (hostname.endsWith(k)) matchedKey = k; });
            }

            if (matchedKey) {
                logo.src = localLogos[matchedKey];
            } else if (hostname) {
                logo.src = `https://www.google.com/s2/favicons?sz=64&domain=${hostname}`;
            } else {
                logo.src = 'https://www.google.com/s2/favicons?sz=64&domain=example.com';
            }
            logo.style.width = '36px';
            logo.style.height = '36px';
            logo.style.marginRight = '10px';
            logo.style.borderRadius = '6px';
            logo.style.objectFit = 'contain';
            logo.alt = item.title + ' logo';

            const contentDiv = document.createElement('div');
            contentDiv.className = 'news-item-content d-flex flex-column';

            const strong = document.createElement('div');
            strong.className = 'fw-semibold';
            strong.textContent = item.title;
            // ensure visible title styling in case site CSS overrides defaults
            strong.style.display = 'block';
            strong.style.color = '#0b1220';
            strong.style.fontSize = '0.95rem';

            const small = document.createElement('small');
            small.className = 'text-muted';
            small.textContent = item.caption;
            small.style.display = 'block';
            small.style.color = '#6b7280';

            if (item.isExpandable) {
                small.style.display = 'none';
                small.style.whiteSpace = 'pre-wrap';
                a.addEventListener('click', function(e) {
                    e.preventDefault();
                    small.style.display = small.style.display === 'none' ? 'block' : 'none';
                });
                a.style.cursor = 'pointer';
            }

            contentDiv.appendChild(strong);
            contentDiv.appendChild(small);

            a.appendChild(logo);
            a.appendChild(contentDiv);
            container.appendChild(a);
        });
    }

    populateList('newsList', newsItems);
    populateList('tipsList', tipsItems);
    // also populate mobile containers if present (shown when sidebars are hidden)
    populateList('mobileNewsList', newsItems);
    populateList('mobileTipsList', tipsItems);
});

