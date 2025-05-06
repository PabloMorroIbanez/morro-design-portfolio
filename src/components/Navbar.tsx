
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navLinks = [
    { id: "home", label: "About", path: "/" },
    { id: "projects", label: "Projects", path: "/" },
    { id: "blog", label: "Blog", path: "/" },
    { id: "contact", label: "Contact", path: "/" },
    { id: "gamification", label: "Prueba Gamificación", path: "/gamification" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-neutral-100/95 backdrop-blur-sm",
        isScrolled && "shadow-sm"
      )}
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-neutral-800 hover:text-blue-500 transition-colors">
          Pablo Morro
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                {link.path === "/" ? (
                  <a 
                    href={`#${link.id}`}
                    className={cn(
                      "text-neutral-600 hover:text-blue-500 transition-colors nav-link",
                      activeSection === link.id && "text-blue-500 font-medium active"
                    )}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    to={link.path}
                    className="text-neutral-600 hover:text-blue-500 transition-colors nav-link"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden text-neutral-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
