"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Solo mostrar una vez por sesión
    const hasLoaded = sessionStorage.getItem('preloader-loaded');
    if (hasLoaded) {
      setVisible(false);
      onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('preloader-loaded', 'true');
          setVisible(false);
          onComplete();
        }
      });

      tl.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
      })
      .to(textRef.current, {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1
      })
      .to(preloaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
        delay: 0.2
      });
    });

    return () => ctx.revert();
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] bg-[#0C0C0C] flex items-center justify-center overflow-hidden"
    >
      <div ref={textRef} className="text-white font-headline font-extrabold text-9xl tracking-tighter">
        KG<span className="text-accent">.</span>
      </div>
    </div>
  );
};
