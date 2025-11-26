import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="group bg-primary hover:bg-primary/90 text-white p-3.5 sm:p-2.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border border-primary/20 backdrop-blur-sm touch-manipulation  flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
        </button>
      )}
    </div>
  );
}