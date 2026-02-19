import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Responsibilities from "./components/Responsibilities";
import WhyHireMe from "./components/WhyHireMe";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-800 text-slate-100 overflow-x-hidden">
      <Menu />

      {/* Add padding top to prevent overlap with fixed menu */}
      <main className="pt-20"> 
        <section id="hero"><Hero /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="responsibilities"><Responsibilities /></section>
        <section id="contact"><Contact /></section>
        <section id="whyhireme"><WhyHireMe /></section>
      </main>
       <BackToTop />
    </div>
  );
}
