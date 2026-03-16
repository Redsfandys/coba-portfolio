"use client";

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = use(params);
  const project = projectsData.find((p) => p.id === resolvedParams.id);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {
    notFound();
  }

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % project.media.length);
  };

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + project.media.length) % project.media.length);
  };

  const currentMedia = project.media[currentIndex];

  return (
    <article className="flex flex-col gap-12 max-w-5xl mx-auto w-full animate-in fade-in duration-1000">
      
      <div className="w-full">
        <Link 
          href="/" 
          className="text-xs uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors"
        >
          ← Back to Index
        </Link>
      </div>

      <header className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-4xl font-light tracking-tight text-neutral-50">
          {project.title}
        </h1>
        <span className="text-xs text-neutral-500 uppercase tracking-widest">
          {project.category}
        </span>
      </header>

      <div className="flex flex-col gap-6">
        <div className="w-full relative aspect-[4/5] md:aspect-[16/9] bg-neutral-900 rounded-sm overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              {currentMedia.type === 'image' ? (
                <Image
                  src={currentMedia.url}
                  alt={`${project.title} - Media ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <video
                  src={currentMedia.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {project.media.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={prevMedia}
                className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/80 transition-all"
                aria-label="Previous Media"
              >
                ←
              </button>
              <button 
                onClick={nextMedia}
                className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/80 transition-all"
                aria-label="Next Media"
              >
                →
              </button>
            </div>
          )}
        </div>

        {/* Description & Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-neutral-800 pt-6">
          <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-2xl">
            {project.description}
          </p>
          
          <div className="flex gap-2 text-xs text-neutral-500 tracking-widest">
            {currentIndex + 1} / {project.media.length}
          </div>
        </div>

        {/* NEW: Optional Metadata Section */}
        {(project.role || (project.techStack && project.techStack.length > 0)) && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-neutral-800 pt-6">
            
            {/* Render Role if it exists */}
            {project.role && (
              <div className="col-span-1 md:col-span-4 flex flex-col gap-2">
                <span className="text-xs text-neutral-500 uppercase tracking-widest">Role</span>
                <span className="text-sm text-neutral-200 tracking-wide">{project.role}</span>
              </div>
            )}
            
            {/* Render Tech Stack Pills if array exists and isn't empty */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="col-span-1 md:col-span-8 flex flex-col gap-3">
                <span className="text-xs text-neutral-500 uppercase tracking-widest">Technologies</span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-4 py-1.5 text-[10px] sm:text-xs text-neutral-300 bg-neutral-900/50 border border-neutral-800 rounded-full tracking-wider uppercase transition-colors hover:bg-neutral-800 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

    </article>
  );
}