
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface RockstarScrollRevealProps {
  projectName: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  index: number;
  bgColor?: string;
  textColor?: string;
}

const RockstarScrollReveal: React.FC<RockstarScrollRevealProps> = ({
  projectName,
  description,
  tags,
  imageUrl,
  link,
  index,
  bgColor = "#F2FCE2", // Default to GreenCare light green
  textColor = "#222222", // Default to dark gray
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  // Window effect - initial large title reveals background
  const initialTextScale = useTransform(scrollYProgress, [0, 0.3], [3.5, 1]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0.3, 1]);
  
  // Title shrinking and fixing at top
  const titleScale = useTransform(scrollYProgress, [0.1, 0.4], [1, 0.35]);
  const titleY = useTransform(scrollYProgress, [0.4, 0.5], [0, -260]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.5], [0, 1, 1, 1]);
  
  // Content reveal
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.5], [50, 0]);
  
  return (
    <div 
      ref={sectionRef} 
      className={cn(
        "sticky top-0 min-h-[110vh] w-full overflow-hidden",
        // Removed margin-top spacing between sections
        index > 0 ? "mt-0" : "mt-0"
      )}
    >
      {/* Background color overlay with project-specific color */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{ 
          backgroundColor: bgColor,
          opacity: backgroundOpacity
        }}
      />
      
      {/* Large initial text that acts as a "window" */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
        style={{ 
          scale: initialTextScale,
        }}
      >
        <h2 className="text-8xl md:text-9xl font-bold uppercase tracking-tighter font-space-grotesk mix-blend-difference">
          {projectName}
        </h2>
      </motion.div>
      
      {/* Title that shrinks and fixes at top */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-25 pointer-events-none"
        style={{ 
          scale: titleScale,
          y: titleY,
          opacity: titleOpacity
        }}
      >
        <h2 className="text-7xl md:text-8xl font-bold uppercase tracking-tighter font-space-grotesk">
          <span style={{ color: textColor }}>
            {projectName}
          </span>
        </h2>
      </motion.div>
      
      {/* Content revealed after scrolling */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-30 p-6 pt-32"
        style={{ 
          opacity: contentOpacity,
          y: contentY
        }}
      >
        <div className="max-w-7xl w-full">
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
            index % 2 === 0 ? "md:grid-flow-row" : "md:grid-flow-row-dense"
          )}>
            {/* Project image */}
            <div className={cn(
              "w-full",
              index % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"
            )}>
              <img 
                src={imageUrl} 
                alt={projectName} 
                className="w-full rounded-xl shadow-lg border border-zinc-800/20 object-cover"
              />
            </div>
            
            {/* Project details */}
            <div className={cn(
              index % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1"
            )}>
              <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: textColor }}>{projectName}</h3>
              <p className="text-lg mb-6" style={{ color: textColor }}>{description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-zinc-800/20 text-sm rounded-full"
                    style={{ color: textColor }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Link to project */}
              <a 
                href={link} 
                className="inline-flex items-center gap-2 px-5 py-2 font-medium rounded-md transition-colors"
                style={{ 
                  backgroundColor: textColor,
                  color: bgColor
                }}
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RockstarScrollReveal;
