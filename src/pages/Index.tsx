
import { ArrowRight, Mail, Linkedin, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  // Scrolling animation refs and hooks
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Hero section animation
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  
  // About section animations
  const textReveal = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const textMove = useTransform(scrollYProgress, [0.1, 0.3], [100, 0]);
  
  // Observer API for section transitions
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      rootMargin: "-10% 0px -10% 0px",
      threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Featured Projects
  const featuredProjects = [
    {
      title: "OPN - UI Design Lead",
      description: "Currently working as UI Design Lead at OPN, leading design strategy and implementation for digital products.",
      tags: ["UI Design", "Leadership", "Professional"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "https://www.behance.net/pablomorro",
      featured: true,
      additionalImages: [
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5",
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea"
      ]
    },
    {
      title: "ISYFU (Lanzadera) - Principal UI Designer",
      description: "Principal UI Designer at ISYFU, a startup backed by Lanzadera, creating innovative digital experiences.",
      tags: ["UI Design", "Product Design", "Professional"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "https://www.behance.net/pablomorro",
      featured: true,
      additionalImages: [
        "https://images.unsplash.com/photo-1545235617-9465d2a55698",
        "https://images.unsplash.com/photo-1559028012-481c04fa702d",
        "https://images.unsplash.com/photo-1618788372246-79faff717f5b"
      ]
    }
  ];

  // Personal Projects
  const personalProjects = [
    {
      title: "Fintech App - UX/UI Case Study",
      description: "A comprehensive project covering the entire digital product design process: from user research to UI design.",
      tags: ["UX/UI", "Fintech", "Collaboration"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "https://www.behance.net/gallery/215964139/Fintech-app-UXUI",
      additionalImages: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
        "https://images.unsplash.com/photo-1616514197671-15d99ce7253f"
      ]
    },
    {
      title: "ARTEO - watchOS App",
      description: "Conceptual app for watchOS focused on improving the art gallery visitor experience with NFC interaction and audio accessibility.",
      tags: ["UI Design", "watchOS", "Concept"],
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "https://www.behance.net/pablomorro",
      additionalImages: [
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
        "https://images.unsplash.com/photo-1593032465175-481ac7f401f0",
        "https://images.unsplash.com/photo-1615648078276-2307839d5414"
      ]
    },
    {
      title: "Plant Care UI App",
      description: "UI-focused project for a plant care app, developed as a personal practice from a Briefbox.me brief.",
      tags: ["UI Design", "Mobile", "Personal"],
      imageUrl: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
      link: "https://www.behance.net/pablomorro",
      additionalImages: [
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0",
        "https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd",
        "https://images.unsplash.com/photo-1531502756766-5e547c298d6a"
      ]
    },
    {
      title: "Final Bootcamp UX Case Study",
      description: "Complete case study focused on deep UX processes including qualitative research, empathy maps, user journeys, and testing.",
      tags: ["UX Research", "Prototyping", "Testing"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "https://www.behance.net/pablomorro",
      additionalImages: [
        "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
        "https://images.unsplash.com/photo-1516638029070-3f7a1d5fe110",
        "https://images.unsplash.com/photo-1599652473396-9465e8f2a3e5"
      ]
    },
    {
      title: "Sprint UX/UI Collaboration",
      description: "Team project for app redesign, focusing on accessibility, clear navigation structure, and modern visuals.",
      tags: ["UX/UI", "Collaboration", "Accessibility"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "https://www.behance.net/pablomorro",
      additionalImages: [
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
        "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597",
        "https://images.unsplash.com/photo-1573164574397-dd250bc8a598"
      ]
    }
  ];

  // Blog posts
  const blogPosts = [
    {
      title: "UI Design Principles I Apply to Every Project",
      date: "April 28, 2023",
      excerpt: "Exploring the core principles that guide my design process and how they impact the final product.",
      link: "#"
    },
    {
      title: "Fintech UX: Making Complex Financial Tools Accessible",
      date: "March 15, 2023",
      excerpt: "A deep dive into my approach for the Fintech app project and lessons learned along the way.",
      link: "#"
    },
    {
      title: "Design Systems: Building for Scale and Consistency",
      date: "February 3, 2023",
      excerpt: "How I build and maintain design systems that enable teams to work efficiently.",
      link: "#"
    }
  ];

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div ref={containerRef} className="bg-neutral-900 text-white">
      <Navbar />
      
      {/* Hero Section with Parallax Effect */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-32">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-neutral-900/80 z-0"></div>
        
        {/* Animated background grid/dots */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full grid grid-cols-12 opacity-20">
            {Array.from({ length: 120 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-blue-400 rounded-full"
                initial={{ opacity: 0.1 + Math.random() * 0.3 }}
                animate={{ 
                  opacity: [0.1 + Math.random() * 0.3, 0.5 + Math.random() * 0.5, 0.1 + Math.random() * 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4 + Math.random() * 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  position: 'absolute',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="container mx-auto px-6 relative z-10"
          style={{
            opacity: heroOpacity,
            y: heroY
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <div className="md:w-1/2">
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-4">
                  UX/UI Designer
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-space-grotesk font-bold text-white leading-tight">
                  UI Designer con<br/> 
                  <span className="text-gradient bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">expertise UX</span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-xl text-neutral-300 mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Hola, soy Pablo Morro, diseñador UI con una sólida base en procesos UX. Me especializo en crear interfaces limpias, funcionales y centradas en el usuario.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="#projects"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center gap-2"
                >
                  Ver proyectos <ArrowRight size={18} />
                </a>
                
                <a 
                  href="#about"
                  className="px-6 py-3 bg-transparent border border-neutral-700 hover:border-blue-500 text-white rounded-md transition-colors"
                >
                  Sobre mí
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative aspect-square max-w-md mx-auto md:ml-auto">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-500 rounded-3xl" />
                <div className="absolute top-6 left-6 w-full h-full bg-neutral-800 rounded-3xl" />
                <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-neutral-900 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Pablo Morro" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10"></div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="flex flex-col items-center">
              <span className="text-neutral-400 text-sm mb-2">Scroll para explorar</span>
              <ArrowRight size={20} className="text-neutral-400 transform rotate-90" />
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* About Section with Sticky Text */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sticky scrolling text side */}
            <div className="lg:sticky lg:top-32 lg:self-start h-fit">
              <motion.div
                style={{ 
                  opacity: textReveal,
                  x: textMove 
                }}
              >
                <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-4">
                  Sobre mí
                </span>
                <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-white mb-6">
                  Diseñando experiencias<br />centradas en el usuario
                </h2>
                <p className="text-neutral-300 text-lg">
                  Mi enfoque combina el pensamiento estratégico con una fuerte sensibilidad visual para transformar ideas complejas en productos digitales accesibles y estéticamente coherentes.
                </p>
              </motion.div>
            </div>
            
            {/* Scrolling content side */}
            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-space-grotesk font-semibold text-white mb-4">
                  Trayectoria profesional
                </h3>
                <p className="text-neutral-400 text-lg mb-4">
                  He trabajado en proyectos reales y conceptuales que abarcan desde apps financieras hasta experiencias culturales, explorando plataformas como mobile, web y watchOS. Actualmente desarrollo mi carrera como Jefe de Diseño UI en OPN y Principal UI Designer en ISYFU, una startup impulsada por el ecosistema Lanzadera.
                </p>
                <p className="text-neutral-400 text-lg">
                  Siempre estoy abierto a nuevos retos, colaboraciones y oportunidades donde el diseño pueda marcar la diferencia.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-space-grotesk font-semibold text-white mb-4">
                  Filosofía de diseño
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-neutral-800 rounded-lg border border-neutral-700">
                    <div className="w-10 h-10 bg-blue-900/30 text-blue-400 rounded-full flex items-center justify-center mb-4">
                      <span className="font-bold">01</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Centrado en el usuario</h4>
                    <p className="text-neutral-400">El usuario es siempre el protagonista en mis diseños, buscando resolver sus necesidades reales.</p>
                  </div>
                  
                  <div className="p-6 bg-neutral-800 rounded-lg border border-neutral-700">
                    <div className="w-10 h-10 bg-blue-900/30 text-blue-400 rounded-full flex items-center justify-center mb-4">
                      <span className="font-bold">02</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Minimalismo funcional</h4>
                    <p className="text-neutral-400">Menos es más cuando cada elemento tiene un propósito claro y definido.</p>
                  </div>
                  
                  <div className="p-6 bg-neutral-800 rounded-lg border border-neutral-700">
                    <div className="w-10 h-10 bg-blue-900/30 text-blue-400 rounded-full flex items-center justify-center mb-4">
                      <span className="font-bold">03</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Basado en datos</h4>
                    <p className="text-neutral-400">Las decisiones de diseño se fundamentan en evidencia, no en opiniones personales.</p>
                  </div>
                  
                  <div className="p-6 bg-neutral-800 rounded-lg border border-neutral-700">
                    <div className="w-10 h-10 bg-blue-900/30 text-blue-400 rounded-full flex items-center justify-center mb-4">
                      <span className="font-bold">04</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Coherencia visual</h4>
                    <p className="text-neutral-400">Mantengo sistemas de diseño robustos para garantizar consistencia en todos los puntos de contacto.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 border border-neutral-700 rounded-xl hover:border-blue-500/40 transition-all duration-300">
                    <h3 className="font-space-grotesk text-lg font-semibold text-white mb-3">Roles Actuales</h3>
                    <ul className="space-y-2 text-neutral-400">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        UI Design Lead en OPN
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Principal UI Designer en ISYFU
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 border border-neutral-700 rounded-xl hover:border-blue-500/40 transition-all duration-300">
                    <h3 className="font-space-grotesk text-lg font-semibold text-white mb-3">Herramientas</h3>
                    <ul className="space-y-2 text-neutral-400">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Figma, Notion, Framer
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Illustrator, Photoshop, Trello
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 border border-neutral-700 rounded-xl hover:border-blue-500/40 transition-all duration-300">
                    <h3 className="font-space-grotesk text-lg font-semibold text-white mb-3">Conecta</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <a 
                        href="mailto:pablo.morro@example.com" 
                        className="text-neutral-400 hover:text-blue-400 transition-colors"
                      >
                        <Mail size={20} />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/pablomorro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-blue-400 transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a 
                        href="https://www.upwork.com/freelancers/pablomorro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section with Horizontal Scroll */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="mb-20"
          >
            <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-4">
              Proyectos
            </span>
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-white mb-6">
              Proyectos Seleccionados
            </h2>
            <p className="text-neutral-400 mt-6 max-w-2xl text-lg">
              Mostrando mi trabajo profesional y personal en diseño UI/UX a través de diversas plataformas e industrias.
            </p>
          </motion.div>
          
          {/* Featured Projects */}
          <div className="mb-20">
            <motion.h3 
              className="text-2xl font-space-grotesk font-semibold text-white mb-10 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Trabajo Destacado
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500"></span>
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {featuredProjects.map((project, index) => (
                <ProjectCard 
                  key={`featured-${index}`}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imageUrl={project.imageUrl}
                  link={project.link}
                  featured={project.featured}
                  additionalImages={project.additionalImages}
                />
              ))}
            </div>
          </div>
          
          {/* Personal Projects - Horizontal Scrolling Section */}
          <div>
            <motion.h3 
              className="text-2xl font-space-grotesk font-semibold text-white mb-10 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              Proyectos Personales & Conceptuales
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500"></span>
            </motion.h3>
            
            {/* Horizontal scrolling container */}
            <div className="overflow-x-auto no-scrollbar pb-8 -mx-6">
              <div className="flex space-x-8 px-6" style={{ width: 'max-content' }}>
                {personalProjects.map((project, index) => (
                  <div className="w-[350px]" key={`personal-${index}`}>
                    <ProjectCard 
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      imageUrl={project.imageUrl}
                      link={project.link}
                      additionalImages={project.additionalImages}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll hint */}
            <div className="flex items-center justify-center mt-4">
              <motion.div
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center text-neutral-500 text-sm"
              >
                <ArrowRight size={16} className="mr-2 transform -rotate-180" />
                Desliza para ver más
                <ArrowRight size={16} className="ml-2" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Section with Typography Animations */}
      <section id="blog" className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="text-[200px] font-space-grotesk font-bold text-neutral-800/20 opacity-20 select-none"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            style={{ position: 'absolute', top: '10%', left: '-5%' }}
          >
            BLOG
          </motion.div>
          <motion.div 
            className="text-[150px] font-space-grotesk font-bold text-neutral-800/10 opacity-20 select-none"
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            style={{ position: 'absolute', bottom: '10%', right: '-5%' }}
          >
            IDEAS
          </motion.div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-4">
              Ideas & Reflexiones
            </span>
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-white mb-6">
              Blog
            </h2>
            <p className="text-neutral-400 mt-6 max-w-2xl text-lg">
              Pensamientos, casos de estudio y reflexiones de mi recorrido como diseñador.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={`blog-${index}`} 
                className="border border-neutral-800 bg-neutral-900/80 backdrop-blur rounded-xl p-8 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <p className="text-sm text-blue-400 font-medium mb-2">{post.date}</p>
                <h3 className="text-xl font-space-grotesk font-semibold text-white mb-3">{post.title}</h3>
                <p className="text-neutral-400 mb-6">{post.excerpt}</p>
                <a 
                  href={post.link} 
                  className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors group"
                >
                  <span className="relative">
                    Leer más
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </span>
                  <ArrowRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="mb-12"
            >
              <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-4">
                Hablemos
              </span>
              <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-white mb-6">
                Contacto
              </h2>
              <p className="text-neutral-400 mt-6 max-w-2xl text-lg">
                Si tienes algún proyecto en mente, quieres colaborar o simplemente charlar sobre diseño, no dudes en contactarme.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="bg-neutral-900 p-8 rounded-xl border border-neutral-800"
              >
                <ContactForm />
              </motion.div>
              
              <motion.div 
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <div className="mb-12">
                  <h3 className="text-2xl font-space-grotesk font-semibold text-white mb-6">Información de Contacto</h3>
                  <ul className="space-y-5">
                    <li className="flex items-center gap-4">
                      <div className="bg-blue-500/20 rounded-full p-3">
                        <Mail size={20} className="text-blue-400" />
                      </div>
                      <a 
                        href="mailto:pablo.morro@example.com" 
                        className="text-neutral-300 hover:text-blue-400 transition-colors"
                      >
                        pablo.morro@example.com
                      </a>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="bg-blue-500/20 rounded-full p-3">
                        <Linkedin size={20} className="text-blue-400" />
                      </div>
                      <a 
                        href="https://www.linkedin.com/in/pablomorro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-blue-400 transition-colors"
                      >
                        linkedin.com/in/pablomorro
                      </a>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="bg-blue-500/20 rounded-full p-3">
                        <ExternalLink size={20} className="text-blue-400" />
                      </div>
                      <a 
                        href="https://www.upwork.com/freelancers/pablomorro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-blue-400 transition-colors"
                      >
                        Perfil de Upwork
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-space-grotesk font-semibold text-white mb-4">Tiempo de Respuesta</h3>
                  <p className="text-neutral-400">Normalmente respondo en 24-48 horas, de lunes a viernes.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
