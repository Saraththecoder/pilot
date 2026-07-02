"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, ThumbsUp, Medal, Users, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
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
    <section className="py-24 bg-[var(--color-brand-dark)] relative overflow-hidden">
      
      {/* Background motif */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] spotlight-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6"
          >
            Why <span className="text-gradient-silver">Choose</span> Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-inter text-gray-400 max-w-2xl mx-auto"
          >
            We don&apos;t just fly drones; we deliver actionable data and cinematic brilliance. Here is what sets SkyPilot apart.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="text-[var(--color-brand-orange)] mb-6 p-4 bg-[var(--color-brand-card)] rounded-full border border-gray-800 shadow-[0_0_15px_rgba(245,133,31,0.1)]">
                {reason.icon}
              </div>
              <h3 className="font-oswald text-xl uppercase tracking-wider mb-3 text-white">
                {reason.title}
              </h3>
              <p className="font-inter text-sm text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
