import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiciosCarousel from "../components/ServiciosCarousel";
import Proyectos from "../components/Proyectos";
import Contactanos from "../components/Contacto";
import Clientes from "../components/Clientes";
import { useEffect, useRef } from "react";
import "./Home.css";
import ConstellationSection from "../components/ConstellationSection";
import SkillsSection from "../components/SkillsSection";

const Home = () => {
  const constellationRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (constellationRef.current) observer.observe(constellationRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (constellationRef.current)
        observer.unobserve(constellationRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <div>
      <Header />
      <ConstellationSection constellationRef={constellationRef} />

      {/* Servicios tipo carrusel */}
      <div id="servicios">
        <ServiciosCarousel />
      </div>

      {/* Proyectos */}
      <div id="proyectos">
        <Proyectos />
      </div>
      {/* Clientes */}
      <div id="clientes">
        <Clientes />
      </div>


      {/* Habilidades y Tecnologías */}
      <SkillsSection /><br />

      {/* Contactanos */}
      <div id="contactanos">
        <Contactanos />
      </div>

      <Footer />

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/521234567890"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Contáctanos por WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: 48, height: 48, display: "block" }}
        />
        <span className="whatsapp-label">¡Escríbenos!</span>
      </a>
    </div>
  );
};

export default Home;
