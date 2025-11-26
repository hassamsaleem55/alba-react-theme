import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function HorizontalFilters() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string[]>
  >({});

  const filters = [
    {
      id: "make",
      label: "Make",
      options: [
        "Audi",
        "BMW",
        "Mercedes",
        "Toyota",
        "Honda",
        "Ford",
        "Volkswagen",
      ],
    },
    {
      id: "model",
      label: "Model",
      options: ["A3", "A4", "3 Series", "C-Class", "Camry", "Civic", "Golf"],
    },
    {
      id: "price",
      label: "Price Range",
      options: [
        "Under £10k",
        "£10k-£20k",
        "£20k-£30k",
        "£30k-£50k",
        "Over £50k",
      ],
    },
    {
      id: "year",
      label: "Year",
      options: ["2024", "2023", "2022", "2021", "2020", "2019", "Older"],
    },
    {
      id: "fuel",
      label: "Fuel Type",
      options: ["Petrol", "Diesel", "Hybrid", "Electric", "Plug-in Hybrid"],
    },
  ];

  const toggleFilter = (filterId: string) => {
    setActiveFilter(activeFilter === filterId ? null : filterId);
  };

  const toggleOption = (filterId: string, option: string) => {
    setSelectedOptions((prev) => {
      const current = prev[filterId] || [];
      const updated = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, [filterId]: updated };
    });
  };

  const clearFilter = () => {
    if (activeFilter) {
      setSelectedOptions((prev) => ({ ...prev, [activeFilter]: [] }));
    }
  };

  return (
    <div className="relative bg-white/95 backdrop-blur-xl max-w-7xl shadow-2xl border border-white/40 rounded-3xl overflow-visible ring-2 ring-primary/30 z-50">
      {/* Filter Buttons */}
      <div className="flex divide-x divide-gray-100/50 rounded-3xl overflow-hidden">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter.id)}
            className={`flex-1 cursor-pointer px-3 sm:px-4 xl:px-6 py-4 sm:py-5 xl:py-6 flex gap-3 sm:gap-4 xl:gap-6 items-center justify-between group transition-all duration-500 ease-out relative overflow-hidden min-h-16 sm:min-h-20 touch-manipulation ${
              activeFilter === filter.id
                ? "bg-white/80 backdrop-blur-sm shadow-lg scale-[0.98]"
                : "hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-md hover:scale-[0.99] active:scale-[0.97]"
            }`}
          >
            <div className={`absolute inset-0 transition-all duration-500 ${
              activeFilter === filter.id
                ? "bg-linear-to-br from-primary/10 via-primary/5 to-transparent opacity-100"
                : "bg-linear-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100"
            }`}></div>
            
            <div className="flex flex-col items-start min-w-0 flex-1 justify-center relative z-10">
              <span className={`text-sm xl:text-base font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                activeFilter === filter.id
                  ? "text-primary font-semibold"
                  : "text-gray-700 group-hover:text-primary"
              }`}>
                {filter.label}
              </span>
              {selectedOptions[filter.id]?.length > 0 && (
                <div className="mt-1 flex items-center">
                  <span className="text-xs text-white whitespace-nowrap bg-primary px-3 py-1 rounded-full font-medium shadow-lg border border-primary/30">
                    {selectedOptions[filter.id].length} selected
                  </span>
                </div>
              )}
            </div>
            
            <div className={`relative z-10 transition-all duration-500 ease-out p-2 rounded-xl ${
                activeFilter === filter.id 
                  ? "rotate-180 bg-primary/15 shadow-inner scale-110" 
                  : "group-hover:bg-white/80 group-hover:shadow-sm group-hover:scale-110"
              }`}
            >
              <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                activeFilter === filter.id
                  ? "text-primary"
                  : "text-gray-500 group-hover:text-primary"
              }`} />
            </div>
          </button>
        ))}
      </div>

      {/* Filter Panels */}
      {activeFilter && (
        <div className="absolute w-full p-6 xl:p-8 mt-4 space-y-6 xl:space-y-8 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/30 shadow-2xl ring-1 ring-primary/20 animate-in slide-in-from-top-4 duration-700 ease-out z-50">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap gap-3 xl:gap-4">
              {filters
                .find((f) => f.id === activeFilter)
                ?.options.map((option, index) => {
                  const isSelected =
                    selectedOptions[activeFilter]?.includes(option);
                  return (
                    <button
                      key={option}
                      onClick={() => toggleOption(activeFilter, option)}
                      className={`px-4 sm:px-5 xl:px-6 py-3 sm:py-3.5 xl:py-4 cursor-pointer text-sm sm:text-base xl:text-lg rounded-2xl border-2 transition-all duration-400 text-center font-medium relative overflow-hidden group touch-manipulation min-h-12 min-w-20 ${
                        isSelected
                          ? "border-primary bg-primary text-white shadow-xl ring-2 ring-primary/40 scale-105"
                          : "border-gray-200/60 hover:border-primary/60 bg-white/80 text-gray-700 hover:text-primary hover:shadow-lg hover:scale-105 active:scale-95"
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      <div className={`absolute inset-0 transition-all duration-400 ${
                        isSelected
                          ? "bg-primary"
                          : "bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 scale-x-0 group-hover:scale-x-100"
                      }`}></div>
                      <span className="relative z-10">{option}</span>
                    </button>
                  );
                })}
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {selectedOptions[activeFilter]?.length > 0 && (
                <div className="flex items-center gap-2">
                  <div className="text-sm xl:text-base text-white bg-linear-to-r from-primary to-primary/80 px-4 xl:px-5 py-2.5 xl:py-3 rounded-full shadow-lg font-semibold border border-primary/30">
                    {selectedOptions[activeFilter].length} option
                    {selectedOptions[activeFilter].length > 1 ? "s" : ""} selected
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-3 xl:gap-4 ml-auto">
                <button
                  onClick={clearFilter}
                  className="px-5 xl:px-6 py-3 xl:py-3.5 cursor-pointer border-2 border-gray-200/60 bg-white/80 text-gray-600 rounded-2xl hover:bg-white hover:border-primary/50 hover:text-primary transition-all duration-300 ease-out font-medium hover:scale-105 active:scale-95 backdrop-blur-sm"
                >
                  Clear All
                </button>
                <button className="px-5 sm:px-6 xl:px-8 py-3 sm:py-3.5 xl:py-4 cursor-pointer bg-linear-to-r from-primary to-primary/90 text-white rounded-2xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ease-out flex items-center gap-2 xl:gap-3 font-semibold touch-manipulation min-h-12">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6" />
                  <span className="text-sm sm:text-base">Find Vehicles</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
