export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-black pt-8 pb-8 text-center text-sm text-zinc-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <p>© {new Date().getFullYear()} Yuvaraj Dhammure. All rights reserved.</p>
        <p className="mt-2 text-zinc-600">Built with Next.js, Tailwind CSS, GSAP, and Framer Motion.</p>
      </div>
    </footer>
  );
}
