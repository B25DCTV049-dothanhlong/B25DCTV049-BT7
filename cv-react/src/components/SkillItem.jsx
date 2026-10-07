// Component SkillItem: một kỹ năng với thanh mức độ
export default function SkillItem({ name, level }) {
  return (
    <div className="skill">
      <div className="skill-head">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
