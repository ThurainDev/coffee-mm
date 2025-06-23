import React from 'react';
import timeline from '../helpers/timelineData';

const FeaturedPosts = () => {
  return (
    <section id="history" className="py-16 relative" style={{ background: 'var(--color-background)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(135deg, rgba(123,63,0,0.08) 0%, rgba(217,160,102,0.08) 100%)'}}></div>
      <div className="relative max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 font-display text-center" style={{ color: 'var(--color-text)' }}>
          ကော်ဖီ၏ သမိုင်းကြောင်း
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-1 bg-accent/30 rounded-full -translate-x-1/2" style={{ zIndex: 0 }}></div>
          <div className="space-y-16">
            {timeline.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={item.title} className={`relative flex flex-col sm:flex-row items-center ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`} style={{ zIndex: 1 }}>
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