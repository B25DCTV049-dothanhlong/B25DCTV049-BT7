# Trang CV bằng React – Bài tập về nhà 2 (Buổi 7)

## Chạy dự án
```bash
npm install
npm run dev
# Mở http://localhost:5173
```

## Cấu trúc
- `src/data/cvData.js` – **dữ liệu CV** (kỹ năng, dự án, học vấn đặt trong mảng) → sửa file này để đổi nội dung
- `src/App.jsx` – lấy dữ liệu, truyền xuống component con qua props
- `src/components/`
  - `Header.jsx` – ảnh, tên, liên hệ
  - `Section.jsx` – khung chung, dùng **props.children**
  - `SkillItem.jsx` – một kỹ năng
  - `ProjectCard.jsx` – một dự án
  - `EducationItem.jsx` – một mục học vấn
  - `Footer.jsx`
