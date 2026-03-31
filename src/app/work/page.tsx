"use client";

import { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/lib/data';
import { useRouter, useSearchParams } from 'next/navigation';

function WorkGrid() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const urlFilter = searchParams.get('category') || 'All';
  const [activeFilter, setActiveFilter] = useState(urlFilter);

  const categories = ['All', 'Blender 3D', 'VFX','Video Editing', 'Photography'];

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category); 
    }
    
    router.replace(`/work?${params.toString()}`, { scroll: false });
  };

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter((project) => project.category === activeFilter);

  return (
    <div className="flex flex-col gap-16">
      <header className="flex flex-col gap-8 border-b border-neutral-800 pb-8">
        <h1 className="text-xl font-light tracking-[0.2em] text-neutral-400 uppercase">
          All My Works
        </h1>
        
        <div className="flex flex-wrap gap-6 md:gap-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`text-xs uppercase tracking-[0.2em] transition-colors duration-500 ${
                activeFilter === category 
                  ? 'text-neutral-50' 
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <motion.section layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const thumbnail = project.media[0];

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Link href={`/project/${project.id}`} className="group flex flex-col gap-5 cursor-pointer">
                  <div className="w-full bg-neutral-900 rounded-sm overflow-hidden relative aspect-[4/5] md:aspect-square transition-all duration-700 ease-out group-hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.15)]">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                    {thumbnail.type === 'image' ? (
                      <Image src={thumbnail.url} alt={project.title} fill className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    ) : (
                      <video src={`${thumbnail.url}#t=0.001`} preload="metadata" muted playsInline className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 pointer-events-none" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1 transform translate-y-2 opacity-60 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <h2 className="text-sm font-medium text-neutral-200 tracking-wide">{project.title}</h2>
                    <span className="text-xs text-neutral-500 uppercase tracking-widest">{project.category}</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.section>
    </div>
  );
}

export default function Work() {
  return (
    <Suspense fallback={<div className="text-neutral-500 text-sm tracking-widest uppercase">Loading index...</div>}>
      <WorkGrid />
    </Suspense>
  );
}