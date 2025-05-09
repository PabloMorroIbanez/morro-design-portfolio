
import { cn } from "@/lib/utils";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  featured?: boolean;
  additionalImages?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  link,
  featured = false
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "project-card rounded-xl overflow-hidden bg-neutral-900 flex flex-col h-full",
        "border border-neutral-700 hover:border-blue-500/60 relative group",
        featured ? "lg:col-span-2" : "",
        "will-change-transform"
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        
        <div className={cn(
          "absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center",
          isHovering ? "opacity-100" : "opacity-0"
        )}>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium flex items-center gap-2 transform transition-all duration-300"
          >
            Ver proyecto <ArrowRight size={16} />
          </a>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow bg-neutral-900 text-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-space-grotesk font-semibold text-white">{title}</h3>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors p-1 -mr-1"
            aria-label={`View ${title} project`}
          >
            <ExternalLink size={18} />
          </a>
        </div>
        <p className="text-zinc-100 mb-4">{description}</p>
        <div className="flex flex-wrap mt-auto pt-4 gap-2">
          {tags.map((tag, index) => (
            <span 
              key={`${tag}-${index}`}
              className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
