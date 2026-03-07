"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const INFO = [
  { label: "Email",    value: "yuvarajdhammure@gmail.com", href: "mailto:yuvarajdhammure@gmail.com" },
  { label: "Phone",   value: "+91-9686396288",              href: "tel:+919686396288" },
  { label: "Location",value: "Bangalore, India",            href: "#" },
];

export default function Contact() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-white leading-tight">
            Have a project in mind?
            <br />
            <span className="text-zinc-600">Let&apos;s make it real.</span>
          </h3>
          <p className="text-zinc-500 text-base leading-relaxed max-w-sm">
            Open to full-time roles, freelance work, and interesting collaborations.
          </p>
        </div>
        <div className="flex flex-col gap-0">
          {INFO.map(({ label, value, href }) => (
            <div key={label} className="flex justify-between items-center py-4 border-b border-zinc-900">
              <span className="text-[11px] font-mono text-zinc-600 tracking-widest uppercase">{label}</span>
              <a href={href} className="text-sm text-zinc-300 hover:text-white transition-colors">{value}</a>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: form */}
      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { id: "name",  label: "Name",  type: "text",  ph: "John Doe" },
            { id: "email", label: "Email", type: "email", ph: "john@co.com" },
          ].map(({ id, label, type, ph }) => (
            <div key={id} className="flex flex-col gap-2">
              <label htmlFor={id} className="text-[11px] font-mono text-zinc-600 tracking-widest uppercase">{label}</label>
              <input id={id} type={type} placeholder={ph}
                className="bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 hover:border-zinc-700 transition-colors" />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-[11px] font-mono text-zinc-600 tracking-widest uppercase">Subject</label>
          <input id="subject" type="text" placeholder="Project inquiry"
            className="bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 hover:border-zinc-700 transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-[11px] font-mono text-zinc-600 tracking-widest uppercase">Message</label>
          <textarea id="message" rows={5} placeholder="Hello Yuvaraj, I'd like to discuss..."
            className="bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 hover:border-zinc-700 transition-colors resize-none" />
        </div>
        <button type="submit"
          className="mt-2 flex items-center gap-2.5 self-start bg-white text-black text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-zinc-100 active:scale-95 transition-all">
          <Send className="w-3.5 h-3.5" />
          Send message
        </button>
      </motion.form>
    </div>
  );
}
