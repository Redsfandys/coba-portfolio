export type MediaItem = {
  type: 'image' | 'video';
  url: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: 'Blender 3D' | 'After Effects' | 'Photography' | 'Web Development';
  description: string;
  media: MediaItem[];
  role?: string;        // optional
  techStack?: string[]; // optional
};

export const projectsData: PortfolioItem[] = [
  {
    id: 'Blender-bukit-bintang',
    title: '3D render bukit bintang',
    category: 'Blender 3D',
    description: 'malam.',
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773613854/bukit_bintang2_fwzvar.png' },
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773614480/bukit_bintang_portrait_y1rxld.png' },
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773614483/bukit_bintang_portrait_car1_gwarx3.png' }
    ],
  },
  {
    id: 'Blender-nyoba-2d-shader',
    title: 'Experimen shader 2D / Toon shader',
    category: 'Blender 3D',
    description: 'nyoba shader 2D di blender, dikala keterbatasan resource komputer',
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773614511/test_2d_shade_2_wywfkz.jpg' },
      { type: 'video', url: 'https://res.cloudinary.com/diofdjc4m/video/upload/v1773615826/0001_2_c3ryit.mp4' },
    ],
  },
  {
    id: 'Blender-animasi-jalan-pantura',
    title: 'Istirahat Sejenak',
    category: 'Blender 3D',
    description: 'A cinematic, high-contrast recap of an annual photography club exhibition, edited to emphasize atmosphere and community.',
    media: [
      // Dummy MP4 for testing video functionality
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773616348/blenderrender_o0wfz2.png' },
      { type: 'video', url: 'https://res.cloudinary.com/diofdjc4m/video/upload/v1773616320/0001_1_tlkdbi.mp4' },
    ],
  },
  {
    id: 'Blender-Touge-drift-animation',
    title: 'Touge Drift Animation',
    category: 'Blender 3D',
    description: 'Animasi Drifting di jalan lintas provinsi indonesia. lokasi Jl. Banyuwangi (Banyuwangi-Jember), breakdown ada di Instagram.',
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773617177/chaser_drift_2_peh3tn.png' },
      { type: 'video', url: 'https://res.cloudinary.com/diofdjc4m/video/upload/v1773616541/night_drift_2_z8od0q.mp4' },
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773617356/drift_sama_bdn3ts.png' },
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773618269/drift_tahzis.png' },
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773618100/chaser_drift_3_gaoj2q.png' },
    ],
  },
  {
    id: 'Blender-Aeon-Rooftop',
    title: 'Aeon Mall BSD Rooftop',
    category: 'Blender 3D',
    description: 'Terinspirasi setelah parkir di rooftop.',
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773614364/aeon_mall_rooftop_rx7_fc_ijiwzv.png' },
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773614365/aeon_mall_rooftop_rx7_fc_0_l9fcx9.png' },
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773618045/Aeon_Mall_rooftop4_ycd3fc.png' },
    ],
  },
  {
    id: 'Blender-nyoba-2d-shader-lagi',
    title: '2D shader siang di lapangan pancasila, style low poly',
    category: 'Blender 3D',
    description: 'nyoba implementasiin 2d shader yang udah dibuat di scene siang hari, hasilnya malah kayak game FR Legends 😭.',
    media: [
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773619236/toon_shade_gsp_fmjjvm.jpg' },
        { type: 'video', url: 'https://res.cloudinary.com/diofdjc4m/video/upload/v1773615471/0000_1_fy0ttp.mp4' },
    ],
  },
  {
    id: 'Blender-bangjo-Tugu',
    title: 'Random',
    category: 'Blender 3D',
    description: 'Lampu merah tugu jogja.',
    media: [
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773617311/chaser_rx7_180sx_190622_0_qvoe0g.png' },
    ],
  },
  {
    id: 'Blender-Random',
    title: 'Random',
    category: 'Blender 3D',
    description: 'gak tau di mana, scene ngarang imajinasi aja.',
    media: [
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773615599/LS400_jogja4_zyfbhx.png' },
    ],
  },
  {
    id: 'Blender-MBZ',
    title: 'Jalan layang MBZ',
    category: 'Blender 3D',
    description: 'nyoba2 aja.',
    media: [
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773615672/MBZ_pict_portrait_ccgovq.png' },
    ],
  },
  {
    id: 'Blender-Titik-Nol-Jogja',
    title: 'Titik Nol Jogja 2022',
    category: 'Blender 3D',
    description: 'Titik Nol.',
    media: [
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773615598/LS400_jogja_zqvxyn.png' },
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773615597/LS400_jogja1_y8gesq.png' },
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773615599/LS400_jogja3_sxobbs.png' },
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/v1773615599/LS400_jogja4_zyfbhx.png' },
    ],
  },

  
];