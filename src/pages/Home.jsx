import Hero from "../sections/Hero";
import Education from "../sections/Education";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Responsibilities from "../sections/Responsibilities";
import Contact from "../sections/Contact";
import WhyHireMe from "../sections/WhyHireMe";

export default function Home() {
  return (
    <>
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Responsibilities />
      <Contact />
      <WhyHireMe />
    </>
  );
}
