import React, { useState } from 'react';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-white dark:bg-[#181818] border-t border-gray-200 dark:border-gray-700 py-6 mt-16 relative z-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left: About + Contact Info */}
        <div className="flex flex-col items-start gap-2 w-full md:w-auto">
          {/* About CoffeeVerse */}
          <div className="mb-2">
            <h2 className="text-lg font-bold tracking-wide text-accent mb-1">Brew & Blessings</h2>
            <p className="text-xs text-gray-600 dark:text-gray-300 max-w-xs">"နေ့စဉ်သောက်သုံးနေသော ကော်ဖီများရဲ့ ကျေးမှု၊ သမိုင်းနှင့် ဖျော်နည်းအကြံပြုချက်များ "</p>
          </div>
          {/* Contact Info */}
          
        </div>
        {/* Right: Support Button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-button hover:bg-accent text-white dark:text-black font-semibold py-2 px-6 rounded-lg shadow transition-colors mt-4 md:mt-0"
        >
          Support the Developer
        </button>
      </div>

      {/* Modal for Support */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fadeIn">
          <div className="bg-white dark:bg-[#23272f] rounded-2xl shadow-2xl p-8 max-w-sm w-full relative animate-fadeInUp border border-accent/20">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-accent text-2xl font-bold transition-transform hover:scale-125"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-center text-accent">Support Developer</h2>
            <div className="mb-4 text-center">
              <div className="font-semibold mb-2">KBZPay (Kpay)</div>
              <div className="text-lg font-mono bg-gray-100 dark:bg-gray-800 rounded p-2 select-all inline-block">09 111 222 333</div>
            </div>
            <p className="text-center text-sm opacity-70">Thank you for your support! 🙏</p>
          </div>
        </div>
      )}

      {/* Bottom Bar */}
      <div className="text-center text-xs opacity-80 mt-6">
        <div>© 2025 All rights reserved. | Developed by Thurain.Dev</div>
      </div>
    </footer>
  );
};

export default Footer; 