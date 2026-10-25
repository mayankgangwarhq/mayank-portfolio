import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import {
  FileCode2,
  Sparkles,
  Rocket,
  Users,
  Compass,
  GraduationCap,
  MapPin,
  Quote,
  CheckCircle2
} from 'lucide-react';

export const About = () => {
  const { about, location } = personalInfo;

  const principleStyles = [
    {
      iconBg: 'bg-[#EFF6FF] border-[#BFDBFE] text-[#2563EB]',
      badgeColor: 'text-[#2563EB]',
      hoverBorder: 'hover:border-[#2563EB]/40',
      icon: <FileCode2 className="w-5 h-5 text-[#2563EB]" />
    },
    {
      iconBg: 'bg-[#F5F3FF] border-[#DDD6FE] text-[#7C3AED]',
      badgeColor: 'text-[#7C3AED]',
      hoverBorder: 'hover:border-[#7C3AED]/40',
      icon: <Sparkles className="w-5 h-5 text-[#7C3AED]" />
    },
    {
      iconBg: 'bg-[#ECFDF5] border-[#A7F3D0] text-[#0D9488]',
      badgeColor: 'text-[#0D9488]',
      hoverBorder: 'hover:border-[#0D9488]/40',
      icon: <Rocket className="w-5 h-5 text-[#0D9488]" />
    },
    {
      iconBg: 'bg-[#FFF1E8] border-[#FED7AA] text-[#EA580C]',
      badgeColor: 'text-[#EA580C]',
      hoverBorder: 'hover:border-[#EA580C]/40',
      icon: <Users className="w-5 h-5 text-[#EA580C]" />
    },
    {
      iconBg: 'bg-[#F0F9FF] border-[#BAE6FD] text-[#0284C7]',
      badgeColor: 'text-[#0284C7]',
      hoverBorder: 'hover:border-[#0284C7]/40',
      icon: <Compass className="w-5 h-5 text-[#0284C7]" />
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#F0F9FF]/30 border-t border-[#E2E8F0]">
      {/* Pastel Ambient Orbs */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[320px] bg-[#EFF6FF] rounded-full blur-[140px] pointer-events-none -z-10 opacity-70"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, -15, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[320px] bg-[#F5F3FF] rounded-full blur-[140px] pointer-events-none -z-10 opacity-70"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-mono text-[#2563EB] shadow-xs">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-heading tracking-tight">
            Curious by Nature.{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              Driven by Problem Solving.
            </span>
          </h2>
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {about.lead}
          </p>
        </motion.div>

        {/* Split Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Founder Identity & Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Visual Portrait Container Card */}
            <div className="rounded-3xl p-6 sm:p-7 relative overflow-hidden border border-[#E2E8F0] bg-white shadow-md group transition-all duration-300 hover:shadow-xl">
              {/* Subtle top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#0D9488]" />

              <div className="flex flex-col items-center text-center pt-2">
                
                {/* Real Founder Portrait Frame (Uncropped, natural 2:3 aspect ratio, complete photograph) */}
                <div className="relative mb-5">
                  <div className="relative p-[2.5px] rounded-2xl bg-gradient-to-tr from-[#2563EB] via-[#7C3AED] to-[#0D9488] shadow-md transition-all duration-300">
                    <div className="w-48 max-w-full aspect-[2/3] rounded-[13px] overflow-hidden bg-[#0A0F1D] flex items-center justify-center">
                      <img
                        src="/mayank-gangwar.jpg"
                        alt="Portrait of Mayank Gangwar"
                        className="w-full h-full object-contain object-center block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-white border border-[#E2E8F0] text-[11px] font-mono text-[#2563EB] flex items-center gap-1.5 shadow-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
                    <span>Active Builder</span>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-[#0F172A] tracking-tight">
                  {personalInfo.name}
                </h3>
                
                <p className="text-xs font-mono text-[#2563EB] mt-1 font-medium">
                  {personalInfo.titles.join(' • ')}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-[#64748B] mt-2 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{location}</span>
                </div>

                {/* Founder Info Grid */}
                <div className="w-full mt-6 pt-5 border-t border-[#E2E8F0] grid grid-cols-2 gap-3 text-left">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-3.5 rounded-xl bg-[#EFF6FF]/60 border border-[#BFDBFE] transition-all"
                  >
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#2563EB] block font-semibold">
                      Education
                    </span>
                    <span className="text-xs font-semibold text-[#0F172A] mt-0.5 block">
                      B.Tech in CSE
                    </span>
                    <span className="text-[11px] text-[#64748B] font-mono">Jaipur, Rajasthan</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-3.5 rounded-xl bg-[#ECFDF5]/60 border border-[#A7F3D0] transition-all"
                  >
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#0D9488] block font-semibold">
                      Core Focus
                    </span>
                    <span className="text-xs font-semibold text-[#0F172A] mt-0.5 block">
                      AI & HealthTech
                    </span>
                    <span className="text-[11px] text-[#64748B] font-mono">AgriTech & EdTech</span>
                  </motion.div>
                </div>

                {/* Verification Badge */}
                <div className="mt-4 p-2.5 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] w-full flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span className="text-[11px] text-[#0D9488] font-mono font-medium">
                    Founder & AI Builder • Jaipur, India
                  </span>
                </div>

              </div>
            </div>

            {/* Founder Quote Card with Warm Peach Accent */}
            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white via-[#FFF1E8]/40 to-[#F5F3FF]/40 border border-[#FED7AA] shadow-xs relative transition-shadow hover:shadow-md"
            >
              <Quote className="w-5 h-5 text-[#F97360] mb-2" />
              <blockquote className="text-sm italic text-[#475569] leading-relaxed font-sans">
                "Real learning doesn't happen on slides. It happens when you open an editor, write a prototype, test it with real scenarios, and break assumptions."
              </blockquote>
              <div className="mt-3 text-right">
                <span className="text-xs font-mono text-[#EA580C] font-semibold">— Mayank Gangwar</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Editorial Narrative & 5 Guiding Principles */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Story Card */}
            <div className="rounded-3xl p-6 sm:p-8 space-y-4 text-[#475569] text-sm sm:text-base leading-relaxed border border-[#E2E8F0] bg-white shadow-md">
              <div className="flex items-center gap-2 pb-2 border-b border-[#E2E8F0]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                <h3 className="text-xs font-mono font-semibold text-[#0F172A] uppercase tracking-wider">
                  Story & Philosophy
                </h3>
              </div>
              {about.bio.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Five Founder Principles */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-heading font-bold text-[#0F172A] tracking-tight flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#2563EB]" />
                  What Defines My Approach
                </h3>
                <span className="text-xs font-mono text-[#64748B]">5 Core Tenets</span>
              </div>

              <div className="space-y-3">
                {about.principles.map((principle, index) => {
                  const style = principleStyles[index % principleStyles.length];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                      whileHover={{ y: -3, scale: 1.01 }}
                      className={`p-4 sm:p-4.5 rounded-2xl bg-white border border-[#E2E8F0] ${style.hoverBorder} hover:shadow-md transition-all duration-200 flex items-start gap-4 group`}
                    >
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`p-2.5 rounded-xl border shrink-0 transition-transform ${style.iconBg}`}
                      >
                        {style.icon}
                      </motion.div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono font-bold ${style.badgeColor}`}>
                            0{index + 1}.
                          </span>
                          <h4 className="text-sm font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                            {principle.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-[#475569] leading-normal">
                          {principle.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
