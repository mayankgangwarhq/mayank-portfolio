import React from 'react';
import { motion } from 'framer-motion';
import { visionData } from '../data/portfolioData';
import {
  HeartPulse,
  Sprout,
  GraduationCap,
  Eye,
  CheckCircle2
} from 'lucide-react';

export const Vision = () => {
  const getPillarStyles = (id) => {
    switch (id) {
      case 'healthcare':
        return {
          cardBg: 'bg-white',
          border: 'border-[#E2E8F0] hover:border-[#0D9488]/50',
          hoverShadow: 'hover:shadow-xl hover:shadow-[#0D9488]/15',
          iconBg: 'bg-[#ECFDF5] border-[#A7F3D0] text-[#0D9488]',
          taglineColor: 'text-[#0D9488]',
          checkColor: 'text-[#0D9488]',
          badge: 'bg-[#ECFDF5] text-[#0D9488] border-[#A7F3D0]',
          icon: <HeartPulse className="w-6 h-6 text-[#0D9488]" />
        };
      case 'agriculture':
        return {
          cardBg: 'bg-white',
          border: 'border-[#E2E8F0] hover:border-[#16A34A]/50',
          hoverShadow: 'hover:shadow-xl hover:shadow-[#16A34A]/15',
          iconBg: 'bg-[#F0FDF4] border-[#BBF7D0] text-[#16A34A]',
          taglineColor: 'text-[#16A34A]',
          checkColor: 'text-[#16A34A]',
          badge: 'bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]',
          icon: <Sprout className="w-6 h-6 text-[#16A34A]" />
        };
      case 'education':
      default:
        return {
          cardBg: 'bg-white',
          border: 'border-[#E2E8F0] hover:border-[#7C3AED]/50',
          hoverShadow: 'hover:shadow-xl hover:shadow-[#7C3AED]/15',
          iconBg: 'bg-[#F5F3FF] border-[#DDD6FE] text-[#7C3AED]',
          taglineColor: 'text-[#7C3AED]',
          checkColor: 'text-[#7C3AED]',
          badge: 'bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]',
          icon: <GraduationCap className="w-6 h-6 text-[#7C3AED]" />
        };
    }
  };

  return (
    <section id="vision" className="py-24 relative overflow-hidden bg-[#F0F9FF]/30 border-t border-[#E2E8F0]">
      {/* Background Pastel Ambience */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-1/4 w-[650px] h-[340px] bg-[#F5F3FF] rounded-full blur-[140px] pointer-events-none -z-10 opacity-70"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, -20, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-10 w-96 h-96 bg-[#EFF6FF] rounded-full blur-[140px] pointer-events-none -z-10 opacity-70"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-mono text-[#2563EB] shadow-xs">
            <Eye className="w-3.5 h-3.5" />
            <span>North Star & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#0F172A] font-heading tracking-tight leading-tight">
            "Technology Should{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              Solve Real Problems.
            </span>"
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {visionData.description}
          </p>
        </motion.div>

        {/* 3 Visual Pillars Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {visionData.pillars.map((pillar, idx) => {
            const styles = getPillarStyles(pillar.id);

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between border ${styles.cardBg} ${styles.border} relative overflow-hidden group transition-all duration-300 shadow-md ${styles.hoverShadow}`}
              >
                <div>
                  {/* Pillar Icon & Header */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.12, rotate: 6 }}
                      className={`p-3.5 rounded-2xl border shadow-xs transition-transform ${styles.iconBg}`}
                    >
                      {styles.icon}
                    </motion.div>
                    <span className={`text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border ${styles.badge}`}>
                      Strategic Pillar
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-[#0F172A] tracking-tight mb-1">
                    {pillar.title}
                  </h3>
                  <span className={`text-xs font-mono font-semibold block mb-4 ${styles.taglineColor}`}>
                    {pillar.tagline}
                  </span>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {pillar.summary}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 pt-4 border-t border-[#E2E8F0]">
                    {pillar.bulletPoints.map((bullet, bIdx) => (
                      <motion.div
                        key={bIdx}
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-2.5 text-xs text-[#475569]"
                      >
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${styles.checkColor}`} />
                        <span className="leading-relaxed">{bullet}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#64748B]">
                  <span>Long-Term Focus</span>
                  <span className={`font-semibold ${styles.taglineColor}`}>Human-Centric Impact</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
