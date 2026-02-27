"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={`/trabajo/${project.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block relative aspect-[4/5] overflow-hidden bg-bg-alt border border-border"
    >
      <div className="absolute inset-0 z-0 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

      <div className="absolute top-8 left-8 z-20">
        <span className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase bg-black/40 backdrop-blur-md px-3 py-1">
          {project.year}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col gap-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.category.map((cat, i) => (
            <span 
              key={cat} 
              className={cn(
                "text-[10px] tracking-widest uppercase text-white/70 font-bold transition-all duration-500",
                isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {cat}
            </span>
          ))}
        </div>
        
        <div className="flex items-end justify-between">
          <h3 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tightest leading-none text-white">
            {project.title}
          </h3>
          <div className={cn(
            "w-14 h-14 rounded-full bg-accent flex items-center justify-center transition-all duration-500",
            isHovered ? "scale-100 rotate-0" : "scale-0 rotate-45"
          )}>
            <ArrowUpRight className="w-7 h-7 text-black" />
          </div>
        </div>
      </div>

      <div className="absolute top-8 right-8 z-20">
        <span className="text-4xl font-headline font-bold text-white/10">{project.id}</span>
      </div>
    </Link>
  );
};
