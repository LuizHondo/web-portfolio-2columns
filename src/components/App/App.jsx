import { Routes, Route } from "react-router-dom";

import Nav from "../Nav/Nav.jsx";
import Main from "../Main/Main.jsx";

import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <div className="page">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
