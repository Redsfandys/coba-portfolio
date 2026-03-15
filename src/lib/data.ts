export type PortfolioItem = {
  id: string;
  title: string;
  galleryImages: string[];
  category: 'Blender 3D' | 'After Effects' | 'Photography' | 'Websites';
  description: string;
};

export const projectsData: PortfolioItem[] = [
  {
    id: 'w140-study',
    title: 'Mercedes W140 Study',
    galleryImages: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Photography',
    description: 'Low-light automotive photography focusing on the timeless geometry and sharp, distinctive lines of the W140 chassis.'
  },
  {
    id: 'brake-light-volumetrics',
    title: 'Brake Light Volumetrics',
    galleryImages: [
      'https://images.unsplash.com/photo-1611016186353-9af2430f81d1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1620882814836-98a2eb98b1b5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Blender 3D',
    description: 'A study in realistic light dispersion and glass refraction, aiming for photorealistic material nodes and volumetric lighting.'
  },
  {
    id: 'exhibition-recap',
    title: 'Exhibition After-Movie',
    galleryImages: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'After Effects',
    description: 'A cinematic, high-contrast recap of an annual photography club exhibition, edited to emphasize atmosphere and community.'
  },
  {
    id: 'ls400-archive',
    title: 'Lexus LS400 Archive',
    galleryImages: [
      'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376710962-d98c19eb5ce6?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Websites',
    description: 'A visual archive showcasing factory color codes and the iconic 90s styling of the classic Lexus LS400.'
  },
  {
    id: 'render-optimization',
    title: 'Cycles Render Optimization',
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1633511090164-b4109f2d12e6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'Blender 3D',
    description: 'Exploring high-fidelity rendering techniques and node setups to push realism in hard-surface automotive modeling.'
  },
  {
    id: 'merch-promo',
    title: 'Merchandise Promo',
    galleryImages: [
      'https://images.unsplash.com/photo-1529336953128-a85760f58cb5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=1200&q=80'
    ],
    category: 'After Effects',
    description: 'Kinetic typography and motion graphics designed to promote an upcoming run of photography exhibition merchandise.'
  }
];