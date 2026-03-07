"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About",      href: "#about" },
  { name: "Skills",     href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects",   href: "#projects" },
  { name: "Education",  href: "#education" },
  { name: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/[0.04]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">
            YD
          </span>
          <span className="w-1 h-1 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform" />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-zinc-500 hover:text-white tracking-wide transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:yuvarajdhammure@gmail.com"
            className="ml-2 text-[13px] font-semibold text-black bg-white rounded-full px-5 py-2 hover:bg-zinc-200 transition-colors"
          >
            Hire me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden absolute top-full inset-x-0 bg-black/95 backdrop-blur-xl border-b border-white/[0.04] px-6 pt-4 pb-8 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-zinc-400 hover:text-white border-b border-zinc-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:yuvarajdhammure@gmail.com"
            className="mt-6 text-center text-sm font-semibold text-black bg-white rounded-full px-5 py-3 hover:bg-zinc-200 transition-colors"
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}
