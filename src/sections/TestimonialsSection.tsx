import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Jessica R.',
      quote: 'Working with Dream Business Agency transformed my OnlyFans career. My subscriber count tripled in just two months, and my income has never been better!',
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=800',
      platform: 'OnlyFans Creator',
    },
    {
      name: 'Olivia M.',
      quote: 'The team at DB Agency truly understands the business. Their marketing strategies and content planning have been game-changing for my brand.',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800',
      platform: 'Content Creator',
    },
    {
      name: 'Sophia L.',
      quote: 'I was struggling with engagement before finding DB Agency. Their personalized approach and analytics expertise have completely revitalized my OnlyFans presence.',
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800',
      platform: 'Digital Influencer',
    },
  ];

  return (
    <AnimatedSection id="testimonials" className="bg-black">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Success Stories" 
          subtitle="Hear what our clients have to say about their journey with Dream Business Agency."
          className="text-primary"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              image={testimonial.image}
              platform={testimonial.platform}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="text-primary-dark mb-6">
            <p className="text-xl font-medium">Trusted by 100+ creators worldwide</p>
            <p>Helping our clients achieve exceptional growth and success</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-secondary-light px-6 py-3 rounded-md text-accent font-medium">
              500K+ Subscribers Generated
            </div>
            <div className="bg-secondary-light px-6 py-3 rounded-md text-accent font-medium">
              $2M+ Revenue for Clients
            </div>
            <div className="bg-secondary-light px-6 py-3 rounded-md text-accent font-medium">
              35+ Countries Served
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;