"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex fixed justify-between items-center py-6 px-8 md:px-12 bg-transparent">
      <h1  className="text-white font-bold text-xl hover:cursor-pointer">Yuvaraj.</h1>
      <ul className="hidden md:flex space-x-8 text-sm text-white font-medium">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
