
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerAnimation = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="py-16 bg-neutral-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          variants={footerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="mb-8 md:mb-0" variants={itemAnimation}>
            <h3 className="font-space-grotesk text-2xl font-bold mb-2">Pablo Morro</h3>
            <p className="text-neutral-400">&copy; {currentYear} Todos los derechos reservados.</p>
          </motion.div>
          
          <motion.div variants={itemAnimation} className="mb-8 md:mb-0 md:mx-4 text-center">
            <p className="text-neutral-400 mb-2 font-medium">Conecta conmigo</p>
            <div className="flex space-x-6">
              <a 
                href="mailto:pablo.morro@example.com" 
                className="text-white hover:text-blue-500 transition-colors"
                aria-label="Email Pablo Morro"
              >
                <Mail size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pablomorro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-colors"
                aria-label="Pablo Morro's LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="https://www.upwork.com/freelancers/pablomorro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-colors"
                aria-label="Pablo Morro's Upwork"
              >
                <ExternalLink size={22} />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={itemAnimation} className="text-center md:text-right">
            <p className="text-neutral-400 mb-1">Diseñado con <span className="text-coral-500">♥</span> por</p>
            <p className="font-space-grotesk font-medium">Pablo Morro</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
