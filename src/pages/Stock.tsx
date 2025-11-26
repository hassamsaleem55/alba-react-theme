export default function Stock() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="mb-4">Our Stock</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Browse through our extensive collection of quality vehicles
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 hover:shadow-md transition-all duration-300">
            <h3 className="mb-3">Featured Vehicles</h3>
            <p>Discover our handpicked selection of premium cars</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 hover:shadow-md transition-all duration-300">
            <h3 className="mb-3">Latest Arrivals</h3>
            <p>Check out our newest additions to the inventory</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 hover:shadow-md transition-all duration-300">
            <h3 className="mb-3">Best Deals</h3>
            <p>Don't miss out on our special offers and promotions</p>
          </div>
        </div>
      </div>
    </div>
  );
}