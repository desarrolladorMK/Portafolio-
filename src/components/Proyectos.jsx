import { useState, useEffect, useRef, memo } from "react";
import "./Proyectos.css";

const proyectos = [
  {
    titulo: "Página Web Informativa",
    descripcion:
      "Desarrollamos una plataforma informativa moderna y responsiva para la empresa Merkahorro, diseñada para brindar a los clientes una experiencia clara, rápida y visualmente atractiva. Esta página web no solo presenta la historia y los servicios de la empresa, sino que también destaca promociones activas, incluye un chatbot que responde preguntas puntuales de los usuarios y permite postularse fácilmente a oportunidades laborales. Todo el contenido fue construido con React y optimizado para navegación móvil.",
    imagen: "/pagina.webp",
    link: "https://www.merkahorro.com/",
  },
  {
    titulo: "Aula Virtual",
    descripcion:
      "Plataforma educativa desarrollada con Moodle, con una interfaz clara y sencilla que permite capacitar a los colaboradores de forma eficiente. Incluye varios cursos internos organizados por módulos, con sus respectivas evaluaciones para medir el progreso de los participantes. Al superar todos los los módulos, se genera automáticamente un certificado que valida la formación. Este sistema facilita el aprendizaje continuo y el desarrollo profesional de los colaboradores.",
    imagen: "/aula.webp",
    link: "https://merkahorro.com/Aula/",
  },
  {
    titulo: "Contratación Virtual",
    descripcion:
      "Desarrollamos un sistema integral para digitalizar y automatizar el proceso de contratación de personal. Incluye paneles de control y seguimiento por fases (postulación, entrevistas, exámenes médicos, documentación, contratación), un archivador digital para centralizar todos los documentos de los postulantes y contratados, y una interfaz clara y sencilla que facilita la gestión tanto para el área de recursos humanos como para los candidatos. Este sistema permite optimizar tiempos y mejorar la experiencia de contratación.",
    imagen: "/contratacion.webp",
    link: "",
  },
  {
    titulo: "Sitio Web Corporativo",
    descripcion:
      "Desarrollamos un sitio web corporativo para Crediplas, diseñado con un enfoque limpio, moderno y profesional para presentar sus servicios de cirugía plástica y estética. El sitio permite a los usuarios explorar los perfiles de cirujanos plásticos y sus especialidades, ver ejemplos de resultados, conocer las clínicas disponibles y acceder a un simulador de crédito. La plataforma también permite a los clientes iniciar solicitudes de crédito. Con un diseño responsivo, el sitio ofrece una experiencia de usuario clara y efectiva.",
    imagen: "/crediplasIA.webp",
    link: "https://crediplas.com/",
  },
  {
    titulo: "E-Commerce",
    descripcion:
      "Desarrollamos una plataforma de E-Commerce moderna y funcional que conecta tu negocio con el mundo digital. Diseñada con un enfoque limpio y atractivo, ofrece a los clientes una experiencia de compra intuitiva y fluida. Desde la navegación por categorías hasta la pasarela de pago segura, este proyecto combina diseño responsivo y rendimiento optimizado para adaptarse a cualquier dispositivo. Ideal para ampliar tu alcance y aumentar las ventas en línea.",
    imagen: "/tienda.webp",
    link: "",
  },
];

// Función optimizada para el movimiento del mouse
const handleCardMouseMove = (e) => {
  const card = e.currentTarget;
  // Usamos requestAnimationFrame para asegurar que el navegador pueda manejar la actualización sin problemas de rendimiento
  requestAnimationFrame(() => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  });
};

const Proyectos = () => {
  const [modal, setModal] = useState({ open: false, proyecto: null });
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  // Bloquea el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (modal.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Función de limpieza
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal.open]);

  // Intersection Observer para las animaciones de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 } // Un umbral más bajo para que la animación se active antes
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
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      cardRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []); // El array de dependencias vacío asegura que se ejecute solo una vez

  const openModal = (proyecto) => setModal({ open: true, proyecto });
  const closeModal = () => setModal({ open: false, proyecto: null });

  return (
    <div className="proyectos-section">
      <div className="stars-background"></div>
      <h1 className="section-title" ref={titleRef}>
        Proyectos
      </h1>
      <div className="proyectos-grid">
        {proyectos.map((p, i) => (
          <div
            className="proyecto-card"
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            onMouseMove={handleCardMouseMove}
          >
            <div className="proyecto-img">
              <img src={p.imagen} alt={p.titulo} loading="lazy" />
            </div>
            <div className="proyecto-info">
              <h2>{p.titulo}</h2>
              <button className="btn-ver" onClick={() => openModal(p)}>
                Ver proyecto
              </button>
            </div>
          </div>
        ))}
      </div>

      {modal.open && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <h2>{modal.proyecto.titulo}</h2>
            <div className="modal-img">
              <img src={modal.proyecto.imagen} alt={modal.proyecto.titulo} />
            </div>
            <p>{modal.proyecto.descripcion}</p>
            {modal.proyecto.link ? (
              <a
                href={modal.proyecto.link}
                className="btn-ver"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al sitio
              </a>
            ) : (
              <button className="btn-ver disabled" disabled>
                Proyecto Privado
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Proyectos);