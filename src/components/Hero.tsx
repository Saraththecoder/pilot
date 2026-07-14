"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isPopupClosed, setIsPopupClosed] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    const ctxGSAP = gsap.context(() => {
      // Hide the text initially so it doesn't show during splash screen
      gsap.set(".intro-sub", { opacity: 0, y: 20 });
      gsap.set(".intro-head", { opacity: 0, y: 30 });
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set('.hero-anim', { opacity: 0, y: 50, scale: 0.95 });

      // Create a timeline that starts after the splash screen finishes (approx 3.8s)
      const tl = gsap.timeline({ delay: 3.8 });

      tl.to(".intro-sub", { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
        .to(".intro-head", { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=0.8")
        // Animate the pop-up card in slightly after the text appears
        .to(overlayRef.current, { opacity: 1, duration: 0.5 }, "+=0.2")
        .to('.hero-anim', { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, "<");
    }, heroRef);

    return () => {
      ctxGSAP.revert();
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-20" ref={heroRef}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/drone_cinematic.png"
          alt="Cinematic Drone Shot"
          fill
          className="object-cover opacity-50"
          priority
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
      </div>

      <div id="hero-container" className="relative z-20 flex-1 flex flex-col justify-center items-center w-full px-4 py-12">
        {/* Intro Section Overlaying the Animation */}
        <div className="intro-text-section flex flex-col items-center justify-center text-center mb-12">
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

        {/* Overlay Content / Pop-up Card */}
        {!isPopupClosed && (
          <div className="w-full max-w-4xl flex justify-center">
            <div 
              ref={overlayRef}
              className="hero-overlay-content w-full"
            >
              {/* Pop-up Card */}
              <div className="hero-anim bg-black/80 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl shadow-[0_0_50px_rgba(245,133,31,0.2)] flex flex-col items-center justify-center text-center w-full relative overflow-hidden">
                
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
                <div className="relative w-20 h-20 md:w-28 md:h-28 mb-6 drop-shadow-2xl">
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
                <h1 className="font-oswald text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-2 drop-shadow-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
                  <span className="text-gradient-silver mr-3 md:mr-4">Sky</span>
                  <span className="text-[var(--color-brand-orange)]">Pilot</span>
                </h1>
                
                {/* Tagline */}
                <p className="font-inter text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.5em] text-gray-300 mb-8 max-w-2xl px-4" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
                  Aerial Cinematography
                </p>
                
                {/* Primary CTA */}
                <a
                  href="https://wa.me/919391705935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-target bg-[var(--color-brand-orange)] text-[var(--color-brand-dark)] px-8 py-3 rounded-full font-oswald text-lg md:text-xl tracking-wide font-bold hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(245,133,31,0.4)] hover:shadow-[0_0_30px_rgba(245,133,31,0.6)] mb-6"
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
      </div>
    </section>
  );
}
