import { motion } from "framer-motion";
import profile from "../data/profile.json";
import { FiDownload } from "react-icons/fi";
import GlassCard from "../components/GlassCard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-800"
      style={{ paddingTop: "7%" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <GlassCard className="p-20 flex flex-col items-center text-center gap-6">
          {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            {profile.name}
          </h1> */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-cyan-400">
            {profile.role}
          </p>
          <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
            {profile.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl mt-6">
            <div className="px-4 py-2 bg-white/10 rounded-xl text-white">
              📍 {profile.location}
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-xl text-white break-all">
              ✉ {profile.email}
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-xl text-white break-all">
              📞 {profile.phone}
            </div>
            <a
              href={`https://linkedin.com/in/${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/10 rounded-xl text-white hover:bg-cyan-500/20 transition break-all"
            >
              🔗 LinkedIn
            </a>
            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/10 rounded-xl text-white hover:bg-cyan-500/20 transition break-all"
            >
              💻 GitHub
            </a>
            <a
              href="/AUNG KO LIN_Resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <FiDownload className="text-xl" />
              Download Resume
            </a>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
