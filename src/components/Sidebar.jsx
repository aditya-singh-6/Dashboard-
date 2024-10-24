import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Add custom CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>EzyMetrics</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/leads">Leads</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
