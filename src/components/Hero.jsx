import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  // Mouse parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the parallax effect
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  // Map mouse position to a small offset range for the background blur
  const backgroundX = useTransform(smoothX, [0, window.innerWidth], [-50, 50]);
  const backgroundY = useTransform(smoothY, [0, window.innerHeight], [-50, 50]);
  
  // Image parallax (moves opposite to background for depth)
  const imageX = useTransform(smoothX, [0, window.innerWidth], [20, -20]);
  const imageY = useTransform(smoothY, [0, window.innerHeight], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-24 md:py-0 overflow-hidden">
      {/* Interactive Background gradient blob */}
      <motion.div 
        style={{ x: backgroundX, y: backgroundY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-cyan-600/10 rounded-full blur-[120px] opacity-50 pointer-events-none z-0"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-16 w-full z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 space-y-8 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Available for new opportunities
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-heading leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Anish</span>.
            <br />
            <span className="text-2xl sm:text-4xl lg:text-5xl text-zinc-300 font-semibold h-10 block mt-4">
              <Typewriter
                words={['Web Developer', 'AI/ML Enthusiast', 'Graphic Designer']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto md:mx-0 leading-relaxed pt-2">
            I craft clean, responsive, and engaging digital experiences. Passionate about problem-solving and building the future of the web.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 pt-4 justify-center md:justify-start">
            <a href="#projects" className="group interactive flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-400 text-zinc-950 font-bold hover:bg-cyan-300 transition-all duration-300">
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/Anish_Resume_Updated.pdf" target="_blank" rel="noopener noreferrer" className="interactive flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Image / Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end w-full max-w-md md:max-w-none relative mt-10 md:mt-0"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="interactive"
          >
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-100 lg:h-100 rounded-full p-0.75 group shadow-[0_0_40px_rgba(34,211,238,0.2)] hover:shadow-[0_0_80px_rgba(34,211,238,0.6)] transition-all duration-500 flex-none"
            >
              {/* Spinning gradient border simulating particles */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0_270deg,#22d3ee_360deg)] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Additional glow layer */}
              <div className="absolute inset-0 rounded-full bg-linear-to-tr from-cyan-500/20 to-blue-600/20 blur-xl group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-colors duration-500"></div>
              
              {/* Inner Image Container */}
              <div className="absolute inset-1 z-10 bg-zinc-900 rounded-full overflow-hidden border-2 border-zinc-950/50 group-hover:border-cyan-500/50 transition-colors duration-500">
                <img 
                  src="/anish.webp" 
                  alt="Anish Larson Pereira" 
                  decoding="async"
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900/60 via-transparent to-transparent opacity-60 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
