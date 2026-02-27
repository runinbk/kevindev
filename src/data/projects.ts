export interface Project {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  category: string[];
  categoryEn: string[];
  year: string;
  description: string;
  descriptionEn: string;
  thumbnail: string;
  images: string[];
  liveUrl: string;
  techStack: string[];
  longDescription: string;
  longDescriptionEn: string;
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "lumina-ecommerce",
    title: "Lumina E-shop",
    titleEn: "Lumina E-shop",
    category: ["E-commerce", "Diseño Web"],
    categoryEn: ["E-commerce", "Web Design"],
    year: "2024",
    description: "Una experiencia de compra minimalista para una marca de iluminación premium.",
    descriptionEn: "A minimalist shopping experience for a premium lighting brand.",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://example.com",
    techStack: ["Next.js", "Tailwind CSS", "Shopify CMS"],
    longDescription: "Lumina es una plataforma de comercio electrónico diseñada para resaltar la estética de productos de iluminación de lujo. El enfoque fue crear una interfaz que no distrajera del producto, utilizando micro-interacciones sutiles y un sistema de grid flexible.",
    longDescriptionEn: "Lumina is an e-commerce platform designed to highlight the aesthetics of luxury lighting products. The focus was to create an interface that wouldn't distract from the product, using subtle micro-interactions and a flexible grid system."
  },
  {
    id: "02",
    slug: "nexus-saas",
    title: "Nexus Platform",
    titleEn: "Nexus Platform",
    category: ["SaaS", "Dashboard"],
    categoryEn: ["SaaS", "Dashboard"],
    year: "2023",
    description: "Plataforma de análisis de datos en tiempo real para equipos de marketing.",
    descriptionEn: "Real-time data analysis platform for marketing teams.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://example.com",
    techStack: ["React", "D3.js", "Firebase", "Node.js"],
    longDescription: "Nexus ayuda a las empresas a visualizar sus métricas más importantes. El desafío fue manejar grandes volúmenes de datos sin comprometer el rendimiento de la interfaz de usuario.",
    longDescriptionEn: "Nexus helps companies visualize their most important metrics. The challenge was to handle large volumes of data without compromising user interface performance."
  },
  {
    id: "03",
    slug: "aura-app",
    title: "Aura Meditation",
    titleEn: "Aura Meditation",
    category: ["Web App", "UI/UX"],
    categoryEn: ["Web App", "UI/UX"],
    year: "2023",
    description: "Aplicación progresiva enfocada en el bienestar mental y meditación guiada.",
    descriptionEn: "Progressive web app focused on mental well-being and guided meditation.",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://example.com",
    techStack: ["Next.js", "Framer Motion", "Supabase"],
    longDescription: "Aura es una PWA que ofrece una experiencia inmersiva de meditación. Implementamos animaciones fluidas para guiar la respiración del usuario y un modo oscuro profundo para reducir la fatiga visual.",
    longDescriptionEn: "Aura is a PWA that offers an immersive meditation experience. We implemented fluid animations to guide the user's breathing and a deep dark mode to reduce eye strain."
  },
  {
    id: "04",
    slug: "vortex-agency",
    title: "Vortex Creative",
    titleEn: "Vortex Creative",
    category: ["Agencia", "Portafolio"],
    categoryEn: ["Agency", "Portfolio"],
    year: "2024",
    description: "Sitio web corporativo para una agencia creativa basada en Londres.",
    descriptionEn: "Corporate website for a London-based creative agency.",
    thumbnail: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://example.com",
    techStack: ["Next.js", "GSAP", "Sanity.io"],
    longDescription: "Vortex necesitaba un portafolio que gritara 'creatividad'. Utilizamos GSAP para crear transiciones de página complejas y efectos de scroll que mantienen al usuario comprometido.",
    longDescriptionEn: "Vortex needed a portfolio that screamed 'creativity'. We used GSAP to create complex page transitions and scroll effects that keep the user engaged."
  }
];