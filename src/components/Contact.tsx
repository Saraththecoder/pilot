"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const services = [
    "Drone Photography",
    "Drone Videography",
    "Construction Progress Monitoring",
    "Industrial Inspection",
    "Land Survey & Mapping",
    "Event Coverage",
    "Real Estate Marketing",
    "Video Editing & Content Creation"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setFormData({ name: "", phone: "", service: "", message: "" });
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-[var(--color-brand-dark)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner */}
        <div className="relative bg-[var(--color-brand-card)] border border-gray-800 rounded-3xl p-10 md:p-16 mb-20 overflow-hidden text-center">
          <div className="absolute inset-0 spotlight-glow opacity-60 z-0" />
          <div className="relative z-10">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
              Ready to <span className="text-gradient-silver">Elevate</span> Your Project?
            </h2>
            <p className="font-inter text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              Contact SkyPilot Drone Services today to discuss your aerial requirements and get a customized solution.
            </p>
            <a
              href="https://wa.me/919391705935"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--color-brand-orange)] text-[var(--color-brand-dark)] px-8 py-4 rounded-full font-oswald text-xl tracking-wide font-bold hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(245,133,31,0.3)] hover:shadow-[0_0_30px_rgba(245,133,31,0.5)]"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details & Map */}
          <div>
            <h3 className="font-oswald text-3xl uppercase tracking-wider mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-brand-card)] p-3 rounded-full border border-gray-800 text-[var(--color-brand-orange)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-inter text-sm uppercase tracking-widest text-gray-500 mb-1">Phone</p>
                  <a href="tel:+919391705935" className="font-oswald text-xl hover:text-[var(--color-brand-orange)] transition-colors">
                    +91 93917 05935
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-brand-card)] p-3 rounded-full border border-gray-800 text-[var(--color-brand-orange)]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-inter text-sm uppercase tracking-widest text-gray-500 mb-1">WhatsApp</p>
                  <a href="https://wa.me/919391705935" target="_blank" rel="noopener noreferrer" className="font-oswald text-xl hover:text-[var(--color-brand-orange)] transition-colors">
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-brand-card)] p-3 rounded-full border border-gray-800 text-[var(--color-brand-orange)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-inter text-sm uppercase tracking-widest text-gray-500 mb-1">Email</p>
                  <a href="mailto:skypilot.droneknl@gmail.com" className="font-oswald text-xl hover:text-[var(--color-brand-orange)] transition-colors break-all">
                    skypilot.droneknl@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-brand-card)] p-3 rounded-full border border-gray-800 text-[var(--color-brand-orange)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-inter text-sm uppercase tracking-widest text-gray-500 mb-1">Location</p>
                  <p className="font-oswald text-xl">Kurnool, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Google Maps Iframe */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122557.7371583344!2d77.95471415254128!3d15.836109968434698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e76a6e2e28fb%3A0xc6cb5a793a388b39!2sKurnool%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--color-brand-card)] p-8 md:p-10 rounded-3xl border border-gray-800">
            <h3 className="font-oswald text-2xl uppercase tracking-wider mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-inter text-sm uppercase tracking-widest text-gray-400 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-inter text-sm uppercase tracking-widest text-gray-400 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="service" className="block font-inter text-sm uppercase tracking-widest text-gray-400 mb-2">Service Interested In *</label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors appearance-none"
                >
                  <option value="" disabled>Select a service</option>
                  {services.map((svc, idx) => (
                    <option key={idx} value={svc}>{svc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-inter text-sm uppercase tracking-widest text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className="w-full flex items-center justify-center gap-2 bg-[var(--color-brand-orange)] text-[var(--color-brand-dark)] px-6 py-4 rounded-lg font-oswald uppercase tracking-widest font-bold hover:bg-orange-600 hover:text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-[var(--color-brand-dark)] border-t-transparent rounded-full animate-spin"></div>
                ) : submitStatus === "success" ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
