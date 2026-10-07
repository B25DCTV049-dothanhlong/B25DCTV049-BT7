// Component ProjectCard: một dự án
export default function ProjectCard({ name, tech, description }) {
  return (
    <div className="project">
      <h3>{name}</h3>
      <div className="tags">
        {tech.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <p>{description}</p>
    </div>
  );
}
