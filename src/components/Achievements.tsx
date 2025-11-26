import MotionReveal from "./framer-motion/motion-reveal";
import { Trophy, Users, Star, Award, Target, Globe } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Dealer of the Year",
      year: "2023",
      description: "Awarded by Automotive Excellence Association for outstanding customer service and sales performance.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Customer Choice Award",
      year: "2022 & 2023",
      description: "Recognized by customers for exceptional service quality and transparent business practices.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Star,
      title: "5-Star Rating Leader",
      year: "2023",
      description: "Maintained highest customer satisfaction rating across all major review platforms.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      year: "2021-2023",
      description: "Three consecutive years of quality excellence certification from Automotive Standards Board.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Sales Performance",
      year: "2023",
      description: "Top 1% nationwide for customer retention and referral rates in automotive retail sector.",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Globe,
      title: "Digital Innovation",
      year: "2023",
      description: "Leading digital transformation in automotive retail with cutting-edge online services.",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <MotionReveal preset="fadeIn">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Awards & Recognition
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Excellence <span className="text-primary">Recognized</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Industry recognition that validates our commitment to automotive excellence
            </p>
          </div>
        </MotionReveal>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <MotionReveal key={achievement.title} preset="slideUp" delay={index * 0.1}>
                <div className="group bg-gray-50 hover:bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br ${achievement.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h5 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{achievement.title}</h5>
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-medium group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {achievement.year}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">
                    {achievement.description.substring(0, 100)}...
                  </p>
                </div>
              </MotionReveal>
            );
          })}
        </div>

        {/* Quick Stats */}
        <MotionReveal preset="fadeIn" delay={0.6}>
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <p className="text-sm text-gray-600">Industry Awards</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <p className="text-sm text-gray-600">Customer Rating</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">ISO</div>
                  <p className="text-sm text-gray-600">9001 Certified</p>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}