import logo from "../../assets/images/logo.svg";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img className="nav__image" src={logo} alt="Logo" />
      </div>
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#hero">
            INÍCIO
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#projects">
            PROJETOS
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#contact">
            CONTATO
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
