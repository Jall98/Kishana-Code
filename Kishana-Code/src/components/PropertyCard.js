// src/components/PropertyCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-secondary rounded-lg shadow-md overflow-hidden">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2">{property.title}</h3>
        <p className="text-neutral-700 mb-1">{property.location}</p>
        <p className="text-accent3 font-medium mb-4">{property.price}</p>
        <Link to={`/property/${property.id}`} className="bg-accent1 text-primary px-4 py-2 rounded-md hover:bg-accent3 transition-colors">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
