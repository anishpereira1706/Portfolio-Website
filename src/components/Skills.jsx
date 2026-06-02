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
          <h2 className="text-3xl md:text-4xl font-bold text-white font-outfit">Technical Skills</h2>
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
              whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="interactive glass p-6 sm:p-8 rounded-3xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group relative overflow-hidden"
            >
              {/* Subtle inner top glow on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/50 transition-all duration-500"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 text-zinc-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shrink-0">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-outfit group-hover:text-cyan-400 transition-colors">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 bg-zinc-950/50 border border-white/5 rounded-xl text-sm font-medium text-zinc-400 transition-all duration-300 group-hover:border-cyan-500/20 group-hover:text-cyan-200 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]"
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
