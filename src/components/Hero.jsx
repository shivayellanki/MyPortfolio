import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowDown, ExternalLink, Github, Linkedin, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-8">
        
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3"
        >
          {/* Main Label */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            FULL-STACK DEVELOPER
          </span>

          {/* Location & Status Badges */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-zinc-900/80 border border-zinc-800">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            Hyderabad, India
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-zinc-900/80 border border-zinc-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open to Internships
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-100 leading-[1.08]"
        >
          I build web applications{' '}
          <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-emerald-400 bg-clip-text text-transparent">
            from interface to infrastructure.
          </span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl"
        >
          I'm <strong className="text-zinc-200 font-semibold">Shiva</strong>, a Full-Stack Developer building secure and intelligent web applications with React, Node.js, Express and modern backend technologies.
        </motion.p>

        {/* Action CTAs & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          {/* Primary CTA */}
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 hover:text-zinc-950 transition-all duration-200 shadow-lg shadow-zinc-950/50 group"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 text-zinc-950 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <a
            href="https://drive.google.com/file/d/1uA_YoHpgxa595EacWZorThFDOFX4MMlI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 hover:border-emerald-500/50 text-sm font-semibold transition-all duration-200"
          >
            <span>Download Resume</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>

          {/* Social Icon Links */}
          <div className="flex items-center space-x-2 pl-2 border-l border-zinc-800">
            <a
              href="https://github.com/shivayellanki"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/shiva-yellanki-7004b5304"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
