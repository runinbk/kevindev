"use client";

import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { SmoothScroll } from '@/components/SmoothScroll';
import { PageTransition } from '@/components/PageTransition';
import { Preloader } from '@/components/Preloader';
import { LanguageProvider } from '@/context/LanguageContext';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Theme initialization
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Suppress noise from extensions (MetaMask, etc.)
    if (process.env.NODE_ENV === 'development') {
      const handleError = (e: ErrorEvent | PromiseRejectionEvent) => {
        const message = (e instanceof ErrorEvent) ? e.message : (e.reason?.message || '');
        if (
          message?.includes('MetaMask') ||
          message?.includes('extension') ||
          message?.includes('chrome-extension') ||
          message?.includes('Failed to connect to MetaMask') ||
          message?.includes('nkbihfbeogaeaoehlefnkodbefgpgknn') ||
          message?.includes('unpermitted intrinsics') ||
          message?.includes('react-devtools') ||
          message?.includes('Receiving end does not exist') ||
          message?.includes('runtime.lastError')
        ) {
          e.stopImmediatePropagation();
          if (e.preventDefault) e.preventDefault();
        }
      };

      window.addEventListener('error', handleError, true);
      window.addEventListener('unhandledrejection', handleError, true);

      const originalError = console.error;
      const originalWarn = console.warn;

      console.error = (...args) => {
        const msg = args[0];
        if (typeof msg === 'string' && (
          msg.includes('MetaMask') ||
          msg.includes('chrome-extension') ||
          msg.includes('nkbihfbeogaeaoehlefnkodbefgpgknn') ||
          msg.includes('runtime.lastError') ||
          msg.includes('Receiving end does not exist')
        )) {
          return;
        }
        originalError.apply(console, args);
      };

      console.warn = (...args) => {
        const msg = args[0];
        if (typeof msg === 'string' && (
          msg.includes('unpermitted intrinsics') ||
          msg.includes('react-devtools')
        )) {
          return;
        }
        originalWarn.apply(console, args);
      };

      return () => {
        window.removeEventListener('error', handleError, true);
        window.removeEventListener('unhandledrejection', handleError, true);
        console.error = originalError;
      };
    }
  }, []);

  return (
    <LanguageProvider>
      <Preloader onComplete={() => setLoading(false)} />
      {!loading && (
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      )}
    </LanguageProvider>
  );
}
