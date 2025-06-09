import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const bannerRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");
  const [showFixedNav, setShowFixedNav] = useState(false);
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    // Elimina la lógica de scroll para el banner y solo muestra el fixed-nav cuando el scrollY > 100
    const handleScroll = () => {
      setShowFixedNav(window.scrollY > 100);
      // Si quieres mantener el efecto de opacidad, puedes dejarlo, pero si quieres máxima fluidez, elimínalo:
      // setOpacity(1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className={`fixed-nav ${showFixedNav ? "visible" : ""}`}>
        <div className="nav-content">
          <a href="/" className="nav-logo">
            stelarCode
          </a>
          <div className="nav-links">
            <a
              href="#nosotros"
              className={activeSection === "nosotros" ? "active" : ""}
            >
              Nosotros
            </a>
            <a
              href="#servicios"
              className={activeSection === "servicios" ? "active" : ""}
            >
              Servicios
            </a>
            <a
              href="#proyectos"
              className={activeSection === "proyectos" ? "active" : ""}
            >
              Proyectos
            </a>
            <a
              href="#contactanos"
              className={activeSection === "contactanos" ? "active" : ""}
            >
              Contáctanos
            </a>
          </div>
        </div>
      </nav>
      <div ref={bannerRef} className="banner">
        <div className="banner-content">
          <div className="logo">
            <Link to="/">
              <img
                src="/logoDV.png"
                alt="stelarCode Logo"
                className="logo-img"
              />
            </Link>
          </div>

          <div className="banner-text">
            <h1 className="banner-title">stelarCode</h1>
            <p className="banner-subtitle">
              Soluciones de Software y Consultoría Especializada
            </p>
          </div>

          <nav className="sidebar-nav">
            <a
              href="#nosotros"
              className={`sidebar-link ${
                activeSection === "nosotros" ? "active" : ""
              }`}
            >
              <span className="dot">•</span> Nosotros
            </a>
            <a
              href="#servicios"
              className={`sidebar-link ${
                activeSection === "servicios" ? "active" : ""
              }`}
            >
              <span className="dot">•</span> Servicios
            </a>
            <a
              href="#proyectos"
              className={`sidebar-link ${
                activeSection === "proyectos" ? "active" : ""
              }`}
            >
              <span className="dot">•</span> Proyectos
            </a>
            <a
              href="#contactanos"
              className={`sidebar-link ${
                activeSection === "contactanos" ? "active" : ""
              }`}
            >
              <span className="dot">•</span> Contáctanos
            </a>
          </nav>
        </div>
        <div className="banner-fade"></div>
      </div>
    </header>
  );
};

export default Header;
