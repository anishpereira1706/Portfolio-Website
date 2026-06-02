import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full py-24 sm:py-32 bg-zinc-950/50 border-y border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-outfit">About Me</h2>
            <div className="w-20 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          </div>
          
          <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl text-zinc-300 space-y-6 text-lg leading-relaxed hover:border-cyan-500/30 transition-colors duration-500 shadow-lg group relative overflow-hidden">
            {/* Subtle inner top glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/50 transition-all duration-700 z-10"></div>
            
            <p className="relative z-20">
              I am a tech enthusiast with a strong interest in computer applications and problem-solving. 
              I strive to bring creativity, adaptability, and attention to detail to my work, ensuring meaningful outcomes.
            </p>
            <p className="relative z-20">
              I look forward to working with innovative teams and taking on challenges that help me grow and contribute effectively.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 mt-8 border-t border-white/5 relative z-20">
              <div>
                <h3 className="text-white font-bold text-xl mb-6 font-outfit group-hover:text-cyan-400 transition-colors">Education</h3>
                <ul className="space-y-6 text-sm">
                  <li className="flex flex-col bg-zinc-950/40 p-4 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                    <span className="text-cyan-400 font-semibold text-base mb-1">MCA <span className="text-zinc-500 font-normal text-sm ml-1">(2023-2025)</span></span>
                    <span className="text-zinc-300">St Joseph Engineering College</span>
                    <span className="text-blue-400 font-medium mt-1">8.6 CGPA</span>
                  </li>
                  <li className="flex flex-col bg-zinc-950/40 p-4 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                    <span className="text-cyan-400 font-semibold text-base mb-1">BCA <span className="text-zinc-500 font-normal text-sm ml-1">(2020-2023)</span></span>
                    <span className="text-zinc-300">St. Aloysius College</span>
                    <span className="text-blue-400 font-medium mt-1">7.6 CGPA</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-6 font-outfit group-hover:text-cyan-400 transition-colors">Certifications</h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex items-start gap-3 bg-zinc-950/40 p-4 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                    <span className="leading-snug">Python Bootcamp - Udemy</span>
                  </li>
                  <li className="flex items-start gap-3 bg-zinc-950/40 p-4 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                    <span className="leading-snug">Building Web Applications in PHP - Coursera</span>
                  </li>
                  <li className="flex items-start gap-3 bg-zinc-950/40 p-4 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                    <span className="leading-snug">Introduction to Git and GitHub - Coursera</span>
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
