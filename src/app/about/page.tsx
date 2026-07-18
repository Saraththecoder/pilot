import AboutHero from "@/components/AboutHero";
import FounderStory from "@/components/FounderStory";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TrustedLeaders from "@/components/TrustedLeaders";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-dark)]">
      <AboutHero />
      <FounderStory />
      <ExperienceTimeline />
      <TrustedLeaders />
    </div>
  );
}
