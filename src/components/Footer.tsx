"use client";

import Link from 'next/link';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const nav = translations[language].nav;

  return (
    <footer className="py-24 px-6 md:px-12 bg-bg-alt border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-24">
          <div className="space-y-6">
            <h2 className="text-4xl font-headline font-bold tracking-tightest">
              Kevin Gómez<span className="text-accent">.</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              {t.desc}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase mb-4">{t.nav}</h3>
            {[
              { name: nav.projects, id: '#proyectos' },
              { name: nav.about, id: '#sobre' },
              { name: nav.contact, id: '#contacto' }
            ].map((item) => (
              <Link 
                key={item.id} 
                href={item.id}
                className="text-lg font-medium hover:text-accent transition-colors w-fit"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase mb-4">{t.connect}</h3>
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-3 text-lg font-medium hover:translate-x-2 transition-transform">
                <Github size={18} /> GitHub
              </a>
              <a href="#" className="flex items-center gap-3 text-lg font-medium hover:translate-x-2 transition-transform">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-3 text-lg font-medium hover:translate-x-2 transition-transform">
                <Instagram size={18} /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
            © 2026 KEVIN GÓMEZ — {t.location}
          </div>
        </div>
      </div>
    </footer>
  );
};