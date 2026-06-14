import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load users. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--error)' }}>⚠️ {error}</h2>
        <button className="btn btn-primary" onClick={() => window.location.reload()} style={{ marginTop: '1rem' }}>Try Again</button>
      </div>
    );
  }

  return (
    <div>
      <div style={{
        background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
        color: 'var(--white)',
        padding: '8rem 0 4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Community</h1>
          <p>Connect with fellow culinary enthusiasts from around the world</p>
        </div>
      </div>

      <div className="container" style={{ padding: '4rem 0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {users.map((user, index) => (
            <Link to={`/users/${user.id}`} key={user.id} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--white)',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`,
                opacity: 0
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--white)',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--primary)' }}>{user.name}</h3>
                    <p style={{ color: 'var(--dark)' }}>@{user.username}</p>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid var(--gray)', paddingTop: '1rem' }}>
                  <p><strong>📧</strong> {user.email}</p>
                  <p><strong>🏢</strong> {user.company.name}</p>
                  <p><strong>🌐</strong> {user.website}</p>
                </div>
                <div style={{ marginTop: '1rem', textAlign: 'right', color: 'var(--accent)' }}>
                  View Profile →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;