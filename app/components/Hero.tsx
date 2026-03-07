"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import gsap from "gsap";
import { motion } from "framer-motion";

import reactLogo from "@/assets/images/React.svg";
import nextLogo from "@/assets/images/Next.js.svg";
import mongoLogo from "@/assets/images/MongoDB.svg";
import expressLogo from "@/assets/images/Express.svg";

export default function Hero({ data }: { data: any }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.children;

    Array.from(items).forEach((item, index) => {
      gsap.to(item, {
        y: `random(-20, 20)`,
        x: `random(-10, 10)`,
        rotation: `random(-5, 5)`,
        duration: `random(3, 5)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });
  }, []);

  return (
    <section id="home" className="min-h-screen pt-32 pb-16 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight mb-2 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {data.name}
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 font-medium"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {data.title}
            </motion.h2>
          </div>

          <motion.div 
            className="flex flex-col gap-4 text-zinc-300 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 group">
              <div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                <Mail className="w-5 h-5 text-zinc-400" />
              </div>
              <span className="text-lg">{data.contact.email}</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                <Phone className="w-5 h-5 text-zinc-400" />
              </div>
              <span className="text-lg">{data.contact.phone}</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                <MapPin className="w-5 h-5 text-zinc-400" />
              </div>
              <span className="text-lg">{data.contact.location}</span>
            </div>
          </motion.div>

          <motion.p 
            className="text-lg text-zinc-400 max-w-lg mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {data.description}
          </motion.p>
        </motion.div>

        {/* Right Side (Anti-gravity grid) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative lg:h-[500px] flex items-center justify-center lg:justify-end"
        >
          <div ref={gridRef} className="grid grid-cols-2 gap-6 w-full max-w-[400px]">
            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/60 p-8 rounded-3xl flex items-center justify-center shadow-2xl shadow-black/50 aspect-square">
              <Image src={reactLogo} alt="React" width={90} height={90} className="drop-shadow-[0_0_15px_rgba(97,218,251,0.5)]" />
            </div>
            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/60 p-8 rounded-3xl flex items-center justify-center shadow-2xl shadow-black/50 aspect-square lg:mt-16">
              <Image src={nextLogo} alt="Next.js" width={90} height={90} className="filter invert opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
            </div>
            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/60 p-8 rounded-3xl flex items-center justify-center shadow-2xl shadow-black/50 aspect-square lg:-mt-16">
              <Image src={mongoLogo} alt="MongoDB" width={90} height={90} className="drop-shadow-[0_0_15px_rgba(71,162,72,0.4)]" />
            </div>
            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/60 p-8 rounded-3xl flex items-center justify-center shadow-2xl shadow-black/50 aspect-square">
              <Image src={expressLogo} alt="Express.js" width={90} height={90} className="opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
