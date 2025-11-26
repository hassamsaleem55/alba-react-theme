import FeaturedCars from "../components/FeaturedCars";
import Hero from "../components/Hero";
import PopularBrands from "../components/PopularBrands";
import BodyTypes from "../components/BodyTypes";
import TrustStats from "../components/TrustStats";
import FinancePartners from "../components/FinancePartners";
import WhyChooseUs from "../components/WhyChooseUs";
import ReadySetSold from "../components/ReadySetSold";
import Achievements from "../components/Achievements";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCars />
      <PopularBrands />
      <BodyTypes />
      <TrustStats />
      <FinancePartners />
      <WhyChooseUs />
      <ReadySetSold />
      <Achievements />
      <Testimonials />
      <FAQ />
    </>
  );
}
