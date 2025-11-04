import '/src/styles/home.css';
import useReveal from '../hooks/useReveal';

const Tag = ({ children, delay = 0 }) => {
  const ref = useReveal();
  return (
    <span
      ref={ref}
      className="tag reveal"
      style={{ '--delay': `${delay}ms` }}
    >
      {children}
    </span>
  );
};

export default function Home(){
  const tags = ["React", "JavaScript", "QA", "SQL", "MongoDB", "GitHub", "Postman"];


  return (
    <section id="home" className="container-wide hero">
      <div className="hero-grid">
        
        {/* Columna izquierda */}
        <div className="hero-left">
          <h1>
            Hola, soy Yuleska <span className="code-icon">{"</>"}</span>
          </h1>

          <p className='subtext'>
            Desarrolladora full stack en crecimiento 🚀, enfocada en React y las bases de datos
          </p>

          <p className="subtitle">
            Frontend con React/JavaScript · Backend con SQL/MongoDB · 
            Google Apps Script · Microsoft 365
          </p>

          <div className="cta">
            <a href="#projects" className="btn btn-primary">Ver proyectos</a>
            <a href="#contact" className="btn btn-ghost">Contáctame</a>
            {/* Si subes tu CV a /public/CV_Yuleska.pdf, descomenta: */}
            <a href="/CVYuleska.pdf" className="btn btn-ghost" download>Descargar CV</a>
          </div>

          {/* Tags con animación */}
          <div className="tags">
            {tags.map((t, i) => (
              <Tag key={t} delay={200 + i * 100}>{t}</Tag>
            ))}
          </div>
        </div>

        {/* Columna derecha */}
        <div className="hero-right">
          <div className="avatar">
            <img src="/avatar.png" alt="Foto de Yuleska" />
          </div>
        </div>

      </div>
    </section>
  );
}
