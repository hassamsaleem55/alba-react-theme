import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({ 
  phoneNumber = "447123456789", // UK phone number format
  message = "Hi! I'm interested in your vehicles. Can you help me?"
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        type="button"
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 text-white p-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border border-green-400/20 backdrop-blur-sm animate-pulse hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <MessageCircle className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full animate-ping group-hover:animate-pulse"></div>
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900/90 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"></div>
        </div>
      </div>
    </div>
  );
}