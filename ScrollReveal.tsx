
import React, { useRef, useEffect } from 'react';

import { motion, useAnimation, useInView, Easing } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-right' | 'fade-left' | 'zoom-in';
  delay?: number;
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  animation = 'fade-up', 
  delay = 0,
  duration = 1000
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === 'fade-up' ? 50 : 0,
      x: animation === 'fade-right' ? -50 : animation === 'fade-left' ? 50 : 0,
      scale: animation === 'zoom-in' ? 0.9 : 1
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration / 1000,
        delay: delay / 1000,
        ease: "easeOut" as Easing
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
