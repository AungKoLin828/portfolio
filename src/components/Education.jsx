import { motion } from "framer-motion";
import education from "../data/education.json";

export default function Education() {
  return (
    <section className="py-24 px-6 md:px-12">
      <h2 className="section-title">EDUCATION </h2>

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="card p-6 mb-8 w-full md:w-2/3"
          >
            <div className="flex flex-col items-center gap-2 mb-2">
              <div className="px-4 py-2 bg-gradient-to-br from-cyan-800 to-cyan-700 rounded-xl border border-cyan-600">
                <span className="text-lg font-bold text-white">{edu.year}</span>
              </div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-slate-400 leading-relaxed"> • {edu.institution}</p>
            </div>
            <p className="text-slate-400 leading-relaxed">Detail : {edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
