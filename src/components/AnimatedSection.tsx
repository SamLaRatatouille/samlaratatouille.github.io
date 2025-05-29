import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = '',
  delay = 0,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 100,
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 100,
        delay,
      }
    },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 will-change-transform ${className}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;