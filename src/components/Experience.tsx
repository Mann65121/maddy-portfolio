import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/5 bg-[#0a0e17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00ff66]/10 border border-[#00ff66]/20 text-[#00ff66] text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Industry & Research Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Software Development Internship
          </h2>
          <p className="text-base text-gray-400 mt-2 max-w-2xl">
            Hands-on engineering experience designing resilient API architectures, strict schema validation, and collaborative Agile workflows.
          </p>
        </div>

        {/* Experience Timeline Item */}
        <div className="space-y-8">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0e1422] border border-white/10 hover:border-[#00ff66]/30 transition-all shadow-xl"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="text-2xl font-heading font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/20">
                      {exp.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-200">
                    {exp.organization}
                  </h4>
                </div>

                <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs font-mono text-gray-400">
                  <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-[#00ff66]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-base text-gray-300 mt-6 leading-relaxed">
                {exp.summary}
              </p>

              {/* Key Deliverables & Contributions */}
              <div className="mt-6">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00ff66] mb-3">
                  Key Technical Contributions & Architectural Scope
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.keyContributions.map((contrib, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-[#080b11] border border-white/5 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00ff66] flex-shrink-0 mt-0.5" />
                      <span className="leading-normal">{contrib}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Tech Stack */}
              <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-gray-400 mr-2 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-[#00ff66]" />
                  Verified Stack:
                </span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-200 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
