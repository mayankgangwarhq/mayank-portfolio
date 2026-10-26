import React from 'react';
import { motion } from 'framer-motion';
import { footerData, personalInfo } from '../data/portfolioData';
import { MGMonogram } from './ProjectLogos';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1E293B] bg-[#0F172A] py-14 relative overflow-hidden text-white">
      {/* Subtle Ambient Navy/Violet Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#1E293B]"
        >
          {/* Brand & Monogram */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <motion.div whileHover={{ scale: 1.08, rotate: 4 }}>
              <MGMonogram className="w-11 h-11 text-lg shadow-md" />
            </motion.div>
            <div>
              <span className="text-base font-heading font-bold text-[#F8FAFC] tracking-tight block">
                {personalInfo.name}
              </span>
              <p className="text-xs font-mono text-[#38BDF8] mt-0.5 font-medium">
                {personalInfo.titles.slice(0, 2).join(' • ')}
              </p>
              <p className="text-xs text-[#94A3B8] mt-1 max-w-sm">
                {footerData.statement}
              </p>
            </div>
          </div>

          {/* Navigation Links with restrained blue-violet hover */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs font-medium text-[#94A3B8]">
            {footerData.links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2, color: '#60A5FA' }}
                className="transition-colors hover:text-[#60A5FA]"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: '#60A5FA' }}
              className="transition-colors hover:text-[#60A5FA]"
            >
              GitHub
            </motion.a>
            <motion.a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: '#60A5FA' }}
              className="transition-colors hover:text-[#60A5FA]"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href={personalInfo.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: '#60A5FA' }}
              className="transition-colors hover:text-[#60A5FA]"
            >
              X (Twitter)
            </motion.a>
          </nav>

          {/* Back to top button with Spring */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-mono text-[#E2E8F0] hover:text-white hover:border-[#38BDF8]/60 hover:bg-[#334155] transition-all focus:outline-none shadow-sm group"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#38BDF8] group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div>
            <span>{footerData.copyright}</span>
          </div>

          <div className="flex items-center gap-3">
            <span>Jaipur, Rajasthan, India</span>
            <span>•</span>
            <span className="text-[#38BDF8] font-semibold">Founder & AI Builder</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
