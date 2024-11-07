import AnalysisSection from "@/components/AnalysisSection";
import FinanceSection from "@/components/FinanceSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollingBanner from "@/components/ScrollingBanner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollingBanner />
      <AnalysisSection />
      <FinanceSection />
    </div>
  );
}
