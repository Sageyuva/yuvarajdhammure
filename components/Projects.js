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
      className="py-12 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg bg-[#0e0e0e] border border-[#222] overflow-hidden hover:border-[#333] transition-all duration-300 hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="w-full h-48 relative overflow-hidden bg-[#1f1f1f]">
                {!imageErrors[project.id] ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
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
              <div className="p-5 flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#1a1a1a] text-xs text-gray-300 px-2.5 py-1 rounded-md border border-[#2a2a2a]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs text-gray-500 px-2.5 py-1">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div>
                  <p className="font-medium text-sm text-white mb-2">Key Features:</p>
                  <ul className="list-disc list-inside text-xs text-gray-400 space-y-1">
                    {project.keyFeatures.slice(0, 3).map((feature, index) => (
                      <li key={`${project.id}-feature-${index}`} className="line-clamp-1">{feature}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-medium bg-[#1a1a1a] px-4 py-2 rounded-md w-fit hover:bg-[#2a2a2a] transition-all duration-200 border border-[#2a2a2a]"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
