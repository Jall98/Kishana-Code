// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Whatsapp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4">KS Listing Team</h3>
          <p className="text-neutral-300">
            Dominating the Houston, Texas Real Estate & Duplex Markets with unparalleled expertise and dedication.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/buy-home" className="hover:underline">
                Buy a Home
              </Link>
            </li>
            <li>
              <Link to="/schedule" className="hover:underline">
                Schedule Call
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>contact@norisoldit.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Houston, TX</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md text-neutral-700 focus:outline-none focus:ring-2 focus:ring-accent1"
              required
            />
            <button className="bg-accent1 text-primary px-4 py-2 rounded-md w-full hover:bg-accent3 transition-colors">
              Subscribe
            </button>
          </form>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-secondary">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-secondary">
              <Whatsapp className="w-6 h-6" />
            </a>
            <a href="mailto:contact@xxxxxxxxxxxxxxxx.com" className="text-neutral-300 hover:text-secondary">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-primary text-neutral-300 text-center py-4">
        &copy; {new Date().getFullYear()} KS Listing Team. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
