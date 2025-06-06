import { useState } from 'react';
import './Contacto.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await fetch(' http://localhost:4000/api/ClientesPortafolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('¡Formulario enviado con éxito!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      setStatus('Error al enviar el formulario');
    }
  };

  return (
    <div className="contactanos">
      <h1>Contáctanos</h1>
      <p>Estamos aquí para ayudarte a llevar tu proyecto al siguiente nivel.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Número Telefónico:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Describe tu necesidad:</label>
        <textarea
          id="message"
          name="message"
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