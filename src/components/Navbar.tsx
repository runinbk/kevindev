"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5
      });
    });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current?.classList.add('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
      } else {
        navRef.current?.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 py-6 transition-all duration-300 px-6 md:px-12 flex items-center justify-between"
      >
        <Link href="/" className="nav-item group flex items-center gap-1">
          <span className="font-headline font-bold text-2xl tracking-tight">
            Kevin Gómez<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {['Proyectos', 'Sobre mí', 'Contacto'].map((item, i) => (
            <Link
              key={item}
              href={item === 'Proyectos' ? '#proyectos' : item === 'Sobre mí' ? '#sobre' : '#contacto'}
              className="nav-item text-sm font-medium hover:text-accent transition-colors tracking-widest uppercase"
            >
              {item}
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden p-2 nav-item" 
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]",
          isOpen ? "clip-path-open" : "clip-path-closed"
        )}
        style={{
          clipPath: isOpen ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)'
        }}
      >
        <button 
          className="absolute top-8 right-8 p-2"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        {['Proyectos', 'Sobre mí', 'Contacto'].map((item) => (
          <Link
            key={item}
            href={item === 'Proyectos' ? '#proyectos' : item === 'Sobre mí' ? '#sobre' : '#contacto'}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-headline font-bold tracking-tighter hover:text-accent transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
};
