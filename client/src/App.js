import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/landing';
import Home from './pages/home';
import Software from './pages/software';
import Modelling from './pages/modelling';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/software" element={<Software />} />
        <Route path="/modelling" element={<Modelling />} />
      </Routes>
    </Router>
  );
}

export default App;
