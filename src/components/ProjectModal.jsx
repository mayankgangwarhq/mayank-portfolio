import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  ExternalLink,
  ShieldAlert,
  Layers,
  Sparkles,
  CheckCircle,
  Info
} from 'lucide-react';
import {
  JivexaLogo,
  AgriNextLogo,
  StudyBuddyXLogo,
  SkillZenLogo
} from './ProjectLogos';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is active
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const renderLogo = (id) => {
    switch (id) {
      case 'jivexa-health':
        return <JivexaLogo className="w-14 h-14 sm:w-16 sm:h-16 shrink-0" />;
      case 'agrinext':
        return <AgriNextLogo className="w-14 h-14 shrink-0" />;
      case 'studybuddy-ai':
      case 'studybuddyx':
        return <StudyBuddyXLogo className="w-14 h-14 shrink-0" />;
      case 'skillzen':
        return <SkillZenLogo className="w-14 h-14 shrink-0" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (statusType, status) => {
    if (statusType === 'live-prototype') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#ECFDF5] text-[#0D9488] border border-[#A7F3D0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
          {status}
        </span>
      );
    }
    if (statusType === 'in-dev') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F5F3FF] text-[#7C3AED] border border-[#DDD6FE]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
          {status}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]" />
        {status}
      </span>
    );
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0F172A]/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="relative w-full max-w-2xl rounded-3xl bg-white border border-[#E2E8F0] shadow-2xl p-6 sm:p-8 overflow-hidden text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-4">
            {renderLogo(project.id)}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-mono text-[#2563EB] font-semibold uppercase tracking-wider">
                  {project.badgeCategory}
                </span>
                {getStatusBadge(project.statusType, project.status)}
              </div>
              <h3 id="modal-title" className="text-2xl font-heading font-bold text-[#0F172A] tracking-tight">
                {project.name}
              </h3>
              {project.tagline && (
                <p className="text-xs sm:text-sm font-medium text-[#2563EB] mt-0.5 font-mono">
                  "{project.tagline}"
                </p>
              )}
            </div>
          </div>

          <motion.button
            type="button"
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
          
          {/* Medical Disclaimer Alert for Jivexa Health */}
          {project.disclaimer && (
            <div className="p-4 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#0F766E] font-mono uppercase tracking-wide">
                  Healthcare Tool Notice
                </span>
                <p className="text-xs text-[#134E4A] leading-relaxed">
                  {project.disclaimer}
                </p>
              </div>
            </div>
          )}

          {/* Deep Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-[#64748B] tracking-wider font-semibold flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-[#2563EB]" />
              Project Concept & Overview
            </h4>
            <p className="text-sm text-[#475569] leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Key Exploration Areas */}
          {project.keyFocusAreas && project.keyFocusAreas.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-[#64748B] tracking-wider font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                Key Exploration Areas
              </h4>
              <ul className="space-y-2">
                {project.keyFocusAreas.map((area, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 3 }}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569]"
                  >
                    <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Verified Technologies */}
          {project.techStack && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-[#64748B] tracking-wider font-semibold flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer / Actions */}
        <div className="pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#64748B] font-mono">
            Status: <span className="text-[#0F172A] font-semibold">{project.status}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
            >
              Close
            </button>

            {project.hasLiveUrl && project.url ? (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white hover:opacity-95 transition-all shadow-sm active:scale-95 btn-shimmer"
              >
                <span>{project.actionLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            ) : (
              <div className="px-4 py-2 rounded-xl text-xs font-mono text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0] cursor-not-allowed">
                {project.actionLabel}
              </div>
            )}
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};
