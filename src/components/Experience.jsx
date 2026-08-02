import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Lock, ShieldCheck } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Bees Software Solutions',
      role: 'Software Developer Intern',
      period: 'Feb 2026 – Mar 2026',
      description:
        'Worked on backend functionality for a secure learning platform involving protected video delivery, authentication and encrypted HLS streaming.',
      tags: ['Node.js', 'Express', 'JWT', 'HLS', 'AES-128'],
    },
  ];

  return (
    <section id="experience" className="py-20 relative z-10 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
              RELEVANT EXPERIENCE
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight">
            Industry Experience
          </h2>
        </div>

        {/* Concise Timeline Card */}
        <div className="max-w-3xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative glass-panel rounded-2xl p-6 sm:p-8 border border-zinc-800/90 shadow-xl hover:border-emerald-500/30 transition-all duration-300 space-y-4"
            >
              {/* Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800/80">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-emerald-400" />
                    <span>{exp.company}</span>
                  </h3>
                  <p className="text-sm text-emerald-400 font-medium mt-0.5">
                    {exp.role}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Technology Tags */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                  KEY TECHNOLOGIES & CONCEPTS
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-xs font-mono text-zinc-200 bg-zinc-900 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
