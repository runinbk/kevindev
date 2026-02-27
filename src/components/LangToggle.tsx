"use client";

import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export const LangToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 border border-border rounded-full text-[11px] tracking-widest uppercase transition-all flex items-center gap-1.5"
    >
      <span className={cn(
        "transition-colors",
        language === 'es' ? "font-bold text-accent" : "text-muted-foreground opacity-50"
      )}>
        ES
      </span>
      <span className="text-border">/</span>
      <span className={cn(
        "transition-colors",
        language === 'en' ? "font-bold text-accent" : "text-muted-foreground opacity-50"
      )}>
        EN
      </span>
    </button>
  );
};