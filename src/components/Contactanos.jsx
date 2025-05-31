const contactanos = () => {
  return (
    <div className="contactanos">
      <h1>Contáctanos</h1>
      <p>Estamos aquí para ayudarte a llevar tu proyecto al siguiente nivel.</p>
      <form className="contact-form">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Número Telefónico:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="message">Describe tu necesidad:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
export default contactanos;