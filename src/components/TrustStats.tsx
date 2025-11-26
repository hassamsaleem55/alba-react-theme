import MotionReveal from "./framer-motion/motion-reveal";
import { Users, Award, Car, TrendingUp, Headphones, Building2 } from "lucide-react";

export default function TrustStats() {
  const stats = [
    { number: "10,000+", label: "Happy Customers", icon: Users, iconColor: "text-blue-600" },
    { number: "15+", label: "Years Experience", icon: Award, iconColor: "text-yellow-600" },
    { number: "500+", label: "Cars Sold Monthly", icon: Car, iconColor: "text-green-600" },
    { number: "98%", label: "Customer Satisfaction", icon: TrendingUp, iconColor: "text-purple-600" },
    { number: "24/7", label: "Customer Support", icon: Headphones, iconColor: "text-red-600" },
    { number: "50+", label: "Service Centers", icon: Building2, iconColor: "text-indigo-600" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-800/90 to-gray-900/95"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionReveal preset="fadeIn">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Built on Trust, Driven by Results</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Real numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>
        </MotionReveal>

        {/* Horizontal Stats Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <MotionReveal key={stat.label} preset="slideUp" delay={index * 0.1}>
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-primary/30 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-white group-hover:text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1 group-hover:scale-105 group-hover:text-primary-light transition-all duration-300">
                    {stat.number}
                  </div>
                  <p className="text-gray-300 text-sm font-medium group-hover:text-gray-200 transition-colors">
                    {stat.label}
                  </p>
                </div>
              </MotionReveal>
            );
          })}
        </div>

        <MotionReveal preset="fadeIn" delay={0.8}>
          <div className="mt-16 bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-primary/10">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="mb-4 text-primary">Why These Numbers Matter</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every statistic represents our unwavering commitment to excellence. From our first customer to our ten-thousandth, 
                we've maintained the same dedication to quality, transparency, and exceptional service that has made us a trusted 
                name in automotive retail.
              </p>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}