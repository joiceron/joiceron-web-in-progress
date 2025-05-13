import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="colorlib-contact" data-section="contact">
        <a
          href="mailto:joiceron@hotmail.com"
          className="colorlib-feature colorlib-feature-sm"
          data-animate-effect="fadeInLeft"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="colorlib-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="colorlib-text">
            <p>joiceron@hotmail.com</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/joiceron/"
          className="colorlib-feature colorlib-feature-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="colorlib-icon">
            <i className="icon-linkedin2"></i>
          </div>
          <div className="colorlib-text">
            <p>LinkedIn.com/in/joiceron</p>
          </div>
        </a>

        <a
          href="https://github.com/joiceron"
          className="colorlib-feature colorlib-feature-sm"
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

        <div className="colorlib-footer">
          <p>
            <small>
              &copy; Copyright 2025. All rights reserved. Made with
              <i className="icon-heart" aria-hidden="true"></i> by Joice Ceron
            </small>
          </p>
        </div>
      </section>
    </footer>
  );
}
