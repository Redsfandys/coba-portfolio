"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/lib/data';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Blender 3D', 'After Effects', 'Photography'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter((project) => project.category === activeFilter);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <h1 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-100 leading-snug">
          Bikin apa aja terserah gweh.
        </h1>
      </motion.section>

      <div className="flex flex-wrap gap-6 md:gap-10 border-b border-neutral-800 pb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
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

      <motion.section layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        <AnimatePresence>
          {filteredProjects.map((project) => {
            // Grab the first media item to act as the thumbnail
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
                
                {/* 1 & 2: The Image Container with the Neon Glow */}
                <div className="w-full bg-neutral-900 rounded-sm overflow-hidden relative aspect-[4/5] md:aspect-square transition-all duration-700 ease-out group-hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.15)]">
                  
                  {/* A subtle dark overlay that fades out on hover to make the image "pop" even more */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />

                  {thumbnail.type === 'image' ? (
                    <Image 
                      src={thumbnail.url}
                      alt={project.title}
                      fill
                      // The zoom effect: scale-100 to scale-105
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <video
                      src={thumbnail.url}
                      autoPlay
                      loop
                      muted
                      playsInline
                      // The zoom effect applied to the video
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 pointer-events-none"
                    />
                  )}
                </div>

                {/* 3: The Slide-Up & Fade-In Text */}
                {/* Starts slightly lowered (translate-y-2) and dimmed (opacity-60) */}
                <div className="flex flex-col gap-1 transform translate-y-2 opacity-60 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <h2 className="text-sm font-medium text-neutral-200 tracking-wide">
                    {project.title}
                  </h2>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">
                    {project.category}
                  </span>
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