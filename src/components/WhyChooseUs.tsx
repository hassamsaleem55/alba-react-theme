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
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal preset="fadeIn">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="mb-4">Why We're the Right Choice for You</h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              With over 15 years of excellence in automotive retail, we've perfected every aspect of the car buying experience
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <MotionReveal key={reason.title} preset="slideUp" delay={index * 0.1}>
                <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h5 className="mb-3 group-hover:text-primary transition-colors">{reason.title}</h5>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>

        <MotionReveal preset="fadeIn" delay={0.8}>
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-primary/10 max-w-4xl mx-auto">
              <h3 className="mb-4 text-primary">Ready to Experience the Difference?</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Join thousands of satisfied customers who chose Motors Hub for their automotive needs. 
                Let us show you why we're the trusted choice for quality vehicles and exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium">
                  Browse Our Inventory
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-medium">
                  Schedule a Test Drive
                </button>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}