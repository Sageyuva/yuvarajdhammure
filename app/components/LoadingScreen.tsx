"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;
    
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });

    tl.to(textRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    })
      .to(textRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.5,
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      });
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <h1
        ref={textRef}
        className="text-2xl md:text-4xl font-light tracking-widest text-zinc-300 opacity-0"
      >
        Welcome to Yuvaraj&apos;s Lab
      </h1>
    </div>
  );
}
