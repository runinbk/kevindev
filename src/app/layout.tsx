import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import { ClientLayout } from './ClientLayout';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '800'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Kevin Gómez — Desarrollador Web',
  description: 'Portafolio de Kevin Gómez, Desarrollador Web',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="dark" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
