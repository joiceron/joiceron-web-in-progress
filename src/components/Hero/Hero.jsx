import "./Hero.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import bgHero1 from "../../assets/images/img_bg_1.jpg";
import bgHero2 from "../../assets/images/img_bg_2.jpg";

export default function Hero() {
  const [jokeSetup, setJokeSetup] = useState(
    "Why do programmers prefer dark mode?"
  );
  const [jokePunchline, setJokePunchline] = useState(
    "Because light attracts bugs."
  );

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });

      let joke = `${response.data.joke}`;
      console.log(`${joke}`);
      let temporal = [];
      let temporalMark = "";

      if (joke.endsWith(".")) {
        joke = joke.slice(0, -1);
      }

      if (joke.includes("?")) {
        temporalMark = "?";
        temporal = joke.split(temporalMark);
      } else if (joke.includes("...")) {
        temporalMark = "...";
        temporal = joke.split(temporalMark);
      } else if (joke.includes(".")) {
        temporalMark = ".";
        temporal = joke.split(temporalMark);
      } else if (joke.includes(",")) {
        temporalMark = ",";
        temporal = joke.split(temporalMark);
      }
      if (
        temporal != [] &&
        temporal[0] != undefined &&
        temporal[1] != undefined
      ) {
        setJokeSetup(`${temporal[0]}${temporalMark}`);
        setJokePunchline(`${temporal[1]}.`);
        // TO-Do:
        // manage cases when it splits more that 2
        // if endsWith "!" then no "."
        // when it has a ` ?" `
        // if endsWith "..." then checks as ".." and temporal[1]} is empty "."
        // if in half it have "phrase." it will cut it at the period
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="hero">
        <img className="hero__bg" src={bgHero2} alt="Background with flowers" />
        <div className="hero__joke">
          <div className="emphasis hero__joke--set-up ">{jokeSetup}</div>
          <p className="hero__joke--punch-line ">{jokePunchline}</p>
          <button
            className="hero__joke--button"
            onClick={() => {
              fetchJoke();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              height="30px"
              width="30px"
              fill="#733D99"
              className="hero__joke--icon button"
            >
              <path d="M482.04-187.27q-122.9 0-208.22-85.15T188.5-479.94q0-122.37 85.32-207.58 85.32-85.21 208.22-85.21 69.65 0 131.46 31.04t102.23 88.19v-91.35q0-11.44 8.13-19.66t19.77-8.22q11.64 0 19.85 8.22t8.21 19.66v173.62q0 14.25-9.99 24.24-9.99 9.99-24.24 9.99H563.85q-11.64 0-19.76-8.23-8.13-8.22-8.13-19.86 0-11.45 8.13-19.66 8.12-8.21 19.76-8.21h126.07q-31.3-57.62-86.82-90.71-55.52-33.1-121.06-33.1-98.89 0-168.23 69.04-69.35 69.04-69.35 167.73 0 98.69 69.35 167.73 69.34 69.04 168.23 69.04 68.92 0 126.21-36.37 57.29-36.36 86.33-97.13 5.07-10.42 15.46-14.37 10.38-3.94 21.35-.28 11.42 4.03 15.99 14.73 4.58 10.69-.5 21.11-35.84 76.58-107.02 122.42-71.17 45.85-157.82 45.85Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
