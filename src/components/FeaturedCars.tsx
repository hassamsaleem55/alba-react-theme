import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { getFeaturedCars } from "../data/cars";
import {
  StaggerContainer,
  SlideDown,
  //   AnimatedCard,
  HoverScale,
  SlideRight,
} from "./animated";

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
    <StaggerContainer
      className="bg-gray-100 pt-28 md:pt-16"
      staggerChildren={0.08}
      delayChildren={0.1}
    >
      <div className="container mx-auto px-6 md:px-0">
        {/* Header */}
        <SlideDown
          className="flex items-center justify-between gap-2 mb-2 md:mb-4"
          duration={0.8}
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            {title}
          </h2>
          <HoverScale
            className="flex items-center gap-2 text-sm md:text-base px-3 py-1 md:px-4 md:py-2 bg-white rounded-4xl hover:gap-3 hover:text-indigo-500 text-gray-700 font-medium transition-all duration-200 ease-in-out cursor-pointer"
            hoverScale={1.05}
            tapScale={0.95}
          >
            See All
            <ChevronRight className="w-4" />
          </HoverScale>
        </SlideDown>

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
            className="pb-16"
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
                {/* <AnimatedCard */}
                <SlideRight
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-lg"
                  onClick={() => handleViewCar(car.id)}
                  //   animationType="slideRight"
                  delay={index * 0.05}
                  duration={0.7}
                  //   hoverEffect={true}
                  //   hoverScale={1.02}
                  //   hoverY={-8}
                >
                  {/* Car Image */}
                  <div className="relative overflow-hidden">
                    <HoverScale hoverScale={1.05}>
                      <img
                        src={car.image}
                        alt={`${car.brand} ${car.name}`}
                        className="w-full h-48 object-cover"
                      />
                    </HoverScale>

                    {/* Heart Button */}
                    <HoverScale
                      onClick={(e) => handleLikeCar(car.id, e)}
                      className={`absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 cursor-pointer ${
                        car.isLiked
                          ? "text-red-500"
                          : "text-gray-600 hover:text-red-500"
                      }`}
                      hoverScale={1.2}
                      tapScale={0.9}
                    >
                      <Heart
                        size={18}
                        fill={car.isLiked ? "currentColor" : "none"}
                      />
                    </HoverScale>
                  </div>

                  {/* Car Details */}
                  <div className="p-4 space-y-3">
                    {/* Car Name & Year */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">
                          {car.brand} {car.name}
                        </h3>
                      </div>
                      <span className="text-gray-500 font-medium">
                        {car.year}
                      </span>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Starts from
                        </span>
                        <span className="text-sm text-gray-500">
                          Full Price
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <HoverScale
                          className="text-red-500 font-bold text-lg"
                          hoverScale={1.05}
                        >
                          £ {Math.round(car.price * 30).toLocaleString()}
                          /month
                        </HoverScale>
                        <HoverScale
                          className="text-gray-900 font-bold"
                          hoverScale={1.05}
                        >
                          £ {(car.price * 365).toLocaleString()}
                        </HoverScale>
                      </div>
                    </div>

                    {/* Odometer */}
                    <div className="pt-2 border-t border-gray-100">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Odometer</span>
                        <span className="font-medium text-gray-900">
                          {car.mileage?.toLocaleString() || "0"} kms
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* </AnimatedCard> */}
                </SlideRight>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          {showNavigation && (
            <>
              <HoverScale
                className="featured-cars-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-blue-600 hover:text-white text-gray-700 w-12 h-12 rounded-full shadow-lg transition-all duration-200 items-center justify-center group hidden lg:flex"
                hoverScale={1.1}
                tapScale={0.9}
              >
                <ChevronLeft size={20} />
              </HoverScale>
              <HoverScale
                className="featured-cars-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-blue-600 hover:text-white text-gray-700 w-12 h-12 rounded-full shadow-lg transition-all duration-200 items-center justify-center group hidden lg:flex"
                hoverScale={1.1}
                tapScale={0.9}
              >
                <ChevronRight size={20} />
              </HoverScale>
            </>
          )}
        </div>
      </div>
    </StaggerContainer>
  );
}
