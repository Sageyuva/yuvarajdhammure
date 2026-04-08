"use client";
import { motion } from "framer-motion";

export default function Experience({ data }: { data: any[] }) {
  return (
    <div className="relative border-l border-blue-500/10 ml-3 md:ml-6 flex flex-col gap-16 pb-6">
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
          <div className="absolute top-2 -left-[5px] w-2.5 h-2.5 bg-blue-900 rounded-full border-[3px] border-blue-600 transition-colors duration-500 group-hover:bg-cyan-300 group-hover:border-cyan-400 group-hover:accent-glow-cyan z-10" />
          
          {/* Timeline glow behind the dot */}
          <div className="absolute top-2 -left-[14px] w-7 h-7 bg-transparent rounded-full blur-md transition-colors duration-500 group-hover:bg-cyan-500/30 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-4 lg:gap-12">
            {/* Meta Info */}
            <div className="flex flex-col gap-1 mt-1">
              <span className="text-xs font-mono text-zinc-400 font-medium tracking-[0.2em] uppercase">
                {job.duration}
              </span>
              <h3 className="text-white font-bold text-xl sm:text-2xl tracking-tighter leading-snug lg:mt-3 group-hover:text-blue-200 transition-colors duration-300 drop-shadow-sm">
                {job.company}
              </h3>
              <span className="text-[15px] font-semibold text-blue-300 tracking-wide mt-1 drop-shadow-sm">
                {job.role}
              </span>
            </div>

            {/* Description Highlights */}
            <div className="flex flex-col gap-4 mt-2 lg:mt-1">
              {job.highlights.map((h: string, i: number) => (
                <div key={i} className="flex gap-4">
                  <span className="text-blue-500/50 mt-1 shrink-0 font-bold">—</span>
                  <p className="text-[15px] sm:text-base text-zinc-200 leading-[1.85] font-normal">
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
