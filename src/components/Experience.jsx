import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Bees Software Solutions Pvt. Ltd.',
      role: 'Software Developer Intern',
      location: 'Hyderabad, Telangana',
      period: 'February 2026 – March 2026',
      responsibilities: [
        'Developed and integrated RESTful APIs using Node.js, Express.js and MySQL to support backend functionality of a Learning Management System (LMS).',
        'Implemented JWT-based authentication and authorization and built React.js login pages and dashboards integrated with backend APIs for secure user access and data management.',
      ],
      tags: ['Node.js', 'Express.js', 'MySQL', 'React.js', 'JWT', 'REST APIs'],
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
                  {exp.location && (
                    <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      {exp.location}
                    </p>
                  )}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2 pl-1">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400/70 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

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
