import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../data/portfolioData';
import { Milestone, Sparkles } from 'lucide-react';

export const Journey = () => {
  const getMilestoneTheme = (index, current) => {
    if (current) {
      return {
        cardBg: 'bg-gradient-to-br from-[#EFF6FF] via-[#F5F3FF] to-[#ECFDF5]/60',
        border: 'border-[#2563EB]',
        hoverShadow: 'hover:shadow-xl hover:shadow-[#2563EB]/15',
        badge: 'bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white',
        nodeBg: 'bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white border-white ring-4 ring-[#2563EB]/20 shadow-md',
        tagBg: 'bg-[#ECFDF5] text-[#0D9488] border-[#A7F3D0]',
        textColor: 'text-[#2563EB]'
      };
    }
    switch (index) {
      case 0:
        return {
          cardBg: 'bg-white',
          border: 'border-[#E2E8F0] hover:border-[#2563EB]/50',
          hoverShadow: 'hover:shadow-lg hover:shadow-[#2563EB]/10',
          badge: 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]',
          nodeBg: 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]',
          tagBg: 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]',
          textColor: 'text-[#2563EB]'
        };
      case 1:
        return {
          cardBg: 'bg-white',
          border: 'border-[#E2E8F0] hover:border-[#7C3AED]/50',
          hoverShadow: 'hover:shadow-lg hover:shadow-[#7C3AED]/10',
          badge: 'bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]',
          nodeBg: 'bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]',
          tagBg: 'bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]',
          textColor: 'text-[#7C3AED]'
        };
      case 2:
      default:
        return {
          cardBg: 'bg-white',
          border: 'border-[#E2E8F0] hover:border-[#0D9488]/50',
          hoverShadow: 'hover:shadow-lg hover:shadow-[#0D9488]/10',
          badge: 'bg-[#ECFDF5] text-[#0D9488] border-[#A7F3D0]',
          nodeBg: 'bg-[#ECFDF5] text-[#0D9488] border-[#A7F3D0]',
          tagBg: 'bg-[#ECFDF5] text-[#0D9488] border-[#A7F3D0]',
          textColor: 'text-[#0D9488]'
        };
    }
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-white border-t border-[#E2E8F0]">
      {/* Background Pastel Ambience */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-10 w-[550px] h-[340px] bg-[#EFF6FF] rounded-full blur-[140px] pointer-events-none -z-10 opacity-70"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-10 w-[550px] h-[340px] bg-[#F5F3FF] rounded-full blur-[140px] pointer-events-none -z-10 opacity-70"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-mono text-[#2563EB] shadow-xs">
            <Milestone className="w-3.5 h-3.5" />
            <span>Evolution & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-heading tracking-tight">
            The Building <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">Journey.</span>
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {journeyData.subtitle}
          </p>
        </motion.div>

        {/* Minimalist Visual Timeline with Blue-Violet Connecting Line */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line with Blue-to-Violet Gradient */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[#2563EB] via-[#7C3AED] to-[#0D9488] rounded-full hidden sm:block origin-top opacity-75"
          />

          <div className="space-y-10 relative">
            {journeyData.milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              const theme = getMilestoneTheme(index, item.current);

              return (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-10 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card with Slide In */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full sm:w-[calc(50%-2rem)]"
                  >
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      className={`rounded-3xl p-6 sm:p-7 border relative overflow-hidden transition-all duration-300 shadow-md ${theme.cardBg} ${theme.border} ${theme.hoverShadow}`}
                    >
                      {/* Top Step & Tag Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-xs font-mono font-bold ${theme.textColor}`}>
                          {item.stage}
                        </span>
                        <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-semibold ${theme.tagBg}`}>
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-heading font-bold text-[#0F172A] tracking-tight mb-1">
                        {item.title}
                      </h3>

                      <span className={`text-xs font-mono mb-3 block font-semibold ${theme.textColor}`}>
                        {item.subtitle}
                      </span>

                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        {item.description}
                      </p>

                      {item.current && (
                        <div className="mt-4 pt-3 border-t border-[#BFDBFE] flex items-center gap-2 text-xs font-mono text-[#2563EB] font-semibold">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D9488]" />
                          </span>
                          <span>Present Stage • Active Learning & Iterating</span>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Central Node Dot on Desktop with Blue-Violet Theme */}
                  <div className="hidden sm:flex items-center justify-center relative shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 350, damping: 20, delay: index * 0.1 + 0.2 }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-transform duration-300 ${theme.nodeBg} ${
                        item.current ? 'scale-110' : ''
                      }`}
                    >
                      {item.current ? (
                        <Sparkles className="w-4 h-4 text-white animate-spin-slow" />
                      ) : (
                        <span className="text-xs font-mono font-bold">{index + 1}</span>
                      )}
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for balancing desktop alignment */}
                  <div className="hidden sm:block w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
