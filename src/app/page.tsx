import BrandImageCarousel from "./components/BrandImageCarousel";
import CostEstimation from "./components/CostEstimation";
import HeroSection from "./components/heroSection";
import ServicesOverview from "./components/ServicesOverview";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesOverview />
      <BrandImageCarousel />
      <CostEstimation />
    </div>
  );
}
