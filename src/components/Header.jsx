import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const bannerRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");
  const [showFixedNav, setShowFixedNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFixedNav(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <header className="header">
      <nav className={`fixed-nav ${showFixedNav ? "visible" : ""}`}>
        <div className="nav-content">
          <a href="/" className="nav-logo">
            stelarCode
          </a>
          <div className="nav-links nav-links-horizontal">
            <a
              href="#nosotros"
              className={activeSection === "nosotros" ? "active" : ""}
              onClick={() => handleNavClick("nosotros")}
            >
              Nosotros
            </a>
            <a
              href="#servicios"
              className={activeSection === "servicios" ? "active" : ""}
              onClick={() => handleNavClick("servicios")}
            >
              Servicios
            </a>
            <a
              href="#proyectos"
              className={activeSection === "proyectos" ? "active" : ""}
              onClick={() => handleNavClick("proyectos")}
            >
              Proyectos
            </a>
            <a
              href="#contactanos"
              className={activeSection === "contactanos" ? "active" : ""}
              onClick={() => handleNavClick("contactanos")}
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
        </div>
        <div className="banner-fade"></div>
      </div>
    </header>
  );
};

export default Header;
