"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const reasons = [
    {
      title: "Expertise and Experience",
      description: "Our team of skilled drone pilots and photographers bring years of experience and a keen eye for detail to every project. We are dedicated to delivering exceptional results that exceed your expectations.",
      img: "/icons/expertise.png"
    },
    {
      title: "Cutting-Edge Technology",
      description: "Sky Pilot invests in cutting-edge drone technology to ensure the highest quality footage. Our drones are equipped with advanced stabilization systems, high-resolution cameras, and intelligent flight modes for precision and reliability.",
      img: "/icons/technology.png"
    },
    {
      title: "Custom Solutions",
      description: "We understand that every project is unique. Our team works closely with clients to tailor our drone shoot services to meet specific requirements, ensuring a personalized and impactful visual experience.",
      img: "/icons/solutions.png"
    },
    {
      title: "Compliance and Safety",
      description: "Safety is paramount. Sky Pilot adheres to all regulations and guidelines for drone operations, prioritizing the well-being of our team, clients, and the public.",
      img: "/icons/safety.png"
    },
    {
      title: "Timely Delivery",
      description: "We value your time. Our efficient workflow and commitment to deadlines ensure that you receive your stunning drone-captured visuals promptly, without compromising on quality.",
      img: "/icons/delivery.png"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    // Use matchMedia to only do horizontal scroll on desktop, or do it on all?
    // The user said "scrolling each should appear one by one in horizontal direction"
    // Let's implement it for all screens.
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.horizontal-card') as HTMLElement[];
      
      // Calculate how far to move the container to see all cards
      // It's a horizontal scroll layout so we move it -100% + 1 viewport width (approx)
      const totalWidth = containerRef.current!.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      gsap.to(containerRef.current, {
        x: () => -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true, // Recalculates on resize
        }
      });
      
      // Also add a little float animation to the 3D images
      cards.forEach((card, i) => {
        const img = card.querySelector('.icon-3d');
        if (img) {
          gsap.to(img, {
            y: -15,
            rotationY: 10,
            duration: 2 + Math.random(),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[var(--color-brand-dark)] h-screen overflow-hidden relative flex flex-col justify-center">
      
      {/* Background motif */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] spotlight-glow opacity-30 pointer-events-none" />

      {/* Sticky Header inside the section */}
      <div className="absolute top-10 md:top-20 left-0 w-full text-center z-20 px-4">
        <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-4 drop-shadow-xl">
          Why Choose <span className="text-[var(--color-brand-orange)]">Sky Pilot ?</span>
        </h2>
      </div>

      <div className="relative z-10 w-full mt-24">
        <div ref={containerRef} className="flex gap-8 md:gap-16 px-10 md:px-32 w-max">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="horizontal-card w-[85vw] md:w-[60vw] lg:w-[40vw] max-w-lg shrink-0 flex flex-col items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative"
            >
              {/* Giant Background Number */}
              <div className="absolute -top-10 -right-4 text-[var(--color-brand-orange)] opacity-10 font-oswald text-9xl font-black pointer-events-none">
                0{idx + 1}
              </div>

              {/* 3D Icon */}
              <div className="icon-3d w-40 h-40 md:w-56 md:h-56 relative mb-8 drop-shadow-[0_0_30px_rgba(245,133,31,0.3)]">
                <Image 
                  src={reason.img} 
                  alt={reason.title} 
                  fill 
                  className="object-contain"
                />
              </div>

              <h3 className="font-oswald text-2xl md:text-3xl uppercase tracking-wider text-white mb-4 text-center">
                {reason.title}
              </h3>
              
              <p className="font-inter text-gray-400 text-sm md:text-base leading-relaxed text-center">
                {reason.description}
              </p>
            </div>
          ))}

          {/* Final CTA Frame */}
          <div className="horizontal-card w-[85vw] md:w-[60vw] lg:w-[40vw] max-w-lg shrink-0 flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-brand-orange)] to-orange-800 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(245,133,31,0.4)] relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Logo */}
              <div className="w-24 h-24 relative mb-6">
                <Image src="/logo.png" alt="Sky Pilot Logo" fill className="object-contain drop-shadow-2xl" />
              </div>
              <h3 className="font-oswald text-3xl md:text-4xl uppercase tracking-wider text-white mb-4">
                Ready to Fly?
              </h3>
              <p className="font-inter text-white/90 text-sm md:text-base mb-8 max-w-sm">
                Elevate your next project with industry-leading aerial drone services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a href="/services" className="bg-white text-black px-6 py-3 rounded-full font-oswald uppercase tracking-widest text-sm font-bold hover:bg-gray-200 transition-colors">
                  Explore Services
                </a>
                <a href="/contact" className="bg-black/50 text-white px-6 py-3 rounded-full font-oswald uppercase tracking-widest text-sm font-bold hover:bg-black transition-colors border border-white/20">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
