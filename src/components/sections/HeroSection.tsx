"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { Marquee } from '../Marquee';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const rotatingTextRef = useRef<HTMLSpanElement>(null);
  const { language } = useLanguage();
  const t = translations[language].hero;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(".hero-label", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
      })
      .from(".hero-char", {
        yPercent: 110,
        stagger: 0.03,
        duration: 1,
        ease: "power4.out"
      }, "-=0.6")
      .from(".hero-desc", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .from(".hero-social", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6");

      // Corregida la animación de rotación de palabras:
      // La palabra actual sube y desaparece, la nueva entra desde abajo.
      const rotationTl = gsap.timeline({ repeat: -1 });
      t.words.forEach((word, i) => {
        // Establecer la primera palabra inicialmente
        if (i === 0) {
          rotationTl.set(rotatingTextRef.current, { textContent: word, y: 0, opacity: 1 });
        }
        
        // Pausa para que el usuario lea la palabra
        rotationTl.to({}, { duration: 2.5 });
        
        // Animar hacia ARRIBA (salir)
        rotationTl.to(rotatingTextRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });
        
        // Cambiar el texto a la siguiente palabra (circular)
        const nextWord = t.words[(i + 1) % t.words.length];
        rotationTl.set(rotatingTextRef.current, { textContent: nextWord, y: 20 });
        
        // Animar desde ABAJO (entrar)
        rotationTl.to(rotatingTextRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      });

      const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX - window.innerWidth / 2) * 0.01;
        const yPos = (clientY - window.innerHeight / 2) * 0.01;

        gsap.to(".hero-title-parallax", {
          x: xPos,
          y: yPos,
          duration: 1.2,
          ease: "power2.out"
        });
      };

      window.addEventListener('mousemove', onMouseMove);
      return () => window.removeEventListener('mousemove', onMouseMove);
    }, sectionRef);

    return () => ctx.revert();
  }, [language, t.words]);

  return (
    <section ref={sectionRef} className="relative min-h-[90svh] flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <span className="hero-label block text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-6">
          {t.label}
        </span>

        <h1 className="hero-title tracking-tightest mb-8 hero-title-parallax" style={{ 
          fontSize: 'clamp(40px, 7vw, 90px)',
          lineHeight: '0.9',
          letterSpacing: '-0.04em'
        }}>
          <div className="flex flex-wrap overflow-hidden">
            {"KEVIN".split("").map((char, i) => (
              <span key={i} className="hero-char inline-block font-headline font-extrabold uppercase">{char}</span>
            ))}
            <span className="w-4" />
            {"GÓMEZ.".split("").map((char, i) => (
              <span key={i} className="hero-char inline-block font-headline font-extrabold uppercase text-accent">{char}</span>
            ))}
          </div>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-xl">
            <div className="h-6 overflow-hidden mb-4">
              <span ref={rotatingTextRef} className="block text-lg md:text-xl font-bold text-foreground opacity-80 uppercase tracking-widest"></span>
            </div>
            <p className="hero-desc text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              {t.desc}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hero-social group p-4 border border-border rounded-full hover:bg-accent transition-all duration-500">
              <Github className="w-5 h-5 group-hover:text-black transition-colors" />
            </a>
            <a href="#" className="hero-social group p-4 border border-border rounded-full hover:bg-accent transition-all duration-500">
              <Linkedin className="w-5 h-5 group-hover:text-black transition-colors" />
            </a>
            <a href="#" className="hero-social group p-4 border border-border rounded-full hover:bg-accent transition-all duration-500">
              <Instagram className="w-5 h-5 group-hover:text-black transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Marquee text={t.words.join(" · ") + " · "} />
      </div>

      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <div className="scroll-line absolute top-0 left-0 w-full h-full bg-accent origin-top"></div>
        </div>
      </div>
    </section>
  );
};
