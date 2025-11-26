export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="mb-4">About Motors Hub</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Your trusted partner in finding the perfect vehicle
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="space-y-6">
            <h3 className="mb-4">Our Story</h3>
            <p className="text-lg leading-relaxed">
              Founded in 2010, Motors Hub has been serving customers with quality vehicles 
              and exceptional service for over a decade. We pride ourselves on transparency, 
              reliability, and customer satisfaction.
            </p>
            <p className="text-lg leading-relaxed">
              Our team of experienced professionals is dedicated to helping you find the 
              perfect vehicle that fits your needs and budget.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
            <h3 className="mb-6">Why Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">✓</span>
                <span className="text-lg">Over 10 years of industry experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">✓</span>
                <span className="text-lg">Comprehensive vehicle inspections</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">✓</span>
                <span className="text-lg">Competitive pricing and financing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">✓</span>
                <span className="text-lg">Excellent after-sales support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg">✓</span>
                <span className="text-lg">Customer satisfaction guarantee</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
          <h3 className="mb-6 text-center">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h5 className="mb-3">Address</h5>
              <p className="text-lg leading-relaxed">123 Motor Street<br />Hub City, HC 12345</p>
            </div>
            <div className="text-center md:text-left">
              <h5 className="mb-3">Phone</h5>
              <p className="text-lg">+1 (555) 123-4567</p>
            </div>
            <div className="text-center md:text-left">
              <h5 className="mb-3">Email</h5>
              <p className="text-lg">info@motorshub.co.uk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}