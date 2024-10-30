// src/components/Layout.js

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
// Since we're not using authentication yet, we'll skip the AuthModal

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
