"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import cssLogo from "@/assets/images/CSS3.svg";
import expressLogo from "@/assets/images/Express.svg";
import gitLogo from "@/assets/images/Git.svg";
import githubLogo from "@/assets/images/GitHub.svg";
import gitlabLogo from "@/assets/images/GitLab.svg";
import htmlLogo from "@/assets/images/HTML5.svg";
import jsonLogo from "@/assets/images/JSON.svg";
import jsLogo from "@/assets/images/JavaScript.svg";
import mongoLogo from "@/assets/images/MongoDB.svg";
import nextLogo from "@/assets/images/Next.js.svg";
import postmanLogo from "@/assets/images/Postman.svg";
import reactLogo from "@/assets/images/React.svg";
import tailwindLogo from "@/assets/images/Tailwind CSS.svg";
import tsLogo from "@/assets/images/TypeScript.svg";
import vscodeLogo from "@/assets/images/Visual Studio Code (VS Code).svg";

const skills = [
  { name: "React", logo: reactLogo },
  { name: "Next.js", logo: nextLogo },
  { name: "TypeScript", logo: tsLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "HTML5", logo: htmlLogo },
  { name: "CSS3", logo: cssLogo },
  { name: "Node.js (Express)", logo: expressLogo },
  { name: "MongoDB", logo: mongoLogo },
  { name: "JSON", logo: jsonLogo },
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "GitLab", logo: gitlabLogo },
  { name: "Postman", logo: postmanLogo },
  { name: "VS Code", logo: vscodeLogo },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="flex flex-col items-center gap-3 group"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex items-center justify-center p-4 group-hover:border-zinc-500 group-hover:bg-zinc-800/50 transition-all duration-300">
            <Image 
              src={skill.logo} 
              alt={skill.name} 
              width={48} 
              height={48} 
              className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
              style={skill.name === "Next.js" || skill.name === "GitHub" ? { filter: "invert(1) drop-shadow(0 0 8px rgba(255,255,255,0.2))" } : undefined}
            />
          </div>
          <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors text-center">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
