import "./Project.scss";
import image from "../../assets/images/web/budget-bloom.png";

export default function Project({ project }) {
  return (
    <article className="proyec">
      <img src={image} alt="" className="image" />
      <h4>{project.tittle}</h4>
      <p>{project.description}</p>
      <div>
        {project.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
    </article>
  );
}
