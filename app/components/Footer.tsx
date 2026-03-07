export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-[0.2em] text-zinc-300 uppercase">YD</span>
          {/* <span className="w-1 h-1 rounded-full bg-emerald-500" /> */}
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
