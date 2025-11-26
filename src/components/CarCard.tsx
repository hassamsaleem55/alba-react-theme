import { Heart } from 'lucide-react';

interface CarCardProps {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  fuelType: 'Gasoline' | 'Electric' | 'Hybrid' | 'Diesel';
  transmission: 'Manual' | 'Automatic';
  seats: number;
  year: number;
  mileage?: number;
  isLiked?: boolean;
  onLike?: () => void;
  onView?: () => void;
}

export default function CarCard({
  id: _id,
  name,
  brand,
  image,
  price,
  year,
  mileage,
  isLiked = false,
  onLike,
  onView,
}: CarCardProps) {
  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLike?.();
  };

  const handleCardClick = () => {
    onView?.();
  };

  return (
    <div 
      className="cursor-pointer bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 hover:border-primary/30 hover:bg-white/90 active:border-primary transition-all duration-500 group shadow-lg hover:shadow-2xl active:shadow-md touch-manipulation hover:-translate-y-1 active:translate-y-0"
      onClick={handleCardClick}
    >
      {/* Car Image */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img
          src={image}
          alt={`${brand} ${name}`}
          className="w-full h-44 sm:h-52 lg:h-48 object-cover group-hover:scale-110 transition-all duration-700 ease-out"
        />

        {/* Heart Button */}
        <div
          onClick={handleLikeClick}
          className={`absolute top-3 right-3 sm:top-4 sm:right-4 p-2.5 sm:p-3 rounded-2xl bg-white/90 backdrop-blur-md hover:bg-white active:bg-white/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl active:scale-95 hover:scale-105 flex items-center justify-center touch-manipulation border border-white/20 z-20 ${
            isLiked
              ? "text-red-500 ring-2 ring-red-200"
              : "text-gray-600 hover:text-red-500"
          }`}
        >
          <Heart
            size={16}
            className="sm:hidden transition-transform duration-300"
            fill={isLiked ? "currentColor" : "none"}
          />
          <Heart
            size={18}
            className="hidden sm:block transition-transform duration-300"
            fill={isLiked ? "currentColor" : "none"}
          />
        </div>
      </div>

      {/* Car Details */}
      <div className="p-4 sm:p-5 lg:p-4 space-y-3 sm:space-y-4">
        {/* Car Name & Year */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h6 className="truncate group-hover:text-primary transition-colors duration-300 text-gray-900">
              {brand} {name}
            </h6>
          </div>
          <div className="shrink-0 bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium">
            {year}
          </div>
        </div>

        {/* Pricing */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
            <span className="text-gray-500">
              Monthly Payment
            </span>
            <span className="text-gray-500">
              Total Price
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-primary text-lg sm:text-xl font-bold">
                £{Math.round(price * 30).toLocaleString()}
              </span>
              <span className="text-xs text-gray-500">/month</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-gray-900 text-base sm:text-lg font-bold">
                £{(price * 365).toLocaleString()}
              </span>
              <span className="text-xs text-gray-500">full price</span>
            </div>
          </div>
        </div>

        {/* Odometer */}
        <div className="pt-3 border-t border-gray-100/60">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 font-medium">Mileage</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-gray-900">
                {mileage?.toLocaleString() || "0"}
              </span>
              <span className="text-xs text-gray-500">miles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
