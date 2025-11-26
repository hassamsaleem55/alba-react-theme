import MotionReveal from "./framer-motion/motion-reveal";
import { Truck, Car, Trophy, Wind, Building } from "lucide-react";

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
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal preset="fadeIn">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="mb-4">Search by Body Types</h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto">
              Find the perfect vehicle style that matches your lifestyle and needs
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bodyTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <MotionReveal key={type.name} preset="slideUp" delay={index * 0.1}>
                <div className={`group cursor-pointer bg-linear-to-br ${type.bgColor} hover:shadow-xl border-2 border-transparent hover:border-primary/20 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2`}>
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 mb-6 rounded-2xl bg-white/80 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 ${type.iconColor}`}>
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10" />
                    </div>
                    <h4 className="mb-2 group-hover:text-primary transition-colors">{type.name}</h4>
                    <p className="text-gray-600 mb-3 group-hover:text-gray-800 transition-colors">
                      {type.description}
                    </p>
                    <div className="inline-block bg-white/80 px-3 py-1 rounded-full text-sm font-medium text-gray-700 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                      {type.count}
                    </div>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>

        <MotionReveal preset="fadeIn" delay={0.6}>
          <div className="text-center mt-12">
            <button className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium">
              Explore All Types
            </button>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}