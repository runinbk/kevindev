"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Marquee = ({ text }: { text: string }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-inner", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "none"
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={marqueeRef} className="w-full py-4 bg-accent overflow-hidden whitespace-nowrap">
      <div className="marquee-inner inline-block">
        <span className="text-[14px] font-bold uppercase text-black font-headline px-4">
          {text + text + text + text}
        </span>
        <span className="text-[14px] font-bold uppercase text-black font-headline px-4">
          {text + text + text + text}
        </span>
      </div>
    </div>
  );
};
