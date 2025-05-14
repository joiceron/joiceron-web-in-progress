import "./AboutMePage.scss";
import { useState } from "react";
import ExperienceItem from "../../components/ExperienceItem/ExperienceItem";
import experiencesList from "../../data/experiences-list.json";

export default function AboutMePage() {
  return (
    <main className="about">
      <section className="about__profile">
        <h3 className="about__profile--tittle">Profile</h3>
        <p className="about__profile--detail">
          Hi! I'm Joice Ceron I am a detail-oriented, UI/UX Designer & Software
          Development. My passion for art and visual experiences fuels my belief
          in the power of graphic design as a communication tool. However, I
          recognize the need to go beyond static visuals. To address this, I
          have been mastering web development tools, combining them with my
          proficiency in the Adobe Suite, enabling me to create scalable,
          visually engaging, and functional applications.
        </p>
      </section>

      {experiencesList.map((experience, index) => (
        <ExperienceItem experience={experience} key={index} />
      ))}
    </main>
  );
}
