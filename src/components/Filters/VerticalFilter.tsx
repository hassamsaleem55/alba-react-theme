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
    <div className="relative bg-white/95 backdrop-blur-xl w-full shadow-2xl border border-white/40 rounded-3xl ring-2 ring-primary/30 p-4 sm:p-5 flex flex-col gap-3 overflow-visible z-30">
      {/* <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl"></div> */}
      {/* Vertical Filter Buttons */}
      {filters.map((filter) => (
        <div key={filter.id}>
          <button
            onClick={() => toggleFilter(filter.id)}
            className={`relative w-full px-4 sm:px-5 py-4 sm:py-5 border-2 flex items-center justify-between rounded-2xl transition-all duration-400 ease-out group touch-manipulation overflow-hidden min-h-16 sm:min-h-20 ${
              activeFilter === filter.id
                ? "border-primary bg-white/80 shadow-xl ring-2 ring-primary/30 scale-[0.98]"
                : "border-gray-200/60 bg-white/60 hover:bg-white/80 hover:border-primary/50 hover:shadow-lg active:scale-[0.97]"
            }`}
          >
            <div className={`absolute inset-0 transition-all duration-400 ${
              activeFilter === filter.id
                ? "bg-linear-to-r from-primary/10 via-primary/5 to-transparent opacity-100"
                : "bg-linear-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100"
            }`}></div>
            
            <div className="flex flex-col flex-1 min-w-0">
              <span className={`text-start text-sm sm:text-base font-semibold tracking-wide truncate transition-all duration-300 ${
                activeFilter === filter.id
                  ? "text-primary"
                  : "text-gray-700 group-hover:text-primary"
              }`}>
                {filter.label}
              </span>
              {selectedOptions[filter.id]?.length > 0 && (
                <div className="mt-1.5 flex items-center">
                  <span className="text-xs text-primary font-semibold">
                    {selectedOptions[filter.id].length} selected
                  </span>
                </div>
              )}
            </div>

            <div className={`transition-all duration-400 ease-out p-2 rounded-xl shrink-0 ${
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
            <div className="absolute left-4 right-4 z-40 mt-2 p-5 sm:p-6 bg-white/98 backdrop-blur-2xl border border-white/40 shadow-2xl ring-2 ring-primary/30 rounded-3xl animate-in slide-in-from-top-4 duration-700 ease-out">
              {/* <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl"></div> */}
              
              <div className="space-y-5">
                <div className="flex flex-wrap gap-3">
                  {filter.options.map((option) => {
                    const isSelected =
                      selectedOptions[filter.id]?.includes(option);
                    return (
                      <button
                        key={option}
                        onClick={() => toggleOption(filter.id, option)}
                        className={`px-4 py-2 text-xs md:text-sm rounded-2xl transition-all duration-400 text-center font-medium relative overflow-hidden group touch-manipulation ${
                        isSelected
                          ? "shadow-xl ring-1 ring-primary/40 scale-105"
                          : "border hover:border-primary/60 text-gray-700 hover:text-primary shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                      }`}
                      >
                        {/* <div className={`inset-0 transition-all duration-400 ${
                          isSelected
                            ? "bg-primary"
                            : "bg-linear-to-r from-primary/0 via-primary/10 to-primary/0 scale-x-0 group-hover:scale-x-100"
                        }`}></div> */}
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Footer Actions */}
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={clearFilter}
                    className="flex-1 p-3 border-2 border-gray-200/60 bg-white/80 text-gray-600 rounded-2xl hover:bg-white hover:border-primary/50 hover:text-primary active:scale-95 transition-all duration-300 ease-out text-sm sm:text-base touch-manipulation font-semibold backdrop-blur-sm"
                  >
                    Clear
                  </button>
                  <button className="flex-1 p-3 bg-linear-to-r from-primary to-primary/90 text-white rounded-2xl hover:shadow-2xl active:scale-95 transition-all duration-300 ease-out flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation font-semibold">
                    <Search className="w-4 h-4" />
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
