import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Trophy, ShieldCheck, Layers, Server, Cpu, CheckCircle2 } from 'lucide-react';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c0f] border border-zinc-800 rounded-2xl shadow-2xl overflow-y-auto z-10 text-zinc-100 p-6 sm:p-8 space-y-8 scrollbar-thin"
          >
            {/* Top Bar / Close Button */}
            <div className="flex items-center justify-between pb-6 border-b border-zinc-800/80 sticky top-0 bg-[#0c0c0f]/90 backdrop-blur-md pt-1 z-20">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs text-emerald-400 font-semibold px-2.5 py-1 bg-emerald-500/10 rounded-md border border-emerald-500/20">
                  {project.number} — CASE STUDY
                </span>
                {project.badge && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Trophy className="w-3.5 h-3.5" />
                    {project.badge}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Header Info */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100">
                {project.title}
              </h2>
              <p className="text-lg text-emerald-400 font-medium">
                {project.subtitle}
              </p>
              <p className="text-zinc-400 text-base leading-relaxed">
                {project.fullDescription || project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-200 text-sm font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-950">
              <img
                src={project.image}
                alt={`${project.title} interface preview`}
                className="w-full h-auto object-cover max-h-[420px]"
              />
            </div>

            {/* Grid of Details: Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
                <div className="flex items-center space-x-2 text-red-400 font-semibold text-sm font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>THE PROBLEM</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
                <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>THE SOLUTION</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Capabilities & Architecture */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-400" />
                <span>Architecture & Implementation</span>
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.architectureText}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3 p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60 text-xs text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Breakdown */}
            <div className="space-y-3 pt-2 border-t border-zinc-800/80">
              <h3 className="text-sm font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                Technology Stack Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-zinc-900 text-zinc-200 border border-zinc-800 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
