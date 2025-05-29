import { useState, useEffect, useRef } from 'react';
import './ServiciosCarousel.css';

const servicios = [
  {
    id: 'software',
    nombre: 'Software Personalizado',
    icono: '🧠',
    descripcion: 'Aumenta la productividad con soluciones a medida. Interfaces intuitivas y desarrollo flexible.',
    imagen: '/public/software.png',
  },
  {
    id: 'automatizacion',
    nombre: 'Automatización',
    icono: '⚙️',
    descripcion: 'Optimiza operaciones con sistemas inteligentes y paneles personalizados.',
    imagen: '/public/automatizacion.png',
  },
  {
    id: 'seo',
    nombre: 'Optimización SEO',
    icono: '📈',
    descripcion: 'Mejora tu ranking en Google con estrategias efectivas.',
    imagen: '/public/seo.png',
  },
];

const ServiciosCarousel = () => {
  const [activoIndex, setActivoIndex] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
    >
      {/* Título principal */}
      <h1 className="carousel-title">Servicios</h1>

      {/* Navegación con rombos */}
      <div className="tabs-diamantes">
        {servicios.map((servicio, index) => (
          <button
            key={servicio.id}
            className={`tab-diamante ${activoIndex === index ? 'activo' : ''}`}
            onClick={() => handleTabClick(index)}
            aria-label={`Seleccionar servicio: ${servicio.nombre}`}
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
      </div>

      {/* Contenido del carrusel */}
      <div className="carousel-contenido">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${activoIndex * 100}%)` }}
        >
          {servicios.map((servicio, index) => (
            <div 
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosCarousel;