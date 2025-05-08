import "./PortfolioPage.scss";
import { useState } from "react";
import Proyecto from "../../components/Proyecto/Proyecto";
import { NavLink } from "react-router-dom";

export default function PortfolioPage() {
  const industry = [
    "Web Development",
    "Graphic Design",
    "Illustration",
    "Game Development",
  ];

  const [portfolioDoc, setPortfolioDoc] = useState("Web Development");
  console.log(portfolioDoc);
  return (
    <main className="portfolio">
      <ul className="portfolio__nav">
        <li>
          <button
            className={`button portfolio__nav--button ${
              portfolioDoc == industry[0] ? "active" : ""
            }`}
            onClick={() => {
              setPortfolioDoc(`${industry[0]}`);
            }}
          >
            {industry[0]}
          </button>
        </li>
        <li>
          <button
            className={`button portfolio__nav--button ${
              portfolioDoc == industry[1] ? "active" : ""
            }`}
            onClick={() => {
              setPortfolioDoc(`${industry[1]}`);
            }}
          >
            {industry[1]}
          </button>
        </li>
        <li>
          <button
            className={`button portfolio__nav--button ${
              portfolioDoc == industry[2] ? "active" : ""
            }`}
            onClick={() => {
              setPortfolioDoc(`${industry[2]}`);
            }}
          >
            {industry[2]}
          </button>
        </li>
        <li>
          <button
            className={`button portfolio__nav--button ${
              portfolioDoc == industry[3] ? "active" : ""
            }`}
            onClick={() => {
              setPortfolioDoc(`${industry[3]}`);
            }}
          >
            {industry[3]}
          </button>
        </li>
      </ul>

      <section className="section">
        <h3>{portfolioDoc}</h3>

        <Proyecto />
      </section>
    </main>
  );
}
