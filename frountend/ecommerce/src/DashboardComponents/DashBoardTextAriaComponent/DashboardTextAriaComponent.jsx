import React from 'react';

import './DashboardTextAriaComponent.css';

function DashboardTextAriaComponent({ name, label, Value, Change }) {
  return (
    <div className="Product_Details_info">
      <label htmlFor={name}>{label}</label>
      <div>
        <textarea name={name} value={Value} onChange={Change} />
      </div>
    </div>
  );
}

export default DashboardTextAriaComponent;
