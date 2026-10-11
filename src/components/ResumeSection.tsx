import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2, FileText, Download } from 'lucide-react';
import { EXPERIENCE, EDUCATION, ACHIEVEMENTS, PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-24 relative z-10 border-t border-white/5 bg-[#06080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00ff66] block mb-2">
              Career Trajectory & Education
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Work Experience & Academic Credentials
            </h2>
            <p className="text-base text-gray-400 mt-2 max-w-2xl leading-relaxed">
              Academic foundation in Computer Science paired with hands-on industry software engineering experience.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00ff66] hover:bg-[#00e65c] text-[#06080c] font-heading font-bold text-xs transition-colors shadow-lg shadow-[#00ff66]/20"
            >
              <FileText className="w-4 h-4" />
              <span>View Full CV (PDF)</span>
            </button>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Manav_Bhatt_Resume.pdf"
              className="p-3.5 rounded-xl bg-[#0d121c] border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-colors"
              title="Download Resume PDF"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-[#00ff66]/10 text-[#00ff66]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {EXPERIENCE.map((exp) => (
                <div
                  key={exp.id}
                  className="card-cyber p-7 space-y-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-mono text-[#00ff66] font-semibold block mb-1">
                        {exp.period} • {exp.status}
                      </span>
                      <h4 className="text-xl font-heading font-bold text-white">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-medium text-gray-300">
                        {exp.organization}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 flex-shrink-0">
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    {exp.keyContributions.map((contrib, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300 leading-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff66] flex-shrink-0 mt-0.5" />
                        <span>{contrib}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education & Hackathon Honors */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-[#00ff66]/10 text-[#00ff66]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Education & Hackathon Honors
              </h3>
            </div>

            <div className="space-y-6">
              {/* Education Card */}
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="card-cyber p-7 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-mono text-[#00ff66] font-semibold block mb-1">
                        {edu.period}
                      </span>
                      <h4 className="text-xl font-heading font-bold text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-gray-300">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#06080c] bg-[#00ff66] px-3 py-1 rounded-md flex-shrink-0 shadow-sm">
                      {edu.grade}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-2">
                      Core Subjects:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((c) => (
                        <span key={c} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#06080c] border border-white/5 text-gray-300">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Achievements Cards */}
              <div className="space-y-3">
                {ACHIEVEMENTS.map((ach) => (
                  <div key={ach.id} className="card-cyber p-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-[#00ff66] bg-[#00ff66]/10 px-2.5 py-0.5 rounded font-semibold border border-[#00ff66]/20">
                        {ach.badge} • {ach.year}
                      </span>
                      <span className="text-xs font-mono text-gray-400">{ach.event}</span>
                    </div>
                    <h4 className="text-base font-heading font-bold text-white">
                      {ach.title}
                    </h4>
                    <p className="text-xs font-mono text-gray-400">
                      {ach.organizer}
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {ach.description}
                    </p>
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
