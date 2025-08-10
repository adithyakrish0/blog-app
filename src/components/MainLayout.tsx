import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-canvas">
      {children}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Next.js Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}