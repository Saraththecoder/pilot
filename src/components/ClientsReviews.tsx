"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote, Building2, Clapperboard, Landmark, Factory, Home, TreePine } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);


const clients = [
  "Real Estate Firms",
  "Film Productions",
  "Construction Companies",
  "Government Bodies",
  "Industrial Plants",
  "Event Managers",
  "Agriculture Sector",
  "Tourism Boards",
];

export default function ClientsReviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Client badges pop in
      if (clientsRef.current) {
        gsap.fromTo(
          ".client-badge",
          { opacity: 0, scale: 0.5, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: {
              amount: 0.8,
              from: "random",
            },
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: clientsRef.current,
              start: "top 85%",
            },
          }
        );
      }


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="clients-reviews"
      className="py-24 bg-[#050505] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[600px] h-[150vw] md:h-[600px] spotlight-glow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
            Companies We've <span className="text-[var(--color-brand-orange)]">Worked With</span>
          </h2>
          <p className="font-inter text-gray-400 max-w-2xl mx-auto">
            Trusted by top brands and businesses across multiple industries.
          </p>
        </div>

        {/* Client Industries Badges */}
        <div ref={clientsRef} className="mb-20">
          <h3 className="font-inter text-sm uppercase tracking-[0.3em] text-gray-500 text-center mb-8">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="client-badge bg-[var(--color-brand-card)] border border-gray-800 rounded-full px-6 py-3 font-inter text-sm text-gray-300 hover:border-[var(--color-brand-orange)] hover:text-white hover:shadow-[0_0_20px_rgba(245,133,31,0.15)] hover:scale-105 transition-all duration-300 cursor-default gpu-accelerated"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Marquee of Client Logos */}
        <div className="relative w-full overflow-hidden flex bg-[#111111]/50 py-12 border-y border-gray-800/50 mt-12 rounded-2xl gpu-accelerated">
          {/* Fading edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none rounded-l-2xl"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none rounded-r-2xl"></div>

          <div className="flex animate-marquee whitespace-nowrap items-center hover-target">
            {/* Duplicated block for seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 md:gap-16 px-4 md:px-8 items-center">
                {/* Client Logos */}
                {['/client1.png', '/client2.png', '/client3.png', '/client4.png', '/client5.png'].map((src, idx) => (
                  <div key={idx} className="w-32 h-16 md:w-48 md:h-24 bg-[#111111] rounded-lg flex items-center justify-center border border-gray-800 shrink-0 overflow-hidden">
                    <img src={src} alt={`Client ${idx + 1}`} className="w-full h-full object-contain p-4 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
