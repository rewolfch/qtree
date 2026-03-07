import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect, ReactNode, FC } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out";
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollReveal: FC<ScrollRevealProps> = ({ 
  children, 
  width = "fit-content",
  animation = "fade-up",
  delay = 0,
  duration = 500,
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariants = () => {
    switch (animation) {
      case "fade-up":
        return { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } };
      case "fade-down":
        return { hidden: { opacity: 0, y: -75 }, visible: { opacity: 1, y: 0 } };
      case "fade-left":
        return { hidden: { opacity: 0, x: 75 }, visible: { opacity: 1, x: 0 } };
      case "fade-right":
        return { hidden: { opacity: 0, x: -75 }, visible: { opacity: 1, x: 0 } };
      case "zoom-in":
        return { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } };
      case "zoom-out":
        return { hidden: { opacity: 0, scale: 1.2 }, visible: { opacity: 1, scale: 1 } };
      default:
        return { hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration / 1000, delay: delay / 1000 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
