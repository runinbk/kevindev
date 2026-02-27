
"use client";

import { useEffect } from 'react';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { SmoothScroll } from '@/components/SmoothScroll';
import { PageTransition } from '@/components/PageTransition';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Interceptor global para ignorar ruidos de extensiones de navegador (MetaMask, etc)
    const handleError = (e: ErrorEvent | PromiseRejectionEvent) => {
      const message = (e instanceof ErrorEvent) ? e.message : (e.reason?.message || '');
      const filename = (e instanceof ErrorEvent) ? e.filename : '';

      const isExtensionError = 
        message?.includes('MetaMask') || 
        message?.includes('eth_') ||
        message?.includes('ERR_BLOCKED_BY_CLIENT') ||
        filename?.includes('extension') ||
        filename?.includes('inpage.js');

      if (isExtensionError) {
        e.stopImmediatePropagation();
        // Evita que Next.js muestre el error en el overlay de desarrollo
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@600;700;800&display=swap" rel="stylesheet" />
        <title>Kevin Gómez — Desarrollador Web</title>
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-black">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
