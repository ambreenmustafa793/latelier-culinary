import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--primary-dark)',
      color: 'var(--cream)',
      padding: '3rem 0 1rem 0',
      marginTop: '4rem'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>L'Atelier</h3>
          <p>Where culinary artistry meets science. Discover the magic of cooking with our expert-led masterclasses and community.</p>
        </div>
        <div>
          <h4 style={{ marginBottom: '1rem', color: 'var(--accent-light)' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none' }}>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/recipes">Recipes</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/masterclasses">Masterclasses</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/users">Community</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/reserve-spot">Reserve Spot</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '1rem', color: 'var(--accent-light)' }}>Contact</h4>
          <p>📧 hello@latelier.com</p>
          <p>📞 +33 1 23 45 67 89</p>
          <p>📍 Paris, France</p>
        </div>
        <div>
          <h4 style={{ marginBottom: '1rem', color: 'var(--accent-light)' }}>Follow Us</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div style={{
        textAlign: 'center',
        paddingTop: '2rem',
        marginTop: '2rem',
        borderTop: '1px solid rgba(254, 250, 224, 0.2)'
      }}>
        <p>&copy; 2024 L'Atelier Culinary. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;