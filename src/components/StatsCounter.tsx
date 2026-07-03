"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, FolderCheck, Smile, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const stats: StatItem[] = [
    { icon: <Calendar className="w-8 h-8" />, value: 5, suffix: "+", label: "Years Experience" },
    { icon: <FolderCheck className="w-8 h-8" />, value: 500, suffix: "+", label: "Projects Completed" },
    { icon: <Smile className="w-8 h-8" />, value: 100, suffix: "+", label: "Happy Clients" },
    { icon: <MapPin className="w-8 h-8" />, value: 50, suffix: "+", label: "Cities Covered" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the counter section entrance
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 60, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate each counter number
      counterRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const target = stats[idx].value;

        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 2 + idx * 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          onUpdate: () => {
            if (ref) {
              ref.textContent = Math.round(counter.val).toString();
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#050505] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 spotlight-glow opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-[var(--color-brand-card)] border border-gray-800 hover:border-[var(--color-brand-orange)]/50 hover:shadow-[0_0_30px_rgba(245,133,31,0.15)] transition-all duration-500 gpu-accelerated"
            >
              {/* Icon */}
              <div className="text-[var(--color-brand-orange)] mb-4 p-3 bg-black/50 rounded-full border border-gray-800">
                {stat.icon}
              </div>

              {/* Counter */}
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  ref={(el) => { counterRefs.current[idx] = el; }}
                  className="counter-number font-oswald text-4xl md:text-5xl font-bold text-[var(--color-brand-orange)]"
                >
                  0
                </span>
                <span className="font-oswald text-3xl md:text-4xl font-bold text-[var(--color-brand-orange)]">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <span className="font-inter text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
