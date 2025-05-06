import "./Hero.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import bgHero1 from "../../assets/images/img_bg_1.jpg";
import bgHero2 from "../../assets/images/img_bg_2.jpg";

export default function Hero() {
  const [joke, setJoke] = useState("");
  const jokePart1 = "Why are artists so good at keeping secrets?"
   const jokePart2 = "Because they know how to shade the truth!"
  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      console.log(response.data.joke);
      setJoke(response.data.joke);
    } catch (error) {
      console.error(error);
    }
  };

  if (!joke) {
    if (joke.includes(".","?")===true){
      console.log("2");
    }
  }

  return (
    <>
      <div className="hero">
        <img className="hero__bg" src={bgHero1} alt="background with flowers" />
        {/* <img src={bgHero2} alt="background with flowers" /> */}
        <h1>{joke}</h1>
        {/* {joke} */}
      </div>
    </>
  );
}
