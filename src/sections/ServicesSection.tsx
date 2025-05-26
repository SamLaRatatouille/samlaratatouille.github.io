import React from 'react';
import { Instagram, Tv, BarChart3, Coins, TrendingUp, Zap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'OnlyFans Profile Management',
      description: 'Complete management of your OnlyFans profile including content scheduling, engagement strategies, and personalized growth plans.',
      icon: Instagram,
    },
    {
      title: 'Content Creation Strategy',
      description: 'Professional guidance on creating high-quality, engaging content that resonates with your audience and maximizes subscription rates.',
      icon: Tv,
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed analytics and reporting on your profile performance, subscriber growth, and revenue metrics to optimize your strategy.',
      icon: BarChart3,
    },
    {
      title: 'Monetization Optimization',
      description: 'Strategic pricing structures, PPV content planning, and tiered subscription models to maximize your OnlyFans revenue.',
      icon: Coins,
    },
    {
      title: 'Digital Marketing Campaigns',
      description: 'Cross-platform marketing campaigns to expand your reach, grow your subscriber base, and build your personal brand.',
      icon: TrendingUp,
    },
    {
      title: 'Accelerated Growth Program',
      description: 'Our signature program for rapid subscriber and revenue growth through our proven systems and exclusive promotion network.',
      icon: Zap,
    },
  ];

  return (
    <AnimatedSection id="services" className="bg-primary-light">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Our Premium Services" 
          subtitle="We provide comprehensive solutions to help creators achieve exceptional results and maximize their digital presence."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;