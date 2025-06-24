import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import posts from '../helpers/postsData';

const categories = [
  { name: 'အားလုံး', count: 12 },
  { name: 'ကော်ဖီစေ့အမျိုးစား', count: 4 },
  { name: 'ကော်ဖီအမျိုးစား', count: 3 },
  { name: 'ကျန်းမာရေးသက်ရောက်မှု', count: 5 }
];

const LatestPosts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const sidebarRef = useRef(null);
  const postsRefs = useRef([]);

  // Read selected category from localStorage on component mount
  useEffect(() => {
    const storedCategory = localStorage.getItem('selectedCategory');
    if (storedCategory) {
      setSelectedCategory(storedCategory);
      // Clear the stored category after reading it
      localStorage.removeItem('selectedCategory');
    }
  }, []);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

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

            // Animate sidebar
            setTimeout(() => {
              if (sidebarRef.current) {
                sidebarRef.current.style.opacity = '1';
                sidebarRef.current.style.transform = 'translateX(0)';
              }
            }, 300);

            // Animate posts with staggered delay
            postsRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.style.opacity = '1';
                  ref.style.transform = 'translateY(0) scale(1)';
                }, 500 + (index * 150)); // 500ms delay + 150ms between each post
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [currentPage]); // Re-run when page changes to re-animate

  // Filter posts based on selected category
  const filteredPosts = posts.filter(post => selectedCategory === 'All' || post.category === selectedCategory);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setTimeout(() => {
      const section = document.getElementById('latest-posts-section');
      if (section) {
        const yOffset = -80; // Adjust this value to match your navbar height
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100); // Delay to ensure posts are rendered
  };

  return (
    <section 
      id="latest-posts-section" 
      ref={sectionRef}
      className="py-16" 
      style={{ background: 'var(--color-background)' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 
          ref={titleRef}
          className="text-3xl font-semibold mb-8 text-center opacity-0 transform translate-y-8 transition-all duration-700 ease-out" 
          style={{ color: 'var(--color-text)' }}
        >
          ဆက်လက်ဖတ်ရှုရန်
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div 
            ref={sidebarRef}
            className="md:w-1/4 opacity-0 transform -translate-x-8 transition-all duration-700 ease-out"
          >
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
              {currentPosts.map((post, index) => (
                <Link 
                  to={`/posts/${post.id}`} 
                  key={post.id} 
                  className="block group"
                  ref={(el) => (postsRefs.current[index] = el)}
                  style={{ opacity: 0, transform: 'translateY(20px) scale(0.95)', transition: 'all 0.7s ease-out' }}
                >
                  <article 
                    className="group bg-white dark:bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row hover:shadow-xl transition-all"
                  >
                    <div className="w-full md:w-60 flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-40 md:h-40 object-cover rounded-l-lg md:rounded-lg transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="md:w-3/4 p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold text-accent group-hover:text-button transition-colors">{post.category}</span>
                        <span className="text-sm opacity-75" style={{ color: 'var(--color-text)' }}>{post.date}</span>
                      </div>
                      <h3 className="font-bold mb-3 text-xl" style={{ color: 'var(--color-text)' }}>
                        {post.title}
                      </h3>
                      <p className="text-sm mb-4 opacity-75 leading-relaxed" style={{ color: 'var(--color-text)' }}>
                        {post.excerpt}
                      </p>
                      <span className="text-accent hover:text-button font-semibold transition-colors cursor-pointer">
                        Read More →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-end items-center mt-12 space-x-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === 1
                      ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                      : 'bg-button hover:bg-accent text-white dark:text-black'
                  }`}
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-accent text-white dark:text-black'
                        : 'bg-white dark:bg-[#1A1A1A] hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    style={{ color: currentPage === page ? undefined : 'var(--color-text)' }}
                  >
                    {page}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === totalPages
                      ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                      : 'bg-button hover:bg-accent text-white dark:text-black'
                  }`}
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts; 