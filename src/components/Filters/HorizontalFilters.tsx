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
    <div className="relative bg-white max-w-7xl shadow-2xl shadow-black/10 rounded-3xl overflow-visible ring-1 ring-black/5">
      {/* Filter Buttons */}
      <div className="flex divide-x divide-gray-200/50 rounded-3xl overflow-hidden">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter.id)}
            className={`flex-1 cursor-pointer px-6 py-6 flex gap-16 items-center justify-between group transition-all duration-300 ease-out ${
              activeFilter === filter.id
                ? "bg-linear-to-br from-blue-50/80 to-indigo-50/80 shadow-inner"
                : "hover:bg-white/60 hover:shadow-sm"
            }`}
          >
            <div className="flex flex-col items-start min-w-0 flex-1 justify-center">
              <span className="text-gray-700 text-sm tracking-wider whitespace-nowrap group-hover:text-gray-900 transition-colors">
                {filter.label}
              </span>
              {selectedOptions[filter.id]?.length > 0 && (
                <div className="h-4 flex items-center">
                  <span className="text-xs text-blue-600 whitespace-nowrap bg-blue-100/50 px-2 py-0.5 rounded-full">
                    {selectedOptions[filter.id].length} selected
                  </span>
                </div>
              )}
            </div>
            <div
              className={`transition-all duration-300 ease-out p-1 rounded-full group-hover:bg-white/50 ${
                activeFilter === filter.id ? "rotate-180 bg-blue-100/50" : ""
              }`}
            >
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
          </button>
        ))}
      </div>

      {/* Filter Panels */}
      {activeFilter && (
        <div className="absolute w-full p-6 mt-2 space-y-6 rounded-3xl bg-white backdrop-blur-lg border border-white/20 shadow-2xl shadow-black/10 ring-1 ring-black/5 animate-in slide-in-from-top-2 duration-500 ease-out">
          <div className="flex flex-wrap gap-3">
            {filters
              .find((f) => f.id === activeFilter)
              ?.options.map((option) => {
                const isSelected =
                  selectedOptions[activeFilter]?.includes(option);
                return (
                  <button
                    key={option}
                    onClick={() => toggleOption(activeFilter, option)}
                    className={`px-4 py-3 cursor-pointer text-sm rounded-2xl border transition-all duration-200 text-left hover:shadow-lg hover:scale-105 ${
                      isSelected
                        ? "border-blue-400/50 bg-linear-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-md ring-2 ring-blue-200/50"
                        : "border-gray-200 hover:border-gray-300 hover:bg-white text-gray-700 hover:shadow-sm"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
          </div>
          <div className="flex items-center justify-between">
            {selectedOptions[activeFilter]?.length > 0 && (
              <div className="text-sm text-blue-700 bg-blue-50/80 border border-blue-200/50 px-4 py-2 rounded-full backdrop-blur-sm">
                {selectedOptions[activeFilter].length} option
                {selectedOptions[activeFilter].length > 1 ? "s" : ""} selected
              </div>
            )}
            <div className="flex justify-end items-center gap-3 ml-auto">
              <button
                onClick={clearFilter}
                className="px-5 py-3 cursor-pointer border border-gray-200 text-gray-600 rounded-2xl hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 transition-all duration-300 ease-out backdrop-blur-sm"
              >
                Clear Filter
              </button>
              <button className="px-6 py-3 cursor-pointer bg-linear-to-r from-gray-900 via-black to-gray-900 text-white rounded-2xl hover:from-gray-800 hover:to-gray-800 hover:scale-105 transition-all duration-300 ease-out shadow-xl hover:shadow-2xl flex items-center gap-2">
                <Search className="w-4 h-4" />
                Search Cars
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
