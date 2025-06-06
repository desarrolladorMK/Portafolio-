import { useState, useEffect, useRef } from 'react';
import './ServiciosCarousel.css';

const servicios = [
  {
    id: 'software',
    nombre: 'Software Personalizado',
    icono: '🧠',
    descripcion:
      'Transforma tus ideas en soluciones digitales únicas y potentes. Creamos software personalizado que se adapta a las necesidades de tu negocio, con interfaces intuitivas y tecnología robusta para mejorar tu productividad, agilizar procesos y brindarte un control total.',
    imagen: '/public/software.png',
  },
  {
    id: 'automatizacion',
    nombre: 'Automatización',
    icono: '⚙️',
    descripcion:
      'Lleva tus procesos internos al siguiente nivel. Diseñamos e implementamos sistemas de automatización que eliminan tareas repetitivas, reducen errores y aumentan la eficiencia de tu equipo. Con paneles administrativos personalizados, tendrás una visión clara y control total de tus operaciones.',
    imagen: '/public/automatizacion.png',
  },
  {
    id: 'seo',
    nombre: 'Optimización SEO',
    icono: '📈',
    descripcion:
      'Haz que te encuentren justo cuando más te necesitan. Con estrategias SEO efectivas y a medida, mejoramos la visibilidad de tu negocio en Google, posicionándote en los primeros resultados y atrayendo más visitantes que se convierten en clientes reales.',
    imagen: '/public/seo.png',
  },
];


const ServiciosCarousel = () => {
  const [activoIndex, setActivoIndex] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Configuración del IntersectionObserver para detectar visibilidad
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.unobserve(entry.target); // Deja de observar una vez que se activa
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const handleTabClick = (index) => {
    setActivoIndex(index);
  };

  return (
    <section
      className={`carousel-servicios ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
      id="servicios"
      aria-label="Carrusel de servicios"
    >
      {/* Título principal */}
      <h1 className="carousel-title">Nuestros Servicios</h1>

      {/* Navegación con rombos */}
      <nav className="tabs-diamantes" aria-label="Navegación de servicios">
        {servicios.map((servicio, index) => (
          <button
            key={servicio.id}
            className={`tab-diamante ${activoIndex === index ? 'activo' : ''}`}
            onClick={() => handleTabClick(index)}
            aria-label={`Seleccionar servicio: ${servicio.nombre}`}
            aria-current={activoIndex === index ? 'true' : 'false'}
          >
            <div className="icono-rombo">
              <div className="rombo">
                <span className="icono">{servicio.icono}</span>
              </div>
              {activoIndex === index && <div className="flecha-rombo" />}
            </div>
            <span className="nombre-tab">{servicio.nombre}</span>
          </button>
        ))}
      </nav>

      {/* Contenido del carrusel */}
      <div className="carousel-contenido">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${activoIndex * 100}%)` }}
          role="region"
          aria-live="polite"
        >
          {servicios.map((servicio, index) => (
            <article
              key={servicio.id}
              className="carousel-panel"
              aria-hidden={activoIndex !== index}
            >
              <div className="carousel-content">
                <div className="carousel-texto">
                  <h2>{servicio.nombre}</h2>
                  <p>{servicio.descripcion}</p>
                </div>
                <div className="carousel-img">
                  <img
                    src={servicio.imagen}
                    alt={`Ilustración del servicio: ${servicio.nombre}`}
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosCarousel;