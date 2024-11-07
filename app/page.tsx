import AnalysisSection from "@/components/AnalysisSection";
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
    </div>
  );
}
