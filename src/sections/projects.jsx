export default function Projects() {
  const myProjects = [
    {
      title: "Generador de CV",
      description: "Una aplicación interactiva para crear y descargar tu currículum en PDF.",
      tech: "React, HTML, CSS, JS",
      image: "/path-to-image.png", // opcional
      live: "https://generatucv.netlify.app/",
      repo: "https://github.com/YuleskaxJS/Generador-de-CV",
    },
    // Puedes agregar más proyectos aquí
  ];

  return (
    <section id="projects" className="container">
      <h2>Proyectos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 16 }}>
        {myProjects.map((project, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 16,
              width: 300,
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", borderRadius: 6 }}
              />
            )}
            <h3 style={{ marginTop: 12 }}>{project.title}</h3>
            <p style={{ fontSize: 14, color: "var(--muted)" }}>{project.description}</p>
            <p style={{ fontSize: 12, color: "#555" }}>Tecnologías: {project.tech}</p>
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "8px 0",
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  borderRadius: 6,
                  textDecoration: "none",
                }}
              >
                Ver en Vivo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "8px 0",
                  backgroundColor: "#6b7280",
                  color: "#fff",
                  borderRadius: 6,
                  textDecoration: "none",
                }}
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
