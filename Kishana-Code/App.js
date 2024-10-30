// src/App.js

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Schedule = lazy(() => import('./pages/Schedule'));
const BuyHome = lazy(() => import('./pages/BuyHome'));
const About = lazy(() => import('./pages/About'));
// Add more lazy-loaded pages as needed

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/buy-home" element={<BuyHome />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes as needed */}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
