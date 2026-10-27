import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { personalInfo, whatsappBusiness } from '../data/portfolioData';
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { JivexaLogo, GithubIcon, LinkedinIcon, XIcon, WhatsAppIcon } from './ProjectLogos';

export const Hero = () => {
  // 3D tilt effect for the hero portrait card
  const cardRef = useRef(null);
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  const cardRotateXSpring = useSpring(cardY, { stiffness: 200, damping: 20 });
  const cardRotateYSpring = useSpring(cardX, { stiffness: 200, damping: 20 });

  const cardRotateX = useTransform(cardRotateXSpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const cardRotateY = useTransform(cardRotateYSpring, [-0.5, 0.5], ['-5deg', '5deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    cardX.set(xPct);
    cardY.set(yPct);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-28 sm:pt-36 pb-20 overflow-hidden bg-white"
    >
      {/* Soft Blue-to-Violet Ambient Background Gradient */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          x: [0, 15, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[760px] h-[440px] bg-gradient-to-tr from-[#EFF6FF] via-[#F5F3FF] to-[#F0F9FF] rounded-full blur-[140px] pointer-events-none -z-10 opacity-90"
      />
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -25, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-12 w-72 h-72 bg-[#EFF6FF] rounded-full blur-[110px] pointer-events-none -z-10 opacity-75"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 0.95, 1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 right-16 w-80 h-80 bg-[#F5F3FF] rounded-full blur-[120px] pointer-events-none -z-10 opacity-70"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -15, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#ECFDF5] rounded-full blur-[100px] pointer-events-none -z-10 opacity-50"
      />

      {/* Subtle Technical Grid Matrix */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      {/* Floating Abstract Pastel Geometric Accents */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [12, 18, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:block absolute top-32 right-12 w-10 h-10 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] shadow-sm pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:block absolute bottom-32 left-8 w-8 h-8 rounded-full bg-[#F5F3FF] border border-[#DDD6FE] shadow-sm pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-12, -6, -12] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:block absolute top-1/2 left-4 w-6 h-6 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] shadow-sm pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Headline & Identity */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Status Beacon & Founder Identity Line */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] shadow-xs cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
              </span>
              <span className="text-xs font-mono font-medium text-[#2563EB]">
                Currently Building <span className="text-[#7C3AED]">•</span> Early-Stage Projects
              </span>
            </motion.div>

            {/* Founder Name & Hierarchy */}
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#64748B] tracking-wider uppercase">
                <span className="text-[#2563EB] font-semibold">Founder</span>
                <span className="text-[#CBD5E1]">•</span>
                <span className="text-[#0F172A] font-medium">AI Builder</span>
                <span className="text-[#CBD5E1]">•</span>
                <span className="text-[#64748B]">B.Tech CSE Student</span>
              </div>

              {/* Founder Name with Blue-to-Violet Flowing Gradient Text */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#0F172A] font-heading leading-[1.08]">
                Mayank <span className="blue-violet-gradient-text">Gangwar</span>
              </h1>

              {/* Prominent Headline with Blue to Violet Accent */}
              <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-[#0F172A] font-heading leading-snug pt-1">
                Turning ideas into{' '}
                <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                  AI-powered products
                </span>{' '}
                and useful technology.
              </h2>
            </motion.div>

            {/* Short, Confident Introduction in Natural Language */}
            <motion.div
              variants={itemVariants}
              className="space-y-2 max-w-2xl text-[#475569] text-sm sm:text-base leading-relaxed"
            >
              <p>
                From healthcare intelligence to agriculture and education, I explore how software and artificial intelligence can solve meaningful problems and create better experiences.
              </p>
              <p className="text-xs sm:text-sm font-mono text-[#64748B]">
                Jaipur, Rajasthan, India • Intellipaat School of Technology & VGU
              </p>
            </motion.div>

            {/* Action Buttons & Social Links with Blue-to-Violet Accent */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              {/* Primary CTA: Blue to Violet Gradient Button with Shimmer */}
              <motion.a
                href="#projects"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white hover:opacity-95 transition-all shadow-md shadow-[#2563EB]/25 hover:shadow-lg hover:shadow-[#2563EB]/35 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </motion.a>

              {/* Premium CTA: Contact on WhatsApp Business */}
              <motion.a
                href={whatsappBusiness.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm bg-[#0F172A] text-white hover:bg-[#020617] border border-[#10B981]/50 hover:border-[#10B981] shadow-md shadow-[#10B981]/15 hover:shadow-lg hover:shadow-[#10B981]/25 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
                aria-label="Contact on WhatsApp Business (+91 9105539049)"
                title="Contact Mayank on WhatsApp Business"
              >
                <span className="p-1 rounded-lg bg-[#10B981]/20 text-[#34D399] group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                  <WhatsAppIcon className="w-4 h-4" />
                </span>
                <span>Contact on WhatsApp Business</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#34D399] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              {/* Secondary CTA: Get In Touch */}
              <motion.a
                href="#contact"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-white text-[#0F172A] hover:bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB]/50 shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 text-[#64748B]" />
              </motion.a>

              {/* Refined WhatsApp, GitHub, LinkedIn, and X Icon Buttons with Spring Lift */}
              <div className="flex items-center gap-2 pl-1">
                <motion.a
                  href={whatsappBusiness.chatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#10B981] hover:border-[#10B981]/50 shadow-xs transition-all"
                  aria-label="WhatsApp Business Chat"
                  title="WhatsApp Business (+91 91055 39049)"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#2563EB] hover:border-[#2563EB]/50 shadow-xs transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#2563EB] hover:border-[#2563EB]/50 shadow-xs transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={personalInfo.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-[#475569] hover:text-[#2563EB] hover:border-[#2563EB]/50 shadow-xs transition-all"
                  aria-label="X (Twitter) Profile"
                  title="X (Twitter)"
                >
                  <XIcon className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Supporting Tagline with Teal accent */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex items-center gap-2 text-xs font-mono text-[#64748B]"
            >
              <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
              <span className="text-[#0F172A] font-medium">{personalInfo.hero.tagline}</span>
              <span className="text-[#CBD5E1]">•</span>
              <span>Building Ideas. Creating Impact.</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Founder Persona Card & Prominently Integrated Real Profile Photo with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: cardRotateX,
                rotateY: cardRotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-md"
            >
              {/* Subtle Decorative Pastel Glow Ring behind profile card */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#EFF6FF] via-[#F5F3FF] to-[#ECFDF5] rounded-3xl blur-2xl -z-10 opacity-80" />

              {/* Elevated Card in Pure White with Soft Shadow */}
              <div className="glass-card rounded-3xl p-6 sm:p-7 relative overflow-hidden border border-[#E2E8F0] shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
                
                {/* Header: Identity Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
                    <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider font-semibold">
                      Founder Profile
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] font-medium">
                    B.Tech CSE
                  </span>
                </div>

                {/* Complete Profile Photo Frame (Uncropped, natural 2:3 aspect ratio, full head, shoulders & upper body visible) */}
                <div className="my-5 relative">
                  <div className="relative p-[2.5px] rounded-2xl bg-gradient-to-tr from-[#2563EB] via-[#7C3AED] to-[#0D9488] shadow-lg shadow-[#2563EB]/15 transition-all duration-300">
                    <div className="relative rounded-[14px] overflow-hidden bg-[#0A0F1D] w-full flex items-center justify-center">
                      <img
                        src="/mayank-gangwar.jpg"
                        alt="Portrait of Mayank Gangwar"
                        className="w-full h-auto max-h-[460px] object-contain object-center block"
                        loading="eager"
                      />
                    </div>
                  </div>

                  {/* Overlaid Founder Name & Active Status Tag positioned cleanly below the photograph */}
                  <div className="mt-3 p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-heading font-bold text-[#0F172A] tracking-tight flex items-center gap-1.5">
                        <span>Mayank Gangwar</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                      </h3>
                      <p className="text-[11px] font-mono text-[#2563EB] font-medium">
                        Founder & AI Builder
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[10px] font-mono text-[#0D9488] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-ping" />
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live Prototype Highlight Banner: Jivexa Health with Soft Mint & Teal Accent */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-3.5 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-between hover:border-[#0D9488]/50 transition-colors group/card"
                >
                  <div className="flex items-center gap-3">
                    <JivexaLogo className="w-9 h-9 shrink-0 group-hover/card:scale-105 transition-transform" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#0F172A]">Jivexa Health</span>
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white text-[#0D9488] border border-[#A7F3D0] font-semibold">
                          Live Prototype
                        </span>
                      </div>
                      <span className="text-[11px] text-[#475569] line-clamp-1">
                        AI-Powered Health • Connected Care
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://jivexa-one.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white border border-[#A7F3D0] text-[#0D9488] hover:bg-[#0D9488] hover:text-white transition-all shadow-2xs"
                    aria-label="Visit Jivexa Health prototype"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.div>

                {/* Bottom Stats / Focus Highlights */}
                <div className="mt-4 pt-3 border-t border-[#E2E8F0] grid grid-cols-2 gap-3 text-center">
                  <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <div className="text-sm font-heading font-bold text-[#0F172A]">4</div>
                    <div className="text-[10px] text-[#64748B] font-mono uppercase tracking-wider">
                      Active Prototypes
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <div className="text-sm font-heading font-bold text-[#2563EB]">Early-Stage</div>
                    <div className="text-[10px] text-[#64748B] font-mono uppercase tracking-wider">
                      Founder Exploration
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
