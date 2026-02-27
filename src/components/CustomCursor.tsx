
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

  // Determinar color del cursor basado en el estado
  // Si está sobre un proyecto, forzamos blanco para visibilidad sobre las imágenes
  const cursorColor = state === 'project' ? '#FFFFFF' : 'var(--text-primary)';

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      {/* Punto central */}
      <div
        ref={mainCursor}
        className="fixed w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 transition-colors duration-300"
        style={{ backgroundColor: cursorColor }}
      />
      {/* Círculo exterior */}
      <div
        ref={secondaryCursor}
        className={cn(
          "fixed w-10 h-10 border rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center",
          state === 'hover' && "scale-[2.5] bg-foreground/5",
          state === 'project' && "scale-[3.5] bg-white/10 border-white"
        )}
        style={{ 
          borderColor: state === 'project' ? '#FFFFFF' : cursorColor,
          opacity: state === 'project' ? 0.9 : 0.5 
        }}
      >
        {state === 'project' && (
          <span className="text-[3px] font-bold uppercase text-white tracking-widest scale-100">Ver →</span>
        )}
      </div>
    </div>
  );
};
