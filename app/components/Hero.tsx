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
        duration: `random(3, 5)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.35,
      });
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20 items-center w-full">

        {/* ── Left ── */}
        <div className="flex flex-col gap-10">

          {/* Name block */}
          <div className="flex flex-col gap-2">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-[clamp(2.2rem,4.5vw,4rem)] font-bold tracking-[-0.02em] text-white leading-[1.05]"
            >
              {data.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
              className="text-sm font-mono text-zinc-500 tracking-[0.2em] uppercase mt-4"
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
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-400 border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:text-white hover:bg-zinc-800/40 transition-all duration-200"
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                {label}
              </a>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.54, ease: "easeOut" }}
            className="text-base text-zinc-400 leading-[1.8] max-w-lg"
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
            <a href="#contact" className="px-7 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-100 transition-colors">
              Get in touch
            </a>
            <a href="#projects" className="px-7 py-3.5 text-sm font-semibold text-zinc-400 hover:text-white border border-zinc-800 rounded-full hover:border-zinc-500 transition-colors">
              View work
            </a>
          </motion.div>
        </div>

        {/* ── Right: floating tech grid ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div ref={gridRef} className="grid grid-cols-2 gap-4 w-full max-w-[340px]">
            {TILES.map(({ logo, alt, invert, mt }) => (
              <div
                key={alt}
                className={`aspect-square rounded-2xl border border-white/[0.08] bg-white/[0.06] backdrop-blur-sm flex items-center justify-center p-5 shadow-2xl ${mt}`}
              >
                <Image
                  src={logo} alt={alt} width={52} height={52}
                  className={`w-full h-full object-contain ${invert ? "invert opacity-80" : "drop-shadow-lg"}`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
