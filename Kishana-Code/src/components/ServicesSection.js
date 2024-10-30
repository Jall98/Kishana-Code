// src/components/ServicesSection.js

import React from 'react';
import { Home, ShoppingCart, PhoneCall } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Home className="w-8 h-8 text-accent1" />,
    title: 'Buy a Home',
    description: 'Comprehensive assistance in finding and purchasing your ideal property in Houston.',
  },
  {
    id: 2,
    icon: <ShoppingCart className="w-8 h-8 text-accent1" />,
    title: 'Sell a Home',
    description: 'Professional services to help you sell your property quickly and at the best price.',
  },
  {
    id: 3,
    icon: <PhoneCall className="w-8 h-8 text-accent1" />,
    title: 'Schedule a Call',
    description: 'Book a convenient time to discuss your real estate needs with our experts.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-neutral-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

