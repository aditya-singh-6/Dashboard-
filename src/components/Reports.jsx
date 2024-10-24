import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Reports = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Lead Report', 14, 16);
    doc.autoTable({
      head: [['Name', 'Email', 'Status']],
      body: [
        ['John Doe', 'john@example.com', 'New'],
        ['Jane Smith', 'jane@example.com', 'In Progress'],
      ],
    });
    doc.save('report.pdf');
  };

  return (
    <div className="reports">
      <h1>Reports</h1>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default Reports;