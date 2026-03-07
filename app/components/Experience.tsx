"use client";
import { motion } from "framer-motion";

export default function Experience({ data }: { data: any[] }) {
  return (
    <div className="relative border-l border-zinc-800/60 ml-3 md:ml-6 flex flex-col gap-16 pb-6">
      {data.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
          className="relative pl-8 md:pl-12 group"
        >
          {/* Animated Timeline Dot */}
          <div className="absolute top-2 -left-[5px] w-2.5 h-2.5 bg-zinc-700 rounded-full border-[3px] border-black transition-colors duration-500 group-hover:bg-white z-10" />
          
          {/* Timeline glow behind the dot (optional) */}
          <div className="absolute top-2 -left-[14px] w-7 h-7 bg-white/0 rounded-full blur-md transition-colors duration-500 group-hover:bg-white/20 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-4 lg:gap-12">
            {/* Meta Info */}
            <div className="flex flex-col gap-1 mt-1">
              <span className="text-[10px] sm:text-xs font-mono text-zinc-500 tracking-[0.2em] uppercase">
                {job.duration}
              </span>
              <h3 className="text-white font-semibold text-lg sm:text-xl tracking-tight leading-snug lg:mt-3">
                {job.company}
              </h3>
              <span className="text-sm font-medium text-zinc-400 mt-1">
                {job.role}
              </span>
            </div>

            {/* Description Highlights */}
            <div className="flex flex-col gap-4 mt-2 lg:mt-1">
              {job.highlights.map((h: string, i: number) => (
                <div key={i} className="flex gap-4">
                  <span className="text-zinc-600 mt-1 shrink-0">—</span>
                  <p className="text-[15px] sm:text-base text-zinc-400 leading-[1.8] font-light">
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
