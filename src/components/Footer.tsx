import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#05070a] py-14 text-xs font-mono text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00ff66] flex items-center justify-center font-heading font-black text-xs text-[#06080c] shadow-md shadow-[#00ff66]/20">
              MB
            </div>
            <div>
              <span className="text-white font-heading font-bold text-base">
                Manav<span className="text-[#00ff66]">.dev</span>
              </span>
              <p className="text-[11px] text-gray-500">
                Software Engineering & Applied AI/ML
              </p>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex items-center gap-6 text-gray-300">
            <a href="#home" className="hover:text-[#00ff66] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#00ff66] transition-colors">About</a>
            <a href="#services" className="hover:text-[#00ff66] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#00ff66] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#00ff66] transition-colors">Skills</a>
            <a href="#resume" className="hover:text-[#00ff66] transition-colors">Resume</a>
            <a href="#contact" className="hover:text-[#00ff66] transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0d121c] hover:bg-[#00ff66]/15 text-gray-300 hover:text-[#00ff66] border border-white/5 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#0d121c] hover:bg-[#00ff66]/15 text-gray-300 hover:text-[#00ff66] border border-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#00ff66] hover:bg-[#00e65c] text-[#06080c] shadow-lg shadow-[#00ff66]/20 transition-all focus:outline-none"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Disclosures */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-gray-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Manav Bhatt. Built with precision.
          </div>
          <div>
            React 19, TypeScript, Vite & Tailwind CSS. Black & Green Cyber Architecture.
          </div>
        </div>

      </div>
    </footer>
  );
};
