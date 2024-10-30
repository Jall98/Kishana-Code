// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Whatsapp, Mail } from 'lucide-react';

const Header = ({ openAuthModal }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="fixed w-full bg-secondary shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/assets/images/logo.png" alt="NoriSoldIt Logo" className="h-10" />
          <span className="text-xl font-bold text-primary">NoriSoldIt</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-primary hover:text-accent1 font-medium">
            About Us
          </Link>
          <Link to="/buy-home" className="text-primary hover:text-accent1 font-medium">
            Buy a Home
          </Link>
          <Link to="/schedule" className="bg-accent3 text-secondary px-4 py-2 rounded-md hover:bg-accent1 transition-colors flex items-center space-x-2">
            <span>Schedule Call</span>
          </Link>
          {/* Social Media Icons */}
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent1">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent1">
            <Whatsapp className="w-6 h-6" />
          </a>
          <a href="mailto:contact@xxxxxxxxxxxxxxxxxxxx.com" className="text-primary hover:text-accent1">
            <Mail className="w-6 h-6" />
          </a>
          {/* Sign In Button */}
          <button onClick={openAuthModal} className="text-primary hover:text-accent1 font-medium">
            Sign In
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary hover:text-accent1" onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-secondary shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link to="/about" className="text-primary hover:text-accent1 font-medium block" onClick={toggleMobileMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/buy-home" className="text-primary hover:text-accent1 font-medium block" onClick={toggleMobileMenu}>
                Buy a Home
              </Link>
            </li>
            <li>
              <Link to="/schedule" className="bg-accent3 text-secondary px-4 py-2 rounded-md hover:bg-accent1 transition-colors flex items-center space-x-2" onClick={toggleMobileMenu}>
                <span>Schedule Call</span>
              </Link>
            </li>
            {/* Social Media Icons */}
            <li className="flex space-x-4">
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent1">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent1">
                <Whatsapp className="w-6 h-6" />
              </a>
              <a href="mailto:contact@xxxxxxxxxxxxxxxxxxxxxx.com" className="text-primary hover:text-accent1">
                <Mail className="w-6 h-6" />
              </a>
            </li>
            {/* Sign In Button */}
            <li>
              <button onClick={openAuthModal} className="text-primary hover:text-accent1 font-medium">
                Sign In
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

