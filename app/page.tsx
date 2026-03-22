import LoadingScreen from "./components/LoadingScreen";
import Navbar        from "./components/Navbar";
import Footer        from "./components/Footer";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Skills        from "./components/Skills";
import Experience    from "./components/Experience";
import Projects      from "./components/Projects";
import Education     from "./components/Education";
import Contact       from "./components/Contact";
import portfolioData from "../data/portfolio.json";
import FloatingResumeButton from "./components/FloatingResumeButton";

/* ── Shared section heading ────────────────────────────────────────── */
function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-end gap-6 mb-16 pb-6 border-b border-zinc-900">
      <span className="text-[11px] font-mono text-zinc-700 tracking-[0.25em] leading-none pb-0.5">
        {num}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none">
        {title}
      </h2>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <LoadingScreen />
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <Hero data={portfolioData.hero} />

        {/* ── About ── */}
        <section id="about" className="py-32">
          <SectionHeading num="01" title="About Me" />
          <About data={portfolioData.about} />
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="py-32">
          <SectionHeading num="02" title="Skills" />
          <Skills data={portfolioData.skills} />
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="py-32">
          <SectionHeading num="03" title="Experience" />
          <Experience data={portfolioData.experience} />
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="py-32">
          <SectionHeading num="04" title="Projects" />
          <Projects data={portfolioData.projects} />
        </section>

        {/* ── Education ── */}
        <section id="education" className="py-32">
          <SectionHeading num="05" title="Education" />
          <Education data={portfolioData.education} />
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-32">
          <SectionHeading num="06" title="Contact" />
          <Contact />
        </section>
      </div>

      <Footer />
      <FloatingResumeButton />
    </main>
  );
}
