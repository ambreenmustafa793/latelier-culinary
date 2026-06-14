import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Kitchen Helper', path: '/kitchen-helper' },
    { name: 'Flavor Chemistry', path: '/flavor-chemistry' },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Masterclasses', path: '/masterclasses' },
    { name: 'Reserve Spot', path: '/reserve-spot' },
    { name: 'Community', path: '/users' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: isScrolled ? 'var(--primary-dark)' : 'transparent',
      boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.2)' : 'none',
      transition: 'all 0.3s ease',
      padding: isScrolled ? '0.8rem 0' : '1.2rem 0'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.6rem',
          fontWeight: 700,
          color: 'var(--white)'
        }}>
          <span style={{ fontSize: '1.8rem' }}>🍳</span>
          <span style={{ color: 'var(--white)' }}>L'Atelier</span>
        </Link>

        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }} className="nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                fontWeight: 500,
                transition: 'all 0.3s ease',
                position: 'relative',
                padding: '0.5rem 0',
                color: 'var(--white)',  // ← WHITE TEXT for all links
                textDecoration: 'none',
                borderBottom: isActive ? '2px solid var(--accent)' : 'none'
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            width: '30px',
            height: '24px',
            position: 'relative'
          }}
          className="mobile-menu-btn"
        >
          <span style={{
            display: 'block',
            width: '100%',
            height: '2px',
            backgroundColor: 'var(--white)',
            position: 'relative',
            transition: 'all 0.3s ease'
          }}></span>
          <span style={{
            display: 'block',
            width: '100%',
            height: '2px',
            backgroundColor: 'var(--white)',
            position: 'relative',
            marginTop: '6px',
            transition: 'all 0.3s ease'
          }}></span>
          <span style={{
            display: 'block',
            width: '100%',
            height: '2px',
            backgroundColor: 'var(--white)',
            position: 'relative',
            marginTop: '6px',
            transition: 'all 0.3s ease'
          }}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 70px)',
          backgroundColor: 'var(--primary-dark)',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          gap: '1.5rem',
          zIndex: 999
        }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: 'var(--white)',
                fontSize: '1.2rem',
                textDecoration: 'none',
                padding: '0.5rem',
                textAlign: 'center',
                borderBottom: isActive ? '2px solid var(--accent)' : 'none'
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 968px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;