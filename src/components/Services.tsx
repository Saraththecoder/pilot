"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "DRONE VIDEOGRAPHY",
      description: "Cinematic aerial videos for events, promos, real estate & more.",
      image: "/images/service_videography_1784385709104.png",
    },
    {
      title: "AERIAL PHOTOGRAPHY",
      description: "High-resolution aerial photography for stunning visual storytelling.",
      image: "/images/service_photography_1784385720914.png",
    },
    {
      title: "DRONE SURVEY",
      description: "Topographic mapping, volumetric analysis & land surveys.",
      image: "/images/service_survey_1784385731660.png",
    },
    {
      title: "INDUSTRIAL INSPECTION",
      description: "Safe, efficient inspections of solar, windmills, factories & more.",
      image: "/images/service_inspection_1784385743368.png",
    }
  ];

  return (
    <section id="services" className="py-24 bg-[var(--color-brand-dark)] relative overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
          
          {/* Left Side: Title */}
          <div className="w-full lg:w-1/4 pt-4">
            <p className="font-inter text-[var(--color-brand-orange)] tracking-[0.2em] text-xs font-bold uppercase mb-2">
              WHAT WE DO
            </p>
            <h2 className="font-oswald text-4xl lg:text-5xl uppercase font-bold text-white mb-6">
              OUR SERVICES
            </h2>
            <p className="font-inter text-gray-400 text-sm leading-relaxed mb-8">
              End-to-end drone solutions combining creativity, technology & precision.
            </p>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center border border-[var(--color-brand-orange)] text-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange)] hover:text-[var(--color-brand-dark)] px-6 py-3 rounded font-inter text-xs font-bold tracking-widest transition-colors w-max"
            >
              VIEW ALL SERVICES
            </Link>
          </div>

          {/* Right Side: Cards */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="service-card group cursor-pointer border border-white/5 bg-[#111111] rounded-lg overflow-hidden flex flex-col transition-colors duration-300 hover:border-white/20">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-oswald text-white text-lg font-bold uppercase tracking-wide mb-3">
                      {service.title}
                    </h3>
                    <p className="font-inter text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <div className="w-6 h-0.5 bg-[var(--color-brand-orange)]"></div>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[var(--color-brand-orange)] transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
