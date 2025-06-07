"use client";

import React from "react";

// Experience data as JSON
const experienceData = [
  {
    role: "React js Developer",
    company: "Datagain Services",
    date: "Dec 2024 – Present",
    points: [
      "Worked on a live project called Cura Care (curacare.in)",
      "Implemented website analytics to track user interactions using PostHog, Google Analytics, and Facebook Pixel",
      "Developed dynamic slot management system based on bookings",
    ],
    tags: ["Next.js", "ReactJs", "JavaScript", "TailwindCSS"],
  },
  {
    role: "Associate Software Engineer",
    company: "Aten info solutions",
    date: "Jan 2023 – Oct 2024",
    points: [
      "Developed a CMS dashboard for eDeshkaam, enhancing UI/UX and improving user interaction",
      "Designed and implemented responsive 'Important Links' and 'Events' pages using React.js",
    ],
    tags: ["React", "JavaScript", "UI/UX", "Responsive Design"],
  },
   {
    role: "Full Stack Developer Intern",
    company: "Vivartan Technologies",
    date: "May 2023 – Jun 2023",
    points: [
      "Developed a CMS dashboard for eDeshkaam, enhancing UI/UX and improving user interaction",
      "Designed and implemented responsive 'Important Links' and 'Events' pages using React.js",
    ],
    tags: ["React", "JavaScript", "UI/UX", "Responsive Design"],
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
