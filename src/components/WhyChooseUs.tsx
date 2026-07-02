"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Sparkles, ThumbsUp, Medal, Users, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
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

      // Grid Items Animation
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, scale: 0.5, rotationX: 45 },
          {
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1,
            stagger: 0.15,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            },
          }
        );

        // Add a continuous floating animation to the icons after they appear
        const icons = gridRef.current.querySelectorAll('.icon-wrapper');
        icons.forEach((icon, i) => {
          gsap.to(icon, {
            y: -10,
            duration: 1.5 + Math.random(),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.1
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const reasons = [
    {
      title: "Professionalism",
      description: "Expert operators dedicated to delivering seamless execution on every project.",
      icon: <Medal className="w-10 h-10" />
    },
    {
      title: "Safety First",
      description: "Strict adherence to safety protocols and local aviation regulations.",
      icon: <Shield className="w-10 h-10" />
    },
    {
      title: "Innovation",
      description: "Utilizing the latest drone technology and camera systems for superior results.",
      icon: <Sparkles className="w-10 h-10" />
    },
    {
      title: "Quality",
      description: "Uncompromising standards for image clarity, data accuracy, and final deliverables.",
      icon: <CheckCircle2 className="w-10 h-10" />
    },
    {
      title: "Customer Satisfaction",
      description: "Tailored solutions focused entirely on exceeding your specific goals.",
      icon: <Users className="w-10 h-10" />
    },
    {
      title: "Integrity",
      description: "Transparent pricing, clear communication, and reliable timelines.",
      icon: <ThumbsUp className="w-10 h-10" />
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--color-brand-dark)] relative overflow-hidden">
      
      {/* Background motif */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] spotlight-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
            Why <span className="text-gradient-silver">Choose</span> Us
          </h2>
          <p className="font-inter text-gray-400 max-w-2xl mx-auto">
            We don&apos;t just fly drones; we deliver actionable data and cinematic brilliance. Here is what sets SkyPilot apart.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 transform-gpu"
            >
              <div className="icon-wrapper text-[var(--color-brand-orange)] mb-6 p-4 bg-[var(--color-brand-card)] rounded-full border border-gray-800 shadow-[0_0_15px_rgba(245,133,31,0.1)]">
                {reason.icon}
              </div>
              <h3 className="font-oswald text-xl uppercase tracking-wider mb-3 text-white">
                {reason.title}
              </h3>
              <p className="font-inter text-sm text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
