import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import {
  Code2,
  Cpu,
  Sparkles,
  Layers
} from 'lucide-react';

export const Skills = () => {
  const getCategoryStyles = (index) => {
    switch (index) {
      case 0: // Programming & Full-Stack (Primary Blue)
        return {
          cardBg: 'bg-white',
          border: 'border-[#E2E8F0] hover:border-[#2563EB]/50',
          hoverShadow: 'hover:shadow-xl hover:shadow-[#2563EB]/10',
          iconBg: 'bg-[#EFF6FF] border-[#BFDBFE] text-[#2563EB]',
          badge: 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]',
          skillHover: 'hover:border-[#2563EB]/40 hover:bg-[#EFF6FF]/40',
          skillPill: 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]',
          icon: <Code2 className="w-5 h-5 text-[#2563EB]" />,
          glow: 'bg-[#2563EB]/10'
        };
      case 1: // AI & Emerging Tech (Vibrant Violet)
        return {
          cardBg: 'bg-white',
          border: 'border-[#E2E8F0] hover:border-[#7C3AED]/50',
          hoverShadow: 'hover:shadow-xl hover:shadow-[#7C3AED]/10',
          iconBg: 'bg-[#F5F3FF] border-[#DDD6FE] text-[#7C3AED]',
          badge: 'bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]',
          skillHover: 'hover:border-[#7C3AED]/40 hover:bg-[#F5F3FF]/40',
          skillPill: 'bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]',
          icon: <Cpu className="w-5 h-5 text-[#7C3AED]" />,
          glow: 'bg-[#7C3AED]/10'
        };
      case 2: // Product & Entrepreneurship (Teal Accent)
      default:
        return {
          cardBg: 'bg-white',
          border: 'border-[#E2E8F0] hover:border-[#0D9488]/50',
          hoverShadow: 'hover:shadow-xl hover:shadow-[#0D9488]/10',
          iconBg: 'bg-[#ECFDF5] border-[#A7F3D0] text-[#0D9488]',
          badge: 'bg-[#ECFDF5] text-[#0D9488] border-[#A7F3D0]',
          skillHover: 'hover:border-[#0D9488]/40 hover:bg-[#ECFDF5]/40',
          skillPill: 'bg-[#ECFDF5] text-[#0D9488] border-[#A7F3D0]',
          icon: <Sparkles className="w-5 h-5 text-[#0D9488]" />,
          glow: 'bg-[#0D9488]/10'
        };
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#F8FAFC] border-t border-[#E2E8F0]">
      {/* Background Pastel Ambience */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-[#EFF6FF] rounded-full blur-[140px] pointer-events-none -z-10 opacity-70"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], y: [0, -20, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-10 w-80 h-80 bg-[#F5F3FF] rounded-full blur-[120px] pointer-events-none -z-10 opacity-60"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-mono text-[#2563EB] shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Capability & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-heading tracking-tight">
            Skills & <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Technical Exploration.</span>
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {skillsData.subtitle}
          </p>
          <div className="inline-block mt-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#E2E8F0]">
            <p className="text-[11px] font-mono text-[#64748B]">
              {skillsData.disclaimer}
            </p>
          </div>
        </motion.div>

        {/* 3 Categories Grid with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillsData.categories.map((cat, idx) => {
            const styles = getCategoryStyles(idx);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between border ${styles.cardBg} ${styles.border} relative overflow-hidden group transition-all duration-300 shadow-md ${styles.hoverShadow}`}
              >
                {/* Subtle Radial Glow */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${styles.glow} blur-2xl pointer-events-none group-hover:scale-125 transition-transform`} />

                {/* Category Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <motion.div
                      whileHover={{ scale: 1.12, rotate: 6 }}
                      className={`p-3 rounded-2xl border shadow-xs transition-transform ${styles.iconBg}`}
                    >
                      {styles.icon}
                    </motion.div>
                    <span className={`text-[11px] font-mono px-3 py-1 rounded-full border font-semibold ${styles.badge}`}>
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#0F172A] tracking-tight mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skill Items List */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <motion.div
                        key={sIdx}
                        whileHover={{ scale: 1.02, x: 2 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                        className={`p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] ${styles.skillHover} hover:bg-white transition-all duration-200 shadow-2xs group/item cursor-default`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-sm font-semibold text-[#0F172A]">
                            {skill.name}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${styles.skillPill}`}>
                            {skill.status}
                          </span>
                        </div>
                        <p className="text-xs text-[#64748B] leading-normal">
                          {skill.focus}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Note */}
                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] font-mono text-[#64748B] relative z-10">
                  <span>Active Practice</span>
                  <span className="text-[#2563EB] font-semibold">Continuous Growth</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
