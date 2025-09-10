export default function Projects() {
  const myProjects = [
    {
      title: "Generador de CV",
      description: "Una aplicación interactiva para crear y descargar tu currículum en PDF.",
      tech: "React, HTML, CSS, JS",
      live: "https://generatucv.netlify.app/",
      repo: "https://github.com/YuleskaxJS/Generador-de-CV",
    },
    // Puedes agregar más proyectos aquí
  ];

  return (
    <section id="projects" className="container">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {myProjects.map((project, idx) => (
          <div key={idx} className="project-card reveal">
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <p className="project-tech">Tecnologías: {project.tech}</p>
            <div className="project-links">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-live"
              >
                Ver en Vivo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-repo"
              >
                Ver Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
