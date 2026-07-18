"use client";

import { Building2, Tractor, Construction, Mountain, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TrustedLeaders() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".leader-item", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const leaders = [
    { name: "POWERGRID", icon: <Building2 className="w-6 h-6 shrink-0" /> },
    { name: "VST TILLERS TRACTORS", icon: <Tractor className="w-6 h-6 shrink-0" /> },
    { name: "PRIYA CEMENT", icon: <Construction className="w-6 h-6 shrink-0" /> },
    { name: "ArcelorMittal", icon: <Mountain className="w-6 h-6 shrink-0" /> },
    { name: "AMIX CONCRETE", icon: <Building2 className="w-6 h-6 shrink-0" /> },
  ];

  return (
    <section className="py-24 bg-[var(--color-brand-dark)]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="font-oswald text-xl uppercase font-bold text-white tracking-widest">
            TRUSTED BY <span className="text-[var(--color-brand-orange)]">INDUSTRY LEADERS</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {leaders.map((leader, idx) => (
            <div 
              key={idx}
              className="leader-item flex items-center gap-3 bg-[#111111] border border-white/5 rounded-lg px-6 py-4 md:px-8 md:py-6 hover:border-[var(--color-brand-orange)]/50 transition-colors cursor-pointer group"
            >
              <div className="text-gray-500 group-hover:text-[var(--color-brand-orange)] transition-colors">
                {leader.icon}
              </div>
              <span className="font-oswald text-lg font-bold tracking-wider text-gray-300 group-hover:text-white transition-colors uppercase">
                {leader.name}
              </span>
            </div>
          ))}

          {/* & More Box */}
          <div className="leader-item flex items-center justify-center bg-[#111111] border border-white/5 rounded-lg px-8 py-6 hover:border-[var(--color-brand-orange)]/50 transition-colors cursor-pointer group">
            <span className="font-oswald text-lg font-bold tracking-wider text-[var(--color-brand-orange)] uppercase">
              & MORE
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
