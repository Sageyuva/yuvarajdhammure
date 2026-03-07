"use client";
import { motion } from "framer-motion";

export default function Projects({ data }: { data: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {data.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-600 transition-colors group cursor-default"
        >
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zinc-300 transition-colors">{project.name}</h3>
          
          <div className="mt-8 flex items-center justify-between text-zinc-500">
            <span className="text-sm font-medium">View Project Details</span>
            <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
              <span className="transform -rotate-45 block group-hover:text-zinc-300">→</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
