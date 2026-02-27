
"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export const CustomCursor = () => {
  const mainCursor = useRef<HTMLDivElement>(null);
  const secondaryCursor = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'default' | 'hover' | 'project'>('default');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.classList.add('cursor-active');

    // Inicializar tema y observar cambios
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light';
      setTheme(currentTheme || 'dark');
    };
    
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

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
      const interactive = target.closest('a, button, .interactive');
      const project = target.closest('.project-card-wrapper');
      const isImage = target.closest('img');
      const isDarkElement = target.closest('.bg-accent, .bg-primary');

      if (project) {
        setState('project');
      } else if (interactive) {
        setState('hover');
      } else {
        setState('default');
      }

      // Lógica de inversión de color
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'light') {
        // En modo claro: blanco sobre cosas oscuras o imágenes, negro sobre el resto
        setIsInverted(!!isDarkElement || !!isImage || !!project);
      } else {
        // En modo oscuro: negro sobre el botón Lima (accent), blanco sobre el resto
        setIsInverted(!!isDarkElement && !isImage);
      }
    };

    const handleHoverEnd = () => {
      setState('default');
      setIsInverted(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleHoverStart);
    window.addEventListener('mouseout', handleHoverEnd);

    return () => {
      document.body.classList.remove('cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleHoverStart);
      window.removeEventListener('mouseout', handleHoverEnd);
      observer.disconnect();
    };
  }, []);

  // Determinar el color final
  // isInverted significa que queremos el color opuesto al color de texto principal del tema
  let color = theme === 'dark' ? '#F0EBE1' : '#0C0C0C';
  if (isInverted) {
    color = theme === 'dark' ? '#0C0C0C' : '#FFFFFF';
  }

  // Si está sobre un proyecto, forzamos blanco para visibilidad sobre las imágenes
  if (state === 'project') color = '#FFFFFF';

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      <div
        ref={mainCursor}
        className="fixed w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 transition-colors duration-300"
        style={{ backgroundColor: color }}
      />
      <div
        ref={secondaryCursor}
        className={cn(
          "fixed w-10 h-10 border rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center",
          state === 'hover' && "scale-[2.5] bg-foreground/5",
          state === 'project' && "scale-[3.5] bg-white/10 border-white"
        )}
        style={{ 
          borderColor: color,
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
