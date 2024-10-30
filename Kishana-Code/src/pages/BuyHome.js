// src/pages/BuyHome.js

import React from 'react';
import PropertyCard from '../components/PropertyCard';
// Import property images
import property1 from '../assets/images/property1.jpg';
import property2 from '../assets/images/property2.jpg';
import property3 from '../assets/images/property3.jpg';

const properties = [
  {
    id: 1,
    title: 'Modern Family Home',
    location: 'Houston, TX',
    price: '$450,000',
    image: property1,
  },
  {
    id: 2,
    title: 'Luxury Condo',
    location: 'Downtown Houston, TX',
    price: '$350,000',
    image: property2,
  },
  {
    id: 3,
    title: 'Cozy Bungalow',
    location: 'Midtown Houston, TX',
    price: '$250,000',
    image: property3,
  },
  {
    id: 3,
    title: 'Cozy Bungalow',
    location: 'Midtown Houston, TX',
    price: '$250,000',
    image: property5,
  },
  // Add more properties as needed
];

const BuyHome = () => {
  return (
    <div className="min-h-screen bg-neutral-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-primary mb-8">Buy a Home</h1>
        <p className="text-neutral-700 mb-12">
          Explore our exclusive listings and find the perfect home that fits your needs and budget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact" className="bg-accent1 text-primary px-6 py-3 rounded-md hover:bg-accent3 transition-colors">
            View More Properties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyHome;
