// /data/projects.ts

export type Locale = 'es' | 'en'

export interface ProjectTranslation {
  title: string
  description: string        // descripción corta para la card
  longDescription: string    // descripción larga para la página detalle
  category: string[]
}

export interface Project {
  id: string
  slug: string
  year: string
  thumbnail: string          // ruta de imagen thumbnail
  images: string[]           // rutas de imágenes adicionales
  liveUrl: string
  techStack: string[]        // el tech stack NO se traduce
  translations: {
    es: ProjectTranslation
    en: ProjectTranslation
  }
}

export const projects: Project[] = [
  // ─────────────────────────────────────────
  // PROYECTO 1 — GRILLI RESTAURANT
  // ─────────────────────────────────────────
  {
    id: "1",
    slug: "grilli-restaurant",
    year: "2024",
    thumbnail: "/assets/grilli-thumb.png",
    images: [
      "/assets/grilli-1.png",
      "/assets/grilli-2.png",
    ],
    liveUrl: "https://project4-iota-indol.vercel.app/",
    techStack: ["React", "Tailwind CSS", "Vite"],
    translations: {
      es: {
        title: "Grilli Restaurant",
        category: ["Landing Page", "Web Design"],
        description: "Sitio web completo para restaurante con sistema de reservas online, menú interactivo y diseño cálido orientado a la experiencia gastronómica.",
        longDescription: "Grilli es un sitio web para restaurante que combina estética cálida con funcionalidad práctica. Incluye un slider de hero animado, secciones de menú con categorías, galería de platos especiales, formulario de reservas con selección de hora y número de personas, sección de próximos eventos y contacto. El diseño usa una paleta dorada y crema que transmite elegancia y calidez gastronómica.",
      },
      en: {
        title: "Grilli Restaurant",
        category: ["Landing Page", "Web Design"],
        description: "Full restaurant website with online reservation system, interactive menu and warm design focused on the gastronomic experience.",
        longDescription: "Grilli is a restaurant website that combines warm aesthetics with practical functionality. It includes an animated hero slider, menu sections with categories, special dish gallery, reservation form with time and guest selection, upcoming events section and contact. The design uses a golden and cream palette that conveys elegance and gastronomic warmth.",
      }
    }
  },

  // ─────────────────────────────────────────
  // PROYECTO 2 — ZENTRY REBUILD
  // ─────────────────────────────────────────
  {
    id: "2",
    slug: "zentry-rebuild",
    year: "2024",
    thumbnail: "/assets/zentry-thumb.png",
    images: [
      "/assets/zentry-1.png",
      "/assets/zentry-2.png",
    ],
    liveUrl: "https://webpage2-ruby.vercel.app/",
    techStack: ["React", "GSAP", "Tailwind CSS", "Vite"],
    translations: {
      es: {
        title: "Zentry — Rebuild",
        category: ["UI/UX", "Animaciones", "Web Design"],
        description: "Reconstrucción fiel del sitio de Zentry, destacando animaciones avanzadas, transiciones fluidas y una experiencia visual de nivel premium.",
        longDescription: "Proyecto de reconstrucción del sitio web de Zentry, enfocado en replicar y estudiar animaciones de nivel world-class. Incluye scroll storytelling, transiciones de clip-path, efectos de paralax y una interfaz inmersiva. Este proyecto demuestra dominio avanzado de GSAP y técnicas de animación web modernas.",
      },
      en: {
        title: "Zentry — Rebuild",
        category: ["UI/UX", "Animations", "Web Design"],
        description: "Faithful reconstruction of Zentry's website, highlighting advanced animations, fluid transitions and a premium-level visual experience.",
        longDescription: "Reconstruction project of the Zentry website, focused on replicating and studying world-class animations. Features scroll storytelling, clip-path transitions, parallax effects and an immersive interface. This project demonstrates advanced mastery of GSAP and modern web animation techniques.",
      }
    }
  },

  // ─────────────────────────────────────────
  // PROYECTO 3 — SPYLT MILK
  // ─────────────────────────────────────────
  {
    id: "3",
    slug: "spylt-milk",
    year: "2024",
    thumbnail: "/assets/spylt-thumb.png",
    images: [
      "/assets/spylt-1.png",
      "/assets/spylt-2.png",
    ],
    liveUrl: "https://webpage3-beige.vercel.app/",
    techStack: ["React", "Tailwind CSS", "Vite"],
    translations: {
      es: {
        title: "SPYLT Milk",
        category: ["Branding", "Landing Page", "E-commerce"],
        description: "Landing page de producto para marca de leche con identidad visual fuerte, diseño editorial moderno y animaciones de entrada.",
        longDescription: "SPYLT Milk es una landing page para una marca de productos lácteos con personalidad propia. El diseño apuesta por un estilo editorial y minimalista que diferencia el producto en el mercado. Se priorizó la identidad visual de la marca, la jerarquía tipográfica y una experiencia de scroll limpia y moderna.",
      },
      en: {
        title: "SPYLT Milk",
        category: ["Branding", "Landing Page", "E-commerce"],
        description: "Product landing page for a milk brand with strong visual identity, modern editorial design and entrance animations.",
        longDescription: "SPYLT Milk is a landing page for a dairy brand with its own personality. The design bets on an editorial and minimalist style that differentiates the product in the market. Brand visual identity, typographic hierarchy and a clean, modern scroll experience were prioritized.",
      }
    }
  },

  // ─────────────────────────────────────────
  // PROYECTO 4 — TRUUS AGENCY
  // ─────────────────────────────────────────
  {
    id: "4",
    slug: "truus-agency",
    year: "2024",
    thumbnail: "/assets/truus-thumb.png",
    images: [
      "/assets/truus-1.png",
      "/assets/truus-2.png",
    ],
    liveUrl: "https://webpage5-chi.vercel.app/",
    techStack: ["HTML", "CSS", "JavaScript", "SVG Animation"],
    translations: {
      es: {
        title: "Truus — Ad Agency",
        category: ["Agencia", "Web Design", "UI/UX"],
        description: "Réplica del sitio de una agencia de publicidad con personalidad irreverente, SVG animados, marquee interactivo y stickers en el footer.",
        longDescription: "Recreación del sitio de Truus, una agencia de publicidad holandesa con estética muy particular: tipografía bold, stickers SVG animados, sección de marquee con imágenes y un footer lleno de personalidad. Design and code by Kevin Gómez. Este proyecto muestra capacidad para traducir identidades de marca únicas en experiencias web memorables.",
      },
      en: {
        title: "Truus — Ad Agency",
        category: ["Agency", "Web Design", "UI/UX"],
        description: "Replica of an irreverent ad agency website with animated SVGs, interactive marquee and stickers in the footer.",
        longDescription: "Recreation of the Truus website, a Dutch advertising agency with a very particular aesthetic: bold typography, animated SVG stickers, image marquee section and a footer full of personality. Design and code by Kevin Gómez. This project shows the ability to translate unique brand identities into memorable web experiences.",
      }
    }
  },
]

// ─────────────────────────────────────────
// HELPER: obtener proyecto por slug
// ─────────────────────────────────────────
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

// ─────────────────────────────────────────
// HELPER: obtener todos los proyectos
// ─────────────────────────────────────────
export function getAllProjects(): Project[] {
  return projects
}

// ─────────────────────────────────────────
// HELPER: obtener traducción según locale
// ─────────────────────────────────────────
export function getProjectTranslation(project: Project, locale: Locale): ProjectTranslation {
  return project.translations[locale] ?? project.translations['es']
}