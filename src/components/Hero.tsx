"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFrameSequence from "./ScrollFrameSequence";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { ArrowRight, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const overlayRef = useRef<HTMLDivElement>(null);
  
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

      // Animate overlay content to fade in at the very end of the scroll (last 20%)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-container",
          start: "top top",
          end: "bottom bottom",
          scrub: true, // This allows the animation to automatically reverse when scrolling back up!
        }
      });
      
      // Delay animation until 80% scroll
      tl.addLabel("startOverlay", 0.8);
      
      // Initially hide the overlay and its children
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set('.hero-anim', { opacity: 0, y: 50 });

      // Animate them in based on scrub from 80% to 100%
      tl.to(overlayRef.current, { opacity: 1, duration: 0.02 }, "startOverlay")
        .to('.hero-anim', { opacity: 1, y: 0, stagger: 0.04, duration: 0.18, ease: "power2.out" }, "startOverlay");
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
          <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
            <div 
              ref={overlayRef}
              className="hero-overlay-content flex flex-col items-center justify-center text-center opacity-0 pointer-events-auto"
            >
              {/* Spotlight Glow behind content */}
              <div className="absolute inset-0 spotlight-glow opacity-50 z-[-1]" />
              
              {/* Logo Mark */}
              <div className="hero-anim relative w-32 h-32 md:w-40 md:h-40 mb-6 drop-shadow-2xl">
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
              <h1 className="hero-anim hero-heading font-oswald text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider mb-2 drop-shadow-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
                <span className="text-gradient-silver mr-4">Sky</span>
                <span className="text-[var(--color-brand-orange)]">Pilot</span>
              </h1>
              
              {/* Tagline */}
              <p className="hero-anim hero-tagline font-inter text-sm md:text-xl uppercase tracking-[0.4em] md:tracking-[0.6em] text-gray-300 mb-8 max-w-2xl px-4" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
                Aerial Cinematography
              </p>
              
              {/* Primary CTA */}
              <a
                href="https://wa.me/919391705935"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-anim hero-cta hover-target bg-[var(--color-brand-orange)] text-[var(--color-brand-dark)] px-8 py-4 rounded-full font-oswald text-xl tracking-wide font-bold hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(245,133,31,0.4)] hover:shadow-[0_0_30px_rgba(245,133,31,0.6)] mb-5"
              >
                Get a Free Quote
              </a>

              {/* Secondary CTAs Row */}
              <div className="hero-anim hero-cta flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <Link
                  href="/services"
                  className="hover-target group flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-full font-oswald text-sm tracking-widest uppercase font-bold hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] hover:shadow-[0_0_20px_rgba(245,133,31,0.2)] transition-all duration-300 backdrop-blur-sm bg-white/5"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="hover-target group flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-full font-oswald text-sm tracking-widest uppercase font-bold hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] hover:shadow-[0_0_20px_rgba(245,133,31,0.2)] transition-all duration-300 backdrop-blur-sm bg-white/5"
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </ScrollFrameSequence>
      </div>
    </section>
  );
}
