import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <img
          src="/public/logoDV.png"
          alt="stelarCode Logo"
          className="footer-logo-img"
          loading="lazy"
        />
        <span className="footer-brand">stelarCode</span>
      </div>
      <div className="footer-right">
        <span className="footer-copy">
          &copy; {new Date().getFullYear()} stelarCode. Todos los derechos
          reservados.
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
