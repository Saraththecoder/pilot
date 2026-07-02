import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import PageHeader from "@/components/PageHeader";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Our Services"
        description="Comprehensive aerial solutions tailored to meet the demands of modern industries and creative projects."
        bgImage="/frames/ezgif-frame-060.jpg"
      />
      <Services />
      <WhyChooseUs />
    </div>
  );
}
