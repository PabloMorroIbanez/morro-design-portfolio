
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CursorProps {
  color?: string;
}

const AnimatedCursor: React.FC<CursorProps> = ({ color = "#0EA5E9" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    const updateInteractiveElements = () => {
      const linkElements = document.querySelectorAll("a, button, .interactive-element");
      
      linkElements.forEach(link => {
        link.addEventListener("mouseenter", () => setCursorVariant("link"));
        link.addEventListener("mouseleave", () => setCursorVariant("default"));
      });
    };
    
    // Initial setup
    updateInteractiveElements();
    
    // Setup mutation observer to detect new elements
    const observer = new MutationObserver(() => {
      updateInteractiveElements();
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      observer.disconnect();
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(255, 255, 255, 0)",
      border: `2px solid ${color}`,
      height: "32px",
      width: "32px"
    },
    link: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      backgroundColor: `${color}33`,
      border: `2px solid ${color}`,
      height: "48px",
      width: "48px"
    }
  };

  // Only show custom cursor on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
    />
  );
};

export default AnimatedCursor;
