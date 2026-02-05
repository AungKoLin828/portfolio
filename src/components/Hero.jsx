import { motion } from "framer-motion";
import profile from "../data/profile.json";

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-800">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto card p-8 sm:p-10 flex flex-col items-center text-center gap-6"
      >
        {/* Name and Role */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white break-words">{profile.name}</h1>
        <p className="text-3xl sm:text-3xl md:text-3xl font-semibold text-cyan-400">{profile.role}</p>

        {/* Summary */}
        <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
          {profile.summary}
        </p>

        {/* Experience & Location */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <span className="bg-slate-700/50 px-4 py-2 rounded-full text-slate-200 font-medium">Location : {profile.location}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-3">
          <span className="bg-slate-700/50 px-4 py-2 rounded-full text-slate-200 font-medium">Email : {profile.email}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-3">
          <span className="bg-slate-700/50 px-4 py-2 rounded-full text-slate-200 font-medium">Phone : {profile.phone}</span>
        </div>

        {/* GitHub & LinkedIn */}
        <div className="flex flex-wrap justify-center gap-4 mt-3">
          <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" className="bg-slate-700/50 px-4 py-2 rounded-full text-white font-medium hover:bg-slate-600">LinkedIn : https://www.linkedin.com/in/aung-ko-lin-2463aa215</a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-3">
          <a href={`https://github.com/${profile.github}`} target="_blank" className="bg-slate-700/50 px-4 py-2 rounded-full text-white font-medium hover:bg-slate-600">GitHub : https://github.com/AungKoLin828</a>
        </div>
      </motion.div>
    </section>
  );
}
