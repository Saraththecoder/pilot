"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Target, Zap, Award, Smile, CheckCircle } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Text Split Animation
      if (headerRef.current) {
        // Simple manual split for words since SplitText is a premium plugin
        const words = headerRef.current.innerText.split(" ");
        headerRef.current.innerHTML = "";
        words.forEach((word) => {
          const span = document.createElement("span");
          span.innerText = word + " ";
          span.style.display = "inline-block";
          
          // Re-apply the gradient class to the word "About"
          if (word.toUpperCase() === "ABOUT") {
            span.className = "text-gradient-silver";
          }
          
          headerRef.current?.appendChild(span);
        });

        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 50, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.2,
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

      // 2. 3D Card Flip on Scroll
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 100, rotateY: 45, rotateX: 20 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 3. Core Values Chips Staggered Pop
      if (chipsRef.current) {
        gsap.fromTo(
          ".chip-item",
          { opacity: 0, scale: 0.5, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: {
              amount: 0.8,
              from: "random"
            },
            ease: "back.out(2)",
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

  const coreValues = [
    { name: "Professionalism", icon: <Award className="w-5 h-5" /> },
    { name: "Safety First", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Innovation", icon: <Zap className="w-5 h-5" /> },
    { name: "Quality", icon: <CheckCircle className="w-5 h-5" /> },
    { name: "Customer Satisfaction", icon: <Smile className="w-5 h-5" /> },
    { name: "Integrity", icon: <Target className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-24 bg-[var(--color-brand-dark)] relative overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-24 perspective-1000">
          {/* Header & Stat */}
          <div className="text-center">
            <h2 ref={headerRef} className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
              About SkyPilot
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

          {/* Vision & Mission Split */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
            <div className="bg-[var(--color-brand-card)] p-10 rounded-2xl border border-gray-800 hover:border-[var(--color-brand-orange)]/50 hover:shadow-[0_0_30px_rgba(245,133,31,0.15)] transition-all duration-500 group transform-gpu">
              <h3 className="font-oswald text-2xl uppercase tracking-wider mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-[var(--color-brand-orange)]" />
                Our Vision
              </h3>
              <p className="font-inter text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                To become India&apos;s most trusted drone solutions company by delivering innovative, safe, and high-quality aerial services.
              </p>
            </div>

            <div className="bg-[var(--color-brand-card)] p-10 rounded-2xl border border-gray-800 hover:border-[var(--color-brand-orange)]/50 hover:shadow-[0_0_30px_rgba(245,133,31,0.15)] transition-all duration-500 group transform-gpu">
              <h3 className="font-oswald text-2xl uppercase tracking-wider mb-4 flex items-center gap-3">
                <Zap className="w-6 h-6 text-[var(--color-brand-orange)]" />
                Our Mission
              </h3>
              <p className="font-inter text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                To provide professional drone photography, videography, surveying, inspections, and mapping services using advanced technology while exceeding client expectations.
              </p>
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
                  className="chip-item flex items-center gap-2 bg-black border border-gray-800 rounded-full px-6 py-3 text-sm font-inter text-gray-300 hover:border-[var(--color-brand-orange)] hover:text-white hover:scale-105 transition-all cursor-default shadow-lg"
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
  );
}
