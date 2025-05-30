import React from 'react';

const ConstellationSection = ({ constellationRef }) => {
  return (
    <div className="constellation-section" ref={constellationRef} id="nosotros">
      <h1 className="intro-title">Bienvenidos a stelarCode</h1>
      <p className="intro-subtitle">
        Cada solución que creamos es una estrella conectada en tu universo digital.
      </p>
      <p className="intro-description">
        En stelarCode, nos dedicamos a transformar ideas en experiencias digitales extraordinarias. 
        Nuestro equipo de expertos combina creatividad y tecnología para dar vida a proyectos únicos.
      </p>

      <div className="constellation-container">
        <svg className="constellation-lines">
          <line className="constellation-line" x1="100" y1="100" x2="300" y2="80" />
          <line className="constellation-line" x1="300" y1="80" x2="500" y2="150" />
          <line className="constellation-line" x1="500" y1="150" x2="700" y2="100" />
          <line className="constellation-line" x1="300" y1="80" x2="400" y2="250" />
          <line className="constellation-line" x1="500" y1="150" x2="400" y2="250" />
        </svg>

        <div className="star-node" style={{ top: '90px', left: '100px' }}>
          <div className="star-card">
            <div className="star-icon">💻</div>
            <h2>Diseño Web</h2>
            <p>Sitios únicos que brillan con identidad y claridad.</p>
            <ul className="service-details">
              <li>Diseño UI/UX personalizado</li>
              <li>Responsive Design</li>
              <li>Optimización de experiencia</li>
            </ul>
          </div>
        </div>

        <div className="star-node" style={{ top: '60px', left: '300px' }}>
          <div className="star-card">
            <div className="star-icon">🚀</div>
            <h2>Desarrollo Web</h2>
            <p>Código limpio y sólido que impulsa tu presencia online.</p>
            <ul className="service-details">
              <li>Desarrollo Frontend y Backend</li>
              <li>Aplicaciones Web Modernas</li>
              <li>Integración de APIs</li>
            </ul>
          </div>
        </div>

        <div className="star-node" style={{ top: '140px', left: '500px' }}>
          <div className="star-card">
            <div className="star-icon">🔭</div>
            <h2>SEO</h2>
            <p>Alcanza nuevas alturas en los resultados de búsqueda.</p>
            <ul className="service-details">
              <li>Optimización para buscadores</li>
              <li>Estrategias de contenido</li>
              <li>Análisis de métricas</li>
            </ul>
          </div>
        </div>

        <div className="star-node" style={{ top: '90px', left: '700px' }}>
          <div className="star-card">
            <div className="star-icon">📱</div>
            <h2>Redes Sociales</h2>
            <p>Conecta tu galaxia de seguidores con estilo y coherencia.</p>
            <ul className="service-details">
              <li>Gestión de redes sociales</li>
              <li>Creación de contenido</li>
              <li>Estrategia digital</li>
            </ul>
          </div>
        </div>

        <div className="star-node" style={{ top: '250px', left: '400px' }}>
          <div className="star-card">
            <div className="star-icon">🛠️</div>
            <h2>Soporte Técnico</h2>
            <p>Mantenimiento y mejora continua de tu proyecto.</p>
            <ul className="service-details">
              <li>Mantenimiento web</li>
              <li>Actualizaciones de seguridad</li>
              <li>Optimización de rendimiento</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstellationSection;
