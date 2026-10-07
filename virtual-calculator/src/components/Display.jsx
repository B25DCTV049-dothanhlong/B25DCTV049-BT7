// Component Display: chỉ hiển thị biểu thức và kết quả (nhận qua props)
export default function Display({ expression, result }) {
  return (
    <div className="display">
      <div className="display-expression">{expression || "\u00A0"}</div>
      <div className="display-result">{result}</div>
    </div>
  );
}
