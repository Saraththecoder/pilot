"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        // Main container entrance
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
            },
          }
        );

        // CTA buttons staggered entrance
        gsap.fromTo(
          ".cta-button",
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[var(--color-brand-dark)] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full spotlight-glow opacity-30" />
        <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-orange)]/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-[var(--color-brand-orange)]/30 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={contentRef}
          className="relative bg-gradient-to-br from-[var(--color-brand-card)] to-[#0d0d0d] rounded-3xl p-10 md:p-16 border border-gray-800 overflow-hidden text-center"
        >
          {/* Subtle inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 rounded-full bg-gradient-to-r from-transparent via-[var(--color-brand-orange)]/40 to-transparent" />

          {/* Content */}
          <h2 className="font-oswald text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Let&apos;s <span className="text-[var(--color-brand-orange)]">Take Off</span> Together
          </h2>
          <p className="font-inter text-gray-400 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            Ready to capture stunning aerial perspectives? Get in touch with us
            now — we&apos;re just a call or message away.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Call Button */}
            <a
              href="tel:+919391705935"
              className="cta-button group flex items-center gap-3 bg-[var(--color-brand-orange)] text-[var(--color-brand-dark)] px-8 py-4 rounded-full font-oswald text-lg tracking-wide font-bold hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(245,133,31,0.3)] hover:shadow-[0_0_40px_rgba(245,133,31,0.5)] gpu-accelerated"
            >
              <Phone className="w-5 h-5 group-hover:animate-bounce" />
              Call Us Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919391705935"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button group flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-oswald text-lg tracking-wide font-bold hover:bg-[#1da851] transition-all duration-300 shadow-[0_0_25px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] gpu-accelerated"
            >
              <MessageCircle className="w-5 h-5 fill-white group-hover:animate-bounce" />
              WhatsApp Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Phone number display */}
          <p className="mt-8 font-oswald text-xl md:text-2xl tracking-wider text-gray-400">
            <a
              href="tel:+919391705935"
              className="hover:text-[var(--color-brand-orange)] transition-colors"
            >
              +91 93917 05935
            </a>
          </p>

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 rounded-full bg-gradient-to-r from-transparent via-[var(--color-brand-orange)]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
