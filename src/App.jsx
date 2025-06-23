import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedPosts from './components/FeaturedPosts';
import LatestPosts from './components/LatestPosts';

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--color-background)' }}>
      <Navbar />
      <HeroSection />
      <FeaturedPosts />
      <LatestPosts />
    </div>
  );
}

export default App;
