"use client";

import { useState, useRef } from 'react';

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation(); // Prevents slider clicks from pausing the video
    const seekTo = parseFloat(e.target.value);
    setProgress(seekTo);
    if (videoRef.current) {
      videoRef.current.currentTime = (videoRef.current.duration / 100) * seekTo;
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center group">
      
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay} 
        className="w-full h-full object-contain p-4 md:p-8 cursor-pointer"
      />

      <div 
        onClick={(e) => e.stopPropagation()}
        className={`absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12 bg-black/40 backdrop-blur-md border border-white/10 p-3 md:p-4 rounded-sm flex items-center gap-4 transition-opacity duration-500 z-20 ${
          isPlaying ? 'opacity-100 md:opacity-0 md:group-hover:opacity-100' : 'opacity-100'
        }`}
      >
        
        <button onClick={togglePlay} className="text-white hover:text-neutral-400 transition-colors w-6 h-6 flex justify-center items-center">
          {isPlaying ? (
             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
          ) : (
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          )}
        </button>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="flex-grow h-1 bg-neutral-600 rounded-lg appearance-none cursor-pointer accent-white"
        />

        <button onClick={toggleMute} className="text-white hover:text-neutral-400 transition-colors w-6 h-6 flex justify-center items-center">
          {isMuted ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
          )}
        </button>

      </div>
    </div>
  );
}