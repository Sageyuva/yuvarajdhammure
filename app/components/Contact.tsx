"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl flex flex-col gap-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
        <input type="text" id="name" className="bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors" placeholder="John Doe" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
        <input type="email" id="email" className="bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors" placeholder="john@example.com" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
        <textarea id="message" rows={5} className="bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors resize-none" placeholder="Hello..." />
      </div>
      <button type="submit" className="mt-4 bg-white text-black font-medium py-3 px-8 rounded-xl hover:bg-zinc-300 transition-colors self-start">
        Get in touch
      </button>
    </motion.form>
  );
}
