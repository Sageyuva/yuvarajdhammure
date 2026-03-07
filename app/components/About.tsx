"use client";
import { motion } from "framer-motion";

export default function About({ data }: { data: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-4xl"
    >
      {data.summary}
    </motion.div>
  );
}
