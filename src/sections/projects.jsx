import { FaFileAlt } from "react-icons/fa";

export default function Projects() {
  const myProjects = [
    {
      title: "Generador de CV",
      description: "Una aplicación interactiva para crear y descargar tu currículum en PDF.",
      tech: "React-Js",
      live: "https://generatucv.netlify.app/",
      repo: "https://github.com/YuleskaxJS/Generador-de-CV",
    },
    // Agrega más proyectos aquí
  ];

  return (
    <section id="projects" style={{ padding: "72px 0" }}>
      <h2>
        Proyectos
      </h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        justifyContent: "flex-start",
        marginTop: 16,
      }}>
        {myProjects.map((project, idx) => (
          <div
            key={idx}
            style={{
              background: "linear-gradient(135deg, #d291ff 0%, #b76dff 100%)",
              borderRadius: 16,
              padding: 24,
              width: 320,
              color: "#fff",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "left",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
              <FaFileAlt size={28} style={{ marginRight: 12 }} />
              <h3 style={{ margin: 0, fontSize: 20 }}>{project.title}</h3>
            </div>
            <p style={{ fontSize: 14, marginBottom: 8, color: "#000" }}>{project.description}</p>
            <p style={{ fontSize: 12, marginBottom: 16, fontStyle: "italic", color: "#000" }}>Tecnologías: {project.tech}</p>
            <div style={{ display: "flex", gap: 10 }}>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "10px 0",
                  borderRadius: 12,
                  backgroundColor: "#fff",
                  color: "#b76dff",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "#f2e6ff";
                  e.currentTarget.style.color = "#d291ff";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.color = "#b76dff";
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
                  padding: "10px 0",
                  borderRadius: 12,
                  backgroundColor: "rgba(255,255,255,0.3)",
                  color: "#fff",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.5)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.3)";
                }}
              >
                Ver Código
              </a>
            </div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 40, fontSize: 16, textAlign: "center", color: "#4b0082", fontStyle: "italic" }}>
        Más proyectos en desarrollo. ¡Pronto los compartiré aquí!
      </p>
    </section>
  );
}
