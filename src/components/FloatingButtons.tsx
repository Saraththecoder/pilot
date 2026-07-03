"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-center gap-4">
      {/* Phone Call Button */}
      <div className="floating-btn-enter-delay">
        <a
          href="tel:+919391705935"
          aria-label="Call SkyPilot"
          className="floating-btn-phone w-14 h-14 rounded-full bg-[var(--color-brand-orange)] text-white flex items-center justify-center shadow-lg hover:shadow-[0_0_25px_rgba(245,133,31,0.5)] transition-all duration-300"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* WhatsApp Button */}
      <div className="floating-btn-enter">
        <a
          href="https://wa.me/919391705935"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="floating-btn-phone w-14 h-14 rounded-full bg-[var(--color-brand-orange)] text-white flex items-center justify-center shadow-lg hover:shadow-[0_0_25px_rgba(245,133,31,0.5)] transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>
      </div>
    </div>
  );
}
