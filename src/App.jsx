import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedPosts from './components/History';
import LatestPosts from './components/PostsSection';
import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import ContactSection from './components/ContactSection';

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
      <ContactSection/>
      <Footer />
    </div>
  );
}

export default App;
