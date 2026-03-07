"use client";
import { motion } from "framer-motion";
import { Code2, Layers, Terminal } from "lucide-react";

const CATS = [
  {
    key: "frontend",
    label: "Frontend",
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-500/5",
    border: "border-blue-500/10 hover:border-blue-500/30",
    chipColor: "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-400/40",
  },
  {
    key: "ui_ux",
    label: "UI / UX",
    icon: Layers,
    color: "text-purple-400",
    bg: "bg-purple-500/5",
    border: "border-purple-500/10 hover:border-purple-500/30",
    chipColor: "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:border-purple-400/40",
  },
  {
    key: "backend_tools",
    label: "Backend & Tools",
    icon: Terminal,
    color: "text-emerald-400",
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/10 hover:border-emerald-500/30",
    chipColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-400/40",
  },
];

export default function Skills({ data }: { data: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {CATS.map((cat, ci) => {
        const Icon  = cat.icon;
        const items: string[] = data[cat.key] ?? [];
        return (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: ci * 0.1, ease: "easeOut" }}
            className={`relative rounded-2xl border ${cat.border} ${cat.bg} p-7 flex flex-col gap-6 transition-all duration-300 overflow-hidden group`}
          >
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${cat.bg} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="flex items-center gap-3 relative z-10">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${cat.bg} border ${cat.border}`}>
                <Icon className={`w-4 h-4 ${cat.color}`} />
              </div>
              <span className={`text-sm font-semibold ${cat.color} tracking-wide`}>{cat.label}</span>
            </div>
            <div className="flex flex-wrap gap-2 relative z-10">
              {items.map((skill) => (
                <span key={skill} className={`text-xs font-medium px-3 py-1.5 rounded-full border ${cat.chipColor} transition-colors duration-200`}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
