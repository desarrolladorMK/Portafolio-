import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000); // 5 segundos

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <div className="whatsapp-container">
      {showMessage && (
        <span className="whatsapp-message animate-message">
          ¡Contáctanos ahora!
        </span>
      )}
      <a
        href="https://wa.me/521234567890"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Contáctanos por WhatsApp"
      >
        <FaWhatsapp
          size={48}
          style={{
            borderRadius: "50%",
            background: "#0a192f",
            boxShadow: "0 2px 16px #64ffda33, 0 0 40px 0 #23355444",
            border: "2px solid #64ffda",
            color: "#64ffda",
            padding: "6px",
          }}
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
