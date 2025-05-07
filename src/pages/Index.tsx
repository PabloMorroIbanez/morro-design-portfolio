
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { staggerContainer, fadeIn } from "@/lib/animation-utils";
import AnimatedCursor from "@/components/AnimatedCursor";
import { ArrowUpRight } from "lucide-react";

const Index = () => {
  const aboutSection = useRef(null);
  const projectsSection = useRef(null);

  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutSection,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: projectsProgress } = useScroll({
    target: projectsSection,
    offset: ["start end", "end end"],
  });

  const aboutScale = useTransform(aboutProgress, [0, 1], [0.75, 1]);
  const projectsScale = useTransform(projectsProgress, [0, 1], [0.75, 1]);

  return (
    <div className="bg-zinc-900 text-white overflow-hidden">
      <AnimatedCursor />
      <motion.div
        variants={staggerContainer(0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="relative z-0 mx-auto h-screen w-full max-w-7xl px-6 pb-32 pt-40 md:pt-60 lg:pt-32"
      >
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <div
            className="absolute left-[calc(50%-15rem)] top-1/2 h-[31.25rem] w-[31.25rem] -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-500 to-teal-500 opacity-30 blur-3xl"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-3">
            <h1 className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Pablo Morro
            </h1>
            <span className="h-5 w-5 text-blue-300">✨</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-lg text-zinc-400">
              UX/UI Designer & Frontend Developer
            </span>
            <div className="flex flex-col gap-5">
              <p className="max-w-lg text-xl text-zinc-400">
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
            
            {/* Dissolving text effect */}
            <div className="mt-8">
              <p className="dissolve-text text-2xl font-medium text-white">
                I design experiences you can feel.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section
        ref={aboutSection}
        style={{ scale: aboutScale }}
        className="relative z-0 mx-auto h-screen w-full max-w-7xl px-6 pb-32"
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
              <h2 className="section-title">About me</h2>
              <p className="text-xl text-zinc-400">
                I'm a UX/UI designer and frontend developer with a passion for
                creating user-centered digital experiences.
              </p>
              <p className="text-xl text-zinc-400">
                I'm always looking for new challenges and opportunities to
                learn and grow.
              </p>
            </div>
            <div className="relative">
              <img
                src="/me.png"
                alt="Pablo Morro"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Scroll text - positioned better */}
        <div className="absolute bottom-20 left-0 w-full text-center">
          <p className="text-zinc-400">Scroll to explore</p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsSection}
        style={{ scale: projectsScale }}
        className="relative z-0 mx-auto h-screen w-full max-w-7xl px-6 pb-32"
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
              <h2 className="section-title">Projects</h2>
              <p className="text-xl text-zinc-400">
                Here are some of my favorite projects.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 gap-5">
                <Link
                  to="/greencare"
                  className="group relative overflow-hidden rounded-xl border border-zinc-800 transition-all hover:border-zinc-700"
                >
                  <img
                    src="/lovable-uploads/07b3a8c6-a607-4c7c-8b6c-dff32c0bf56e.png"
                    alt="GreenCare"
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <h3 className="text-xl font-bold">GreenCare</h3>
                    <p className="text-sm text-zinc-400">
                      UI design for plant wellness.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
