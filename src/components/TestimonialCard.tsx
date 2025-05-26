import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  quote: string;
  image: string;
  rating?: number;
  platform?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  quote,
  image,
  rating = 5,
  platform = '',
  delay = 0,
}) => {
  return (
    <motion.div
      className="bg-secondary-light p-8 rounded-lg shadow-lg h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div className="flex mb-6 items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-accent">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-primary">{name}</h3>
          {platform && <p className="text-accent text-sm">{platform}</p>}
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="text-accent fill-accent mr-1" />
        ))}
      </div>
      
      <blockquote className="text-primary-dark flex-grow italic">
        "{quote}"
      </blockquote>
    </motion.div>
  );
};

export default TestimonialCard;