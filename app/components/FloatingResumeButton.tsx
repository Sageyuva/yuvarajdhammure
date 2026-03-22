import { Download } from "lucide-react";

export default function FloatingResumeButton() {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-100 group">
      {/* Subtle outer glow that intensifies on hover */}
      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      
      <a
        href="/Resume.pdf"
        download="Yuvaraj_Resume.pdf"
        className="relative flex items-center justify-center gap-2.5 rounded-full bg-zinc-900/90 backdrop-blur-xl border border-white/10 px-6 py-3.5 md:px-7 font-medium text-sm text-zinc-300 transition-all duration-300 hover:scale-105 group-hover:text-white group-hover:bg-zinc-800/90 group-hover:border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.5)] active:scale-95"
        aria-label="Download Resume"
      >
        <Download size={18} className="text-zinc-400 group-hover:text-white transition-colors duration-300" />
        <span className="hidden md:inline tracking-wide font-semibold">Download Resume</span>
        <span className="inline md:hidden tracking-wide font-semibold">Resume</span>
      </a>
    </div>
  );
}
