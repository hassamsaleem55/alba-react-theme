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
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal preset="fadeIn">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Get answers to the most common questions about buying, financing, and owning a vehicle with Motors Hub
            </p>
          </div>
        </MotionReveal>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <MotionReveal key={index} preset="slideUp" delay={index * 0.05}>
                <div className="bg-gray-50 hover:bg-white border-2 border-transparent hover:border-primary/20 rounded-2xl transition-all duration-300 overflow-hidden group">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 lg:px-8 py-6 flex items-center justify-between text-left transition-all duration-300 group-hover:bg-primary/5"
                  >
                    <h5 className="flex-1 pr-4 group-hover:text-primary transition-colors">
                      {faq.question}
                    </h5>
                    <div className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-primary text-white rotate-180' 
                        : 'bg-gray-200 text-gray-600 group-hover:bg-primary/20 group-hover:text-primary'
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
                    <div className="px-6 lg:px-8 pb-6 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed pt-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>

        <MotionReveal preset="fadeIn" delay={0.6}>
          <div className="mt-16 text-center">
            <div className="bg-linear-to-r from-primary/10 to-blue-50 rounded-2xl p-6 lg:p-8 border border-primary/20">
              <h3 className="mb-4 text-primary">Still Have Questions?</h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our friendly customer service team is here to help 
                with any additional questions or concerns you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium">
                  Contact Support
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-medium">
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}