
"use client";

import { useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) {
      router.push('/');
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".hero-img", {
        clipPath: "inset(100% 0 0 0)",
        duration: 1.5,
        ease: "power4.inOut"
      });

      gsap.from(".reveal-item", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, [project, router]);

  if (!project) return null;

  return (
    <div ref={containerRef} className="pt-24 pb-32">
      <div className="px-6 md:px-12 mb-12">
        <Link href="/#proyectos" className="group flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="uppercase text-xs tracking-widest font-bold">Volver a proyectos</span>
        </Link>
      </div>

      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden mb-24">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="hero-img object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <div className="max-w-7xl mx-auto w-full">
            <span className="reveal-item block text-accent font-bold uppercase tracking-[0.3em] text-sm mb-4">
              {project.category.join(" — ")} · {project.year}
            </span>
            <h1 className="reveal-item text-6xl md:text-[10vw] font-headline font-bold uppercase leading-none tracking-tightest">
              {project.title}<span className="text-accent">.</span>
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
        <div className="lg:col-span-8">
          <h2 className="reveal-item text-sm font-bold uppercase tracking-widest text-accent mb-8">Descripción</h2>
          <p className="reveal-item text-xl md:text-3xl font-medium leading-relaxed mb-12">
            {project.longDescription}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            {project.images.map((img, i) => (
              <div key={i} className="reveal-item aspect-[4/3] relative overflow-hidden bg-secondary">
                <Image src={img} alt={`${project.title} detail ${i}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-12">
          <div className="reveal-item p-8 border border-white/10 bg-secondary/30">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-medium rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal-item">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              className="group flex items-center justify-between p-8 bg-accent text-black font-bold uppercase tracking-widest hover:brightness-110 transition-all"
            >
              <span>Ver sitio en vivo</span>
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 border-t border-white/5">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl md:text-4xl font-headline font-bold uppercase tracking-tighter">Siguiente Proyecto</h3>
          <Link href={`/trabajo/${projects[(projects.indexOf(project) + 1) % projects.length].slug}`} className="text-accent hover:underline uppercase text-sm tracking-widest font-bold">
            Ver más →
          </Link>
        </div>
      </div>
    </div>
  );
}
