import { useState } from 'react';
import { cafePosts } from './cafeData';

function Main() {
  // Track which blog is currently visible
  const [activePost, setActivePost] = useState<number | null>(null);

  const handleBack = () => setActivePost(null);

  return (
    <div className="ml-5 pt-1">
      <h3 className="text-sm font-bold mb-3">I indulge a little sometimes</h3>

      {activePost === null && (
        <nav className="mb-6 flex flex-col gap-1">
          {cafePosts.map((post, idx) => (
            <button
              key={idx}
              onClick={() => setActivePost(idx)}
              className="text-left text-blue-500 hover:underline text-xs"
            >
              {post.date ? `${post.date} - ${post.title}` : post.title}
            </button>
          ))}
        </nav>
      )}

      {activePost !== null && (
        <CafeEntry>
          <button
            onClick={handleBack}
            className="text-blue-500 hover:underline text-xs mb-2"
          >
            ← Back to all posts
          </button>

          <h2 className="text-sm font-bold">{cafePosts[activePost].title}</h2>
          {cafePosts[activePost].location && (
            <p className="text-xs italic">{cafePosts[activePost].location}</p>
          )}
          {cafePosts[activePost].date && (
            <p className="text-xs text-gray-500 mb-2">{cafePosts[activePost].date}</p>
          )}

          {cafePosts[activePost].paragraphs.map((p, i) => (
            <p key={i} className="text-xs mt-1">
              {p}
            </p>
          ))}

          {cafePosts[activePost].ratings && (
            <div className="mt-3 text-xs">
              <p>Accessibility: {cafePosts[activePost].ratings.accessibility}/10</p>
              <p>Cost: {cafePosts[activePost].ratings.cost}/10</p>
              <p>Taste: {cafePosts[activePost].ratings.taste}/10</p>
              <p>Work Friendly: {cafePosts[activePost].ratings.workFriendly}/10</p>
              <p>Design: {cafePosts[activePost].ratings.design}/10</p>
            </div>
          )}
        </CafeEntry>
      )}
    </div>
  );
}

interface CafeEntryProps {
  className?: string;
  children: React.ReactNode;
}

function CafeEntry({ className, children }: CafeEntryProps) {
  return <div className={className}>{children}</div>;
}

export default Main;
