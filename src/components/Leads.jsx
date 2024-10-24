import React, { useState } from 'react';
import './Leads.css'; // Add custom CSS for table layout

const Leads = () => {
  const [leads] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'New' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'In Progress' },
  ]);

  return (
    <div className="leads">
      <h1>Lead Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leads;
