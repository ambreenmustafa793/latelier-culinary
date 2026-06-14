// src/pages/Alumni.jsx
import React from 'react';

const alumni = [
  { name: 'Marie Laurent', year: '2023', achievement: 'Michelin Star Chef' },
  { name: 'Jean Dupont', year: '2022', achievement: 'Pastry World Champion' },
  { name: 'Sophie Chen', year: '2023', achievement: 'Food Author' }
];

const Alumni = () => {
  return (
    <div>
      <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', color: 'var(--white)', padding: '8rem 0 4rem 0', textAlign: 'center' }}>
        <div className="container"><h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Alumni Network</h1><p>Our graduates making waves in the culinary world</p></div>
      </div>
      <div className="container" style={{ padding: '4rem 0' }}>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {alumni.map((a, i) => (
            <div key={i} style={{ background: 'var(--white)', padding: '1.5rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
              <div><h3>{a.name}</h3><p>Class of {a.year}</p></div>
              <span style={{ background: 'var(--primary)', color: 'var(--white)', padding: '0.3rem 1rem', borderRadius: '20px' }}>{a.achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;