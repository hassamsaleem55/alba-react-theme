export interface Car {
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
}

export const carsData: Car[] = [
  {
    id: '1',
    name: 'Model S',
    brand: 'Tesla',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop',
    price: 120,
    originalPrice: 150,
    rating: 4.8,
    reviewCount: 342,
    fuelType: 'Electric',
    transmission: 'Automatic',
    seats: 5,
    year: 2023,
    mileage: 12500,
    isLiked: false,
  },
  {
    id: '2',
    name: 'Camry',
    brand: 'Toyota',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
    price: 85,
    rating: 4.6,
    reviewCount: 218,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    seats: 5,
    year: 2022,
    mileage: 25000,
    isLiked: true,
  },
  {
    id: '3',
    name: 'X5',
    brand: 'BMW',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
    price: 180,
    originalPrice: 200,
    rating: 4.7,
    reviewCount: 156,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    seats: 7,
    year: 2023,
    mileage: 8900,
    isLiked: false,
  },
  {
    id: '4',
    name: 'Accord',
    brand: 'Honda',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
    price: 75,
    rating: 4.5,
    reviewCount: 289,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    seats: 5,
    year: 2022,
    mileage: 32000,
    isLiked: false,
  },
  {
    id: '5',
    name: 'Mustang',
    brand: 'Ford',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
    price: 95,
    rating: 4.4,
    reviewCount: 167,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    seats: 4,
    year: 2023,
    mileage: 15000,
    isLiked: true,
  },
  {
    id: '6',
    name: 'Q7',
    brand: 'Audi',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=300&fit=crop',
    price: 160,
    originalPrice: 180,
    rating: 4.6,
    reviewCount: 98,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    seats: 7,
    year: 2023,
    mileage: 11200,
    isLiked: false,
  },
  {
    id: '7',
    name: 'C-Class',
    brand: 'Mercedes',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop',
    price: 140,
    rating: 4.7,
    reviewCount: 234,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    seats: 5,
    year: 2023,
    mileage: 9800,
    isLiked: false,
  },
  {
    id: '8',
    name: 'Prius',
    brand: 'Toyota',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop',
    price: 65,
    rating: 4.3,
    reviewCount: 412,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    seats: 5,
    year: 2022,
    mileage: 28000,
    isLiked: false,
  },
  {
    id: '9',
    name: 'Wrangler',
    brand: 'Jeep',
    image: 'https://images.unsplash.com/photo-1606016872834-27ce072dc2ad?w=400&h=300&fit=crop',
    price: 110,
    originalPrice: 125,
    rating: 4.4,
    reviewCount: 178,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    seats: 5,
    year: 2023,
    mileage: 18000,
    isLiked: true,
  },
  {
    id: '10',
    name: 'Model Y',
    brand: 'Tesla',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop',
    price: 105,
    rating: 4.8,
    reviewCount: 267,
    fuelType: 'Electric',
    transmission: 'Automatic',
    seats: 7,
    year: 2023,
    mileage: 14500,
    isLiked: false,
  },
  {
    id: '11',
    name: 'Civic',
    brand: 'Honda',
    image: 'https://images.unsplash.com/photo-1619976215249-95810b4aad40?w=400&h=300&fit=crop',
    price: 70,
    rating: 4.5,
    reviewCount: 345,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    seats: 5,
    year: 2022,
    mileage: 22000,
    isLiked: false,
  },
  {
    id: '12',
    name: 'A4',
    brand: 'Audi',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
    price: 130,
    originalPrice: 145,
    rating: 4.6,
    reviewCount: 189,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    seats: 5,
    year: 2023,
    mileage: 7600,
    isLiked: true,
  },
  {
    id: '13',
    name: 'Silverado',
    brand: 'Chevrolet',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop',
    price: 125,
    rating: 4.3,
    reviewCount: 134,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    seats: 6,
    year: 2023,
    mileage: 16500,
    isLiked: false,
  },
  {
    id: '14',
    name: 'Leaf',
    brand: 'Nissan',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=300&fit=crop',
    price: 55,
    rating: 4.2,
    reviewCount: 298,
    fuelType: 'Electric',
    transmission: 'Automatic',
    seats: 5,
    year: 2022,
    mileage: 31000,
    isLiked: false,
  },
  {
    id: '15',
    name: '911',
    brand: 'Porsche',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop',
    price: 250,
    originalPrice: 280,
    rating: 4.9,
    reviewCount: 87,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    seats: 2,
    year: 2023,
    mileage: 5200,
    isLiked: true,
  },
  {
    id: '16',
    name: 'Tahoe',
    brand: 'Chevrolet',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=300&fit=crop',
    price: 145,
    rating: 4.4,
    reviewCount: 156,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    seats: 8,
    year: 2022,
    mileage: 19800,
    isLiked: false,
  },
  {
    id: '17',
    name: 'CX-5',
    brand: 'Mazda',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop',
    price: 80,
    rating: 4.5,
    reviewCount: 267,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    seats: 5,
    year: 2022,
    mileage: 24500,
    isLiked: false,
  },
  {
    id: '18',
    name: 'F-150',
    brand: 'Ford',
    image: 'https://images.unsplash.com/photo-1594736797933-d0c9e742d3eb?w=400&h=300&fit=crop',
    price: 115,
    originalPrice: 135,
    rating: 4.6,
    reviewCount: 298,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    seats: 6,
    year: 2023,
    mileage: 13200,
    isLiked: true,
  },
  {
    id: '19',
    name: 'Outback',
    brand: 'Subaru',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=300&fit=crop',
    price: 90,
    rating: 4.4,
    reviewCount: 189,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    seats: 5,
    year: 2022,
    mileage: 27000,
    isLiked: false,
  },
  {
    id: '20',
    name: 'ES',
    brand: 'Lexus',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop',
    price: 155,
    rating: 4.7,
    reviewCount: 145,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    seats: 5,
    year: 2023,
    mileage: 8900,
    isLiked: false,
  },
];

// Utility functions to work with the car data
export const getCarById = (id: string): Car | undefined => {
  return carsData.find(car => car.id === id);
};

export const getCarsByBrand = (brand: string): Car[] => {
  return carsData.filter(car => car.brand.toLowerCase() === brand.toLowerCase());
};

export const getCarsByFuelType = (fuelType: Car['fuelType']): Car[] => {
  return carsData.filter(car => car.fuelType === fuelType);
};

export const getCarsByPriceRange = (minPrice: number, maxPrice: number): Car[] => {
  return carsData.filter(car => car.price >= minPrice && car.price <= maxPrice);
};

export const getCarsBySeats = (seats: number): Car[] => {
  return carsData.filter(car => car.seats === seats);
};

export const getFeaturedCars = (limit = 6): Car[] => {
  return carsData
    .filter(car => car.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

export const getDiscountedCars = (): Car[] => {
  return carsData.filter(car => car.originalPrice && car.originalPrice > car.price);
};

export const searchCars = (query: string): Car[] => {
  const searchTerm = query.toLowerCase();
  return carsData.filter(car => 
    car.name.toLowerCase().includes(searchTerm) ||
    car.brand.toLowerCase().includes(searchTerm)
  );
};