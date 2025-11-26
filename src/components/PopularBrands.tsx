import MotionReveal from "./framer-motion/motion-reveal";

export default function PopularBrands() {
  const brands = [
    { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg", count: "45+ Cars" },
    { name: "Mercedes", logo: "https://cdn.worldvectorlogo.com/logos/mercedes-benz-9.svg", count: "38+ Cars" },
    { name: "Audi", logo: "https://cdn.worldvectorlogo.com/logos/audi-11.svg", count: "52+ Cars" },
    { name: "Toyota", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/toyota.svg", count: "67+ Cars" },
    { name: "Honda", logo: "https://cdn.worldvectorlogo.com/logos/honda-2.svg", count: "41+ Cars" },
    { name: "Ford", logo: "https://cdn.worldvectorlogo.com/logos/ford-6.svg", count: "35+ Cars" },
    { name: "Tesla", logo: "https://cdn.worldvectorlogo.com/logos/tesla-9.svg", count: "28+ Cars" },
    { name: "Porsche", logo: "https://cdn.worldvectorlogo.com/logos/porsche-1.svg", count: "15+ Cars" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal preset="fadeIn">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Search by Popular Brands</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover your perfect vehicle from the world's most trusted automotive brands
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {brands.map((brand, index) => (
            <MotionReveal key={brand.name} preset="slideUp" delay={index * 0.1}>
              <div className="group cursor-pointer bg-gray-50/80 hover:bg-white border-2 border-transparent hover:border-primary/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 touch-manipulation active:scale-95">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                  />
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-primary transition-colors">{brand.name}</h4>
                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors font-medium">
                  {brand.count}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal preset="fadeIn" delay={0.8}>
          <div className="text-center mt-12 sm:mt-16">
            <button className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base touch-manipulation hover:scale-105 active:scale-95 min-h-12">
              View All Brands
            </button>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}