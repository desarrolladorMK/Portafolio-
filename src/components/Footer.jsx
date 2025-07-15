import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Footer.css";

const Footer = () => {
  const logoRef = useRef(null);
  const brandRef = useRef(null);
  const copyRef = useRef(null);
  const emailRef = useRef(null);
  const dataRef = useRef(null);
  const canvasRef = useRef(null);

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
    gsap.fromTo(
      dataRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.8 }
    );

    // Canvas for starry background
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.offsetHeight;
      stars = [];
      for (let i = 0; i < 50; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random(),
        });
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        star.opacity += Math.random() * 0.05 - 0.025;
        if (star.opacity > 1) star.opacity = 1;
        if (star.opacity < 0) star.opacity = 0;
      });
      requestAnimationFrame(animateStars);
    };
    animateStars();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <footer className="footer">
      <canvas ref={canvasRef} className="footer-canvas" />
      <div className="footer-content">
        <div className="footer-left">
          <img
            ref={logoRef}
            src="/logoDV.webp"
            alt="stelarCode Logo"
            className="footer-logo-img"
            loading="lazy"
            onMouseEnter={() =>
              gsap.to(logoRef.current, {
                scale: 1.1,
                filter: "drop-shadow(0 0 8px rgba(100, 255, 218, 0.7))",
                duration: 0.3,
                ease: "power2.out",
              })
            }
            onMouseLeave={() =>
              gsap.to(logoRef.current, {
                scale: 1,
                filter: "none",
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
          <div className="footer-contact">
            <a
              ref={emailRef}
              href="mailto:stelarcode1@gmail.com"
              className="footer-email"
              aria-label="Enviar correo electrónico a stelarCode"
              onTouchStart={() =>
                gsap.to(emailRef.current, {
                  color: "#aaf0df",
                  scale: 1.05,
                  filter: "drop-shadow(0 0 5px rgba(100, 255, 218, 0.5))",
                  duration: 0.3,
                  ease: "power2.out",
                })
              }
              onTouchEnd={() =>
                gsap.to(emailRef.current, {
                  color: "#64ffda",
                  scale: 1,
                  filter: "none",
                  duration: 0.3,
                  ease: "power2.out",
                })
              }
            >
              stelarcode1@gmail.com
            </a>
            <a
              ref={dataRef}
              href="/politicas"
              className="footer-data"
              aria-label="Ver Política de Privacidad"
              onTouchStart={() =>
                gsap.to(dataRef.current, {
                  color: "#aaf0df",
                  scale: 1.05,
                  filter: "drop-shadow(0 0 5px rgba(100, 255, 218, 0.5))",
                  duration: 0.3,
                  ease: "power2.out",
                })
              }
              onTouchEnd={() =>
                gsap.to(dataRef.current, {
                  color: "#64ffda",
                  scale: 1,
                  filter: "none",
                  duration: 0.3,
                  ease: "power2.out",
                })
              }
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;