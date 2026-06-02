import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon as Github } from './GithubIcon';

const projects = [
  {
    title: "AgroScan AI",
    description: "Smart Crop Disease Detection & Soil Analysis. AI + IoT based system using EfficientNetB0 and ESP32 sensors for crop disease prediction, soil analysis, and data management via a web interface with admin control.",
    image: "/agroscan-ai.png",
    tags: ["AI/ML", "IoT", "EfficientNetB0", "ESP32", "Web Interface"],
    github: "https://github.com/anishpereira1706"
  },
  {
    title: "PawConnect",
    description: "Pet Adoption & Rescue App. Built using Flutter for cross-platform app support and a custom PHP/MySQL backend.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Flutter", "Dart", "PHP", "MySQL", "Mobile App"],
    github: "https://github.com/anishpereira1706"
  },
  {
    title: "E-Pharmacy Store",
    description: "A comprehensive web-based pharmacy management system allowing users to buy medicines online and admins to manage inventory.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/anishpereira1706"
  },
  {
    title: "Schedula",
    description: "A modern Flutter-based timetable management app with smart scheduling, offline support, and seamless export features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Flutter", "Dart", "Mobile App"],
    github: "https://github.com/anishpereira1706/Schedula-app"
  }
];

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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-outfit">Featured Projects</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="interactive group bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-zinc-900 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] relative shadow-lg flex flex-col h-full"
            >
              {/* Subtle inner top glow on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/60 transition-all duration-500 z-20"></div>

              <div className="h-56 sm:h-64 overflow-hidden relative border-b border-white/5">
                <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white font-outfit group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 bg-white/5 p-2 rounded-full border border-white/5 hover:border-cyan-500/30">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-zinc-400 mb-8 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1.5 bg-zinc-950/60 border border-white/5 rounded-lg text-xs font-medium text-zinc-400 group-hover:border-cyan-500/30 group-hover:text-cyan-300 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.1)] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
