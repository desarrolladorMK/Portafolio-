import { Link } from 'react-router-dom';
import "./Header.css"; // Importa el archivo CSS para estilos

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img 
            src="/logo.jpg" 
            alt="StarDevs Logo" 
            className="logo-img"  
          />
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="nav">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/nosotros" className="nav-link">Nosotros</Link>
        <Link to="/servicios" className="nav-link">Servicios</Link>
        <Link to="/contactanos" className="nav-link">Contáctanos</Link>
      </nav>
    </header>
  );
};

export default Header;