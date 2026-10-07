// Component Button: nhận props nhãn (label), màu (color), hàm xử lý (onClick)
export default function Button({ label, color = "gray", wide = false, onClick }) {
  return (
    <button
      className={`btn btn-${color}${wide ? " btn-wide" : ""}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}
