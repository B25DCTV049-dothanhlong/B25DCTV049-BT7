export const profile = {
  name: "Đỗ Thành Long",
  title: "Sinh viên năm 2 · Lập trình web",
  avatar: "", // để trống sẽ hiện chữ cái đầu của tên; có thể đổi thành đường dẫn ảnh
  summary:
    "Sinh viên năm 2, thích lập trình web và đá bóng.",
  contacts: [
    { icon: "✉️", text: "dothanhlong0833282386@gmail.com" },
    { icon: "📞", text: "0833282386" },
    { icon: "📍", text: "Hải Dương, Việt Nam" },
  ],
};

export const skills = [
  { id: 1, name: "HTML / CSS", level: 60 },
  { id: 2, name: "JavaScript", level: 60 },
  { id: 3, name: "Git / GitHub", level: 60 },
];

export const projects = [
  {
    id: 1,
    name: "Trang cửa hàng (Thực hành 1)",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Trang bán hàng gọi API, hiển thị danh sách sản phẩm và giỏ hàng bằng JavaScript thuần.",
  },
  {
    id: 2,
    name: "Virtual Calculator",
    tech: ["React", "Vite"],
    description:
      "Máy tính bỏ túi với các component Display, Button và state lưu biểu thức.",
  },
  {
    id: 3,
    name: "Website CV cá nhân",
    tech: ["React", "CSS"],
    description:
      "Chuyển trang CV tĩnh sang React, chia thành nhiều component tái sử dụng.",
  },
];

export const education = [
  {
    id: 1,
    school: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
    period: "2025 – nay",
  },
  {
    id: 2,
    school: "THPT Thanh Miện",
    period: "2022 – 2025",
  },
];
