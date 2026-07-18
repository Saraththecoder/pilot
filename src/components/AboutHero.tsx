"use client";

import Image from "next/image";
import { Shield, Star, CheckCircle, MapPin } from "lucide-react";
export default function AboutHero() {

  return (
    <section className="relative w-full pt-32 pb-24 bg-[var(--color-brand-dark)] overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-brand-orange)]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="font-oswald text-4xl lg:text-5xl uppercase font-bold text-[var(--color-brand-orange)] mb-2">
              ABOUT
            </h1>
            <h2 className="font-oswald text-6xl md:text-7xl lg:text-8xl uppercase font-bold text-white mb-6 leading-none">
              SKYPILOT
            </h2>
            
            <p className="font-oswald text-xl uppercase tracking-widest text-white font-bold mb-8">
              VISION. PRECISION. <span className="text-[var(--color-brand-orange)]">IMPACT.</span>
            </p>

            <p className="font-inter text-gray-300 text-lg leading-relaxed max-w-lg mb-12">
              SkyPilot Drone Services was founded with a vision to redefine the way the world looks from above. We combine creativity, technology and precision to deliver aerial solutions that inspire and create impact.
            </p>

            <div>
              <p className="font-serif italic text-4xl text-[var(--color-brand-orange)] mb-2">
                Vinay Kanth
              </p>
              <p className="font-oswald uppercase tracking-widest font-bold text-white text-sm mb-1">
                FOUNDER & DRONE PILOT
              </p>
              <p className="font-inter text-gray-400 text-xs uppercase tracking-widest">
                DGCA CERTIFIED | LICENSED PILOT
              </p>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] flex items-end justify-center">
            {/* Founder Portrait */}
            <div className="relative w-full max-w-[500px] h-full">
              <Image
                src="/images/founder_portrait_1784387195680.png"
                alt="Vinay Kanth - Founder"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)] via-transparent to-transparent z-10" />
            </div>
          </div>
          
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:-mt-12">
        <div className="bg-[#111111] border border-white/5 rounded-xl shadow-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="text-[var(--color-brand-orange)]">
                <Shield className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-oswald text-white font-bold tracking-wider text-lg">DGCA CERTIFIED</h3>
                <p className="text-gray-400 text-sm">Licensed Drone Pilot</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-[var(--color-brand-orange)]">
                <Star className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-oswald text-white font-bold tracking-wider text-lg">8+ YEARS</h3>
                <p className="text-gray-400 text-sm">Industry Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[var(--color-brand-orange)]">
                <CheckCircle className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-oswald text-white font-bold tracking-wider text-lg">500+</h3>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[var(--color-brand-orange)]">
                <MapPin className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-oswald text-white font-bold tracking-wider text-lg">PAN INDIA</h3>
                <p className="text-gray-400 text-sm">Projects Across India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
