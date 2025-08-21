import { useState } from "react";
import '/src/styles/Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#skills", label: "Habilidades" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <header className="nav-header">
      <nav className="container-wide nav">
        <a href="#home" className="brand" aria-label="Ir al inicio">
          Yuleska.dev
        </a>

        {/* Botón móvil */}
        <button
          className="menu-btn"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {/* icono hamburguesa */}
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Links escritorio */}
        <div className="links">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Menú móvil desplegable */}
        {open && (
          <div className="drawer">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
