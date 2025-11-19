"use client";

import React from "react";
import { Mail, MapPin, Download, Github, Linkedin } from "lucide-react";
import TechStackGrid from "@/components/TechStackGrid";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col-reverse md:flex-row justify-evenly items-center px-6 md:px-20 bg-black text-white pt-20">
      {/* LEFT: Hero Content */}
      <div className="flex flex-col justify-center max-w-2xl">
        <p className="text-sm mb-2 text-gray-400">Full Stack Web and Mobile Developer</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Yuvaraj Dhammure</h1>

        <div className="flex items-center space-x-6 mb-6 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>Yuvarajdhammure@zohomail.in</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} />
            <span>Bangalore, India</span>
          </div>
        </div>

        <p className="text-gray-300 max-w-xl mb-6 leading-relaxed">
          A goal-oriented software developer with experience in building web
          applications using modern technologies like React, Next.js, and more.
          Seeking to leverage my technical skills to deliver exceptional user
          experiences.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
          
            className="bg-white text-black px-4 py-2 rounded flex items-center space-x-2 cursor-pointer"
          >
            <Mail size={16} />
            <span>Get Resume</span>
          </button>
          <a href="https://github.com/Sageyuva" className="p-2 border border-gray-700 rounded">
            <Github size={20} />
          </a>
        </div>
      </div>

      {/* RIGHT: Tech Stack Animated Grid */}
      <div className="mb-12 md:mb-0 md:ml-16">
        <TechStackGrid />
      </div>
    </section>
  );
};

export default Hero;
