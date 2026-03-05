import { motion } from "framer-motion";
import projects from "../data/projects.json";
import GlassCard from "../components/GlassCard";

export default function Projects() {
  return (
    <section id="projects" className="projects-section-wrapper">
      <h2 className="section-title">Professional Experiences</h2>

      {/* Company Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="company-wrapper"
      >
        <GlassCard>
          <div className="project-company-item">
            <div className="project-icon">🏢</div>

            <div className="project-content">
              <div className="project-title">
                DIR-ACE Technology Ltd
              </div>

              <div className="project-subtitle">
                MICT Park, Hlaing Township, Yangon, Myanmar
              </div>

              <div className="project-role">
                Project Leader / Senior Java Developer
              </div>

              <div className="project-year">
                From 2017 – Present
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <div className="project-item">
                <div className="project-icon">📁</div>

                <div className="project-content">
                  <div className="project-title">
                    {p.title}
                  </div>

                  <div className="project-description">
                    {p.description}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}