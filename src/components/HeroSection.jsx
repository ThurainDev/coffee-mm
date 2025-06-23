import React, { useEffect, useRef } from "react";
import coffee from "../assets/imgs/green.jpeg";
import background from "../assets/imgs/coffee.jpeg";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate text content
            if (textRef.current) {
              textRef.current.style.opacity = '1';
              textRef.current.style.transform = 'translateY(0)';
            }
            
            // Animate image with delay
            setTimeout(() => {
              if (imageRef.current) {
                imageRef.current.style.opacity = '1';
                imageRef.current.style.transform = 'translateY(0) scale(1)';
              }
            }, 300);

            // Animate buttons with delay
            setTimeout(() => {
              if (buttonsRef.current) {
                buttonsRef.current.style.opacity = '1';
                buttonsRef.current.style.transform = 'translateY(0)';
              }
            }, 600);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleReadBlogs = () => {
    const postsSection = document.getElementById('latest-posts-section');
    if (postsSection) {
      // Add offset to account for sticky navbar
      const navbarHeight = 64; // 16 * 4 = 64px (h-16)
      const elementPosition = postsSection.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleContactUs = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Add offset to account for sticky navbar
      const navbarHeight = 64; // 16 * 4 = 64px (h-16)
      const elementPosition = contactSection.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-auto min-h-[60vh] flex items-center justify-center bg-cover bg-center py-10 md:py-0"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-black/40"></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-6">
        {/* Left: Text Content */}
        <div 
          ref={textRef}
          className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
        >
          <h1 className="text-2xl sm:text-4xl md:text-3xl mb-4 font-display text-white">
            သင်က ကော်ဖီကိုနှစ်သက်တဲ့သူတစ်ယောက်လား ?
          </h1>
          <p className="mb-6 md:mb-8 text-base sm:text-lg opacity-80 max-w-md text-white">
             ဒါဆိုရင်ကော်ဖီနဲ့ပတ်သက်တဲ့အကြောင်းရာတွေကို ဒီ Website မှာဖတ်ရှုလေ့လာလို့ရပါတယ် 
          </p>
          <div 
            ref={buttonsRef}
            className="space-x-0 space-y-3 md:space-x-4 md:space-y-0 flex flex-col md:flex-row w-full md:w-auto items-center opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
          >
            <button 
              onClick={handleReadBlogs}
              className="w-full md:w-auto bg-button hover:bg-accent text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Read Blogs
            </button>
            <button 
              onClick={handleContactUs}
              className="w-full md:w-auto bg-accent hover:bg-button text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
        {/* Right: Circular Image */}
        <div 
          ref={imageRef}
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 opacity-0 transform translate-y-8 scale-95 transition-all duration-700 ease-out"
        >
          <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-lg border-4 border-accent bg-white/30 flex items-center justify-center">
            <img src={coffee} alt="Coffee cup" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 