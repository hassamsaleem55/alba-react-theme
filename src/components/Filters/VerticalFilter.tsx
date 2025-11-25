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
    <div className="bg-white w-full shadow-2xl shadow-black/10 border border-gray-200/30 rounded-3xl ring-1 ring-black/5 p-4 flex flex-col gap-2">
      {/* Vertical Filter Buttons */}
      {filters.map((filter) => (
        <div key={filter.id}>
          <button
            onClick={() => toggleFilter(filter.id)}
            className={`w-full px-4 py-3 border border-gray-200 flex items-center justify-between rounded-2xl transition-all duration-300 ease-out group touch-manipulation 
              ${
              activeFilter === filter.id
                ? "bg-linear-to-br from-blue-50/80 to-indigo-50/80 shadow-inner"
                : "hover:bg-white/60 hover:shadow-sm active:bg-blue-50/30"
            }
            `}
          >
            <div className="flex flex-col">
              <span className="text-start text-gray-700 text-xs md:text-sm tracking-wider truncate w-full group-hover:text-gray-900 transition-colors">
                {filter.label}
              </span>
              {selectedOptions[filter.id]?.length > 0 && (
                <span className="text-[10px] text-blue-600 rounded-full mt-1">
                  {selectedOptions[filter.id].length} selected
                </span>
              )}
            </div>

            <div
              className={`transition-all duration-300 ease-out p-1.5 md:p-1 rounded-full group-hover:bg-white/50 shrink-0 ${
                activeFilter === filter.id ? "rotate-180 bg-blue-100/50" : ""
              }`}
            >
              <ChevronDown className="w-4 h-4 md:w-4 md:h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
          </button>

          {/* Dropdown Panel (Opens Below Each Filter) */}
          {activeFilter === filter.id && (
            <div className="absolute left-4 right-4 z-50 mt-1 p-3 md:p-4 bg-white backdrop-blur-lg border border-gray-200/30 shadow-2xl shadow-black/10 ring-1 ring-black/5 rounded-2xl animate-in slide-in-from-top-2 duration-500 ease-out">
              <div className="flex flex-wrap gap-2">
                {filter.options.map((option) => {
                  const isSelected =
                    selectedOptions[filter.id]?.includes(option);
                  return (
                    <button
                      key={option}
                      onClick={() => toggleOption(filter.id, option)}
                      className={`px-3 md:px-2 py-2 text-xs md:text-sm rounded-2xl border transition-all duration-200 text-center touch-manipulation ${
                        isSelected
                          ? "border-blue-400 bg-linear-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-md ring-2 ring-blue-200/50"
                          : "border-gray-200 hover:border-gray-300 hover:bg-white active:bg-gray-50 text-gray-700 hover:shadow-sm"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Footer Actions */}
              {/* <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 gap-3 md:gap-0 min-h-12"> */}
              <div className="flex gap-2 mt-8 md:gap-2 md:ml-auto">
                <button
                  onClick={clearFilter}
                  className="flex-1 px-4 py-3 md:py-2 border border-gray-400 text-gray-600 rounded-2xl hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 active:bg-gray-100 transition-all duration-300 ease-out backdrop-blur-sm text-xs md:text-sm touch-manipulation"
                >
                  Clear Filters
                </button>
                <button className="flex-1 px-4 py-3 md:py-2 bg-linear-to-r from-gray-900 via-black to-gray-900 text-white rounded-2xl hover:from-gray-800 hover:to-gray-800 active:from-gray-900 active:to-gray-900 transition-all duration-300 ease-out shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 text-xs md:text-sm touch-manipulation">
                  <Search className="w-4 h-4" /> Search Cars
                </button>
              </div>
              {/* </div> */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
