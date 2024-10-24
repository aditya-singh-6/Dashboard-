import React from 'react';
import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS } from 'chart.js/auto';

const Analytics = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      }
    ]
  };

  return (
    <div className="analytics">
      <h1>Analytics</h1>
      <Line data={data} />
    </div>
  );
};

export default Analytics;
