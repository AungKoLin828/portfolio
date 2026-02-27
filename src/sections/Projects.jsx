import { motion } from "framer-motion";
import projects from "../data/projects.json";
import GlassCard from "../components/GlassCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <h2 className="section-title">Professional Experiences</h2>

      {/* Company / Role Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <GlassCard className="p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            DIR-ACE Technology Ltd
          </h3>
          <p className="text-slate-300 mt-1">
            MICT Park, Hlaing Township, Yangon, Myanmar
          </p>
          <p className="mt-4 text-cyan-400 text-lg sm:text-xl font-semibold">
            Project Leader / Senior Java Developer
          </p>
          <span className="inline-block mt-3 bg-white/10 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium">
            From 2017 – Present
          </span>
        </GlassCard>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
            }}
            className={`w-full max-w-xl`}
          >
            <GlassCard
              className={`p-6 ${p.highlight ? "border-cyan-500/50" : ""}`}
            >
              <h4 className="text-xl sm:text-2xl font-semibold text-white">
                {p.title}
              </h4>
              <p className="mt-3 text-slate-300 text-sm sm:text-base">
                {p.description}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {p.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/10 text-cyan-300 px-3 py-1 rounded-full text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
