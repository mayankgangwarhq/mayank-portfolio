import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CursorSpotlight = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Soft spring physics for trailing ambient glow
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 0.5 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const finePointerCheck = window.matchMedia('(pointer: fine)');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (finePointerCheck.matches && !prefersReducedMotion.matches) {
      setIsFinePointer(true);
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    if (finePointerCheck.matches && !prefersReducedMotion.matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.body.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[480px] h-[480px] rounded-full pointer-events-none z-30 opacity-40 mix-blend-multiply"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(124, 58, 237, 0.08) 40%, rgba(13, 148, 136, 0.04) 70%, transparent 80%)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.45 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    />
  );
};
