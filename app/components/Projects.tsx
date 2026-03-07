"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ACCENTS = [
  { dot: "bg-blue-400",    label: "text-blue-400",    shadow: "hover:shadow-blue-950/30"    },
  { dot: "bg-violet-400",  label: "text-violet-400",  shadow: "hover:shadow-violet-950/30"  },
  { dot: "bg-emerald-400", label: "text-emerald-400", shadow: "hover:shadow-emerald-950/30" },
];

export default function Projects({ data }: { data: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {data.map((project, i) => {
        const accent = ACCENTS[i % ACCENTS.length];
        return (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className={`group flex flex-col gap-5 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-7 hover:border-zinc-700 hover:bg-zinc-900/40 hover:shadow-2xl ${accent.shadow} transition-all duration-300`}
          >
            <div className="flex items-start justify-between">
              <span className={`flex items-center gap-1.5 text-[10px] font-mono tracking-[0.2em] uppercase ${accent.label}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                Project
              </span>
              <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
            </div>
            <h3 className="text-xl font-bold text-white leading-snug">{project.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
              {project.tech.map((t: string) => (
                <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-700/40">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
