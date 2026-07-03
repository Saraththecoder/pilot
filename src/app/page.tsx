import Hero from "@/components/Hero";
import About from "@/components/About";
import StatsCounter from "@/components/StatsCounter";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <StatsCounter />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Contact />
    </>
  );
}
