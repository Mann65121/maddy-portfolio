import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[92vh] bg-[#0d121c] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111724]/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#00ff66]/15 text-[#00ff66]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-lg font-heading font-bold text-white">
                Manav Bhatt — Curriculum Vitae
              </h2>
              <p className="text-xs font-mono text-gray-400">
                Official PDF Resume • Updated 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Manav_Bhatt_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00ff66] hover:bg-[#00e65c] text-[#06080c] font-heading font-bold text-xs transition-colors shadow-md shadow-[#00ff66]/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors hidden sm:inline-flex"
              title="Open in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Frame */}
        <div className="flex-1 w-full bg-[#06080c] p-2 sm:p-4 overflow-hidden">
          <iframe
            src={`${PERSONAL_INFO.resumeUrl}#toolbar=0`}
            className="w-full h-full rounded-2xl border border-white/10 bg-white"
            title="Manav Bhatt Resume PDF"
          />
        </div>

        {/* Bottom bar summary */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#06080c] flex items-center justify-between text-xs font-mono text-gray-400">
          <span className="flex items-center gap-1.5 text-gray-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff66]" />
            Official verified PDF resume
          </span>
          <span className="hidden sm:inline">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300">Esc</kbd> to return
          </span>
        </div>
      </div>
    </div>
  );
};
