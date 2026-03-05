import { motion } from "framer-motion";
import education from "../data/education.json";

export default function Education() {
  return (
    <section id="education">
  <h2 className="section-title">EDUCATION</h2>

  <div className="education-grid">
    {education.map((edu, i) => (
      <div key={i} className="education-card">
        <div className="education-header">
          <div className="education-icon">🎓</div>

          <div>
            <div className="education-degree">{edu.degree}</div>
            <div className="education-university">{edu.institution}</div>
            <div className="education-year">{edu.year}</div>
          </div>
        </div>

        <div className="education-description">
          {edu.description}
        </div>
      </div>
    ))}
  </div>
</section>
  );
}