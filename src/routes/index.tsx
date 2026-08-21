import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { JourneyBar } from "@/components/landing/JourneyBar";
import { IntroSection } from "@/components/landing/IntroSection";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { VoiceGuideSection } from "@/components/landing/VoiceGuideSection";
import { VrathamSection } from "@/components/landing/VrathamSection";
import { JourneyStory } from "@/components/landing/JourneyStory";
import { TravelSection } from "@/components/landing/TravelSection";
import { TempleSection } from "@/components/landing/TempleSection";
import { FoodAccommodation } from "@/components/landing/FoodAccommodation";
import { SafetySection } from "@/components/landing/SafetySection";
import { OfflineSection } from "@/components/landing/OfflineSection";
import { AppPreview } from "@/components/landing/AppPreview";
import { JourneyProgressSection } from "@/components/landing/JourneyProgressSection";
import { LanguageSection } from "@/components/landing/LanguageSection";
import { ElderlyMode } from "@/components/landing/ElderlyMode";
import { CommunitySection } from "@/components/landing/CommunitySection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const title = "Sri Sri Shabharish Guruji Ayyappa Yathra";
const description =
  "From My Home to Sabarimala and Safely Back Home — a complete digital companion for your sacred Ayyappa pilgrimage, with Vratham, travel and temple guidance.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayyappa Yathra — Sabarimala Pilgrimage Companion" },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-ivory">
      <Navbar />
      <main>
        <HeroSection />
        <JourneyBar />
        <IntroSection />
        <JourneyStory />
        <FeatureGrid />
        <VoiceGuideSection />
        <VrathamSection />
        <TravelSection />
        <TempleSection />
        <FoodAccommodation />
        <AppPreview />
        <JourneyProgressSection />
        <SafetySection />
        <OfflineSection />
        <LanguageSection />
        <ElderlyMode />
        <CommunitySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
