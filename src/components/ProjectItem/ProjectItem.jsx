import "./ProjectItem.scss";
import arrow from "../../assets/icons/star.svg";
import { Link } from "react-router-dom";
export default function ProjectItem({ project, image }) {
  return (
    <article className="project">
      <div className="project">
        <img src={image} alt={`${image} preview`} className="image" />
      </div>
      <div>
        <h4>{project.tittle}</h4>
        <p>{project.role}</p>
        <p>{project.description}</p>
        <ul>
          {project.skills.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <Link to={project.link}>
          <img src={arrow} alt="" /> Go to GitHub
        </Link>
        {project.link2 ? (
          <Link to={project.link}>
            <img src={arrow} alt="" /> Live Project
          </Link>
        ) : (
          ""
        )}
      </div>
    </article>
  );
}
