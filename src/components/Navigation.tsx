import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="site-header" role="banner" aria-label="Top Navigation">
      <div className="brand">
        <div className="brand-icon"></div>
        <span>Beyond UI</span>
      </div>
      <nav aria-label="Main navigation">
        <ul className="nav-list">
          <li><Link href="/">Homepage</Link></li>
          <li><Link href="/about">About us</Link></li>
          <li><Link href="/features">Features</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact us</Link></li>
        </ul>
      </nav>
      <div className="cta-row">
        <button className="btn btn-outline">Demo</button>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </header>
  );
}