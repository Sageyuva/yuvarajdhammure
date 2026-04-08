"use client";
import { motion } from "framer-motion";
import CountUp from "./CountUp";

export default function Education({ data }: { data: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group grid grid-cols-1 lg:grid-cols-[220px_1fr_auto] rounded-2xl glass-card overflow-hidden hover:border-blue-400/30 transition-all duration-300 hover:accent-glow-blue"
    >
      {/* Period */}
      <div className="flex flex-col justify-center gap-2 p-7 lg:border-r border-b lg:border-b-0 border-blue-500/10 bg-blue-900/5 transition-colors duration-300 group-hover:bg-blue-900/10">
        <span className="text-[11px] font-mono text-zinc-500 tracking-[0.2em] uppercase">Period</span>
        <span className="text-white font-medium">{data.period}</span>
      </div>

      {/* Main info */}
      <div className="flex flex-col justify-center gap-1.5 p-7">
        <h3 className="text-white font-bold text-xl group-hover:text-blue-100 transition-colors duration-300">{data.degree}</h3>
        <p className="text-zinc-400 text-base">{data.institution}</p>
      </div>

      {/* Score */}
      <div className="flex flex-col items-center justify-center p-7 border-t lg:border-t-0 lg:border-l border-blue-500/10 bg-blue-900/5 group-hover:bg-blue-900/20 transition-colors duration-300">
        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400 tracking-tight leading-none group-hover:from-blue-300 group-hover:to-cyan-300 transition-colors duration-300">
          <CountUp text={data.score.split(" ")[0]} duration={2} />
        </span>
        <span className="text-xs text-zinc-400 mt-1.5 tracking-wider uppercase">CGPA</span>
      </div>
    </motion.div>
  );
}
