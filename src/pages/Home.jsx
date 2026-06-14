import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section style={{
        height: '90vh',
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'var(--white)'
      }}>
        <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>L'Atelier Culinary</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>Where tradition meets innovation in the heart of French gastronomy</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/reserve-spot" className="btn btn-primary">Reserve Your Spot</Link>
            <Link to="/recipes" className="btn btn-outline">Explore Recipes</Link>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '5rem 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--primary)' }}>Experience L'Atelier</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {/* Recipes Card - White text on button */}
          <div style={{
            background: 'var(--white)',
            padding: '2rem',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🍽️</div>
            <h3>Master Recipes</h3>
            <p>Discover our curated collection of classic and contemporary French recipes.</p>
            <Link to="/recipes" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>View Recipes →</Link>
          </div>
          
          {/* Flavor Chemistry Card - White text on button */}
          <div style={{
            background: 'var(--white)',
            padding: '2rem',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧪</div>
            <h3>Flavor Chemistry</h3>
            <p>Understand the science behind perfect flavor combinations.</p>
            <Link to="/flavor-chemistry" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Learn Science →</Link>
          </div>
          
          {/* Kitchen Helper Card - White text on button */}
          <div style={{
            background: 'var(--white)',
            padding: '2rem',
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👨‍🍳</div>
            <h3>Kitchen Helper</h3>
            <p>Smart tools and tips to elevate your cooking game.</p>
            <Link to="/kitchen-helper" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Get Help →</Link>
          </div>
        </div>
      </section>

      {/* Masterclasses Section - White text */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
        color: 'var(--white)',
        textAlign: 'center',
        padding: '4rem 2rem'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--white)' }}>Masterclasses</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--white)' }}>Learn from the best in the industry</p>
          <Link to="/masterclasses" className="btn btn-primary" style={{ backgroundColor: 'var(--white)', color: 'var(--primary)' }}>View Masterclasses →</Link>
        </div>
      </section>

      {/* Alumni Section - White text */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))',
        color: 'var(--white)',
        textAlign: 'center',
        padding: '4rem 2rem'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--white)' }}>Alumni Network</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--white)' }}>Our graduates making waves in the culinary world</p>
          <Link to="/alumni" className="btn btn-primary" style={{ backgroundColor: 'var(--white)', color: 'var(--primary)' }}>Meet Our Alumni →</Link>
        </div>
      </section>

      {/* Community Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
        color: 'var(--white)',
        textAlign: 'center',
        padding: '4rem 2rem'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--white)' }}>Join Our Community</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--white)' }}>Connect with fellow food enthusiasts and culinary professionals</p>
          <Link to="/users" className="btn btn-primary" style={{ backgroundColor: 'var(--white)', color: 'var(--primary)' }}>Meet the Community →</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;