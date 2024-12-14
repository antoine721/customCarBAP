import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ModelSelection } from './pages/ModelSelection';
import { CarCustomization } from './pages/CarCustomization';
import { Finish } from './pages/Finish';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<ModelSelection />} />
        <Route path="/customize/:step" element={<CarCustomization />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </Router>
  );
}

export default App;