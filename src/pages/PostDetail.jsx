import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import posts from '../helpers/postsData';

function getRandomPosts(excludeId, count = 3) {
  const others = posts.filter(post => post.id !== Number(excludeId));
  const shuffled = others.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === Number(id));
  const otherPosts = getRandomPosts(id);

  if (!post) return <div className="text-center py-20">Post not found.</div>;

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen py-8" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Posts</span>
        </button>

        {/* Featured Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-lg mb-8"
        />

        {/* Title */}
        <h1 className="text-2xl font-bold text-accent mb-6">
          {post.title}
        </h1>

        {/* Content */}
        <div className="mb-12">
          <div 
            className="text-lg leading-relaxed space-y-6"
            style={{ color: 'var(--color-text)' }}
          >
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        <div>
          <h2 className="text-2xl font-bold text-accent mb-8">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.map(other => (
              <Link
                to={`/posts/${other.id}`}
                key={other.id}
                className="block hover:opacity-80 transition-opacity"
              >
                <img 
                  src={other.image} 
                  alt={other.title} 
                  className="w-full h-40 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-lg font-bold text-accent mb-2">
                  {other.title}
                </h3>
                <p 
                  className="text-sm opacity-80" 
                  style={{ color: 'var(--color-text)' }}
                >
                  {other.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail; 