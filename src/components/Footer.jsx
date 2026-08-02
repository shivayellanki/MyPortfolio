import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative z-10 border-t border-zinc-800/80 bg-[#070709]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Identity */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <span className="font-bold text-zinc-100 text-lg">
              Yellanki Shiva Prasad
            </span>
            <span className="text-emerald-400 font-mono text-sm font-semibold">.</span>
          </div>
          <p className="text-xs text-zinc-400 font-mono">
            Full-Stack Developer • Hyderabad, India
          </p>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/shivayellanki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/shiva-yellanki-7004b5304"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-600">
        <span>© {new Date().getFullYear()} Yellanki Shiva Prasad. All rights reserved.</span>
        <span>Built with React + Vite + Tailwind CSS</span>
      </div>
    </footer>
  );
}
