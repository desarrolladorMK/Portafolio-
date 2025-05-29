import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiciosCarousel from '../components/ServiciosCarousel';
import { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const constellationRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (constellationRef.current) observer.observe(constellationRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (constellationRef.current) observer.unobserve(constellationRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <div>
      <Header />

      {/* Introducción estilo constelación */}
      <div className="constellation-section" ref={constellationRef} id="nosotros">
        <h1 className="intro-title">Bienvenidos a STARDEVS</h1>
        <p className="intro-subtitle">
          Cada solución que creamos es una estrella conectada en tu universo digital.
        </p>

        <div className="constellation-container">
          <svg className="constellation-lines">
            <line className="constellation-line" x1="100" y1="100" x2="300" y2="80" />
            <line className="constellation-line" x1="300" y1="80" x2="500" y2="150" />
            <line className="constellation-line" x1="500" y1="150" x2="700" y2="100" />
          </svg>

          <div className="star-node" style={{ top: '90px', left: '100px' }}>
            <div className="star-card">
              <div className="star-icon">💻</div>
              <h2>Diseño Web</h2>
              <p>Sitios únicos que brillan con identidad y claridad.</p>
            </div>
          </div>

          <div className="star-node" style={{ top: '60px', left: '300px' }}>
            <div className="star-card">
              <div className="star-icon">🚀</div>
              <h2>Desarrollo Web</h2>
              <p>Código limpio y sólido que impulsa tu presencia online.</p>
            </div>
          </div>

          <div className="star-node" style={{ top: '140px', left: '500px' }}>
            <div className="star-card">
              <div className="star-icon">🔭</div>
              <h2>SEO</h2>
              <p>Alcanza nuevas alturas en los resultados de búsqueda.</p>
            </div>
          </div>

          <div className="star-node" style={{ top: '90px', left: '700px' }}>
            <div className="star-card">
              <div className="star-icon">📱</div>
              <h2>Redes Sociales</h2>
              <p>Conecta tu galaxia de seguidores con estilo y coherencia.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Servicios tipo carrusel */}
      <div id="servicios">
        <ServiciosCarousel />
      </div>

      {/* Habilidades y Tecnologías */}
      <div className="skills-section" ref={skillsRef} id="contactanos">
        <h1 className="skills-title">Habilidades y Tecnologías</h1>

        <div className="skills-grid-alt">
          {/* Stack Tecnológico */}
          <div className="skills-card">
            <h2 className="skills-category">Stack Tecnológico</h2>
            <div className="skills-icons">
              <span><img src="/icons/html.svg" alt="HTML5" /><p>HTML5</p></span>
              <span><img src="/icons/css.svg" alt="CSS3" /><p>CSS3</p></span>
              <span><img src="/icons/js.svg" alt="JavaScript" /><p>JavaScript</p></span>
              <span><img src="/icons/react.svg" alt="React" /><p>React</p></span>
              <span><img src="/icons/nodejs.svg" alt="Node.js" /><p>Node.js</p></span>
              <span><img src="/icons/postgresql.svg" alt="PostgreSQL" /><p>PostgreSQL</p></span>
              <span><img src="/icons/python.svg" alt="Python" /><p>Python</p></span>
            </div>
          </div>

          {/* Herramientas */}
          <div className="skills-card">
            <h2 className="skills-category">Herramientas</h2>
            <div className="skills-icons">
              <span><img src="/icons/git.svg" alt="Git" /><p>Git</p></span>
              <span><img src="/icons/github.svg" alt="GitHub" /><p>GitHub</p></span>
              <span><img src="/icons/terminal.svg" alt="Terminal" /><p>Terminal</p></span>
              <span><img src="/icons/vscode.svg" alt="VSCode" /><p>VSCode</p></span>
              <span><img src="/icons/npm.svg" alt="npm" /><p>npm</p></span>
              <span><img src="/icons/vercel.svg" alt="vercel" /><p>Vercel</p></span>
              <span><img src="/icons/wordpress.svg" alt="wordPress" /><p>WordPress</p></span>
              <span><img src="/icons/supabase.svg" alt="Supabase" /><p>Supabase</p></span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;