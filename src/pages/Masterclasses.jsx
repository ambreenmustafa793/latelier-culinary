import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const classes = [
  { id: 1, title: 'Artisan Bread Making', date: 'Dec 15, 2024', spots: '8 spots left', price: '€89', level: 'Beginner', duration: '4 hours' },
  { id: 2, title: 'Sauce Fundamentals', date: 'Dec 20, 2024', spots: '12 spots left', price: '€79', level: 'Intermediate', duration: '3 hours' },
  { id: 3, title: 'Pastry Perfection', date: 'Jan 10, 2025', spots: '5 spots left', price: '€99', level: 'Advanced', duration: '5 hours' },
  { id: 4, title: 'Knife Skills Workshop', date: 'Jan 15, 2025', spots: '15 spots left', price: '€69', level: 'Beginner', duration: '3 hours' },
  { id: 5, title: 'French Plated Desserts', date: 'Jan 22, 2025', spots: '6 spots left', price: '€119', level: 'Advanced', duration: '4 hours' },
];

const Masterclasses = () => {
  const [enrolledClass, setEnrolledClass] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleEnroll = (classItem) => {
    setSelectedClass(classItem);
    setShowPopup(true);
  };

  const confirmEnrollment = () => {
    setEnrolledClass(selectedClass.title);
    alert(`✨ You've been enrolled in "${selectedClass.title}"!\n\n📅 Date: ${selectedClass.date}\n💰 Price: ${selectedClass.price}\n\nWe'll send details to your email.`);
    setShowPopup(false);
    setTimeout(() => setEnrolledClass(null), 3000);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedClass(null);
  };

  return (
    <div>
      <div style={{
        background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
        color: 'var(--white)',
        padding: '8rem 0 4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Masterclasses</h1>
          <p style={{ color: 'var(--white)' }}>Learn from the best in the industry</p>
          <Link to="/" className="btn btn-outline" style={{ marginTop: '1rem', display: 'inline-block', backgroundColor: 'transparent', borderColor: 'white', color: 'white' }}>← Back to Home</Link>
        </div>
      </div>

      <div className="container" style={{ padding: '4rem 0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {classes.map((c, i) => (
            <div key={c.id} style={{
              background: 'var(--white)',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease',
              animation: `fadeInUp 0.5s ease-out ${i * 0.1}s forwards`,
              opacity: 0
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{c.title}</h3>
              <p><strong>📅 Date:</strong> {c.date}</p>
              <p><strong>⏰ Duration:</strong> {c.duration}</p>
              <p><strong>⭐ Level:</strong> {c.level}</p>
              <p><strong>🎫 Availability:</strong> {c.spots}</p>
              <p><strong>💰 Price:</strong> {c.price}</p>
              <button 
                onClick={() => handleEnroll(c)}
                className="btn btn-primary" 
                style={{ marginTop: '1rem', width: '100%' }}
              >
                {enrolledClass === c.title ? '✓ Enrolled!' : 'Enroll Now →'}
              </button>
            </div>
          ))}
        </div>

        {/* Enrollment Popup */}
        {showPopup && selectedClass && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000,
            padding: '2rem'
          }} onClick={closePopup}>
            <div style={{
              background: 'var(--white)',
              borderRadius: '20px',
              maxWidth: '500px',
              width: '100%',
              padding: '2rem',
              position: 'relative',
              textAlign: 'center'
            }} onClick={e => e.stopPropagation()}>
              <button onClick={closePopup} style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'var(--error)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}>×</button>
              
              <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Confirm Enrollment</h2>
              <p><strong>{selectedClass.title}</strong></p>
              <p>📅 {selectedClass.date}</p>
              <p>💰 {selectedClass.price}</p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button onClick={closePopup} className="btn btn-outline" style={{ flex: 1 }}>Cancel</button>
                <button onClick={confirmEnrollment} className="btn btn-primary" style={{ flex: 1 }}>Confirm →</button>
              </div>
            </div>
          </div>
        )}

        <div style={{
          marginTop: '3rem',
          background: 'linear-gradient(135deg, var(--accent-light), var(--accent))',
          padding: '2rem',
          borderRadius: '16px',
          textAlign: 'center',
          color: 'var(--white)'
        }}>
          <h3 style={{ color: 'var(--white)' }}>🎓 Special Offer</h3>
          <p style={{ color: 'var(--white)' }}>Book 2 masterclasses and get 15% off! Use code: ATELIER15</p>
        </div>
      </div>
    </div>
  );
};

export default Masterclasses;