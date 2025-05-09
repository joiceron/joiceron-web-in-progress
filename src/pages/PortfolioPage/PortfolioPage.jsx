import "./PortfolioPage.scss";
import { useState } from "react";
import Project from "../../components/Project/Project";
import Photo from "../../components/Photo/Photo";

import webProjects from "../../data/web-projects-list.json";
import gameProjects from "../../data/game-projects-list.json";
import drawProjects from "../../data/draw-projects-list.json";

import webApiHackatonImg from "/web-dev-images/web-api-hackaton.jpg";
import budgetBloomImg from "/web-dev-images/budget-bloom.png";

import draw00 from "/drawing-images/image00.jpg";
import draw01 from "/drawing-images/image01.jpg";
import draw02 from "/drawing-images/image02.jpg";
import draw03 from "/drawing-images/image03.jpg";
import draw04 from "/drawing-images/image04.jpg";
import draw05 from "/drawing-images/image05.jpg";

import gameImg00 from "/game-images/img-0.jpg";
import gameImg01 from "/game-images/img-1.jpg";
import gameImg02 from "/game-images/img-2.jpg";
import gameImg03 from "/game-images/img-3.jpg";
import gameImg04 from "/game-images/img-4.jpg";
import gameImg05 from "/game-images/img-5.jpg";

export default function PortfolioPage() {
  const industry = [
    "Web Development",
    "Graphic Design",
    "Illustration",
    "Game Development",
  ];

  const webImageMap = {
    budgetBloom: budgetBloomImg,
    webApiHackaton: webApiHackatonImg,
  };

  const gameImageMap = {
    game00: gameImg00,
    game01: gameImg01,
    game02: gameImg02,
    game03: gameImg03,
    game04: gameImg04,
    game05: gameImg05,
  };

  const drawingsMap = {
    image00: draw00,
    image01: draw01,
    image02: draw02,
    image03: draw03,
    image04: draw04,
    image05: draw05,
  };

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const [portfolioDoc, setPortfolioDoc] = useState("Web Development");
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

        {portfolioDoc === industry[0] ? (
          webProjects.map((project) => (
            <Project
              project={project}
              image={webImageMap[project.key]}
              key={project.key}
            />
          ))
        ) : portfolioDoc === industry[1] ? (
          <div>PDF</div>
        ) : portfolioDoc === industry[2] ? (
          drawProjects.map((draw) => (
            <Photo draw={draw} image={drawingsMap[draw.key]} key={draw.key} />
          ))
        ) : (
          gameProjects.map((project) => (
            <Project
              project={project}
              image={gameImageMap[project.key]}
              key={project.key}
            />
          ))
        )}
      </section>
    </main>
  );
}
