"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[language].about;
  const skills = ["React", "Next.js", "TypeScript", "Tailwind", "Firebase", "Node.js", "GSAP", "Three.js", "Supabase"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".skill-badge", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%",
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.05,
        duration: 0.6,
        ease: "back.out(1.7)"
      });
    }, ref);

    return () => ctx.revert();
  }, [language]);

  return (
    <section id="sobre" ref={ref} className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <div>
          <h2 className="about-title text-5xl md:text-8xl font-headline font-bold tracking-tightest uppercase mb-8">
            {t.title}<span className="text-accent">.</span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-8">{t.stack}</h3>
          <div className="skills-grid flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span 
                key={skill} 
                className="skill-badge px-6 py-3 border border-border rounded-full text-sm md:text-base font-medium hover:bg-foreground hover:text-background transition-colors duration-300"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8">
            <div>
              <span className="block text-4xl md:text-6xl font-headline font-bold mb-2" style={{ color: 'var(--text-primary)' }}>10+</span>
              <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{t.stat1}</span>
            </div>
            <div>
              <span className="block text-4xl md:text-6xl font-headline font-bold mb-2" style={{ color: 'var(--text-primary)' }}>4+</span>
              <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{t.stat2}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};