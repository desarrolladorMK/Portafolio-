
import React from 'react';
import './Politicas.css';

const Politicas = () => {
  return (
    <div className="politicas-container">
      <h1 className="politicas-title">Política de Tratamiento de Datos Personales</h1>
      
      <section className="politicas-section">
        <h2 className="section-title">1. Introducción</h2>
        <p className="section-text">
          En <strong>STELARCODE</strong>, nos comprometemos a proteger la privacidad y los datos personales de nuestros usuarios. Esta Política de Tratamiento de Datos Personales describe cómo recopilamos, usamos, almacenamos y protegemos la información personal que nos proporcionas a través de nuestro sitio web, específicamente mediante el formulario de contacto.
        </p>
      </section>

      <section className="politicas-section">
        <h2 className="section-title">2. Finalidad de la Recopilación de Datos</h2>
        <p className="section-text">Los datos personales recopilados a través del formulario de contacto tienen las siguientes finalidades:</p>
        <ul className="section-list">
          <li>Contactar a los usuarios para responder a sus consultas, solicitudes o comentarios.</li>
          <li>Enviar información relevante sobre nuestros productos, servicios o promociones, siempre que el usuario haya dado su consentimiento explícito.</li>
          <li>Mejorar la experiencia del usuario en nuestro sitio web mediante el análisis de datos de uso (de forma anonimizada cuando sea posible).</li>
        </ul>
      </section>

      <section className="politicas-section">
        <h2 className="section-title">3. Datos Recopilados</h2>
        <p className="section-text">
          A través del formulario de contacto, podemos recopilar los siguientes datos personales:
        </p>
        <ul className="section-list">
          <li>Nombre completo</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono </li>
          <li>Cualquier otra información que el usuario proporcione voluntariamente en el campo de mensaje</li>
        </ul>
        <p className="section-text">
          No recopilamos datos sensibles (como información de salud, creencias religiosas, opiniones políticas, etc.) ni datos de menores de edad sin el consentimiento expreso de sus padres o tutores legales.
        </p>
      </section>

      <section className="politicas-section">
        <h2 className="section-title">4. Base Legal para el Tratamiento</h2>
        <p className="section-text">El tratamiento de los datos personales se basa en:</p>
        <ul className="section-list">
          <li><strong>Consentimiento</strong>: Al completar el formulario, el usuario acepta explícitamente esta política de tratamiento de datos mediante una casilla de verificación.</li>
          <li><strong>Interés legítimo</strong>: Para responder a las consultas o solicitudes enviadas por los usuarios.</li>
          <li>Cumplimiento de obligaciones legales, cuando aplique, conforme a la Ley 1581 de 2012 de Colombia.</li>
        </ul>
      </section>

      <section className="politicas-section">
        <h2 className="section-title">5. Almacenamiento y Seguridad</h2>
        <ul className="section-list">
          <li><strong>Almacenamiento</strong>: Los datos personales se almacenan en servidores seguros, ya sea en nuestras propias instalaciones o en servicios de terceros que cumplen con estándares de seguridad reconocidos.</li>
          <li><strong>Seguridad</strong>: Implementamos medidas técnicas y organizativas para proteger los datos contra accesos no autorizados, pérdida, alteración o divulgación, incluyendo encriptación y controles de acceso.</li>
          <li><strong>Duración</strong>: Los datos se conservarán únicamente durante el tiempo necesario para cumplir con las finalidades descritas, salvo que una ley aplicable exija un período mayor.</li>
        </ul>
      </section>

      <section className="politicas-section">
        <h2 className="section-title">6. Derechos de los Titulares de los Datos</h2>
        <p className="section-text">
          De acuerdo con la Ley 1581 de 2012, los usuarios tienen los siguientes derechos sobre sus datos personales:
        </p>
        <ul className="section-list">
          <li><strong>Acceso</strong>: Conocer qué datos personales tenemos sobre ellos.</li>
          <li><strong>Rectificación</strong>: Corregir datos inexactos o incompletos.</li>
          <li><strong>Supresión</strong>: Solicitar la eliminación de sus datos, cuando sea aplicable.</li>
          <li><strong>Oposición</strong>: Oponerse al tratamiento de sus datos para fines específicos, como el envío de comunicaciones comerciales.</li>
          <li><strong>Portabilidad</strong>: Recibir sus datos en un formato estructurado y legible, cuando sea técnicamente posible.</li>
          <li><strong>Revocación del consentimiento</strong>: Retirar el consentimiento otorgado en cualquier momento.</li>
        </ul>
        <p className="section-text">
          Para ejercer estos derechos, los usuarios pueden enviar una solicitud a <a href="mailto:stelarcode1@gmail.com" className="section-link">stelarcode1@gmail.com</a>, incluyendo su nombre completo, descripción de la solicitud y, si aplica, documentos que acrediten su identidad.
        </p>
      </section>

      <section className="politicas-section">
        <h2 className="section-title">7. Transferencia de Datos</h2>
        <p className="section-text">
          No compartimos los datos personales con terceros, salvo en los siguientes casos:
        </p>
        <ul className="section-list">
          <li>Cuando sea necesario para cumplir con una obligación legal.</li>
          <li>Con proveedores de servicios (por ejemplo, plataformas de correo electrónico o almacenamiento en la nube) que actúan como encargados del tratamiento y están sujetos a estrictos acuerdos de confidencialidad.</li>
          <li>Si el usuario ha dado su consentimiento explícito para compartir los datos con un tercero.</li>
        </ul>
        <p className="section-text">
          En caso de transferencias internacionales de datos, nos aseguramos de cumplir con las normativas aplicables, utilizando cláusulas contractuales estándar o mecanismos equivalentes.
        </p>
      </section>


      <section className="politicas-section">
        <h2 className="section-title">8. Modificaciones a la Política</h2>
        <p className="section-text">
          Nos reservamos el derecho de actualizar esta política para adaptarla a cambios legislativos, nuevas funcionalidades del sitio web o mejoras en nuestras prácticas de privacidad. Cualquier cambio será comunicado a los usuarios a través del sitio web o por correo electrónico, según corresponda.
        </p>
      </section>

      <section className="politicas-section">
        <h2 className="section-title">9. Contacto y Responsable del Tratamiento</h2>
        <p className="section-text">
          <strong>Responsable del Tratamiento de Datos</strong>: Para cualquier solicitud relacionada con sus datos personales, como consultas, rectificaciones, supresiones o revocación del consentimiento, contáctenos en:
        </p>
        <ul className="section-list">
          <li><strong>Correo electrónico</strong>: <a href="mailto:stelarcode1@gmail.com" className="section-link">stelarcode1@gmail.com</a></li>
          <li><strong>Teléfono</strong>: 324 6281386</li>
        </ul>
        <p className="section-text">
          De acuerdo con la Ley 1581 de 2012, los titulares de los datos pueden ejercer sus derechos de acceso, rectificación, cancelación y oposición enviando una solicitud escrita al correo indicado, incluyendo su nombre completo, descripción de la solicitud y, si aplica, documentos que acrediten su identidad.
        </p>
        <p className="section-text">
          <strong>Última actualización</strong>: 13 de Julio de 2025
        </p>
      </section>

    </div>
  );
};

export default Politicas;