# Ôn Tập KHTN Lớp 9

Trang web tĩnh để ôn luyện 3 môn Vật Lý, Hóa Học, Sinh Học.

Mục đích: deploy nhanh lên GitHub Pages hoặc Netlify.

---

## Yêu cầu trước khi deploy
- Có tài khoản GitHub.
- Git cài trên máy.
- Tránh mở `index.html` bằng `file://` — luôn phục vụ qua HTTP(S) (GitHub Pages/Netlify).

## Triển khai nhanh lên GitHub Pages
1. Tạo repo trên GitHub (ví dụ `khtn-9`).
2. Trên máy của bạn mở PowerShell ở thư mục dự án `g:\My Drive\KHTN`.
3. Nếu bạn muốn dùng script tự động, chạy:

```powershell
# chạy script publish.ps1 (sẽ yêu cầu URL repo nếu chưa cấu hình)
powershell -ExecutionPolicy Bypass -File .\publish.ps1
```

4. Hoặc làm tay:

```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main
```

5. Vào GitHub → Settings → Pages → Source: chọn branch `main` và folder `/ (root)` → Save. Sau vài phút site có URL `https://<USERNAME>.github.io/<REPO>/`.

## Chạy local để kiểm tra (HTTP server)
- Python 3:
```powershell
cd "g:\My Drive\KHTN"
python -m http.server 8000
# rồi mở http://localhost:8000
```
- Node (http-server): `npx http-server -p 8000`

## Ghi chú
- Một số API (fetch, crypto.subtle) không hoạt động khi mở file bằng `file://`. Luôn test qua HTTP.
- Nếu bạn muốn custom domain hoặc CI nâng cao, tôi có thể hướng dẫn tiếp (Netlify/Vercel), hoặc cấu hình `CNAME`.

---

## Files added
- `publish.ps1` — script PowerShell để commit & push nhanh.
- `.gitignore` — file mẫu để bỏ qua file không cần thiết.

## Firebase / Firestore

- Nếu bạn dùng Firebase để lưu leaderboard, tạo Firestore database và upload `firestore.rules` (nằm trong repo) vào phần Rules của Firestore.
- Rules mẫu cho repo: [firestore.rules](firestore.rules) — cho phép đọc công khai, nhưng chỉ cho phép user đã xác thực ghi điểm của chính họ (username phải là email đã xác thực).
- Sau khi bật Authentication (Email/Password) và Firestore, dán cấu hình web app vào `js/firebase-config.js`.
