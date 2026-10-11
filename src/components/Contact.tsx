import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, FileText, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* "Have projects in mind?" Banner */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0d121c] via-[#111724] to-[#0d121c] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#00ff66]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00ff66] block mb-2">
              Opportunities & Internships
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Have an opening or project in mind?
            </h2>
            <p className="text-base text-gray-300 mt-2 leading-relaxed">
              I'm open for 2026–2027 software engineering and AI/ML internship roles. Let's discuss how I can contribute to your team.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Software%20Engineering%20Opportunity%20-%20Manav%20Bhatt`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00ff66] hover:bg-[#00e65c] text-[#06080c] font-heading font-bold text-sm shadow-xl shadow-[#00ff66]/20 transition-all focus:outline-none"
            >
              <Send className="w-4 h-4" />
              <span>Let's Talk Now</span>
            </a>
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-heading font-semibold text-sm border border-white/10 transition-colors"
            >
              <FileText className="w-4 h-4 text-[#00ff66]" />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* Contact Info Cards (Call / Email / Location) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Card 1: Call */}
          <div className="card-cyber p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00ff66]/15 flex items-center justify-center text-[#00ff66] mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-1">
                Call / Phone
              </h3>
              <p className="text-xs font-mono text-gray-400 mb-4">
                Available for technical discussions
              </p>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="text-base font-mono font-bold text-gray-200 hover:text-[#00ff66] transition-colors block"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6 text-xs font-mono text-gray-500">
              Direct Contact
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="card-cyber p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00ff66]/15 flex items-center justify-center text-[#00ff66] mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-1">
                Email
              </h3>
              <p className="text-xs font-mono text-gray-400 mb-4">
                Fastest response for recruitment
              </p>
              <p className="text-sm font-mono text-gray-200 select-all break-all mb-4">
                {PERSONAL_INFO.email}
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 py-2.5 px-3 rounded-lg bg-[#00ff66] hover:bg-[#00e65c] text-[#06080c] font-heading font-bold text-xs text-center transition-colors"
              >
                Email Me
              </a>
              <button
                onClick={handleCopyEmail}
                className="py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 font-mono text-xs border border-white/10 transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#00ff66]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="card-cyber p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00ff66]/15 flex items-center justify-center text-[#00ff66] mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-1">
                Location
              </h3>

              <p className="text-xs font-mono text-gray-400 mb-4">
                Currently based in Mumbai, India
              </p>

              <p className="text-base font-mono font-bold text-gray-200">
                Open to Work Worldwide
              </p>

              <p className="text-xs font-mono text-[#00ff66] mt-3">
                On-site · Hybrid · Remote · Relocation
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-gray-300 hover:text-[#00ff66] flex items-center gap-1.5 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#00ff66]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-gray-600">•</span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-gray-300 hover:text-[#00ff66] flex items-center gap-1.5 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-gray-300" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
