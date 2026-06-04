import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Smartphone } from 'lucide-react';

const skillsData = [
  { 
    category: "Languages", 
    icon: <Code2 className="w-6 h-6" />,
    items: ["JavaScript", "Python", "C++", "Dart", "SQL", "PHP"] 
  },
  { 
    category: "Frontend", 
    icon: <Layout className="w-6 h-6" />,
    items: ["React.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"] 
  },
  { 
    category: "Backend/DB", 
    icon: <Database className="w-6 h-6" />,
    items: ["Flask", "MongoDB", "MySQL"] 
  },
  { 
    category: "Mobile/AI & Tools", 
    icon: <Smartphone className="w-6 h-6" />,
    items: ["Flutter", "TensorFlow", "Git", "Linux"] 
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="w-full py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute -right-40 top-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">Technical Skills</h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          <p className="text-zinc-400 max-w-2xl text-lg mt-4">The tools and technologies I use to bring ideas to life.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {skillsData.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="interactive glass p-6 sm:p-8 rounded-[2rem] border border-white/5 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl hover:from-zinc-900/100 hover:to-zinc-900/90 transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_50px_rgba(34,211,238,0.1)] group relative overflow-hidden flex flex-col"
            >
              {/* Permanent subtle top border that brightens on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent group-hover:via-cyan-400 transition-all duration-700"></div>

              {/* Subtle background glow that appears on hover */}
              <div className="absolute -inset-24 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl z-0 pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 text-cyan-400 group-hover:from-cyan-500/20 group-hover:to-blue-500/10 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-[0_0_15px_rgba(34,211,238,0.05)] shrink-0">
                  {skillGroup.icon}
                </div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-400 font-heading group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10 flex-grow content-start">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 bg-zinc-950/80 border border-white/5 rounded-xl text-sm font-semibold text-zinc-300 shadow-sm transition-all duration-300 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:-translate-y-1 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
