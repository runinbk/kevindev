"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export const CustomCursor = () => {
  const mainCursor = useRef<HTMLDivElement>(null);
  const secondaryCursor = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (mainCursor.current) {
        mainCursor.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      // Smooth lag for secondary cursor
      if (secondaryCursor.current) {
        secondaryCursor.current.animate(
          {
            transform: `translate3d(${clientX}px, ${clientY}px, 0)`,
          },
          { duration: 400, fill: 'forwards' }
        );
      }
    };

    const onHoverStart = () => setHovered(true);
    const onHoverEnd = () => setHovered(false);

    window.addEventListener('mousemove', onMouseMove);
    
    const interactables = document.querySelectorAll('a, button, [role="button"], .interactive');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onHoverStart);
      el.addEventListener('mouseleave', onHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onHoverStart);
        el.removeEventListener('mouseleave', onHoverEnd);
      });
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[999]">
      <div
        ref={mainCursor}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-accent rounded-full transition-transform duration-100 ease-out"
      />
      <div
        ref={secondaryCursor}
        className={cn(
          "fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 border border-accent/50 rounded-full transition-all duration-300 ease-out",
          hovered ? "scale-[2] bg-accent/10 border-accent" : "scale-100"
        )}
      />
    </div>
  );
};
