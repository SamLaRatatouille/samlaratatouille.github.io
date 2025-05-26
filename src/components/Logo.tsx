import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <motion.div 
      className={`relative ${sizes[size]} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <span className="font-serif font-bold text-primary text-2xl md:text-3xl lg:text-4xl mr-1">D</span>
        <span className="font-serif font-bold text-accent text-2xl md:text-3xl lg:text-4xl">B</span>
      </div>
    </motion.div>
  );
};

export default Logo;