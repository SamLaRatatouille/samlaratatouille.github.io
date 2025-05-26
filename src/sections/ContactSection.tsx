import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    submitted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally be a form submission to your backend
    setTimeout(() => {
      setFormState(prev => ({ ...prev, submitted: true }));
    }, 1000);
  };

  const inputClasses = "w-full bg-secondary-light border-0 text-primary p-4 rounded-md focus:ring-2 focus:ring-accent outline-none transition-all duration-300";

  return (
    <AnimatedSection id="contact" className="bg-primary-light">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Let's Work Together" 
          subtitle="Ready to take your digital presence to the next level? Contact us today to start your journey."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div 
              className="bg-black rounded-lg p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-serif text-primary font-bold mb-6">Why Choose DB Agency?</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-accent rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-secondary" />
                  </div>
                  <p className="text-primary-dark">Tailored strategies designed for your unique goals and audience</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-secondary" />
                  </div>
                  <p className="text-primary-dark">Proven track record of increasing subscriber counts and revenue</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-secondary" />
                  </div>
                  <p className="text-primary-dark">Comprehensive support from content strategy to monetization</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-secondary" />
                  </div>
                  <p className="text-primary-dark">Dedicated account managers who understand your industry</p>
                </li>
              </ul>
              
              <div className="mt-8 p-6 bg-secondary-light rounded-lg">
                <h4 className="text-accent font-medium mb-2">Get In Touch</h4>
                <p className="text-primary-dark mb-4">Have questions? We're here to help you succeed.</p>
                <p className="text-primary-dark flex items-center">
                  <span className="font-medium mr-2">Email:</span> contact@dbagency.com
                </p>
                <p className="text-primary-dark flex items-center mt-2">
                  <span className="font-medium mr-2">Phone:</span> +1 (555) 123-4567
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {!formState.submitted ? (
              <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-serif text-primary font-bold mb-6">Request a Free Consultation</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-primary-dark mb-2">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-primary-dark mb-2">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-primary-dark mb-2">Phone Number (Optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-primary-dark mb-2">How Can We Help?</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className={inputClasses}
                      placeholder="Tell us about your goals..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </div>
                
                <p className="text-primary-dark text-sm mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            ) : (
              <div className="bg-secondary p-8 rounded-lg shadow-xl h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <Check size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-serif text-primary font-bold mb-4">Thank You!</h3>
                <p className="text-primary-dark mb-8">
                  Your message has been received. We'll be in touch with you shortly to discuss how we can help you achieve your goals.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setFormState(prev => ({ ...prev, submitted: false, name: '', email: '', phone: '', message: '' }))}
                >
                  Send Another Message
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;