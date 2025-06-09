import "./Clientes.css";

// Ejemplo de datos, reemplaza con tus logos reales y nombres
const clientes = [
  {
    logo: "/icono pagina.webp",
    url: "https://merkahorro.com"
  },
  {
    
    logo: "/credi.jpg",
    url: "https://crediplas.com"
  },
 

];

const Clientes = () => {
  return (
    <div className="clientes-section">
      <h1 className="section-title"  >Nuestros Clientes</h1>
      <p>
        Estos son algunos de los proyectos y empresas que han confiado en nosotros para desarrollar sus soluciones tecnológicas.
      </p>
      <div className="clientes-grid">
        {clientes.map((cliente, idx) => (
          <a
            key={idx}
            href={cliente.url}
            className="cliente-card"
            target="_blank"
            rel="noopener noreferrer"
            title={cliente.nombre}
          >
            <img src={cliente.logo} alt={cliente.nombre} className="cliente-logo" />
            <span className="cliente-nombre">{cliente.nombre}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Clientes;