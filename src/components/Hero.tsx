"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Shield, Star, Camera, Target } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-element", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });

      gsap.to(".floating-drone", {
        y: -30,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col pt-20" ref={heroRef}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_drone.png"
          alt="Cinematic Drone Shot Background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-dark)] via-[var(--color-brand-dark)]/90 to-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-brand-dark)] z-10" />
      </div>

      <div className="relative z-20 flex-1 flex flex-col max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-32 justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
          <div className="max-w-2xl w-full">
            <p className="hero-element font-inter text-[var(--color-brand-orange)] tracking-[0.2em] text-sm uppercase mb-4 font-bold">
              ELEVATE PERSPECTIVES.
            </p>
            <h1 className="hero-element font-oswald text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] mb-2 uppercase">
              AERIAL VISIONS.
            </h1>
            <h1 className="hero-element font-oswald text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--color-brand-orange)] leading-[1.1] mb-6 uppercase">
              REAL IMPACT.
            </h1>
            <p className="hero-element font-inter text-gray-300 text-lg md:text-xl mb-10 max-w-lg">
              Professional drone cinematography and precision survey solutions for a smarter tomorrow.
            </p>
            
            <div className="hero-element flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="bg-[var(--color-brand-orange)] text-[var(--color-brand-dark)] px-8 py-4 rounded font-inter text-sm tracking-widest font-bold hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                OUR SERVICES
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                className="border-2 border-[var(--color-brand-orange)] text-[var(--color-brand-orange)] px-8 py-4 rounded font-inter text-sm tracking-widest font-bold hover:bg-[var(--color-brand-orange)] hover:text-[var(--color-brand-dark)] transition-all flex items-center justify-center gap-2 group"
              >
                WATCH SHOWREEL
                <div className="bg-[var(--color-brand-orange)] text-[var(--color-brand-dark)] rounded-full p-1 group-hover:bg-[var(--color-brand-dark)] group-hover:text-[var(--color-brand-orange)] transition-colors">
                  <Play className="w-3 h-3 ml-0.5" />
                </div>
              </button>
            </div>
          </div>

          <div className="hidden lg:block w-full max-w-lg aspect-square relative hero-element">
            <Image 
              src="/images/drone_cinematic.png" 
              alt="Floating Drone" 
              fill 
              className="object-contain floating-drone mix-blend-screen opacity-90"
            />
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-30 w-full bg-[var(--color-brand-dark)]/90 backdrop-blur-md border-y border-white/5 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 hero-element">
              <div className="text-[var(--color-brand-orange)]">
                <Shield className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-oswald text-white font-bold tracking-wider text-lg">DGCA CERTIFIED</h3>
                <p className="text-gray-400 text-sm">Licensed Drone Pilot</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 hero-element">
              <div className="text-[var(--color-brand-orange)]">
                <Star className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-oswald text-white font-bold tracking-wider text-lg">8+ YEARS</h3>
                <p className="text-gray-400 text-sm">Industry Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-4 hero-element">
              <div className="text-[var(--color-brand-orange)]">
                <Camera className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-oswald text-white font-bold tracking-wider text-lg">4K CINEMATOGRAPHY</h3>
                <p className="text-gray-400 text-sm">High Quality Output</p>
              </div>
            </div>

            <div className="flex items-center gap-4 hero-element">
              <div className="text-[var(--color-brand-orange)]">
                <Target className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-oswald text-white font-bold tracking-wider text-lg">PRECISE SURVEY</h3>
                <p className="text-gray-400 text-sm">Accurate & Reliable Data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
