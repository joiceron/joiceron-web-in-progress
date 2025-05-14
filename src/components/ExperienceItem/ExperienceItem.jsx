import "./ExperienceItem.scss";
import arrow from "../../assets/icons/star.svg";

export default function ExperienceItem({ experience }) {
  return (
    <section className="experience">
      <div className="experience__icon">
        <img src={arrow} alt="" className="experience__img" />
      </div>

      <div className="experience__text">
        <h4 className="experience__">{experience.type}</h4>
        <h3>{experience.tittle}</h3>
        <h4>{experience.institution}</h4>
        <p>{`${experience.start} - ${experience.end}`}5</p>
        <p>{experience.description}</p>
       
        {experience.skills.map((skill, index) => (
          <span className="experience__skills" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
