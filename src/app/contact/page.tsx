import Contact from "@/components/Contact";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Contact Us"
        description="Ready to elevate your project? Get in touch with our team for a free consultation and customized quote."
        bgImage="/frames/ezgif-frame-120.jpg"
      />
      <Contact />
    </div>
  );
}
