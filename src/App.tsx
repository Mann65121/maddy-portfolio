import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { ServicesStats } from './components/ServicesStats';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06080c] text-[#ffffff] flex flex-col selection:bg-[#00ff66]/30 selection:text-[#00ff66]">
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <AboutMe />
        <ServicesStats />
        <Projects />
        <Skills />
        <ResumeSection onOpenResume={() => setResumeOpen(true)} />
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
};

export default App;
