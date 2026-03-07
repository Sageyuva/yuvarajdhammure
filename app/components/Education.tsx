"use client";
import { motion } from "framer-motion";

export default function Education({ data }: { data: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group grid grid-cols-1 lg:grid-cols-[220px_1fr_auto] rounded-2xl border border-zinc-800/60 overflow-hidden hover:border-zinc-700 transition-all duration-300"
    >
      {/* Period */}
      <div className="flex flex-col justify-center gap-2 p-7 lg:border-r border-b lg:border-b-0 border-zinc-800/60 bg-zinc-900/20">
        <span className="text-[11px] font-mono text-zinc-600 tracking-[0.2em] uppercase">Period</span>
        <span className="text-white font-medium">{data.period}</span>
      </div>

      {/* Main info */}
      <div className="flex flex-col justify-center gap-1.5 p-7">
        <h3 className="text-white font-bold text-xl">{data.degree}</h3>
        <p className="text-zinc-400 text-base">{data.institution}</p>
      </div>

      {/* Score */}
      <div className="flex flex-col items-center justify-center p-7 border-t lg:border-t-0 lg:border-l border-zinc-800/60 bg-zinc-900/20">
        <span className="text-4xl font-bold text-white tracking-tight leading-none">{data.score.split(" ")[0]}</span>
        <span className="text-xs text-zinc-300 mt-1.5 tracking-wider uppercase">CGPA</span>
      </div>
    </motion.div>
  );
}
