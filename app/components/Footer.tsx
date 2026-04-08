export default function Footer() {
  return (
    <footer className="border-t border-blue-500/10 mt-24 glass">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 group">
          <span className="text-xs font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 uppercase">YD</span>
        </div>
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} Yuvaraj Dhammure — All rights reserved
        </p>
        <p className="text-xs text-zinc-400">
          Next.js · GSAP · Framer Motion
        </p>
      </div>
    </footer>
  );
}
