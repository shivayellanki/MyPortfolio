import React from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Server,
  Database,
  Code2,
  Cloud,
  Cpu,
  Terminal,
  Shield,
  FileCode,
  Globe,
  Layers,
  Box,
} from 'lucide-react';

export default function TechStack() {
  const categories = [
    {
      title: 'Frontend',
      icon: Layout,
      color: 'text-sky-400',
      items: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'text-emerald-400',
      items: ['Node.js', 'Express', 'REST APIs', 'JWT / RBAC'],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'text-indigo-400',
      items: ['MySQL', 'SQL Server'],
    },
    {
      title: 'Programming',
      icon: Code2,
      color: 'text-amber-400',
      items: ['JavaScript', 'Python'],
    },
    {
      title: 'Tools',
      icon: Cloud,
      color: 'text-teal-400',
      items: ['Git', 'GitHub', 'Postman'],
    },
    {
      title: 'Core Fundamentals',
      icon: Cpu,
      color: 'text-purple-400',
      items: ['DSA', 'OOP'],
    },
  ];

  return (
    <section id="tech" className="py-20 relative z-10 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
              TECHNICAL PROFICIENCY
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight">
            Technologies I Work With
          </h2>
          <p className="text-zinc-400 text-sm max-w-lg">
            Core toolset and frameworks used to engineer full-stack web applications from front to back.
          </p>
        </div>

        {/* Tech Categories Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel rounded-xl p-5 border border-zinc-800/90 hover:border-emerald-500/30 transition-all duration-300 space-y-4"
              >
                <div className="flex items-center space-x-2.5 pb-2 border-b border-zinc-800/80">
                  <div className={`p-2 rounded-lg bg-zinc-900 border border-zinc-800 ${cat.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm text-zinc-100 tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
