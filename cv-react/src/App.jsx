import Header from "./components/Header";
import Section from "./components/Section";
import SkillItem from "./components/SkillItem";
import ProjectCard from "./components/ProjectCard";
import EducationItem from "./components/EducationItem";
import Footer from "./components/Footer";
import { profile, skills, projects, education } from "./data/cvData";

// App giữ dữ liệu và truyền xuống các component con qua props
export default function App() {
  return (
    <div className="page">
      <Header
        name={profile.name}
        title={profile.title}
        avatar={profile.avatar}
        contacts={profile.contacts}
      />

      <main>
        <Section title="Giới thiệu">
          <p>{profile.summary}</p>
        </Section>

        <Section title="Kỹ năng">
          {skills.map((s) => (
            <SkillItem key={s.id} name={s.name} level={s.level} />
          ))}
        </Section>

        <Section title="Dự án">
          <div className="project-grid">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                name={p.name}
                tech={p.tech}
                description={p.description}
              />
            ))}
          </div>
        </Section>

        <Section title="Học vấn">
          {education.map((e) => (
            <EducationItem
              key={e.id}
              school={e.school}
              period={e.period}
            />
          ))}
        </Section>
      </main>

      <Footer name={profile.name} />
    </div>
  );
}
