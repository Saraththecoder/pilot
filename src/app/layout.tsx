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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-brand-dark)] text-white">
        {children}
      </body>
    </html>
  );
}
