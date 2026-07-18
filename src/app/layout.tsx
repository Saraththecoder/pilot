import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkyPilot Drone Services | Aerial Cinematography in Kurnool, Andhra Pradesh",
  description: "SkyPilot Drone Services offers professional drone photography, videography, surveying, inspections, and mapping services in Kurnool, Andhra Pradesh.",
  openGraph: {
    images: ["/logo.png"],
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import SplashScreen from "@/components/SplashScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} antialiased`}
    >
      <body className="bg-[var(--color-brand-dark)] text-white flex flex-col min-h-screen">
        <SmoothScroll>
          <SplashScreen />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingButtons />
        </SmoothScroll>
      </body>
    </html>
  );
}
