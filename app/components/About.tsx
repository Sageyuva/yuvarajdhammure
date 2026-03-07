"use client";
import { motion } from "framer-motion";

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
          className="self-start mt-2 text-sm font-semibold text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400 transition-colors"
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
            className="flex flex-col gap-1.5 p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300"
          >
            <span className="text-3xl font-bold text-white tracking-tight leading-none">{s.value}</span>
            <span className="text-xs text-zinc-500 leading-snug mt-1">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
