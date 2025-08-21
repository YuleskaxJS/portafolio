import Navbar from "./components/navbar";
import Home from "./sections/home";
import About from "./sections/about";
import Skills from "./sections/skills.jsx";
import Projects from "./sections/projects.jsx";
import Contact from "./sections/contact.jsx";
export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Home />
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </>
  );
}
