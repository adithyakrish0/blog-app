import React from 'react';
import Header from './Header';
import HeroAndSidebar from './HeroAndSidebar';
import RecentPosts from './RecentPosts';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <Header />
      <HeroAndSidebar />
      <RecentPosts />
      {children}
    </div>
  );
};

export default MainLayout;