import "./ContactPage.scss";
import mailIcon from "../../assets/icons/mail-icon.svg";
import gitHubIcon from "../../assets/icons/github-icon.svg";
import linkedInIcon from "../../assets/icons/linkein-icon.svg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <main className="contact">
      <section className="">
        <p className="contact__title emphasis">Happy to work together! </p>
      </section>
      <section className="contact__txt" data-section="contact">
        <Link
          href="mailto:joiceron@hotmail.com"
          className="contact__txt--link button"
          data-animate-effect="fadeInLeft"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="contact__txt--icon"
            src={mailIcon}
            alt="Envelop icon"
          />
          joiceron@hotmail.com
        </Link>

        <Link
          href="https://www.linkedin.com/in/joiceron/"
          className="contact__txt--link button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="contact__txt--icon"
            src={linkedInIcon}
            alt="LinkedIn logo"
          />
          LinkedIn.com/joiceron
        </Link>

        <Link
          href="https://github.com/joiceron"
          className="contact__txt--link button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="contact__txt--icon"
            src={gitHubIcon}
            alt="GitHub logo"
          />
          Github.com/joiceron
        </Link>
        <Link
          href="https://drive.google.com/file/d/1bX4TQu0EdvgEw64UKCSNl2YQIMO_5Dwg/view?usp=sharing"
          className="contact__txt--link button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="contact__txt--icon"
            src={downloadIcon}
            alt="Arrow icon"
          />
          Download Resume
        </Link>
      </section>
    </main>
  );
}
