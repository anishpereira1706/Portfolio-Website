import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full py-24 sm:py-32 border-y border-white/5 relative">
      {/* Decorative background glow */}
      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-rrom-cyan-400 to-blue-500 font-heading">About Me</h2>
            <div className="w-20 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          </div>
          
          <div className="bg-linear-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl border border-white/5 p-6 sm:p-8 md:p-12 rounded-3xl sm:rounded-4xl text-zinc-300 space-y-6 text-lg leading-relaxed hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(34,211,238,0.1)] group relative overflow-hidden flex flex-col">
            {/* Permanent subtle top border that brightens on hover */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-cyan-500/30 to-transparent group-hover:via-cyan-400 transition-all duration-700"></div>
            
            {/* Subtle background glow that appears on hover */}
            <div className="absolute -inset-24 bg-linear-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl z-0 pointer-events-none"></div>
            
            <p className="relative z-20">
              I am a tech enthusiast with a strong interest in computer applications and problem-solving. 
              I strive to bring creativity, adaptability, and attention to detail to my work, ensuring meaningful outcomes.
            </p>
            <p className="relative z-20">
              I look forward to working with innovative teams and taking on challenges that help me grow and contribute effectively.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 mt-8 border-t border-white/5 relative z-20">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-zinc-200 to-zinc-400 font-heading group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">Education</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex flex-col bg-linear-to-br from-zinc-900/80 to-zinc-950/80 p-5 rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 cursor-default">
                    <span className="text-cyan-400 font-semibold text-lg mb-1">MCA <span className="text-zinc-500 font-normal text-sm ml-2">(2023-2025)</span></span>
                    <span className="text-zinc-300 font-medium">St Joseph Engineering College</span>
                    <span className="text-blue-400 font-medium mt-1">8.6 CGPA</span>
                  </li>
                  <li className="flex flex-col bg-linear-to-br from-zinc-900/80 to-zinc-950/80 p-5 rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 cursor-default">
                    <span className="text-cyan-400 font-semibold text-lg mb-1">BCA <span className="text-zinc-500 font-normal text-sm ml-2">(2020-2023)</span></span>
                    <span className="text-zinc-300 font-medium">St. Aloysius College</span>
                    <span className="text-blue-400 font-medium mt-1">7.6 CGPA</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-zinc-200 to-zinc-400 font-heading group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">Certifications</h3>
                <ul className="space-y-4 text-sm text-zinc-400">
                  <li className="flex items-start gap-4 bg-linear-to-br from-zinc-900/80 to-zinc-950/80 p-5 rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 cursor-default">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                    <span className="leading-snug font-medium text-zinc-300">Python Bootcamp - Udemy</span>
                  </li>
                  <li className="flex items-start gap-4 bg-linear-to-br from-zinc-900/80 to-zinc-950/80 p-5 rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 cursor-default">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                    <span className="leading-snug font-medium text-zinc-300">Building Web Applications in PHP - Coursera</span>
                  </li>
                  <li className="flex items-start gap-4 bg-linear-to-br from-zinc-900/80 to-zinc-950/80 p-5 rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 cursor-default">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                    <span className="leading-snug font-medium text-zinc-300">Introduction to Git and GitHub - Coursera</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
