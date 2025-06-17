import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const bannerRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");
  const [showFixedNav, setShowFixedNav] = useState(false);
  const [opacity, setOpacity] = useState(0.3);
  const [showShootingStar, setShowShootingStar] = useState(false); // Nuevo estado

  useEffect(() => {
    let scrollTimeout;
    let isScrolling = false;

    const handleSmoothScroll = (e) => {
      if (e.target.classList.contains("sidebar-link")) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        setActiveSection(targetId);
        isScrolling = true;
        targetElement.scrollIntoView({ behavior: "smooth" });

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    };

    const handleScroll = () => {
      if (isScrolling) return;

      const bannerHeight = bannerRef.current?.offsetHeight || 0;
      setShowFixedNav(window.scrollY > bannerHeight * 0.8);

      const sections = ["nosotros", "servicios", "proyectos", "contactanos"];
      let found = "";
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top < window.innerHeight * 0.5 &&
            rect.bottom > window.innerHeight * 0.2
          ) {
            found = section;
            break;
          }
        }
      }
      setActiveSection(found || "");
    };

    document.addEventListener("click", handleSmoothScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Función para manejar el clic en el logo y mostrar la estrella fugaz
  const handleLogoClick = () => {
    setShowShootingStar(true);
    // Ocultar la estrella después de un tiempo para que la animación se complete
    setTimeout(() => {
      setShowShootingStar(false);
    }, 1500); // Duración de la animación en CSS
  };

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

      <div
        ref={bannerRef}
        className="banner"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        }}
      >
        {/* Fondo de estrellas animadas */}
        <div className="header-stars-bg"></div>
        <div className="banner-content">
          <div className="logo" onClick={handleLogoClick}> {/* Agregamos onClick aquí */}
            <Link to="/">
              <img
                src="/logoDV.png"
                alt="stelarCode Logo"
                className="logo-img"
              />
            </Link>
            {showShootingStar && <div className="shooting-star"></div>} {/* La estrella fugaz */}
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