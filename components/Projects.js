"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const Projects = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projectData = [
    {
      title: "Translation Management System",
      description:
        "A comprehensive translation management system that simplifies the localization process for developers and content managers.",
      image: "/project1.png", // Use string path instead of import
      link: "https://example.com/translation-system",
      technologies: [
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "Axios",
        "Filestack",
      ],
      keyFeatures: [
        "Multi-language support with dynamic language switching",
        "User authentication and role management",
        "User-friendly interface for managing translations",
        "Integration with Filestack for file uploads",
      ],
    },
  ];

  if (!isClient) {
    return null; // Return null on server-side
  }

  return (
    <section
      id="projects"
      className="bg-black text-white px-6 md:px-20 py-16 min-h-screen"
    >
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      {projectData.map((project) => (
        <div
          key={project.title}
          className="flex flex-col md:flex-row items-start gap-10 rounded-2xl bg-[#0e0e0e] p-6 md:p-10 border border-[#222] shadow-lg mb-12"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority={true}
              style={{ objectFit: 'cover' }}
              loading="eager"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#1f1f1f] text-sm text-white px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mb-2">
              <p className="font-semibold text-white mb-1">Key Features:</p>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                {project.keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black font-medium bg-white px-4 py-2 rounded-md w-fit hover:bg-gray-200 transition"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
