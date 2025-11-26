import MotionReveal from "./framer-motion/motion-reveal";
import { ArrowRight, Phone, MessageCircle, Calendar, Search, Car, CreditCard, CheckCircle } from "lucide-react";

export default function ReadySetSold() {
  const steps = [
    {
      step: "01",
      title: "Browse & Select",
      description: "Explore our extensive inventory and find your perfect vehicle using our advanced filters.",
      icon: Search,
      iconColor: "text-blue-600"
    },
    {
      step: "02", 
      title: "Schedule Test Drive",
      description: "Book a convenient test drive appointment and experience your chosen vehicle firsthand.",
      icon: Car,
      iconColor: "text-green-600"
    },
    {
      step: "03",
      title: "Secure Financing",
      description: "Get pre-approved with our trusted finance partners and choose the best payment plan.",
      icon: CreditCard,
      iconColor: "text-purple-600"
    },
    {
      step: "04",
      title: "Drive Away Happy",
      description: "Complete the paperwork and drive away in your new vehicle with full warranty coverage.",
      icon: CheckCircle,
      iconColor: "text-yellow-600"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-linear-to-br from-primary to-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal preset="fadeIn">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="mb-4 text-white">Ready. Set. Sold!</h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-blue-100">
              Your journey to owning the perfect car is just four simple steps away
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <MotionReveal key={step.step} preset="slideUp" delay={index * 0.2}>
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 group">
                    <div className="absolute -top-4 left-4 bg-white text-primary font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                      {step.step}
                    </div>
                    <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 mb-6 rounded-2xl bg-white/20 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 ${step.iconColor}`}>
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <h5 className="mb-3 text-white group-hover:text-yellow-200 transition-colors">{step.title}</h5>
                    <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-white/60" />
                    </div>
                  )}
                </div>
              </MotionReveal>
            );
          })}
        </div>

        <MotionReveal preset="fadeIn" delay={0.8}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="mb-4 text-white">Start Your Journey Today</h3>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Ready to find your perfect vehicle? Our expert team is here to guide you every step of the way.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              <div className="bg-white text-primary rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <Phone className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h6 className="mb-2">Call Now</h6>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
              
              <div className="bg-white text-primary rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <MessageCircle className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h6 className="mb-2">Live Chat</h6>
                <p className="text-sm text-gray-600">Get instant help</p>
              </div>
              
              <div className="bg-white text-primary rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <Calendar className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h6 className="mb-2">Book Appointment</h6>
                <p className="text-sm text-gray-600">Schedule visit</p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}