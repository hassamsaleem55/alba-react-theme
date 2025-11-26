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
    <section className="py-16 lg:py-20 bg-linear-to-br from-primary/5 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal preset="fadeIn">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="mb-4">Built on Trust, Bound by Numbers</h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Over a decade of excellence in automotive retail, backed by real results and genuine customer satisfaction
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <MotionReveal key={stat.label} preset="slideUp" delay={index * 0.1}>
                <div className="group text-center bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 mb-6 rounded-2xl bg-gray-50 group-hover:bg-white group-hover:shadow-md group-hover:scale-110 transition-all duration-300 ${stat.iconColor}`}>
                    <Icon className="w-8 h-8 lg:w-10 lg:h-10" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors">
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