import { useState, useEffect, useRef } from "react";
import "./Proyectos.css";

const proyectos = [
  {
    titulo: "Página Web Informativa",
    descripcion:
      "Desarrollamos una plataforma informativa moderna y responsiva para la empresa Merkahorro, diseñada para brindar a los clientes una experiencia clara, rápida y visualmente atractiva. Esta página web no solo presenta la historia y los servicios de la empresa, sino que también destaca promociones activas, incluye un chatbot que responde preguntas puntuales de los usuarios y permite postularse fácilmente a oportunidades laborales. Todo el contenido fue construido con React y optimizado para navegación móvil.",
    imagen: "/pagina.png",
    link: "https://www.merkahorro.com/",
  },
  {
    titulo: "Aula Virtual",
    descripcion:
      "Plataforma educativa desarrollada con Moodle, con una interfaz clara y sencilla que permite capacitar a los colaboradores de forma eficiente. Incluye varios cursos internos organizados por módulos, con sus respectivas evaluaciones para medir el progreso de los participantes. Al superar todos los módulos, se genera automáticamente un certificado que valida la formación. Este sistema facilita el aprendizaje continuo y el desarrollo profesional de los colaboradores.",
    imagen: "/aula.png",
    link: "https://merkahorro.com/Aula/",
  },
  {
    titulo: "Contratación Virtual",
    descripcion:
      "Desarrollamos un sistema integral para digitalizar y automatizar el proceso de contratación de personal. Incluye paneles de control y seguimiento por fases (postulación, entrevistas, exámenes médicos, documentación, contratación), un archivador digital para centralizar todos los documentos de los postulantes y contratados, y una interfaz clara y sencilla que facilita la gestión tanto para el área de recursos humanos como para los candidatos. Este sistema permite optimizar tiempos y mejorar la experiencia de contratación.",
    imagen: "/contratacion.png",
    link: "",
  },
  {
    titulo: "Sitio Web Corporativo",
    descripcion:
      "Desarrollamos un sitio web corporativo para Crediplas, diseñado con un enfoque limpio, moderno y profesional para presentar sus servicios de cirugía plástica y estética. El sitio permite a los usuarios explorar los perfiles de cirujanos plásticos y sus especialidades (como cirugía bariátrica, odontología, implantes capilares, medicina estética, etc.), ver ejemplos de resultados, conocer las clínicas disponibles y acceder a un simulador de crédito para facilitar la financiación de procedimientos. La plataforma también permite a los clientes iniciar solicitudes de tarjetas de crédito y explorar suministros hospitalarios. Con un diseño responsivo y fluido, el sitio ofrece una experiencia de usuario clara y efectiva en todos los dispositivos.",
    imagen: "/crediplas.png",
    link: "https://crediplas.com/",
  },
  {
    titulo: "E-Commerce ",
    descripcion:
      "Desarrollamos una plataforma de E-Commerce moderna y funcional que conecta tu negocio con el mundo digital. Diseñada con un enfoque limpio y atractivo, ofrece a los clientes una experiencia de compra intuitiva y fluida. Desde la navegación por categorías hasta la pasarela de pago segura, este proyecto combina diseño responsivo y rendimiento optimizado para adaptarse a cualquier dispositivo. Ideal para ampliar tu alcance y aumentar las ventas en línea de manera confiable y escalable.",
    imagen: "/tienda.png",
    link: "",
  },
];

const logosEmpresas = [
  {
    nombre: "Empresa 1",
    imagen: "/mkicono.webp",
  },
  {
    nombre: "Empresa 2",
    imagen: "/logo2.png",
  },
  {
    nombre: "Empresa 3",
    imagen: "/logo3.png",
  },
  {
    nombre: "Empresa 4",
    imagen: "/logo4.png",
  },
];

function handleCardMouseMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  card.style.setProperty("--mouse-x", `${x}%`);
  card.style.setProperty("--mouse-y", `${y}%`);
}

const Proyectos = () => {
  const [modal, setModal] = useState({ open: false, proyecto: null });
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  // Bloquea el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (modal.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);

  useEffect(() => {
    const options = { threshold: 0.3 };
    let observer;

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.classList.contains("section-title")) {
          entry.target.classList.toggle("active", entry.isIntersecting);
        } else if (entry.target.classList.contains("proyecto-card")) {
          const idx = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              prev.includes(idx) ? prev : [...prev, idx]
            );
          } else {
            setVisibleCards((prev) => prev.filter((i) => i !== idx));
          }
        }
      });
    };

    observer = new window.IntersectionObserver(handleIntersect, options);

    if (titleRef.current) observer.observe(titleRef.current);
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const openModal = (proyecto) => setModal({ open: true, proyecto });
  const closeModal = () => setModal({ open: false, proyecto: null });

  return (
    <div className="proyectos-section" ref={sectionRef}>
      <div className="stars-background"></div>
      <h1 className="section-title" ref={titleRef}>
        Proyectos
      </h1>
      <div className="proyectos-grid">
        {proyectos.map((p, i) => (
          <div
            className={`proyecto-card${
              visibleCards.includes(i) ? " active" : ""
            }`}
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            data-index={i}
            onMouseMove={handleCardMouseMove}
            onMouseEnter={(e) => e.currentTarget.classList.add("is-hovered")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("is-hovered")}
          >
            <div className="proyecto-img">
              <img src={p.imagen} alt={p.titulo} />
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
            style={{ maxHeight: "90vh", overflowY: "auto" }}
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
                style={{ display: "block", marginTop: 12 }}
              >
                Ir al sitio
              </a>
            ) : (
              <button
                className="btn-ver disabled"
                disabled
                style={{ display: "block", marginTop: 12 }}
              >
                Proyecto Privado
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Proyectos;
