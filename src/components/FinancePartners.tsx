import MotionReveal from "./framer-motion/motion-reveal";
import { Award } from "lucide-react";

export default function FinancePartners() {
  const partners = [
    { name: "Santander", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Banco_Santander_Logotipo.svg", rate: "From 3.9% APR" },
    { name: "Chase", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/chase.svg", rate: "From 4.2% APR" },
    { name: "HSBC", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg", rate: "From 4.1% APR" },
    { name: "Bank of America", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/bankofamerica.svg", rate: "From 4.0% APR" },
    { name: "Wells Fargo", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/wellsfargo.svg", rate: "From 3.8% APR" },
    { name: "American Express", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/americanexpress.svg", rate: "From 4.3% APR" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-1">
            <MotionReveal preset="slideRight">
              <div className="sticky top-8 space-y-6">
                <div>
                  <h2 className="text-left mb-4">Finance Your Dream Car</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Partner with trusted lenders to secure competitive rates and flexible payment options.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="text-primary mb-4">Quick Finance Facts</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rates starting from:</span>
                      <span className="font-semibold text-green-600">3.8% APR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Approval time:</span>
                      <span className="font-semibold">24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Term options:</span>
                      <span className="font-semibold">12-84 months</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full bg-primary text-white px-6 py-4 rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                    Get Pre-Approved
                  </button>
                  <button className="w-full border-2 border-gray-200 text-gray-700 px-6 py-4 rounded-2xl hover:border-primary hover:text-primary transition-all duration-300 font-medium">
                    Calculate Payments
                  </button>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Partners Grid */}
          <div className="lg:col-span-2">
            <MotionReveal preset="slideLeft">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Our Lending Partners</h3>
                <p className="text-gray-600">Choose from multiple competitive offers</p>
              </div>
            </MotionReveal>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {partners.map((partner, index) => (
                <MotionReveal key={partner.name} preset="slideUp" delay={index * 0.1}>
                  <div className="group bg-white hover:bg-gray-50 border border-gray-200 hover:border-primary/30 rounded-xl p-4 transition-all duration-300 hover:shadow-md cursor-pointer">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-3 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-white transition-colors">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <h6 className="text-sm font-medium mb-1 group-hover:text-primary transition-colors">{partner.name}</h6>
                      <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        {partner.rate}
                      </div>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
            
            <MotionReveal preset="fadeIn" delay={0.6}>
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="text-blue-900 mb-2">Finance Guarantee</h5>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      Can't get approved? We'll help you improve your credit score with our finance specialists at no extra cost.
                    </p>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}