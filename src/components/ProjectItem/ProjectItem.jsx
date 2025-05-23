import "./ProjectItem.scss";
import link from "../../assets/icons/link-icon.svg";
import { Link } from "react-router-dom";
export default function ProjectItem({ project, image }) {
  return (
    <article className="project">
      <div className="project__multimedia">
        <img
          src={image}
          alt={`${image} preview`}
          className="project__multimedia--image"
        />
      </div>

      <div className="content">
        <div>
          <Link
            className="content__tittle-link"
            to={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="content__tittle">{project.tittle}</h2>
          </Link>
          <h3 className="">{project.role}</h3>
          <p className="">{project.description}</p>
          <div className="content__skills">
            {project.skills.map((tag, index) => (
              <p className="content__skill" key={index}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="content__link">
          <Link
            to={project.link}
            className="content__link--text"
            target="_blank"
          >
            <img src={link} alt="link icon" className="content__link--img" />{" "}
            Go to Repository
          </Link>
          {project.link2 ? (
            <Link
              to={project.link2}
              className="content__link--text"
              target="_blank"
            >
              <img src={link} alt="link icon" className="content__link--img" />{" "}
              Live Project
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </article>
  );
}
