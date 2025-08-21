import '/src/styles/contact.css';

export default function Contact() {
  return (
    <section id="contact" className="container contact-wrap">
      <h2>Contacto</h2>
      <p className="contact-lead">
        ¿Hablamos? Estoy abierta a propuestas y colaboraciones.
      </p>

      <ul className="contact-list">
        <li>
          <a href="mailto:yuleskafinol043@gmail.com" className="contact-row">
            <span className="c-icon">✉︎</span>
            <div className="c-body">
              <span className="c-title">Correo</span>
              <span className="c-sub">yuleskafinol043@gmail.com</span>
            </div>
            <span className="c-arrow">↗</span>
          </a>
        </li>

        <li>
          <a href="https://wa.me/573004963837" target="_blank" rel="noreferrer" className="contact-row">
            <span className="c-icon">☎︎</span>
            <div className="c-body">
              <span className="c-title">Teléfono</span>
              <span className="c-sub">+57 300 496 3837</span>
            </div>
            <span className="c-arrow">↗</span>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/yuleska-finol" target="_blank" rel="noreferrer" className="contact-row">
            <span className="c-icon">in</span>
            <div className="c-body">
              <span className="c-title">LinkedIn</span>
              <span className="c-sub">/yuleska-finol</span>
            </div>
            <span className="c-arrow">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
