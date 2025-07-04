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
import WhatsAppButton from "../components/WhatsappButton";

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
      if (constellationRef.current) observer.unobserve(constellationRef.current);
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

      {/* Habilidades y Tecnologías */}
      <SkillsSection />

      {/* Contactanos */}
      <div id="contactanos">
        <Contactanos />
      </div>

      {/* Clientes */}
      <div id="clientes">
        <Clientes />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;