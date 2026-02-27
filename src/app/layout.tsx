"use client";

import { useEffect, useState } from 'react';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { SmoothScroll } from '@/components/SmoothScroll';
import { PageTransition } from '@/components/PageTransition';
import { Preloader } from '@/components/Preloader';

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

    // Suppress noise from extensions
    const handleError = (e: ErrorEvent | PromiseRejectionEvent) => {
      const message = (e instanceof ErrorEvent) ? e.message : (e.reason?.message || '');
      if (message?.includes('MetaMask') || message?.includes('extension')) {
        e.stopImmediatePropagation();
        if (e.preventDefault) e.preventDefault();
      }
    };

    window.addEventListener('error', handleError, true);
    window.addEventListener('unhandledrejection', handleError, true);
    
    return () => {
      window.removeEventListener('error', handleError, true);
      window.removeEventListener('unhandledrejection', handleError, true);
    };
  }, []);

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
        <title>Kevin Gómez — Desarrollador Web</title>
      </head>
      <body className="antialiased overflow-x-hidden">
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
      </body>
    </html>
  );
}
