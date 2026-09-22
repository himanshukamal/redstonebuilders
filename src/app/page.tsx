import BrandImageCarousel from "./components/BrandImageCarousel";
import CostEstimation from "./components/CostEstimation";
import Header from "./components/Header";
import HeroSection from "./components/heroSection";

export default function Home() {
  return (
    <div className="">
      <Header />     
      <HeroSection />
      <BrandImageCarousel />
      <CostEstimation />
    </div>
  );
}
