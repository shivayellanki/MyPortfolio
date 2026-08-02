import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, ShieldCheck, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
              BACKGROUND & INTENT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            A little about me.
          </h2>
        </div>

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-800/90 shadow-xl space-y-6"
        >
          <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
            <p>
              I am an <strong className="text-zinc-100 font-semibold">Information Technology undergraduate</strong> based in Hyderabad, India, focused on full-stack web application development.
            </p>
            <p>
              I enjoy building complete applications across frontend interfaces, backend REST APIs, relational database design, secure authentication workflows, and cloud deployment.
            </p>
            <p>
              My primary technical interests center around building <span className="text-emerald-400 font-medium">secure web systems</span> and integrating practical <span className="text-emerald-400 font-medium">AI capabilities</span> into useful products that solve real infrastructure and user workflow challenges.
            </p>
          </div>

          {/* Education Line Footer */}
          <div className="pt-6 border-t border-zinc-800/80 flex items-center space-x-3 text-sm text-zinc-400">
            <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-zinc-200 block">
                B.Tech — Information Technology
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                Narsimha Reddy Engineering College
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
