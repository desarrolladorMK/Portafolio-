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
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    // Validación simple de correo electrónico
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    // Solo números, de 7 a 15 dígitos
    return /^[0-9]{7,15}$/.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Restricciones de longitud
    if (name === "name" && value.length > 70) return;
    if (name === "message" && value.length > 500) return;
    if (name === "phone" && !/^[0-9]*$/.test(value)) return; // Solo números

    setFormData({ ...formData, [name]: value });

    // Validaciones en tiempo real
    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value) ? "" : "Correo electrónico inválido",
      }));
    }
    if (name === "phone") {
      setErrors((prev) => ({
        ...prev,
        phone: validatePhone(value) || value === "" ? "" : "Número inválido",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validaciones finales antes de enviar
    let valid = true;
    let newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Correo electrónico inválido";
      valid = false;
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Número telefónico inválido";
      valid = false;
    }
    if (formData.name.length > 70) {
      newErrors.name = "Máximo 70 caracteres";
      valid = false;
    }
    if (formData.message.length > 500) {
      newErrors.message = "Máximo 500 caracteres";
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    setStatus("Enviando...");
    try {
      const response = await fetch(
        "https://backend-stelar-code.vercel.app/api/ClientesPortafolio",
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
          maxLength={70}
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          type="tel"
          name="phone"
          placeholder="Número Telefónico"
          value={formData.phone}
          onChange={handleChange}
          maxLength={15}
          required
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
        <textarea
          name="message"
          placeholder="Describe tu necesidad"
          value={formData.message}
          onChange={handleChange}
          maxLength={500}
          required
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
        <button type="submit">Enviar</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
