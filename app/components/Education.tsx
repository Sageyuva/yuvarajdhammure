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
      className="group grid grid-cols-1 lg:grid-cols-[220px_1fr_auto] rounded-2xl glass-card overflow-hidden hover:border-blue-400/30 transition-all duration-300 hover:accent-glow-blue cursor-default"
    >
      {/* Period */}
      <div className="flex flex-col justify-center gap-2 p-7 lg:border-r border-b lg:border-b-0 border-blue-500/10 bg-blue-900/5 transition-colors duration-300 group-hover:bg-blue-900/10">
        <span className="text-[12px] font-semibold text-zinc-400 tracking-[0.2em] uppercase">Period</span>
        <span className="text-white font-semibold tracking-wide drop-shadow-sm">{data.period}</span>
      </div>

      {/* Main info */}
      <div className="flex flex-col justify-center gap-2 p-7">
        <h3 className="text-white font-extrabold text-2xl tracking-tight leading-tight group-hover:text-blue-100 transition-colors duration-300 drop-shadow-sm">{data.degree}</h3>
        <p className="text-zinc-200 text-[17px] font-medium leading-relaxed">{data.institution}</p>
      </div>

      {/* Score */}
      <div className="flex flex-col items-center justify-center p-7 border-t lg:border-t-0 lg:border-l border-blue-500/10 bg-blue-900/5 group-hover:bg-blue-900/20 transition-colors duration-300">
        <span className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400 tracking-tighter leading-none group-hover:from-blue-300 group-hover:to-cyan-300 transition-colors duration-300 drop-shadow-md">
          <CountUp text={data.score.split(" ")[0]} duration={2} />
        </span>
        <span className="text-[13px] font-bold text-zinc-300 mt-2 tracking-[0.2em] uppercase drop-shadow-sm">CGPA</span>
      </div>
    </motion.div>
  );
}
