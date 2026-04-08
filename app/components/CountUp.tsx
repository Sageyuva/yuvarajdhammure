"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUp({
  text,
  duration = 2,
  className = "",
}: {
  text: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  
  const [displayValue, setDisplayValue] = useState(text);

  useEffect(() => {
    if (!isInView) return;

    // Use regex to find the first number in the string (including decimals/commas)
    const match = text.match(/[\d,.]+/);
    if (!match) return;
    
    // Clean up commas for parsing
    const numStr = match[0].replace(/,/g, '');
    const num = parseFloat(numStr);
    if (isNaN(num)) return;

    const prefix = text.substring(0, match.index);
    const suffix = text.substring((match.index || 0) + match[0].length);
    const hasDecimal = match[0].includes(".");
    const decimalPlaces = hasDecimal ? match[0].split(".")[1].length : 0;

    let startTimestamp: number | null = null;
    // Premium ease-out cubic for smooth deceleration
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      const currentNum = num * easeOutCubic(progress);
      
      const formattedNum = hasDecimal 
        ? currentNum.toFixed(decimalPlaces) 
        : Math.floor(currentNum).toLocaleString(); // Add commas back if needed
        
      setDisplayValue(`${prefix}${formattedNum}${suffix}`);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(text); // Snap exactly to final string
      }
    };
    
    window.requestAnimationFrame(step);
  }, [text, duration, isInView]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
