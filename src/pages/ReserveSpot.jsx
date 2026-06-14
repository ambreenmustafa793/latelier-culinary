import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReserveSpot = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    class: '', 
    message: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      alert('⚠️ Please enter your full name');
      return;
    }
    if (!formData.email.trim()) {
      alert('⚠️ Please enter your email');
      return;
    }
    if (!formData.class) {
      alert('⚠️ Please select a masterclass');
      return;
    }
    
    // Success POPUP message
    alert(`✅ Reservation Confirmed!\n\nName: ${formData.name}\nEmail: ${formData.email}\nClass: ${formData.class}\n\nWe will contact you within 24 hours.`);
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', class: '', message: '' });
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
        color: 'var(--white)',
        padding: '8rem 0 4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Reserve Your Spot</h1>
          <p>Join us for an unforgettable culinary experience</p>
          <Link to="/" className="btn btn-outline" style={{ marginTop: '1rem', display: 'inline-block', backgroundColor: 'transparent', borderColor: 'white', color: 'white' }}>← Back to Home</Link>
        </div>
      </div>

      {/* Form Section */}
      <div className="container" style={{ padding: '4rem 0', maxWidth: '700px', margin: '0 auto' }}>
        
        <form onSubmit={handleSubmit} style={{ 
          background: 'var(--white)', 
          padding: '2rem', 
          borderRadius: '20px', 
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem', textAlign: 'center' }}>Book Your Experience</h2>
          
          {/* Name Field */}
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name *</label>
            <input 
              type="text" 
              name="name"
              value={formData.name} 
              onChange={handleChange} 
              style={{ 
                width: '100%', 
                padding: '0.8rem', 
                borderRadius: '8px', 
                border: '1px solid #ccc', 
                fontSize: '1rem',
                boxSizing: 'border-box'
              }} 
              placeholder="Enter your full name"
            />
          </div>
          
          {/* Email Field */}
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address *</label>
            <input 
              type="email" 
              name="email"
              value={formData.email} 
              onChange={handleChange} 
              style={{ 
                width: '100%', 
                padding: '0.8rem', 
                borderRadius: '8px', 
                border: '1px solid #ccc', 
                fontSize: '1rem',
                boxSizing: 'border-box'
              }} 
              placeholder="Enter your email"
            />
          </div>
          
          {/* Phone Field */}
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone} 
              onChange={handleChange} 
              style={{ 
                width: '100%', 
                padding: '0.8rem', 
                borderRadius: '8px', 
                border: '1px solid #ccc', 
                fontSize: '1rem',
                boxSizing: 'border-box'
              }} 
              placeholder="Optional"
            />
          </div>
          
          {/* Masterclass Selection */}
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Select Masterclass *</label>
            <select 
              name="class"
              value={formData.class} 
              onChange={handleChange} 
              style={{ 
                width: '100%', 
                padding: '0.8rem', 
                borderRadius: '8px', 
                border: '1px solid #ccc', 
                fontSize: '1rem',
                boxSizing: 'border-box',
                background: 'white'
              }}
            >
              <option value="">-- Choose a masterclass --</option>
              <option value="Artisan Bread Making">Artisan Bread Making - Dec 15, 2024 (€89)</option>
              <option value="Sauce Fundamentals">Sauce Fundamentals - Dec 20, 2024 (€79)</option>
              <option value="Pastry Perfection">Pastry Perfection - Jan 10, 2025 (€99)</option>
              <option value="Knife Skills Workshop">Knife Skills Workshop - Jan 15, 2025 (€69)</option>
              <option value="French Plated Desserts">French Plated Desserts - Jan 22, 2025 (€119)</option>
            </select>
          </div>
          
          {/* Message Field */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Special Requests</label>
            <textarea 
              name="message"
              value={formData.message} 
              onChange={handleChange} 
              rows="3"
              style={{ 
                width: '100%', 
                padding: '0.8rem', 
                borderRadius: '8px', 
                border: '1px solid #ccc', 
                fontSize: '1rem',
                boxSizing: 'border-box',
                resize: 'vertical'
              }} 
              placeholder="Any allergies, dietary restrictions, or special requests..."
            />
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ 
              width: '100%', 
              padding: '1rem', 
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}
          >
            Confirm Reservation →
          </button>
          
          <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8rem', color: '#666' }}>
            * Required fields | We'll send confirmation within 24 hours
          </p>
        </form>
      </div>
    </div>
  );
};

export default ReserveSpot;