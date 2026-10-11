import React from 'react';
import { GraduationCap, Calendar, BookOpen, Trophy } from 'lucide-react';
import { EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';

export const EducationAchievements: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 border-t border-white/5 bg-[#080b11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#ccff00]/10 border border-[#ccff00]/20 text-[#ccff00] text-xs font-mono uppercase tracking-wider mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                Academic Background
              </div>
              <h2 className="text-3xl font-heading font-extrabold text-white tracking-tight">
                Education & Foundations
              </h2>
            </div>

            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#0e1422] border border-white/10 hover:border-[#ccff00]/30 transition-all shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 border-b border-white/10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-gray-300 font-medium mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 font-mono text-xs">
                    <span className="text-[#ccff00] font-bold text-sm bg-[#ccff00]/10 px-2.5 py-1 rounded-md border border-[#ccff00]/20 w-fit">
                      {edu.grade}
                    </span>
                    <span className="text-gray-400 mt-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div className="mt-5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#ccff00]" />
                    Relevant Core Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#080b11] border border-white/5 text-gray-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hackathons & Achievements Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eab308]/10 border border-[#eab308]/20 text-[#eab308] text-xs font-mono uppercase tracking-wider mb-3">
                <Trophy className="w-3.5 h-3.5" />
                Honors & Competitive Coding
              </div>
              <h2 className="text-3xl font-heading font-extrabold text-white tracking-tight">
                Achievements
              </h2>
            </div>

            <div className="space-y-4">
              {ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.id}
                  className="p-6 rounded-2xl bg-[#0e1422] border border-white/10 hover:border-[#ccff00]/30 transition-all shadow-xl group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/20">
                      {ach.badge}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      {ach.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-[#ccff00] transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mt-0.5 mb-2">
                    {ach.organizer}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
