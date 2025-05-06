
import { Variants } from "framer-motion";

// Staggered children animation
export const staggerContainer = (staggerChildren: number, delayChildren: number = 0): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };
};

// Fade up animation variant
export const fadeUp = (duration: number = 0.5, delay: number = 0): Variants => {
  return {
    hidden: {
      y: 30,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Ease out cubic
      }
    }
  };
};

// Fade in animation variant
export const fadeIn = (
  direction: "left" | "right" | "up" | "down" | "none" = "none",
  duration: number = 0.5,
  delay: number = 0,
  type: "tween" | "spring" = "tween"
): Variants => {
  const distance = 50;
  
  return {
    hidden: {
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Ease out cubic
      }
    }
  };
};

// Scale animation variant
export const scaleIn = (duration: number = 0.5, delay: number = 0): Variants => {
  return {
    hidden: {
      scale: 0.9,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Ease out cubic
      }
    }
  };
};

// Text reveal animation
export const textReveal = (duration: number = 0.5, delay: number = 0): Variants => {
  return {
    hidden: {
      y: "100%",
      opacity: 0
    },
    show: {
      y: "0%",
      opacity: 1,
      transition: {
        type: "tween",
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Ease out cubic
      }
    }
  };
};

// Viewport configuration
export const viewportConfig = (once: boolean = false, margin: string = "-100px") => {
  return {
    once,
    margin
  };
};
