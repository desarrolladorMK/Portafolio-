import React, { useEffect, useRef, useState } from "react";
import "./ConstellationSection.css";

const ConstellationSection = ({ constellationRef }) => {
  const [animateKey, setAnimateKey] = useState(0);
  const localRef = useRef(null);

  useEffect(() => {
    const ref = constellationRef?.current || localRef.current;
    if (!ref) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateKey((k) => k + 1); // Cambia la key para reiniciar animación
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref);
    return () => observer.unobserve(ref);
  }, [constellationRef]);

  return (
    <div
      className="constellation-section"
      ref={constellationRef || localRef}
      id="nosotros"
    >
      <h1 className="section-title">Bienvenidos a stelarCode</h1>

      <p className="intro-subtitle">
       En stelarCode, somos un equipo apasionado de desarrolladores dedicados a convertir tus ideas en realidades digitales. Con creatividad, tecnología y compromiso, transformamos tus sueños en soluciones innovadoras que brillan como estrellas en tu universo. No hay límites para lo que podemos lograr juntos: si lo imaginas, nosotros lo creamos.
      </p>

      <div className="constellation-container">
        <svg
          className="constellation-lines"
          width="900"
          height="500"
          key={animateKey}
        >
          {/* Líneas optimizadas para conectar las tarjetas */}
          <line
            className="constellation-line"
            x1="200"
            y1="100"
            x2="450"
            y2="80"
          />
          <line
            className="constellation-line"
            x1="450"
            y1="80"
            x2="700"
            y2="120"
          />
          <line
            className="constellation-line"
            x1="450"
            y1="80"
            x2="300"
            y2="300"
          />
          <line
            className="constellation-line"
            x1="450"
            y1="80"
            x2="600"
            y2="300"
          />
          <line
            className="constellation-line"
            x1="300"
            y1="300"
            x2="600"
            y2="300"
          />
          <line
            className="constellation-line"
            x1="200"
            y1="100"
            x2="300"
            y2="300"
          />
          <line
            className="constellation-line"
            x1="700"
            y1="120"
            x2="600"
            y2="300"
          />
        </svg>

        {/* Tarjetas ajustadas para mejor alineación */}
        <div className="star-node" style={{ top: "100px", left: "200px" }}>
          <div className="star-card">
            <div className="star-icon">💻</div>
            <h2>Diseño Web</h2>
            <p>Sitios únicos que brillan con identidad y claridad.</p>
          </div>
        </div>

        <div className="star-node" style={{ top: "80px", left: "450px" }}>
          <div className="star-card central-star">
            <div className="star-icon">🚀</div>
            <h2>Desarrollo Web</h2>
            <p>Código limpio y sólido que impulsa tu presencia online.</p>
          </div>
        </div>

        <div className="star-node" style={{ top: "90px", left: "700px" }}>
          <div className="star-card">
            <div className="star-icon">🔭</div>
            <h2>SEO</h2>
            <p>Alcanza nuevas alturas en los resultados de búsqueda.</p>
          </div>
        </div>

        <div className="star-node" style={{ top: "300px", left: "300px" }}>
          <div className="star-card">
            <div className="star-icon">📱</div>
            <h2>Redes Sociales</h2>
            <p>Conecta tu galaxia de seguidores con estilo y coherencia.</p>
          </div>
        </div>

        <div className="star-node" style={{ top: "300px", left: "600px" }}>
          <div className="star-card">
            <div className="star-icon">🛠️</div>
            <h2>Soporte Técnico</h2>
            <p>Mantenimiento y mejora continua de tu proyecto.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstellationSection;
