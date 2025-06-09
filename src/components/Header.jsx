import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const bannerRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");
  const [showFixedNav, setShowFixedNav] = useState(false);
  const [opacity, setOpacity] = useState(0.3);

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

      const scrollY = window.scrollY;
      const maxScroll = bannerHeight;
      const newOpacity = Math.min(1, 0.3 + (scrollY / maxScroll) * 0.7);
      setOpacity(newOpacity);

      const sections = ["nosotros", "servicios", "contactanos"];
      const viewportHeight = window.innerHeight;
      const buffer = viewportHeight * 0.3;

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          return (
            elementCenter > buffer && elementCenter < viewportHeight - buffer
          );
        }
        return false;
      });

      setActiveSection(current || "");
    };

    document.addEventListener("click", handleSmoothScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
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

      <div
        ref={bannerRef}
        className="banner"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        }}
      >
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
