"use client";
import { motion } from "framer-motion";

export default function Experience({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col gap-4">
      {data.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          className="group grid grid-cols-1 lg:grid-cols-[220px_1fr] rounded-2xl border border-zinc-800/60 overflow-hidden hover:border-zinc-700/80 transition-all duration-300"
        >
          {/* Left panel */}
          <div className="flex flex-col gap-3 p-7 lg:border-r border-b lg:border-b-0 border-zinc-800/60 bg-zinc-900/20 group-hover:bg-zinc-900/40 transition-colors">
            <span className="text-[11px] font-mono text-zinc-600 tracking-[0.2em] uppercase">{job.duration}</span>
            <h3 className="text-white font-bold text-lg leading-snug">{job.company}</h3>
            <span className="inline-block text-xs font-medium text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 rounded-full px-3 py-1 self-start">{job.role}</span>
          </div>

          {/* Right panel */}
          <div className="p-7 flex flex-col justify-center gap-3.5 bg-zinc-900/10 group-hover:bg-zinc-900/25 transition-colors">
            {job.highlights.map((h: string, i: number) => (
              <div key={i} className="flex items-start gap-3.5 text-sm text-zinc-400 leading-relaxed">
                <span className="mt-2 w-1 h-1 rounded-full bg-emerald-500/60 shrink-0" />
                {h}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
