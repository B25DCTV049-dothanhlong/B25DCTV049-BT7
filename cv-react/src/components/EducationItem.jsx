// Component EducationItem: một mục học vấn
export default function EducationItem({ school, period }) {
  return (
    <div className="edu">
      <h3>{school}</h3>
      <span className="period">{period}</span>
    </div>
  );
}
