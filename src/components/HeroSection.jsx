import React from "react";
import coffee from "../assets/imgs/green.jpeg";
import background from "../assets/imgs/coffee.jpeg";

const HeroSection = () => {
  const handleReadBlogs = () => {
    const postsSection = document.getElementById('latest-posts-section');
    if (postsSection) {
      postsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactUs = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative h-auto min-h-[60vh] flex items-center justify-center bg-cover bg-center py-10 md:py-0"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-black/40"></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-6">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-2xl sm:text-4xl md:text-3xl mb-4 font-display text-white">
            သင်က ကော်ဖီကိုနှစ်သက်တဲ့သူတစ်ယောက်လား ?
          </h1>
          <p className="mb-6 md:mb-8 text-base sm:text-lg opacity-80 max-w-md text-white">
             ဒါဆိုရင်ကော်ဖီနဲ့ပတ်သက်တဲ့အကြောင်းရာတွေကို ဒီ Website မှာဖတ်ရှုလေ့လာလို့ရပါတယ် 
          </p>
          <div className="space-x-0 space-y-3 md:space-x-4 md:space-y-0 flex flex-col md:flex-row w-full md:w-auto items-center">
            <button 
              onClick={handleReadBlogs}
              className="w-full md:w-auto bg-button hover:bg-accent text-white font-semibold py-2 px-6 rounded transition-colors"
            >
              Read Blogs
            </button>
            <button 
              onClick={handleContactUs}
              className="w-full md:w-auto bg-accent hover:bg-button text-white font-semibold py-2 px-6 rounded transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
        {/* Right: Circular Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-lg border-4 border-accent bg-white/30 flex items-center justify-center">
            <img src={coffee} alt="Coffee cup" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 