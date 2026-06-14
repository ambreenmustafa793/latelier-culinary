// src/pages/FlavorChemistry.jsx
import React from 'react';

const FlavorChemistry = () => {
  return (
    <div>
      <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', color: 'var(--white)', padding: '8rem 0 4rem 0', textAlign: 'center' }}>
        <div className="container"><h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Flavor Chemistry</h1><p>The science behind extraordinary taste</p></div>
      </div>
      <div className="container" style={{ padding: '4rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'var(--white)', padding: '2rem', borderRadius: '16px' }}><h3>Maillard Reaction</h3><p>The chemical reaction that creates deep, complex flavors when browning food.</p></div>
          <div style={{ background: 'var(--white)', padding: '2rem', borderRadius: '16px' }}><h3>Umami Science</h3><p>Understanding the fifth taste and how to unlock it in your cooking.</p></div>
          <div style={{ background: 'var(--white)', padding: '2rem', borderRadius: '16px' }}><h3>Flavor Pairing</h3><p>Why certain ingredients naturally complement each other.</p></div>
        </div>
      </div>
    </div>
  );
};

export default FlavorChemistry;