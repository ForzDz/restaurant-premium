import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export const Reveal = ({ 
  children, 
  width = 'fit-content', 
  delay = 0.25, 
  className = "",
  direction = 'up',
  duration = 0.5
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getHiddenVariant = (): Variant => {
    switch (direction) {
      case 'down': return { opacity: 0, y: -75 };
      case 'left': return { opacity: 0, x: -75 };
      case 'right': return { opacity: 0, x: 75 };
      case 'up': default: return { opacity: 0, y: 75 };
    }
  };

  const getVisibleVariant = (): Variant => {
    switch (direction) {
      case 'left': case 'right': return { opacity: 1, x: 0 };
      case 'up': case 'down': default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <div ref={ref} style={{ position: 'relative', width }} className={className}>
      <motion.div
        variants={{
          hidden: getHiddenVariant(),
          visible: getVisibleVariant(),
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
