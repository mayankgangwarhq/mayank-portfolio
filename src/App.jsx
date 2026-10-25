import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ScrollProgress } from './components/ScrollProgress';
import { CursorSpotlight } from './components/CursorSpotlight';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative min-h-screen bg-white text-[#0F172A] overflow-x-hidden selection:bg-[#2563EB]/15 selection:text-[#2563EB]">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* Subtle Desktop Cursor-Following Ambient Glow */}
      <CursorSpotlight />

      {/* Top Ambient Soft Blue & Violet Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[360px] bg-gradient-to-b from-[#EFF6FF] via-[#F5F3FF]/60 to-transparent blur-[140px] pointer-events-none -z-10 opacity-80" />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Education />
        <Projects onSelectProject={setSelectedProject} />
        <Skills />
        <Journey />
        <Vision />
        <Contact />
      </main>

      {/* Project Details Modal with Smooth Spring AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key="project-modal"
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
