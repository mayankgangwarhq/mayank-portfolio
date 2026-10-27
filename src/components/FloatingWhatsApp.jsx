import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { whatsappBusiness } from '../data/portfolioData';
import { WhatsAppIcon } from './ProjectLogos';
import { ArrowUpRight } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside aria-label="WhatsApp Business Direct Chat" className="fixed bottom-6 right-6 z-40 select-none">
      <motion.a
        href={whatsappBusiness.chatUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="group relative flex items-center gap-3 p-3 sm:px-4 sm:py-3 rounded-full bg-[#0F172A]/95 text-white border border-[#10B981]/50 hover:border-[#10B981] shadow-xl shadow-[#10B981]/20 hover:shadow-2xl hover:shadow-[#10B981]/35 backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
        aria-label="Contact on WhatsApp Business (+91 9105539049)"
        title="Chat with Mayank on WhatsApp Business"
      >
        {/* Pulsing Emerald Live Status Indicator */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
        </span>

        {/* WhatsApp Brand Icon */}
        <div className="text-[#25D366] group-hover:scale-110 transition-transform duration-200 shrink-0">
          <WhatsAppIcon className="w-5 h-5" />
        </div>

        {/* Responsive Text on Desktop */}
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#34D399] leading-tight font-semibold">
            WhatsApp Business
          </span>
          <span className="text-xs font-semibold text-slate-100 flex items-center gap-1 leading-tight">
            <span>Direct Chat</span>
            <ArrowUpRight className="w-3 h-3 text-[#34D399] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        {/* Mobile floating tooltip on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="sm:hidden absolute bottom-full mb-2 right-0 px-3 py-1.5 rounded-xl bg-[#0F172A] text-white text-xs font-medium border border-[#10B981]/40 whitespace-nowrap shadow-lg pointer-events-none"
            >
              WhatsApp Business Chat
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </aside>
  );
};
