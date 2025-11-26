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
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-48 h-48 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <MotionReveal preset="fadeIn">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Quote className="w-4 h-4" />
              Customer Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Trusted by <span className="text-primary">Thousands</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Real experiences from customers who found their perfect vehicle with Motors Hub
            </p>
          </div>
        </MotionReveal>
        
        {/* Featured Testimonial */}
        <MotionReveal preset="slideUp">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg lg:text-xl text-white leading-relaxed mb-6">
                "{testimonials[0].text.substring(0, 200)}..."
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[0].avatar}
                  alt={testimonials[0].name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30"
                />
                <div>
                  <h5 className="text-white font-semibold">{testimonials[0].name}</h5>
                  <p className="text-gray-300 text-sm">{testimonials[0].location}</p>
                </div>
                <div className="ml-auto bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {testimonials[0].car}
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(1, 4).map((testimonial, index) => (
            <MotionReveal key={testimonial.name} preset="slideUp" delay={index * 0.1}>
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 text-sm group-hover:text-white transition-colors">
                  "{testimonial.text.substring(0, 120)}..."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20"
                  />
                  <div className="flex-1">
                    <h6 className="text-white font-medium text-sm">{testimonial.name}</h6>
                    <p className="text-xs text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

        
        {/* Trust Stats */}
        <MotionReveal preset="fadeIn" delay={0.4}>
          <div className="text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10,000+</div>
                <p className="text-gray-300 text-sm font-medium">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">4.9★</div>
                <p className="text-gray-300 text-sm font-medium">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <p className="text-gray-300 text-sm font-medium">Would Recommend</p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}