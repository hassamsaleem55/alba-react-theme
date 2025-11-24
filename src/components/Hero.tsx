import HorizontalFilters from "./Filters/HorizontalFilters";
import VerticalFilters from "./Filters/VerticalFilter";

export default function Hero() {
  return (
    <div className="bg-white h-[calc(100vh-5.5rem)] flex justify-center items-center rounded-b-4xl">
      <div className="relative w-full h-full pb-4 md:px-6 md:pb-4">
        <img
          src="images/hero-image.jpg"
          alt="Hero Section"
          className="w-full h-full rounded-4xl object-cover brightness-50"
        />
        <div className="absolute mt-45 inset-0 flex flex-col items-center space-y-4 px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Find Your Dream Car
          </h1>
          <p className="text-white text-center text-lg md:text-2xl">
            Explore our extensive collection of vehicles tailored to your needs.
          </p>
          
          {/* Desktop Filters - Hidden on mobile */}
          <div className="hidden md:flex w-full justify-center">
            <HorizontalFilters />
          </div>
          
          {/* Mobile Filters - Hidden on desktop */}
          <div className="flex md:hidden w-full justify-center">
            <VerticalFilters />
          </div>
        </div>
      </div>
    </div>
  );
}
