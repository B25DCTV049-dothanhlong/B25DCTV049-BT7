// Component Section: khung chung cho mỗi mục của CV.
// Nội dung giữa thẻ mở và thẻ đóng được gán vào props.children
export default function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}
