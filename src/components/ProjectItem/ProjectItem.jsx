import "./ProjectItem.scss";
import arrow from "../../assets/icons/star.svg";
import { Link } from "react-router-dom";
export default function ProjectItem({ project, image }) {
  return (
    <article className="project">
      <div className="project__img-box">
        <img src={image} alt={`${image} preview`} className="project__image" />
      </div>

      <div className="project__txt-box">
        <div>
          <h3 className="project__tittle">{project.tittle}</h3>
          <h4 className="project__">{project.role}</h4>
          <p className="project__">{project.description}</p>
          <ul className="project__skills">
            {project.skills.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div>
          <Link to={project.link} className="project__">
            <img src={arrow} alt="" /> Go to GitHub
          </Link>
          {project.link2 ? (
            <Link to={project.link} className="project__">
              <img src={arrow} alt="" /> Live Project
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </article>
  );
}
