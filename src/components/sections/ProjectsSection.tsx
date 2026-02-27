"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const t = translations[language].projects;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title-char", {
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 80%",
        },
        yPercent: 100,
        stagger: 0.03,
        duration: 0.8,
        ease: "power4.out"
      });

      gsap.from(".project-card-wrapper", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section id="proyectos" ref={containerRef} className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="projects-title text-center md:text-left text-[8.5vw] sm:text-4xl md:text-6xl font-headline font-extrabold tracking-tightest uppercase overflow-hidden whitespace-nowrap">
            {t.title.split("").map((char, i) => (
              <span key={i} className="projects-title-char inline-block">{char}</span>
            ))}<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm max-w-sm leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project) => (
            <div key={project.id} className="project-card-wrapper">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
