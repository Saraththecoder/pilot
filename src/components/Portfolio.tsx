"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Image as ImageIcon } from "lucide-react";

export default function Portfolio() {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Placeholder gallery data
  const galleryItems = [
    { id: 1, type: "image", span: "col-span-1 md:col-span-2 row-span-2" },
    { id: 2, type: "image", span: "col-span-1 row-span-1" },
    { id: 3, type: "image", span: "col-span-1 row-span-1" },
    { id: 4, type: "image", span: "col-span-1 row-span-2" },
    { id: 5, type: "image", span: "col-span-1 md:col-span-2 row-span-1" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4"
            >
              Our <span className="text-[var(--color-brand-orange)]">Portfolio</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-inter text-gray-400 max-w-lg"
            >
              A glimpse into our recent aerial projects across real estate, industrial inspections, and cinematic captures.
            </motion.p>
          </div>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={() => setIsVideoModalOpen(true)}
            className="flex items-center gap-3 border border-[var(--color-brand-orange)] text-[var(--color-brand-orange)] px-6 py-3 rounded-full font-oswald uppercase tracking-widest font-bold hover:bg-[var(--color-brand-orange)] hover:text-white transition-all group shrink-0"
          >
            <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
            Watch Showreel
          </motion.button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedMedia(item.id)}
              className={`${item.span} bg-[var(--color-brand-card)] border border-gray-800 rounded-xl overflow-hidden relative group cursor-pointer`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 group-hover:text-[var(--color-brand-orange)] transition-colors z-10">
                <ImageIcon className="w-8 h-8 mb-2" />
                <span className="font-inter text-sm uppercase tracking-widest">Placeholder</span>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
                <span className="text-white font-oswald tracking-widest uppercase border border-white px-4 py-2 rounded-full">
                  View Image
                </span>
              </div>
            </motion.div>
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
            <div className="relative w-full max-w-5xl aspect-video bg-[var(--color-brand-card)] border border-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="font-inter text-xl uppercase tracking-widest">Image Placeholder {selectedMedia}</p>
                <p className="text-sm mt-2 font-inter text-gray-600">(Replace with actual project image)</p>
              </div>
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
