
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
      gsap.from(".projects-title", {
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      gsap.from(".project-card-wrapper", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="proyectos" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="projects-title text-5xl md:text-8xl font-headline font-bold tracking-tightest uppercase mb-4">
            Proyectos<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Selección de trabajos recientes construidos con pasión por el detalle.
          </p>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card-wrapper">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
