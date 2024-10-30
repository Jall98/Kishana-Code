// src/components/ContactForm.js

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a mailto link with form data
    const mailtoLink = `mailto:contact@xxxxxxxxxxxxxxxxxx.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0APhone:%20${encodeURIComponent(formData.phone)}%0AMessage:%20${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setStatus('Redirecting to your email client...');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-secondary p-6 rounded-lg shadow-md">
      <div>
        <label className="block text-sm font-medium text-primary">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-primary">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-primary">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-primary">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent1"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-accent1 text-primary px-4 py-2 rounded-md hover:bg-accent3 transition-colors"
      >
        {status ? status : 'Send Message'}
      </button>
      {status && <p className="text-center text-sm mt-2">{status}</p>}
    </form>
  );
};

export default ContactForm;

