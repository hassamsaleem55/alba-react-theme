import { motion } from 'framer-motion';
import type { HTMLMotionProps, Variants } from 'framer-motion';
import type { ReactNode } from 'react';

// Common animation variants
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const slideDownVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 }
  }
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Base animated component props
interface AnimatedComponentProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
}

// Reusable animated components
export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  once = true, 
  amount = 0.1,
  className = "",
  ...props 
}: AnimatedComponentProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration, delay }
      }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideUp = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  once = true, 
  amount = 0.1,
  className = "",
  ...props 
}: AnimatedComponentProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, delay }
      }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideDown = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  once = true, 
  amount = 0.1,
  className = "",
  ...props 
}: AnimatedComponentProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    variants={{
      hidden: { opacity: 0, y: -30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration, delay }
      }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideLeft = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  once = true, 
  amount = 0.1,
  className = "",
  ...props 
}: AnimatedComponentProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    variants={{
      hidden: { opacity: 0, x: -30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, delay }
      }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideRight = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  once = true, 
  amount = 0.1,
  className = "",
  ...props 
}: AnimatedComponentProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    variants={{
      hidden: { opacity: 0, x: 30 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration, delay }
      }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  once = true, 
  amount = 0.1,
  className = "",
  ...props 
}: AnimatedComponentProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration, delay }
      }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ 
  children, 
  staggerChildren = 0.1, 
  delayChildren = 0.2,
  once = true, 
  amount = 0.1,
  className = "",
  ...props 
}: AnimatedComponentProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren,
          delayChildren
        }
      }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Hover and interaction components
interface HoverComponentProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  hoverScale?: number;
  hoverY?: number;
  tapScale?: number;
}

export const HoverLift = ({ 
  children, 
  hoverScale = 1.02, 
  hoverY = -8, 
  tapScale = 0.98,
  className = "",
  ...props 
}: HoverComponentProps) => (
  <motion.div
    whileHover={{ 
      scale: hoverScale, 
      y: hoverY,
      transition: { duration: 0.3 }
    }}
    whileTap={{ 
      scale: tapScale,
      transition: { duration: 0.1 }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const HoverScale = ({ 
  children, 
  hoverScale = 1.05, 
  tapScale = 0.95,
  className = "",
  ...props 
}: HoverComponentProps) => (
  <motion.div
    whileHover={{ 
      scale: hoverScale,
      transition: { duration: 0.3 }
    }}
    whileTap={{ 
      scale: tapScale,
      transition: { duration: 0.1 }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Combined animation component for complex scenarios
interface AnimatedCardProps extends AnimatedComponentProps {
  hoverEffect?: boolean;
  hoverScale?: number;
  hoverY?: number;
  animationType?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleIn';
}

export const AnimatedCard = ({ 
  children,
  animationType = 'slideLeft',
  hoverEffect = true,
  hoverScale = 1.02,
  hoverY = -8,
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.1,
  className = "",
  ...props
}: AnimatedCardProps) => {
  const getVariants = () => {
    switch (animationType) {
      case 'fadeIn': return fadeInVariants;
      case 'slideUp': return slideUpVariants;
      case 'slideDown': return slideDownVariants;
      case 'slideLeft': return slideLeftVariants;
      case 'slideRight': return slideRightVariants;
      case 'scaleIn': return scaleInVariants;
      default: return slideUpVariants;
    }
  };

  const variants = {
    ...getVariants(),
    visible: {
      ...getVariants().visible,
      transition: { duration, delay }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      whileHover={hoverEffect ? { 
        scale: hoverScale, 
        y: hoverY,
        transition: { duration: 0.3 }
      } : undefined}
      whileTap={hoverEffect ? { 
        scale: 0.98,
        transition: { duration: 0.1 }
      } : undefined}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};