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
    <div className="relative flex items-end gap-6 mb-16 pb-6 border-b border-blue-500/10">
      <span className="text-[11px] font-mono text-blue-400/60 tracking-[0.25em] leading-none pb-0.5">
        {num}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none">
        {title}
      </h2>
      {/* Accent underline glow */}
      <div className="absolute bottom-0 left-0 h-px w-24 bg-gradient-to-r from-blue-500 to-purple-500 opacity-80" />
      <div className="absolute bottom-0 left-0 h-px w-24 bg-gradient-to-r from-blue-500 to-purple-500 blur-sm opacity-60" />
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ── Ambient gradient blobs ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/[0.07] rounded-full blur-[120px]" style={{ animation: "float-blob 20s ease-in-out infinite" }} />
        <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] bg-purple-600/[0.05] rounded-full blur-[120px]" style={{ animation: "float-blob 25s ease-in-out infinite reverse" }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[100px]" style={{ animation: "float-blob 22s ease-in-out infinite 5s" }} />
      </div>

      <LoadingScreen />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

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
