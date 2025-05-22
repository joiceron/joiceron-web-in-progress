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
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="hero">
        <img className="hero__bg" src={bgHero2} alt="background with flowers" />
        <div className="hero__joke">
          <div className="emphasis hero__joke--set-up ">{jokeSetup}</div>
          <p className="hero__joke--punch-line ">{jokePunchline}</p>
        </div>
      </div>
    </>
  );
}
