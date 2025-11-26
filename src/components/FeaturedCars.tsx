import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star, Zap } from "lucide-react";
import { getFeaturedCars } from "../data/cars";
import MotionReveal from "./framer-motion/motion-reveal"; // Assumed import for motion-reveal functionality
import CarCard from "./CarCard";

// Import Swiper styles
import "./swiper.css";

interface FeaturedCarsProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  autoplay?: boolean;
  showPagination?: boolean;
  showNavigation?: boolean;
}

export default function FeaturedCars({
  title: _title = "Featured Cars",
  limit = 8,
  autoplay = true,
  showPagination = false,
  showNavigation = true,
}: FeaturedCarsProps) {
  const featuredCars = getFeaturedCars(limit);

  const handleLikeCar = (carId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Liked car:", carId);
  };

  const handleViewCar = (carId: string) => {
    console.log("View car details:", carId);
  };

  const swiperBreakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 12,
      centeredSlides: false,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.5,
      spaceBetween: 16,
      centeredSlides: true,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 28,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 5,
      spaceBetween: 32,
    },
  };

  return (
    <div className="bg-linear-to-br from-white via-blue-50/30 to-primary/5 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Header */}
        <MotionReveal preset="fadeIn">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-primary/10 to-blue-500/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
              <Star className="w-4 h-4 fill-current" />
              Premium Selection
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-primary">Featured</span> Vehicles
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Handpicked premium vehicles from our exclusive collection. Each car is thoroughly inspected and comes with our quality guarantee.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Finance Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Warranty Included</span>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Cars Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={4}
            breakpoints={swiperBreakpoints}
            navigation={
              showNavigation
                ? {
                  prevEl: ".featured-cars-prev",
                  nextEl: ".featured-cars-next",
                }
                : false
            }
            pagination={
              showPagination
                ? {
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet",
                  bulletActiveClass: "swiper-pagination-bullet-active",
                }
                : false
            }
            autoplay={
              autoplay
                ? {
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
                : false
            }
            loop={featuredCars.length > 4}
            className="pb-8 lg:pb-16"
            style={
              {
                "--swiper-pagination-color": "#2563eb",
                "--swiper-pagination-bullet-inactive-color": "#d1d5db",
                "--swiper-pagination-bullet-size": "12px",
              } as React.CSSProperties
            }
          >
            {featuredCars.map((car, index) => (
              <SwiperSlide key={car.id}>
                <MotionReveal preset="slideLeft" delay={index * 0.05}>
                  <CarCard
                    {...car}
                    onLike={() => handleLikeCar(car.id, { stopPropagation: () => {} } as React.MouseEvent)}
                    onView={() => handleViewCar(car.id)}
                  />
                </MotionReveal>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Premium Navigation Buttons */}
          {showNavigation && (
            <>
              {/* Desktop Navigation */}
              <div className="featured-cars-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 bg-white/90 backdrop-blur-sm hover:bg-primary hover:text-white text-gray-700 w-14 h-14 rounded-2xl shadow-xl hover:shadow-2xl border border-white/50 transition-all duration-300 items-center justify-center group hidden lg:flex cursor-pointer hover:scale-110">
                <ChevronLeft size={22} className="group-hover:scale-110 transition-transform" />
              </div>
              <div className="featured-cars-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 bg-white/90 backdrop-blur-sm hover:bg-primary hover:text-white text-gray-700 w-14 h-14 rounded-2xl shadow-xl hover:shadow-2xl border border-white/50 transition-all duration-300 items-center justify-center group hidden lg:flex cursor-pointer hover:scale-110">
                <ChevronRight size={22} className="group-hover:scale-110 transition-transform" />
              </div>

              {/* Mobile Navigation */}
              <div className="lg:hidden flex justify-center mt-8 gap-6">
                <button className="featured-cars-prev bg-white/90 backdrop-blur-sm hover:bg-primary hover:text-white text-gray-700 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-xl hover:shadow-2xl border border-white/50 transition-all duration-300 flex items-center justify-center touch-manipulation group hover:scale-110">
                  <ChevronLeft size={22} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </button>
                <button className="featured-cars-next bg-white/90 backdrop-blur-sm hover:bg-primary hover:text-white text-gray-700 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-xl hover:shadow-2xl border border-white/50 transition-all duration-300 flex items-center justify-center touch-manipulation group hover:scale-110">
                  <ChevronRight size={22} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </>
          )}
        </div>
        
        {/* Premium CTA Section */}
        <MotionReveal preset="fadeIn" delay={0.8}>
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">Can't find what you're looking for?</h4>
                  <p className="text-sm text-gray-600">We have over 1000+ vehicles in our inventory</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-primary text-white px-6 py-3 rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold hover:scale-105 whitespace-nowrap">
                  Browse All Cars
                </button>
                <button className="border-2 border-primary text-primary px-6 py-3 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 font-medium hover:scale-105 whitespace-nowrap">
                  Custom Search
                </button>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </div>
  );
}
