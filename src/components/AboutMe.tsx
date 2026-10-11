import React from 'react';
import { Terminal, Cpu, Zap, Layers, ArrowRight } from 'lucide-react';

export const AboutMe: React.FC = () => {
  const philosophies = [
    {
      icon: Terminal,
      title: 'Systems & Architecture First',
      desc: 'Great software starts with clean boundaries, decoupled layers, and well-thought-out data models — before writing a single line of business logic.',
    },
    {
      icon: Cpu,
      title: 'Applied Intelligence',
      desc: 'Taking academic ML concepts — from GAN anomaly gatekeepers to vector retrieval — and forging them into practical, low-latency production tools.',
    },
    {
      icon: Zap,
      title: 'Performance & Reliability',
      desc: 'Writing code that works is step one. I go further with strict schema validation, predictable error handling, edge-case coverage, and runtime efficiency.',
    },
    {
      icon: Layers,
      title: 'End-to-End Ownership',
      desc: 'From modeling database schemas and tuning inference models to building responsive interfaces — I own the entire development lifecycle.',
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00ff66] block mb-2">
            Engineering Philosophy & Identity
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Driven by curiosity, engineered with precision.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mt-4 leading-relaxed">
            A software engineer obsessed with building reliable systems and exploring intelligent algorithms. Whether it's dissecting network packet vectors for intrusion detection, structuring layered RESTful APIs, or optimizing local language model retrieval — the sweet spot is where systems engineering meets applied AI.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-cyber p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#00ff66]/10 border border-[#00ff66]/20 flex items-center justify-center text-[#00ff66] group-hover:bg-[#00ff66] group-hover:text-[#06080c] transition-all mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-[#00ff66] transition-colors mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Short Personal Quote Box */}
        <div className="mt-12 p-7 rounded-2xl bg-[#0d121c] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-sm font-heading font-bold text-white">
              "Build things that genuinely solve problems, measure with real data, and never stop refining."
            </p>
            <p className="text-xs font-mono text-gray-400">
              — Manav Bhatt • Core Engineering Ethos
            </p>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00ff66]/10 hover:bg-[#00ff66] text-[#00ff66] hover:text-[#06080c] text-xs font-mono font-bold transition-all flex-shrink-0"
          >
            <span>Inspect Verified Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
