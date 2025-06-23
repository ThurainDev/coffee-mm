import React, { useState } from 'react';
import img from '../assets/imgs/coffeee.jpg'

const categories = [
  { name: 'All', count: 12 },
  { name: 'Brewing', count: 4 },
  { name: 'Beans', count: 3 },
  { name: 'Guides', count: 5 }
];

const posts = [
  {
    title: "The Art of Coffee Cupping",
    excerpt: "Learn professional coffee tasting techniques...",
    image: img,
    category: "Guides",
    date: "March 15, 2024"
  },
  {
    title: "Sustainable Coffee Farming",
    excerpt: "Exploring eco-friendly coffee production methods...",
    image: img,
    category: "Beans",
    date: "March 12, 2024"
  },
  {
    title: "Cold Brew vs. Iced Coffee",
    excerpt: "Understanding the differences and brewing methods...",
    image: img,
    category: "Brewing",
    date: "March 10, 2024"
  }
];

const LatestPosts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <section className="py-16" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--color-text)' }}>
          LATEST POSTS
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full text-left py-2 px-3 rounded transition-colors ${
                        selectedCategory === category.name
                          ? 'bg-button text-white dark:bg-white dark:text-black'
                          : 'hover-gray'
                      }`}
                      style={{ color: selectedCategory === category.name ? undefined : 'var(--color-text)' }}
                    >
                      {category.name} ({category.count})
                    </button>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-button hover:bg-accent text-white dark:text-black font-semibold py-2 px-4 rounded transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="grid gap-8">
              {posts
                .filter(post => selectedCategory === 'All' || post.category === selectedCategory)
                .map((post, index) => (
                  <article 
                    key={index} 
                    className="group bg-white dark:bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row hover:shadow-xl transition-all"
                  >
                    <div className="md:w-1/3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover filter grayscale transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-accent group-hover:text-button transition-colors">{post.category}</span>
                        <span className="text-sm opacity-75" style={{ color: 'var(--color-text)' }}>{post.date}</span>
                      </div>
                      <h3 className="font-bold mb-2 text-xl" style={{ color: 'var(--color-text)' }}>
                        {post.title}
                      </h3>
                      <p className="text-sm mb-4 opacity-75" style={{ color: 'var(--color-text)' }}>
                        {post.excerpt}
                      </p>
                      <button className="text-accent hover:text-button font-semibold transition-colors">
                        Read More →
                      </button>
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts; 