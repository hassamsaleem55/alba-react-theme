import HorizontalFilters from "./Filters/HorizontalFilters";
import VerticalFilters from "./Filters/VerticalFilter";

export default function Hero() {
  return (
    <>
      <div className="relative flex flex-col md:items-center md:justify-center h-screen pt-16 md:pt-23 md:px-3 pb-4 sm:pb-4 bg-linear-to-b from-white to-transparent md:bg-white md:rounded-b-[4rem]">
        <img
          src="images/hero-image.jpg"
          alt="Hero Section"
          className="w-full h-full rounded-b-[2.5rem] md:rounded-[3.5rem] object-cover brightness-50"
        />
        <div className="absolute flex flex-col center gap-8 mt-30 md:mt-0">
          <div className="flex flex-col items-center text-center px-2">
            <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight">
              Find Your Dream Car
            </h1>
            <p className="text-white text-sm md:text-xl leading-relaxed">
              Explore our extensive collection of vehicles tailored to your
              needs.
            </p>
          </div>
          {/* Desktop Filters - Hidden on mobile */}
          <div className="hidden md:flex w-full">
            <HorizontalFilters />
          </div>
        </div>
      </div>
      <div className="relative rounded-3xl md:hidden -mt-70 bg-white">
        <VerticalFilters />
      </div>
    </>
  );
}
