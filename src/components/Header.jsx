import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrollY = window.scrollY;
        const brightness = Math.max(1 - scrollY / 500, 0);
        bannerRef.current.style.filter = `brightness(${brightness})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      {/* Banner con efecto de oscurecimiento */}
      <div
        ref={bannerRef}
        className="banner"
        style={{
          backgroundImage: `url(/banner.jpg)`, // Imagen desde public/
        }}
      >
        {/* Contenido del banner */}
        <div className="banner-content">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src="/logoDV.png" alt="StarDevs Logo" className="logo-img" />
            </Link>
          </div>

          {/* Ícono de menú hamburguesa */}
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Texto principal */}
          <div className="banner-text">
            <h1 className="banner-title">STARDEVS</h1>
            <p className="banner-subtitle">
              Soluciones de Software y Consultoría Especializada
            </p>
          </div>

          {/* Botones laterales */}
          <nav className="sidebar-nav">
            <a href="#nosotros" className="sidebar-link">
              <span className="dot">•</span> Nosotros
            </a>
            <a href="#servicios" className="sidebar-link">
              <span className="dot">•</span> Servicios
            </a>
            <a href="#contactanos" className="sidebar-link">
              <span className="dot">•</span> Contáctanos
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;