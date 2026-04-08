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
    bg: "bg-blue-500/10",
    border: "border-blue-500/20 group-hover:border-blue-500/40",
    chipColor: "glass text-blue-200 border-blue-500/20 hover:border-blue-400/60 hover:bg-blue-500/20",
    shadow: "group-hover:accent-glow-blue",
    glowBlob: "bg-blue-500/20"
  },
  {
    key: "ui_ux",
    label: "UI / UX",
    icon: Layers,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20 group-hover:border-purple-500/40",
    chipColor: "glass text-purple-200 border-purple-500/20 hover:border-purple-400/60 hover:bg-purple-500/20",
    shadow: "group-hover:accent-glow-purple",
    glowBlob: "bg-purple-500/20"
  },
  {
    key: "backend_tools",
    label: "Backend & Tools",
    icon: Terminal,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20 group-hover:border-emerald-500/40",
    chipColor: "glass text-emerald-200 border-emerald-500/20 hover:border-emerald-400/60 hover:bg-emerald-500/20",
    shadow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    glowBlob: "bg-emerald-500/20"
  },
  {
    key: "ai",
    label: "AI",
    icon: Bot,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20 group-hover:border-cyan-500/40",
    chipColor: "glass text-cyan-200 border-cyan-500/20 hover:border-cyan-400/60 hover:bg-cyan-500/20",
    shadow: "group-hover:accent-glow-cyan",
    glowBlob: "bg-cyan-500/20"
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
            className={`relative rounded-2xl border ${cat.border} glass-card p-7 flex flex-col gap-6 transition-all duration-500 overflow-hidden group ${cat.shadow} hover:-translate-y-1 block`}
          >
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${cat.glowBlob} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="flex items-center gap-3 relative z-10">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.bg} border ${cat.border} transition-colors duration-300`}>
                <Icon className={`w-5 h-5 ${cat.color}`} />
              </div>
              <span className={`text-sm font-semibold ${cat.color} tracking-wide`}>{cat.label}</span>
            </div>
            <div className="flex flex-wrap gap-2 relative z-10">
              {items.map((skill) => (
                <span key={skill} className={`text-xs font-medium px-3.5 py-1.5 rounded-full border ${cat.chipColor} transition-colors duration-200`}>
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
          className="group w-14 h-14 md:w-16 md:h-16 rounded-3xl border border-blue-500/10 glass bg-blue-950/10 flex items-center justify-center p-3 shadow-xl transition-all hover:-translate-y-1 hover:bg-blue-900/30 hover:border-blue-400/40 hover:accent-glow-blue"
          title={alt}
        >
          <Image
            src={src}
            alt={alt}
            width={36}
            height={36}
            className={`w-full h-full object-contain filter transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] ${invert ? "invert opacity-80 group-hover:opacity-100" : ""}`}
          />
        </div>
      ))}
    </div>
    </>
  );
}
