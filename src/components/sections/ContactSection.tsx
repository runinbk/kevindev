"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

const SocialLink = ({ link, url }: { link: string; url: string }) => {
  const textRef = useRef<HTMLDivElement>(null);

  // Hover animation (Slide Up Effect)
  const handleMouseEnter = () => {
    if (window.innerWidth < 768) return; // Only apply hover on desktop/tablet
    gsap.to(textRef.current, {
      yPercent: -50,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return;
    gsap.to(textRef.current, {
      yPercent: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  // Click Animation with delay before redirect
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    gsap.to(textRef.current, {
      scale: 0.85,
      opacity: 0.5,
      yoyo: true,
      repeat: 1,
      duration: 0.2, // Total 0.4s heartbeat
      ease: 'power1.inOut',
      onComplete: () => {
        // Redirect after animation finishes
        setTimeout(() => {
          window.open(url, '_blank');
        }, 100);
      }
    });
  };

  return (
    <a
      href={url}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative text-lg font-medium overflow-hidden h-7 block"
    >
      <div
        ref={textRef}
        className="flex flex-col relative transition-transform"
      >
        <span className="h-7 flex items-center">{link}</span>
        <span className="h-7 flex items-center text-accent">{link}</span>
      </div>
    </a>
  );
};

export const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[language].contact;

  const getSocialUrl = (name: string) => {
    // Aquí puedes reemplazar con las URLs reales de Kevin.
    const urls: Record<string, string> = {
      'GitHub': 'https://github.com/kevingomez',
      'LinkedIn': 'https://linkedin.com/in/kevingomez',
      'Instagram': 'https://instagram.com/kevingomez',
      'Twitter': 'https://twitter.com/kevingomez'
    };
    return urls[name] || '#';
  };

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
          <div className="flex flex-wrap gap-6 md:gap-10 justify-center">
            {['GitHub', 'LinkedIn', 'Instagram', 'Twitter'].map((link) => (
              <SocialLink key={link} link={link} url={getSocialUrl(link)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};