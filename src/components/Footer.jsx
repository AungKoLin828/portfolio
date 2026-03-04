import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h3 className="footer-name">Aung Ko Lin</h3>
          <p className="footer-role">Senior Java Developer</p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <a
            href="https://github.com/AungKoLin828"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:aungko.linn404@gmail.com" className="footer-icon">
            <FaEnvelope />
          </a>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
