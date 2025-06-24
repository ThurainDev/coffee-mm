import React, { useRef, useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="flex justify-center items-center py-2 px-2 bg-transparent">
      <div
        ref={cardRef}
        className={`bg-white dark:bg-[#181818] rounded-2xl max-w-5xl w-full flex flex-col md:flex-row items-center justify-between overflow-hidden border-t-1 border-accent shadow-[0_-2px_16px_0_rgba(0,0,0,0.08)] px-8 md:px-12 transition-all duration-700 ease-out
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Left: Contact Info */}
        <div className="flex-1 py-10 flex flex-col justify-center md:items-start items-center text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2 text-accent">Get in Touch</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">Feel free to reach out with any questions or feedback!</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
              <FaPhoneAlt className="text-xl text-accent" />
              <span>Phone: +95-9-123-456789</span>
            </div>
            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
              <FaEnvelope className="text-xl text-accent" />
              <span>Email: <a href="mailto:coffee@thurain.dev" className="text-accent hover:underline">coffee@thurain.dev</a></span>
            </div>
            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
              <FaGithub className="text-xl text-accent" />
              <span>GitHub: <a href="https://github.com/thurain-dev" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">github.com/thurain-dev</a></span>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-200 dark:bg-gray-700 mx-8 h-40"></div>
        {/* Right: Contact Form */}
        <form
          action="https://formspree.io/f/xeokrvnk"  
          method="POST"
          className="flex-1 py-10 flex flex-col gap-4 min-w-[300px] max-w-md w-full"
        >
          <label className="text-sm font-medium">Name
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-[#23272f]"
            />
          </label>
          <label className="text-sm font-medium">Email
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-[#23272f]"
            />
          </label>
          <label className="text-sm font-medium">Message
            <textarea
              name="message"
              required
              rows={4}
              className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-[#23272f]"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-button hover:bg-accent text-white dark:text-black font-semibold py-2 rounded transition-colors mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection; 