import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx";

function Main({ projects, homeProjects }) {
  const { pathname } = useLocation();

  const getTitle = () => {
    switch (pathname) {
      case "/":
        return "Início";
      case "/home":
        return "Início";
      case "/projects":
        return "Projetos";
      case "/contact":
        return "Contato";
      default:
        return "Início";
    }
  };

  return (
    <main className="main">
      <div className="main__title-content">
        <h1 className="main__title">{getTitle()}</h1>
      </div>
      <div className="main__content">
        <Routes>
          <Route path="/" element={<Home homeProjects={homeProjects} />} />
          <Route path="/home" element={<Home homeProjects={homeProjects} />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
