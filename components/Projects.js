"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [imageErrors, setImageErrors] = useState({});

  const projectData = [
    {
      id: 1,
      title: "Translation Management System",
      description:
        "A comprehensive translation management system that simplifies the localization process for developers and content managers.",
      image: "/project1.png",
      link: "https://www.datagainconnect.com/",
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
    {
      id: 2,
      title: "DEV-Arena | AI powered social media platform",
      description:
        "A social media platform that uses AI for coding battles and improve your coding skills and connect with other developers.",
      image: "/devarena.png",
      link: "https://devarena-frontend-main-3q1y.vercel.app/",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "MongoDB",
        "Socket.io",
        "Express.js",
        "Node.js",
        "OpenAI API",
      ],
      keyFeatures: [
        "Real-time chat functionality",
        "AI-powered coding battles",
        "Connect with other developers",
        "User authentication system",
        "Integration with OpenAI for AI-powered coding battles",
      ],
    },
  ];

  const handleImageError = (projectId) => {
    setImageErrors(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      {projectData.map((project) => (
        <div
          key={project.id}
          className="flex flex-col md:flex-row items-start gap-10 rounded-2xl bg-[#0e0e0e] p-6 md:p-10 border border-[#222] shadow-lg mb-12"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded-xl overflow-hidden bg-[#1f1f1f]">
            {!imageErrors[project.id] ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority={project.id === 1}
                onError={() => handleImageError(project.id)}
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <span>Image not available</span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#1f1f1f] text-sm text-white px-3 py-1 rounded-full border border-[#333]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mb-4">
              <p className="font-semibold text-white mb-2">Key Features:</p>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                {project.keyFeatures.map((feature, index) => (
                  <li key={`${project.id}-feature-${index}`}>{feature}</li>
                ))}
              </ul>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black font-medium bg-white px-4 py-2 rounded-md w-fit hover:bg-gray-200 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
