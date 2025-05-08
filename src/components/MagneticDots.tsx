
import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  element: HTMLDivElement;
  originalX: number;
  originalY: number;
}

const MagneticDots = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Initialize dots
    const container = containerRef.current;
    if (!container) return;

    const createDots = () => {
      const dots: Dot[] = [];
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      
      // Clear any existing dots
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      // Calculate number of dots based on screen size (increased density)
      const dotCount = Math.floor((containerWidth * containerHeight) / 1500);

      // Create dots with better distribution
      for (let i = 0; i < dotCount; i++) {
        const x = Math.random() * containerWidth;
        const y = Math.random() * containerHeight;
        
        const dotElement = document.createElement('div');
        dotElement.classList.add('dot');
        dotElement.style.left = `${x}px`;
        dotElement.style.top = `${y}px`;
        
        container.appendChild(dotElement);
        
        dots.push({
          x,
          y,
          element: dotElement,
          originalX: x,
          originalY: y
        });
      }
      
      dotsRef.current = dots;
    };

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    // Animation function
    const animate = () => {
      const dots = dotsRef.current;
      const { x: mouseX, y: mouseY } = mousePosition.current;
      
      dots.forEach(dot => {
        const dx = mouseX - dot.originalX;
        const dy = mouseY - dot.originalY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120; // Increased interaction radius
        
        if (distance < maxDistance) {
          // Calculate repulsion strength
          const force = (maxDistance - distance) / maxDistance;
          
          // Move dot away from cursor
          const angle = Math.atan2(dy, dx);
          const tx = -Math.cos(angle) * force * 30; // Increased force
          const ty = -Math.sin(angle) * force * 30; // Increased force
          
          dot.x = dot.originalX + tx;
          dot.y = dot.originalY + ty;
          
          dot.element.style.transform = `translate(${tx}px, ${ty}px)`;
        } else {
          // Return to original position
          dot.x = dot.originalX;
          dot.y = dot.originalY;
          dot.element.style.transform = 'translate(0, 0)';
        }
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    const handleResize = () => {
      createDots();
    };

    // Setup event listeners
    handleResize();
    container.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 bg-black overflow-hidden"
      style={{ zIndex: -1 }}
    />
  );
};

export default MagneticDots;
