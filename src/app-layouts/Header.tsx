// src/components/Header.tsx
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Stock", href: "/stock" },
    { name: "Finance", href: "/finance" },
    { name: "About Us", href: "/about-us" },
    { name: "Warranty", href: "/warranty" },
  ];

  return (
    <header className="w-full bg-white fixed top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}  
        <div className="text-2xl font-bold cursor-pointer shrink-0">
          <img
            src="https://api.motors-hub.co.uk/Company/Images/968ec489-8e6c-4bc1-8af0-e2130d070c45/CompanyLogo/COM-100659653731.png"
            alt="Logo"
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 px-3 lg:px-4 py-2 lg:py-3 rounded-full hover:bg-gray-100 hover:text-blue-600 transition-all duration-200 text-sm lg:text-base font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="hidden lg:block text-gray-600 bg-gray-100 hover:bg-gray-200 p-3 lg:p-4 rounded-2xl transition-colors duration-200">
            <Heart className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-gray-600 bg-gray-100 hover:bg-gray-200 p-3 rounded-2xl transition-all duration-200 touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`w-full md:hidden bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-700 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 transition-all duration-200 font-medium touch-manipulation"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-100 mt-3">
            <button className="w-full flex items-center justify-center gap-2 text-gray-700 px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 transition-all duration-200 font-medium touch-manipulation">
              <Heart className="w-5 h-5" />
              <span>Favorites</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
