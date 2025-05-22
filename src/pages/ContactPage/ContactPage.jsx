import "./ContactPage.scss";
import mailIcon from "../../assets/icons/mail-icon.svg";
import gitHubIcon from "../../assets/icons/github-icon.svg";
import linkedInIcon from "../../assets/icons/linkein-icon.svg";
import downloadIcon from "../../assets/icons/download-icon.svg";

export default function ContactPage() {
  return (
    <main className="contact">
      <section className="">
        <h2 className="contact__title emphasis">Happy to work together! </h2>
      </section>
      <section className="contact__txt" data-section="contact">
        <a
          href="mailto:joiceron@hotmail.com"
          className="contact__txt--link button"
          data-animate-effect="fadeInLeft"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="contact__txt--icon" src={mailIcon} alt="Envelop icon"/>
         joiceron@hotmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/joiceron/"
          className="contact__txt--link button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="contact__txt--icon" src={linkedInIcon} alt="LinkedIn logo" />

       LinkedIn.com/joiceron
        </a>

        <a
          href="https://github.com/joiceron"
          className="contact__txt--link button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="contact__txt--icon" src={gitHubIcon} alt="GitHub logo" />

         Github.com/joiceron
        </a>
        <a
          href="https://drive.google.com/file/d/1Tm08F8mE2kumRrLf5if94jhQZxlTmITi/view"
          className="contact__txt--link button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="contact__txt--icon" src={downloadIcon}  alt="Arrow icon"/>

          Download Resume
        </a>
      </section>
    </main>
  );
}
