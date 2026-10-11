import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Cpu, Database, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-8 bg-[#0d121c] border border-white/10 rounded-3xl shadow-2xl overflow-hidden focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 border-b border-white/10 bg-[#111724]/70">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff66]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/30">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-white/5 text-gray-300 border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00ff66]" />
              {project.verificationStatus}
            </span>
          </div>

          <h2 id="modal-title" className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-base text-gray-300 mt-1 font-medium">
            {project.subtitle}
          </p>

          {/* Quick External Actions */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00ff66] text-[#06080c] font-heading font-bold text-xs shadow-md shadow-[#00ff66]/20 hover:bg-[#00e65c] transition-colors"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-mono text-xs transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#00ff66]" />
                <span>View Source Code</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
            )}
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[calc(85vh-200px)] overflow-y-auto">
          
          {/* Problem Statement & Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#06080c] border border-white/5">
              <h3 className="text-xs font-mono font-bold text-[#00ff66] uppercase tracking-wider mb-2">
                Problem Being Solved
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#06080c] border border-white/5">
              <h3 className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider mb-2">
                Engineering Approach & Role
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-semibold text-white block mb-1">Role: {project.role}</span>
                {project.summary}
              </p>
            </div>
          </div>

          {/* Architecture Deep Dive */}
          <div>
            <h3 className="text-base font-heading font-bold text-white flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-[#00ff66]" />
              Architectural Pipeline & Flow
            </h3>
            <ul className="space-y-2.5">
              {project.architectureDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="font-mono text-xs text-[#00ff66] bg-[#00ff66]/10 rounded px-1.5 py-0.5 mt-0.5 flex-shrink-0 font-bold">
                    0{index + 1}
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Genuine Diagrams / Assets if available */}
          {(project.diagramAsset || project.thumbnail) && (
            <div className="space-y-3">
              <h3 className="text-base font-heading font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#00ff66]" />
                Verified Visual Artifacts & Pipeline Flow
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.diagramAsset && (
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#06080c] p-3">
                    <img
                      src={project.diagramAsset}
                      alt={`${project.title} Architecture Pipeline`}
                      className="w-full h-auto rounded-xl object-contain max-h-64 mx-auto"
                      loading="lazy"
                    />
                    <p className="text-[11px] font-mono text-gray-400 text-center mt-2">
                      Pipeline diagram verified from repository assets
                    </p>
                  </div>
                )}
                {project.thumbnail && (
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#06080c] p-3">
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} Evaluation Matrix`}
                      className="w-full h-auto rounded-xl object-contain max-h-64 mx-auto"
                      loading="lazy"
                    />
                    <p className="text-[11px] font-mono text-gray-400 text-center mt-2">
                      Empirical evaluation comparison across test subsets
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Verified Metrics Table */}
          <div>
            <h3 className="text-base font-heading font-bold text-white flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-[#00ff66]" />
              Verified Metrics & Evidentiary Support
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#06080c]/60">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-gray-400 uppercase tracking-wider">
                    <th className="py-3 px-4">Metric / Dimension</th>
                    <th className="py-3 px-4 text-[#00ff66] font-bold">Value</th>
                    <th className="py-3 px-4">Source & Verification Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  {project.metrics.map((metric, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="py-3 px-4 font-semibold text-white">{metric.label}</td>
                      <td className="py-3 px-4 text-[#00ff66] font-bold">{metric.value}</td>
                      <td className="py-3 px-4 text-gray-400">{metric.sourceNote || 'Verified via repository audit'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Verified Features */}
          <div>
            <h3 className="text-base font-heading font-bold text-white flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-4 h-4 text-[#00ff66]" />
              Verified Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.verifiedFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-gray-300 bg-[#06080c] border border-white/5 rounded-xl px-4 py-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff66] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Technology Stack Breakdown */}
          <div>
            <h3 className="text-base font-heading font-bold text-white flex items-center gap-2 mb-3">
              <Database className="w-4 h-4 text-[#00ff66]" />
              Full Technology Stack Breakdown
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {project.techStack.frontend && (
                <div className="p-4 rounded-xl bg-[#06080c] border border-white/5">
                  <span className="text-[11px] font-mono text-gray-400 block mb-2">Frontend</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.frontend.map((t, idx) => (
                      <span key={idx} className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.backend && (
                <div className="p-4 rounded-xl bg-[#06080c] border border-white/5">
                  <span className="text-[11px] font-mono text-gray-400 block mb-2">Backend</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.backend.map((t, idx) => (
                      <span key={idx} className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.aiMl && (
                <div className="p-4 rounded-xl bg-[#06080c] border border-white/5">
                  <span className="text-[11px] font-mono text-gray-400 block mb-2">AI / ML</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.aiMl.map((t, idx) => (
                      <span key={idx} className="text-xs font-mono px-2 py-0.5 rounded bg-[#00ff66]/15 text-[#00ff66] font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.techStack.tools && (
                <div className="p-4 rounded-xl bg-[#06080c] border border-white/5">
                  <span className="text-[11px] font-mono text-gray-400 block mb-2">Tools & Infra</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.tools.map((t, idx) => (
                      <span key={idx} className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 border-t border-white/10 bg-[#06080c] flex items-center justify-between">
          <span className="text-xs font-mono text-gray-500 hidden sm:inline">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300">Esc</kbd> to return
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-xs transition-colors ml-auto"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
