"use client";

import { Rocket, Camera, BarChart3, Award, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const milestones = [
    {
      year: "2016",
      title: "Started my journey as a drone enthusiast",
      icon: <Rocket className="w-6 h-6" strokeWidth={1.5} />,
    },
    {
      year: "2018",
      title: "Turned passion into profession",
      icon: <Camera className="w-6 h-6" strokeWidth={1.5} />,
    },
    {
      year: "2020",
      title: "Expanded into industrial projects & surveys",
      icon: <BarChart3 className="w-6 h-6" strokeWidth={1.5} />,
    },
    {
      year: "2023",
      title: "Trusted by 200+ clients across industries",
      icon: <Award className="w-6 h-6" strokeWidth={1.5} />,
    },
    {
      year: "2026",
      title: "Continuing to elevate perspectives, create impact",
      icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-24 bg-[var(--color-brand-dark)]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="font-oswald text-3xl md:text-4xl uppercase font-bold text-white tracking-widest flex items-center justify-center gap-6">
            <span className="h-px bg-gray-700 flex-1 hidden md:block"></span>
            8+ YEARS OF EXPERIENCE
            <span className="h-px bg-gray-700 flex-1 hidden md:block"></span>
          </h2>
        </div>

        <div className="relative">
          {/* Main horizontal line (desktop) */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand-orange)] to-transparent opacity-50" />

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group timeline-item">
                
                {/* Icon Container */}
                <div className="w-20 h-20 bg-[#111111] border-2 border-gray-800 rounded-full flex items-center justify-center text-[var(--color-brand-orange)] mb-6 group-hover:border-[var(--color-brand-orange)] group-hover:bg-[var(--color-brand-orange)]/10 transition-colors duration-300 shadow-[0_0_15px_rgba(245,133,31,0.1)]">
                  {milestone.icon}
                </div>
                
                {/* Connecting vertical line (mobile only) */}
                {idx !== milestones.length - 1 && (
                  <div className="block md:hidden h-12 w-px bg-[var(--color-brand-orange)] opacity-30 my-2" />
                )}

                {/* Content */}
                <h3 className="font-oswald text-2xl font-bold text-[var(--color-brand-orange)] mb-3">
                  {milestone.year}
                </h3>
                <p className="font-inter text-gray-300 text-sm leading-relaxed max-w-[200px]">
                  {milestone.title}
                </p>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
