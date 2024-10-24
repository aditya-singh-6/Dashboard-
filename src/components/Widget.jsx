import React from 'react';

const Widget = ({ title }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <p>Widget Content</p>
    </div>
  );
};

export default Widget;
