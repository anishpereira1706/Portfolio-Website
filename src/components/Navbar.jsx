import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon as Github } from './GithubIcon';
import { clsx } from 'clsx';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-4'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center group font-heading">
            <span>anish<span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">.</span></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/anishpereira1706" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-cyan-400 text-zinc-950 text-sm font-bold hover:bg-cyan-300 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              Let's Connect
            </a>
          </div>

          {/* Animated Mobile Menu Button */}
          <button 
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-zinc-300 hover:text-cyan-400 transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-6 h-0.5 bg-current block rounded-full"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }} 
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-current block rounded-full"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} 
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-6 h-0.5 bg-current block rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="block text-base font-medium text-zinc-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex items-center justify-between border-t border-white/10">
            <a href="https://github.com/anishpereira1706" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 rounded-full bg-white text-zinc-950 text-sm font-semibold">
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 origin-left shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        style={{ scaleX }}
      />
    </header>
  );
};

export default Navbar;
