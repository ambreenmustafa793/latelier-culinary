import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import KitchenHelper from './pages/KitchenHelper';
import FlavorChemistry from './pages/FlavorChemistry';
import Alumni from './pages/Alumni';
import Masterclasses from './pages/Masterclasses';
import ReserveSpot from './pages/ReserveSpot';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/kitchen-helper" element={<KitchenHelper />} />
          <Route path="/flavor-chemistry" element={<FlavorChemistry />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/masterclasses" element={<Masterclasses />} />
          <Route path="/reserve-spot" element={<ReserveSpot />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;