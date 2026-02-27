# **App Name**: PixelForge Portfolio

## Core Features:

- Dynamic Hero Section: Engaging interactive introduction featuring animated rotating text for skills and integrated social media links, appearing with a staggered entrance animation.
- Advanced Project Showcase: A responsive grid displaying portfolio projects with detailed images and advanced hover effects, including a Three.js-powered liquid distortion effect or a CSS-based elegant fallback.
- Interactive Custom Cursor: A custom JavaScript-powered cursor that dynamically changes size and color upon hovering over interactive elements, enhancing visual feedback.
- Seamless Page Transitions & Smooth Scroll: Utilizes Framer Motion for elegant page transition animations and Lenis for a smooth, natural scrolling experience across the entire site.
- Content Management via Local Data: Stores and displays project information, about me details, and contact information through structured local TypeScript files, supporting placeholders until real content is available.
- Editorial Typography & Visual Reveals: Implements bold, large-scale typography for headlines and section titles with dramatic text-reveal animations, including character and line splitting effects via GSAP SplitText.
- Adaptive Responsive Layout: Ensures an optimized user experience across all devices (mobile, tablet, desktop) with adaptive layouts, font scaling, and behavior adjustments, such as disabling the custom cursor on mobile.

## Style Guidelines:

- Inspired by an editorial, minimalist dark aesthetic with a vibrant touch, the palette emphasizes depth and dynamic contrast. The background is a very deep black (#0A0A0A / HSL(0, 0%, 4%)). The primary color, a rich burnt orange (#592C0F / HSL(35, 70%, 20%)), offers a subtle warmth that contrasts well with the dark base, maintaining sophistication. The accent is a striking neon yellow (#E8FF00 / HSL(65, 100%, 50%)), used sparingly for interactive elements and highlights to provide a 'vivid detail' in a dramatic way. Main text uses a soft off-white (#F5F5F5) for readability, while muted grays provide secondary textual information (#888888).
- Headline font: 'Space Grotesk' (proportional sans-serif, bold), conveying a modern and authoritative editorial feel. Body font: 'Inter' (grotesque-style sans-serif), chosen for its readability and clean, neutral appearance for extended text blocks. Note: currently only Google Fonts are supported.
- Clean, precise line-art icons (from 'Lucide React') for social media links, navigation indicators, and other UI elements, complementing the minimalist design without visual clutter. Interactive icons may adopt the accent color on hover.
- A modern, editorial layout featuring full-width sections, responsive grid systems for project displays, and generous whitespace. Navigation transitions on mobile to a full-screen overlay, centralizing menu items for clear access. Content sections reveal progressively as the user scrolls, creating a guided experience.
- Premium animations are integral to the design, utilizing GSAP with ScrollTrigger and SplitText for advanced scroll-triggered text reveals and character-level effects. Page transitions are handled by Framer Motion's AnimatePresence for a fluid content flow. An entirely custom cursor provides subtle interactivity. Project cards feature a sophisticated Three.js-driven liquid distortion hover effect (with a CSS fallback), offering a distinct high-end user experience.