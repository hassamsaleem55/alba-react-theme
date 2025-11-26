import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function VerticalFilters() {
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
    <div className="bg-white/95 backdrop-blur-xl w-full shadow-2xl border border-white/40 rounded-3xl ring-2 ring-primary/30 p-4 sm:p-5 flex flex-col gap-3 relative overflow-visible z-40">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl"></div>
      {/* Vertical Filter Buttons */}
      {filters.map((filter, filterIndex) => (
        <div key={filter.id} className="relative z-10">
          <button
            onClick={() => toggleFilter(filter.id)}
            className={`w-full px-4 sm:px-5 py-4 sm:py-5 border-2 flex items-center justify-between rounded-2xl transition-all duration-400 ease-out group touch-manipulation relative overflow-hidden min-h-16 sm:min-h-20 ${
              activeFilter === filter.id
                ? "border-primary bg-white/80 shadow-xl ring-2 ring-primary/30 scale-[0.98]"
                : "border-gray-200/60 bg-white/60 hover:bg-white/80 hover:border-primary/50 hover:shadow-lg active:scale-[0.97]"
            }`}
            style={{
              animationDelay: `${filterIndex * 100}ms`,
            }}
          >
            <div className={`absolute inset-0 transition-all duration-400 ${
              activeFilter === filter.id
                ? "bg-linear-to-r from-primary/10 via-primary/5 to-transparent opacity-100"
                : "bg-linear-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100"
            }`}></div>
            
            <div className="flex flex-col relative z-10 flex-1 min-w-0">
              <span className={`text-start text-sm sm:text-base font-semibold tracking-wide truncate transition-all duration-300 ${
                activeFilter === filter.id
                  ? "text-primary"
                  : "text-gray-700 group-hover:text-primary"
              }`}>
                {filter.label}
              </span>
              {selectedOptions[filter.id]?.length > 0 && (
                <div className="mt-1.5 flex items-center">
                  <span className="text-xs text-white bg-linear-to-r from-primary to-primary/80 px-3 py-1 rounded-full font-semibold shadow-lg border border-primary/30">
                    {selectedOptions[filter.id].length} selected
                  </span>
                </div>
              )}
            </div>

            <div className={`relative z-10 transition-all duration-400 ease-out p-2 rounded-xl shrink-0 ${
                activeFilter === filter.id 
                  ? "rotate-180 bg-primary/20 shadow-inner scale-110" 
                  : "group-hover:bg-white/80 group-hover:shadow-sm group-hover:scale-110"
              }`}
            >
              <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                activeFilter === filter.id
                  ? "text-primary"
                  : "text-gray-500 group-hover:text-primary"
              }`} />
            </div>
          </button>

          {/* Dropdown Panel (Opens Below Each Filter) */}
          {activeFilter === filter.id && (
            <div className="absolute left-0 right-0 z-50 mt-3 p-5 sm:p-6 bg-white/98 backdrop-blur-2xl border border-white/40 shadow-2xl ring-2 ring-primary/30 rounded-3xl animate-in slide-in-from-top-4 duration-700 ease-out">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl"></div>
              
              <div className="relative z-10 space-y-5">
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {filter.options.map((option, optionIndex) => {
                    const isSelected =
                      selectedOptions[filter.id]?.includes(option);
                    return (
                      <button
                        key={option}
                        onClick={() => toggleOption(filter.id, option)}
                        className={`px-3 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm rounded-2xl border-2 transition-all duration-400 text-center touch-manipulation font-semibold relative overflow-hidden group min-h-11 min-w-16 ${
                          isSelected
                            ? "border-primary bg-primary text-white shadow-xl ring-2 ring-primary/40 scale-105"
                            : "border-gray-200/60 bg-white/80 hover:border-primary/60 hover:text-primary hover:shadow-lg hover:scale-105 active:scale-95 text-gray-700"
                        }`}
                        style={{
                          animationDelay: `${optionIndex * 50}ms`,
                        }}
                      >
                        <div className={`absolute inset-0 transition-all duration-400 ${
                          isSelected
                            ? "bg-primary"
                            : "bg-linear-to-r from-primary/0 via-primary/10 to-primary/0 scale-x-0 group-hover:scale-x-100"
                        }`}></div>
                        <span className="relative z-10">{option}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Footer Actions */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={clearFilter}
                    className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-gray-200/60 bg-white/80 text-gray-600 rounded-2xl hover:bg-white hover:border-primary/50 hover:text-primary active:scale-95 transition-all duration-300 ease-out text-sm sm:text-base touch-manipulation font-semibold backdrop-blur-sm"
                  >
                    Clear
                  </button>
                  <button className="flex-1 px-4 sm:px-5 py-3.5 sm:py-4 bg-linear-to-r from-primary to-primary/90 text-white rounded-2xl hover:shadow-2xl active:scale-95 transition-all duration-300 ease-out flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation font-semibold min-h-12">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
