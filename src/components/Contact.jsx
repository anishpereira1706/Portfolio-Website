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
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-outfit">Get In Touch</h2>
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
              <h3 className="text-3xl font-bold text-white mb-6 font-outfit leading-tight">Let's talk about your next project.</h3>
              <p className="text-zinc-400 mb-8 text-lg">
                Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:anishpereira1706@gmail.com" className="interactive flex items-center gap-5 text-zinc-300 transition-all duration-300 p-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl group hover:bg-zinc-900 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/50 transition-all duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all">
                  <Mail className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="font-medium group-hover:text-white transition-colors">anishpereira1706@gmail.com</span>
              </a>
              
              <a href="tel:+919632371841" className="interactive flex items-center gap-5 text-zinc-300 transition-all duration-300 p-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl group hover:bg-zinc-900 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/50 transition-all duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all">
                  <Phone className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="font-medium group-hover:text-white transition-colors">+91 9632371841</span>
              </a>
              
              <a href="https://github.com/anishpereira1706" target="_blank" rel="noopener noreferrer" className="interactive flex items-center gap-5 text-zinc-300 transition-all duration-300 p-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl group hover:bg-zinc-900 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/50 transition-all duration-500"></div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all">
                  <Github className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="font-medium group-hover:text-white transition-colors">github.com/anishpereira1706</span>
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
            <form className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl space-y-6 shadow-lg relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500" onSubmit={handleSubmit}>
              {/* Subtle inner top glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/40 transition-all duration-700"></div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-zinc-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-900 transition-all duration-300 disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-900 transition-all duration-300 disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-900 transition-all duration-300 resize-none disabled:opacity-50"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">{errorMessage}</span>
                </motion.div>
              )}

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="interactive w-full flex items-center justify-center gap-2 bg-zinc-800 text-white font-bold py-4 px-6 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-zinc-800 disabled:hover:border-white/10 disabled:hover:text-white hover:scale-[1.02] transition-all duration-300"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
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
