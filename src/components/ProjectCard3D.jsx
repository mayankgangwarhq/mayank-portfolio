import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldAlert, ArrowUpRight, ChevronRight } from 'lucide-react';

export const ProjectCard3D = ({
  project,
  theme,
  icon,
  statusBadge,
  onSelectProject
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates relative to card center (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 20 });

  // Map to degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  // Dynamic glare coordinates
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const isFeatured = project.id === 'jivexa-health';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative rounded-3xl transition-shadow duration-300 ${
        isHovered ? 'shadow-2xl' : 'shadow-md'
      }`}
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Outer animated gradient border for Jivexa Health */}
      <div
        className={`rounded-3xl p-[2px] transition-all duration-300 ${
          isFeatured
            ? 'animated-gradient-border shadow-lg shadow-[#2563EB]/20'
            : `${theme.border}`
        }`}
      >
        <div
          className={`rounded-[22px] p-6 sm:p-8 flex flex-col justify-between ${theme.cardBg} relative overflow-hidden h-full`}
        >
          {/* Subtle cursor-following glare overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-[22px] opacity-0 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.35 : 0,
              background: `radial-gradient(circle 260px at ${glareX} ${glareY}, rgba(255, 255, 255, 0.8), transparent 70%)`,
            }}
          />

          {/* Decorative Corner Glow */}
          <div
            className={`absolute -top-12 -right-12 w-48 h-48 rounded-full ${theme.glowOrb} blur-2xl pointer-events-none transition-transform duration-500 ${
              isHovered ? 'scale-150 opacity-100' : 'opacity-60'
            }`}
          />

          {/* Card Top: Branding, Category & Status */}
          <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3.5">
                {icon}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading tracking-tight transition-colors">
                    {project.name}
                  </h3>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-md border mt-0.5 inline-block font-medium ${theme.badgePill}`}
                  >
                    {project.badgeCategory}
                  </span>
                </div>
              </div>
              {statusBadge}
            </div>

            {/* Project Tagline */}
            {project.tagline && (
              <p className={`text-xs sm:text-sm font-semibold mb-3 font-mono ${theme.taglineColor}`}>
                "{project.tagline}"
              </p>
            )}

            {/* Description */}
            <p className="text-sm text-[#475569] leading-relaxed mb-5">
              {project.shortDescription}
            </p>

            {/* Clinical Disclaimer Notice for Jivexa Health */}
            {project.disclaimer && (
              <div className="p-3.5 mb-5 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-start gap-3 shadow-2xs">
                <ShieldAlert className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#0F766E] leading-relaxed">
                  <strong>Healthcare Tool Notice:</strong> Designed strictly as an informational assistant, never replacing licensed medical professionals.
                </p>
              </div>
            )}

            {/* Technology Pills with Individual Pastel Hover */}
            {project.techStack && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] shadow-2xs cursor-default transition-all duration-200 ${theme.pillHover}`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            )}
          </div>

          {/* Card Bottom: Interaction Buttons */}
          <div
            className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-3 relative z-10"
            style={{ transform: 'translateZ(25px)' }}
          >
            <motion.button
              type="button"
              onClick={() => onSelectProject(project)}
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#475569] hover:text-[#0F172A] transition-colors focus:outline-none group/btn"
            >
              <span>Project Overview</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#64748B] group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>

            {project.hasLiveUrl && project.url ? (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`inline-flex items-center gap-2 px-4.5 py-2 rounded-xl text-xs font-semibold ${theme.btnBg} transition-all shadow-md active:scale-95 btn-shimmer`}
                aria-label={`Open ${project.name} live prototype in new tab`}
              >
                <span>{project.actionLabel}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            ) : (
              <span className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs font-mono text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0] shadow-2xs cursor-default">
                {project.actionLabel}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
