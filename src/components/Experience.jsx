import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Flutter Developer Intern",
    company: "Accolade Tech Solutions Pvt. Ltd.",
    date: "May - July 2025",
    description: "Developed and maintained Flutter-based mobile applications, collaborating with the team to implement new features and optimize performance."
  },
  {
    role: "Web Developer Intern",
    company: "SJEC Foundation, Mangalore",
    date: "Oct - Nov 2024",
    description: "Assisted in the development of web interfaces and backend integration, gaining hands-on experience in modern web development practices."
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Experience = () => {
  return (
    <section id="experience" className="w-full py-24 sm:py-32 bg-zinc-950/50 border-y border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">Experience</h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/50 before:via-blue-500/20 before:to-transparent"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500/30 bg-zinc-900 shadow-[0_0_15px_rgba(34,211,238,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
                <Briefcase className="w-4 h-4" />
              </div>
              
              {/* Card */}
              <motion.div 
                whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                className="interactive w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-zinc-900 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] relative shadow-lg overflow-hidden"
              >
                {/* Subtle inner top glow on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/60 transition-all duration-500 z-20"></div>

                <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-3 gap-3">
                  <h3 className="font-bold text-white text-xl font-heading group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                  <span className="text-xs font-medium px-3 py-1.5 bg-zinc-950/60 text-zinc-400 border border-white/5 rounded-lg w-fit group-hover:bg-cyan-500/10 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-all duration-300">
                    {exp.date}
                  </span>
                </div>
                <div className="text-blue-400 text-sm font-semibold mb-4 tracking-wide">{exp.company}</div>
                <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
