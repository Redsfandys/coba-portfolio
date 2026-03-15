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
  // 1. Unwrap the Next 15 params Promise
  const resolvedParams = use(params);
  const project = projectsData.find((p) => p.id === resolvedParams.id);

  // 2. State for the image carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {
    notFound();
  }

  // 3. Carousel navigation logic
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length);
  };

  return (
    <article className="flex flex-col gap-12 max-w-5xl mx-auto w-full animate-in fade-in duration-1000">
      
      {/* Back Button */}
      <div className="w-full">
        <Link 
          href="/" 
          className="text-xs uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors"
        >
          ← Back to Index
        </Link>
      </div>

      {/* Header */}
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-4xl font-light tracking-tight text-neutral-50">
          {project.title}
        </h1>
        <span className="text-xs text-neutral-500 uppercase tracking-widest">
          {project.category}
        </span>
      </header>

      {/* Carousel Container */}
      <div className="flex flex-col gap-6">
        <div className="w-full relative aspect-[4/5] md:aspect-[16/9] bg-neutral-900 rounded-sm overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={project.galleryImages[currentIndex]}
                alt={`${project.title} - Image ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls (Visible on hover on desktop) */}
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={prevImage}
              className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/80 transition-all"
              aria-label="Previous Image"
            >
              ←
            </button>
            <button 
              onClick={nextImage}
              className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/80 transition-all"
              aria-label="Next Image"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel Indicators & Caption */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-neutral-800 pt-6">
          <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-2xl">
            {project.description}
          </p>
          
          <div className="flex gap-2 text-xs text-neutral-500 tracking-widest">
            {currentIndex + 1} / {project.galleryImages.length}
          </div>
        </div>
      </div>

    </article>
  );
}