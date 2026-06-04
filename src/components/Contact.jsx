import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon as Github } from './GithubIcon';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c68fe6c7-0bef-4324-971a-dce2cbc1b2b5',
          ...formData
        })
      });

      const result = await response.json();
      
      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please check your connection.');
    }
  };

  return (
    <section id="contact" className="w-full py-24 sm:py-32 bg-zinc-950/50 border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-heading">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          <p className="text-zinc-400 max-w-2xl text-lg mt-4">I'm always open to new opportunities and interesting projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8 lg:py-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 font-heading leading-tight">Let's talk about your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">next project.</span></h3>
              <p className="text-zinc-400 mb-8 text-lg">
                Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:anishpereira1706@gmail.com" className="interactive flex items-center gap-5 text-zinc-300 transition-all duration-300 p-4 bg-zinc-900/80 backdrop-blur-xl border border-white/5 rounded-2xl group hover:bg-zinc-900/90 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                <div className="absolute -inset-24 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl z-0 pointer-events-none"></div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/5 flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-blue-500/10 group-hover:border-cyan-500/30 transition-all z-10 shrink-0">
                  <Mail className="w-6 h-6 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="font-medium text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-colors z-10 truncate">anishpereira1706@gmail.com</span>
              </a>
              
              <a href="tel:+919632371841" className="interactive flex items-center gap-5 text-zinc-300 transition-all duration-300 p-4 bg-zinc-900/80 backdrop-blur-xl border border-white/5 rounded-2xl group hover:bg-zinc-900/90 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                <div className="absolute -inset-24 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl z-0 pointer-events-none"></div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/5 flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-blue-500/10 group-hover:border-cyan-500/30 transition-all z-10 shrink-0">
                  <Phone className="w-6 h-6 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="font-medium text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-colors z-10">+91 9632371841</span>
              </a>
              
              <a href="https://github.com/anishpereira1706" target="_blank" rel="noopener noreferrer" className="interactive flex items-center gap-5 text-zinc-300 transition-all duration-300 p-4 bg-zinc-900/80 backdrop-blur-xl border border-white/5 rounded-2xl group hover:bg-zinc-900/90 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                <div className="absolute -inset-24 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl z-0 pointer-events-none"></div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/5 flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-blue-500/10 group-hover:border-cyan-500/30 transition-all z-10 shrink-0">
                  <Github className="w-6 h-6 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="font-medium text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-colors z-10">github.com/anishpereira1706</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <form className="bg-zinc-900/80 backdrop-blur-xl border border-white/5 p-8 sm:p-10 rounded-[2rem] space-y-6 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(34,211,238,0.1)] flex flex-col" onSubmit={handleSubmit}>
              {/* Animated top border line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
              
              {/* Subtle background glow */}
              <div className="absolute -inset-24 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl z-0 pointer-events-none"></div>
              
              <div className="relative z-10">
                <label htmlFor="name" className="block text-sm font-semibold text-zinc-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-zinc-950/80 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-900/90 transition-all duration-300 disabled:opacity-50 placeholder-zinc-600 focus:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                  placeholder="John Doe"
                />
              </div>
              <div className="relative z-10">
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-zinc-950/80 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-900/90 transition-all duration-300 disabled:opacity-50 placeholder-zinc-600 focus:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                  placeholder="john@example.com"
                />
              </div>
              <div className="relative z-10">
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-zinc-950/80 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-900/90 transition-all duration-300 resize-none disabled:opacity-50 placeholder-zinc-600 focus:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {/* Status Messages */}
              <div className="relative z-10">
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-emerald-400 bg-emerald-400/10 p-4 rounded-2xl border border-emerald-400/20 backdrop-blur-md">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-red-400 bg-red-400/10 p-4 rounded-2xl border border-red-400/20 backdrop-blur-md">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">{errorMessage}</span>
                  </motion.div>
                )}
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="interactive relative z-10 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] disabled:opacity-50 hover:scale-[1.02] transition-all duration-300 border border-white/10"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
