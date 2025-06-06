"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for mobile menu toggle icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full fixed z-[500000]
     backdrop-blur-md bg-black/30 text-white">
      <div className="flex justify-between items-center py-4 px-6 md:px-12">
        <h1 className="text-white font-bold text-xl hover:cursor-pointer">Yuvaraj.</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-gray-300 transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 bg-black/70 backdrop-blur-md text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 border-b border-gray-700 hover:text-gray-300 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
