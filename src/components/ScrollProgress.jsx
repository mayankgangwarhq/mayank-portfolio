import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // Spring smoothing for ultra-fluid scroll indicator
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#0D9488] origin-left shadow-sm shadow-[#2563EB]/40"
        style={{ scaleX }}
      />
    </div>
  );
};
