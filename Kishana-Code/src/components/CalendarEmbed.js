// src/components/CalendarEmbed.js

import React from 'react';

const CalendarEmbed = () => {
  return (
    <div className="flex justify-center my-12">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America%2FNew_York" // Replace with your Google Calendar embed link
        style={{ border: 0 }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default CalendarEmbed;
