import "./PortfolioPage.scss";
import { useState } from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import PhotoItem from "../../components/PhotoItem/PhotoItem";

import webProjects from "../../data/web-projects-list.json";
import gameProjects from "../../data/game-projects-list.json";
import drawProjects from "../../data/draw-projects-list.json";

import webApiHackatonImg from "/web-dev-images/web-api-hackaton.png";
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

import disImg00 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0001.jpg";
import disImg01 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0003.jpg";
import disImg02 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0004.jpg";
import disImg03 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0005.jpg";
import disImg04 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0006.jpg";
import disImg05 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0007.jpg";
import disImg06 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0008.jpg";
import disImg07 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0009.jpg";
import disImg08 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0010.jpg";
import disImg09 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0011.jpg";
import disImg10 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0012.jpg";
import disImg11 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0013.jpg";

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

  const disImagMap = [
    disImg00,
    disImg01,
    disImg02,
    disImg03,
    disImg04,
    disImg05,
    disImg06,
    disImg07,
    disImg08,
    disImg09,
    disImg10,
    disImg11,
  ];

  const [portfolioDoc, setPortfolioDoc] = useState("Web Development");
  return (
    <main className="portfolio">
      <div className="portfolio__nav-box">
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
      </div>

      <section className="section">
        {portfolioDoc === industry[0]
          ? webProjects.map((project) => (
              <ProjectItem
                project={project}
                image={webImageMap[project.key]}
                key={project.key}
              />
            ))
          : portfolioDoc === industry[1]
          ? disImagMap.map((image, index) => (
              <img className="pdf-image" src={image} alt="" key={index} />
            ))
          : portfolioDoc === industry[2]
          ? drawProjects.map((draw) => (
              <PhotoItem
                draw={draw}
                image={drawingsMap[draw.key]}
                key={draw.key}
              />
            ))
          : gameProjects.map((project) => (
              <ProjectItem
                project={project}
                image={gameImageMap[project.key]}
                key={project.key}
              />
            ))}
      </section>
    </main>
  );
}
