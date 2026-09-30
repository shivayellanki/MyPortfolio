import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, FileText, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav border-b border-zinc-800/80 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center space-x-2 text-xl font-bold tracking-tight text-zinc-100"
        >
          <span className="bg-zinc-900 border border-zinc-700/60 rounded-lg px-2.5 py-1 text-emerald-400 font-mono group-hover:border-emerald-500/50 transition-colors">
            YSP<span className="text-emerald-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons & Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/shivayellanki"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-zinc-400 hover:text-zinc-100 p-2 rounded-lg hover:bg-zinc-800/60 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/shiva-yellanki-7004b5304"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-zinc-400 hover:text-zinc-100 p-2 rounded-lg hover:bg-zinc-800/60 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://drive.google.com/https://drive.google.com/file/d/1uA_YoHpgxa595EacWZorThFDOFX4MMlI/view?usp=sharing/d/1uA_YoHpgxa595EacWZorThFDOFX4MMlI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-emerald-500/40 text-sm font-medium text-zinc-100 transition-all shadow-sm group"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden text-zinc-300 hover:text-zinc-100 p-2 rounded-lg border border-zinc-800 bg-zinc-900/80"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-zinc-800 bg-[#09090b]/95 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-zinc-300 hover:text-emerald-400 py-1 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <div className="flex space-x-3">
                <a
                  href="https://github.com/shiva074"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-100 p-2 rounded-lg bg-zinc-900 border border-zinc-800"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/shiva-yellanki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-100 p-2 rounded-lg bg-zinc-900 border border-zinc-800"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <a
                href="https://drive.google.com/file/d/1uA_YoHpgxa595EacWZorThFDOFX4MMlI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-sm font-medium text-emerald-400"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
