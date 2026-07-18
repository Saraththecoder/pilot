"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-dark)] pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="relative w-40 h-10 mb-6">
              <Image 
                src="/logo.png" 
                alt="SkyPilot Logo" 
                fill 
                className="object-contain object-left"
              />
            </div>
            <p className="font-inter text-gray-400 text-xs leading-relaxed mb-6 pr-4">
              We provide professional drone videography and survey services with a focus on quality, safety, and precision.
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-[var(--color-brand-orange)] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-[var(--color-brand-orange)] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="hover:text-[var(--color-brand-orange)] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="hover:text-[var(--color-brand-orange)] transition-colors text-xl font-bold font-serif leading-none">whatsapp</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-oswald text-white text-sm tracking-wider uppercase font-bold mb-6">QUICK LINKS</h3>
            <ul className="space-y-3 font-inter text-gray-400 text-xs">
              <li><Link href="/" className="hover:text-[var(--color-brand-orange)] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[var(--color-brand-orange)] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[var(--color-brand-orange)] transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-[var(--color-brand-orange)] transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-brand-orange)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="font-oswald text-white text-sm tracking-wider uppercase font-bold mb-6">SERVICES</h3>
            <ul className="space-y-3 font-inter text-gray-400 text-xs">
              <li><Link href="/services" className="hover:text-[var(--color-brand-orange)] transition-colors">Drone Videography</Link></li>
              <li><Link href="/services" className="hover:text-[var(--color-brand-orange)] transition-colors">Aerial Photography</Link></li>
              <li><Link href="/services" className="hover:text-[var(--color-brand-orange)] transition-colors">Drone Survey</Link></li>
              <li><Link href="/services" className="hover:text-[var(--color-brand-orange)] transition-colors">Industrial Inspection</Link></li>
              <li><Link href="/services" className="hover:text-[var(--color-brand-orange)] transition-colors">Live Streaming</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-1">
            <h3 className="font-oswald text-white text-sm tracking-wider uppercase font-bold mb-6">INDUSTRIES</h3>
            <ul className="space-y-3 font-inter text-gray-400 text-xs">
              <li><Link href="/industries" className="hover:text-[var(--color-brand-orange)] transition-colors">Construction</Link></li>
              <li><Link href="/industries" className="hover:text-[var(--color-brand-orange)] transition-colors">Real Estate</Link></li>
              <li><Link href="/industries" className="hover:text-[var(--color-brand-orange)] transition-colors">Solar & Energy</Link></li>
              <li><Link href="/industries" className="hover:text-[var(--color-brand-orange)] transition-colors">Agriculture</Link></li>
              <li><Link href="/industries" className="hover:text-[var(--color-brand-orange)] transition-colors">Infrastructure</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="lg:col-span-1">
            <h3 className="font-oswald text-white text-sm tracking-wider uppercase font-bold mb-6">GET IN TOUCH</h3>
            <ul className="space-y-4 font-inter text-gray-400 text-xs">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[var(--color-brand-orange)] shrink-0" />
                <span>+91 9391705935</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[var(--color-brand-orange)] shrink-0" />
                <span>info@skypilot.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--color-brand-orange)] shrink-0" />
                <span>Kurnool, Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-center md:text-left">
          <p className="font-inter text-gray-500 text-xs">
            © 2025 SkyPilot Aerial Cinematography. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
