import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img className="nav__image" src={logo} alt="Logo" />
      </div>
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            INÍCIO
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/projects">
            PROJETOS
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/contact">
            CONTATO
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
