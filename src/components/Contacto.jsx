import { useState } from "react";
import "./Contacto.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    try {
      const response = await fetch(
        "http://localhost:4000/api/ClientesPortafolio",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      if (response.ok) {
        setStatus("¡Formulario enviado con éxito!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch {
      setStatus("Error al enviar el formulario");
    }
  };

  return (
    <div className="contactanos">
      {/* Estrellas flotantes decorativas */}
      <span className="star-float s1">★</span>
      <span className="star-float s2">✦</span>
      <span className="star-float s3">✧</span>
      <span className="star-float s4">★</span>
      <span className="star-float s5">✦</span>
      <h1>Contáctanos</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Número Telefónico"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Describe tu necesidad"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
