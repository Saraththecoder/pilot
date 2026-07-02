import Link from "next/link";
import { MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <span className="font-oswald text-3xl font-bold uppercase tracking-wider">
                <span className="text-gradient-silver">Sky</span>
                <span className="text-[var(--color-brand-orange)]">Pilot</span>
              </span>
            </Link>
            <p className="text-gray-400 font-inter text-sm mb-6 max-w-sm uppercase tracking-widest">
              Aerial Cinematography
            </p>
            <p className="text-gray-500 font-inter text-sm mb-6 max-w-sm">
              India&apos;s most trusted drone solutions company, delivering innovative, safe, and high-quality aerial services.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-[var(--color-brand-orange)] transition-colors p-2 bg-gray-900 rounded-full">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-brand-orange)] transition-colors p-2 bg-gray-900 rounded-full">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919391705935" className="text-gray-400 hover:text-[var(--color-brand-orange)] transition-colors p-2 bg-gray-900 rounded-full">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-oswald text-xl uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4 font-inter text-sm text-gray-400">
              <li>
                <Link href="#home" className="hover:text-[var(--color-brand-orange)] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[var(--color-brand-orange)] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[var(--color-brand-orange)] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-[var(--color-brand-orange)] transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[var(--color-brand-orange)] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-oswald text-xl uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4 font-inter text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-brand-orange)] shrink-0" />
                <span>Kurnool, Andhra Pradesh,<br />India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-brand-orange)] shrink-0" />
                <a href="tel:+919391705935" className="hover:text-[var(--color-brand-orange)] transition-colors">
                  +91 93917 05935
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-brand-orange)] shrink-0" />
                <a href="mailto:skypilot.droneknl@gmail.com" className="hover:text-[var(--color-brand-orange)] transition-colors break-all">
                  skypilot.droneknl@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 text-center text-sm font-inter text-gray-600">
          <p>© 2026 SkyPilot Drone Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
