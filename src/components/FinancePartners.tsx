import MotionReveal from "./framer-motion/motion-reveal";

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
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal preset="fadeIn">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="mb-4">Trusted Finance Partners</h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              We work with leading financial institutions to offer you competitive rates and flexible terms for your dream car
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {partners.map((partner, index) => (
            <MotionReveal key={partner.name} preset="slideUp" delay={index * 0.1}>
              <div className="group bg-gray-50 hover:bg-white border-2 border-transparent hover:border-primary/20 rounded-2xl p-6 lg:p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                  />
                </div>
                <h5 className="mb-2 group-hover:text-primary transition-colors">{partner.name}</h5>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {partner.rate}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal preset="fadeIn" delay={0.8}>
          <div className="bg-linear-to-r from-primary/10 to-blue-50 rounded-2xl p-6 lg:p-8 text-center border border-primary/20">
            <h3 className="mb-4 text-primary">Ready to Get Financed?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Get pre-approved in minutes with our instant online application. No impact on your credit score for initial quotes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium">
                Apply for Finance
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 font-medium">
                Calculate Payments
              </button>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}