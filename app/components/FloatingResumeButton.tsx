import { Download } from "lucide-react";

export default function FloatingResumeButton() {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group">
      {/* Subtle outer glow that intensifies on hover */}
      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-400/40 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      
      <a
        href="/Resume.pdf"
        download="Yuvaraj_Resume.pdf"
        className="relative flex items-center justify-center gap-2.5 rounded-full glass border border-blue-500/20 px-6 py-3.5 md:px-7 font-medium text-sm text-blue-100 transition-all duration-300 hover:scale-105 group-hover:text-white group-hover:border-blue-400/40 group-hover:bg-blue-900/40 group-hover:accent-glow-blue shadow-[0_8px_30px_rgba(59,130,246,0.3)] active:scale-95"
        aria-label="Download Resume"
      >
        <Download size={18} className="text-blue-300 group-hover:text-white transition-colors duration-300" />
        <span className="hidden md:inline tracking-wide font-semibold">Download Resume</span>
        <span className="inline md:hidden tracking-wide font-semibold">Resume</span>
      </a>
    </div>
  );
}
