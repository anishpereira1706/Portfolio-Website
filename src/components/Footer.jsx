import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950/50 backdrop-blur-md border-t border-white/10 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center group font-heading">
          <span className="text-white font-bold tracking-tight">anish<span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">.</span></span>
        </div>
        
        <p className="text-zinc-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Anish Pereira. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
