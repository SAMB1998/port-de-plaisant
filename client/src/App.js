import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Catways from './components/Catways';
import Reservations from './components/Reservations';
import CatwayDetails from './components/CatwayDetails';
import ReservationDetails from './components/ReservationDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/catways" element={<Catways />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/catway/:id" element={<CatwayDetails />} />
        <Route path="/reservation/:id" element={<ReservationDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

