
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface RockstarScrollRevealProps {
  projectName: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  index: number;
}

const RockstarScrollReveal: React.FC<RockstarScrollRevealProps> = ({
  projectName,
  description,
  tags,
  imageUrl,
  link,
  index,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  // Transform values for various animations based on scroll position
  // Initial phase - large title that reveals background
  const initialTextScale = useTransform(scrollYProgress, [0, 0.2], [5, 1]);
  const initialTextOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  // Second phase - title shrinks and becomes white
  const textScale = useTransform(scrollYProgress, [0.2, 0.4, 0.5], [1, 0.4, 0.4]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 0.5], [0, -250]);
  
  // Background transitions
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.45], [1, 0.7, 0]);
  
  // Content reveal
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.5], [50, 0]);
  
  return (
    <div 
      ref={sectionRef} 
      className={cn(
        "sticky top-0 min-h-screen w-full overflow-hidden",
        index > 0 ? "mt-[75vh]" : "mt-[25vh]" // Adjust spacing between sections
      )}
    >
      {/* Black overlay background */}
      <motion.div 
        className="absolute inset-0 bg-black z-10"
        style={{ opacity: backgroundOpacity }}
      />
      
      {/* Initial transparent text (reveals background) */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-20"
        style={{ scale: initialTextScale }}
      >
        <h2 className="text-8xl md:text-9xl font-bold uppercase tracking-tighter font-space-grotesk mix-blend-difference">
          <motion.span 
            className="text-white"
            style={{ opacity: initialTextOpacity }}
          >
            {projectName}
          </motion.span>
        </h2>
      </motion.div>
      
      {/* White text that shrinks and moves up */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center z-25"
        style={{ 
          scale: textScale,
          y: textY
        }}
      >
        <h2 className="text-7xl md:text-8xl font-bold uppercase tracking-tighter font-space-grotesk">
          <motion.span 
            className="text-white"
            style={{ opacity: textOpacity }}
          >
            {projectName}
          </motion.span>
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
                className="w-full rounded-xl shadow-lg border border-zinc-200/20 object-cover"
              />
            </div>
            
            {/* Project details */}
            <div className={cn(
              index % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1"
            )}>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">{projectName}</h3>
              <p className="text-lg text-zinc-200 mb-6">{description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-zinc-800 text-zinc-200 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Link to project */}
              <a 
                href={link} 
                className="inline-flex items-center gap-2 px-5 py-2 bg-white text-black font-medium rounded-md hover:bg-zinc-100 transition-colors"
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
