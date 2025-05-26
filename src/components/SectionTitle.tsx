import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${className}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-accent mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle;