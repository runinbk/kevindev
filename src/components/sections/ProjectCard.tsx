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
      className="group block relative aspect-[4/5] md:aspect-[4/5] overflow-hidden bg-secondary border border-white/5"
    >
      <div className="absolute inset-0 z-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

      <div className="absolute top-8 left-8 z-20">
        <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase bg-black/40 backdrop-blur-md px-3 py-1">
          {project.year}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col gap-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.category.map((cat) => (
            <span key={cat} className="text-[10px] tracking-widest uppercase text-accent font-bold">
              {cat}
            </span>
          ))}
        </div>
        
        <div className="flex items-end justify-between">
          <h3 className="text-3xl md:text-5xl font-headline font-bold uppercase tracking-tightest leading-none">
            {project.title}
          </h3>
          <div className={cn(
            "w-12 h-12 rounded-full bg-accent flex items-center justify-center transition-all duration-500",
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          )}>
            <ArrowUpRight className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>

      <div className={cn(
        "absolute inset-0 border-2 border-accent/0 transition-all duration-500 z-30 pointer-events-none",
        isHovered && "border-accent/40"
      )} />
    </Link>
  );
};
