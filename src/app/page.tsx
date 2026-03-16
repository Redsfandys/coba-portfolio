"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';

export default function Home() {
  const featuredProjects = projectsData.filter((project) => project.featured);

  const quotes = [
    "Welcome.",
    "😏",
    "🤓",
    "Some things I made.",
    "Things happened here.",
    "I guess I made this.",
    "Look what i made.",
    "Various things occured.",
    "Various things occured.",
    "My struggle",
    "Probably unnecessary.",
    "Accidentally made things.",
    "No pixels were harmed.",
    "No, pixels were harmed.",
    "This is fine.",
    "What have i done.",
    "Render and pray.",
    "What?",
    "Mistakes were made.",
    "25 crashes, 1 result.",
    "I rendered something."
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(randomIndex);
  }, []); 

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl flex flex-col gap-8"
      >
        <div className="min-h-[80px] md:min-h-[120px] flex items-center">
          <motion.h1
            key={quoteIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-light tracking-tight text-neutral-100 leading-snug"
          >
            {quotes[quoteIndex]}
          </motion.h1>
        </div>

        <div>
          <Link 
            href="/work" 
            className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white border-b border-neutral-800 hover:border-white pb-1 transition-all duration-500"
          >
            View All Works →
          </Link>
        </div>
      </motion.section>

      <motion.section layout className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {featuredProjects.map((project, index) => {
          const thumbnail = project.media[0];

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <Link href={`/project/${project.id}`} className="group flex flex-col gap-5 cursor-pointer">
                <div className="w-full bg-neutral-900 rounded-sm overflow-hidden relative aspect-[4/5] md:aspect-square transition-all duration-700 ease-out group-hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.15)]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                  
                  {thumbnail.type === 'image' ? (
                    <Image 
                      src={thumbnail.url} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, 50vw" 
                    />
                  ) : (
                    <video 
                      src={`${thumbnail.url}#t=0.001`} 
                      preload="metadata"
                      muted 
                      playsInline 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 pointer-events-none" 
                    />
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
      </motion.section>
    </div>
  );
}