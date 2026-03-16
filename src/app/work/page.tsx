import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/lib/data';

export default function Work() {
  return (
    <div className="flex flex-col gap-16">
      <header className="border-b border-neutral-800 pb-8">
        <h1 className="text-xl font-light tracking-[0.2em] text-neutral-400 uppercase">
          Index / All Works
        </h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-24">
        {projectsData.map((project) => (
          <Link key={project.id} href={`/work/${project.id}`} className="group flex flex-col gap-4 cursor-pointer">
            <div className="w-full bg-neutral-900 rounded-sm overflow-hidden relative aspect-[4/5] md:aspect-square">
              <Image 
                src={project.media[0].url}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex justify-between items-baseline">
              <h2 className="text-sm md:text-base font-medium text-neutral-200 tracking-wide group-hover:text-white transition-colors">
                {project.title}
              </h2>
              <span className="text-xs text-neutral-500 uppercase tracking-widest">
                {project.category}
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}