export type MediaItem = {
  type: 'image' | 'video';
  url: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: 'Blender 3D' | 'VFX' | 'Video Editing' | 'Photography' | 'Web Development';
  date?: string;
  description: string; // Use backticks (`) instead of single quotes (') for multi-line text
  media: MediaItem[];
  role?: string;        // optional
  techStack?: string[]; // optional
  featured?: boolean;   // optional (buat home page)
};

export const projectsData: PortfolioItem[] = [
  {

    // ============ BLENDER ================
    id: 'Blender-1',
    title: '3D render bukit bintang',
    category: 'Blender 3D',
    date: '09-03-2026',
    description: 'malam.',
    featured: true,
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773613854/bukit_bintang2_fwzvar.png' },
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773614480/bukit_bintang_portrait_y1rxld.png' },
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773614483/bukit_bintang_portrait_car1_gwarx3.png' }
    ],
  },
  {
    id: 'Blender-2',
    title: 'Experimen shader 2D / Toon shader',
    category: 'Blender 3D',
    date: '14-10-2025',
    description: 'nyoba shader 2D di blender, dikala keterbatasan resource komputer',
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773614511/test_2d_shade_2_wywfkz.jpg' },
      { type: 'video', url: 'https://res.cloudinary.com/diofdjc4m/video/upload/vc_auto,q_auto/v1773615826/0001_2_c3ryit.mp4' },
    ],
  },
  {
    id: 'Blender-3',
    title: 'Istirahat Sejenak',
    category: 'Blender 3D',
    date: '20-02-2025',
    description: 'Kangen pulkam.',
    featured: true,
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773616348/blenderrender_o0wfz2.png' },
      { type: 'video', url: 'https://res.cloudinary.com/diofdjc4m/video/upload/vc_auto,q_auto/v1773616320/0001_1_tlkdbi.mp4' },
    ],
  },
  {
    id: 'Blender-4',
    title: 'Touge Drift Animation',
    category: 'Blender 3D',
    date: '24-12-2023',
    description: 'Animasi Drifting di jalan lintas provinsi indonesia. lokasi Jl. Banyuwangi (Banyuwangi-Jember), breakdown ada di Instagram.',
    featured: true,
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773617177/chaser_drift_2_peh3tn.png' },
      { type: 'video', url: 'https://res.cloudinary.com/diofdjc4m/video/upload/v1773616541/night_drift_2_z8od0q.mp4' },
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773617356/drift_sama_bdn3ts.png' },
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773618269/drift_tahzis.png' },
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773618100/chaser_drift_3_gaoj2q.png' },
    ],
  },
  {
    id: 'Blender-5',
    title: 'Aeon Mall BSD Rooftop',
    category: 'Blender 3D',
    date: '30-10-2025',
    description: 'Terinspirasi setelah parkir di rooftop.',
    featured: true,
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773614364/aeon_mall_rooftop_rx7_fc_ijiwzv.png' },
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773614365/aeon_mall_rooftop_rx7_fc_0_l9fcx9.png' },
      { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773618045/Aeon_Mall_rooftop4_ycd3fc.png' },
    ],
  },
  {
    id: 'Blender-6',
    title: '2D shader siang di lapangan pancasila, style low poly',
    category: 'Blender 3D',
    date: '17-10-2025',
    description: 'nyoba implementasiin 2d shader yang udah dibuat di scene siang hari, hasilnya malah kayak game FR Legends 😭.',
    media: [
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773619236/toon_shade_gsp_fmjjvm.jpg' },
        { type: 'video', url: 'https://res.cloudinary.com/diofdjc4m/video/upload/vc_auto,q_auto/v1773615471/0000_1_fy0ttp.mp4' },
    ],
  },
  {
    id: 'Blender-7',
    title: 'Bangjo Tugu',
    category: 'Blender 3D',
    date: '20-07-2023',
    description: 'Lampu merah tugu jogja.',
    media: [
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773617311/chaser_rx7_180sx_190622_0_qvoe0g.png' },
    ],
  },
  {
    id: 'Blender-8',
    title: 'Random',
    category: 'Blender 3D',
    date: '30-12-2022',
    description: 'gak tau di mana, scene ngarang imajinasi aja.',
    media: [
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773614536/untitled_kavryc.png' },
    ],
  },
  {
    id: 'Blender-9',
    title: 'Jalan layang MBZ',
    category: 'Blender 3D',
    date: '14-09-2023',
    description: 'nyoba2 aja.',
    media: [
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773615672/MBZ_pict_portrait_ccgovq.png' },
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773615672/MBZ_pict_portrait_ccgovq.png' },
    ],
  },
  {
    id: 'Blender-10',
    title: 'Titik Nol Jogja 2022',
    category: 'Blender 3D',
    date: '25-01-2023',
    description: 'Titik Nol.',
    media: [
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773615598/LS400_jogja_zqvxyn.png' },
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773615597/LS400_jogja1_y8gesq.png' },
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773615599/LS400_jogja3_sxobbs.png' },
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773615599/LS400_jogja4_zyfbhx.png' },
    ],
  },




  // ============== VFX ===========
  {
    id: 'Vfx-1',
    title: 'Mobil Kodok',
    category: 'VFX',
    date: '14-04-2023',
    description: 'Acumalaka.',
    media: [
        { type: 'video', url: 'https://res.cloudinary.com/diofdjc4m/video/upload/vc_auto,q_auto/v1773625909/portrait_mcthoc.mp4' },
    ],
  },



  // =============== VIDEO =============
  {
    id: 'Video-1',
    title: 'Kursi Sekolah',
    category: 'Video Editing',
    date: '14-04-2023',
    description: 'Kursi Sekolah gweh.',
    media: [
        { type: 'video', url: 'https://res.cloudinary.com/diofdjc4m/video/upload/vc_auto,q_auto/v1773627461/kursi_sekolah_ddt9iu.mp4' },
    ],
  },

  {
    id: 'Video-2',
    title: 'Kucing sekolah',
    category: 'Video Editing',
    date: '14-04-2023',
    description: `Kucing Sekolah gweh, namanya eepy (ipi). 
    
    Software used: Adobe After Effects 2023
    Camera used: Iphone 10
    `,
    media: [
        { type: 'video', url: 'https://res.cloudinary.com/diofdjc4m/video/upload/v1773627614/sleeper_car_mdyllp.mp4' },
    ],
  },
  
  //  ================= PHOTOGRAPHY ===============
  {
    id: 'Photo-1',
    title: 'Coming Soon',
    category: 'Photography',
    date: '14-04-2023',
    description: 'you can see some on my insta',
    media: [
        { type: 'image', url: 'https://res.cloudinary.com/diofdjc4m/image/upload/f_auto,q_auto/v1773629240/DSC06564-2_ymvt9u.jpg' },
    ],
  },
  


  // ================ WEB DEV ==============
  
];