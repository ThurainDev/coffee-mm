import React, { useEffect, useRef } from 'react';
import timeline from '../helpers/timelineData';

const FeaturedPosts = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate title
            if (titleRef.current) {
              titleRef.current.style.opacity = '1';
              titleRef.current.style.transform = 'translateY(0)';
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    // Create individual observers for each timeline item
    const timelineObservers = timelineRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const itemObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add a slight delay based on index for staggered effect
              setTimeout(() => {
                if (ref) {
                  ref.style.opacity = '1';
                  ref.style.transform = 'translateY(0) scale(1)';
                }
              }, index * 100); // 100ms delay between each item
            }
          });
        },
        { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
      );
      
      itemObserver.observe(ref);
      return itemObserver;
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      timelineObservers.forEach(obs => obs?.disconnect());
    };
  }, []);

  return (
    <section 
      id="history" 
      ref={sectionRef}
      className="py-16 relative" 
      style={{ background: 'var(--color-background)' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(135deg, rgba(123,63,0,0.08) 0%, rgba(217,160,102,0.08) 100%)'}}></div>
      <div className="relative max-w-4xl mx-auto px-4">
        <h2 
          ref={titleRef}
          className="text-3xl sm:text-4xl font-bold mb-12 font-display text-center opacity-0 transform translate-y-8 transition-all duration-700 ease-out" 
          style={{ color: 'var(--color-text)' }}
        >
          ကော်ဖီ၏ သမိုင်းကြောင်း
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-1 bg-accent/30 rounded-full -translate-x-1/2" style={{ zIndex: 0 }}></div>
          <div className="space-y-16">
            {timeline.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div 
                  key={item.title} 
                  ref={(el) => (timelineRefs.current[idx] = el)}
                  className={`relative flex flex-col sm:flex-row items-center ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'} opacity-0 transform translate-y-8 scale-95 transition-all duration-700 ease-out`} 
                  style={{ zIndex: 1 }}
                >
                  {/* Image */}
                  <div className="flex-shrink-0 w-28 h-28 rounded-2xl overflow-hidden shadow-lg border-4 border-accent bg-background z-10">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  {/* Dot on the line */}
                  <div className="hidden sm:block absolute left-1/2 top-1/2 w-6 h-6 rounded-full bg-accent border-4 border-background -translate-x-1/2 -translate-y-1/2 z-20"></div>
                  {/* Content */}
                  <div className={`mt-6 sm:mt-0 sm:max-w-lg px-4 py-6 rounded-xl shadow-md bg-white/70 dark:bg-black/40 backdrop-blur-md ${isLeft ? 'sm:ml-8 sm:mr-0' : 'sm:mr-8 sm:ml-0'}`} style={{ color: 'var(--color-text)' }}>
                    <h3 className="text-xl font-bold text-accent mb-2 font-display">{item.title}</h3>
                    <p className="text-base opacity-90">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts; 