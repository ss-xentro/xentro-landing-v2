import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FeatureRibbon from "@/components/FeatureRibbon";
import FounderNoteSection from "@/components/FounderNoteSection";
import FeaturesShowcaseSection from "@/components/FeaturesShowcaseSection";
import PricingSection from "@/components/PricingSection";
import ProblemStatementSection from "@/components/ProblemStatementSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />

      {/* Feature Ribbon */}
      <FeatureRibbon />

      {/* Problem Statement Section */}
      <ProblemStatementSection />

      {/* Features Showcase Section */}
      <FeaturesShowcaseSection />

      {/* Founder Note Section */}
      <FounderNoteSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />

      <footer className="border-t border-white/10 bg-[#060b14] px-6 py-8 text-sm text-white/60 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-white">XENTRO</p>
          <p>Building India&apos;s digital entrepreneurship ecosystem.</p>
          <p>© 2026 XENTRO</p>
        </div>
      </footer>
    </div>
  );
}
