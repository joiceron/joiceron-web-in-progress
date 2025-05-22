import "./NavBar.scss";
import joiceronLogo from "/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import linkedInIcon from "../../assets/icons/linkein-icon.svg";

export default function NavBar() {
  const [isAsideDisplayed, setIsAsideDisplayed] = useState(false);
  const handleToggleAside = () => {
    setIsAsideDisplayed((prev) => !prev);
  };

  return (
    <nav className="header">
      <div className="logo">
        <Link className="logo__link" to={"/"}>
          <img
            src={joiceronLogo}
            className="logo__link--icon"
            alt="Flower logo"
          />
          <h1 className="">joiceron</h1>
        </Link>
        {!isAsideDisplayed ? (
          <button className="header__toggle" onClick={handleToggleAside}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              alt="hamburger icon"
            >
              <path d="M160-269.23v-40h640v40H160ZM160-460v-40h640v40H160Zm0-190.77v-40h640v40H160Z" />
            </svg>
          </button>
        ) : (
          <button className="header__toggle" onClick={handleToggleAside}>
            <span className="material-symbols-outlined" alt="ex icon">
              close
            </span>
          </button>
        )}
      </div>

      <ul className={`nav ${isAsideDisplayed ? "" : "aside--hide"}`}>
        <li className="nav__button ">
          <NavLink className="nav__button--link button" to={"/Portfolio"}>
            Portfolio
          </NavLink>
        </li>
        <li className="nav__button ">
          <NavLink className="nav__button--link button" to={"/AboutMe"}>
            About me
          </NavLink>
        </li>
        <li className="nav__button ">
          <NavLink className="nav__button--link button" to={"/Contact"}>
            Contact
          </NavLink>
        </li>
        <li className="nav__button">
          <Link
            to="https://www.linkedin.com/in/joiceron"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__button--link button"
          >
            <img
              className="nav__button--icon"
              src={linkedInIcon}
              alt="LinkedIn logo"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
