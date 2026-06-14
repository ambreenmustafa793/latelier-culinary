import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const recipes = [
  { 
    id: 1, 
    name: 'Chocolate Cake', 
    category: 'Dessert', 
    time: '1 hour', 
    level: 'Medium', 
    image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=600',
    ingredients: ['2 cups flour', '1 cup sugar', '1/2 cup cocoa powder', '2 eggs', '1 cup milk', '1/2 cup oil', '1 tbsp baking powder'],
    instructions: '1. Mix dry ingredients. 2. Add wet ingredients. 3. Bake at 350°F for 30 minutes. 4. Let cool and serve.'
  },
  { 
    id: 2, 
    name: 'Chicken Noodles', 
    category: 'Main Course', 
    time: '30 min', 
    level: 'Easy', 
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
    ingredients: ['200g noodles', '1 chicken breast', '2 carrots', '1 onion', 'Soy sauce', 'Garlic', 'Black pepper'],
    instructions: '1. Boil noodles. 2. Stir fry chicken and vegetables. 3. Add noodles and sauce. 4. Mix well and serve hot.'
  },
  { 
    id: 3, 
    name: 'Vanilla Cupcake', 
    category: 'Dessert', 
    time: '45 min', 
    level: 'Easy', 
    image: '/cupcake.png',
    ingredients: ['1.5 cups flour', '1 cup sugar', '2 eggs', '1/2 cup butter', '1 tsp vanilla', '1/2 cup milk'],
    instructions: '1. Cream butter and sugar. 2. Add eggs and vanilla. 3. Fold in flour and milk. 4. Bake for 20 minutes at 350°F.'
  },
  { 
    id: 4, 
    name: 'Vegetable Fried Rice', 
    category: 'Main Course', 
    time: '25 min', 
    level: 'Easy', 
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    ingredients: ['2 cups rice', 'Carrots', 'Peas', 'Corn', 'Soy sauce', 'Spring onions', 'Garlic'],
    instructions: '1. Cook rice and cool. 2. Stir fry vegetables. 3. Add rice and sauce. 4. Mix well and garnish.'
  },
  { 
    id: 5, 
    name: 'Garlic Bread', 
    category: 'Appetizer', 
    time: '20 min', 
    level: 'Beginner', 
    image: '/garlic-bread.png',
    ingredients: ['1 baguette', '4 tbsp butter', '4 garlic cloves', 'Parsley', 'Salt'],
    instructions: '1. Mix butter and garlic. 2. Spread on bread. 3. Bake for 10 minutes. 4. Serve warm.'
  },
  { 
    id: 6, 
    name: 'Pasta Carbonara', 
    category: 'Main Course', 
    time: '25 min', 
    level: 'Medium', 
    image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600',
    ingredients: ['200g pasta', '100g bacon', '2 eggs', 'Parmesan cheese', 'Black pepper', 'Garlic'],
    instructions: '1. Cook pasta. 2. Fry bacon. 3. Mix eggs and cheese. 4. Combine everything with pasta water.'
  },
];

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
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
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Recipes</h1>
          <p>Delicious cakes, noodles, pasta and more!</p>
          <Link to="/" className="btn btn-outline" style={{ marginTop: '1rem', display: 'inline-block', backgroundColor: 'transparent', borderColor: 'white', color: 'white' }}>← Back to Home</Link>
        </div>
      </div>

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2rem',
        padding: '4rem 0'
      }}>
        {recipes.map((recipe, index) => (
          <div key={recipe.id} style={{
            background: 'var(--white)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
            opacity: 0
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)'; }}>
            <img src={recipe.image} alt={recipe.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ color: 'var(--primary)' }}>{recipe.name}</h3>
              <p style={{ color: 'var(--dark)', margin: '0.5rem 0' }}>{recipe.category} • {recipe.time} • {recipe.level}</p>
              <button 
                onClick={() => handleViewRecipe(recipe)}
                className="btn btn-primary" 
                style={{ marginTop: '1rem', width: '100%' }}
              >
                View Full Recipe →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
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
          padding: '2rem',
          overflow: 'auto'
        }} onClick={closeModal}>
          <div style={{
            background: 'var(--white)',
            borderRadius: '20px',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            padding: '2rem',
            position: 'relative'
          }} onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} style={{
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
            
            <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{selectedRecipe.name}</h2>
            <p style={{ color: 'var(--dark)', marginBottom: '1rem' }}>{selectedRecipe.category} • {selectedRecipe.time} • {selectedRecipe.level}</p>
            
            <img src={selectedRecipe.image} alt={selectedRecipe.name} style={{ width: '100%', borderRadius: '12px', marginBottom: '1.5rem' }} />
            
            <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>🛒 Ingredients:</h3>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              {selectedRecipe.ingredients.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.3rem' }}>{item}</li>
              ))}
            </ul>
            
            <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>👨‍🍳 Instructions:</h3>
            <p style={{ lineHeight: '1.6', whiteSpace: 'pre-line' }}>{selectedRecipe.instructions}</p>
            
            <button onClick={closeModal} className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%' }}>
              Close Recipe
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;