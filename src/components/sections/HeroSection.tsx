
"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { Marquee } from '../Marquee';

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const rotatingTextRef = useRef<HTMLSpanElement>(null);
  const words = ["Desarrollo Web", "E-commerce", "Landing Pages", "Apps Web", "UI / UX", "Coding"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Entry animations
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

      // Word rotation logic
      const rotationTl = gsap.timeline({ repeat: -1 });
      words.forEach((word) => {
        rotationTl
          .fromTo(rotatingTextRef.current, 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" })
          .set(rotatingTextRef.current, { textContent: word })
          .to(rotatingTextRef.current, 
            { y: -30, opacity: 0, duration: 0.5, ease: "power2.in", delay: 2 });
      });

      // Parallax effect on mouse move
      const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX - window.innerWidth / 2) * 0.015;
        const yPos = (clientY - window.innerHeight / 2) * 0.015;

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
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <span className="hero-label block text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-6">
          DESARROLLADOR WEB · SANTA CRUZ, BOLIVIA
        </span>

        <h1 className="hero-title tracking-tightest mb-8 hero-title-parallax" style={{ 
          fontSize: 'clamp(32px, 5vw, 48px)',
          lineHeight: '1.1',
          letterSpacing: '-0.02em'
        }}>
          <div className="flex flex-wrap overflow-hidden">
            {"KEVIN".split("").map((char, i) => (
              <span key={i} className="hero-char inline-block font-headline font-extrabold uppercase">{char}</span>
            ))}
            <span className="w-2" />
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
              Construyo experiencias digitales que conectan marcas con sus audiencias. Cada proyecto es único y enfocado en el impacto visual y funcional.
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
        <Marquee text="DESARROLLO WEB · LANDING PAGES · E-COMMERCE · APPS · UI/UX · CODING · " />
      </div>

      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <div className="scroll-line absolute top-0 left-0 w-full h-full bg-accent origin-top"></div>
        </div>
      </div>
    </section>
  );
};
