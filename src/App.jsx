import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Responsibilities from "./components/Responsibilities";
import WhyHireMe from "./components/WhyHireMe";

export default function App() {
  return (
    <div className="min-h-screen text-slate-100 font-sans overflow-x-hidden">
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Responsibilities/>
      <WhyHireMe />
    </div>
  );
}
