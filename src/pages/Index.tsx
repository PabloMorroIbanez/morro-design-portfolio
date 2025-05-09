import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { staggerContainer, fadeIn } from "@/lib/animation-utils";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import MagneticDots from "@/components/MagneticDots";
import RockstarScrollReveal from "@/components/RockstarScrollReveal";

const Index = () => {
  const aboutSection = useRef(null);
  const projectsSection = useRef(null);
  const experienceSection = useRef(null);
  const contactSection = useRef(null);

  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutSection,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: experienceProgress } = useScroll({
    target: experienceSection,
    offset: ["start end", "end end"],
  });

  const aboutScale = useTransform(aboutProgress, [0, 1], [0.75, 1]);
  const experienceScale = useTransform(experienceProgress, [0, 1], [0.75, 1]);

  // Updated projects with background and text colors
  const projects = [
    {
      title: "GreenCare",
      description: "UI design for plant wellness.",
      tags: ["UI/UX", "Mobile App", "Design"],
      imageUrl: "/lovable-uploads/07b3a8c6-a607-4c7c-8b6c-dff32c0bf56e.png",
      link: "/greencare",
      bgColor: "#F2FCE2", // Light green background
      textColor: "#222222", // Dark gray text
    },
    {
      title: "FinanceTracker",
      description: "Personal finance management dashboard.",
      tags: ["Dashboard", "Web App", "UI/UX"],
      imageUrl: "/lovable-uploads/94e74263-1f79-4ff2-886c-c497f9e9aeb8.png",
      link: "#",
      bgColor: "#D3E4FD", // Soft blue background
      textColor: "#222222", // Dark gray text
    },
    {
      title: "TravelJournal",
      description: "Travel experience sharing platform.",
      tags: ["Social", "Mobile App", "UI/UX"],
      imageUrl: "/lovable-uploads/23e884fd-6f19-40bd-b6da-13c13c2d2d9a.png",
      link: "#",
      bgColor: "#FEF7CD", // Soft yellow background
      textColor: "#222222", // Dark gray text
    },
    {
      title: "EcoShop",
      description: "Sustainable products e-commerce platform.",
      tags: ["E-commerce", "Web Design", "UI/UX"],
      imageUrl: "/lovable-uploads/70e6bc77-431b-47a7-b09a-7bd4ecde9d5b.png",
      link: "#",
      bgColor: "#FDE1D3", // Soft peach background
      textColor: "#222222", // Dark gray text
    }
  ];

  const experiences = [
    {
      position: "Senior UX/UI Designer",
      company: "TechVision",
      duration: "2020 - Present",
      description: "Leading UX/UI design for web and mobile applications, focusing on user-centered design processes."
    },
    {
      position: "UI Designer",
      company: "CreativeMinds",
      duration: "2018 - 2020",
      description: "Designed interfaces for various client projects across multiple industries."
    },
    {
      position: "Junior Designer",
      company: "DigitalSolutions",
      duration: "2016 - 2018",
      description: "Collaborated with senior designers on UI projects for web and mobile platforms."
    }
  ];

  return (
    <div className="bg-zinc-900 text-zinc-100 overflow-hidden">
      <Navbar />
      
      {/* Home Section */}
      <motion.div
        variants={staggerContainer(0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="relative z-0 mx-auto h-screen w-full max-w-7xl px-6 pb-20 pt-24"
        id="home"
      >
        <MagneticDots />
        
        <div className="relative z-10 h-full flex flex-col md:flex-row md:items-center">
          {/* Content Column */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="mb-8 flex items-center gap-6">
              <h1 className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                Pablo Morro
              </h1>
              <span className="h-5 w-5 text-blue-300">✨</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-lg text-zinc-300">
                UX/UI Designer & Frontend Developer
              </span>
              <div className="flex flex-col gap-5">
                <p className="max-w-lg text-xl text-zinc-100">
                  I'm a passionate designer and developer focused on creating
                  intuitive and engaging digital experiences.
                </p>
              </div>
              <div className="mt-5 flex items-center gap-5">
                <Link
                  to="mailto:pablomorrodesign@gmail.com"
                  className="group relative h-12 w-48 overflow-hidden rounded-lg bg-blue-500 text-sm font-medium text-white"
                >
                  <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-blue-600 transition-all duration-300 group-hover:translate-x-full">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                  <span className="relative w-full text-center transition-colors duration-300 group-hover:text-blue-600">
                    Contact me
                  </span>
                </Link>
              </div>
              
              {/* Text with no dissolve effect */}
              <div className="mt-8">
                <p className="text-2xl font-medium text-white">
                  I design experiences you can feel.
                </p>
              </div>
            </div>
          </div>
          
          {/* Image Column with custom design */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-500 rounded-tr-3xl rounded-bl-3xl z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-tr-3xl rounded-bl-3xl z-0"></div>
                
                {/* Image container with custom shape */}
                <div className="w-full h-full relative z-10 overflow-hidden rounded-tr-3xl rounded-bl-3xl border border-zinc-700">
                  <img 
                    src="/lovable-uploads/f1922c7d-2322-4d42-bf6f-bff02bed0446.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Floating accent */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-500 rounded-full z-20 animate-float"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll text - only in home section */}
        <div className="w-full text-center absolute bottom-8 left-0 right-0">
          <p className="text-zinc-400 animate-bounce">Scroll to explore</p>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section
        id="about"
        ref={aboutSection}
        style={{ scale: aboutScale }}
        className="relative z-0 mx-auto min-h-screen w-full max-w-7xl px-6 py-16"
      >
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <div
            className="absolute left-[calc(50%-15rem)] top-1/2 h-[31.25rem] w-[31.25rem] -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500 to-teal-500 opacity-30 blur-3xl"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl font-bold mb-4">About me</h2>
              <p className="text-xl text-zinc-100">
                I'm a UX/UI designer and frontend developer with a passion for
                creating user-centered digital experiences.
              </p>
              <p className="text-xl text-zinc-100">
                With over 6 years of experience in the industry, I've worked with clients
                across various sectors including technology, healthcare, and e-commerce.
              </p>
              <p className="text-xl text-zinc-100">
                I believe in creating designs that are not only visually appealing but
                also functional and accessible to all users.
              </p>
            </div>
            <div className="relative">
              <img
                src="/me.png"
                alt="Pablo Morro"
                className="rounded-xl object-cover hover:opacity-80 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section - reduced bottom margin */}
      <motion.section
        id="experience"
        ref={experienceSection}
        style={{ scale: experienceScale }}
        className="relative z-0 mx-auto min-h-screen w-full max-w-7xl px-6 py-16 mb-16"
      >
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <div
            className="absolute left-[calc(50%-15rem)] top-1/2 h-[31.25rem] w-[31.25rem] -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-30 blur-3xl"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-2 border-blue-500 pl-6 relative"
                >
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <div className="flex justify-between text-sm text-zinc-400 mb-2">
                    <span>{exp.company}</span>
                    <span>{exp.duration}</span>
                  </div>
                  <p className="text-zinc-200">{exp.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700"
              >
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-blue-400">Design</h4>
                    <ul className="space-y-1 text-zinc-200">
                      <li>UI/UX Design</li>
                      <li>Wireframing</li>
                      <li>Prototyping</li>
                      <li>User Research</li>
                      <li>Visual Design</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-blue-400">Development</h4>
                    <ul className="space-y-1 text-zinc-200">
                      <li>HTML/CSS</li>
                      <li>JavaScript/React</li>
                      <li>TypeScript</li>
                      <li>Responsive Design</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section - Rockstar Style Scroll Reveal */}
      <section
        id="projects"
        ref={projectsSection}
        className="relative"
      >
        {/* Rockstar Scroll Reveal Effect for each project */}
        <div className="rockstar-scroll-container">
          {projects.map((project, index) => (
            <RockstarScrollReveal
              key={index}
              projectName={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              link={project.link}
              index={index}
              bgColor={project.bgColor}
              textColor={project.textColor}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactSection}
        className="relative z-0 mx-auto min-h-screen w-full max-w-7xl px-6 py-16"
      >
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <div
            className="absolute left-[calc(50%-15rem)] top-1/2 h-[31.25rem] w-[31.25rem] -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 opacity-30 blur-3xl"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-zinc-200">
              Feel free to reach out for collaborations, opportunities or just a friendly chat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <ContactForm />
            </div>
            <div className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-700">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <ArrowUpRight className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Email</p>
                    <p className="text-zinc-200">pablomorrodesign@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <ArrowUpRight className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Based in</p>
                    <p className="text-zinc-200">Barcelona, Spain</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-zinc-300 mb-4">Connect on social media</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-zinc-700 p-3 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-zinc-700 p-3 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-zinc-700 p-3 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
