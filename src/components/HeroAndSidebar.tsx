"use client"; // Add this line at the top

import React from 'react';
import Image from 'next/image';

const HeroAndSidebar = () => {
  return (
    <section className="hero-featured" style={{
      display: 'flex',
      gap: '40px',
      marginBottom: '60px'
    }}>
      {/* ... rest of your component code remains the same ... */}
      
      <aside className="other-featured-posts" style={{
        flex: '0 0 35%'
      }}>
        <h3 style={{
          fontSize: '22px',
          fontWeight: '700',
          marginBottom: '20px',
          paddingBottom: '12px',
          borderBottom: '1px solid var(--divider-color)'
        }}>Other featured posts</h3>
        <ul style={{
          listStyle: 'none',
          padding: 0
        }}>
          {[
            "Revolutionizing industries through SaaS implementation",
            "Synergizing saas and UX design for elevating digital experiences",
            "Navigating saas waters with intuitive UI and UX",
            "Sculpting saas success - the art of UI and UX design",
            "Transforming saas platforms - a UI/UX design odyssey"
          ].map((title, index) => (
            <li 
              key={index}
              style={{
                display: 'flex',
                gap: '16px',
                marginBottom: '20px',
                borderBottom: index < 4 ? '1px solid var(--divider-color)' : 'none',
                paddingBottom: '20px',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              {/* ... rest of li content ... */}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default HeroAndSidebar;