import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06080c]/90 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/70 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Emblem */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff66] rounded-lg p-1"
            aria-label="Manav Bhatt Portfolio Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#00ff66] flex items-center justify-center font-heading font-black text-sm text-[#06080c] shadow-lg shadow-[#00ff66]/25 transition-transform group-hover:scale-105">
              MB
            </div>
            <span className="font-heading font-bold text-lg text-white tracking-tight">
              Manav<span className="text-[#00ff66]">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-[#00ff66] transition-colors font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00ff66]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="text-xs font-mono text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#00ff66]" />
              CV
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00ff66] hover:text-[#06080c] bg-transparent hover:bg-[#00ff66] border border-[#00ff66]/60 hover:border-[#00ff66] px-4 py-2 rounded-lg transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff66]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-xs text-[#00ff66] bg-[#0d121c] border border-white/5 rounded-lg"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white bg-[#0d121c] border border-white/5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff66]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/5 bg-[#0b0f17]/95 backdrop-blur-xl px-5 pt-4 pb-6 mt-3 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-gray-200 hover:text-[#00ff66] py-2 px-3 rounded-lg hover:bg-white/5 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 text-sm font-mono py-2.5 rounded-lg bg-white/5 text-gray-200 border border-white/10"
            >
              <FileText className="w-4 h-4 text-[#00ff66]" />
              View Resume (PDF)
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-sm font-mono font-semibold py-2.5 rounded-lg bg-[#00ff66] text-[#06080c] shadow-lg shadow-[#00ff66]/20"
            >
              <Send className="w-4 h-4" />
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
