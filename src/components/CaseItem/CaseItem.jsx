import "./CaseItem.scss";
import budgetBloomImg from "/web-dev-images/budget-bloom.png";
import studyCases from "../../data/ui-ux-list.json";
import userPersona from "/case-study-images/user-persona.jpg";
import flowChart from "/case-study-images/flow-chart.jpg";
import sketch01 from "/case-study-images/sketch01.jpg";
import sketch02 from "/case-study-images/sketch02.png";
import sketch04 from "/case-study-images/sketch04.jpg";
import sketch05 from "/case-study-images/sketch05.jpg";
import sketch06 from "/case-study-images/sketch06.jpg";

export default function CaseItem() {
  return (
    <article className="case">
      <div className="case__multimedia">
        <img
          src={budgetBloomImg}
          alt={`budget Bloom logo`}
          className="case__multimedia--logo"
        />
      </div>

      <div className="case__text">
        <div>
          <h2 className="">Case Study</h2>
          <h3 className="">Overview</h3>
          <p className="">{studyCases[0].description}</p>

          <h3 className="">Problem Space</h3>
          {studyCases[0].problem.map((item, index) => (
            <li className="list" key={index}>
              {item}
            </li>
          ))}
          <h3>Solutions</h3>
          {studyCases[0].solutions.map((item, index) => (
            <li className="list" key={index}>
              {item}
            </li>
          ))}

          <h2 className="emphasis">Design Process</h2>
          <ol className="case__text--list divider bold ">
            {studyCases[0].process.map((item, index) => (
              <li className="case__text--tag" key={index}>
                {item}
              </li>
            ))}
          </ol>
        </div>
        <h3 className="">01 Empathize</h3>
        <p className="bold">Goal</p>
        <p>
          Research and understand the user's needs, problems, and behaviors.
        </p>
        <p className="bold">Research</p>
        <p>
          Five college students aged between 20 and 25 were asked the following
          questions:
        </p>
        <ol>
          {studyCases[0].questions.map((item, index) => (
            <li className="list" key={index}>
              {item}
            </li>
          ))}
        </ol>
        <p className="bold">Insights</p>
        <p>
          Many users associate money with stress and guilt. They stop using apps
          with complicated or poorly designed menus. Desire predictability. They
          want to know how their finances will be at the end of the month or
          year. Visually boring. Current tools are uninspiring or too "serious."
        </p>
        <p className="bold">Competitive Analysis</p>
        <p> {studyCases[0].comparative} </p>
        <h3 className="">02 Define</h3>
        <p>
          By analyzing user research and findings, we can clearly define the
          core problems that need to be solved. Creating a user persona helps
          visualize and empathize with real users their needs, goals, pain
          points, and behaviors. This understanding allows us to make informed
          design decisions that align with user expectations and improve
          usability. Throughout the process, we can evaluate ideas by asking,
          “Would this help Anna?” ensuring that each feature remains relevant,
          purposeful, and user-centered.
        </p>
        <p className="bold">User Persona</p>
        <img
          className="case__multimedia--chart"
          src={userPersona}
          alt="User persona chart"
        />
        <h3 className="">03 Ideate</h3>
        <p>
          In the Ideate phase, the goal is to brainstorm and explore creative
          solutions focused on improving the user experience. With a clear
          understanding of user needs and pain points, a flow chart was
          generated to reflect the simple and intuitive app they require. Every
          idea is evaluated through the lens of our user persona to ensure that
          the final design offers both functionality and delight.
        </p>
        <p className="bold"> Flow chart</p>
        <img
          className="case__multimedia--chart"
          src={flowChart}
          alt="Flow chart"
        />
        <h3 className="">04 Design</h3>
        <p>
          Prototypes were created to bring the solution to life and visualize
          the app’s structure and flow.
        </p>
        <p>
          The initial designs began as pencil sketches to quickly explore layout
          ideas and user interface elements.
        </p>
        <img
          className="case__multimedia--chart"
          src={sketch01}
          alt="Design chart"
        />
        <p>
          These low fidelity wireframes helped establish the content hierarchy
          and navigation of the single-page application.
        </p>
        <img
          className="case__multimedia--chart"
          src={sketch02}
          alt="Design chart"
        />
        <p>
          The visual identity of BudgetBloom uses a soft, approachable palette
          to make financial planning feel less intimidating:
        </p>
        <img
          className="case__multimedia--chart"
          src={sketch04}
          alt="Design chart"
        />
        <p>
          This logo represents the emotional side of budgeting helping users not
          only control their money but also see it flourish.
        </p>
        <img
          className="case__multimedia--chart"
          src={sketch05}
          alt="Design chart"
        />
        <p>
          The app uses Bungee for titles and headings to give a modern, rounded
          look, and Montserrat for body text to ensure readability and
          neutrality.
        </p>
        <img
          className="case__multimedia--chart"
          src={sketch06}
          alt="Design chart"
        />
      </div>
    </article>
  );
}
