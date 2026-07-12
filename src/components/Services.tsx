"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const sectionRef = useRef<HTMLSelectElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animations removed as requested
  }, []);

  const services = [
    {
      title: "Drone Photography",
      description: "Capture stunning high-resolution aerial imagery for commercial, real estate, and artistic projects. Our advanced sensor payloads deliver uncompromising detail, dynamic range, and clarity, providing perspectives that elevate your visual narrative.",
      image: "/images/drone_photography_1783188542223.png",
    },
    {
      title: "Drone Videography",
      description: "Cinematic aerial motion pictures captured with heavy-lift platforms carrying industry-standard cinema cameras (RED, ARRI). We provide buttery-smooth tracking shots, sweeping vistas, and complex dynamic movements for feature films, commercials, and high-end productions.",
      image: "/images/drone_cinematic.png",
    },
    {
      title: "Construction Progress",
      description: "Systematic, repeatable aerial documentation of construction sites. We provide consistent visual timelines, orthomosaic maps, and 3D models to track progress, verify contractor claims, and keep stakeholders informed with irrefutable visual data.",
      image: "/images/construction_progress_1783188576830.png",
    },
    {
      title: "Industrial Inspection",
      description: "Safe, efficient, and highly-detailed visual and thermal inspections of critical infrastructure. Our platforms navigate complex environments like flare stacks, wind turbines, and bridges to identify structural anomalies without risking human personnel or requiring costly scaffolding.",
      image: "/images/industrial_inspection_1783188595010.png",
    },
    {
      title: "Land Survey & Mapping",
      description: "Accurate orthomosaics and 3D terrain mapping for planning and analysis. We utilize RTK/PPK workflows to deliver survey-grade accuracy for topographic modeling, volumetric measurements, and GIS integration.",
      image: "/images/land_survey_mapping_1783188605989.png",
    },
    {
      title: "Event Coverage",
      description: "Unique overhead angles to capture the scale and energy of large gatherings. From music festivals to corporate retreats, our live-broadcast capable drones provide dynamic establishing shots and crowd coverage.",
      image: "/images/event_coverage_1783188624133.png",
    },
    {
      title: "Real Estate Marketing",
      description: "Showcase premium properties and their surroundings to attract luxury buyers. We highlight property boundaries, neighborhood context, and architectural features through meticulously planned twilight flights and seamless interior-exterior transitions.",
      image: "/images/real_estate_marketing_1783188637280.png",
    },
    {
      title: "Professional Live Streaming",
      description: "Professional post-production to turn raw aerial footage into polished content. Our team handles color grading, stabilization, sound design, and motion graphics to deliver final cuts ready for social media or broadcast.",
      image: "/images/content_creation_1783188651388.png",
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-[var(--color-brand-dark)] relative overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {services.map((service, idx) => {
          // Even indexes (0, 2, 4...) -> Text Left, Image Right (md:flex-row)
          // Odd indexes (1, 3, 5...) -> Image Left, Text Right (md:flex-row-reverse)
          const isReversed = idx % 2 !== 0;

          return (
            <div 
              key={idx} 
              className={`service-row flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24 ${isReversed ? 'md:flex-row-reverse' : ''}`}
              style={{ perspective: "1200px" }}
            >
              
              {/* Text Block */}
              <div className="service-text w-full md:w-1/2 space-y-6 gpu-accelerated">
                <div className="border-l-4 border-[var(--color-brand-orange)] pl-6 py-2">
                  <h2 className="font-oswald text-4xl lg:text-5xl uppercase tracking-wider font-bold text-white leading-tight">
                    {service.title}
                  </h2>
                </div>
                <p className="font-inter text-gray-400 text-lg leading-relaxed max-w-xl">
                  {service.description}
                </p>
                <div className="pt-4">
                  <Link 
                    href="/contact" 
                    className="hover-target group inline-flex items-center gap-2 font-oswald uppercase tracking-widest text-sm font-bold text-[var(--color-brand-orange)] hover:text-white transition-colors"
                  >
                    Enquire Now 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Image Block */}
              <div className="service-image w-full md:w-1/2 relative h-[400px] lg:h-[500px] gpu-accelerated">
                {/* Decorative border matching the reference */}
                <div className="absolute inset-0 border border-gray-800 rounded-lg -z-10 translate-x-4 translate-y-4"></div>
                
                <div className="hover-target absolute inset-0 bg-[#111111] border border-gray-800 rounded-lg flex flex-col items-center justify-center text-gray-700 shadow-2xl overflow-hidden group tilt-card hover:border-[var(--color-brand-orange)] transition-colors duration-500">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none"></div>
                </div>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}
