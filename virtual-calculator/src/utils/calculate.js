// Tính biểu thức dạng "12+3×4÷2" theo đúng thứ tự ưu tiên (× ÷ trước, + − sau).
// Không dùng eval() để an toàn và dễ giải thích.
export function calculate(expression) {
  // Tách thành các token: số và toán tử
  const tokens = expression.match(/\d+\.?\d*|\.\d+|[+\-×÷]/g);
  if (!tokens) return null;

  // Hỗ trợ số âm ở đầu biểu thức: "-5+2"
  if (tokens[0] === "-" && tokens.length > 1) {
    tokens.splice(0, 2, "-" + tokens[1]);
  }

  // Bước 1: xử lý × và ÷
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t === "×" || t === "÷") {
      const left = parseFloat(stack.pop());
      const right = parseFloat(tokens[++i]);
      if (Number.isNaN(left) || Number.isNaN(right)) return null;
      if (t === "÷" && right === 0) return "Lỗi chia cho 0";
      stack.push(t === "×" ? left * right : left / right);
    } else {
      stack.push(t);
    }
  }

  // Bước 2: xử lý + và −
  let result = parseFloat(stack[0]);
  for (let i = 1; i < stack.length; i += 2) {
    const op = stack[i];
    const num = parseFloat(stack[i + 1]);
    if (Number.isNaN(num)) return null;
    result = op === "+" ? result + num : result - num;
  }
  if (Number.isNaN(result)) return null;

  // Làm tròn để tránh 0.1 + 0.2 = 0.30000000000000004
  return String(parseFloat(result.toFixed(10)));
}
