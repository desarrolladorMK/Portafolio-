import { useEffect, useRef, memo } from "react";
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

// Función optimizada para el movimiento del mouse
const handleCardMouseMove = (e) => {
  const card = e.currentTarget;
  requestAnimationFrame(() => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  });
};

const SkillsSection = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // Opcional: deja de observar una vez que es visible
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Función de limpieza del observer
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h1 className="section-title" ref={titleRef}>
        Habilidades y Tecnologías
      </h1>
      <div className="skills-cards-wrapper">
        {[
          { title: "Stack Tecnológico", items: techStack },
          { title: "Herramientas", items: tools },
        ].map(({ title, items }, index) => (
          <div
            className="skills-card improved"
            key={title}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleCardMouseMove}
            onMouseEnter={(e) => e.currentTarget.classList.add("is-hovered")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("is-hovered")}
          >
            <h2 className="skills-category">{title}</h2>
            <div className="skills-icons improved">
              {items.map((item) => (
                <span key={item.name}>
                  <img src={item.icon} alt={item.name} loading="lazy" />
                  <p>{item.name}</p>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(SkillsSection);