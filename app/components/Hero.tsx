"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import gsap from "gsap";
import { motion } from "framer-motion";

import reactLogo from "@/assets/images/React.svg";
import nextLogo from "@/assets/images/Next.js.svg";
import mongoLogo from "@/assets/images/MongoDB.svg";
import expressLogo from "@/assets/images/Express.svg";

const TILES = [
  { logo: reactLogo, alt: "React.js", invert: false, mt: "" },
  { logo: nextLogo, alt: "Next.js", invert: true, mt: "mt-8" },
  { logo: mongoLogo, alt: "MongoDB", invert: false, mt: "-mt-8" },
  { logo: expressLogo, alt: "Express.js", invert: false, mt: "" },
];

export default function Hero({ data }: { data: any }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    Array.from(gridRef.current.children).forEach((el, i) => {
      gsap.to(el, {
        y: `random(-18, 18)`,
        x: `random(-8, 8)`,
        rotation: `random(-3, 3)`,
        duration: `random(1.5, 2.5)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20 items-center w-full">

        {/* ── Left ── */}
        <div className="flex flex-col gap-10">

          {/* Name block */}
          <div className="flex flex-col gap-3">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-tighter text-white drop-shadow-md leading-[1.05]"
            >
              {data.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
              className="text-[15px] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 tracking-[0.25em] uppercase mt-2 drop-shadow-sm"
            >
              {data.title}
            </motion.p>
          </div>

          {/* Contact chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
            className="flex flex-wrap gap-3"
          >
            {[
              { icon: Mail, label: data.contact.email, href: `mailto:${data.contact.email}` },
              { icon: Phone, label: data.contact.phone, href: `tel:${data.contact.phone}` },
              { icon: MapPin, label: data.contact.location, href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-[13px] font-semibold tracking-wide text-zinc-200 glass-card hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 drop-shadow-sm"
              >
                <Icon className="w-4 h-4 shrink-0 text-blue-300" />
                {label}
              </a>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.54, ease: "easeOut" }}
            className="text-base md:text-lg text-zinc-200 leading-[1.85] font-normal max-w-lg drop-shadow-sm"
          >
            {data.description}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
            <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg accent-glow-blue text-[15px] font-bold tracking-wide rounded-full hover:from-blue-500 hover:to-purple-500 hover:scale-105 active:scale-95 transition-all drop-shadow-md">
              Get in touch
            </a>
            <a href="#projects" className="px-8 py-4 text-[15px] font-bold tracking-wide text-blue-50 hover:text-white glass border border-blue-500/30 rounded-full hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all drop-shadow-sm">
              View work
            </a>
          </motion.div>
        </div>

        {/* ── Right: floating tech grid ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center lg:justify-end group"
        >
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0" />
          
          <div ref={gridRef} className="grid grid-cols-2 gap-4 w-full max-w-[260px] relative z-10">
            {TILES.map(({ logo, alt, invert, mt }) => (
              <div
                key={alt}
                className={`aspect-square rounded-2xl glass border border-blue-500/20 bg-blue-950/20 flex items-center justify-center p-4 shadow-2xl hover:border-blue-400/50 hover:bg-blue-900/40 hover:accent-glow-blue transition-all duration-300 ${mt}`}
              >
                <Image
                  src={logo} alt={alt} width={40} height={40}
                  className={`w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] ${invert ? "invert opacity-90" : ""}`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
