import Link from 'next/link';

export default function UsefulSites() {
  const sites = [
    {
      id: 1,
      name: 'Blender Market',
      url: 'https://blendermarket.com/',
      description: 'Essential add-ons, shaders, and assets for 3D workflows.',
    },
    {
      id: 2,
      name: 'Magnum Photos',
      url: 'https://www.magnumphotos.com/',
      description: 'Endless composition, lighting, and documentary photography inspiration.',
    },
    {
      id: 3,
      name: 'Godly Website',
      url: 'https://godly.website/',
      description: 'Curated web design inspiration for highly cinematic and interactive sites.',
    },
    {
      id: 4,
      name: 'Vercel',
      url: 'https://vercel.com/',
      description: 'The deployment platform we will use to push this portfolio live.',
    },
  ];

  return (
    <div className="flex flex-col gap-16 max-w-3xl">
      <header className="border-b border-neutral-800 pb-8">
        <h1 className="text-xl font-light tracking-[0.2em] text-neutral-400 uppercase">
          Index / Useful Sites
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