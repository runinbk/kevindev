"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LangToggle } from './LangToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.from(".nav-logo", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
      })
      .from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power4.out"
      }, "-=0.4")
      .from(".nav-toggles", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4");
    });

    const handleScroll = () => {
      if (window.scrollY > 80) {
        navRef.current?.classList.add('bg-background/80', 'backdrop-blur-xl', 'border-b', 'border-border');
      } else {
        navRef.current?.classList.remove('bg-background/80', 'backdrop-blur-xl', 'border-b', 'border-border');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (isOpen) setIsOpen(false);
    
    if (target.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, isOpen ? 500 : 0);
      }
    }
  };

  const navLinks = [
    { name: t.projects, id: '#proyectos' },
    { name: t.about, id: '#sobre' },
    { name: t.contact, id: '#contacto' }
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex items-center justify-between transition-all duration-300"
      >
        <Link href="/" className="nav-logo group flex items-center gap-1">
          <span className="font-headline font-bold text-xl tracking-tight">
            Kevin Gómez<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="nav-toggles flex items-center gap-4 mr-8 pr-8 border-r border-border">
            <LangToggle />
            <ThemeToggle />
          </div>
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.id}
              onClick={(e) => handleNavClick(e, item.id)}
              className="nav-item text-[12px] font-bold hover:text-accent transition-colors tracking-widest uppercase"
            >
              {item.name}
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-background"
          >
            <button 
              className="absolute top-8 right-8 p-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            {navLinks.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="overflow-hidden"
                >
                  <Link
                    href={item.id}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="text-5xl font-headline font-bold tracking-tightest hover:text-accent transition-colors uppercase block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
            <div className="mt-12 flex gap-6">
              <ThemeToggle />
              <LangToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};