"use client";

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import gsap from 'gsap';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
    
    gsap.fromTo('body', 
      { opacity: 0.7 }, 
      { opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
  };

  return (
    <button
      onClick={toggle}
      aria-label="Cambiar tema"
      className="w-10 h-10 rounded-full border border-border bg-bg-surface text-foreground flex items-center justify-center hover:scale-110 transition-transform"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};
