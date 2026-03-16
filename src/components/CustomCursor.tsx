"use client";

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Dynamically update CSS variables without re-rendering the component
        cursorRef.current.style.setProperty('--x', `${e.clientX}px`);
        cursorRef.current.style.setProperty('--y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed inset-0 z-50 hidden sm:block transition-opacity duration-300"
      style={{
        // A radial gradient that creates a soft white light fading into transparency
        background: 'radial-gradient(600px circle at var(--x, 50vw) var(--y, 50vh), rgba(139,92,246,0.09), transparent 40%)'
      }}
    />
  );
}