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
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="container mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <img
            src="https://api.motors-hub.co.uk/Company/Images/968ec489-8e6c-4bc1-8af0-e2130d070c45/CompanyLogo/COM-100659653731.png"
            alt="Logo"
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 px-4 py-3 rounded-full hover:bg-gray-100 transition duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-gray-600 bg-gray-100 p-4 rounded-2xl">
            <Heart className="w-6 h-6" />
          </button>
          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-gray-600 bg-gray-100 p-3 rounded-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {isOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed w-full md:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-4 py-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-sm text-gray-600 px-4 py-3 rounded-full "
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
