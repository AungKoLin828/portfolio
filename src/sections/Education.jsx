import { motion } from "framer-motion";
import education from "../data/education.json";
import GlassCard from "../components/GlassCard";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-black/50">
      <h2 className="section-title">Education</h2>
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <GlassCard>
              <div className="flex flex-col items-center gap-2 mb-2">
                <div className="px-4 py-2 bg-gradient-to-br from-cyan-800 to-cyan-700 rounded-xl border border-cyan-600">
                  <span className="text-lg font-bold text-white">
                    {edu.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-slate-400">• {edu.institution}</p>
              </div>
              <p className="text-slate-400 mt-2">{edu.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
