import AnalysisSection from "@/components/AnalysisSection";
import FinanceSection from "@/components/FinanceSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollingBanner from "@/components/ScrollingBanner";
import TestimonialSection from "@/components/TestimonalSection";
import PricingPlan from "@/components/PricingPlan";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollingBanner />
      <AnalysisSection />
      <FinanceSection />
      <TestimonialSection />
      <PricingPlan />
      <Footer />
    </div>
  );
}
