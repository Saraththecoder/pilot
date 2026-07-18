"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FolderCheck, Smile, Calendar, Target } from "lucide-react";

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
    { icon: <FolderCheck className="w-8 h-8" />, value: 500, suffix: "+", label: "Projects Completed" },
    { icon: <Smile className="w-8 h-8" />, value: 200, suffix: "+", label: "Happy Clients" },
    { icon: <Calendar className="w-8 h-8" />, value: 8, suffix: "+", label: "Years Experience" },
    { icon: <Target className="w-8 h-8" />, value: 15, suffix: "+", label: "Industries Served" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            start: "top 85%",
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
  }, [stats]);

  return (
    <section ref={sectionRef} className="py-12 bg-[var(--color-brand-dark)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x lg:divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row items-center justify-center gap-6 px-4">
                <div className="text-[var(--color-brand-orange)]">
                  {stat.icon}
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-baseline justify-center lg:justify-start gap-1 mb-1">
                    <span 
                      ref={(el) => { counterRefs.current[idx] = el; }} 
                      className="font-oswald text-4xl lg:text-5xl font-bold text-[var(--color-brand-orange)]"
                    >
                      0
                    </span>
                    <span className="font-oswald text-4xl lg:text-5xl font-bold text-[var(--color-brand-orange)]">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="font-inter text-gray-300 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
