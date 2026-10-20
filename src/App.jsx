import React, { useState } from 'react';
import { BubbleBurst } from './components/BubbleBurst';
import { VisionGridBackground } from './components/VisionGridBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <BubbleBurst>
      <div className="relative min-h-screen bg-[#0b0e1b] text-slate-100 transition-colors duration-200 selection:bg-[#E3EF4F] selection:text-[#0b0e1b]">
        {/* Computer Vision & Machine Learning Schematic Grid Background */}
        <VisionGridBackground />

        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        
        {/* Main Content Sections */}
        <main id="main-content" className="relative z-10">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <div className="relative z-10">
          <Footer onOpenResume={() => setIsResumeOpen(true)} />
        </div>

        {/* High-Fidelity Resume Viewer & Downloader Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </BubbleBurst>
  );
}

export default App;
