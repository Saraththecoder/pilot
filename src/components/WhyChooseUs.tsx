"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Layers, Users, ShieldCheck, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-element", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-[var(--color-brand-dark)] relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 why-element relative">
            <div className="relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-[#111111]">
              <Image
                src="/images/why_choose_us_drone_1784385765624.png"
                alt="Technical drone wireframe"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)] to-transparent pointer-events-none opacity-50" />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="why-element font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wide text-white mb-12">
              WHY CHOOSE SKYPILOT?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              <div className="why-element flex gap-4">
                <div className="text-[var(--color-brand-orange)] mt-1">
                  <Layers className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-oswald text-white font-bold tracking-wider text-xl mb-2">Advanced Equipment</h3>
                  <p className="font-inter text-gray-400 text-sm leading-relaxed">
                    We use premium drones and cameras for the best results.
                  </p>
                </div>
              </div>

              <div className="why-element flex gap-4">
                <div className="text-[var(--color-brand-orange)] mt-1">
                  <Users className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-oswald text-white font-bold tracking-wider text-xl mb-2">Experienced Team</h3>
                  <p className="font-inter text-gray-400 text-sm leading-relaxed">
                    Skilled professionals with years of industry experience.
                  </p>
                </div>
              </div>

              <div className="why-element flex gap-4">
                <div className="text-[var(--color-brand-orange)] mt-1">
                  <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-oswald text-white font-bold tracking-wider text-xl mb-2">Safe & Compliant</h3>
                  <p className="font-inter text-gray-400 text-sm leading-relaxed">
                    All operations follow DGCA guidelines with full safety protocols.
                  </p>
                </div>
              </div>

              <div className="why-element flex gap-4">
                <div className="text-[var(--color-brand-orange)] mt-1">
                  <Clock className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-oswald text-white font-bold tracking-wider text-xl mb-2">Timely Delivery</h3>
                  <p className="font-inter text-gray-400 text-sm leading-relaxed">
                    On-time delivery with attention to detail and client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
