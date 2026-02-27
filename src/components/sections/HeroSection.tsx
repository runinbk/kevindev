
"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const words = ["Desarrollo Web", "E-commerce", "Landing Pages", "Apps Web", "UI / UX", "Coding"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Split text simulation
      tl.from(".hero-label", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      })
      .from(".hero-title-1 span", {
        y: 120,
        stagger: 0.05,
        duration: 0.8,
        ease: "power4.out"
      }, "-=0.2")
      .from(".hero-title-2 span", {
        y: 120,
        stagger: 0.05,
        duration: 0.8,
        ease: "power4.out"
      }, "-=0.6")
      .from(".hero-desc", {
        y: 20,
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
      }, "-=0.6")
      .from(".scroll-indicator", {
        opacity: 0,
        duration: 1
      }, "-=0.4");

      // Rotating text logic
      const rotationTl = gsap.timeline({ repeat: -1 });
      words.forEach((word) => {
        rotationTl
          .fromTo(".rotating-text", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" })
          .set(".rotating-text", { textContent: word })
          .to(".rotating-text", { y: -30, opacity: 0, duration: 0.5, ease: "power2.in", delay: 1.5 });
      });

      // Scroll arrow bounce
      gsap.to(".scroll-arrow", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-12 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <span className="hero-label block text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-muted mb-8">
          Desarrollador Web · Santa Cruz, Bolivia
        </span>

        <h1 className="hero-title leading-[0.85] tracking-tightest mb-10 overflow-hidden">
          <div className="hero-title-1 flex overflow-hidden">
            {"Kevin".split("").map((char, i) => (
              <span key={i} className="inline-block text-[15vw] md:text-[10vw] font-headline font-bold uppercase">{char}</span>
            ))}
          </div>
          <div className="hero-title-2 flex overflow-hidden">
            {"Gómez.".split("").map((char, i) => (
              <span key={i} className="inline-block text-[15vw] md:text-[10vw] font-headline font-bold uppercase text-accent">{char}</span>
            ))}
          </div>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-xl">
            <div className="h-8 overflow-hidden mb-4">
              <span className="rotating-text block text-xl md:text-2xl font-semibold text-white"></span>
            </div>
            <p className="hero-desc text-lg md:text-xl text-muted-foreground leading-relaxed">
              Construyo experiencias digitales que conectan marcas con sus audiencias. Cada proyecto es único y enfocado en el impacto visual y funcional.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hero-social group p-3 border border-white/10 rounded-full hover:bg-accent transition-all duration-300">
              <Github className="w-5 h-5 group-hover:text-black transition-colors" />
            </a>
            <a href="#" className="hero-social group p-3 border border-white/10 rounded-full hover:bg-accent transition-all duration-300">
              <Linkedin className="w-5 h-5 group-hover:text-black transition-colors" />
            </a>
            <a href="#" className="hero-social group p-3 border border-white/10 rounded-full hover:bg-accent transition-all duration-300">
              <Instagram className="w-5 h-5 group-hover:text-black transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-muted">Scroll</span>
        <ArrowDown className="scroll-arrow w-4 h-4 text-accent" />
      </div>
    </section>
  );
};
