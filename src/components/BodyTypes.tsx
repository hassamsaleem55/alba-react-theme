import MotionReveal from "./framer-motion/motion-reveal";
import { Truck, Car, Trophy, Wind, Building, ShoppingCart } from "lucide-react";

export default function BodyTypes() {
  const bodyTypes = [
    { 
      name: "SUV", 
      icon: Building, 
      description: "Spacious and versatile", 
      count: "150+ Cars",
      bgColor: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600"
    },
    { 
      name: "Sedan", 
      icon: Car, 
      description: "Classic and elegant", 
      count: "120+ Cars",
      bgColor: "from-green-50 to-emerald-50",
      iconColor: "text-green-600"
    },
    { 
      name: "Hatchback", 
      icon: Car, 
      description: "Compact and efficient", 
      count: "95+ Cars",
      bgColor: "from-orange-50 to-amber-50",
      iconColor: "text-orange-600"
    },
    { 
      name: "Coupe", 
      icon: Trophy, 
      description: "Sporty and stylish", 
      count: "68+ Cars",
      bgColor: "from-red-50 to-rose-50",
      iconColor: "text-red-600"
    },
    { 
      name: "Convertible", 
      icon: Wind, 
      description: "Open-air luxury", 
      count: "42+ Cars",
      bgColor: "from-purple-50 to-violet-50",
      iconColor: "text-purple-600"
    },
    { 
      name: "Truck", 
      icon: Truck, 
      description: "Powerful and rugged", 
      count: "85+ Cars",
      bgColor: "from-gray-50 to-slate-50",
      iconColor: "text-gray-600"
    },
    { 
      name: "Station Wagon", 
      icon: ShoppingCart, 
      description: "Family-friendly space", 
      count: "38+ Cars",
      bgColor: "from-teal-50 to-cyan-50",
      iconColor: "text-teal-600"
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Header Section - 1 column */}
          <div className="lg:col-span-3">
            <MotionReveal preset="fadeIn">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Vehicle Categories
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Find Your Perfect <span className="text-primary">Vehicle Type</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  From city commuters to family adventures, explore our diverse range of vehicles designed for every lifestyle and need.
                </p>
              </div>
            </MotionReveal>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          {bodyTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <MotionReveal key={type.name} preset="slideUp" delay={index * 0.1}>
                <div className={`group cursor-pointer bg-linear-to-br ${type.bgColor} rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-white/50`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-white/90 shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 ${type.iconColor}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-gray-800">{type.name}</h4>
                  <p className="text-sm text-gray-600 mb-4 group-hover:text-gray-700">{type.description}</p>
                  <div className="inline-flex items-center justify-center bg-white/80 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-white group-hover:text-primary transition-all duration-300">
                    {type.count}
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <MotionReveal preset="fadeIn" delay={0.8}>
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
              <div className="text-left">
                <h4 className="font-bold text-gray-900 mb-1">Still unsure about the right vehicle type?</h4>
                <p className="text-sm text-gray-600">Our experts can help you choose the perfect match</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold hover:scale-105 whitespace-nowrap">
                  Get Recommendations
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:border-primary hover:text-primary transition-all duration-300 font-medium hover:scale-105 whitespace-nowrap">
                  View All Types
                </button>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}