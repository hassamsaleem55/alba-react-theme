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
    <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <MotionReveal preset="fadeIn">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Quote className="w-4 h-4" />
              Customer Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Trusted by <span className="text-primary-light">Thousands</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real experiences from customers who found their perfect vehicle with Motors Hub
            </p>
          </div>
        </MotionReveal>
        
        {/* Featured Testimonial */}
        <MotionReveal preset="slideUp">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl font-light text-white leading-relaxed mb-8">
                "{testimonials[0].text}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[0].avatar}
                  alt={testimonials[0].name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-white/30"
                />
                <div>
                  <h4 className="text-xl font-semibold text-white">{testimonials[0].name}</h4>
                  <p className="text-gray-300">{testimonials[0].location}</p>
                  <div className="inline-block bg-primary/20 text-primary-light px-3 py-1 rounded-full text-sm font-medium mt-2">
                    {testimonials[0].car}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
        
        {/* Other Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(1, 6).map((testimonial, index) => (
            <MotionReveal key={testimonial.name} preset="slideUp" delay={index * 0.1}>
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-6 flex-1 group-hover:text-white transition-colors text-sm">
                  "{testimonial.text.substring(0, 150)}..."
                </p>

                {/* Customer Info */}
                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20 group-hover:ring-white/40 transition-all"
                    />
                    <div className="flex-1">
                      <h6 className="text-white font-medium text-sm group-hover:text-primary-light transition-colors">{testimonial.name}</h6>
                      <p className="text-xs text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="mt-2 inline-block bg-white/10 text-gray-300 px-2 py-1 rounded-lg text-xs font-medium">
                    {testimonial.car}
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

        
        {/* Trust Stats */}
        <MotionReveal preset="fadeIn" delay={0.6}>
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
                <p className="text-gray-300 font-medium">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10,000+</div>
                <p className="text-gray-300 font-medium">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <p className="text-gray-300 font-medium">Would Recommend</p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}