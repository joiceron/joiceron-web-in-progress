import "./ExperienceItem.scss";
import eduIcon from "../../assets/icons/school-icon.svg";
import workIcon from "../../assets/icons/work-icon.svg";
export default function ExperienceItem({ experience }) {
  return (
    <section className="experience">
      <div className="experience__icon-box">
        <img src={`${experience.type=="Education" ? eduIcon : workIcon }`} alt="" className="experience__icon" />
      </div>

      <div className="experience__text">
        <h2 className="experience__text--title">{experience.tittle}</h2>
        <h3>{experience.institution}</h3>
        <p>{`${experience.start} - ${experience.end}`}</p>
        <p>{experience.description}</p>
        <div className="experience__skills">
          {experience.skills.map((skill, index) => (
            <p className="experience__skill" key={index}>
              {skill}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
