import HorizontalFilters from "./Filters/HorizontalFilters";
import VerticalFilters from "./Filters/VerticalFilter";

export default function Hero() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen pt-24 md:pt-28 pb-12 md:pb-16 px-3 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="images/hero-image.jpg"
            alt="Premium Cars Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"></div>
          <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-primary/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto">
          <div className="space-y-6 mb-8 md:mb-12">
            <div className="space-y-4">
              <h1 className="text-white drop-shadow-2xl">
                Find Your Perfect Vehicle
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
                Discover premium quality vehicles from trusted dealers. 
                Your dream car awaits with competitive pricing and exceptional service.
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/30 shadow-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0"></div>
                <span className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">10,000+ Customers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/30 shadow-lg">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse shrink-0"></div>
                <span className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/30 shadow-lg">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shrink-0"></div>
                <span className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">UK Delivery</span>
              </div>
            </div>
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:flex w-full max-w-5xl">
            <HorizontalFilters />
          </div>

          {/* Mobile CTA Buttons */}
          <div className="flex lg:hidden flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md mx-auto mt-8">
            <button className="flex-1 bg-primary hover:bg-primary/90 text-white px-6 py-4 sm:py-5 rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-95 touch-manipulation">
              Browse Cars
            </button>
            <button className="flex-1 bg-white/15 hover:bg-white/25 border-2 border-white/40 text-white px-6 py-4 sm:py-5 rounded-2xl font-bold text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-95 touch-manipulation">
              Quick Search
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Filters */}
      <div className="lg:hidden relative -mt-6 sm:-mt-8 z-20">
        <div className="mx-3 sm:mx-4 md:mx-6">
          <VerticalFilters />
        </div>
      </div>
    </>
  );
}
