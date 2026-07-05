"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFrameSequence from "./ScrollFrameSequence";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isPopupClosed, setIsPopupClosed] = useState(false);
  
  // Format frame index to zero-padded string, e.g., '001'
  const getFramePath = useCallback((index: number) => {
    // ezgif-frame-001.jpg ... ezgif-frame-280.jpg
    const paddedIndex = index.toString().padStart(3, "0");
    return `/frames/ezgif-frame-${paddedIndex}.jpg`;
  }, []);

  useEffect(() => {
    if (!overlayRef.current) return;

    // We animate the overlay opacity based on the scroll progress of the hero section.
    // The ScrollFrameSequence component pins its container for '300vh'.
    
    const ctxGSAP = gsap.context(() => {
      // Hide the text initially so it doesn't show during splash screen
      gsap.set(".intro-sub", { opacity: 0, y: 20 });
      gsap.set(".intro-head", { opacity: 0, y: 30 });
      
      // Animate the intro text after the splash screen finishes (approx 3.8s)
      gsap.to(".intro-sub", { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 3.8 });
      gsap.to(".intro-head", { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 4.0 });

      // Initially hide the overlay and the pop-up card
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set('.hero-anim', { opacity: 0, y: 100, scale: 0.95 });

      // Animate the pop-up overlay precisely during the final 20% of the scroll sequence
      const popupTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-container",
          start: "80% top", // Starts when we have scrolled 80% of the container
          end: "bottom top", // Ends when the container is fully scrolled out
          scrub: 0.5, // Add a tiny bit of smoothing to the reverse/forward
        }
      });

      popupTl.to(overlayRef.current, { opacity: 1, duration: 0.1 })
             .to('.hero-anim', { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" }, "<");
    });

    return () => {
      ctxGSAP.revert();
    };
  }, []);

  return (
    <section id="home" className="relative w-full bg-black flex flex-col">
      <div id="hero-container" className="relative">
        {/* Intro Section Overlaying the Animation */}
        <div className="intro-text-section absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center px-4 z-[30] pointer-events-none bg-black/60">
          <p className="intro-sub font-inter text-[var(--color-brand-orange)] tracking-[0.3em] md:tracking-[0.4em] text-xs md:text-sm uppercase mb-6 font-semibold">
            Introducing SkyPilot
          </p>
          <h1 className="intro-head font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl mx-auto leading-tight md:leading-[1.1] tracking-tight mb-2 drop-shadow-lg">
            Elevating Perspectives with Drone Shoot Services
          </h1>
          <h2 className="intro-head font-oswald text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-brand-orange)] tracking-tight drop-shadow-md">
            Realestate Centric
          </h2>
        </div>
        <ScrollFrameSequence 
          frameCount={280} 
          frameBasePath={getFramePath}
          scrollHeight="400vh"
        >
          {/* Overlay Content */}
          {!isPopupClosed && (
            <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center p-4">
              <div 
                ref={overlayRef}
                className="hero-overlay-content opacity-0 pointer-events-auto w-full max-w-4xl"
              >
                {/* Pop-up Card */}
                <div className="hero-anim bg-black border border-white/20 p-8 md:p-16 rounded-3xl shadow-[0_0_50px_rgba(245,133,31,0.2)] flex flex-col items-center justify-center text-center w-full relative overflow-hidden">
                  
                  {/* Close Button */}
                  <button 
                    onClick={() => setIsPopupClosed(true)}
                    className="absolute top-6 right-6 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-all duration-300 z-50 cursor-pointer"
                    aria-label="Close pop-up"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Spotlight Glow inside card */}
                <div className="absolute inset-0 spotlight-glow opacity-50 z-[-1]" />
                
                {/* Logo Mark */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 drop-shadow-2xl">
                  <Image 
                    src="/logo.png" 
                    alt="SkyPilot Logo Mark" 
                    fill 
                    className="object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Wordmark */}
                <h1 className="font-oswald text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider mb-2 drop-shadow-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
                  <span className="text-gradient-silver mr-3 md:mr-4">Sky</span>
                  <span className="text-[var(--color-brand-orange)]">Pilot</span>
                </h1>
                
                {/* Tagline */}
                <p className="font-inter text-xs md:text-lg uppercase tracking-[0.3em] md:tracking-[0.5em] text-gray-300 mb-8 max-w-2xl px-4" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
                  Aerial Cinematography
                </p>
                
                {/* Primary CTA */}
                <a
                  href="https://wa.me/919391705935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-target bg-[var(--color-brand-orange)] text-[var(--color-brand-dark)] px-8 py-4 rounded-full font-oswald text-lg md:text-xl tracking-wide font-bold hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(245,133,31,0.4)] hover:shadow-[0_0_30px_rgba(245,133,31,0.6)] mb-6"
                >
                  Get a Free Quote
                </a>

                {/* Secondary CTAs Row */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full justify-center">
                  <Link
                    href="/services"
                    className="hover-target group flex items-center justify-center gap-2 border-2 border-white/20 text-white px-6 py-3 rounded-full font-oswald text-xs md:text-sm tracking-widest uppercase font-bold hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
                  >
                    Explore Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="hover-target group flex items-center justify-center gap-2 border-2 border-white/20 text-white px-6 py-3 rounded-full font-oswald text-xs md:text-sm tracking-widest uppercase font-bold hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          )}
        </ScrollFrameSequence>
      </div>
    </section>
  );
}
