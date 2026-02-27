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
        duration: 30,
        ease: "none"
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={marqueeRef} className="w-full py-6 border-y border-border/50 bg-transparent overflow-hidden whitespace-nowrap">
      <div className="marquee-inner inline-block">
        <span className="text-[12px] font-bold uppercase text-muted-foreground/60 tracking-[0.3em] font-body px-8">
          {text + text + text}
        </span>
        <span className="text-[12px] font-bold uppercase text-muted-foreground/60 tracking-[0.3em] font-body px-8">
          {text + text + text}
        </span>
      </div>
    </div>
  );
};
