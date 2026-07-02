"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFrameSequence from "./ScrollFrameSequence";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const overlayRef = useRef<HTMLDivElement>(null);
  
  // Format frame index to zero-padded string, e.g., '001'
  const getFramePath = useCallback((index: number) => {
    // ezgif-frame-001.jpg ... ezgif-frame-157.jpg
    const paddedIndex = index.toString().padStart(3, "0");
    return `/frames/ezgif-frame-${paddedIndex}.jpg`;
  }, []);

  useEffect(() => {
    if (!overlayRef.current) return;

    // We animate the overlay opacity based on the scroll progress of the hero section.
    // The ScrollFrameSequence component pins its container for '300vh'.
    
    const ctxGSAP = gsap.context(() => {
      // Animate overlay content to fade in at the last 20% of the scrub.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-container",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        }
      });

      // Keep it hidden for the first 80% of the scroll, then fade in
      tl.to(overlayRef.current, { opacity: 0, duration: 0.8 })
        .to(overlayRef.current, { opacity: 1, duration: 0.2 });
    });

    return () => {
      ctxGSAP.revert();
    };
  }, []);

  return (
    <section id="home" className="relative w-full bg-[var(--color-brand-dark)]">
      {/* 
        This div wraps the frame sequence. We give it an ID so the ScrollTrigger 
        in this component can sync with the scroll distance of the pinned canvas.
      */}
      <div id="hero-container">
        <ScrollFrameSequence 
          frameCount={157} 
          frameBasePath={getFramePath}
          scrollHeight="300vh"
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
            <div 
              ref={overlayRef}
              className="flex flex-col items-center justify-center text-center opacity-0 pointer-events-auto"
            >
              {/* Spotlight Glow behind content */}
              <div className="absolute inset-0 spotlight-glow opacity-50 z-[-1]" />
              
              {/* Logo Mark */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 drop-shadow-2xl">
                <Image 
                  src="/logo.png" 
                  alt="SkyPilot Logo Mark" 
                  fill 
                  className="object-contain"
                  onError={(e) => {
                    // Fallback if logo not found
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              
              {/* Wordmark */}
              <h1 className="font-oswald text-6xl md:text-8xl font-bold uppercase tracking-wider mb-2 drop-shadow-lg">
                <span className="text-gradient-silver">Sky</span>
                <span className="text-[var(--color-brand-orange)]">Pilot</span>
              </h1>
              
              {/* Tagline */}
              <p className="font-inter text-sm md:text-xl uppercase tracking-[0.4em] md:tracking-[0.6em] text-gray-300 mb-8 max-w-2xl px-4">
                Aerial Cinematography
              </p>
              
              {/* CTA */}
              <a
                href="https://wa.me/919391705935"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-brand-orange)] text-[var(--color-brand-dark)] px-8 py-4 rounded-full font-oswald text-xl tracking-wide font-bold hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(245,133,31,0.4)] hover:shadow-[0_0_30px_rgba(245,133,31,0.6)]"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </ScrollFrameSequence>
      </div>
    </section>
  );
}
