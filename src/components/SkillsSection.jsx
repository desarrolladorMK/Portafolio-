import { useRef } from "react";
import "./SkillsSection.css";

const techStack = [
  { icon: "/icons/html.svg", name: "HTML5" },
  { icon: "/icons/css.svg", name: "CSS3" },
  { icon: "/icons/js.svg", name: "JavaScript" },
  { icon: "/icons/react.svg", name: "React" },
  { icon: "/icons/nodejs.svg", name: "Node.js" },
  { icon: "/icons/postgresql.svg", name: "PostgreSQL" },
  { icon: "/icons/python.svg", name: "Python" },
];

const tools = [
  { icon: "/icons/git.svg", name: "Git" },
  { icon: "/icons/github.svg", name: "GitHub" },
  { icon: "/icons/terminal.svg", name: "Terminal" },
  { icon: "/icons/vscode.svg", name: "VSCode" },
  { icon: "/icons/npm.svg", name: "npm" },
  { icon: "/icons/vercel.svg", name: "Vercel" },
  { icon: "/icons/wordpress.svg", name: "WordPress" },
  { icon: "/icons/supabase.svg", name: "Supabase" },
];

function handleCardMouseMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  card.style.setProperty("--mouse-x", `${x}%`);
  card.style.setProperty("--mouse-y", `${y}%`);
}

const SkillsSection = () => (
  <section className="skills-section" id="skills">
    <h1 className="skills-title">Habilidades y Tecnologías</h1>
    <div className="skills-cards-wrapper">
      {[
        {
          title: "Stack Tecnológico",
          items: techStack,
        },
        {
          title: "Herramientas",
          items: tools,
        },
      ].map(({ title, items }) => (
        <div
          className="skills-card improved"
          key={title}
          onMouseMove={handleCardMouseMove}
          onMouseEnter={(e) => e.currentTarget.classList.add("is-hovered")}
          onMouseLeave={(e) => e.currentTarget.classList.remove("is-hovered")}
        >
          <h2 className="skills-category">{title}</h2>
          <div className="skills-icons improved">
            {items.map((item) => (
              <span key={item.name}>
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;