import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MGMonogram } from './ProjectLogos';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'education', 'projects', 'skills', 'journey', 'vision', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] py-3.5 shadow-sm'
          : 'bg-white/70 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Founder Monogram */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-xl"
            aria-label="Mayank Gangwar - Return to top"
          >
            <MGMonogram className="w-10 h-10 text-base shadow-xs" />
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors flex items-center gap-1.5 text-sm sm:text-base">
                Mayank Gangwar
              </span>
              <span className="text-[10.5px] font-mono text-[#64748B] tracking-wider uppercase font-medium">
                Founder • AI Builder
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links with Blue Active Indicator */}
          <nav
            className="hidden md:flex items-center gap-0.5 bg-[#F8FAFC] p-1.5 rounded-full border border-[#E2E8F0] shadow-inner relative"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] z-10 ${
                    isActive
                      ? 'text-[#2563EB] font-semibold'
                      : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-white rounded-full border border-[#E2E8F0] shadow-xs -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Founder Status & Contact CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#475569] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
              <span>Jaipur, IN</span>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white hover:opacity-95 transition-all shadow-sm hover:shadow-md hover:shadow-[#2563EB]/25 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] btn-shimmer"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white hover:opacity-90 transition-opacity"
            >
              Connect
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] border border-[#E2E8F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-[#E2E8F0] bg-white/95 backdrop-blur-md shadow-xl overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-1">
              <div className="pb-3 mb-2 border-b border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                <span className="font-mono text-[#2563EB] font-semibold">Founder • AI Builder</span>
                <span>Jaipur, India</span>
              </div>
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#EFF6FF] text-[#2563EB] font-semibold border-l-4 border-[#2563EB]'
                        : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <div className="pt-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white hover:opacity-90 transition-all shadow-md shadow-[#2563EB]/20 btn-shimmer"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
