"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[language].contact;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out"
      });
    }, ref);

    return () => ctx.revert();
  }, [language]);

  return (
    <section id="contacto" ref={ref} className="py-40 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <h2 className="contact-reveal text-5xl md:text-[10vw] font-headline font-bold leading-none tracking-tightest uppercase mb-10">
          {t.title}
        </h2>
        
        <div className="contact-reveal">
          <a 
            href="mailto:kevingomez@email.com" 
            className="group relative inline-block text-3xl md:text-7xl font-headline font-bold text-accent"
          >
            {t.link}<span className="text-white">.</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </div>

        <div className="mt-20 contact-reveal">
          <p className="text-muted-foreground mb-8 uppercase tracking-widest text-sm font-bold">{t.social}</p>
          <div className="flex gap-10 justify-center">
            {['GitHub', 'LinkedIn', 'Instagram', 'Twitter'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-lg font-medium hover:text-accent transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};