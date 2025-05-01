import "./NavBar.scss";
import joiceronLogo from "/Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="header">
      <a className="header__logo" to={"#"}>
        <img
          src={joiceronLogo}
          className="header__logo--icon"
          alt="Vite logo"
        />
        <h1 className="header__logo--text">joiceron</h1>
      </a>
      <ul>
        <li className={"header__button"}>
          <NavLink to={"/"}>Hero</NavLink>
        </li>
        <li className={"header__button"}>
          <NavLink to={"/Portfolio"}>Portfolio</NavLink>
        </li>
        <li className={"header__button"}>
          <NavLink to={"/AboutMe"}>About me</NavLink>
        </li>
        <li className={"header__button"}>
          <NavLink to={"/Contact"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
