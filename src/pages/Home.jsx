import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />

      {/* Introducción */}
      <div className="intro-section">
        <h1 className="intro-title">Bienvenidos a STARDEVS</h1>
        <p className="intro-subtitle">
          Creamos desarrollos atractivos adaptados a tus necesidades
        </p>
        <div className="intro-grid">
          <div className="intro-item">
            <div className="intro-icon">💻</div>
            <h2 className="intro-item-title">Diseño Web</h2>
            <p className="intro-item-description">
              Nuestro enfoque en el diseño de sitios web es crear un sitio que fortalezca la marca de tu empresa y al mismo tiempo garantice la facilidad de uso y la simplicidad para tu audiencia.
            </p>
          </div>

          <div className="intro-item">
            <div className="intro-icon">📱</div>
            <h2 className="intro-item-title">Desarrollo Web</h2>
            <p className="intro-item-description">
              El proceso de desarrollo web implica tomar los elementos gráficos definidos en el proceso de diseño y codificarlos en un tema personalizado, asegurando funcionalidad y rendimiento.
            </p>
          </div>

          <div className="intro-item">
            <div className="intro-icon">📊</div>
            <h2 className="intro-item-title">Optimización SEO</h2>
            <p className="intro-item-description">
              Llega más lejos de lo que creías con nuestro servicio de SEO. Alcanzarás más leads que nunca, aparecerás en los primeros resultados de búsqueda y destacarás en tu sector.
            </p>
          </div>
        </div>
      </div>

      {/* Sección de Habilidades y Tecnologías */}
      <div className="skills-section">
        <h1 className="skills-title">Habilidades y Tecnologías</h1>
        <div className="skills-grid">
          <div className="skill-item">
            <div className="skill-icon">💻</div>
            <h2 className="skill-title">Stack Tecnológico</h2>
            <ul className="skill-list">
              <li>Frontend: HTML5, CSS3, JavaScript, React</li>
              <li>Backend: Node.js</li>
              <li>Base de datos: Supabase</li>
            </ul>
          </div>

          <div className="skill-item">
            <div className="skill-icon">🔒</div>
            <h2 className="skill-title">Seguridad</h2>
            <ul className="skill-list">
              <li>Protocolo HTTPS para conexiones seguras</li>
              <li>Cumplimiento con regulaciones de datos</li>
            </ul>
          </div>

          <div className="skill-item">
            <div className="skill-icon">⚡</div>
            <h2 className="skill-title">Rendimiento</h2>
            <ul className="skill-list">
              <li>Tiempos de carga optimizados</li>
              <li>Compresión de imágenes y uso de CDN para multimedia</li>
            </ul>
          </div>

          <div className="skill-item">
            <div className="skill-icon">📊</div>
            <h2 className="skill-title">SEO</h2>
            <ul className="skill-list">
              <li>Palabras clave integradas, metaetiquetas y estructura optimizada</li>
              <li>Integración con Google Analytics para seguimiento de métricas</li>
            </ul>
          </div>

          <div className="skill-item">
            <div className="skill-icon">🛠️</div>
            <h2 className="skill-title">Mantenimiento</h2>
            <ul className="skill-list">
              <li>Planes de soporte técnico mensual o anual</li>
              <li>Actualizaciones regulares para compatibilidad y seguridad</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

/* Opción alternativa para la introducción (narrativa):
<div className="intro-section">
  <h1 className="intro-title">Transforma tu Visión con STARDEVS</h1>
  <p className="intro-subtitle">
    Creamos desarrollos atractivos adaptados a tus necesidades
  </p>
  <p className="intro-description">
    En STARDEVS, nos apasiona convertir tus ideas en soluciones digitales innovadoras. Con un enfoque centrado en el cliente, ofrecemos servicios de desarrollo web, diseño y optimización que impulsan tu presencia en línea y llevan tu negocio al siguiente nivel.
  </p>
</div>
*/