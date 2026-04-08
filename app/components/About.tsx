"use client";
import { motion } from "framer-motion";
import CountUp from "./CountUp";

const STATS = [
  { value: "2.7+",  label: "Years of experience" },
  { value: "30%",   label: "Perf. improvement delivered" },
  { value: "40%",   label: "Mobile engagement increase" },
  { value: "99.9%", label: "Data accuracy achieved" },
];

export default function About({ data }: { data: { summary: string } }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-6"
      >
        <p className="text-zinc-300 text-xl leading-[1.85] font-light">{data.summary}</p>
        <a
          href="#contact"
          className="self-start mt-2 text-sm font-semibold text-blue-400 underline underline-offset-4 decoration-blue-900 hover:decoration-blue-400 transition-colors"
        >
          Let&apos;s work together →
        </a>
      </motion.div>

      {/* Right: stats */}
      <div className="grid grid-cols-2 gap-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="group flex flex-col gap-1.5 p-6 rounded-2xl glass-card transition-all duration-300 hover:accent-glow-blue"
          >
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-400 tracking-tight leading-none group-hover:from-blue-400 group-hover:to-cyan-300 transition-colors duration-300">
              <CountUp text={s.value} duration={2} />
            </span>
            <span className="text-xs text-zinc-400 leading-snug mt-1 group-hover:text-blue-100/70 transition-colors duration-300">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
