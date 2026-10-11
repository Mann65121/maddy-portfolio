import React, { useState } from 'react';
import { Code2, Server, Layout, Brain, Database, Wrench, ChevronRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const getCategoryDetails = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return { icon: Code2, gradient: 'from-[#00ff66] to-[#00cc52]' };
      case 'Server':
        return { icon: Server, gradient: 'from-[#00ff66] to-[#00cc52]' };
      case 'Layout':
        return { icon: Layout, gradient: 'from-[#00ff66] to-[#00cc52]' };
      case 'Brain':
        return { icon: Brain, gradient: 'from-[#00ff66] to-[#00cc52]' };
      case 'Database':
        return { icon: Database, gradient: 'from-[#00ff66] to-[#00cc52]' };
      default:
        return { icon: Wrench, gradient: 'from-[#00ff66] to-[#00cc52]' };
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5 bg-[#060a10]">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00ff66]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00ff66]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 text-[#00ff66] text-xs font-mono uppercase tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Skills & Core Competencies
          </h2>
          <p className="text-base text-gray-400 mt-3 leading-relaxed max-w-2xl mx-auto">
            Technologies and frameworks applied across production backends, research hackathons, and reproducible machine learning benchmarks.
          </p>
        </div>

        {/* Interactive Tab Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Category Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const details = getCategoryDetails(cat.iconName);
              const Icon = details.icon;
              const isActive = activeCategory === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 group border ${
                    isActive
                      ? 'bg-[#0d121c] border-[#00ff66]/40 shadow-lg shadow-[#00ff66]/5'
                      : 'bg-transparent border-transparent hover:bg-[#0d121c]/60 hover:border-white/5'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${
                      isActive
                        ? 'bg-[#00ff66] text-[#06080c] shadow-lg shadow-[#00ff66]/30'
                        : 'bg-white/5 text-gray-400 group-hover:text-[#00ff66] group-hover:bg-[#00ff66]/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-base font-heading font-bold transition-colors truncate ${
                      isActive ? 'text-[#00ff66]' : 'text-white group-hover:text-[#00ff66]'
                    }`}>
                      {cat.title}
                    </p>
                    <p className="text-xs font-mono text-gray-500 mt-0.5">
                      {cat.skills.length} technologies
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-all ${
                    isActive ? 'text-[#00ff66] translate-x-0.5' : 'text-gray-600 group-hover:text-gray-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Active Category Skills Display */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-[#0a0f18] border border-white/[0.06] p-8 sm:p-10 min-h-[420px] relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#00ff66]/[0.06] to-transparent pointer-events-none" />

              {/* Category Title & Count */}
              <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/[0.06]">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    {SKILL_CATEGORIES[activeCategory].title}
                  </h3>
                  <p className="text-xs font-mono text-gray-500 mt-1">
                    {SKILL_CATEGORIES[activeCategory].skills.length} verified technologies in this domain
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20">
                  <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
                  <span className="text-[11px] font-mono font-bold text-[#00ff66]">Active Stack</span>
                </div>
              </div>

              {/* Skills Grid with animated bars */}
              <div className="space-y-4">
                {SKILL_CATEGORIES[activeCategory].skills.map((skill, sIdx) => (
                  <div
                    key={`${activeCategory}-${sIdx}`}
                    className="group/skill flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-colors"
                  >
                    {/* Skill indicator dot */}
                    <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all ${
                      skill.highlight 
                        ? 'bg-[#00ff66] shadow-[0_0_10px_rgba(0,255,102,0.4)]'
                        : 'bg-white/20'
                    }`} />

                    {/* Skill name */}
                    <span className={`text-sm font-mono flex-shrink-0 min-w-[180px] transition-colors ${
                      skill.highlight
                        ? 'text-white font-semibold'
                        : 'text-gray-400 group-hover/skill:text-gray-300'
                    }`}>
                      {skill.name}
                    </span>

                    {/* Proficiency bar */}
                    <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${
                          skill.highlight
                            ? 'bg-gradient-to-r from-[#00ff66] to-[#00cc52]'
                            : 'bg-white/15'
                        }`}
                        style={{
                          width: skill.highlight ? `${85 + (sIdx * 3) % 15}%` : `${55 + (sIdx * 7) % 20}%`,
                        }}
                      />
                    </div>

                    {/* Tag */}
                    {skill.highlight && (
                      <span className="hidden sm:inline-flex text-[10px] font-mono font-bold text-[#00ff66] bg-[#00ff66]/10 px-2 py-0.5 rounded-md border border-[#00ff66]/20 flex-shrink-0">
                        Core
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
