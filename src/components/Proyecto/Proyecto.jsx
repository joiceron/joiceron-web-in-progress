import "./Proyecto.scss";
import image from "../../assets/images/web/budget-bloom.png";
export default function Proyecto() {
  return (
    <article>
      <img src={image} alt="" className="image" />
      <h4>Budget Bloom</h4>
      <p>
        Designed, developed and maintained a budget planner using modular
        components with React.js, MySQL, and Knex. Integrated RESTful APIs and
        ensured scalability with GitHub backups.
      </p>
      <span>HTML5</span>
      <span>JavaScript</span>
      <span>React.js</span>
      <span>HTML5</span>
      <span>JavaScript</span>
      <span>React.js</span>
    </article>
  );
}
