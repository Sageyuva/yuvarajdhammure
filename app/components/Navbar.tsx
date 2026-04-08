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
          ? "py-4 glass border-b border-blue-500/10 shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group relative">
          <span className="text-[15px] font-extrabold tracking-[0.25em] text-white drop-shadow-md uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
            YD
          </span>
          <div className="absolute -inset-2 bg-blue-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-zinc-300 hover:text-white drop-shadow-sm tracking-wide transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:yuvarajdhammure@gmail.com"
            className="ml-2 text-sm font-bold tracking-wide text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-6 py-2.5 hover:from-blue-500 hover:to-purple-500 accent-glow-blue transition-all duration-300 text-shadow-sm"
          >
            Hire me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-zinc-200 hover:text-white transition-colors drop-shadow-sm"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden absolute top-full inset-x-0 glass border-b border-blue-500/10 px-6 pt-4 pb-8 flex flex-col gap-1 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-[17px] font-semibold text-zinc-200 hover:text-white border-b border-blue-500/10 transition-colors drop-shadow-sm"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="mailto:yuvarajdhammure@gmail.com"
            className="mt-6 text-center text-[15px] font-bold tracking-wide text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-5 py-3 hover:from-blue-500 hover:to-purple-500 accent-glow-blue transition-all duration-300"
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}
