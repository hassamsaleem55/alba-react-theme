import MotionReveal from "./framer-motion/motion-reveal";
import { Shield, Award, Users, Clock, Wrench, Heart } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Guaranteed Quality",
      description: "Every vehicle undergoes comprehensive 150-point inspection ensuring top quality and reliability."
    },
    {
      icon: Award,
      title: "Best Price Promise",
      description: "We guarantee competitive pricing and will match any genuine lower quote from authorized dealers."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified automotive experts provide personalized service and honest advice throughout your journey."
    },
    {
      icon: Clock,
      title: "Quick & Easy Process",
      description: "From browsing to driving away, our streamlined process gets you behind the wheel faster than ever."
    },
    {
      icon: Wrench,
      title: "Comprehensive Warranty",
      description: "All vehicles come with extended warranty options and nationwide service network support."
    },
    {
      icon: Heart,
      title: "Customer-First Approach",
      description: "Your satisfaction is our priority. We're committed to making your car buying experience exceptional."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/3 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start">
          {/* Left Content - 5 columns */}
          <div className="lg:col-span-5">
            <MotionReveal preset="slideRight">
              <div className="sticky top-8 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <Shield className="w-4 h-4" />
                    Premium Service
                  </div>
                  <h2 className="text-left text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Why Choose <br />Motors Hub?
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    With over 15 years of automotive excellence, we've redefined the car buying experience through innovation, transparency, and uncompromising quality.
                  </p>
                </div>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Excellence</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-gray-600 font-medium">Satisfaction Rate</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-primary text-white px-8 py-4 rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold hover:scale-105">
                    Start Your Journey
                  </button>
                  <button className="w-full border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl hover:border-primary hover:text-primary transition-all duration-300 font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </MotionReveal>
          </div>
          
          {/* Right Features Grid - 7 columns */}
          <div className="lg:col-span-7">
            <MotionReveal preset="slideLeft">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {reasons.map((reason) => {
                  const Icon = reason.icon;
                  return (
                    <div key={reason.title} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                      <div className="mb-4">
                        <div className="w-14 h-14 bg-linear-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center group-hover:from-primary group-hover:to-primary/90 transition-all duration-300 mb-4">
                          <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h5 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{reason.title}</h5>
                        <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-800 transition-colors">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}