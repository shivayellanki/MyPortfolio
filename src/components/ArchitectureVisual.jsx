import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Network, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function ArchitectureVisual() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: 'client',
      title: 'React Client',
      subtitle: 'Single Page App / UI Layer',
      icon: Layout,
      color: 'from-sky-500/20 to-indigo-500/10',
      border: 'border-sky-500/30',
      badge: 'Vite + React 18',
      details: 'Component state management, Framer Motion animations, client-side routing & JWT storage.',
    },
    {
      id: 'api',
      title: 'REST API',
      subtitle: 'Secure HTTP / HLS Stream',
      icon: Network,
      color: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-500/30',
      badge: 'JSON / AES-128',
      details: 'Rate limiting, RBAC authorization headers, policy evaluation & encrypted streaming endpoint.',
    },
    {
      id: 'backend',
      title: 'Node / Express',
      subtitle: 'Core App Server & Business Logic',
      icon: Server,
      color: 'from-emerald-500/20 to-green-500/10',
      border: 'border-emerald-500/40',
      badge: 'Node.js Runtime',
      details: 'Anomaly detection triggers, Groq AI inference orchestration, JWT auth pipeline & business logic.',
    },
    {
      id: 'db',
      title: 'MySQL',
      subtitle: 'Relational Database Store',
      icon: Database,
      color: 'from-indigo-500/20 to-purple-500/10',
      border: 'border-indigo-500/30',
      badge: 'Indexed Schemas',
      details: 'Role definitions, bandwidth audit logs, course metadata, and video chunk indexes.',
    },
  ];

  return (
    <div className="w-full relative glass-panel rounded-2xl p-5 sm:p-7 border border-zinc-800/80 shadow-2xl overflow-hidden group">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -left-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar of visual */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800/80">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono tracking-wider uppercase text-zinc-400 font-semibold">
            System Architecture & Flow
          </span>
        </div>
        <div className="flex items-center space-x-2 text-[11px] font-mono text-zinc-500 bg-zinc-900/80 px-2.5 py-1 rounded-md border border-zinc-800">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>Full-Stack Pipeline</span>
        </div>
      </div>

      {/* Architecture Nodes Flow Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          const isSelected = activeNode === node.id;

          return (
            <div key={node.id} className="relative flex flex-col justify-between">
              {/* Connector line & animated data packet between cards */}
              {idx < nodes.length - 1 && (
                <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 w-4 z-20 pointer-events-none flex items-center justify-center">
                  <div className="relative w-full flex items-center justify-center">
                    {/* Connecting line */}
                    <div className="w-full h-[1.5px] bg-zinc-800" />
                    {/* Animated glowing data packet */}
                    <motion.div
                      animate={{ x: [-8, 8], opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"
                    />
                  </div>
                </div>
              )}

              {/* Node Box */}
              <motion.button
                onClick={() => setActiveNode(isSelected ? null : node.id)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? `${node.border} bg-zinc-800/90 shadow-lg ring-1 ring-emerald-500/50`
                    : `border-zinc-800/90 bg-zinc-900/50 hover:bg-zinc-800/60 hover:${node.border}`
                }`}
              >
                {/* Glow accent bar top */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${node.color}`} />

                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-lg bg-zinc-950/80 border border-zinc-800/80 text-emerald-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">
                    {node.badge}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-zinc-100 flex items-center gap-1.5">
                    {node.title}
                  </h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                    {node.subtitle}
                  </p>
                </div>
              </motion.button>
            </div>
          );
        })}
      </div>

      {/* Interactive Inspector Footer */}
      <div className="mt-5 pt-3 border-t border-zinc-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-zinc-400 gap-2">
        <div className="flex items-center space-x-2 font-mono text-[11px]">
          <Cpu className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="text-zinc-300">
            {activeNode
              ? nodes.find((n) => n.id === activeNode)?.details
              : 'Click any architecture layer above to inspect full-stack data flow details.'}
          </span>
        </div>
        <div className="text-[10px] font-mono text-zinc-500 flex items-center gap-1.5 self-end sm:self-auto shrink-0">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-emerald-400/90 font-semibold">Active Data Stream</span>
        </div>
      </div>
    </div>
  );
}
