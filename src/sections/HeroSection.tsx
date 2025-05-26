import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-secondary-light opacity-60"></div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/20 blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut" 
        }}
      />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Dream Business Agency
        </motion.h1>
        
        <motion.div
          className="h-1 w-24 bg-accent mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 1 }}
        />
        
        <motion.h2 
          className="text-xl md:text-2xl text-primary-dark mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Premium Digital Marketing & OnlyFans Management for Exceptional Results
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button size="lg" onClick={scrollToContact}>
            Get Started
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>
            Our Services
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 1.5 } 
        }}
        onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-8 h-12 rounded-full border-2 border-primary flex justify-center pt-2">
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full" 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;