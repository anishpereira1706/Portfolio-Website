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
    <section id="experience" className="w-full py-24 sm:py-32 border-y border-white/5 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute right-0 top-1/2 translate-x-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-heading">Experience</h2>
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
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 shadow-[0_0_15px_rgba(34,211,238,0.1)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-cyan-400 group-hover:scale-110 group-hover:from-cyan-500/20 group-hover:to-blue-500/10 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:text-cyan-300 transition-all duration-500">
                <Briefcase className="w-5 h-5" />
              </div>
              
              {/* Card */}
              <motion.div 
                whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                className="interactive w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-zinc-900/30 to-zinc-950/30 backdrop-blur-md border border-white/10 rounded-3xl md:rounded-[2rem] p-5 sm:p-6 md:p-8 hover:from-zinc-900/40 hover:to-zinc-900/30 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(34,211,238,0.1)] relative shadow-lg overflow-hidden flex flex-col"
              >
                {/* Permanent subtle top border that brightens on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent group-hover:via-cyan-400 transition-all duration-700"></div>
                
                {/* Subtle background glow that appears on hover */}
                <div className="absolute -inset-24 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl z-0 pointer-events-none"></div>

                <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-3 relative z-10">
                  <h3 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-400 font-heading group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">{exp.role}</h3>
                  <span className="text-xs font-semibold px-4 py-2 bg-zinc-950/40 backdrop-blur-sm text-zinc-300 border border-white/10 rounded-xl w-fit group-hover:bg-cyan-500/10 group-hover:text-cyan-300 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all duration-300 shrink-0">
                    {exp.date}
                  </span>
                </div>
                <div className="text-cyan-400/80 text-sm font-semibold mb-4 tracking-wide relative z-10">{exp.company}</div>
                <p className="text-zinc-400 text-sm leading-relaxed relative z-10">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
