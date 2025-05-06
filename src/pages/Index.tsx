
import { ArrowRight, Mail, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  // Animation variants
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

  // Featured Projects
  const featuredProjects = [
    {
      title: "OPN - UI Design Lead",
      description: "Currently working as UI Design Lead at OPN, leading design strategy and implementation for digital products.",
      tags: ["UI Design", "Leadership", "Professional"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "https://www.behance.net/pablomorro",
      featured: true
    },
    {
      title: "ISYFU (Lanzadera) - Principal UI Designer",
      description: "Principal UI Designer at ISYFU, a startup backed by Lanzadera, creating innovative digital experiences.",
      tags: ["UI Design", "Product Design", "Professional"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "https://www.behance.net/pablomorro",
      featured: true
    }
  ];

  // Personal Projects
  const personalProjects = [
    {
      title: "Fintech App - UX/UI Case Study",
      description: "A comprehensive project covering the entire digital product design process: from user research to UI design.",
      tags: ["UX/UI", "Fintech", "Collaboration"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "https://www.behance.net/gallery/215964139/Fintech-app-UXUI"
    },
    {
      title: "ARTEO - watchOS App",
      description: "Conceptual app for watchOS focused on improving the art gallery visitor experience with NFC interaction and audio accessibility.",
      tags: ["UI Design", "watchOS", "Concept"],
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "https://www.behance.net/pablomorro"
    },
    {
      title: "Plant Care UI App",
      description: "UI-focused project for a plant care app, developed as a personal practice from a Briefbox.me brief.",
      tags: ["UI Design", "Mobile", "Personal"],
      imageUrl: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
      link: "https://www.behance.net/pablomorro"
    },
    {
      title: "Final Bootcamp UX Case Study",
      description: "Complete case study focused on deep UX processes including qualitative research, empathy maps, user journeys, and testing.",
      tags: ["UX Research", "Prototyping", "Testing"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "https://www.behance.net/pablomorro"
    },
    {
      title: "Sprint UX/UI Collaboration",
      description: "Team project for app redesign, focusing on accessibility, clear navigation structure, and modern visuals.",
      tags: ["UX/UI", "Collaboration", "Accessibility"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "https://www.behance.net/pablomorro"
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

  return (
    <>
      <Navbar />
      
      {/* Hero/About Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row md:items-center md:gap-12"
          >
            <motion.div 
              variants={itemVariants}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-neutral-800 mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                UI Designer con<br /> 
                <span className="text-blue-500">expertise UX</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-neutral-600 mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Hola, soy Pablo Morro, diseñador UI con una sólida base en procesos UX. Me especializo en crear interfaces limpias, funcionales y centradas en el usuario.
              </motion.p>
              <motion.a 
                href="#projects" 
                className="inline-flex items-center gap-2 text-blue-500 font-medium hover:text-blue-600 transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <span className="relative">
                  Explora mi trabajo 
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              variants={itemVariants}
            >
              <motion.div 
                className="relative aspect-square max-w-md mx-auto md:ml-auto"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-500 rounded-3xl" />
                <div className="absolute top-6 left-6 w-full h-full bg-neutral-200 rounded-3xl" />
                <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Pablo Morro" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-24 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-neutral-600 text-lg">
              Mi enfoque combina el pensamiento estratégico con una fuerte sensibilidad visual para transformar ideas complejas en productos digitales accesibles y estéticamente coherentes.
            </p>
            <p className="text-neutral-600 text-lg mt-4">
              He trabajado en proyectos reales y conceptuales que abarcan desde apps financieras hasta experiencias culturales, explorando plataformas como mobile, web y watchOS. Actualmente desarrollo mi carrera como Jefe de Diseño UI en OPN y Principal UI Designer en ISYFU, una startup impulsada por el ecosistema Lanzadera.
            </p>
            <p className="text-neutral-600 text-lg mt-4">
              Siempre estoy abierto a nuevos retos, colaboraciones y oportunidades donde el diseño pueda marcar la diferencia.
            </p>
          </motion.div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 border border-neutral-300 rounded-xl hover:border-blue-500 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="font-space-grotesk text-lg font-semibold text-neutral-800 mb-3">Roles Actuales</h3>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  UI Design Lead en OPN
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Principal UI Designer en ISYFU (Lanzadera)
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="p-6 border border-neutral-300 rounded-xl hover:border-blue-500 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="font-space-grotesk text-lg font-semibold text-neutral-800 mb-3">Herramientas</h3>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Figma, Notion, Framer
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Illustrator, Photoshop, Trello
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="p-6 border border-neutral-300 rounded-xl hover:border-blue-500 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="font-space-grotesk text-lg font-semibold text-neutral-800 mb-3">Conecta</h3>
              <div className="flex items-center gap-4 mt-1">
                <a 
                  href="mailto:pablo.morro@example.com" 
                  className="text-neutral-700 hover:text-blue-500 transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/pablomorro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-blue-500 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.upwork.com/freelancers/pablomorro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-blue-500 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-24 bg-neutral-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-title">Proyectos Seleccionados</h2>
            <p className="text-neutral-600 mt-6 max-w-2xl text-lg">
              Mostrando mi trabajo profesional y personal en diseño UI/UX a través de diversas plataformas e industrias.
            </p>
          </motion.div>
          
          {/* Featured Projects */}
          <div className="mb-20">
            <motion.h3 
              className="text-2xl font-space-grotesk font-semibold text-neutral-800 mb-10 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
                />
              ))}
            </div>
          </div>
          
          {/* Personal Projects */}
          <div>
            <motion.h3 
              className="text-2xl font-space-grotesk font-semibold text-neutral-800 mb-10 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Proyectos Personales & Conceptuales
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500"></span>
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {personalProjects.map((project, index) => (
                <ProjectCard 
                  key={`personal-${index}`}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imageUrl={project.imageUrl}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section id="blog" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-title">Blog</h2>
            <p className="text-neutral-600 mt-6 max-w-2xl text-lg">
              Pensamientos, casos de estudio y reflexiones de mi recorrido como diseñador.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={`blog-${index}`} 
                className="border border-neutral-300 rounded-xl p-8 hover:border-blue-500 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <p className="text-sm text-blue-500 font-medium mb-2">{post.date}</p>
                <h3 className="text-xl font-space-grotesk font-semibold text-neutral-800 mb-3">{post.title}</h3>
                <p className="text-neutral-600 mb-6">{post.excerpt}</p>
                <a 
                  href={post.link} 
                  className="inline-flex items-center gap-2 text-blue-500 font-medium hover:text-blue-600 transition-colors group"
                >
                  <span className="relative">
                    Leer más
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </span>
                  <ArrowRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="section-title">Contacto</h2>
              <p className="text-neutral-600 mt-6 max-w-2xl text-lg">
                Si tienes algún proyecto en mente, quieres colaborar o simplemente charlar sobre diseño, no dudes en contactarme.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ContactForm />
              </motion.div>
              
              <motion.div 
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-12">
                  <h3 className="text-2xl font-space-grotesk font-semibold text-neutral-800 mb-6">Información de Contacto</h3>
                  <ul className="space-y-5">
                    <li className="flex items-center gap-4">
                      <div className="bg-blue-500 bg-opacity-10 rounded-full p-3">
                        <Mail size={20} className="text-blue-500" />
                      </div>
                      <a 
                        href="mailto:pablo.morro@example.com" 
                        className="text-neutral-700 hover:text-blue-500 transition-colors"
                      >
                        pablo.morro@example.com
                      </a>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="bg-blue-500 bg-opacity-10 rounded-full p-3">
                        <Linkedin size={20} className="text-blue-500" />
                      </div>
                      <a 
                        href="https://www.linkedin.com/in/pablomorro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-700 hover:text-blue-500 transition-colors"
                      >
                        linkedin.com/in/pablomorro
                      </a>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="bg-blue-500 bg-opacity-10 rounded-full p-3">
                        <ExternalLink size={20} className="text-blue-500" />
                      </div>
                      <a 
                        href="https://www.upwork.com/freelancers/pablomorro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-700 hover:text-blue-500 transition-colors"
                      >
                        Perfil de Upwork
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-space-grotesk font-semibold text-neutral-800 mb-4">Tiempo de Respuesta</h3>
                  <p className="text-neutral-600">Normalmente respondo en 24-48 horas, de lunes a viernes.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
