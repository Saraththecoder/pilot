"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Image as ImageIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      if (gridRef.current) {
        const items = gsap.utils.toArray('.portfolio-item');
        // Dramatic 3D entrance animation
        gsap.fromTo(
          items,
          { opacity: 0, scale: 0.7, y: 80, rotateX: 30, rotateY: () => gsap.utils.random(-20, 20) },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 1,
            stagger: 0.12,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
          }
        );

        // Parallax effect on scroll
        items.forEach((item: any, i) => {
          gsap.to(item, {
            yPercent: (i % 2 === 0) ? -10 : 10,
            ease: "none",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          });
        });

        // Add 3D tilt interaction on hover for each portfolio item
        items.forEach((item: any) => {
          const handleMouseMove = (e: MouseEvent) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;
            
            gsap.to(item, {
              rotateX,
              rotateY,
              scale: 1.03,
              duration: 0.3,
              ease: "power2.out",
              transformPerspective: 800,
            });
          };

          const handleMouseLeave = () => {
            gsap.to(item, {
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
            });
          };

          item.addEventListener('mousemove', handleMouseMove);
          item.addEventListener('mouseleave', handleMouseLeave);
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Gallery data
  const galleryItems = [
    { id: 1, type: "video", span: "col-span-1 sm:col-span-2 md:col-span-2 row-span-1 sm:row-span-2", src: "/videos/drone1.MP4" },
    { id: 2, type: "video", span: "col-span-1 row-span-1", src: "/videos/drone2.MP4" },
    { id: 3, type: "video", span: "col-span-1 row-span-1", src: "/videos/drone3.MP4" },
    { id: 4, type: "video", span: "col-span-1 sm:row-span-2", src: "/videos/drone4.MP4" },
    { id: 5, type: "video", span: "col-span-1 sm:col-span-2 md:col-span-2 row-span-1", src: "/videos/drone5.MP4" },
    { id: 6, type: "video", span: "col-span-1 row-span-1", src: "/videos/drone6.MP4" },
    { id: 7, type: "video", span: "col-span-1 row-span-1", src: "/videos/drone7.MP4" },
    { id: 8, type: "video", span: "col-span-1 sm:col-span-2 md:col-span-2 row-span-1", src: "/videos/drone8.MP4" },
    { id: 9, type: "video", span: "col-span-1 row-span-1", src: "/videos/drone9.MP4" },
    { id: 10, type: "video", span: "col-span-1 row-span-1", src: "/videos/drone10.MP4" },
    { id: 11, type: "video", span: "col-span-1 sm:col-span-2 md:col-span-4 row-span-1 sm:row-span-2", src: "/videos/drone11.MP4" },
  ];

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
              Our <span className="text-[var(--color-brand-orange)]">Gallery</span>
            </h2>
            <p className="font-inter text-gray-400 max-w-lg">
              A glimpse into our recent aerial projects across real estate, industrial inspections, and cinematic captures.
            </p>
          </div>
          
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="flex items-center gap-3 border border-[var(--color-brand-orange)] text-[var(--color-brand-orange)] px-6 py-3 rounded-full font-oswald uppercase tracking-widest font-bold hover:bg-[var(--color-brand-orange)] hover:text-white transition-all group shrink-0"
          >
            <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
            Watch Showreel
          </button>
        </div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] sm:auto-rows-[200px]" style={{ perspective: "1000px" }}>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item.id)}
              className={`portfolio-item ${item.span} bg-[var(--color-brand-card)] border border-gray-800 rounded-xl overflow-hidden relative group cursor-pointer gpu-accelerated`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 z-10">
                {item.type === "image" ? (
                  <img src={item.src} alt={`Portfolio ${item.id}`} className="w-full h-full object-cover" />
                ) : (
                  <video 
                    src={`${item.src}#t=0.001`} 
                    className="w-full h-full object-cover" 
                    preload="metadata" 
                    muted 
                    playsInline 
                  />
                )}
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
                <span className="text-white font-oswald tracking-widest uppercase border border-white px-4 py-2 rounded-full flex items-center gap-2">
                  {item.type === "video" ? <><Play className="w-4 h-4" /> Play Video</> : <><ImageIcon className="w-4 h-4" /> View Image</>}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal (Media) */}
      <AnimatePresence>
        {selectedMedia !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 text-white hover:text-[var(--color-brand-orange)] transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full max-w-5xl aspect-video bg-[var(--color-brand-card)] border border-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
              {galleryItems.find(item => item.id === selectedMedia)?.type === "image" ? (
                <img 
                  src={galleryItems.find(item => item.id === selectedMedia)?.src} 
                  alt={`Portfolio ${selectedMedia}`} 
                  className="w-full h-full object-contain"
                />
              ) : (
                <video 
                  src={galleryItems.find(item => item.id === selectedMedia)?.src} 
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Reel Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-[var(--color-brand-orange)] transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/R_InO9bxuwU?si=5qJBjEDGNUX0Ylu-&autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
