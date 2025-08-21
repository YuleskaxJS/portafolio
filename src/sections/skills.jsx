import React from 'react';
import '/src/styles/skills.css';
import useReveal from '/src/hooks/useReveal.jsx';

const Badge = ({ children, delay = 0 }) => {
  const ref = useReveal();
  return (
    <span ref={ref} className="badge reveal" style={{ '--delay': `${delay}ms` }}>
      {children}
    </span>
  );
};

const Item = ({ children, delay = 0 }) => {
  const ref = useReveal();
  return (
    <li ref={ref} className="reveal" style={{ '--delay': `${delay}ms` }}>
      {children}
    </li>
  );
};

const Skills = () => {
  const titleRef    = useReveal();
  const techCardRef = useReveal();
  const softCardRef = useReveal();

  const tech = [
    "React","JavaScript","HTML5","CSS3","Node.js","SQL","MongoDB",
    "Github","Postman","QA Automation","Google Apps Script","Microsoft 365"
  ];

  const soft = [
    "🎨 Creatividad e innovación",
    "🤝 Trabajo en equipo",
    "🗣️ Comunicación efectiva",
    "🧩 Resolución de problemas",
    "🧠 Pensamiento crítico y analítico",
    "🚀 Aprendizaje continuo",
  ];

  return (
    <section id="skills" className="skills">
      <h2 ref={titleRef} className="reveal" style={{ '--delay': '0ms' }}>
        Habilidades
      </h2>

      <div className="skills-grid">
        <div ref={techCardRef} className="skills-card reveal" style={{ '--delay': '120ms' }}>
          <h3>🔧 Técnicas</h3>
          <div className="badges">
            {tech.map((t, i) => (
              <Badge key={t} delay={200 + i*70}>{t}</Badge>
            ))}
          </div>
        </div>

        <div ref={softCardRef} className="skills-card reveal" style={{ '--delay': '220ms' }}>
          <h3>💡 Blandas</h3>
          <ul>
            {soft.map((s, i) => (
              <Item key={s} delay={260 + i*90}>{s}</Item>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
