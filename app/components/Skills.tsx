"use client";
import { motion } from "framer-motion";
import { Code2, Layers, Terminal, Bot } from "lucide-react";
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

const LOGOS = [
  { src: reactLogo, alt: "React.js", invert: false },
  { src: nextLogo, alt: "Next.js", invert: true },
  { src: tsLogo, alt: "TypeScript", invert: false },
  { src: jsLogo, alt: "JavaScript", invert: false },
  { src: htmlLogo, alt: "HTML5", invert: false },
  { src: cssLogo, alt: "CSS3", invert: false },
  { src: tailwindLogo, alt: "Tailwind CSS", invert: false },
  { src: mongoLogo, alt: "MongoDB", invert: false },
  { src: expressLogo, alt: "Express.js", invert: false },
  { src: gitLogo, alt: "Git", invert: false },
  { src: githubLogo, alt: "GitHub", invert: true },
  { src: gitlabLogo, alt: "GitLab", invert: false },
  { src: jsonLogo, alt: "JSON", invert: false },
  { src: postmanLogo, alt: "Postman", invert: false },
  { src: vscodeLogo, alt: "VS Code", invert: false },
];

const CATS = [
  {
    key: "frontend",
    label: "Frontend",
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-500/5",
    border: "border-blue-500/10 hover:border-blue-500/30",
    chipColor: "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-400/40",
  },
  {
    key: "ui_ux",
    label: "UI / UX",
    icon: Layers,
    color: "text-purple-400",
    bg: "bg-purple-500/5",
    border: "border-purple-500/10 hover:border-purple-500/30",
    chipColor: "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:border-purple-400/40",
  },
  {
    key: "backend_tools",
    label: "Backend & Tools",
    icon: Terminal,
    color: "text-emerald-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/10 hover:border-emerald-500/30",
    chipColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-400/40",
  },
  {
    key: "ai",
    label: "AI",
    icon: Bot,
    color: "text-rose-400",
    bg: "bg-rose-500/5",
    border: "border-rose-500/10 hover:border-rose-500/30",
    chipColor: "bg-rose-500/10 text-rose-300 border-rose-500/20 hover:border-rose-400/40",
  },
];

export default function Skills({ data }: { data: any }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {CATS.map((cat, ci) => {
        const Icon  = cat.icon;
        const items: string[] = data[cat.key] ?? [];
        return (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: ci * 0.1, ease: "easeOut" }}
            className={`relative rounded-2xl border ${cat.border} ${cat.bg} p-7 flex flex-col gap-6 transition-all duration-300 overflow-hidden group`}
          >
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${cat.bg} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="flex items-center gap-3 relative z-10">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${cat.bg} border ${cat.border}`}>
                <Icon className={`w-4 h-4 ${cat.color}`} />
              </div>
              <span className={`text-sm font-semibold ${cat.color} tracking-wide`}>{cat.label}</span>
            </div>
            <div className="flex flex-wrap gap-2 relative z-10">
              {items.map((skill) => (
                <span key={skill} className={`text-xs font-medium px-3 py-1.5 rounded-full border ${cat.chipColor} transition-colors duration-200`}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* ── Skill Logos Grid ── */}
    <div className="mt-14 flex flex-wrap justify-center gap-4 md:gap-5">
      {LOGOS.map(({ src, alt, invert }) => (
        <div
          key={alt}
          className="w-14 h-14 md:w-16 md:h-16 rounded-3xl border border-white/15 bg-white/10 flex items-center justify-center p-3 shadow-xl transition-all hover:bg-white/15 hover:border-white/25"
          title={alt}
        >
          <Image
            src={src}
            alt={alt}
            width={36}
            height={36}
            className={`w-full h-full object-contain ${invert ? "invert opacity-80" : "drop-shadow-sm"}`}
          />
        </div>
      ))}
    </div>
    </>
  );
}
