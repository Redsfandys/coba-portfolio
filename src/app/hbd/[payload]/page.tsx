"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { useParams } from "next/navigation";

export default function SurprisePage() {
  const params = useParams();
  const [clicks, setClicks] = useState(0);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [payload, setPayload] = useState({
    n: "Bro",
    m: "Surprise!",
    e: "🎂",
  });

  // Decode the JSON payload from the URL
  useEffect(() => {
    if (params.payload) {
      try {
        const base64Decoded = atob(params.payload as string);
        const jsonString = decodeURIComponent(base64Decoded);
        const parsed = JSON.parse(jsonString);
        
        setPayload({
          n: parsed.n || "Bro",
          m: parsed.m || "Surprise!",
          e: parsed.e || "🎂",
        });
      } catch (e) {
        console.error("Payload decode error:", e);
      }
    }
  }, [params.payload]);

  // 2. FIXED CONFETTI Z-INDEX
  useEffect(() => {
    let animationFrameId: number;
    if (clicks >= 4) {
      const duration = 15 * 1000;
      const animationEnd = Date.now() + duration;

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const frame = () => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return;

        confetti({
          particleCount: 4,
          angle: randomInRange(55, 125),
          spread: randomInRange(50, 70),
          origin: { x: randomInRange(0, 1), y: -0.1 },
          zIndex: 9999, 
        });
        animationFrameId = requestAnimationFrame(frame);
      };
      frame();
    }
    return () => cancelAnimationFrame(animationFrameId);
  }, [clicks]);

  const handleBoxClick = () => {
    setClicks((prev) => prev + 1);
  };

  return (
    // fixed inset-0 and z-50 forces this to cover your nav/footer completely
    <div className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center text-black overflow-hidden font-sans">
      
      {/* STATES 0 to 3: The Box */}
      {clicks < 4 && (
        <div 
          onClick={handleBoxClick}
          className="cursor-pointer transition-transform duration-100 ease-in-out select-none"
          style={{
            transform: `scale(${1 + clicks * 0.3}) rotate(${
              clicks === 0 ? 0 : clicks % 2 === 0 ? 15 : -15
            }deg)`,
          }}
        >
          <span className="text-9xl">🎁</span>
        </div>
      )}

      {/* STATE 4: The Reveal */}
      {clicks >= 4 && (
        <div className="flex flex-col items-center animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center uppercase tracking-widest text-black">
            HAPPY BIRTHDAY, {payload.n}
          </h1>
          
          <div className="text-[120px] leading-none mb-8 animate-bounce">
            {payload.e}
          </div>

          {/* The Envelope */}
          {!envelopeOpen ? (
            <div 
              className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform"
              onClick={() => setEnvelopeOpen(true)}
            >
              <span className="text-8xl">✉️</span>
              {/* Terrible font override just for this text */}
              <p 
                className="mt-2 text-xl font-bold animate-pulse text-black" 
                style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}
              >
                (press to open)
              </p>
            </div>
          ) : (
            /* The Letter Sliding Up */
            <div className="mt-4 p-8 border-4 border-black bg-[#ffffe0] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] animate-in slide-in-from-bottom-10 fade-in duration-700 max-w-md w-full text-center relative">
               <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">📌</span>
              <p 
                className="text-2xl text-black"
                style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}
              >
                {payload.m}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}