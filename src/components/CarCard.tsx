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
      className="cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 active:border-blue-200 transition-all duration-300 group shadow-sm hover:shadow-lg active:shadow-md touch-manipulation"
      onClick={handleCardClick}
    >
      {/* Car Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${brand} ${name}`}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Heart Button */}
        <div
          onClick={handleLikeClick}
          className={`absolute top-2 right-2 sm:top-3 sm:right-3 p-2 sm:p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white active:bg-gray-50 transition-all duration-200 cursor-pointer min-w-10 min-h-10 sm:min-w-0 sm:min-h-0 flex items-center justify-center touch-manipulation ${
            isLiked
              ? "text-red-500"
              : "text-gray-600 hover:text-red-500"
          }`}
        >
          <Heart
            size={16}
            className="sm:hidden"
            fill={isLiked ? "currentColor" : "none"}
          />
          <Heart
            size={18}
            className="hidden sm:block"
            fill={isLiked ? "currentColor" : "none"}
          />
        </div>
      </div>

      {/* Car Details */}
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        {/* Car Name & Year */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h6 className="truncate">
              {brand} {name}
            </h6>
          </div>
          <span className="text-gray-500 text-sm sm:text-base shrink-0">
            {year}
          </span>
        </div>

        {/* Pricing */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-gray-500">
              Starts from
            </span>
            <span className="text-gray-500">
              Full Price
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-red-500 text-sm sm:text-lg truncate font-bold">
              £ {Math.round(price * 30).toLocaleString()}
              <span className="text-xs sm:text-sm">/month</span>
            </span>
            <span className="text-gray-900 text-sm sm:text-base shrink-0 font-bold">
              £ {(price * 365).toLocaleString()}
            </span>
          </div>
        </div>

        {/* Odometer */}
        <div className="pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-gray-500">Odometer</span>
            <span className="text-gray-900">
              {mileage?.toLocaleString() || "0"} kms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
