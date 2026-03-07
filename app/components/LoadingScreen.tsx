"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const [done, setDone]     = useState(false);
  const overlayRef          = useRef<HTMLDivElement>(null);
  const lineRef             = useRef<HTMLDivElement>(null);
  const textRef             = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const tl = gsap.timeline({
      onComplete: () => setDone(true),
    });

    tl
      .to(lineRef.current, {
        scaleX: 1,
        duration: 1.1,
        ease: "power3.inOut",
      })
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.3")
      .to([textRef.current, lineRef.current], {
        opacity: 0,
        duration: 0.5,
        delay: 0.6,
        ease: "power2.in",
      })
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
      });
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center gap-8"
    >
      {/* Progress bar */}
      <div className="w-48 h-px bg-zinc-900 overflow-hidden">
        <div
          ref={lineRef}
          className="h-full bg-white origin-left scale-x-0"
          style={{ transformOrigin: "left" }}
        />
      </div>
      {/* Text */}
      <p
        ref={textRef}
        className="text-xs font-mono tracking-[0.4em] text-zinc-600 uppercase opacity-0 translate-y-3"
      >
        Welcome to Yuvaraj&apos;s Lab
      </p>
    </div>
  );
}
