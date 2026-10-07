# Virtual Calculator – Bài tập về nhà 1 (Buổi 7)

Máy tính bỏ túi viết bằng React + Vite.

## Chạy dự án
```bash
npm install
npm run dev
# Mở http://localhost:5173
```

## Cấu trúc
- `src/App.jsx` – component gốc, giữ **state** (biểu thức, kết quả) và xử lý bấm nút
- `src/components/Display.jsx` – hiển thị biểu thức/kết quả (nhận qua **props**)
- `src/components/Button.jsx` – nút, nhận props `label`, `color`, `wide`, `onClick`
- `src/utils/calculate.js` – tính biểu thức đúng thứ tự ưu tiên (không dùng `eval`)

## Chức năng
Phép tính + − × ÷, nút C (xoá hết), ⌫ (xoá một ký tự), = (tính kết quả), số thập phân, số âm đầu biểu thức, báo lỗi chia cho 0.
