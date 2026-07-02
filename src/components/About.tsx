"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Target, Zap, Award, Smile, CheckCircle } from "lucide-react";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const coreValues = [
    { name: "Professionalism", icon: <Award className="w-5 h-5" /> },
    { name: "Safety First", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Innovation", icon: <Zap className="w-5 h-5" /> },
    { name: "Quality", icon: <CheckCircle className="w-5 h-5" /> },
    { name: "Customer Satisfaction", icon: <Smile className="w-5 h-5" /> },
    { name: "Integrity", icon: <Target className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-24 bg-[var(--color-brand-dark)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header & Stat */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
              <span className="text-gradient-silver">About</span> SkyPilot
            </h2>
            <div className="inline-block bg-[var(--color-brand-card)] border border-gray-800 rounded-full px-8 py-3 mt-4">
              <span className="font-oswald text-2xl md:text-3xl font-bold text-[var(--color-brand-orange)] mr-2">
                5+
              </span>
              <span className="font-inter uppercase tracking-widest text-sm md:text-base text-gray-300">
                Years of Experience
              </span>
            </div>
          </motion.div>

          {/* Vision & Mission Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={itemVariants}
              className="bg-[var(--color-brand-card)] p-10 rounded-2xl border border-gray-800 hover:border-[var(--color-brand-orange)]/50 transition-colors duration-300 group"
            >
              <h3 className="font-oswald text-2xl uppercase tracking-wider mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-[var(--color-brand-orange)]" />
                Our Vision
              </h3>
              <p className="font-inter text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                To become India&apos;s most trusted drone solutions company by delivering innovative, safe, and high-quality aerial services.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-[var(--color-brand-card)] p-10 rounded-2xl border border-gray-800 hover:border-[var(--color-brand-orange)]/50 transition-colors duration-300 group"
            >
              <h3 className="font-oswald text-2xl uppercase tracking-wider mb-4 flex items-center gap-3">
                <Zap className="w-6 h-6 text-[var(--color-brand-orange)]" />
                Our Mission
              </h3>
              <p className="font-inter text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                To provide professional drone photography, videography, surveying, inspections, and mapping services using advanced technology while exceeding client expectations.
              </p>
            </motion.div>
          </div>

          {/* Core Values Chips */}
          <motion.div variants={itemVariants} className="pt-8 text-center">
            <h3 className="font-inter text-sm uppercase tracking-[0.3em] text-gray-500 mb-8">
              Our Core Values
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {coreValues.map((value, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 bg-black border border-gray-800 rounded-full px-6 py-3 text-sm font-inter text-gray-300 hover:border-[var(--color-brand-orange)] hover:text-white transition-all cursor-default"
                >
                  <span className="text-[var(--color-brand-orange)]">{value.icon}</span>
                  {value.name}
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
