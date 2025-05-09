
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  bgColor = "#F2FCE2",
  textColor = "#222222",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Text scaling and opacity
  const textScale = useTransform(scrollYProgress, [0, 0.2, 0.5], [3.2, 1, 0.35]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.05, 0.3], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 0.5], [0, -180]);

  // Content fade in
  const contentOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.45, 0.55], [60, 0]);

  return (
    <div ref={sectionRef} className="relative min-h-[300vh] w-full">
      {/* Text fullscreen reveal */}
      <motion.div
        className="sticky top-0 h-screen flex items-center justify-center z-20 pointer-events-none"
        style={{
          scale: textScale,
          opacity: textOpacity,
          y: textY,
        }}
      >
        <h2 className="text-[18vw] leading-none font-bold uppercase tracking-tight text-white mix-blend-difference font-space-grotesk text-center">
          {projectName}
        </h2>
      </motion.div>

      {/* Project Content */}
      <motion.div
        className="absolute top-[160vh] left-0 w-full flex justify-center px-6 z-30"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <img
            src={imageUrl}
            alt={projectName}
            className="rounded-xl w-full shadow-md object-cover border border-zinc-800/20"
          />

          {/* Details */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: textColor }}>
              {projectName}
            </h3>
            <p className="text-lg mb-6" style={{ color: textColor }}>
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-zinc-800/10 rounded-full"
                  style={{ color: textColor }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 font-medium rounded-md transition-colors"
              style={{ backgroundColor: textColor, color: bgColor }}
            >
              View Project
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RockstarScrollReveal;
