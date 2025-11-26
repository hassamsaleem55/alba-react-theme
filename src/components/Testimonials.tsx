import MotionReveal from "./framer-motion/motion-reveal";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "London, UK",
      rating: 5,
      text: "Motors Hub provided exceptional service throughout my first car purchase. The team was incredibly patient, explaining every detail and helping me find the perfect vehicle within my budget. I'm extremely satisfied with my Honda Civic and the entire experience.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      car: "Honda Civic 2023"
    },
    {
      name: "Michael Chen",
      location: "Manchester, UK", 
      rating: 5,
      text: "Outstanding service from start to finish! I was looking for a reliable family SUV and the team at Motors Hub went above and beyond. Excellent financing options and the after-sales support has been exceptional.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      car: "BMW X5 2022"
    },
    {
      name: "Emma Thompson",
      location: "Birmingham, UK",
      rating: 5, 
      text: "I've purchased three vehicles from Motors Hub over the past 8 years. Their transparency, competitive pricing, and genuine care for customers keeps me coming back. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      car: "Mercedes C-Class 2023"
    },
    {
      name: "James Wilson",
      location: "Leeds, UK",
      rating: 5,
      text: "The digital buying experience was seamless. I browsed online, scheduled a test drive, and completed everything efficiently. The car was exactly as described and the handover process was smooth.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", 
      car: "Tesla Model 3 2023"
    },
    {
      name: "Lisa Rodriguez",
      location: "Liverpool, UK",
      rating: 5,
      text: "Motors Hub helped me trade in my old car and upgrade to a newer model. The valuation was fair, the process was quick, and I drove away the same day. Exceptional customer service throughout!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      car: "Audi A4 2022"
    },
    {
      name: "David Parker",
      location: "Newcastle, UK",
      rating: 5,
      text: "As someone who was nervous about buying a used car, Motors Hub put all my concerns to rest. The comprehensive inspection report and warranty gave me complete peace of mind. Exceptional professional service throughout.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      car: "Ford Focus 2021"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal preset="fadeIn">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="mb-4">What Our Customers Say</h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Real stories from real customers who found their perfect vehicle with Motors Hub
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <MotionReveal key={testimonial.name} preset="slideUp" delay={index * 0.1}>
              <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/60 transition-colors" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-1 group-hover:text-gray-900 transition-colors">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-primary/30 transition-all"
                    />
                    <div className="flex-1">
                      <h6 className="group-hover:text-primary transition-colors">{testimonial.name}</h6>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="mt-3 inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {testimonial.car}
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal preset="fadeIn" delay={0.8}>
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-primary/10 max-w-4xl mx-auto">
              <h3 className="mb-4 text-primary">Join Our Happy Customers</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ready to become our next success story? Experience the Motors Hub difference and discover 
                why thousands of customers trust us with their automotive needs.
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">4.9/5</div>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">10,000+</div>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">98%</div>
                  <p className="text-sm text-gray-600">Would Recommend</p>
                </div>
              </div>

              <button className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium">
                Start Your Journey Today
              </button>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}