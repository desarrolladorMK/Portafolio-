import { useState, useEffect, useRef } from 'react';
import './ServiciosCarousel.css';

// El array de servicios no cambia, así que lo dejamos igual.
const servicios = [
  {
    id: 'software',
    nombre: 'Software Personalizado',
    icono: '🧠',
    descripcion:
      'Transforma tus ideas en soluciones digitales únicas y potentes. Creamos software personalizado que se adapta a las necesidades de tu negocio, con interfaces intuitivas y tecnología robusta para mejorar tu productividad, agilizar procesos y brindarte un control total.',
    imagen: '/software.png',
  },
  {
    id: 'automatizacion',
    nombre: 'Automatización',
    icono: '⚙️',
    descripcion:
      'Lleva tus procesos internos al siguiente nivel. Diseñamos e implementamos sistemas de automatización que eliminan tareas repetitivas, reducen errores y aumentan la eficiencia de tu equipo. Con paneles administrativos personalizados, tendrás una visión clara y control total de tus operaciones.',
    imagen: '/automatizacion.png',
  },
  {
    id: 'marketing',
    nombre: 'Marketing Digital',
    icono: '🚀',
    descripcion:
      'Impulsa la visibilidad de tu negocio con estrategias de marketing digital efectivas y personalizadas. Creamos campañas impactantes que conectan con tu audiencia, optimizamos tu presencia en redes sociales y utilizamos análisis de datos para maximizar tus resultados. Desde el posicionamiento de tu marca hasta la conversión de leads, llevamos tu negocio al siguiente nivel con creatividad e innovación.',
    imagen: '/marketing.png',
  },
  {
    id: 'seo',
    nombre: 'Optimización SEO',
    icono: '📈',
    descripcion:
      'Haz que te encuentren justo cuando más te necesitan. Con estrategias SEO efectivas y a medida, mejoramos la visibilidad de tu negocio en Google, posicionándote en los primeros resultados y atrayendo más visitantes que se convierten en clientes reales.',
    imagen: '/seo.png',
  },
];


const ServiciosCarousel = () => {
  const [activoIndex, setActivoIndex] = useState(0);
  const sectionRef = useRef(null); // Usaremos este para el observer

  // ✅ useEffect simplificado: Solo se ejecuta una vez al montar el componente.
  useEffect(() => {
    // Si el elemento no existe, no hacemos nada.
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Añade 'visible' a todos los hijos que necesitan animarse a la vez
            entry.target.querySelectorAll('.animate-on-scroll').forEach(el => {
              el.classList.add('visible');
            });
            // Una vez visible, ya no necesitamos observar.
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 } // Un umbral más bajo para que se active antes
    );

    observer.observe(sectionRef.current);

    // Función de limpieza
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // El array vacío [] asegura que esto solo se ejecute al montar y desmontar.

  const handleTabClick = (index) => {
    setActivoIndex(index);
  };

  return (
    <section
      className="carousel-servicios"
      ref={sectionRef}
      id="servicios"
      aria-label="Carrusel de servicios"
    >
      <h1 className="section-title animate-on-scroll">
        Nuestros Servicios
      </h1>

      <nav
        className="tabs-diamantes animate-on-scroll"
        aria-label="Navegación de servicios"
      >
        {servicios.map((servicio, index) => (
          <button
            key={servicio.id}
            className={`tab-diamante ${activoIndex === index ? 'activo' : ''}`}
            onClick={() => handleTabClick(index)}
            aria-label={`Seleccionar servicio: ${servicio.nombre}`}
            aria-current={activoIndex === index}
          >
            <div className="icono-rombo">
              <div className="rombo">
                <span className="icono">{servicio.icono}</span>
              </div>
              <div className="flecha-rombo" />
            </div>
            <span className="nombre-tab">{servicio.nombre}</span>
          </button>
        ))}
      </nav>

      <div className="carousel-contenido animate-on-scroll">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${activoIndex * 100}%)` }}
        >
          {servicios.map((servicio, index) => (
            <article
              key={servicio.id}
              // 👇 AÑADE ESTA LÍNEA. Es el único cambio necesario en el JSX.
              className={`carousel-panel ${activoIndex === index ? 'activo' : ''}`}
              aria-hidden={activoIndex !== index}
            >
              <div className="panel-content">
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