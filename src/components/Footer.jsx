import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 group font-outfit">
          <span className="text-white font-bold tracking-tight">anish</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
        </div>
        
        <p className="text-zinc-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Anish Larson Pereira. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
