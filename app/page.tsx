export const dynamic = "force-dynamic";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import CityCoverage from "@/components/CityCoverage";
import Testimonials from "@/components/Testimonials";
import PricingTransparency from "@/components/PricingTransparency";
import SafetyFeatures from "@/components/SafetyFeatures";
import AppDownload from "@/components/AppDownload";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <PricingTransparency />
      <SafetyFeatures />
      <CityCoverage />
      <Testimonials />
      <AppDownload />
    </>
  );
}
