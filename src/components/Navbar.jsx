import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dark]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (sectionId) => {
    setMenuOpen(false);
    // Add a small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'ABOUT', sectionId: 'about' },
    { name: 'HISTORY', sectionId: 'history' },
    { name: 'BLOGS', sectionId: 'latest-posts-section' },
    { name: 'CONTACT', sectionId: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-accent backdrop-blur-md bg-white/90 dark:bg-black/90" style={{ background: 'var(--color-background)' }}>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link to="/" className='font-bold text-2xl text-accent hover:text-accent/80 transition-colors'>
              Brew & Blessings
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.sectionId)}
                className="text-[color:var(--color-text)] hover:text-accent font-medium tracking-wider transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => setDark(!dark)}
              className="text-[color:var(--color-text)] hover:text-accent"
              aria-label="Toggle theme"
            >
              {dark ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='text-[color:var(--color-text)] hover:text-accent transition-colors'
              aria-label='Toggle menu'
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu with smooth animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className='py-4 border-t border-accent'>
            <div className='flex flex-col space-y-3'>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.sectionId)}
                  className="text-[color:var(--color-text)] hover:text-accent font-medium px-2 text-left transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setDark(!dark);
                  setMenuOpen(false);
                }}
                className="text-[color:var(--color-text)] hover:text-accent text-left px-2 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {dark ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}