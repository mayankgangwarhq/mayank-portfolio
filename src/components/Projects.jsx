import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import {
  JivexaLogo,
  AgriNextLogo,
  StudyBuddyXLogo,
  SkillZenLogo
} from './ProjectLogos';
import { ProjectCard3D } from './ProjectCard3D';
import { FolderGit2 } from 'lucide-react';

export const Projects = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterCategories = ['All', 'HealthTech', 'AgriTech', 'EdTech', 'AI'];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.categories?.includes(selectedCategory) || project.category === selectedCategory;
  });

  const renderProjectIcon = (id) => {
    switch (id) {
      case 'jivexa-health':
        return <JivexaLogo className="w-13 h-13 sm:w-14 sm:h-14 shrink-0 transition-transform duration-300 group-hover:scale-105" />;
      case 'agrinext':
        return <AgriNextLogo className="w-12 h-12 shrink-0 group-hover:scale-105 transition-transform" />;
      case 'studybuddy-ai':
      case 'studybuddyx':
        return <StudyBuddyXLogo className="w-12 h-12 shrink-0 group-hover:scale-105 transition-transform" />;
      case 'skillzen':
        return <SkillZenLogo className="w-12 h-12 shrink-0 group-hover:scale-105 transition-transform" />;
      default:
        return null;
    }
  };

  // Coordinated accent colors on white cards
  const getProjectTheme = (id) => {
    switch (id) {
      case 'jivexa-health':
        return {
          cardBg: 'bg-white',
          border: 'border-[#E2E8F0] hover:border-[#0D9488]/50',
          hoverShadow: 'hover:shadow-xl hover:shadow-[#0D9488]/15',
          accentColor: '#0D9488',
          taglineColor: 'text-[#0D9488]',
          badgePill: 'bg-[#ECFDF5] text-[#0D9488] border-[#A7F3D0]',
          pillHover: 'hover:border-[#0D9488]/40 hover:bg-[#ECFDF5]/50 hover:text-[#0F766E]',
          glowOrb: 'bg-[#0D9488]/15',
          btnBg: 'bg-gradient-to-r from-[#2563EB] to-[#0D9488] hover:from-[#1D4ED8] hover:to-[#0F766E] text-white shadow-[#0D9488]/25',
          featuredBadge: 'bg-[#ECFDF5] text-[#0D9488] border-[#A7F3D0]',
        };
      case 'agrinext':
        return {
          cardBg: 'bg-white',
          border: 'border-[#E2E8F0] hover:border-[#16A34A]/50',
          hoverShadow: 'hover:shadow-xl hover:shadow-[#16A34A]/15',
          accentColor: '#16A34A',
          taglineColor: 'text-[#16A34A]',
          badgePill: 'bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]',
          pillHover: 'hover:border-[#16A34A]/40 hover:bg-[#F0FDF4]/50 hover:text-[#14532D]',
          glowOrb: 'bg-[#16A34A]/15',
          btnBg: 'bg-gradient-to-r from-[#16A34A] to-[#0D9488] hover:from-[#15803D] hover:to-[#0F766E] text-white shadow-[#16A34A]/25',
          featuredBadge: null,
        };
      case 'studybuddy-ai':
      case 'studybuddyx':
        return {
          cardBg: 'bg-white',
          border: 'border-[#E2E8F0] hover:border-[#7C3AED]/50',
          hoverShadow: 'hover:shadow-xl hover:shadow-[#7C3AED]/15',
          accentColor: '#7C3AED',
          taglineColor: 'text-[#7C3AED]',
          badgePill: 'bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]',
          pillHover: 'hover:border-[#7C3AED]/40 hover:bg-[#F5F3FF]/50 hover:text-[#5B21B6]',
          glowOrb: 'bg-[#7C3AED]/15',
          btnBg: 'bg-gradient-to-r from-[#7C3AED] to-[#2563EB] hover:from-[#6D28D9] hover:to-[#1D4ED8] text-white shadow-[#7C3AED]/25',
          featuredBadge: null,
        };
      case 'skillzen':
        return {
          cardBg: 'bg-white',
          border: 'border-[#E2E8F0] hover:border-[#2563EB]/50',
          hoverShadow: 'hover:shadow-xl hover:shadow-[#2563EB]/15',
          accentColor: '#2563EB',
          taglineColor: 'text-[#2563EB]',
          badgePill: 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]',
          pillHover: 'hover:border-[#2563EB]/40 hover:bg-[#EFF6FF]/50 hover:text-[#1D4ED8]',
          glowOrb: 'bg-[#2563EB]/15',
          btnBg: 'bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] text-white shadow-[#2563EB]/25',
          featuredBadge: null,
        };
      default:
        return {
          cardBg: 'bg-white',
          border: 'border-[#E2E8F0]',
          hoverShadow: 'hover:shadow-xl',
          accentColor: '#2563EB',
          taglineColor: 'text-[#2563EB]',
          badgePill: 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]',
          pillHover: 'hover:border-[#2563EB]/40 hover:text-[#0F172A]',
          glowOrb: 'bg-[#BFDBFE]/20',
          btnBg: 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white',
          featuredBadge: null,
        };
    }
  };

  const getStatusBadge = (statusType, status) => {
    if (statusType === 'live-prototype') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#ECFDF5] text-[#0D9488] border border-[#A7F3D0] shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
          {status}
        </span>
      );
    }
    if (statusType === 'in-dev') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
          {status}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#FFF1E8] text-[#EA580C] border border-[#FED7AA]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#F97360]" />
        {status}
      </span>
    );
  };

  const getActiveTabColor = (category) => {
    switch (category) {
      case 'HealthTech':
        return 'bg-[#0D9488] text-white';
      case 'AgriTech':
        return 'bg-[#16A34A] text-white';
      case 'EdTech':
        return 'bg-[#7C3AED] text-white';
      case 'AI':
        return 'bg-[#2563EB] text-white';
      default:
        return 'bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white';
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#F8FAFC] border-t border-[#E2E8F0]">
      {/* Subtle Pastel Ambient Orbs */}
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-10 w-96 h-96 bg-[#EFF6FF] rounded-full blur-[130px] pointer-events-none -z-10 opacity-70"
      />
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#F5F3FF] rounded-full blur-[130px] pointer-events-none -z-10 opacity-70"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filter Controls with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-mono text-[#2563EB] shadow-xs">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Product Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-heading tracking-tight">
              Featured <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Projects & Prototypes.</span>
            </h2>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              Real-world prototypes and early concepts exploring high-impact domains in digital healthcare, agriculture, and educational technology.
            </p>
          </div>

          {/* Animated Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-full border border-[#E2E8F0] shadow-sm relative">
            {filterCategories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                    isSelected ? 'text-white font-semibold' : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="project-filter-active"
                      className={`absolute inset-0 rounded-full shadow-xs -z-10 ${getActiveTabColor(category)}`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Project Cards Grid with 3D Tilt & Staggered Scroll Entrance */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const theme = getProjectTheme(project.id);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <ProjectCard3D
                    project={project}
                    theme={theme}
                    icon={renderProjectIcon(project.id)}
                    statusBadge={getStatusBadge(project.statusType, project.status)}
                    onSelectProject={onSelectProject}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Section Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-xs font-mono text-[#64748B]">
            All prototypes are developed in public or iterative environments • Updated as development progresses
          </p>
        </motion.div>

      </div>
    </section>
  );
};
