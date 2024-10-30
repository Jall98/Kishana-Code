// src/pages/Schedule.js

import React from 'react';
import CalendarEmbed from '../components/CalendarEmbed';

const Schedule = () => {
  return (
    <div className="min-h-screen bg-neutral-100 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-primary mb-8">Schedule a Call</h1>
        <CalendarEmbed />
      </div>
    </div>
  );
};

export default Schedule;
