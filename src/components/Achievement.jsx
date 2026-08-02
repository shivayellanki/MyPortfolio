import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

const hackathons = [
  {
    number: '01',
    place: '1st Place',
    event: 'National Level Hackathon',
    project: 'RB-WiFi — Role-Based Wi-Fi Access Management',
    description:
      'Awarded 1st place for architecting a full-stack campus network platform combining real-time scikit-learn anomaly detection with fine-grained role policy controls.',
  },
  {
    number: '02',
    place: '2nd Place',
    event: 'National Level Hackathon',
    project: 'GovGuideAi',
    description:
      'Awarded 2nd place for buliding GovGuideAi. It is an intelligent, AI-powered platform designed to simplify the discovery and understanding of Indian government scheme.',
  },
  {
    number: '03',
    place: '1st Place',
    event: 'National Level Hackathon',
    project: 'Full-Stack Hackathon Project',
    description:
      'Secured 1st place by delivering a production-ready full-stack solution under time constraints, demonstrating rapid prototyping and system design skills.',
  },
];

export default function Achievement() {
  return (
    <section className="py-16 relative z-10 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
                FEATURED RECOGNITION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Achievements
            </h2>
          </div>

          {/* 3× Hero Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500/15 to-amber-600/5 border border-amber-500/30 shadow-lg shadow-amber-500/10 self-start sm:self-auto"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-amber-400 leading-none">3×</p>
              <p className="text-xs font-semibold text-zinc-300 leading-tight mt-0.5">Hackathon Winner</p>
            </div>
          </motion.div>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {hackathons.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden glass-panel rounded-2xl p-6 border border-amber-500/25 hover:border-amber-500/50 bg-gradient-to-br from-amber-500/5 via-zinc-900/60 to-zinc-900/40 shadow-xl transition-all duration-300 flex flex-col gap-4"
            >
              {/* Background glow */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Large faded number */}
              <span className="absolute top-4 right-5 text-6xl font-black text-amber-500/20 select-none pointer-events-none leading-none">
                {item.number}
              </span>

              {/* Icon + place badge */}
              <div className="flex items-start justify-between relative z-10">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  <Star className="w-3 h-3" />
                  {item.place}
                </span>
              </div>

              {/* Event label + project title */}
              <div className="relative z-10">
                <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-amber-400 block mb-1">
                  {item.event}
                </span>
                <p className="text-sm font-bold text-zinc-100 leading-snug">
                  {item.project}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-400 leading-relaxed relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
