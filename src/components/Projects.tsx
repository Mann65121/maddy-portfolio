import React, { useState } from 'react';
import { ExternalLink, ChevronRight, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';
import type { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Applied AI & ML', value: 'ai-ml' },
    { label: 'Systems & Backend', value: 'systems' },
    { label: 'Full-Stack Apps', value: 'fullstack' },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === 'all') return true;
    return proj.category === activeCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai-ml': return { bg: 'bg-[#00ff66]/10', text: 'text-[#00ff66]', border: 'border-[#00ff66]/20' };
      case 'systems': return { bg: 'bg-[#00ff66]/10', text: 'text-[#00ff66]', border: 'border-[#00ff66]/20' };
      case 'fullstack': return { bg: 'bg-[#00ff66]/10', text: 'text-[#00ff66]', border: 'border-[#00ff66]/20' };
      default: return { bg: 'bg-[#00ff66]/10', text: 'text-[#00ff66]', border: 'border-[#00ff66]/20' };
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/5 bg-[#06080c]">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff66]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00ff66]/10 border border-[#00ff66]/20 text-[#00ff66] text-xs font-mono uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              Verified Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Featured Systems & Applications
            </h2>
            <p className="text-base text-gray-400 mt-2 max-w-2xl leading-relaxed">
              Every project is backed by verified codebases, documented algorithms, reproducible evaluations, and production deployments.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0d121c] border border-white/10 rounded-2xl">
            {categories.map((cat) => {
              const count = cat.value === 'all' 
                ? PROJECTS.length 
                : PROJECTS.filter(p => p.category === cat.value).length;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all ${
                    activeCategory === cat.value
                      ? 'bg-[#00ff66] text-[#06080c] shadow-lg shadow-[#00ff66]/20 font-bold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeCategory === cat.value ? 'bg-[#06080c]/25 text-[#06080c]' : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid — enhanced with hover effects and green accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => {
            const catColors = getCategoryColor(project.category);
            const isHovered = hoveredProject === project.id;

            return (
              <article
                key={project.id}
                className="relative rounded-[22px] bg-[#0a0f18] border border-white/[0.06] p-7 flex flex-col justify-between group overflow-hidden transition-all duration-400 hover:border-[#00ff66]/30 hover:shadow-2xl hover:shadow-[#00ff66]/[0.06] hover:-translate-y-1"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Hover glow effect */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#00ff66]/[0.08] to-transparent rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`} />

                <div className="relative">
                  {/* Top Meta Badges */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className={`text-[11px] font-mono uppercase tracking-wider ${catColors.text} ${catColors.bg} border ${catColors.border} px-2.5 py-1 rounded-md font-bold`}>
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse" />
                      {project.verificationStatus}
                    </span>
                  </div>

                  {/* Project Title & Subtitle */}
                  <h3 className="text-2xl font-heading font-bold text-white group-hover:text-[#00ff66] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mt-1 mb-3.5 leading-normal">
                    {project.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Key Metrics Chips — enhanced styling */}
                  <div className="grid grid-cols-2 gap-3 my-4 p-4 rounded-xl bg-[#06080c] border border-[#00ff66]/[0.08]">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="overflow-hidden">
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block truncate">
                          {m.label}
                        </span>
                        <span className="text-xs font-mono font-bold text-[#00ff66] truncate block mt-0.5">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5 hover:border-[#00ff66]/20 hover:text-[#00ff66] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[11px] font-mono px-2 py-1 rounded-md text-gray-500 bg-white/[0.02]">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-white hover:text-[#00ff66] group/btn focus:outline-none"
                  >
                    <span>Architecture & Details</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-[#00ff66]" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#00ff66]/10 hover:bg-[#00ff66] text-[#00ff66] hover:text-[#06080c] border border-[#00ff66]/30 transition-all shadow-sm hover:shadow-lg hover:shadow-[#00ff66]/20"
                        title="Open Live Application"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Detail Modal Component */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
