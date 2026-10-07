import { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import { calculate } from "./utils/calculate";

const OPERATORS = ["+", "-", "×", "÷"];

// Dữ liệu các nút nằm trong mảng, truyền xuống Button qua props
const BUTTONS = [
  { label: "C", color: "red" },
  { label: "⌫", color: "gray" },
  { label: "÷", color: "orange" },
  { label: "×", color: "orange" },
  { label: "7" }, { label: "8" }, { label: "9" },
  { label: "-", color: "orange" },
  { label: "4" }, { label: "5" }, { label: "6" },
  { label: "+", color: "orange" },
  { label: "1" }, { label: "2" }, { label: "3" },
  { label: "=", color: "green" },
  { label: "0", wide: true }, { label: "." },
];

export default function App() {
  // State lưu biểu thức hiện tại và kết quả
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");

  function handleClick(label) {
    if (label === "C") {
      setExpression("");
      setResult("0");
    } else if (label === "⌫") {
      setExpression(expression.slice(0, -1));
    } else if (label === "=") {
      if (!expression) return;
      const value = calculate(expression);
      if (value === null) {
        setResult("Lỗi");
      } else {
        setResult(value);
        // Nếu là lỗi chia cho 0 thì giữ biểu thức, ngược lại dùng kết quả làm biểu thức mới
        if (!value.startsWith("Lỗi")) setExpression(value);
      }
    } else if (OPERATORS.includes(label)) {
      if (!expression) {
        // Chỉ cho phép dấu "-" ở đầu (số âm)
        if (label === "-") setExpression("-");
        return;
      }
      const last = expression.slice(-1);
      // Đổi toán tử nếu bấm hai toán tử liên tiếp
      if (OPERATORS.includes(last)) {
        if (expression.length === 1) return; // chỉ có "-"
        setExpression(expression.slice(0, -1) + label);
      } else {
        setExpression(expression + label);
      }
    } else if (label === ".") {
      // Không cho phép hai dấu chấm trong cùng một số
      const currentNumber = expression.split(/[+\-×÷]/).pop();
      if (currentNumber.includes(".")) return;
      setExpression(expression + (currentNumber === "" ? "0." : "."));
    } else {
      setExpression(expression + label);
    }
  }

  return (
    <div className="app">
      <div className="calculator">
        <h1 className="title">Virtual Calculator</h1>
        <Display expression={expression} result={result} />
        <div className="keypad">
          {BUTTONS.map((b) => (
            <Button
              key={b.label}
              label={b.label}
              color={b.color}
              wide={b.wide}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
