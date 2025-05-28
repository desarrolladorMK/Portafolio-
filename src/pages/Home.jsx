import { useEffect, useRef } from 'react';
import '../index.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrollY = window.scrollY;
        // Ajusta el valor 500 para controlar la velocidad del oscurecimiento
        const brightness = Math.max(1 - scrollY / 500, 0);
        bannerRef.current.style.filter = `brightness(${brightness})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <div
        ref={bannerRef}
        className="banner"
      >
      </div>
      <div className="content">
        <p>Welcome to the home page!</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;