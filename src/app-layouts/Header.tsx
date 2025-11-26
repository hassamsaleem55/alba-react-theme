// src/components/Header.tsx
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Stock", href: "/stock" },
    { name: "Finance", href: "/finance" },
    { name: "About Us", href: "/about-us" },
    { name: "Warranty", href: "/warranty" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-xl border-b border-white/20 fixed top-0 z-50 shadow-lg">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 flex items-center justify-between">
        {/* Logo */}  
        <Link to="/" className="shrink-0 group">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 sm:w-11 lg:w-14 h-9 sm:h-11 lg:h-14 bg-linear-to-br from-primary via-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 border border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-white font-black text-base sm:text-lg lg:text-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-300" style={{fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif', fontWeight: '900', letterSpacing: '-0.02em', textShadow: '0 2px 8px rgba(0,0,0,0.4)'}}>M</span>
                <div className="absolute -top-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 bg-white/20 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
            </div>
            <div className="hidden sm:block">
              <h6 className="text-gray-900 group-hover:text-primary transition-colors duration-300 font-bold tracking-tight mb-0 text-sm sm:text-base lg:text-lg">
                Motors Hub
              </h6>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bg-gray-50/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-100/50 shadow-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative px-4 xl:px-5 py-2.5 xl:py-3 rounded-xl transition-all duration-300 text-sm xl:text-base font-medium overflow-hidden group ${
                isActive(item.href)
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "hover:bg-white/80 text-gray-700 hover:text-primary hover:shadow-md hover:scale-105"
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {!isActive(item.href) && (
                <div className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="relative group p-3 rounded-2xl bg-gray-50/80 hover:bg-white text-gray-600 hover:text-primary transition-all duration-300 hover:shadow-md hover:scale-105 border border-gray-100/50">
              <Heart className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                0
              </div>
            </button>
            <button className="px-4 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm">
              Contact Us
            </button>
          </div>
          
          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden relative group p-3 sm:p-3.5 rounded-2xl bg-gray-50/80 hover:bg-white text-gray-600 hover:text-primary transition-all duration-300 hover:shadow-md active:scale-95 touch-manipulation border border-gray-100/50 min-w-12 min-h-12"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <div className={`absolute transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-0" : "rotate-0 -translate-y-1.5"
              }`}>
                <div className="w-4 h-0.5 bg-current"></div>
              </div>
              <div className={`absolute transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}>
                <div className="w-4 h-0.5 bg-current"></div>
              </div>
              <div className={`absolute transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 translate-y-0" : "rotate-0 translate-y-1.5"
              }`}>
                <div className="w-4 h-0.5 bg-current"></div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`w-full lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100/50 transition-all duration-500 ease-out overflow-hidden shadow-xl ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 sm:px-5 py-4 sm:py-4.5 rounded-2xl transition-all duration-300 touch-manipulation font-medium text-sm sm:text-base min-h-12 ${
                isActive(item.href)
                  ? "bg-primary text-white shadow-lg scale-[0.98]"
                  : "hover:bg-primary/5 hover:text-primary text-gray-700 hover:scale-[0.98] active:scale-95"
              }`}
              style={{
                animationDelay: isOpen ? `${index * 50}ms` : '0ms',
                animation: isOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
              }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="pt-3 mt-3 border-t border-gray-100/50 space-y-2">
            <button className="w-full flex items-center gap-3 text-gray-700 px-4 py-3.5 rounded-2xl hover:bg-primary/5 hover:text-primary transition-all duration-300 touch-manipulation font-medium group">
              <div className="relative">
                <Heart className="w-5 h-5 transition-transform group-hover:scale-110" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary text-white text-xs rounded-full flex items-center justify-center scale-75">
                  0
                </div>
              </div>
              <span>Saved Cars</span>
            </button>
            <button className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-3.5 rounded-2xl transition-all duration-300 font-medium hover:scale-[0.98] active:scale-95">
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
