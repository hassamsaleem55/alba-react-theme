export default function Warranty() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="mb-4">Warranty Coverage</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Comprehensive protection for your peace of mind
          </p>
        </div>
        
        {/* Warranty Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 text-center hover:shadow-md transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 mb-6 rounded-2xl bg-primary/10 text-primary">
              <span className="text-2xl lg:text-3xl font-bold">BASIC</span>
            </div>
            <h3 className="mb-3">Basic Warranty</h3>
            <p className="mb-6">Essential coverage for all vehicles</p>
            <ul className="text-left space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>30-day mechanical warranty</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Engine and transmission coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>24/7 roadside assistance</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-linear-to-br from-primary to-blue-600 text-white rounded-2xl shadow-lg p-6 lg:p-8 text-center transform hover:scale-105 transition-all duration-300 border-2 border-primary">
            <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 mb-6 rounded-2xl bg-white/20 border-2 border-white/30">
              <span className="text-xl lg:text-2xl font-bold text-white">PRO</span>
            </div>
            <h3 className="mb-3 text-white">Extended Warranty</h3>
            <p className="mb-6 text-blue-100">Comprehensive protection package</p>
            <ul className="text-left space-y-3 text-blue-50">
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 mt-1">•</span>
                <span>Up to 12 months coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 mt-1">•</span>
                <span>Major components included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 mt-1">•</span>
                <span>Nationwide service network</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-300 mt-1">•</span>
                <span>Rental car assistance</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 text-center hover:shadow-md transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 mb-6 rounded-2xl bg-primary/10 text-primary">
              <span className="text-xl lg:text-2xl font-bold">PREMIUM</span>
            </div>
            <h3 className="mb-3">Premium Warranty</h3>
            <p className="mb-6">Ultimate peace of mind</p>
            <ul className="text-left space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Up to 24 months coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Comprehensive component coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Priority service appointments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Trip interruption benefits</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Coverage Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
          <h3 className="mb-8 text-center">What's Covered</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h5 className="mb-4">Engine & Drivetrain</h5>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Engine block and internal parts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Transmission and differential</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Drive axles and CV joints</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4">Electrical & Electronics</h5>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Starter and alternator</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Electronic control modules</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Wiring harnesses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}