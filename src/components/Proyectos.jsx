import { useState } from 'react';
import './Proyectos.css';

const proyectos = [
  {
    titulo: 'Página Web Informativa',
    descripcion:
      'Desarrollamos una plataforma informativa moderna y responsiva para la empresa Merkahorro, diseñada para brindar a los clientes una experiencia clara, rápida y visualmente atractiva. Esta página web no solo presenta la historia y los servicios de la empresa, sino que también destaca promociones activas, incluye un chatbot que responde preguntas puntuales de los usuarios y permite postularse fácilmente a oportunidades laborales. Todo el contenido fue construido con React y optimizado para navegación móvil.',
    imagen: '/public/pagina.png',
    link: 'https://www.merkahorro.com/',
  },
  {
    titulo: 'Aula Virtual',
    descripcion:
      'Plataforma educativa desarrollada con Moodle, con una interfaz clara y sencilla que permite capacitar a los colaboradores de forma eficiente. Incluye varios cursos internos organizados por módulos, con sus respectivas evaluaciones para medir el progreso de los participantes. Al superar todos los módulos, se genera automáticamente un certificado que valida la formación. Este sistema facilita el aprendizaje continuo y el desarrollo profesional de los colaboradores.',
    imagen: '/public/aula.png',
    link: 'https://merkahorro.com/Aula/',
  },
  {
    titulo: 'Contratación Virtual',
    descripcion:
      'Desarrollamos un sistema integral para digitalizar y automatizar el proceso de contratación de personal. Incluye paneles de control y seguimiento por fases (postulación, entrevistas, exámenes médicos, documentación, contratación), un archivador digital para centralizar todos los documentos de los postulantes y contratados, y una interfaz clara y sencilla que facilita la gestión tanto para el área de recursos humanos como para los candidatos. Este sistema permite optimizar tiempos y mejorar la experiencia de contratación.',
    imagen: '/public/contratacion.png',
    link: '',
  },
  {
    titulo: 'Sitio Web Corporativo',
    descripcion:
      'Desarrollamos un sitio web corporativo para Crediplas, diseñado con un enfoque limpio, moderno y profesional para presentar sus servicios de cirugía plástica y estética. El sitio permite a los usuarios explorar los perfiles de cirujanos plásticos y sus especialidades (como cirugía bariátrica, odontología, implantes capilares, medicina estética, etc.), ver ejemplos de resultados, conocer las clínicas disponibles y acceder a un simulador de crédito para facilitar la financiación de procedimientos. La plataforma también permite a los clientes iniciar solicitudes de tarjetas de crédito y explorar suministros hospitalarios. Con un diseño responsivo y fluido, el sitio ofrece una experiencia de usuario clara y efectiva en todos los dispositivos.',
    imagen: '/public/crediplas.png',
    link: 'https://crediplas.com/',
  },
];

const logosEmpresas = [
  { nombre: 'Merkahorro', imagen: '/public/mkicono.webp' },
  { nombre: 'Crediplas', imagen: '/public/crediplas.webp' },
];

const Proyectos = () => {
  const [modalProyecto, setModalProyecto] = useState(null);

  return (
    <div className="proyectos-section">
      {/* Título principal */}
      <h1 className="proyectos-title">Portafolio de Proyectos</h1>

      {/* Grid de proyectos */}
      <div className="proyectos-grid">
        {proyectos.map((p, i) => (
          <div className="proyecto-card" key={i}>
            <div className="proyecto-img">
              <img src={p.imagen} alt={p.titulo} />
            </div>
            <div className="proyecto-info">
              <h2>{p.titulo}</h2>
              <button className="btn-ver" onClick={() => setModalProyecto(p)}>
                Ver proyecto
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para detalles del proyecto */}
      {modalProyecto && (
        <div className="modal-overlay" onClick={() => setModalProyecto(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalProyecto(null)}>
              ✕
            </button>
            <h2>{modalProyecto.titulo}</h2>
            <div className="modal-img">
              <img src={modalProyecto.imagen} alt={modalProyecto.titulo} />
            </div>
            <p>{modalProyecto.descripcion}</p>
            {modalProyecto.link && (
              <a
                href={modalProyecto.link}
                target="_blank"
                rel="noreferrer"
                className="btn-ver"
              >
                Ir al sitio
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Proyectos