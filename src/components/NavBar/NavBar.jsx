import "./NavBar.scss";
import joiceronLogo from "/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [isAsideDisplayed, setIsAsideDisplayed] = useState(false);
  const handleToggleAside = () => {
    setIsAsideDisplayed((prev) => !prev);
  };

  return (
    <nav className="header">
      <div className="header__tittle">
        <NavLink className="header__logo" to={"#"}>
          <img
            src={joiceronLogo}
            className="header__logo--icon"
            alt="Vite logo"
          />
          <h1 className="header__logo--text">joiceron</h1>
        </NavLink>
        <button className="header__exit" onClick={handleToggleAside}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <ul className="nav">
        <li className="nav__button">
          <NavLink className="nav__button--link" to={"/"}>
            Hero
          </NavLink>
        </li>
        <li className="nav__button">
          <NavLink className="nav__button--link" to={"/Portfolio"}>
            Portfolio
          </NavLink>
        </li>
        <li className="nav__button">
          <NavLink className="nav__button--link" to={"/AboutMe"}>
            About me
          </NavLink>
        </li>
        <li className="nav__button">
          <NavLink className="nav__button--link" to={"/Contact"}>
            Contact
          </NavLink>
        </li>
        <li className="nav__button">
          <Link
            className="nav__button--link"
            to="https://www.linkedin.com/in/joiceron"
            target="_blank"
            rel="noopener noreferrer"
            // to="javascript:void(0)"
            // onClick={() => (window.location = "mailto:example@hotmail.com")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
               className="nav__button--link icon"
              x="0px"
              y="0px"
              alt="Going to LinkedIn"
              height="18"
               width="18"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
