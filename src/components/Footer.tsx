import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { section: 'Services', links: [
      { name: 'OnlyFans Management', href: '#' },
      { name: 'Content Creation', href: '#' },
      { name: 'Digital Marketing', href: '#' },
      { name: 'Analytics & Growth', href: '#' },
    ]},
    { section: 'Company', links: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#contact' },
    ]},
    { section: 'Legal', links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ]},
  ];

  return (
    <footer className="bg-black text-primary-dark pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Logo size="lg" />
              <span className="ml-3 font-serif text-2xl font-semibold text-primary">
                Dream Business Agency
              </span>
            </div>
            <p className="mb-6 max-w-md">
              Premium digital marketing and OnlyFans management services to help creators achieve exceptional growth and success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center text-primary hover:bg-accent hover:text-secondary transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.section}>
              <h3 className="text-primary font-medium text-lg mb-4">{section.section}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-secondary-light pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Dream Business Agency. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Designed with <span className="text-accent">♥</span> for creators
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;