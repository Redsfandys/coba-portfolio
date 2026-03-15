import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/data';

export default async function ProjectDetail({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  
  // Look through our central array and find the one that matches the URL
  const project = projectsData.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-16 md:gap-32 w-full animate-in fade-in duration-1000">
      
      <div className="w-full">
        <Link 
          href="/work" 
          className="text-xs uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors"
        >
          ← Back to Index
        </Link>
      </div>

      <header className="flex flex-col gap-6 max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-light tracking-tighter text-neutral-50 leading-none">
          {project.title}
        </h1>
      </header>

      {/* Hero Media Element */}
      <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-900 relative rounded-sm overflow-hidden">
        <Image
          src={project.galleryImages[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 border-t border-neutral-800 pt-16">
        <div className="col-span-1 md:col-span-4 flex flex-col gap-8">
          <div>
            <span className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">Category</span>
            <span className="text-sm md:text-base text-neutral-200">{project.category}</span>
          </div>
        </div>

        <div className="col-span-1 md:col-span-8">
          <p className="text-base md:text-xl font-light text-neutral-400 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>
      </div>
    </article>
  );
}