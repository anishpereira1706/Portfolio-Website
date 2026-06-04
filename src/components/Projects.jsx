import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Smartphone, Database, Globe, Code2, Layout, FileJson } from 'lucide-react';
import { GithubIcon as Github } from './GithubIcon';

const projects = [
  {
    title: "AgroScan AI",
    description: "Smart Crop Disease Detection & Soil Analysis. AI + IoT based system using EfficientNetB0 and ESP32 sensors for crop disease prediction, soil analysis, and data management via a web interface with admin control.",
    image: "/agroscanai.png",
    tags: [
      { name: "AI/ML", icon: <Cpu className="w-4 h-4" /> },
      { name: "IoT & ESP32", icon: <Cpu className="w-4 h-4" /> },
      { name: "Python", icon: <FileJson className="w-4 h-4" /> },
      { name: "Web App", icon: <Globe className="w-4 h-4" /> }
    ],
    github: "https://github.com/anishpereira1706"
  },
  {
    title: "PawConnect",
    description: "Pet Adoption & Rescue App. Built using Flutter for cross-platform app support and a custom PHP/MySQL backend.",
    image: "/pawconnect.png",
    tags: [
      { name: "Flutter", icon: <Smartphone className="w-4 h-4" /> },
      { name: "Dart", icon: <Code2 className="w-4 h-4" /> },
      { name: "PHP", icon: <Globe className="w-4 h-4" /> },
      { name: "MySQL", icon: <Database className="w-4 h-4" /> },
      { name: "Mobile App", icon: <Smartphone className="w-4 h-4" /> }
    ],
    github: "https://github.com/anishpereira1706"
  },
  {
    title: "Schedula App",
    description: "A modern Flutter-based timetable management app with smart scheduling, offline support, and seamless export features.",
    image: "/schedula.png",
    tags: [
      { name: "Flutter", icon: <Smartphone className="w-4 h-4" /> },
      { name: "Dart", icon: <Code2 className="w-4 h-4" /> },
      { name: "Mobile App", icon: <Smartphone className="w-4 h-4" /> }
    ],
    github: "https://github.com/anishpereira1706/Schedula-app"
  },
  {
    title: "E-Pharmacy Store",
    description: "A comprehensive web-based pharmacy management system allowing users to buy medicines online and admins to manage inventory.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: [
      { name: "HTML/CSS", icon: <Layout className="w-4 h-4" /> },
      { name: "JavaScript", icon: <Code2 className="w-4 h-4" /> },
      { name: "PHP", icon: <Globe className="w-4 h-4" /> },
      { name: "MySQL", icon: <Database className="w-4 h-4" /> },
      { name: "Bootstrap", icon: <Layout className="w-4 h-4" /> }
    ],
    github: "https://github.com/anishpereira1706"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
          className="text-center mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading tracking-tight">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16 lg:space-y-24"
        >
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`interactive group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-zinc-900/90 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(34,211,238,0.2)] relative shadow-2xl`}
              >
                {/* Subtle inner top glow on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/80 transition-all duration-700 z-30"></div>

                {/* Image Section */}
                <div className="w-full lg:w-[55%] h-64 sm:h-80 lg:h-auto relative overflow-hidden shrink-0 border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  {/* Gradient blend for image edge on large screens */}
                  <div className={`hidden lg:block absolute inset-y-0 w-1/4 from-zinc-900/90 to-transparent z-20 ${isEven ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'}`}></div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-[45%] p-8 sm:p-10 lg:p-12 flex flex-col justify-center relative z-20">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-white font-heading group-hover:text-cyan-400 transition-colors duration-300 tracking-tight">
                      {project.title}
                    </h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 bg-zinc-950/50 p-3 rounded-full border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] ml-4 shrink-0">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>

                  <p className="text-zinc-400 text-lg leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="flex items-center gap-2 px-4 py-2 bg-zinc-950/80 border border-white/5 rounded-xl text-sm font-semibold text-zinc-300 group-hover:border-cyan-500/30 group-hover:text-cyan-300 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300"
                      >
                        <span className="text-cyan-500 group-hover:text-cyan-400 transition-colors text-base">{tag.icon}</span>
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
