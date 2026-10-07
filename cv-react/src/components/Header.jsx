// Component Header: ảnh, tên, chức danh, thông tin liên hệ (nhận qua props)
export default function Header({ name, title, avatar, contacts }) {
  // Lấy chữ cái đầu của tên làm ảnh đại diện khi chưa có ảnh
  const initial = name.trim().split(" ").pop().charAt(0).toUpperCase();

  return (
    <header className="header">
      {avatar ? (
        <img className="avatar" src={avatar} alt={name} />
      ) : (
        <div className="avatar avatar-initial">{initial}</div>
      )}
      <div className="header-info">
        <h1>{name}</h1>
        <p className="job-title">{title}</p>
        <ul className="contacts">
          {contacts.map((c, i) => (
            <li key={i}>
              <span>{c.icon}</span> {c.text}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
