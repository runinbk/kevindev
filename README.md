# Kevin Gómez — Personal Portfolio

> A modern, animated personal portfolio built to showcase web development projects with editorial aesthetics and premium interactions.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)

## Overview

Personal portfolio of **Kevin Gómez**, a web developer based in Santa Cruz, Bolivia. Designed to present web projects to potential clients with a focus on visual impact, smooth animations, and clean editorial design inspired by award-winning creative studios.

The portfolio features a dark/light theme toggle, animated hero section, project cards with hover effects, individual project detail pages, and a fully responsive layout across all devices.

## Features

- **Dark / Light Mode** — Seamless theme switching with smooth CSS transitions and localStorage persistence
- **GSAP Animations** — Scroll-triggered text reveals, staggered entrance animations, and a rotating word carousel in the hero
- **Smooth Scroll** — Butter-smooth scrolling powered by Lenis
- **Custom Cursor** — Dual-circle cursor with `mix-blend-mode: difference` that adapts to any background color
- **Project Detail Pages** — Individual pages for each project with hero image, description, gallery, tech stack, and live site link
- **Animated Marquee** — Horizontal scrolling ticker showcasing services
- **Page Transitions** — Framer Motion `AnimatePresence` for fluid navigation between pages
- **Fully Responsive** — Optimized for desktop, tablet, and mobile with a clip-path animated mobile menu
- **Language Toggle** — ES / EN button in the navbar (UI ready for future i18n implementation)
- **Performance Optimized** — `next/image` for all images, GSAP cleanup on unmount, `prefers-reduced-motion` support

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS Variables |
| Animations | GSAP + ScrollTrigger + SplitText |
| Smooth Scroll | Lenis |
| Page Transitions | Framer Motion |
| Icons | Lucide React |
| Deploy | Vercel |

## Project Structure

```
/
├── app/
│   ├── layout.tsx           # Global layout, providers, metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # CSS variables, dark/light themes, reset
│   └── trabajo/
│       └── [slug]/
│           └── page.tsx     # Dynamic project detail page
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ProjectCard.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── CustomCursor.tsx
│   ├── ThemeToggle.tsx
│   ├── SmoothScroll.tsx
│   └── Marquee.tsx
├── data/
│   └── projects.ts          # Project data — edit this to add/update projects
└── public/
    └── images/
        └── projects/        # Project screenshots go here
```

## Getting Started

```bash
# Clone the repository
git clone https://github.com/runinbk/kevindev.git
cd kevindev

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding a New Project

Edit `data/projects.ts` and add a new entry to the array:

```typescript
{
  id: "5",
  slug: "your-project-slug",
  title: "Your Project Name",
  category: ["Landing Page", "Web Design"],
  year: "2025",
  description: "Short description for the project card.",
  thumbnail: "/images/projects/your-project-thumbnail.jpg",
  images: [
    "/images/projects/your-project-1.jpg",
    "/images/projects/your-project-2.jpg",
  ],
  liveUrl: "https://your-project.vercel.app",
  techStack: ["Next.js", "Tailwind CSS", "Firebase"],
  longDescription: "Full description for the project detail page.",
}
```

Then add the screenshot files to `/public/images/projects/`.

## Deployment

This project is configured for deployment on **Vercel**.

```bash
# Deploy via Vercel CLI
npx vercel

# Or connect your GitHub repository at vercel.com
# and it will deploy automatically on every push to main
```

## License

© 2026 Kevin Gómez — All rights reserved.  
This repository is public for portfolio and reference purposes. The design and code are not licensed for reuse or redistribution.