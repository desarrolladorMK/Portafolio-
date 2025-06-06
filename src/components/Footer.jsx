import { useEffect, useRef } from 'react';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);

  // Configuración del IntersectionObserver para animaciones al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible'); // Permite que la animación se repita
          }
        });
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/public/logoDV.png" alt="stelarCode Logo" loading="lazy" />
        </div>
        <h1 className="footer-text">
          stelarCode © {new Date().getFullYear()}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;