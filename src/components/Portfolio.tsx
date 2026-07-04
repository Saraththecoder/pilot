"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Image as ImageIcon } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    { id: 1, type: "image", span: "col-span-1 sm:col-span-2 md:col-span-2 row-span-1 sm:row-span-2", image: "/images/portfolio_1_1783188665088.png" },
    { id: 2, type: "image", span: "col-span-1 row-span-1", image: "/images/portfolio_2_1783188683301.png" },
    { id: 3, type: "image", span: "col-span-1 row-span-1", image: "/images/portfolio_3_1783188694749.png" },
    { id: 4, type: "image", span: "col-span-1 sm:row-span-2", image: "/images/portfolio_4_1783188705138.png" },
    { id: 5, type: "image", span: "col-span-1 sm:col-span-2 md:col-span-2 row-span-1", image: "/images/portfolio_5_1783188724885.png" },
  ];

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
              Our <span className="text-[var(--color-brand-orange)]">Portfolio</span>
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
                <img src={item.image} alt={`Portfolio ${item.id}`} className="w-full h-full object-cover" />
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
                <span className="text-white font-oswald tracking-widest uppercase border border-white px-4 py-2 rounded-full">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal (Image) */}
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
              <img 
                src={galleryItems.find(item => item.id === selectedMedia)?.image} 
                alt={`Portfolio ${selectedMedia}`} 
                className="w-full h-full object-contain"
              />
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
              {/* Replace src with actual YouTube embed URL when ready */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 bg-[var(--color-brand-card)] border border-gray-800">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="font-inter text-xl uppercase tracking-widest">Showreel Placeholder</p>
                <p className="text-sm mt-2 font-inter text-gray-600">(Embed YouTube iframe here)</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
