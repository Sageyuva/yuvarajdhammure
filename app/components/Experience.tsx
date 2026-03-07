"use client";
import { motion } from "framer-motion";

export default function Experience({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col gap-12">
      {data.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="border-l border-zinc-800 pl-8 relative"
        >
          <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[6.5px] top-2" />
          <h3 className="text-2xl font-bold text-white mb-2">{job.role}</h3>
          <h4 className="text-xl text-zinc-400">{job.company}</h4>
        </motion.div>
      ))}
    </div>
  );
}
