import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import Analytics from './components/Analytics';
import Reports from './components/Reports';
import './App.css'; // Custom CSS for overall layout

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Leads" element={<Leads />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/Reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
