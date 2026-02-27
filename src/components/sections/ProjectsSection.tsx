"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
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

      // Cards staggered entrance
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
  }, []);

  return (
    <section id="proyectos" ref={containerRef} className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="projects-title text-6xl md:text-9xl font-headline font-extrabold tracking-tightest uppercase overflow-hidden">
            {"PROYECTOS".split("").map((char, i) => (
              <span key={i} className="projects-title-char inline-block">{char}</span>
            ))}<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-sm leading-relaxed">
            Una selección curada de trabajos que desafían la norma visual y funcional.
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
