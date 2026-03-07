"use client";
import { motion } from "framer-motion";

export default function Education({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col gap-8">
      {data.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div>
            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
            <h4 className="text-zinc-400 mt-1">{edu.institution}</h4>
          </div>
          <div className="text-zinc-500 font-medium">
            {edu.score}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
