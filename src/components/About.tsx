"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Target, Zap, Award, Smile, CheckCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SplitType from "split-type";

interface ModalContent {
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const [activeModal, setActiveModal] = useState<ModalContent | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Text Split Animation
      if (headerRef.current) {
        const text = new SplitType(headerRef.current, { types: 'chars,words' });

        gsap.fromTo(
          text.chars,
          { opacity: 0, y: 50, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.05,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Stat Badge Pop-in
      gsap.fromTo(
        ".stat-badge",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      // 2. 3D Card Flip on Scroll — dramatic flying entrance
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 120, rotateY: 60, rotateX: 25, scale: 0.7 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            duration: 1.4,
            stagger: 0.35,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 3. Core Values Chips Staggered Pop — flying from random directions
      if (chipsRef.current) {
        gsap.fromTo(
          ".chip-item",
          { opacity: 0, scale: 0.3, y: 40, rotation: () => gsap.utils.random(-30, 30) },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 0.8,
            stagger: {
              amount: 1,
              from: "random"
            },
            ease: "back.out(2.5)",
            scrollTrigger: {
              trigger: chipsRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const visionContent: ModalContent = {
    title: "Our Vision",
    icon: <Target className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    description: "To become India's most trusted drone solutions company by delivering innovative, safe, and high-quality aerial services.",
    details: [
      "Pioneering cutting-edge aerial technology across India",
      "Setting the benchmark for safety and precision in drone operations",
      "Building long-term partnerships through consistently exceeding expectations",
      "Expanding our reach to serve clients in every major city and industry",
      "Investing in R&D for next-generation drone capabilities",
    ],
  };

  const missionContent: ModalContent = {
    title: "Our Mission",
    icon: <Zap className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    description: "To provide professional drone photography, videography, surveying, inspections, and mapping services using advanced technology while exceeding client expectations.",
    details: [
      "Deliver world-class aerial cinematography for films, ads, and events",
      "Provide accurate survey-grade mapping and 3D modeling solutions",
      "Ensure 100% safety compliance on every flight operation",
      "Offer affordable and accessible drone services for all industries",
      "Continuously train our pilots on the latest drone platforms and sensors",
    ],
  };

  const coreValues = [
    { name: "Professionalism", icon: <Award className="w-5 h-5" /> },
    { name: "Safety First", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Innovation", icon: <Zap className="w-5 h-5" /> },
    { name: "Quality", icon: <CheckCircle className="w-5 h-5" /> },
    { name: "Customer Satisfaction", icon: <Smile className="w-5 h-5" /> },
    { name: "Integrity", icon: <Target className="w-5 h-5" /> },
  ];

  return (
    <>
      <section id="about" className="py-24 bg-[var(--color-brand-dark)] relative overflow-hidden">
        <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-24 perspective-1000">
            {/* Header & Stat */}
            <div className="text-center">
              <h2 ref={headerRef} className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 120%, 0% 120%)' }}>
                <span className="text-gradient-silver mr-3">About</span>
                SkyPilot
              </h2>
              <div className="stat-badge inline-block bg-[var(--color-brand-card)] border border-gray-800 rounded-full px-8 py-3 mt-4">
                <span className="font-oswald text-2xl md:text-3xl font-bold text-[var(--color-brand-orange)] mr-2">
                  5+
                </span>
                <span className="font-inter uppercase tracking-widest text-sm md:text-base text-gray-300">
                  Years of Experience
                </span>
              </div>
            </div>

            {/* Vision & Mission — 3D Flip Cards */}
            <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
              {/* Vision Card */}
              <div
                className="hover-target flip-card h-[320px] sm:h-[300px] gpu-accelerated cursor-pointer"
                onClick={() => setActiveModal(visionContent)}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front bg-[var(--color-brand-card)] p-10 border border-gray-800 flex flex-col items-center justify-center text-center">
                    <Target className="w-12 h-12 text-[var(--color-brand-orange)] mb-4" />
                    <h3 className="font-oswald text-2xl uppercase tracking-wider mb-3">Our Vision</h3>
                    <p className="font-inter text-sm text-gray-500 uppercase tracking-widest">Click to explore</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back bg-gradient-to-br from-[var(--color-brand-card)] to-[#1a1a1a] p-8 border border-[var(--color-brand-orange)]/30 flex flex-col justify-center">
                    <h3 className="font-oswald text-xl uppercase tracking-wider mb-4 flex items-center gap-3">
                      <Target className="w-6 h-6 text-[var(--color-brand-orange)]" />
                      Our Vision
                    </h3>
                    <p className="font-inter text-gray-400 leading-relaxed text-sm">
                      {visionContent.description}
                    </p>
                    <span className="mt-4 inline-block font-inter text-xs text-[var(--color-brand-orange)] uppercase tracking-widest">
                      Tap for details →
                    </span>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div
                className="hover-target flip-card h-[320px] sm:h-[300px] gpu-accelerated cursor-pointer"
                onClick={() => setActiveModal(missionContent)}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front bg-[var(--color-brand-card)] p-10 border border-gray-800 flex flex-col items-center justify-center text-center">
                    <Zap className="w-12 h-12 text-[var(--color-brand-orange)] mb-4" />
                    <h3 className="font-oswald text-2xl uppercase tracking-wider mb-3">Our Mission</h3>
                    <p className="font-inter text-sm text-gray-500 uppercase tracking-widest">Click to explore</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back bg-gradient-to-br from-[var(--color-brand-card)] to-[#1a1a1a] p-8 border border-[var(--color-brand-orange)]/30 flex flex-col justify-center">
                    <h3 className="font-oswald text-xl uppercase tracking-wider mb-4 flex items-center gap-3">
                      <Zap className="w-6 h-6 text-[var(--color-brand-orange)]" />
                      Our Mission
                    </h3>
                    <p className="font-inter text-gray-400 leading-relaxed text-sm">
                      {missionContent.description}
                    </p>
                    <span className="mt-4 inline-block font-inter text-xs text-[var(--color-brand-orange)] uppercase tracking-widest">
                      Tap for details →
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values Chips */}
            <div ref={chipsRef} className="pt-8 text-center">
              <h3 className="font-inter text-sm uppercase tracking-[0.3em] text-gray-500 mb-12">
                Our Core Values
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {coreValues.map((value, idx) => (
                  <div 
                    key={idx}
                    className="hover-target chip-item flex items-center gap-2 bg-black border border-gray-800 rounded-full px-6 py-3 text-sm font-inter text-gray-300 hover:border-[var(--color-brand-orange)] hover:text-white hover:scale-105 transition-all cursor-default shadow-lg gpu-accelerated"
                  >
                    <span className="text-[var(--color-brand-orange)]">{value.icon}</span>
                    {value.name}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission / Vision Popup Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] modal-backdrop flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="modal-glass rounded-3xl p-8 md:p-12 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="hover-target absolute top-4 right-4 text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Icon */}
              <div className="mb-6 p-4 bg-[var(--color-brand-orange)]/10 rounded-full w-fit border border-[var(--color-brand-orange)]/20">
                {activeModal.icon}
              </div>

              {/* Title */}
              <h3 className="font-oswald text-3xl uppercase tracking-wider mb-4 text-white">
                {activeModal.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-gray-400 leading-relaxed mb-6">
                {activeModal.description}
              </p>

              {/* Details List */}
              <ul className="space-y-3">
                {activeModal.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                    className="flex items-start gap-3 font-inter text-sm text-gray-300"
                  >
                    <CheckCircle className="w-4 h-4 text-[var(--color-brand-orange)] shrink-0 mt-0.5" />
                    {detail}
                  </motion.li>
                ))}
              </ul>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full bg-gradient-to-r from-transparent via-[var(--color-brand-orange)]/40 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
