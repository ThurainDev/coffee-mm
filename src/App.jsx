import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedPosts from './components/FeaturedPosts';
import LatestPosts from './components/PostsSection';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-background)' }}>
      <Navbar />
      {isHome && <HeroSection />}
      {isHome && <FeaturedPosts />}
      {isHome && <LatestPosts />}
      <Outlet />
    </div>
  );
}

export default App;
