import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import portfolioData from "../data/portfolio.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full overflow-hidden">
      <LoadingScreen />
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Hero data={portfolioData.hero} />
        
        <section id="about" className="min-h-screen py-24 flex flex-col justify-center">
          <h2 className="text-4xl text-white font-bold mb-12 border-b border-zinc-800 pb-4">About Me</h2>
          <About data={portfolioData.about} />
        </section>

        <section id="skills" className="min-h-screen py-24 flex flex-col justify-center">
          <h2 className="text-4xl text-white font-bold mb-12 border-b border-zinc-800 pb-4">Skills & Tools</h2>
          <Skills />
        </section>

        <section id="experience" className="min-h-screen py-24 flex flex-col justify-center">
          <h2 className="text-4xl text-white font-bold mb-12 border-b border-zinc-800 pb-4">Experience</h2>
          <Experience data={portfolioData.experience} />
        </section>

        <section id="projects" className="min-h-screen py-24 flex flex-col justify-center">
          <h2 className="text-4xl text-white font-bold mb-12 border-b border-zinc-800 pb-4">Projects</h2>
          <Projects data={portfolioData.projects} />
        </section>

        <section id="education" className="min-h-screen py-24 flex flex-col justify-center">
          <h2 className="text-4xl text-white font-bold mb-12 border-b border-zinc-800 pb-4">Education</h2>
          <Education data={portfolioData.education} />
        </section>

        <section id="contact" className="min-h-screen py-24 flex flex-col justify-center">
          <h2 className="text-4xl text-white font-bold mb-12 border-b border-zinc-800 pb-4">Contact</h2>
          <Contact />
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
