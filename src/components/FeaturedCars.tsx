import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  title = "Featured Cars",
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
      spaceBetween: 16,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
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
    <div className="bg-gray-100 pt-20 sm:pt-28 md:pt-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-0">
        {/* Header */}
        <div
          className="flex items-center justify-between gap-2 mb-4"
        >
          <MotionReveal preset="slideRight">
            <h2>
              {title}
            </h2>
          </MotionReveal>
          <MotionReveal preset="slideLeft">
            <div className="flex items-center gap-2 text-sm md:text-base px-3 py-1 md:px-4 md:py-2 bg-white rounded-4xl hover:gap-3 hover:text-indigo-500 text-gray-700 transition-all duration-200 ease-in-out cursor-pointer">
              See All
              <ChevronRight className="w-4" />
            </div>
          </MotionReveal>
        </div>

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

          {/* Custom Navigation Buttons */}
          {showNavigation && (
            <>
              {/* Desktop Navigation */}
              <div className="featured-cars-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-blue-600 hover:text-white text-gray-700 w-12 h-12 rounded-full shadow-lg transition-all duration-200 items-center justify-center group hidden lg:flex cursor-pointer">
                <ChevronLeft size={20} />
              </div>
              <div className="featured-cars-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-blue-600 hover:text-white text-gray-700 w-12 h-12 rounded-full shadow-lg transition-all duration-200 items-center justify-center group hidden lg:flex cursor-pointer">
                <ChevronRight size={20} />
              </div>

              {/* Mobile Navigation */}
              {/* <div className="lg:hidden flex justify-center mt-4 gap-3">
                <button className="featured-cars-prev bg-white hover:bg-blue-600 hover:text-white text-gray-700 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center touch-manipulation">
                  <ChevronLeft size={18} className="sm:hidden" />
                  <ChevronLeft size={20} className="hidden sm:block" />
                </button>
                <button className="featured-cars-next bg-white hover:bg-blue-600 hover:text-white text-gray-700 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center touch-manipulation">
                  <ChevronRight size={18} className="sm:hidden" />
                  <ChevronRight size={20} className="hidden sm:block" />
                </button>
              </div> */}
            </>
          )}
        </div>
      </div>
      {/* </MotionReveal> */}
    </div>
  );
}
