import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-32 pb-16 overflow-hidden">
      {/* Background Subtle Cyber Glow & Grid */}
      <div className="absolute inset-0 cyber-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] cyber-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Identity-Focused Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] text-xs font-mono w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
              <span>Software Engineer & AI/ML Builder</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                <span className="text-[#00ff66]">Hello,</span> I'm Manav <br />
                <span className="inline-flex items-center gap-2">
                  Software Engineer
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#00ff66]/15 border border-[#00ff66]/40 text-base">
                    ⚡
                  </span>
                </span>
                <br />
                <span className="text-gray-100">
                  & Systems Builder
                </span>
              </h1>
            </div>

            {/* Identity-Focused Bio — who Manav IS, not what he's currently doing */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
              A software engineer who thrives at the intersection of scalable backend systems and applied machine learning. I architect robust, high-performance software — from distributed APIs and ensemble ML pipelines to privacy-first local AI systems — with relentless attention to engineering rigor and clean code.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#00ff66] hover:bg-[#00e65c] text-[#06080c] font-heading font-bold text-sm shadow-xl shadow-[#00ff66]/20 hover:shadow-[#00ff66]/35 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explore Projects</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-gray-200 hover:text-[#00ff66] transition-colors group focus:outline-none"
              >
                <span>Download CV</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00ff66]" />
              </button>
            </div>

          </div>

          {/* Right Column: Clean, Unobstructed Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] group">
              
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#00ff66]/20 via-transparent to-[#00ff66]/10 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Clean Framed Card - NO floating badges obstructing the photo */}
              <div className="relative rounded-3xl bg-[#0d121c] border border-white/10 p-3 shadow-2xl transition-all duration-300 group-hover:border-[#00ff66]/40">
                
                {/* Photo container */}
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#06080c] relative">
                  <img
                    src="/manav-bhatt.jpg"
                    alt="Portrait of Manav Bhatt"
                    width={480}
                    height={600}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: 'center 15%' }}
                  />
                  {/* Subtle lower gradient overlay for natural depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d121c]/40 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Social Links Ribbon: GitHub, LinkedIn, Email only — no IIT Ropar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 pt-8 border-t border-white/5">
          
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-cyber p-5 flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-300 group-hover:text-[#00ff66] group-hover:bg-[#00ff66]/10 transition-colors">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-base font-heading font-bold text-white group-hover:text-[#00ff66] transition-colors">
                GitHub
              </p>
              <p className="text-xs font-mono text-gray-400">
                Explore Repositories & Code
              </p>
            </div>
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-cyber p-5 flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-300 group-hover:text-[#00ff66] group-hover:bg-[#00ff66]/10 transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-base font-heading font-bold text-white group-hover:text-[#00ff66] transition-colors">
                LinkedIn
              </p>
              <p className="text-xs font-mono text-gray-400">
                Connect Professionally
              </p>
            </div>
          </a>

          <a
            href="#contact"
            className="card-cyber p-5 flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-300 group-hover:text-[#00ff66] group-hover:bg-[#00ff66]/10 transition-colors">
              <Mail className="w-5 h-5 text-[#00ff66]" />
            </div>
            <div>
              <p className="text-base font-heading font-bold text-white group-hover:text-[#00ff66] transition-colors">
                Direct Email
              </p>
              <p className="text-xs font-mono text-gray-400">
                Get In Touch
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};
