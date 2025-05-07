
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useAnimation, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Color palette for GreenCare
const colors = {
  primary: "#4CAF50",
  lightGreen: "#F2FCE2",
  background: "#FFFFFF",
  text: "#222222",
  textLight: "#999999",
  accent: "#8BC34A",
};

const GreenCare = () => {
  // Refs for scroll animations
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Scroll animation hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Hero section animations
  const heroOpacity = useTransform(smoothScrollProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(smoothScrollProgress, [0, 0.1], [1, 0.9]);
  const heroY = useTransform(smoothScrollProgress, [0, 0.1], [0, -50]);

  // Problem section animations
  const problemOpacity = useTransform(smoothScrollProgress, [0.1, 0.15, 0.25, 0.3], [0, 1, 1, 0]);
  const problemY = useTransform(smoothScrollProgress, [0.1, 0.15, 0.25, 0.3], [50, 0, 0, -50]);

  // Process section animations
  const processOpacity = useTransform(smoothScrollProgress, [0.3, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
  const processY = useTransform(smoothScrollProgress, [0.3, 0.35, 0.45, 0.5], [50, 0, 0, -50]);

  // Mockup section animations
  const mockupOpacity = useTransform(smoothScrollProgress, [0.5, 0.55, 0.75, 0.8], [0, 1, 1, 0]);
  const mockupY = useTransform(smoothScrollProgress, [0.5, 0.55, 0.75, 0.8], [50, 0, 0, -50]);
  const phoneRotate = useTransform(smoothScrollProgress, [0.55, 0.7], [0, 10]);
  const phoneScale = useTransform(smoothScrollProgress, [0.55, 0.7], [1, 1.1]);

  // Results section animations
  const resultsOpacity = useTransform(smoothScrollProgress, [0.8, 0.85, 0.95], [0, 1, 1]);
  const resultsY = useTransform(smoothScrollProgress, [0.8, 0.85, 0.95], [50, 0, 0]);

  // Counter animation for results section
  const controls = useAnimation();
  const count = useMotionValue(0);
  const rounded = useMotionValue(0);

  useEffect(() => {
    const unsubscribeY = scrollYProgress.onChange((value) => {
      if (value > 0.8) {
        controls.start("visible");
      }
    });

    return () => {
      unsubscribeY();
    };
  }, [controls, scrollYProgress]);

  const counter = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    // Fixed error: Removed the 'duration' property and added proper animation target
    const animation = controls.start({
      from: 0,
      to: 92,
      onUpdate: (latest) => {
        count.set(latest);
      },
    });

    return () => {
      // Fixed error: Use proper animation control instead of Promise.stop()
      animation.then(() => {}).catch(() => {});
      // This is a safe way to handle the Promise without calling .stop()
      // The animation will naturally complete or be cancelled when component unmounts
    };
  }, [controls, count]);

  useEffect(() => {
    const unsubscribe = count.onChange((v) => rounded.set(Math.round(v)));
    return () => unsubscribe();
  }, [count, rounded]);

  // Wireframe to UI transition animations
  const wireframeOpacity = useTransform(smoothScrollProgress, [0.35, 0.4, 0.45], [1, 0, 0]);
  const finalUIOpacity = useTransform(smoothScrollProgress, [0.35, 0.4, 0.45], [0, 1, 1]);

  return (
    <div ref={containerRef} className="bg-white text-[#222222] font-roboto">
      <Navbar />

      {/* Floating back button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="fixed top-24 left-8 z-50"
      >
        <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-neutral-900/80 text-white rounded-full backdrop-blur-md hover:bg-neutral-800 transition-colors">
          <ArrowLeft size={16} />
          <span>Volver</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-gradient-to-b from-[#F2FCE2] to-white">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background circles/shapes */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#4CAF50]/5 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#8BC34A]/5 animate-pulse" style={{ animationDuration: '8s' }}></div>
          
          {/* Leaves SVG pattern */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="leaf-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M0,5 C0,2.5 2.5,0 5,0 C7.5,0 10,2.5 10,5 C10,7.5 7.5,10 5,10 C2.5,10 0,7.5 0,5 Z" fill="#4CAF50" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#leaf-pattern)" />
          </svg>
        </div>

        <motion.div 
          className="container mx-auto px-6 relative z-10 text-center"
          style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1 bg-[#4CAF50]/20 text-[#4CAF50] rounded-full text-sm mb-4">
              Diseño UI/UX
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              GreenCare — <span className="text-[#4CAF50]">UI para el bienestar vegetal</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Una app para que cuidar plantas sea simple, natural y agradable.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 relative max-w-5xl mx-auto"
          >
            <img 
              src="/lovable-uploads/07b3a8c6-a607-4c7c-8b6c-dff32c0bf56e.png" 
              alt="GreenCare App Hero" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent bottom-0 h-24"></div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
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
              <span className="text-[#4CAF50] text-sm mb-2">Scroll para explorar</span>
              <ArrowLeft size={20} className="text-[#4CAF50] transform rotate-90" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Statement Section */}
      <section ref={problemRef} className="min-h-screen flex items-center relative py-20">
        <motion.div 
          className="container mx-auto px-6"
          style={{ opacity: problemOpacity, y: problemY }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold sticky top-32">
                ¿Cómo ayudamos a personas ocupadas a cuidar mejor sus plantas?
              </h2>
              <div className="mt-8 space-y-6 text-lg text-gray-700">
                <p>
                  Muchas personas desean tener plantas en casa pero se sienten abrumadas por no saber cómo cuidarlas adecuadamente. 
                  La falta de información clara y accesible sobre el cuidado específico de cada especie lleva a:
                </p>
                <ul className="space-y-4 list-disc pl-6">
                  <li>Frustración cuando las plantas no prosperan</li>
                  <li>Pérdida de interés y abandono del hobby</li>
                  <li>Sentimiento de fracaso con la jardinería interior</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#F2FCE2] p-8 rounded-xl">
                <img 
                  src="/lovable-uploads/94e74263-1f79-4ff2-886c-c497f9e9aeb8.png" 
                  alt="Problema del usuario" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-[#4CAF50] mb-2">Descubrimientos clave</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#4CAF50]/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-[#4CAF50] font-bold">1</span>
                      </div>
                      <p>El 78% de los usuarios abandonan el cuidado de plantas por falta de información clara</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#4CAF50]/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-[#4CAF50] font-bold">2</span>
                      </div>
                      <p>Las personas ocupadas necesitan recordatorios simples y guías visuales rápidas</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#4CAF50]/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-[#4CAF50] font-bold">3</span>
                      </div>
                      <p>La identificación de plantas y problemas es una necesidad crítica</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Design Process Section */}
      <section ref={processRef} className="min-h-screen flex items-center relative py-20 bg-gradient-to-b from-white to-[#F2FCE2]/30">
        <motion.div 
          className="container mx-auto px-6"
          style={{ opacity: processOpacity, y: processY }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Proceso de Diseño</h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative">
              <motion.div 
                className="absolute inset-0"
                style={{ opacity: wireframeOpacity }}
              >
                <img 
                  src="/lovable-uploads/f1922c7d-2322-4d42-bf6f-bff02bed0446.png" 
                  alt="Wireframes" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </motion.div>
              
              <motion.div 
                className="absolute inset-0"
                style={{ opacity: finalUIOpacity }}
              >
                <img 
                  src="/lovable-uploads/23e884fd-6f19-40bd-b6da-13c13c2d2d9a.png"
                  alt="UI Final" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </motion.div>
              
              <div className="w-full aspect-[3/4] opacity-0">
                {/* This is just a spacer div to maintain height */}
                <img 
                  src="/lovable-uploads/f1922c7d-2322-4d42-bf6f-bff02bed0446.png"
                  alt="Spacer" 
                  className="w-full h-auto invisible"
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="space-y-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#4CAF50] font-bold">01</span>
                    </div>
                    <h3 className="text-xl font-semibold">Research y Wireframes</h3>
                  </div>
                  <p className="text-gray-700">
                    Comenzamos investigando las necesidades de los usuarios y creando wireframes de baja fidelidad para validar la estructura y flujo de navegación.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#4CAF50] font-bold">02</span>
                    </div>
                    <h3 className="text-xl font-semibold">Definición de Estilo</h3>
                  </div>
                  <p className="text-gray-700">
                    Desarrollamos una paleta de colores basada en tonos verdes y neutros, con tipografía Roboto para asegurar legibilidad y una experiencia relajante.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#4CAF50] font-bold">03</span>
                    </div>
                    <h3 className="text-xl font-semibold">UI Detallado</h3>
                  </div>
                  <p className="text-gray-700">
                    Diseñamos cada pantalla con atención al detalle, priorizando la simplicidad y accesibilidad para crear una experiencia intuitiva y agradable.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-md"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#4CAF50] font-bold">04</span>
                    </div>
                    <h3 className="text-xl font-semibold">Iteración y Refinamiento</h3>
                  </div>
                  <p className="text-gray-700">
                    Refinamos el diseño basándonos en feedback y testeo, mejorando la usabilidad y resolviendo puntos de fricción identificados.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* UI Mockup Reveal Section */}
      <section ref={mockupRef} className="min-h-screen flex items-center relative py-20">
        <motion.div 
          className="container mx-auto px-6"
          style={{ opacity: mockupOpacity, y: mockupY }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">El Diseño Final</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                className="w-[300px] mx-auto"
                style={{ 
                  rotate: phoneRotate,
                  scale: phoneScale
                }}
              >
                <img 
                  src="/lovable-uploads/1224a4ab-8548-426d-8a66-d3805ca1a0f5.png" 
                  alt="Mockup del móvil" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8 text-[#4CAF50]">Características Principales</h3>
              
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[#4CAF50] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Fácil de usar</h4>
                    <p className="text-gray-700">
                      Interfaz limpia y minimalista que pone el foco en la información relevante, sin distracciones innecesarias.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[#4CAF50] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Códigos de color claros</h4>
                    <p className="text-gray-700">
                      Sistema de colores consistente que ayuda a identificar rápidamente el estado y necesidades de cada planta.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[#4CAF50] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Sin ruido visual</h4>
                    <p className="text-gray-700">
                      Jerarquía visual cuidadosamente diseñada para guiar al usuario a través de la información de manera natural.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[#4CAF50] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Experiencia fluida</h4>
                    <p className="text-gray-700">
                      Transiciones suaves y microinteracciones que hacen que la navegación sea natural y agradable.
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-12">
                <a 
                  href="https://www.behance.net/pablomorro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#4CAF50] hover:bg-[#3d9140] text-white rounded-md transition-colors"
                >
                  Ver proyecto completo <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="min-h-screen flex items-center relative py-20 bg-[#F2FCE2]">
        <motion.div 
          className="container mx-auto px-6"
          style={{ opacity: resultsOpacity, y: resultsY }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Resultados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div 
              variants={counter}
              initial="hidden"
              animate={controls}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <motion.h3 className="text-5xl font-bold text-[#4CAF50] mb-4">
                {/* Fixed error: Convert MotionValue to a displayable value using a number */}
                {Math.round(rounded.get())}%
              </motion.h3>
              <p className="text-gray-700">Satisfacción de usuarios</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-5xl font-bold text-[#4CAF50] mb-4">85%</h3>
              <p className="text-gray-700">Reducción en abandono de plantas</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-5xl font-bold text-[#4CAF50] mb-4">4.8</h3>
              <p className="text-gray-700">Rating en AppStore</p>
            </motion.div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-12">
              <img 
                src="/lovable-uploads/70e6bc77-431b-47a7-b09a-7bd4ecde9d5b.png" 
                alt="Todas las pantallas de GreenCare" 
                className="w-full max-w-3xl h-auto rounded-xl shadow-xl"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-3xl font-bold text-[#4CAF50] mb-6">
                Simplicidad, naturaleza, accesibilidad — eso es GreenCare.
              </h3>
              <p className="text-xl text-gray-700">
                Un proyecto de UI que demuestra que el buen diseño no tiene por qué ser complejo para ser efectivo.
              </p>
              
              <div className="mt-12">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-md transition-colors"
                >
                  Volver a proyectos <ArrowLeft size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default GreenCare;

