// Example: src/pages/About.js

import React from 'react';
import aboutUsImage from '../assets/images/about-us.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        {/* About Us Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={aboutUsImage} alt="About KS Listing Team" className="w-full rounded-lg shadow-lg" loading="lazy" />
        </div>

        {/* About Us Content */}
        <div className="md:w-1/2 md:pl-12">
          <h1 className="text-3xl font-bold text-primary mb-4">About KS Listing Team</h1>
          
          {/* Introduction */}
          <p className="text-neutral-700 mb-4">
            <strong>KS Listing Team</strong> is a premier real estate professional based in Houston, Texas. I specialize in guiding clients through the buying, selling, and renting of properties with unmatched ease and exceptional professionalism.
          </p>
          
          {/* Personalized Services */}
          <p className="text-neutral-700 mb-6">
            As an experienced agent, I am dedicated to offering personalized services meticulously tailored to your unique needs. Whether you're embarking on your first home purchase or seeking to invest in real estate, I am here to assist you every step of the way.
          </p>
          
          {/* Mission Statement */}
          <h2 className="text-2xl font-semibold text-primary mb-2">My Mission</h2>
          <p className="text-neutral-700">
            My mission is to streamline the real estate journey, making it seamless and enjoyable, ensuring you discover your perfect home and achieve your investment aspirations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
