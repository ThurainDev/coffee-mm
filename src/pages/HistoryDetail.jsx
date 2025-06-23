import React from 'react';
import { useParams, Link } from 'react-router-dom';
import timeline from '../helpers/timelineData';

function getRandomPosts(excludeId, count = 4) {
  const others = timeline.filter(post => post.id !== Number(excludeId));
  const shuffled = others.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const HistoryDetail = () => {
  const { id } = useParams();
  const post = timeline.find(p => p.id === Number(id));
  const otherPosts = getRandomPosts(id);

  if (!post) return <div className="text-center py-20">Post not found.</div>;

  return (
    <section className="py-16 min-h-screen" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8 flex flex-col items-center">
          <img src={post.image} alt={post.title} className="w-48 h-48 rounded-2xl object-cover shadow-lg border-4 border-accent mb-6" />
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-accent mb-4 text-center">{post.title}</h1>
          <p className="text-lg opacity-90 text-center" style={{ color: 'var(--color-text)' }}>{post.content}</p>
        </div>
        <hr className="my-10 border-accent/30" />
        <h2 className="text-2xl font-bold mb-6 text-accent text-center">အခြားသမိုင်းအကြောင်းများ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherPosts.map(other => (
            <Link to={`/history/${other.id}`} key={other.id} className="group block bg-white/70 dark:bg-black/40 backdrop-blur-md rounded-xl shadow-md p-4 hover:scale-105 hover:shadow-xl transition-all border border-accent/10">
              <img src={other.image} alt={other.title} className="w-full h-32 object-cover rounded-lg mb-3" />
              <h3 className="text-lg font-bold text-accent mb-1 group-hover:underline">{other.title}</h3>
              <p className="text-sm opacity-80" style={{ color: 'var(--color-text)' }}>{other.content.slice(0, 60)}...</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryDetail; 