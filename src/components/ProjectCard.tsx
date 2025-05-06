
import { cn } from "@/lib/utils";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  link, 
  featured = false 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "project-card rounded-xl overflow-hidden bg-white flex flex-col h-full",
        "border border-neutral-300 shadow-sm hover:shadow-md hover:border-neutral-400",
        featured ? "lg:col-span-2" : ""
      )}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="overlay">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-project px-4 py-2 bg-white text-neutral-900 rounded-md font-medium flex items-center gap-2"
          >
            Ver proyecto <ArrowRight size={16} />
          </a>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-space-grotesk font-semibold text-neutral-800">{title}</h3>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors p-1 -mr-1"
            aria-label={`View ${title} project`}
          >
            <ExternalLink size={18} />
          </a>
        </div>
        <p className="text-neutral-600 mb-4">{description}</p>
        <div className="flex flex-wrap mt-auto pt-4 gap-2">
          {tags.map((tag, index) => (
            <span 
              key={`${tag}-${index}`}
              className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-neutral-200 text-neutral-700"
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
