import "./ExperienceItem.scss";

export default function ExperienceItem({ experience }) {
  return (
    <section className="education">
      <h3 className="education">{experience.type}</h3>
      <h4>{experience.tittle}</h4>
      <p>{experience.institution}</p>
      <p>{`${experience.start} - ${experience.end}`}5</p>
      <p className="education">
        {experience.description}
      </p>
      {experience.skills.map((skill, index) => (
        <spam key={index}>{skill}</spam>
      ))}
    </section>
  );
}
