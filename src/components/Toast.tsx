import { useState, useEffect } from "react";
import { CheckCircle, X, AlertTriangle, Info } from "lucide-react";
import MotionReveal from "./framer-motion/motion-reveal";

interface ToastProps {
  id: string;
  type: "success" | "error" | "warning" | "info";
  message: string;
  description?: string;
  duration?: number;
  onClose: (id: string) => void;
}

const icons = {
  success: CheckCircle,
  error: X,
  warning: AlertTriangle,
  info: Info,
};

const colors = {
  success: "bg-green-50 border-green-200 text-green-800",
  error: "bg-red-50 border-red-200 text-red-800", 
  warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
  info: "bg-blue-50 border-blue-200 text-blue-800",
};

const iconColors = {
  success: "text-green-600",
  error: "text-red-600",
  warning: "text-yellow-600", 
  info: "text-blue-600",
};

export default function Toast({
  id,
  type,
  message,
  description,
  duration = 5000,
  onClose,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);
  const Icon = icons[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(id), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  if (!isVisible) return null;

  return (
    <MotionReveal preset="slideRight">
      <div className={`max-w-md w-full ${colors[type]} border rounded-2xl p-4 shadow-lg backdrop-blur-sm relative overflow-hidden`}>
        <div className="flex items-start gap-3">
          <div className="shrink-0">
            <Icon className={`w-5 h-5 ${iconColors[type]}`} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm mb-1">{message}</h4>
            {description && (
              <p className="text-sm opacity-80">{description}</p>
            )}
          </div>
          <button
            onClick={() => onClose(id)}
            className="shrink-0 p-1 rounded-full hover:bg-black/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10 rounded-b-2xl overflow-hidden">
          <div 
            className="h-full bg-current opacity-50 transition-all ease-linear"
            style={{
              animation: `shrink ${duration}ms linear forwards`,
            }}
          />
        </div>
      </div>
      
      <style>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </MotionReveal>
  );
}

// Toast container component
interface ToastContainerProps {
  toasts: Array<{
    id: string;
    type: "success" | "error" | "warning" | "info";
    message: string;
    description?: string;
    duration?: number;
  }>;
  onRemove: (id: string) => void;
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-md">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={onRemove}
        />
      ))}
    </div>
  );
}