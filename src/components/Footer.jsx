import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Footer.css";

const Footer = () => {
  const logoRef = useRef(null);
  const brandRef = useRef(null);
  const copyRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    // GSAP animations for footer elements
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
    );
    gsap.fromTo(
      brandRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
    );
    gsap.fromTo(
      copyRef.current,
      { opacity: 0, y: 20 },
      { opacity: 0.8, y: 0, duration: 0.8, ease: "power2.out", delay: 0.4 }
    );
    gsap.fromTo(
      emailRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.6 }
    );
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            ref={logoRef}
            src="/logoDV.png"
            alt="stelarCode Logo"
            className="footer-logo-img"
            loading="lazy"
            onMouseEnter={() =>
              gsap.to(logoRef.current, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out",
              })
            }
            onMouseLeave={() =>
              gsap.to(logoRef.current, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              })
            }
          />
          <span ref={brandRef} className="footer-brand">
            stelarCode
          </span>
        </div>
        <div className="footer-right">
          <span ref={copyRef} className="footer-copy">
            © {new Date().getFullYear()} stelarCode. Todos los derechos
            reservados.
          </span>
          <div className="footer-contact" style={{ marginTop: 0, textAlign: 'right' }}>
            <a
              ref={emailRef}
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
              onMouseEnter={() =>
                gsap.to(emailRef.current, {
                  color: "#aaf0df",
                  scale: 1.05,
                  duration: 0.3,
                  ease: "power2.out",
                })
              }
              onMouseLeave={() =>
                gsap.to(emailRef.current, {
                  color: "#64ffda",
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out",
                })
              }
            >
              stelarcode1@gmail.comm
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;