import React from 'react';
import jivexaLogoImg from '../assets/jivexa-logo.jpg';

// Official Jivexa Health Logo (Original Brand Crest & Emblem)
export const JivexaLogo = ({ className = "w-12 h-12" }) => (
  <div
    className={`relative flex items-center justify-center rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden p-1 transition-all duration-300 group-hover:border-[#0D9488]/40 ${className}`}
  >
    <img
      src={jivexaLogoImg || "/jivexa-logo.jpg"}
      alt="Official Jivexa Health Logo"
      className="w-full h-full object-contain block select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
      loading="eager"
    />
  </div>
);

// Custom SVG Logo for AgriNext (Fresh Green & Modern Tech Leaf)
export const AgriNextLogo = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="AgriNext Logo"
  >
    <rect width="64" height="64" rx="16" fill="#F0FDF4" />
    <rect width="64" height="64" rx="16" stroke="#BBF7D0" strokeWidth="1.5" />
    {/* Leaf Contour */}
    <path
      d="M20 44C20 44 22 28 34 22C46 16 46 18 46 22C46 34 32 44 20 44Z"
      stroke="#16A34A"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Central Stem & Tech Nodes */}
    <path
      d="M20 44C24 38 32 32 40 28"
      stroke="#22C55E"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="32" cy="32" r="3" fill="#15803D" />
    <circle cx="40" cy="28" r="2.5" fill="#4ADE80" />
  </svg>
);

// Custom SVG Logo for StudyBuddy AI (Lavender & Royal Indigo Academic Spark)
export const StudyBuddyXLogo = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="StudyBuddy AI Logo"
  >
    <rect width="64" height="64" rx="16" fill="#F5F3FF" />
    <rect width="64" height="64" rx="16" stroke="#DDD6FE" strokeWidth="1.5" />
    {/* Graduation Cap Diamond */}
    <path
      d="M32 18L48 26L32 34L16 26L32 18Z"
      stroke="#4F46E5"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Open Book Arch in Lavender Accent */}
    <path
      d="M22 32V42C26 39 30 40 32 41C34 40 38 39 42 42V32"
      stroke="#8B5CF6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="48" cy="22" r="2.5" fill="#A78BFA" />
  </svg>
);

// Custom SVG Logo for SkillZen (Electric Blue & Soft Peach Geometric SZ Emblem)
export const SkillZenLogo = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="SkillZen Logo"
  >
    <rect width="64" height="64" rx="16" fill="#FFF1E8" />
    <rect width="64" height="64" rx="16" stroke="#FED7AA" strokeWidth="1.5" />
    {/* Minimalist SZ Geometric Paths */}
    <path
      d="M20 23C20 20.8 21.8 19 24 19H34C36.2 19 38 20.8 38 23C38 25.2 36.2 27 34 27H24C21.8 27 20 28.8 20 31C20 33.2 21.8 35 24 35H34"
      stroke="#2563EB"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M30 35H44L30 45H44"
      stroke="#F97360"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="44" cy="21" r="2.5" fill="#F59E0B" />
  </svg>
);

// Monogram Logo for Mayank Gangwar (MG)
export const MGMonogram = ({ className = "w-10 h-10" }) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-white border border-[#E2E8F0] shadow-xs group hover:border-[#2563EB]/40 hover:shadow-md transition-all ${className}`}>
    <span className="font-heading font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#7C3AED] select-none text-base">
      MG
    </span>
    {/* Blue Beacon */}
    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#2563EB] ring-2 ring-white" />
  </div>
);

// High-fidelity SVG Brand Icons for GitHub, LinkedIn, Instagram
export const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="GitHub">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="LinkedIn">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.76v8.37H6.46v-8.37M7.84 6.72a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
  </svg>
);

export const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="Instagram">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
