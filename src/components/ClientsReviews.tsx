"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote, Building2, Clapperboard, Landmark, Factory, Home, TreePine } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Real Estate Developer",
    rating: 5,
    text: "SkyPilot transformed our property listings with breathtaking aerial shots. Sales inquiries increased by 40% after using their drone footage. Truly exceptional work!",
    icon: <Home className="w-5 h-5" />,
  },
  {
    name: "Priya Sharma",
    role: "Film Director",
    rating: 5,
    text: "The cinematic quality of SkyPilot's aerial videography is outstanding. They captured sweeping shots for our feature film that rival Hollywood-level production. Highly recommended!",
    icon: <Clapperboard className="w-5 h-5" />,
  },
  {
    name: "Venkatesh Reddy",
    role: "Construction Manager",
    rating: 5,
    text: "We use SkyPilot for monthly construction progress monitoring. Their orthomosaic maps and 3D models have been invaluable for stakeholder reporting and dispute resolution.",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    name: "Anitha Devi",
    role: "Event Planner",
    rating: 5,
    text: "SkyPilot covered our corporate event with stunning aerial footage. The team was professional, punctual, and the final video exceeded all our expectations!",
    icon: <TreePine className="w-5 h-5" />,
  },
  {
    name: "Srinivas Rao",
    role: "Industrial Plant Manager",
    rating: 5,
    text: "Their thermal inspection drones identified critical issues in our facility that manual inspection missed. SkyPilot's technology literally saved us lakhs in preventive maintenance.",
    icon: <Factory className="w-5 h-5" />,
  },
  {
    name: "Meera Patel",
    role: "Government Surveyor",
    rating: 5,
    text: "The survey-grade accuracy of SkyPilot's mapping services is remarkable. They delivered precise topographic data for our land development project ahead of schedule.",
    icon: <Landmark className="w-5 h-5" />,
  },
];

const clients = [
  "Real Estate Firms",
  "Film Productions",
  "Construction Companies",
  "Government Bodies",
  "Industrial Plants",
  "Event Managers",
  "Agriculture Sector",
  "Tourism Boards",
];

export default function ClientsReviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Client badges pop in
      if (clientsRef.current) {
        gsap.fromTo(
          ".client-badge",
          { opacity: 0, scale: 0.5, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: {
              amount: 0.8,
              from: "random",
            },
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: clientsRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Review cards fly in
      if (reviewsRef.current) {
        gsap.fromTo(
          ".review-card",
          { opacity: 0, y: 80, rotateX: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: reviewsRef.current,
              start: "top 80%",
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
      id="clients-reviews"
      className="py-24 bg-[#050505] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] spotlight-glow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
            Our <span className="text-gradient-silver">Clients</span> &{" "}
            <span className="text-[var(--color-brand-orange)]">Reviews</span>
          </h2>
          <p className="font-inter text-gray-400 max-w-2xl mx-auto">
            Trusted by businesses across industries. Here&apos;s what our
            clients have to say about working with SkyPilot.
          </p>
        </div>

        {/* Client Industries Badges */}
        <div ref={clientsRef} className="mb-20">
          <h3 className="font-inter text-sm uppercase tracking-[0.3em] text-gray-500 text-center mb-8">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="client-badge bg-[var(--color-brand-card)] border border-gray-800 rounded-full px-6 py-3 font-inter text-sm text-gray-300 hover:border-[var(--color-brand-orange)] hover:text-white hover:shadow-[0_0_20px_rgba(245,133,31,0.15)] hover:scale-105 transition-all duration-300 cursor-default gpu-accelerated"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          ref={reviewsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: "1000px" }}
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="review-card bg-[var(--color-brand-card)] rounded-2xl p-8 border border-gray-800 hover:border-[var(--color-brand-orange)]/30 hover:shadow-[0_0_30px_rgba(245,133,31,0.1)] transition-all duration-500 relative group gpu-accelerated"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-[var(--color-brand-orange)]/20 absolute top-6 right-6 group-hover:text-[var(--color-brand-orange)]/40 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[var(--color-brand-orange)] text-[var(--color-brand-orange)]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-inter text-gray-400 leading-relaxed text-sm mb-6 group-hover:text-gray-300 transition-colors">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <div className="w-10 h-10 rounded-full bg-[var(--color-brand-orange)]/10 border border-[var(--color-brand-orange)]/20 flex items-center justify-center text-[var(--color-brand-orange)]">
                  {review.icon}
                </div>
                <div>
                  <p className="font-oswald text-sm uppercase tracking-wider text-white">
                    {review.name}
                  </p>
                  <p className="font-inter text-xs text-gray-500">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
