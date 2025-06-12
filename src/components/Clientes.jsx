import "./Clientes.css";

// Mejora: agrega nombres y estilos más acordes a tu branding
const clientes = [
  {
    logo: "/icono pagina.webp",
    url: "https://merkahorro.com",
    nombre: "Merkahorro",
  },
  {
    logo: "/credi.jpg",
    url: "https://crediplas.com",
    nombre: "Crediplas",
  },
];

const Clientes = () => {
  return (
    <section className="clientes-section" id="clientes">
      <h1 className="section-title">Nuestros Clientes</h1>
      <p>
        Estos son algunos de los proyectos y empresas que han confiado en
        nosotros para desarrollar sus soluciones tecnológicas.
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
            <div className="cliente-logo-wrapper no-bg">
              <img
                src={cliente.logo}
                alt={cliente.nombre}
                className="cliente-logo"
              />
            </div>
            <span className="cliente-nombre">{cliente.nombre}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Clientes;
