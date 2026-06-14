import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const KitchenHelper = () => {
  const [conversionValue, setConversionValue] = useState('');
  const [conversionResult, setConversionResult] = useState('');
  const [selectedTool, setSelectedTool] = useState('converter');

  const handleConvert = () => {
    const cups = parseFloat(conversionValue);
    if (!isNaN(cups)) {
      const grams = cups * 236.588;
      setConversionResult(`${cups} cups = ${grams.toFixed(0)} grams (approx)`);
    } else {
      setConversionResult('Please enter a valid number');
    }
  };

  const tools = [
    { id: 'converter', name: '📏 Measurement Converter', desc: 'Convert between cups, grams, ml, and ounces instantly' },
    { id: 'substitute', name: '🔄 Ingredient Substitutions', desc: 'Find perfect alternatives for any ingredient' },
    { id: 'timer', name: '⏰ Cooking Timer', desc: 'Multi-timer for perfect timing on multiple dishes' },
    { id: 'shopping', name: '🛒 Shopping List Generator', desc: 'Create smart shopping lists from recipes' }
  ];

  const substitutes = [
    { ingredient: 'Butter', substitute: 'Coconut oil, Olive oil, or Mashed avocado' },
    { ingredient: 'Eggs', substitute: 'Flax egg (1 tbsp flaxseed + 3 tbsp water) or Mashed banana' },
    { ingredient: 'Milk', substitute: 'Almond milk, Oat milk, or Soy milk' },
    { ingredient: 'Sugar', substitute: 'Honey, Maple syrup, or Stevia' },
    { ingredient: 'Flour', substitute: 'Almond flour, Coconut flour, or Oat flour' }
  ];

  const [timerMinutes, setTimerMinutes] = useState('');
  const [timerMessage, setTimerMessage] = useState('');

  const startTimer = () => {
    const mins = parseInt(timerMinutes);
    if (!isNaN(mins) && mins > 0) {
      setTimerMessage(`⏰ Timer set for ${mins} minutes!`);
      setTimeout(() => {
        alert(`⏰ Time's up! ${mins} minutes have passed.`);
        setTimerMessage('');
      }, mins * 60000);
      setTimerMinutes('');
    } else {
      setTimerMessage('Please enter a valid number of minutes');
    }
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
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Kitchen Helper</h1>
          <p style={{ color: 'var(--white)' }}>Essential tools to elevate your cooking experience</p>
          <Link to="/" className="btn btn-outline" style={{ marginTop: '1rem', display: 'inline-block', backgroundColor: 'transparent', borderColor: 'white', color: 'white' }}>← Back to Home</Link>
        </div>
      </div>

      <div className="container" style={{ padding: '4rem 0' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`btn ${selectedTool === tool.id ? 'btn-primary' : 'btn-outline'}`}
            >
              {tool.name}
            </button>
          ))}
        </div>

        <div style={{ background: 'var(--white)', padding: '2rem', borderRadius: '16px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', minHeight: '400px' }}>
          {selectedTool === 'converter' && (
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>📏 Measurement Converter</h3>
              <p>Convert cups to grams (water-based ingredients)</p>
              <input
                type="number"
                placeholder="Enter cups"
                value={conversionValue}
                onChange={(e) => setConversionValue(e.target.value)}
                style={{ padding: '0.8rem', margin: '1rem', borderRadius: '8px', border: '1px solid var(--gray)', width: '200px' }}
              />
              <button onClick={handleConvert} className="btn btn-primary">Convert</button>
              {conversionResult && <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: 'var(--success)' }}>{conversionResult}</p>}
            </div>
          )}

          {selectedTool === 'substitute' && (
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', textAlign: 'center' }}>🔄 Ingredient Substitutions</h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {substitutes.map((sub, i) => (
                  <div key={i} style={{ padding: '1rem', background: 'var(--gray-light)', borderRadius: '8px' }}>
                    <strong style={{ color: 'var(--primary)' }}>{sub.ingredient}:</strong> {sub.substitute}
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTool === 'timer' && (
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>⏰ Cooking Timer</h3>
              <input
                type="number"
                placeholder="Minutes"
                value={timerMinutes}
                onChange={(e) => setTimerMinutes(e.target.value)}
                style={{ padding: '0.8rem', margin: '1rem', borderRadius: '8px', border: '1px solid var(--gray)', width: '200px' }}
              />
              <button onClick={startTimer} className="btn btn-primary">Start Timer</button>
              {timerMessage && <p style={{ marginTop: '1rem', color: 'var(--success)' }}>{timerMessage}</p>}
            </div>
          )}

          {selectedTool === 'shopping' && (
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>🛒 Shopping List Generator</h3>
              <p>Coming soon! Add your recipes to generate a smart shopping list.</p>
              <button className="btn btn-outline" style={{ marginTop: '1rem' }} onClick={() => alert('Feature coming soon!')}>Try Demo</button>
            </div>
          )}
        </div>

        <div style={{ marginTop: '3rem', background: 'var(--primary-light)', padding: '2rem', borderRadius: '16px', color: 'var(--white)' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--white)' }}>💡 Pro Kitchen Tips</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <p style={{ color: 'var(--white)' }}>✓ Mise en place: Prep ingredients before cooking</p>
            <p style={{ color: 'var(--white)' }}>✓ Taste as you go and adjust seasoning</p>
            <p style={{ color: 'var(--white)' }}>✓ Let meat rest after cooking</p>
            <p style={{ color: 'var(--white)' }}>✓ Use room temperature ingredients for baking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenHelper;