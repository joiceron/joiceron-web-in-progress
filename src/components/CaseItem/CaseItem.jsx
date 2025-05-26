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
import linkIcon from "../../assets/icons/link-icon.svg";

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

          <div className="divider">
            <div className="divider__container">
              <h3 className="">Problem Space</h3>
              {studyCases[0].problem.map((item, index) => (
                <li className="" key={index}>
                  {item}
                </li>
              ))}
            </div>
            <div className="divider__container">
              <h3>Solutions</h3>
              {studyCases[0].solutions.map((item, index) => (
                <li className="" key={index}>
                  {item}
                </li>
              ))}
            </div>
          </div>

          <h2 className="emphasis">Design Process</h2>
          <ol className="divider bold">
            {studyCases[0].process.map((item, index) => (
              <li className="case__text--tag" key={index}>
                {item}
              </li>
            ))}
          </ol>
        </div>
        <h3 className="">01 Empathize</h3>
        <p>
          The application is designed for individual users, not businesses. It
          targets young adults looking to improve their financial control. It is
          aimed at people who prefer cute and visual-candy interfaces.
        </p>
        <p className="bold">Research</p>
        <p>
          Five college students aged between 20 and 25 were asked the following
          questions:
        </p>
        <ol>
          {" "}
          {studyCases[0].questions.map((item, index) => (
            <li className="" key={index}>
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
        {/* <p>Question made</p>
        <p>quantitative research (graficos)</p> */}
        <p className="bold">Competitive Analysis</p>
        <p> {studyCases[0].comparative} </p>
        <h3 className="">02 Define</h3>
        <p className="bold">User Persona</p>
        <img
          className="case__multimedia--chart"
          src={userPersona}
          alt="User persona chart"
        />
        <h3 className="">03 Ideate</h3>
        <p className="bold"> Flow chart</p>
        <img
          className="case__multimedia--chart"
          src={flowChart}
          alt="Flow chart"
        />
        <h3 className="">04 Design</h3>
        <p className="bold">Sketchs</p>
        <img
          className="case__multimedia--chart"
          src={sketch01}
          alt="Design chart"
        />
        <img
          className="case__multimedia--chart"
          src={sketch04}
          alt="Design chart"
        />
        <img
          className="case__multimedia--chart"
          src={sketch05}
          alt="Design chart"
        />
        <img
          className="case__multimedia--chart"
          src={sketch06}
          alt="Design chart"
        />
        <img
          className="case__multimedia--chart"
          src={sketch02}
          alt="Design chart"
        />
      </div>
    </article>
  );
}
