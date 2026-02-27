"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export const CustomCursor = () => {
  const mainCursor = useRef<HTMLDivElement>(null);
  const secondaryCursor = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'default' | 'hover' | 'project'>('default');

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.classList.add('cursor-active');

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (mainCursor.current) {
        mainCursor.current.style.left = `${clientX}px`;
        mainCursor.current.style.top = `${clientY}px`;
      }

      if (secondaryCursor.current) {
        secondaryCursor.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 400, fill: 'forwards' }
        );
      }
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .interactive')) {
        setState('hover');
      }
      if (target.closest('.project-card-wrapper')) {
        setState('project');
      }
    };

    const handleHoverEnd = () => setState('default');

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleHoverStart);
    window.addEventListener('mouseout', handleHoverEnd);

    return () => {
      document.body.classList.remove('cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleHoverStart);
      window.removeEventListener('mouseout', handleHoverEnd);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      <div
        ref={mainCursor}
        className="fixed w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ mixBlendMode: 'difference' }}
      />
      <div
        ref={secondaryCursor}
        className={cn(
          "fixed w-10 h-10 border border-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center bg-white/10",
          state === 'hover' && "scale-[2.5] bg-white border-white",
          state === 'project' && "scale-[3.5] bg-white border-white"
        )}
        style={{ mixBlendMode: 'difference' }}
      >
        {state === 'project' && (
          <span className="text-[3px] font-bold uppercase text-black tracking-widest scale-100">Ver →</span>
        )}
      </div>
    </div>
  );
};
