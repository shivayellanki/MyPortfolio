import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = 'shivayellanki08@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-zinc-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight leading-tight">
            Let's build something useful.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            I'm currently open to{' '}
            <strong className="text-zinc-200">Full-Stack Development internship opportunities</strong>.
            Whether you have a project, an internship role, or technical questions — reach out directly.
          </p>
        </div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {/* Email Card */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800/90 space-y-3">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
              DIRECT EMAIL ADDRESS
            </span>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex items-center justify-between flex-1 p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                <div className="flex items-center gap-2 min-w-0">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-sm font-mono text-emerald-400 truncate">{email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="ml-3 p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-zinc-100 transition-colors shrink-0 flex items-center gap-1.5 text-xs font-semibold"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Social Profile Cards */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
              CONNECT &amp; PROFILES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/shiva-yellanki-7004b5304"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl glass-panel border border-zinc-800 hover:border-emerald-500/40 transition-all duration-200 group overflow-hidden"
              >
                <div className="shrink-0 p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/30 transition-colors">
                  <Linkedin className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-sm font-semibold block text-zinc-100 group-hover:text-emerald-400 transition-colors">LinkedIn</span>
                  <span className="text-xs text-zinc-500 font-mono truncate block">in/shiva-yellanki</span>
                </div>
                <ExternalLink className="shrink-0 w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </a>

              <a
                href="https://github.com/shivayellanki"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl glass-panel border border-zinc-800 hover:border-emerald-500/40 transition-all duration-200 group overflow-hidden"
              >
                <div className="shrink-0 p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/30 transition-colors">
                  <Github className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-sm font-semibold block text-zinc-100 group-hover:text-emerald-400 transition-colors">GitHub</span>
                  <span className="text-xs text-zinc-500 font-mono truncate block">shivayellanki</span>
                </div>
                <ExternalLink className="shrink-0 w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
