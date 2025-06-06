import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiciosCarousel from "../components/ServiciosCarousel";
import Proyectos from "../components/Proyectos";
import Contactanos from "../components/Contactanos";
import { useEffect, useRef } from "react";
import "./Home.css";
import ConstellationSection from "../components/ConstellationSection";

const Home = () => {
  const constellationRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (constellationRef.current) observer.observe(constellationRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (constellationRef.current)
        observer.unobserve(constellationRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <div>
      <Header />
      <ConstellationSection constellationRef={constellationRef} />

      {/* Servicios tipo carrusel */}
      <div id="servicios">
        <ServiciosCarousel />
      </div>

      {/* Proyectos */}
      <div id="proyectos">
        <Proyectos />
      </div>

      {/* Contactanos */}
      <div id="contactanos">
        <Contactanos />
      </div>

      {/* Habilidades y Tecnologías */}
      <div className="skills-section" ref={skillsRef} id="contactanos">
        <h1 className="skills-title">Habilidades y Tecnologías</h1>

        <div className="skills-grid-alt">
          {/* Stack Tecnológico */}
          <div className="skills-card">
            <h2 className="skills-category">Stack Tecnológico</h2>
            <div className="skills-icons">
              <span>
                <img src="/icons/html.svg" alt="HTML5" />
                <p>HTML5</p>
              </span>
              <span>
                <img src="/icons/css.svg" alt="CSS3" />
                <p>CSS3</p>
              </span>
              <span>
                <img src="/icons/js.svg" alt="JavaScript" />
                <p>JavaScript</p>
              </span>
              <span>
                <img src="/icons/react.svg" alt="React" />
                <p>React</p>
              </span>
              <span>
                <img src="/icons/nodejs.svg" alt="Node.js" />
                <p>Node.js</p>
              </span>
              <span>
                <img src="/icons/postgresql.svg" alt="PostgreSQL" />
                <p>PostgreSQL</p>
              </span>
              <span>
                <img src="/icons/python.svg" alt="Python" />
                <p>Python</p>
              </span>
            </div>
          </div>

          {/* Herramientas */}
          <div className="skills-card">
            <h2 className="skills-category">Herramientas</h2>
            <div className="skills-icons">
              <span>
                <img src="/icons/git.svg" alt="Git" />
                <p>Git</p>
              </span>
              <span>
                <img src="/icons/github.svg" alt="GitHub" />
                <p>GitHub</p>
              </span>
              <span>
                <img src="/icons/terminal.svg" alt="Terminal" />
                <p>Terminal</p>
              </span>
              <span>
                <img src="/icons/vscode.svg" alt="VSCode" />
                <p>VSCode</p>
              </span>
              <span>
                <img src="/icons/npm.svg" alt="npm" />
                <p>npm</p>
              </span>
              <span>
                <img src="/icons/vercel.svg" alt="vercel" />
                <p>Vercel</p>
              </span>
              <span>
                <img src="/icons/wordpress.svg" alt="wordPress" />
                <p>WordPress</p>
              </span>
              <span>
                <img src="/icons/supabase.svg" alt="Supabase" />
                <p>Supabase</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
