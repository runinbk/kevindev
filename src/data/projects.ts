export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string[];
  year: string;
  description: string;
  thumbnail: string;
  images: string[];
  liveUrl: string;
  techStack: string[];
  longDescription: string;
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "lumina-ecommerce",
    title: "Lumina E-shop",
    category: ["E-commerce", "Web Design"],
    year: "2024",
    description: "Una experiencia de compra minimalista para una marca de iluminación premium.",
    thumbnail: "https://picsum.photos/seed/lumina/1200/800",
    images: [
      "https://picsum.photos/seed/lumina1/1200/800",
      "https://picsum.photos/seed/lumina2/1200/800"
    ],
    liveUrl: "https://example.com",
    techStack: ["Next.js", "Tailwind CSS", "Shopify CMS"],
    longDescription: "Lumina es una plataforma de comercio electrónico diseñada para resaltar la estética de productos de iluminación de lujo. El enfoque fue crear una interfaz que no distrajera del producto, utilizando micro-interacciones sutiles y un sistema de grid flexible."
  },
  {
    id: "02",
    slug: "nexus-saas",
    title: "Nexus Platform",
    category: ["SaaS", "Dashboard"],
    year: "2023",
    description: "Plataforma de análisis de datos en tiempo real para equipos de marketing.",
    thumbnail: "https://picsum.photos/seed/nexus/1200/800",
    images: [
      "https://picsum.photos/seed/nexus1/1200/800",
      "https://picsum.photos/seed/nexus2/1200/800"
    ],
    liveUrl: "https://example.com",
    techStack: ["React", "D3.js", "Firebase", "Node.js"],
    longDescription: "Nexus ayuda a las empresas a visualizar sus métricas más importantes. El desafío fue manejar grandes volúmenes de datos sin comprometer el rendimiento de la interfaz de usuario."
  },
  {
    id: "03",
    slug: "aura-app",
    title: "Aura Meditation",
    category: ["Web App", "UI/UX"],
    year: "2023",
    description: "Aplicación progresiva enfocada en el bienestar mental y meditación guiada.",
    thumbnail: "https://picsum.photos/seed/aura/1200/800",
    images: [
      "https://picsum.photos/seed/aura1/1200/800",
      "https://picsum.photos/seed/aura2/1200/800"
    ],
    liveUrl: "https://example.com",
    techStack: ["Next.js", "Framer Motion", "Supabase"],
    longDescription: "Aura es una PWA que ofrece una experiencia inmersiva de meditación. Implementamos animaciones fluidas para guiar la respiración del usuario y un modo oscuro profundo para reducir la fatiga visual."
  },
  {
    id: "04",
    slug: "vortex-agency",
    title: "Vortex Creative",
    category: ["Agency", "Portfolio"],
    year: "2024",
    description: "Sitio web corporativo para una agencia creativa basada en Londres.",
    thumbnail: "https://picsum.photos/seed/vortex/1200/800",
    images: [
      "https://picsum.photos/seed/vortex1/1200/800",
      "https://picsum.photos/seed/vortex2/1200/800"
    ],
    liveUrl: "https://example.com",
    techStack: ["Next.js", "GSAP", "Sanity.io"],
    longDescription: "Vortex necesitaba un portafolio que gritara 'creatividad'. Utilizamos GSAP para crear transiciones de página complejas y efectos de scroll que mantienen al usuario comprometido."
  }
];
