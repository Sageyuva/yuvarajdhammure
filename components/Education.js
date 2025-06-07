"use client";

import React from "react";

// JSON-based education data
const educationData = [
  {
    icon: "🎓",
    institution: "Sharanbasva University, Gulbarga",
    degree: "BCA (Bachelor of Computer Applications), Computer Applications",
    date: "Oct 2019 – Jul 2023",
    cgpa: "8.23/10",
  },
  {
    icon: "🏫",
    institution: "Shree Guru Vidya Peetha, Gulbarga",
    degree: "Pre-University Course (PUC), Science",
    date: "Aug 2017 – Jun 2019",
    percentage: "58/100",
  },
];

const Education = () => {
  return (
    <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>

      <div className="space-y-8">
        {educationData.map((edu, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <div className="text-2xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center">
              {edu.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{edu.institution}</h3>
              <p className="text-gray-300">{edu.degree}</p>
              <p className="text-sm text-gray-400 mt-1">
                {edu.date}
                <span className="mx-2">•</span>
                {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
