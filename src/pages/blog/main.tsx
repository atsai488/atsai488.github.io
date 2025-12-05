import { useState } from 'react';
import { blogPosts } from './blogData.ts';

function Main() {
  // Track which blog is currently visible
  const [activePost, setActivePost] = useState<number | null>(null);

  const handleBack = () => setActivePost(null);

  return (
    <div className="ml-5 pt-1 w-1/2">
      <h3 className="text-sm font-bold mb-3">I think a little sometimes</h3>

      {activePost === null && (
        <nav className="mb-6 flex flex-col gap-1">
          {blogPosts.map((post, idx) => (
            <button
              key={idx}
              onClick={() => setActivePost(idx)}
              className="text-left text-blue-500 hover:underline text-xs"
            >
              {post.title}
            </button>
          ))}
        </nav>
      )}

      {activePost !== null && (
        <BlogEntry>
          <button
            onClick={handleBack}
            className="text-blue-500 hover:underline text-xs mb-2"
          >
            ← Back to all posts
          </button>

          <h2 className="font-bold">{blogPosts[activePost].title}</h2>
          <p className='text-xs'>{blogPosts[activePost].lead}</p>

           {blogPosts[activePost].subheadings.map((subheading, i) => (
              <div key={i} className="my-3">
                  <h3 className="text-[0.85rem] font-bold">
                    {subheading}
                  </h3>
                  {blogPosts[activePost].content[i].map((item, j) => {
                    if (item.type === "link") {
                      return (
                        <a
                          key={j}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline text-xs mt-3"
                        >
                          {item.text}
                        </a>
                      );
                    }

                    return <p className="text-xs mt-3" key={j}>{item.text}</p>;
                  })}
              </div>
            ))}

        </BlogEntry>
      )}
    </div>
  );
}

interface BlogEntryProps {
  className?: string;
  children: React.ReactNode;
}

function BlogEntry({ className, children }: BlogEntryProps) {
  return <div className={className}>{children}</div>;
}

export default Main;
