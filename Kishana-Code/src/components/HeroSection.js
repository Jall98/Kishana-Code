// src/components/HeroSection.js

import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-primary mb-4">Find Your Dream Home</h1>
          <p className="text-neutral-700 mb-6">
            Discover the best properties in Houston with NoriSoldIt. Personalized service tailored to your needs.
          </p>
          <Link to="/buy-home" className="bg-accent1 text-primary px-6 py-3 rounded-md hover:bg-accent3 transition-colors">
            Get Started
          </Link>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/assets/images/hero-banner.jpg" alt="Dream Home" className="w-full rounded-lg shadow-lg" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
