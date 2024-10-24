import React, { useState } from 'react';
import Widget from './Widget';
import './Dashboard.css'; // Add custom CSS for layout

const Dashboard = () => {
  const [widgets, setWidgets] = useState([
    { id: 1, type: 'chart', title: 'Performance Overview' },
    { id: 2, type: 'chart', title: 'User Activity' }
  ]);

  const addWidget = () => {
    const newWidget = { id: widgets.length + 1, type: 'chart', title: 'New Widget' };
    setWidgets([...widgets, newWidget]);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <button onClick={addWidget}>Add Widget</button>
      <div className="widgets">
        {widgets.map(widget => (
          <Widget key={widget.id} title={widget.title} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
