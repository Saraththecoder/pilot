"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Grid, X } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-item", {
        scale: 0.95,
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, [activeFilter]); // re-run animation when filter changes

  const filters = ["ALL", "CINEMATOGRAPHY", "SURVEY", "INDUSTRY", "REAL ESTATE"];

  const projects = [
    { title: "River Valley", category: "CINEMATOGRAPHY", image: "/images/portfolio_1_1784385776657.png", video: "/videos/drone1.MP4" },
    { title: "Solar Field", category: "INDUSTRY", image: "/images/service_inspection_1784385743368.png", video: "/videos/drone2.MP4" },
    { title: "Construction", category: "SURVEY", image: "/images/portfolio_2_1784385789292.png", video: "/videos/drone3.MP4" },
    { title: "City Skyline", category: "REAL ESTATE", image: "/images/portfolio_3_1784385800215.png", video: "/videos/drone4.MP4" },
  ];

  const filteredProjects = activeFilter === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <section className="py-24 bg-[var(--color-brand-dark)]" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Filters */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
            <div>
              <p className="font-inter text-[var(--color-brand-orange)] tracking-[0.2em] text-xs font-bold uppercase mb-2">
                OUR WORK
              </p>
              <h2 className="font-oswald text-4xl lg:text-5xl uppercase font-bold text-white">
                PROJECTS THAT SPEAK
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 lg:gap-4">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-xs font-inter font-bold tracking-widest rounded transition-colors ${
                    activeFilter === filter
                      ? "bg-[var(--color-brand-orange)] text-[var(--color-brand-dark)]"
                      : "text-gray-400 hover:text-white border border-transparent hover:border-gray-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredProjects.map((project, idx) => (
              <div 
                key={idx} 
                className="portfolio-item group relative rounded-xl overflow-hidden aspect-video lg:aspect-square bg-[#111111] cursor-pointer border border-white/5"
                onClick={() => setPlayingVideo(project.video)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:border-[var(--color-brand-orange)] group-hover:text-[var(--color-brand-orange)] transition-colors">
                    <Play className="w-5 h-5 text-white group-hover:text-[var(--color-brand-orange)] ml-1 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 border border-[var(--color-brand-orange)] text-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange)] hover:text-[var(--color-brand-dark)] px-8 py-3 rounded font-inter text-xs font-bold tracking-widest transition-colors"
            >
              VIEW FULL PORTFOLIO
              <Grid className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Video Modal */}
      {playingVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setPlayingVideo(null)}
        >
          <div 
            className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setPlayingVideo(null)} 
              className="absolute top-4 right-4 text-white z-10 bg-black/50 p-2 rounded-full hover:bg-[var(--color-brand-orange)] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <video 
              src={playingVideo} 
              controls 
              autoPlay 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
