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
    <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-r from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Content - 2 columns */}
          <div className="lg:col-span-2">
            <MotionReveal preset="slideRight">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white shadow-sm border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Trusted Manufacturers
                  </div>
                  <h2 className="text-left text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Premium <br className="hidden sm:block" />Automotive <span className="text-primary">Brands</span>
                  </h2>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                    Every vehicle in our showroom comes from manufacturers with decades of automotive excellence and innovation.
                  </p>
                </div>
                
                {/* Brand Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="text-xl font-bold text-primary mb-1">50+</div>
                    <div className="text-xs text-gray-600 font-medium">Brand Partners</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="text-xl font-bold text-primary mb-1">1000+</div>
                    <div className="text-xs text-gray-600 font-medium">Vehicle Models</div>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-white px-8 py-4 rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold hover:scale-105">
                  Explore All Brands
                </button>
              </div>
            </MotionReveal>
          </div>
          
          {/* Right Brands Grid - 3 columns */}
          <div className="lg:col-span-3">
            <MotionReveal preset="slideLeft">
              <div className="space-y-6">

                {/* All Brands - Unified List */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Featured Automotive Brands</h4>
                  
                  {/* Top 4 Premium Brands */}
                  {brands.slice(0, 4).map((brand) => (
                    <div key={brand.name} className="group cursor-pointer bg-white hover:bg-gray-50 border border-gray-200 hover:border-primary/30 rounded-xl p-3.5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-3">
                      <div className="w-11 h-11 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all duration-300 shrink-0">
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors">{brand.name}</h5>
                        <p className="text-xs text-gray-600">Premium manufacturer</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-primary">{brand.count.split('+')[0]}+</div>
                        <div className="text-xs text-gray-500 font-medium">Cars</div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Divider */}
                  <div className="flex items-center gap-3 my-4">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="text-xs text-gray-500 font-medium">More Brands</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                  </div>
                  
                  {/* Additional Brands - Compact Style */}
                  {brands.slice(4).map((brand) => (
                    <div key={brand.name} className="group cursor-pointer bg-white hover:bg-gray-50 border border-gray-200 hover:border-primary/30 rounded-lg p-3 transition-all duration-300 hover:shadow-sm flex items-center gap-3">
                      <div className="w-9 h-9 bg-gray-50 rounded-md flex items-center justify-center group-hover:bg-white transition-colors shrink-0">
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          className="w-4 h-4 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h6 className="font-medium text-sm group-hover:text-primary transition-colors">{brand.name}</h6>
                      </div>
                      <div className="text-xs text-gray-500 font-medium">{brand.count}</div>
                    </div>
                  ))}
                </div>


              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}