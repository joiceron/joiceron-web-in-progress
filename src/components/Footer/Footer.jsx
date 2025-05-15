import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__txt" data-section="contact">
        <a
          href="mailto:joiceron@hotmail.com"
          className="footer__txt--link"
          data-animate-effect="fadeInLeft"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="">
            <i className="fas fa-envelope"></i>
          </span>
          <p className="">joiceron@hotmail.com</p>
        </a>

        <a
          href="https://www.linkedin.com/in/joiceron/"
          className="footer__txt--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="colorlib-icon">
            <i className="icon-linkedin2"></i>
          </div>
          <div className="colorlib-text">
            <p>LinkedIn.com/joiceron</p>
          </div>
        </a>

        <a
          href="https://github.com/joiceron"
          className="footer__txt--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="colorlib-icon">
            <i className="fab fa-github"></i>
          </div>
          <div className="colorlib-text">
            <p>Github.com/joiceron</p>
          </div>
        </a>
        <a
          href="https://github.com/joiceron"
          className="footer__txt--link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="colorlib-icon">
            <i className="fab fa-github"></i>
          </div>
          <div className="colorlib-text">
            <p>Download Resume</p>
          </div>
        </a>
        
      </section>
   
          <small className="footer__txt--copy">
            &copy; Copyright 2025. All rights reserved. Made with
            <i className="icon-heart" aria-hidden="true"></i> by Joice Ceron
          </small>
    </footer>
  );
}
