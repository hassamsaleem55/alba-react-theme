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
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal preset="fadeIn">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="mb-4">Our Achievements</h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Recognition and awards that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <MotionReveal key={achievement.title} preset="slideUp" delay={index * 0.1}>
                <div className="group bg-gray-50 hover:bg-white rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-primary/20 hover:-translate-y-2">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-linear-to-r ${achievement.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10" />
                    </div>
                    
                    <div className="mb-2">
                      <h5 className="group-hover:text-primary transition-colors">{achievement.title}</h5>
                      <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mt-2 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {achievement.year}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>

        <MotionReveal preset="fadeIn" delay={0.8}>
          <div className="mt-16">
            <div className="bg-linear-to-r from-primary/10 to-blue-50 rounded-2xl p-6 lg:p-8 text-center border border-primary/20">
              <h3 className="mb-4 text-primary">Awards Drive Us Forward</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Every award and recognition we receive strengthens our commitment to providing exceptional service. 
                These achievements are not just certificates on the wall – they represent thousands of satisfied customers 
                and our team's dedication to automotive excellence.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">15+ Industry Awards</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">4.9/5 Customer Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Award className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">ISO 9001 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}