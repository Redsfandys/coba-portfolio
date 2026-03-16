"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  const capabilities = [
    {
      title: "For 3D stuffs",
      skills: ["Blender 3D (main)", "Unity (beginner / skill issue)", "Cascadeur", "ActorCore Accurig"]
    },
    {
      title: "Video Editing",
      skills: ["Adobe Premiere Pro", "Adobe After Effects", "Davinci Resolve (skill issue)"]
    },
    {
      title: "Photo/image/design/graphic/drawing whatever",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Lightroom", "Figma", "Krita"]
    }
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 animate-in fade-in duration-1000">
      
      <header className="flex flex-col gap-2 border-b border-neutral-800 pb-8">
        <h1 className="text-xl font-light tracking-[0.2em] text-neutral-400 uppercase">
          About
        </h1>
      </header>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
<motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-5/12 lg:sticky lg:top-32" 
        >
            <div className="w-full relative aspect-[3/4] md:aspect-[4/5] bg-neutral-900 rounded-sm overflow-hidden group">
            <Image
              src="https://frutigeraeroarchive.org/images/wallpapers/asadal_stock/asadal_stock_174.jpg" 
              alt="Portrait"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-7/12 flex flex-col gap-16"
        >
          {/* Intro & Bio */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-50 leading-snug">
              My About Me gweh.
            </h2>
            
            <div className="flex flex-col gap-6 text-sm md:text-base text-neutral-400 font-light leading-relaxed">
              <p>
                Hy, gw bisa blender. 
                </p>
              <p>
                gk niat nunjukin about me sebenernya (untuk saat ini), chat aja.
              </p>
              <p>
                I love frutiger aero 🫧.
              </p>
              <p>
                mainly active on ig.
              </p>
              <p>
                This image on the left isn't mine, credit to - frutigeraeroarchive.org.
              </p>

            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="flex flex-col gap-10 border-t border-neutral-800 pt-10">
            <h2 className="text-xs uppercase tracking-widest text-neutral-300">
                Software im using    
            </h2>
            {capabilities.map((category, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3 className="text-xs uppercase tracking-widest text-neutral-500">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-1.5 text-xs text-neutral-300 bg-neutral-900/30 border border-neutral-800 rounded-full tracking-wider transition-colors hover:bg-neutral-800 hover:text-white cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
}