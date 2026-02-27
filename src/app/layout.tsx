
"use client";

import { useEffect, useState } from 'react';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { SmoothScroll } from '@/components/SmoothScroll';
import { PageTransition } from '@/components/PageTransition';
import { Preloader } from '@/components/Preloader';
import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          message?.includes('nkbihfbeogaeaoehlefnkodbefgpgknn')
        ) {
          e.stopImmediatePropagation();
          if (e.preventDefault) e.preventDefault();
        }
      };

      window.addEventListener('error', handleError, true);
      window.addEventListener('unhandledrejection', handleError, true);
      
      const originalError = console.error;
      console.error = (...args) => {
        const msg = args[0];
        if (typeof msg === 'string' && (
          msg.includes('MetaMask') || 
          msg.includes('chrome-extension') || 
          msg.includes('nkbihfbeogaeaoehlefnkodbefgpgknn')
        )) {
          return;
        }
        originalError.apply(console, args);
      };

      return () => {
        window.removeEventListener('error', handleError, true);
        window.removeEventListener('unhandledrejection', handleError, true);
        console.error = originalError;
      };
    }
  }, []);

  return (
    <html lang="es" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
        <title>Kevin Gómez — Desarrollador Web</title>
      </head>
      <body className="antialiased overflow-x-hidden">
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
      </body>
    </html>
  );
}
