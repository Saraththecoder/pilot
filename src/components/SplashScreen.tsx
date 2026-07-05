'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide splash screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Drone Graphic */}
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Drone hover animation */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="320" height="320" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  
                  {/* Flared Body Connectors */}
                  <path d="M100 120 L65 85 L85 65 L120 100 Z" fill="#1a1a1a" />
                  <path d="M200 120 L235 85 L215 65 L180 100 Z" fill="#1a1a1a" />
                  <path d="M100 180 L65 215 L85 235 L120 200 Z" fill="#1a1a1a" />
                  <path d="M200 180 L235 215 L215 235 L180 200 Z" fill="#1a1a1a" />
                  
                  {/* Motors */}
                  {/* Top Left */}
                  <circle cx="75" cy="75" r="22" fill="#444" />
                  <circle cx="75" cy="75" r="14" fill="#222" />
                  
                  {/* Top Right */}
                  <circle cx="225" cy="75" r="22" fill="#444" />
                  <circle cx="225" cy="75" r="14" fill="#222" />
                  
                  {/* Bottom Left */}
                  <circle cx="75" cy="225" r="22" fill="#444" />
                  <circle cx="75" cy="225" r="14" fill="#222" />
                  
                  {/* Bottom Right */}
                  <circle cx="225" cy="225" r="22" fill="#444" />
                  <circle cx="225" cy="225" r="14" fill="#222" />

                  {/* Main Central Body */}
                  <rect x="90" y="110" width="120" height="80" rx="6" fill="#1a1a1a" />

                  {/* Company Logo and Text */}
                  <text x="150" y="148" fill="white" fontSize="18" fontFamily="var(--font-oswald), sans-serif" fontWeight="bold" textAnchor="middle" letterSpacing="3">SKYPILOT</text>
                  <text x="150" y="168" fill="#888" fontSize="9" fontFamily="var(--font-inter), sans-serif" letterSpacing="2" textAnchor="middle">DRONE SERVICES</text>

                  {/* Little colorful triangle logo (mimicking the original image) */}
                  <g transform="translate(195, 125) scale(0.6)">
                    <path d="M0 0 L15 0" stroke="#00d2ff" strokeWidth="4" strokeLinecap="round" />
                    <path d="M15 0 L10 12" stroke="#ff0055" strokeWidth="4" strokeLinecap="round" />
                    <path d="M15 0 L20 12" stroke="#ffcc00" strokeWidth="4" strokeLinecap="round" />
                  </g>

                  {/* Orange Arms (Top Layer) */}
                  {/* We use Framer Motion to draw the arms in */}
                  <motion.line 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    x1="110" y1="110" x2="40" y2="40" stroke="#f5851f" strokeWidth="14" strokeLinecap="round" 
                  />
                  <motion.line 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    x1="190" y1="110" x2="260" y2="40" stroke="#f5851f" strokeWidth="14" strokeLinecap="round" 
                  />
                  <motion.line 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    x1="110" y1="190" x2="40" y2="260" stroke="#f5851f" strokeWidth="14" strokeLinecap="round" 
                  />
                  <motion.line 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    x1="190" y1="190" x2="260" y2="260" stroke="#f5851f" strokeWidth="14" strokeLinecap="round" 
                  />

                  {/* Subtle Propeller Spin overlay (Optional, but adds to the loading effect) */}
                  <motion.circle 
                    cx="75" cy="75" r="28" fill="none" stroke="rgba(245, 133, 31, 0.2)" strokeWidth="2" strokeDasharray="20 10"
                    animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ originX: '75px', originY: '75px' }}
                  />
                  <motion.circle 
                    cx="225" cy="75" r="28" fill="none" stroke="rgba(245, 133, 31, 0.2)" strokeWidth="2" strokeDasharray="20 10"
                    animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ originX: '225px', originY: '75px' }}
                  />
                  <motion.circle 
                    cx="75" cy="225" r="28" fill="none" stroke="rgba(245, 133, 31, 0.2)" strokeWidth="2" strokeDasharray="20 10"
                    animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ originX: '75px', originY: '225px' }}
                  />
                  <motion.circle 
                    cx="225" cy="225" r="28" fill="none" stroke="rgba(245, 133, 31, 0.2)" strokeWidth="2" strokeDasharray="20 10"
                    animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ originX: '225px', originY: '225px' }}
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-6 flex flex-col items-center"
            >
              <h2 className="text-black font-inter tracking-[0.4em] text-xl font-medium ml-3">
                LOADING<motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >...</motion.span>
              </h2>
              {/* Progress bar */}
              <div className="w-48 h-1 bg-gray-200 mt-4 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="h-full bg-[var(--color-brand-orange)]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
