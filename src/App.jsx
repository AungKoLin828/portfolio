import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Responsibilities from "./components/Responsibilities";
import WhyHireMe from "./components/WhyHireMe";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-800 text-slate-100 font-sans overflow-x-hidden">
      
      {/* Fixed Navbar */}
      <Menu />

      {/* Main Content */}
      <main className="pt-20 w-full">
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
        </section>

        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Education />
        </section>

        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Projects />
        </section>

        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skills />
        </section>

        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Responsibilities />
        </section>

        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <WhyHireMe />
        </section>
      </main>
    </div>
  );
}
