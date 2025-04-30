import "./NavBar.scss";
import joiceronLogo from "/Logo.png";

export default function NavBar() {
  return (
    <nav className="header">
      <a className="header__logo" to={"#"}>
        <img src={joiceronLogo} className="header__logo--icon" alt="Vite logo" />
        <h1 className="header__logo--text">joiceron</h1>
      </a>

      <button className={`header__button `}>
        Contact
      </button>
    </nav>
  );
}
