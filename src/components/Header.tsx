import React from 'react';

const Header = () => {
  return (
    <header className="nav-bar" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '40px', /* More spacing */
      paddingBottom: '16px',
      borderBottom: '1px solid var(--divider-color)'
    }}>
      <div className="logo" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px' /* More spacing */
      }}>
        <div className="logo-icon" style={{
          background: 'var(--navy)', /* Navy background */
          color: '#fff',
          borderRadius: '50%',
          width: '40px', /* Larger */
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' /* Subtle shadow */
        }}>
          ↑
        </div>
        <span style={{fontSize: '20px', fontWeight: '700'}}>Beyond UI</span>
      </div>
      <nav className="nav-links" style={{
        display: 'flex',
        gap: '24px', /* More spacing */
        alignItems: 'center'
      }}>
        <a href="#" style={{fontSize: '15px'}}>Homepage</a>
        <a href="#" style={{fontSize: '15px'}}>About us</a>
        <a href="#" style={{fontSize: '15px'}}>Features</a>
        <a href="#" style={{fontSize: '15px'}}>Blog</a>
        <a href="#" style={{fontSize: '15px'}}>Contact us</a>
        <button className="btn-secondary">Demo</button>
        <button className="btn-primary">Get Started</button>
      </nav>
    </header>
  );
};

export default Header;