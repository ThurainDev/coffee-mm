import React, { useState, useEffect } from 'react';

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

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'BREWING', href: '#brewing' },
    { name: 'BEANS', href: '#beans' },
    { name: 'CAFÉ', href: '#cafe' },
    { name: 'GUIDES', href: '#guides' },
  ];

  return (
    <nav className="border-b border-accent" style={{ background: 'var(--color-background)' }}>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <span className='font-bold text-2xl text-accent'>Brew & Blessings</span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[color:var(--color-text)] hover:text-accent font-medium tracking-wider transition-colors"
              >
                {link.name}
              </a>
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
              className='text-[color:var(--color-text)] hover:text-accent'
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

        {/* Mobile menu */}
        {menuOpen && (
          <div className='md:hidden py-4 border-t border-accent'>
            <div className='flex flex-col space-y-3'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[color:var(--color-text)] hover:text-accent font-medium px-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setDark(!dark);
                  setMenuOpen(false);
                }}
                className="text-[color:var(--color-text)] hover:text-accent text-left px-2"
                aria-label="Toggle theme"
              >
                {dark ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}