
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

interface Project {
  title: string;
  link: string;
}

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Updated project list with all projects
  const projects: Project[] = [
    { title: "GreenCare", link: "/greencare" },
    { title: "FinanceTracker", link: "#projects" }, // Links to projects section with an anchor
    { title: "TravelJournal", link: "#projects" },
    { title: "EcoShop", link: "#projects" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Check which section is in view
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      // Add shadow to navbar when scrolled
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/" },
    { id: "experience", label: "Experience", path: "/" },
    { id: "projects", label: "Projects", path: "/", hasDropdown: true },
    { id: "contact", label: "Contact", path: "/" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-neutral-900/80 backdrop-blur-md",
        isScrolled && "shadow-md shadow-neutral-900/10 border-b border-neutral-800/50"
      )}
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-white hover:text-blue-400 transition-colors">
          Pablo Morro
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id} className="relative">
                {link.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-zinc-200 hover:text-blue-400 transition-colors focus:outline-none">
                      {link.label}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="bg-neutral-800 border-neutral-700 text-zinc-200 z-[100]">
                      {projects.map((project) => (
                        <DropdownMenuItem key={project.title} className="cursor-pointer hover:bg-neutral-700 focus:bg-neutral-700">
                          <Link 
                            to={project.link} 
                            className="w-full text-zinc-200 hover:text-blue-400 transition-colors"
                          >
                            {project.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : link.path === "/" ? (
                  <a 
                    href={`#${link.id}`}
                    className={cn(
                      "text-zinc-200 hover:text-blue-400 transition-colors nav-link",
                      activeSection === link.id && "text-blue-400 font-medium active"
                    )}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    to={link.path}
                    className="text-zinc-200 hover:text-blue-400 transition-colors nav-link"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu - updated with dropdown items */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-neutral-800 border-t border-neutral-700"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  {link.hasDropdown ? (
                    <div className="py-2">
                      <span className="text-zinc-200">{link.label}</span>
                      <ul className="pl-4 mt-2 space-y-2">
                        {projects.map((project) => (
                          <li key={project.title}>
                            <Link 
                              to={project.link} 
                              className="block text-zinc-300 hover:text-blue-400 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {project.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : link.path === "/" ? (
                    <a 
                      href={`#${link.id}`}
                      className={cn(
                        "block py-2 text-zinc-200 hover:text-blue-400 transition-colors",
                        activeSection === link.id && "text-blue-400 font-medium"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.path}
                      className="block py-2 text-zinc-200 hover:text-blue-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
