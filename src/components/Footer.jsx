import profile from "../data/profile.json";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h3 className="footer-name">{profile.name}</h3>
          <p className="footer-role">{profile.role}</p>
          <p className="footer-location">📍 {profile.location}</p>
        </div>

        {/* Center Section - Social & Contact */}
        <div className="footer-center flex justify-center gap-6">
          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noreferrer"
            className="footer-social-icon"
          >
            <FaGithub />
          </a>

          <a
            href={`https://linkedin.com/in/${profile.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="footer-social-icon"
          >
            <FaLinkedin />
          </a>

          <a href={`mailto:${profile.email}`} className="footer-social-icon">
            <FaEnvelope />
          </a>

          <a href={`tel:${profile.phone}`} className="footer-social-icon">
            <FaPhone />
          </a>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <p>📞 {profile.phone}</p>
          <p>
            © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
