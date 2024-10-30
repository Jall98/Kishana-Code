// src/pages/Home.js

import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import logo from '../assets/images/logo.png';
import kishanaPhoto from '../assets/images/kishana-photo.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-100 pt-20">
      {/* Logo Section */}
      <div className="fixed top-4 left-4">
        <img src={logo} alt="KS Listing Team Logo" className="h-12" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        
        {/* Image of Kishana */}
        <div className="md:w-1/2">
          <img src={kishanaPhoto} alt="Kishana Strawn" className="w-full rounded-lg shadow-lg" loading="lazy" />
        </div>

        {/* Meet Kishana Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-primary">Meet Kishana Strawn</h1>
          <p className="text-neutral-700 text-lg">
            Kishana Strawn, a distinguished real estate agent renowned for her unwavering attention to detail and fierce dedication to customer satisfaction. As one of the top 1% of producing real estate professionals in Houston, she has consistently achieved millions in property sales. Kishana's unmatched professionalism ensures every client receives exceptional service, tailored to their unique needs.
          </p>
          <p className="text-neutral-700 text-lg font-medium">
            Achieved 38 new landlords, working toward the goal of 100 this year!
          </p>
          <Link to="/schedule" className="bg-accent1 text-primary px-6 py-3 rounded-md hover:bg-accent3 transition-colors">
            Schedule a Call with Kishana
          </Link>
        </div>
      </div>

      {/* Highlighted Achievement */}
      <div className="bg-secondary text-center py-8 mt-12">
        <h2 className="text-xl font-semibold text-primary">
          Over $30 million in real estate produced in 2024.
        </h2>
        <p className="text-neutral-700">Empowering clients to achieve financial success through real estate investments in Houston.</p>
      </div>

      {/* Connect Section */}
      <div className="mt-16 text-center">
        <p className="text-lg font-semibold">Connect with @Kishana on all platforms</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 text-primary hover:text-accent1" />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-primary hover:text-accent1" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 text-primary hover:text-accent1" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 text-primary hover:text-accent1" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;

