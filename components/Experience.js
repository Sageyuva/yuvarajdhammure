"use client";

import React from "react";

// Experience data as JSON
const experienceData = [
  {
    role: "React js Developer",
    company: "Datagain Services",
    date: "Dec 2024 – Present",
    points: [
      "Worked on a live project called Translation Management System",
      "Using Next.js, Built portals to streamline the localization business",
      "Integrated API for file uploads and dynamic data storage and management",
      "Integrated filestack for file uploads and management",
      "Integrated screen reponsive friendly UI for better accessibility",
    ],
    tags: ["Next.js", "ReactJs", "JavaScript","Typescript", "TailwindCSS", "Filestack"],
  },
  {
    role: "Associate Software Engineer",
    company: "Aten info solutions",
    date: "Jan 2023 – Oct 2024",
    points: [
      "WOrked on Business management system for a client",
      "Implemented screen reponsive friendly UI for better accessibility and added visual data representation",
      "Integrated API for dynamic data storage and management",
    ],
    tags: ["React", "JavaScript", "UI/UX", "Responsive Design"],
  },
   {
    role: "Full Stack Developer Intern",
    company: "Vivartan Technologies",
    date: "May 2023 – Jun 2023",
    points: [
      "Worked on E-commerce website for a client",
      "Designed and implemented responsive UI for better accessibility",
      "Integrated API for dynamic data storage and management",
      "Used php and mysql for backend",
      "Used html, css, javascript for frontend",
    ],
    tags: ["React", "JavaScript", "UI/UX", "Responsive Design", "PHP", "MySQL"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>

      {experienceData.map((exp, idx) => (
        <div key={idx} className="mb-12">
          <div className="flex justify-between flex-wrap mb-2">
            <div>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400">{exp.company}</p>
            </div>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">{exp.date}</p>
          </div>

          <ul className="list-disc list-inside text-gray-300 mb-3 space-y-1 pl-4">
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-800 text-sm px-3 py-1 rounded-full border border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
