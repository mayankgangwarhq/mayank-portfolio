import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import {
  GraduationCap,
  Building2,
  MapPin,
  BookOpen,
  CheckCircle2,
  Clock
} from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#F5F3FF]/40 border-t border-[#E2E8F0]">
      {/* Subtle soft lavender and blue ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/4 w-[600px] h-[360px] bg-[#F5F3FF] rounded-full blur-[140px] pointer-events-none -z-10 opacity-80"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[360px] bg-[#EFF6FF] rounded-full blur-[140px] pointer-events-none -z-10 opacity-70"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDD6FE] text-xs font-mono text-[#7C3AED] shadow-xs">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{educationData.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-heading tracking-tight">
            Education & <span className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-transparent">Academic Background.</span>
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            "{educationData.subtitle}"
          </p>
        </motion.div>

        {/* Dedicated Education Showcase Card with Violet Accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -4, scale: 1.005 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] bg-white hover:border-[#7C3AED]/40 relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            {/* Top decorative gradient bar: Indigo to Violet */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4338CA] via-[#7C3AED] to-[#A855F7]" />

            <div className="relative space-y-8 pt-2">
              
              {/* Top Banner: Degree & Branch with Violet Accents */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-6 border-b border-[#E2E8F0]">
                <div className="flex items-start sm:items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-[#F5F3FF] to-[#EFF6FF] border border-[#DDD6FE] text-[#7C3AED] shadow-sm shrink-0"
                  >
                    <GraduationCap className="w-8 h-8 text-[#7C3AED]" />
                  </motion.div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono text-[#7C3AED] font-semibold uppercase tracking-wider">
                        Undergraduate Engineering
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-heading tracking-tight">
                      {educationData.degree}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-[#7C3AED] mt-0.5">
                      {educationData.branch}
                    </p>
                  </div>
                </div>

                {/* Status Badge: Active Undergraduate */}
                <div className="self-start sm:self-center shrink-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] text-xs font-mono text-[#7C3AED] shadow-xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]" />
                    </span>
                    <span className="font-semibold">{educationData.statusBadge}</span>
                  </div>
                </div>
              </div>

              {/* Institution Information Tile */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs space-y-3"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#7C3AED] shadow-xs shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block font-semibold">
                      Institution & University Association
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading leading-snug">
                      {educationData.institution}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-mono pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#7C3AED]" />
                      <span>{educationData.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Core Academic Focus Areas */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#7C3AED]" />
                  <h4 className="text-xs font-mono uppercase text-[#64748B] tracking-wider font-semibold">
                    Core Academic Focus & Curriculum Disciplines
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {educationData.academicFocus.map((focusItem, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.04, y: -2 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                      className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#7C3AED]/40 hover:bg-white transition-all flex items-center gap-2.5 text-xs text-[#0F172A] shadow-2xs group/item cursor-default"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 group-hover/item:text-[#2563EB] transition-colors" />
                      <span className="font-medium">{focusItem}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Academic Context / Summary */}
              <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#64748B]">
                <p className="leading-relaxed max-w-2xl text-xs sm:text-sm text-[#475569]">
                  {educationData.academicSummary}
                </p>
                <div className="flex items-center gap-2 shrink-0 font-mono text-[11px] text-[#7C3AED] font-semibold px-3.5 py-1.5 rounded-xl bg-[#F5F3FF] border border-[#DDD6FE]">
                  <Clock className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>{educationData.currentStage}</span>
                </div>
              </div>

            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
