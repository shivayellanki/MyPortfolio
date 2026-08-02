import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Trophy, ShieldCheck, Video, Cpu } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal.jsx';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'rb-wifi',
      number: '01',
      title: 'RB-WiFi',
      subtitle: 'Campus Wi-Fi Access & Network Anomaly Detection',
      description: 'A full-stack platform for managing role-based campus network access, enforcing usage policies and identifying abnormal network activity.',
      fullDescription: 'RB-WiFi is an end-to-end full-stack campus network platform designed for universities and enterprises. It integrates fine-grained Role-Based Access Control (RBAC) with real-time machine learning anomaly detection to prevent bandwidth abuse and rogue device access.',
      badge: 'Hackathon Winner — 1st Place',
      badgeIcon: Trophy,
      highlights: [
        'RBAC',
        'Policy Engine',
        'Network Usage Control',
        'Anomaly Detection',
        'Admin Dashboard',
      ],
      stack: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Python', 'scikit-learn'],
      image: '/rbwifi.png',
      liveUrl: 'https://rb-wifi-backend.onrender.com/login',
      githubUrl: 'https://github.com/shivayellanki/Role-Based-Access-Usage-Control-for-Campus-Enterprise-Wi-Fi.git',
      problem: 'University campus Wi-Fi networks suffer from uncontrolled bandwidth abuse, unauthenticated device spoofing, and lack of real-time visibility into malicious or abnormal network spikes.',
      solution: 'Built a centralized React + Node.js administration portal backed by a Python scikit-learn anomaly engine that profiles real-time network logs and dynamically throttles suspicious connections.',
      architectureText: 'React frontend connects to Express REST APIs secured by JWT tokens. Express dispatches real-time log telemetry to a Python ML microservice that evaluates traffic patterns using scikit-learn anomaly detection algorithms, persisting audit trails to MySQL.',
      keyFeatures: [
        'Role-Based Access Controls for students, faculty, and administrators',
        'Automated network usage policy enforcement & bandwidth caps',
        'Real-time traffic anomaly detection with alert thresholds',
        'Centralized administrative dashboard with live analytics visualizers',
      ],
    },
    {
      id: 'streamvault-ai',
      number: '02',
      title: 'StreamVault AI',
      subtitle: 'Secure AI-Powered Video Learning Platform',
      description: 'A full-stack platform combining secure video delivery, cloud storage and AI-powered learning features.',
      fullDescription: 'StreamVault AI provides enterprise-grade protected video delivery alongside interactive AI learning capabilities. It encrypts video streams into AES-128 HLS chunks and uses Groq AI models to automatically produce intelligent study notes and interactive quizzes.',
      badge: null,
      highlights: [
        'Encrypted HLS Streaming',
        'Authentication & Authorization',
        'Cloud Video Storage',
        'AI Study Notes',
        'MCQ Generation',
        'Course Recommendations',
      ],
      stack: ['React', 'Node.js', 'Express', 'MySQL', 'AWS S3', 'JWT', 'Groq AI'],
      image: '/video.png',
      liveUrl: null,
      githubUrl: 'https://github.com/shivayellanki/StreamVault-Secure-Video-Streaming-Platform.git',
      problem: 'Online course creators face rampant video piracy and unauthorized downloads, while students struggle to synthesize dense video lectures into actionable study material.',
      solution: 'Implemented AES-128 encrypted HLS segment streaming combined with AWS S3 pre-signed URLs, integrated with Groq AI LLM inference to automatically generate dynamic summaries and instant MCQ quizzes.',
      architectureText: 'Video files uploaded via signed AWS S3 requests are processed into HLS chunks. Node.js backend streams encrypted segments requiring authorization tokens. Groq AI LLM pipeline ingests transcriptions to generate vector-based study notes and quizzes.',
      keyFeatures: [
        'AES-128 encrypted HLS video streaming preventing direct file downloads',
        'AWS S3 bucket storage integration with secure pre-signed URLs',
        'Automated AI Study Notes generation using Groq LLM API',
        'Instant Multiple-Choice Question (MCQ) quiz generator per video segment',
      ],
    },
  ];

  return (
    <section id="work" className="py-24 relative z-10 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Heading */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
              FEATURED WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Selected Work
          </h2>
          <p className="text-zinc-400 text-base max-w-xl">
            A showcase of full-stack web applications built with a focus on security, architecture, and real user value.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
              >
                {/* Text Content */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-sm text-zinc-500 font-bold">
                        {project.number} —
                      </span>
                      {project.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          <Trophy className="w-3.5 h-3.5" />
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-emerald-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.highlights.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800 text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                      TECHNOLOGY STACK
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded text-xs font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-200 hover:text-emerald-400 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-200 hover:text-emerald-400 transition-colors"
                    >
                      <span>GitHub</span>
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-emerald-500/40 text-xs font-semibold text-emerald-400 transition-all ml-auto sm:ml-0"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Screenshot Visual Centerpiece */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedProject(project)}
                    className="relative group cursor-pointer rounded-2xl overflow-hidden glass-panel border border-zinc-800/90 shadow-2xl hover:border-emerald-500/40 transition-all duration-300"
                  >
                    {/* Top window bar decoration */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950/80 border-b border-zinc-800/80">
                      <div className="flex items-center space-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500">
                        {project.title.toLowerCase()}.app
                      </span>
                    </div>

                    {/* Screenshot Image */}
                    <div
                      className="relative overflow-hidden bg-zinc-950"
                      style={{ aspectRatio: '16/9' }}
                    >
                      {/* Subtle dark vignette on all sides to blend image edges */}
                      <div className="absolute inset-0 shadow-[inset_0_0_40px_10px_rgba(9,9,11,0.7)] z-10 pointer-events-none rounded-b-none" />

                      <img
                        src={project.image}
                        alt={`${project.title} screenshot visual`}
                        className="w-full h-full object-contain block transform group-hover:scale-[1.03] transition-transform duration-500"
                        style={{ display: 'block', background: '#09090b' }}
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 z-20 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-zinc-950 font-semibold text-xs shadow-lg">
                          <span>View Full Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
