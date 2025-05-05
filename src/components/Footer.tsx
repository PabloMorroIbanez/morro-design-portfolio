
import { Mail, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-neutral-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-neutral-600">&copy; {currentYear} Pablo Morro. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="mailto:pablo.morro@example.com" 
              className="text-neutral-600 hover:text-blue-500 transition-colors"
              aria-label="Email Pablo Morro"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/pablomorro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-blue-500 transition-colors"
              aria-label="Pablo Morro's LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.upwork.com/freelancers/pablomorro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-blue-500 transition-colors"
              aria-label="Pablo Morro's Upwork"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
