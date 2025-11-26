export default function Finance() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="mb-4">Finance Options</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Flexible financing solutions to help you get your dream car
          </p>
        </div>
        
        {/* Finance Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 hover:shadow-md transition-all duration-300">
            <h3 className="mb-3">Car Loans</h3>
            <p className="mb-6">Competitive rates starting from 3.9% APR</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Flexible repayment terms up to 7 years</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Quick approval process</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>No hidden fees</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 hover:shadow-md transition-all duration-300">
            <h3 className="mb-3">Lease Options</h3>
            <p className="mb-6">Drive a new car with lower monthly payments</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Lower down payments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Warranty coverage included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Option to purchase at lease end</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-2xl border border-primary/20 p-6 lg:p-8 text-center">
          <h3 className="mb-4">Get Pre-Approved Today</h3>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Check your eligibility in minutes without affecting your credit score
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}