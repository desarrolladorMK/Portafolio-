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
        <div className="footer-contact" style={{ marginTop: 0, textAlign: 'right' }}>
          <a
            href="mailto:stelarcode1@gmail.com"
            className="footer-email"
            style={{
              color: "#64ffda",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: '1.05rem',
              letterSpacing: '0.5px',
              marginLeft: 16
            }}
          >
            stelarcode1@gmail.com
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
