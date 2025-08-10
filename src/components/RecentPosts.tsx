import React from 'react';
import Image from 'next/image';

const RecentPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Mastering UI Elements: A Practical Guide for Designers",
      excerpt: "Dive into the world of user interfaces with our expert guides, latest trends, and practical tips. Learn how to create intuitive interfaces that users love.",
      author: "Jennifer Taylor",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      id: 2,
      title: "Crafting Seamless Experiences: The Art of Intuitive UI Design",
      excerpt: "Explore the principles and techniques that drive user-centric UI design, ensuring a seamless and intuitive experience for your users.",
      author: "Jennifer Taylor",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Beyond Aesthetics: The Power of Emotional UX Design",
      excerpt: "Delve into the realm of emotional design and discover how incorporating empathy and psychology can elevate your user experience.",
      author: "Ryan A.",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1768&q=80"
    }
  ];

  return (
    <section className="recent-posts">
      <div className="header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px'
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700'
        }}>Recent Posts</h2>
        <button className="btn-secondary" style={{
          padding: '8px 20px',
          fontWeight: '600'
        }}>All Posts</button>
      </div>
      
      <div className="posts-grid" style={{
        display: 'flex',
        gap: '32px'
      }}>
        {posts.map(post => (
          <article key={post.id} className="post-card" style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{overflow: 'hidden'}}>
              <Image 
                src={post.image} 
                alt={post.title} 
                width={400}
                height={250}
                style={{
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
            <div style={{padding: '24px'}}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                marginBottom: '16px',
                lineHeight: '1.3'
              }}>{post.title}</h3>
              <p style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>{post.excerpt}</p>
              <footer style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '14px'
              }}>
                <div className="author-avatar" style={{
                  position: 'relative'
                }}>
                  <Image 
                    src={`https://picsum.photos/seed/author${post.id}/40/40.jpg`} 
                    alt={post.author} 
                    width={40}
                    height={40}
                    style={{
                      borderRadius: '50%'
                    }}
                  />
                </div>
                <span style={{fontWeight: '600'}}>{post.author}</span>
                <span style={{color: 'var(--text-secondary)'}}>·</span>
                <span style={{color: 'var(--text-secondary)', fontSize: '13px'}}>{post.readTime}</span>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;