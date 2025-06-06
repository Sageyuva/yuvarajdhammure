"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Import logos from assets folder
import NextLogo from "@/assets/nextjs.png";
import ReactLogo from "@/assets/reactjs.png";
import TailwindLogo from "@/assets/tailwind.png";
import MongoLogo from "@/assets/mongo.png";

const logos = [ReactLogo, NextLogo, TailwindLogo, MongoLogo];
const labels = ["ReactJs", "Next.js", "Tailwind", "MongoDB"];

const TechStackGrid = () => {
  const boxesRef = useRef([]);
  const badgeRefs = useRef([]);
  const reactLogoRef = useRef(null);

  useEffect(() => {
    // Floating animation for each box
    boxesRef.current.forEach((box, index) => {
      if (box) {
        gsap.to(box, {
          x: () => gsap.utils.random(-15, 15),
          y: () => gsap.utils.random(-15, 15),
          duration: gsap.utils.random(2, 3.5),
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: index * 0.3,
        });
      }
    });

    // Rotate React logo continuously
    if (reactLogoRef.current) {
      gsap.to(reactLogoRef.current, {
        rotate: 360,
        duration: 5,
        repeat: -1,
        ease: "linear",
        transformOrigin: "center center",
      });
    }

    // Pulse animation for badges
    badgeRefs.current.forEach((badge, index) => {
      if (badge) {
        gsap.to(badge, {
          scale: 1.05,
          duration: 1.2,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
          delay: index * 0.4,
        });
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6 p-2 md:p-4">
      {logos.map((logoSrc, i) => (
        <div
          key={i}
          ref={(el) => (boxesRef.current[i] = el)}
          className="relative w-[120px] h-[120px] bg-[#2A2A2E] rounded-xl flex items-center justify-center shadow-md"
        >
          {/* Floating Badge Label */}
          <div
            ref={(el) => (badgeRefs.current[i] = el)}
            className={`absolute border border-white text-white text-xs font-medium px-2 py-1 rounded-full
              ${i === 0 ? "-top-8 -left-4" : ""}
              ${i === 1 ? "-top-8 -right-4" : ""}
              ${i === 2 ? "-bottom-8 -left-4" : ""}
              ${i === 3 ? "-bottom-8 -right-4" : ""}
            `}
          >
            {labels[i]}
          </div>

          {/* Tech Logo */}
          <img
            src={logoSrc.src}
            alt={`${labels[i]} Logo`}
            ref={i === 0 ? reactLogoRef : null}
            className="w-12 h-12 object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default TechStackGrid;
