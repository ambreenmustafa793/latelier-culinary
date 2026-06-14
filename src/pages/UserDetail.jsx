import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load user details. Please try again.');
        setLoading(false);
      });
  }, [id]);

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
        <Link to="/users" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Community</Link>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div>
      <div style={{
        background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
        color: 'var(--white)',
        padding: '8rem 0 4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <Link to="/users" style={{ color: 'var(--accent)', display: 'inline-block', marginBottom: '1rem' }}>← Back to Community</Link>
          <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{user.name}</h1>
          <p>@{user.username}</p>
        </div>
      </div>

      <div className="container" style={{ padding: '4rem 0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            background: 'var(--white)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Contact Information</h2>
            <p><strong>📧 Email:</strong> {user.email}</p>
            <p><strong>📞 Phone:</strong> {user.phone}</p>
            <p><strong>🌐 Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>{user.website}</a></p>
          </div>

          <div style={{
            background: 'var(--white)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Address</h2>
            <p><strong>🏠 Street:</strong> {user.address.street}</p>
            <p><strong>🏢 Suite:</strong> {user.address.suite}</p>
            <p><strong>🌆 City:</strong> {user.address.city}</p>
            <p><strong>📮 Zipcode:</strong> {user.address.zipcode}</p>
          </div>

          <div style={{
            background: 'var(--white)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Company</h2>
            <p><strong>🏢 Name:</strong> {user.company.name}</p>
            <p><strong>💼 Catchphrase:</strong> "{user.company.catchPhrase}"</p>
            <p><strong>🎯 BS:</strong> {user.company.bs}</p>
          </div>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link to="/users" className="btn btn-outline">Browse All Members</Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;