import Link from 'next/link';

export default function UsefulSites() {
  const sites = [
    {
      id: 1,
      name: 'Polyhaven',
      url: 'https://polyhaven.com/',
      description: 'find 3d texture, pbr, hdri, etc.',
    },
    {
      id: 2,
      name: 'Pixel Converter',
      url: 'https://www.pixel-converter.ameniwa.com/',
      description: 'EZ pixel images.',
    },
    {
      id: 3,
      name: 'Remove Vocals',
      url: 'https://x-minus.pro/ai/',
      description: 'To separate vocals and background noise.',
    },
    {
      id: 4,
      name: 'Frutiger Aero Archive',
      url: 'https://frutigeraeroarchive.org/',
      description: 'MY BELOVED FRUTIGER AERO.',
    },
    {
      id: 5,
      name: '90s.myretrotvs',
      url: 'https://90s.myretrotvs.com/',
      description: 'retro tv.',
    },
    {
      id: 6,
      name: 'web design museum',
      url: 'https://webdesignmuseum.org/',
      description: 'history of web design.',
    },
    {
      id: 7,
      name: 'Photoroom',
      url: 'https://photoroom.com/',
      description: 'Many image editing tools here : background remover for free but basic quality.',
    },
  ];

  return (
    <div className="flex flex-col gap-16 max-w-3xl">
      <header className="border-b border-neutral-800 pb-8">
        <h1 className="text-xl font-light tracking-[0.2em] text-neutral-400 uppercase">
          Pages that i find insteresting (not mine)
        </h1>
      </header>

      <div className="flex flex-col gap-10">
        {sites.map((site) => (
          <Link 
            key={site.id} 
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2"
          >
            <h2 className="text-xl md:text-2xl font-light text-neutral-200 tracking-wide transition-all duration-500 group-hover:text-white group-hover:translate-x-2">
              {site.name} ↗
            </h2>
            <p className="text-sm text-neutral-500 tracking-wide transition-all duration-500 group-hover:translate-x-2">
              {site.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}