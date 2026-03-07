"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const ACCENTS = [
  { dot: "bg-blue-400",    label: "text-blue-400",    shadow: "hover:shadow-blue-950/30"    },
  { dot: "bg-violet-400",  label: "text-violet-400",  shadow: "hover:shadow-violet-950/30"  },
  { dot: "bg-emerald-400", label: "text-emerald-400", shadow: "hover:shadow-emerald-950/30" },
];

export default function Projects({ data }: { data: any[] }) {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <>
      <div className="flex flex-col gap-8 md:gap-12">
        {data.map((project, i) => {
          const accent = ACCENTS[i % ACCENTS.length];
          return (
            <motion.article
              key={i}
              onClick={() => setSelectedProject({ ...project, accent })}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className={`group relative grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-12 rounded-3xl border border-zinc-800/60 bg-zinc-900/10 p-8 lg:p-10 hover:border-zinc-700/80 hover:bg-zinc-900/40 hover:shadow-2xl ${accent.shadow} cursor-pointer transition-all duration-500 overflow-hidden`}
            >
              {/* Background glow effect based on accent color */}
              <div className={`absolute top-0 right-0 w-[500px] h-[500px] -translate-y-1/2 translate-x-1/2 rounded-full ${accent.dot} opacity-[0.03] blur-3xl pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-700`} />

              {/* Left Column: Title & Tech */}
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex flex-col gap-3">
                  <span className={`inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] uppercase ${accent.label}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                    Project 0{i + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight leading-tight flex items-center gap-3">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 text-zinc-600 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-300" />
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t: string) => (
                    <span key={t} className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Short Description */}
              <div className="flex flex-col justify-center relative z-10 lg:pl-6 lg:border-l border-zinc-800/50">
                <p className="text-base text-zinc-300 leading-relaxed font-light line-clamp-3">
                  {project.description}
                </p>
                <span className={`text-sm font-medium mt-4 ${accent.label} flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  View details <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* ── Modal Overlay ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-[#09090b] border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden flex flex-col gap-8 max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              {/* Modal Glow */}
              <div className={`absolute top-0 left-0 w-full h-[300px] -translate-y-1/2 rounded-full ${selectedProject.accent.dot} opacity-[0.05] blur-3xl pointer-events-none`} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col gap-4 relative z-10 pr-10">
                <span className={`inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] uppercase ${selectedProject.accent.label}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${selectedProject.accent.dot}`} />
                  Project Details
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {selectedProject.tech.map((t: string) => (
                  <span key={t} className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-6 relative z-10 pt-6 border-t border-zinc-900">
                <p className="text-[15px] sm:text-base text-zinc-300 leading-relaxed font-light">
                  {selectedProject.description}
                </p>

                {selectedProject.bullets && selectedProject.bullets.length > 0 && (
                  <div className="flex flex-col gap-4 mt-2">
                    {selectedProject.bullets.map((b: string, idx: number) => (
                      <div key={idx} className="flex gap-4">
                        <span className={`mt-2.5 w-1.5 h-1.5 rounded-full ${selectedProject.accent.dot} shrink-0 opacity-80`} />
                        <p className="text-sm sm:text-[15px] text-zinc-400 leading-[1.8]">
                          {b}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
