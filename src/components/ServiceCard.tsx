import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  delay = 0,
}) => {
  return (
    <motion.div
      className="bg-secondary-light p-8 rounded-lg shadow-lg h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mb-6 border-2 border-accent">
        <Icon className="text-accent" size={28} />
      </div>
      <h3 className="text-xl font-serif font-bold text-primary mb-4">{title}</h3>
      <p className="text-primary-dark">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;