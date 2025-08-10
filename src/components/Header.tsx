'use client';

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <div className="logo-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span>Beyond UI</span>
      </div>
      
      <nav aria-label="Main Navigation">
        <ul className="nav-links">
          <li><a href="/" className="focus-ring">Homepage</a></li>
          <li><a href="/about" className="focus-ring">About us</a></li>
          <li><a href="/features" className="focus-ring">Features</a></li>
          <li><a href="/blog" className="focus-ring">Blog</a></li>
          <li><a href="/contact" className="focus-ring">Contact us</a></li>
        </ul>
      </nav>
      
      <div className="actions">
        <a href="/demo" className="btn btn-outline focus-ring">Demo</a>
        <a href="/get-started" className="btn btn-primary focus-ring">Get Started</a>
      </div>
    </header>
  );
}
