"use client";

import { motion } from "framer-motion";
import { 
  Camera, 
  Video, 
  HardHat, 
  Search, 
  Map, 
  CalendarDays, 
  Home, 
  Film 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Drone Photography",
      description: "Stunning high-resolution aerial imagery for commercial and creative needs.",
      icon: <Camera className="w-8 h-8" />
    },
    {
      title: "Drone Videography",
      description: "Cinematic 4K aerial video capturing dynamic perspectives and breathtaking shots.",
      icon: <Video className="w-8 h-8" />
    },
    {
      title: "Construction Progress Monitoring",
      description: "Regular aerial site surveys to track milestones and communicate progress.",
      icon: <HardHat className="w-8 h-8" />
    },
    {
      title: "Industrial Inspection",
      description: "Safe and detailed visual inspections for towers, roofs, and critical infrastructure.",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Land Survey & Mapping",
      description: "Accurate orthomosaics and 3D terrain mapping for planning and analysis.",
      icon: <Map className="w-8 h-8" />
    },
    {
      title: "Event Coverage",
      description: "Unique overhead angles to capture the scale and energy of large gatherings.",
      icon: <CalendarDays className="w-8 h-8" />
    },
    {
      title: "Real Estate Marketing",
      description: "Showcase properties and their surroundings to attract premium buyers.",
      icon: <Home className="w-8 h-8" />
    },
    {
      title: "Video Editing & Content Creation",
      description: "Professional post-production to turn raw aerial footage into polished content.",
      icon: <Film className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6"
          >
            Our <span className="text-[var(--color-brand-orange)]">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-inter text-gray-400 max-w-2xl mx-auto"
          >
            We leverage advanced drone technology to provide a comprehensive suite of aerial solutions tailored to your industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[var(--color-brand-card)] p-8 rounded-2xl border border-gray-800 hover:border-[var(--color-brand-orange)] transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(245,133,31,0.1)]"
            >
              <div className="bg-black w-16 h-16 rounded-xl flex items-center justify-center text-[var(--color-brand-orange)] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-oswald text-xl uppercase tracking-wider mb-3">
                {service.title}
              </h3>
              <p className="font-inter text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
