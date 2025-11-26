import { useState } from "react";
import MotionReveal from "./framer-motion/motion-reveal";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What financing options do you offer?",
      answer: "We offer various financing solutions including traditional auto loans, leasing options, and hire purchase agreements. We work with leading financial institutions to provide competitive rates starting from 3.8% APR. Our finance team can help you find the best option based on your credit score and budget requirements."
    },
    {
      question: "Do all vehicles come with a warranty?",
      answer: "Yes, all our vehicles come with a comprehensive warranty. Used cars include a minimum 30-day mechanical warranty, with extended warranty options available up to 24 months. New vehicles come with full manufacturer warranties. We also offer additional protection plans for complete peace of mind."
    },
    {
      question: "Can I trade in my current vehicle?",
      answer: "Absolutely! We accept trade-ins and offer competitive valuations. Our experienced appraisers will assess your vehicle fairly and provide an instant quote. The trade-in value can be used as a down payment toward your new purchase, making the upgrade process seamless and cost-effective."
    },
    {
      question: "How do I schedule a test drive?",
      answer: "Scheduling a test drive is easy! You can book online through our website, call us directly at +1 (555) 123-4567, or visit our showroom. We offer flexible scheduling including evenings and weekends. Test drives typically last 30 minutes and include a thorough vehicle demonstration."
    },
    {
      question: "What inspection process do vehicles undergo?",
      answer: "Every vehicle undergoes our rigorous 150-point inspection covering engine, transmission, brakes, suspension, electrical systems, and more. We provide detailed inspection reports and address any issues before sale. This ensures you receive a reliable, road-ready vehicle with complete transparency about its condition."
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we offer convenient delivery services within a 50-mile radius of our location. For purchases over £15,000, delivery is complimentary. We can deliver to your home, office, or preferred location at a time that suits you. All paperwork can be completed digitally for your convenience."
    },
    {
      question: "What documents do I need to purchase a vehicle?",
      answer: "You'll need a valid driving license, proof of income (recent pay stubs or bank statements), proof of residence (utility bill or lease agreement), and proof of insurance. If financing, additional documentation may be required. Our team will guide you through the complete documentation process."
    },
    {
      question: "Can I reserve a vehicle before purchasing?",
      answer: "Yes, you can reserve any vehicle with a refundable deposit of £500. This holds the car for up to 7 days, giving you time to arrange financing and complete necessary paperwork. The reservation can be made online, over the phone, or in person at our showroom."
    },
    {
      question: "What after-sales support do you provide?",
      answer: "We provide comprehensive after-sales support including warranty service coordination, maintenance reminders, and technical assistance. Our customer service team is available to help with any questions or concerns. We also have partnerships with certified service centers nationwide for convenient maintenance and repairs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl translate-x-24 translate-y-24"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Content - 4 columns */}
          <div className="lg:col-span-4">
            <MotionReveal preset="slideRight">
              <div className="sticky top-8 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white shadow-sm border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Help Center
                  </div>
                  <h2 className="text-left text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Got <span className="text-primary">Questions?</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Find answers to the most common questions about buying, financing, and owning a vehicle with Motors Hub.
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">24/7</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Support Available</h5>
                      <p className="text-sm text-gray-600">Round the clock assistance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="text-green-600 font-bold text-lg">98%</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Issue Resolution</h5>
                      <p className="text-sm text-gray-600">First contact resolution rate</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-white px-8 py-4 rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold hover:scale-105">
                  Contact Support
                </button>
              </div>
            </MotionReveal>
          </div>
          
          {/* Right FAQ List - 8 columns */}
          <div className="lg:col-span-8">
            <MotionReveal preset="slideLeft">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white hover:bg-gray-50/50 border border-gray-200 hover:border-primary/30 rounded-2xl transition-all duration-300 overflow-hidden group shadow-sm hover:shadow-md">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300"
                    >
                      <h5 className="flex-1 pr-4 text-gray-900 group-hover:text-primary transition-colors font-semibold">
                        {faq.question}
                      </h5>
                      <div className={`shrink-0 p-2 rounded-xl transition-all duration-300 ${
                        activeIndex === index 
                          ? 'bg-primary text-white rotate-180' 
                          : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary'
                      }`}>
                        {activeIndex === index ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </button>
                    
                    <div className={`transition-all duration-500 ease-in-out ${
                      activeIndex === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      <div className="px-6 pb-5 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed pt-5">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}