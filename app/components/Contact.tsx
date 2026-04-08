"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const INFO = [
  { label: "Email",    value: "yuvarajdhammure@gmail.com", href: "mailto:yuvarajdhammure@gmail.com" },
  { label: "Phone",   value: "+91-9686396288",              href: "tel:+919686396288" },
  { label: "Location",value: "Bangalore, India",            href: "#" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");
      
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success status after 5s
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

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
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white leading-tight drop-shadow-sm">
            Have a project in mind?
            <br />
            <span className="text-blue-400">Let&apos;s make it real.</span>
          </h3>
          <p className="text-zinc-200 text-[17px] leading-[1.8] font-medium max-w-sm">
            Open to full-time roles, freelance work, and interesting collaborations.
          </p>
        </div>
        <div className="flex flex-col gap-0 border-t border-blue-500/10">
          {INFO.map(({ label, value, href }) => (
            <div key={label} className="flex justify-between items-center py-4 border-b border-blue-500/10 group">
              <span className="text-xs font-semibold text-zinc-400 tracking-widest uppercase group-hover:text-blue-400 transition-colors duration-300">{label}</span>
              <a href={href} className="text-[15px] font-medium text-white drop-shadow-sm hover:text-blue-200 transition-colors">{value}</a>
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
        className="flex flex-col gap-5 relative"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2.5">
            <label htmlFor="name" className="text-xs font-bold text-zinc-300 tracking-widest uppercase drop-shadow-sm">Name</label>
            <input id="name" type="text" placeholder="John Doe" required
              value={formData.name} onChange={handleChange}
              disabled={status === "loading"}
              className="glass border border-blue-500/10 rounded-xl px-4 py-3.5 text-[15px] font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/50 hover:border-blue-500/30 transition-colors disabled:opacity-50" />
          </div>
          <div className="flex flex-col gap-2.5">
            <label htmlFor="email" className="text-xs font-bold text-zinc-300 tracking-widest uppercase drop-shadow-sm">Email</label>
            <input id="email" type="email" placeholder="john@co.com" required
              value={formData.email} onChange={handleChange}
              disabled={status === "loading"}
              className="glass border border-blue-500/10 rounded-xl px-4 py-3.5 text-[15px] font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/50 hover:border-blue-500/30 transition-colors disabled:opacity-50" />
          </div>
        </div>
        
        <div className="flex flex-col gap-2.5">
          <label htmlFor="subject" className="text-xs font-bold text-zinc-300 tracking-widest uppercase drop-shadow-sm">Subject</label>
          <input id="subject" type="text" placeholder="Project inquiry"
            value={formData.subject} onChange={handleChange}
            disabled={status === "loading"}
            className="glass border border-blue-500/10 rounded-xl px-4 py-3.5 text-[15px] font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/50 hover:border-blue-500/30 transition-colors disabled:opacity-50" />
        </div>
        
        <div className="flex flex-col gap-2.5">
          <label htmlFor="message" className="text-xs font-bold text-zinc-300 tracking-widest uppercase drop-shadow-sm">Message</label>
          <textarea id="message" rows={5} placeholder="Hello Yuvaraj, I'd like to discuss..." required
            value={formData.message} onChange={handleChange}
            disabled={status === "loading"}
            className="glass border border-blue-500/10 rounded-xl px-4 py-3.5 text-[15px] font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/50 hover:border-blue-500/30 transition-colors resize-none disabled:opacity-50 custom-scrollbar" />
        </div>
        
        <div className="flex items-center gap-4 mt-3">
          <button type="submit" disabled={status === "loading" || status === "success"}
            className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[15px] font-bold tracking-wide px-8 py-4 rounded-full hover:from-blue-500 hover:to-purple-500 accent-glow-blue active:scale-95 transition-all disabled:opacity-50 disabled:hover:from-blue-600 disabled:hover:to-purple-600 disabled:active:scale-100 drop-shadow-md">
            {status === "loading" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {status === "loading" ? "Sending..." : status === "success" ? "Message sent" : "Send message"}
          </button>

          {/* Status Feedback Messages */}
          {status === "success" && (
            <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-emerald-400 text-[13px] font-bold flex items-center gap-1.5 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 drop-shadow-sm">
              <CheckCircle2 className="w-4 h-4" /> Delivered
            </motion.p>
          )}
          {status === "error" && (
            <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-red-400 text-[13px] font-bold flex items-center gap-1.5 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20 drop-shadow-sm">
              <AlertCircle className="w-4 h-4" /> Failed to send
            </motion.p>
          )}
        </div>
      </motion.form>
    </div>
  );
}
