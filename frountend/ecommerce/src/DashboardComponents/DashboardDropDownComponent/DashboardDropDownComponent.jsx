import React from 'react';

import './DashboardDropDownComponent.css';

function DashboardDropDownComponent({ name, label, Data, Value, Change }) {
  return (
    <div className="Dashboard_dropdown_div">
      <label htmlFor={name}>{label}</label>
      <div>
        <select name={name} value={Value} onChange={Change}>
          {Data ? Data.map((el) => <option key={el.el}>{el.el}</option>) : null}
        </select>
      </div>
    </div>
  );
}

export default DashboardDropDownComponent;
