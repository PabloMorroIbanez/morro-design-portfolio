
import { ArrowRight, Mail, Linkedin, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
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
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                UI Designer with<br /> UX Expertise
              </h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-lg">
                Hola, soy Pablo Morro, diseñador UI con una sólida base en procesos UX. Me especializo en crear interfaces limpias, funcionales y centradas en el usuario.
              </p>
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 text-blue-500 font-medium hover:text-blue-600 transition-colors"
              >
                Explore my work <ArrowRight size={18} />
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-square max-w-md mx-auto md:ml-auto rounded-3xl overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Pablo Morro" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16 md:mt-24 max-w-3xl">
            <p className="text-neutral-600">
              Mi enfoque combina el pensamiento estratégico con una fuerte sensibilidad visual para transformar ideas complejas en productos digitales accesibles y estéticamente coherentes.
            </p>
            <p className="text-neutral-600 mt-4">
              He trabajado en proyectos reales y conceptuales que abarcan desde apps financieras hasta experiencias culturales, explorando plataformas como mobile, web y watchOS. Actualmente desarrollo mi carrera como Jefe de Diseño UI en OPN y Principal UI Designer en ISYFU, una startup impulsada por el ecosistema Lanzadera.
            </p>
            <p className="text-neutral-600 mt-4">
              Siempre estoy abierto a nuevos retos, colaboraciones y oportunidades donde el diseño pueda marcar la diferencia.
            </p>
          </div>
          
          <div className="mt-16 flex flex-wrap gap-6">
            <div className="w-full md:w-auto">
              <h3 className="font-medium text-neutral-800 mb-2">Current Roles</h3>
              <ul className="space-y-1 text-neutral-600">
                <li>UI Design Lead at OPN</li>
                <li>Principal UI Designer at ISYFU (Lanzadera)</li>
              </ul>
            </div>
            
            <div className="w-full md:w-auto">
              <h3 className="font-medium text-neutral-800 mb-2">Tools</h3>
              <ul className="space-y-1 text-neutral-600">
                <li>Figma, Notion, Framer</li>
                <li>Illustrator, Photoshop, Trello</li>
              </ul>
            </div>
            
            <div className="w-full md:w-auto">
              <h3 className="font-medium text-neutral-800 mb-2">Connect</h3>
              <div className="flex items-center gap-4">
                <a 
                  href="mailto:pablo.morro@example.com" 
                  className="text-neutral-600 hover:text-blue-500 transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/pablomorro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-blue-500 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.upwork.com/freelancers/pablomorro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-blue-500 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-neutral-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">Selected Projects</h2>
          <p className="text-neutral-600 mb-12 max-w-2xl">Showcasing my professional and personal work in UI/UX design across various platforms and industries.</p>
          
          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-neutral-800 mb-6">Featured Work</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            <h3 className="text-xl font-semibold text-neutral-800 mb-6">Personal & Conceptual Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section id="blog" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">Blog</h2>
          <p className="text-neutral-600 mb-12 max-w-2xl">Thoughts, case studies, and insights from my design journey.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={`blog-${index}`} 
                className="border border-neutral-300 rounded-xl p-6 hover:border-neutral-400 hover:shadow-sm transition-all duration-300"
              >
                <p className="text-sm text-blue-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">{post.title}</h3>
                <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                <a 
                  href={post.link} 
                  className="inline-flex items-center gap-2 text-blue-500 font-medium hover:text-blue-600 transition-colors"
                >
                  Read more <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Get In Touch</h2>
            <p className="text-neutral-600 mb-12 max-w-2xl">Feel free to reach out for collaborations, questions, or just to say hello. I'm always open to discussing new projects and opportunities.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <ContactForm />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-4">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Mail size={20} className="text-blue-500" />
                      <a 
                        href="mailto:pablo.morro@example.com" 
                        className="text-neutral-600 hover:text-blue-500 transition-colors"
                      >
                        pablo.morro@example.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Linkedin size={20} className="text-blue-500" />
                      <a 
                        href="https://www.linkedin.com/in/pablomorro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-blue-500 transition-colors"
                      >
                        linkedin.com/in/pablomorro
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <ExternalLink size={20} className="text-blue-500" />
                      <a 
                        href="https://www.upwork.com/freelancers/pablomorro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-blue-500 transition-colors"
                      >
                        Upwork Profile
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-4">Response Time</h3>
                  <p className="text-neutral-600">I usually respond within 24-48 hours, Monday through Friday.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
