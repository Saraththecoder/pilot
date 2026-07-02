import About from "@/components/About";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="About SkyPilot"
        description="Discover our mission to redefine aerial solutions across India with cutting-edge technology and uncompromising safety."
        bgImage="/frames/ezgif-frame-030.jpg"
      />
      <About />
    </div>
  );
}
