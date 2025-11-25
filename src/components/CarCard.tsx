import { Heart, Star, Fuel, Users, Settings } from 'lucide-react';

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
  originalPrice,
  rating,
  reviewCount,
  fuelType,
  transmission,
  seats,
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
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${brand} ${name}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Like Button */}
        <button
          onClick={handleLikeClick}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isLiked 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart 
            size={18} 
            fill={isLiked ? 'currentColor' : 'none'}
          />
        </button>

        {/* Discount Badge */}
        {originalPrice && originalPrice > price && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-3">
        {/* Car Name & Brand */}
        <div>
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
            {brand} {name}
          </h3>
          <p className="text-gray-500 text-sm">{year}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="font-semibold text-gray-900">{rating}</span>
          </div>
          <span className="text-gray-500 text-sm">({reviewCount} reviews)</span>
        </div>

        {/* Car Features */}
        <div className="grid grid-cols-3 gap-2 py-2">
          <div className="flex items-center gap-1 text-gray-600">
            <Fuel size={16} />
            <span className="text-sm">{fuelType}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Settings size={16} />
            <span className="text-sm">{transmission}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Users size={16} />
            <span className="text-sm">{seats} seats</span>
          </div>
        </div>

        {/* Mileage */}
        {mileage && (
          <div className="text-gray-600 text-sm">
            {mileage.toLocaleString()} miles
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ${price.toLocaleString()}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-gray-500 text-lg line-through">
                ${originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <span className="text-gray-500 text-sm">per day</span>
        </div>

        {/* Action Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}
