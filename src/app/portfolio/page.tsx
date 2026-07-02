import Portfolio from "@/components/Portfolio";
import PageHeader from "@/components/PageHeader";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Our Portfolio"
        description="Explore our gallery of stunning aerial cinematography, high-resolution photography, and precision mapping projects."
        bgImage="/frames/ezgif-frame-090.jpg"
      />
      <Portfolio />
    </div>
  );
}
