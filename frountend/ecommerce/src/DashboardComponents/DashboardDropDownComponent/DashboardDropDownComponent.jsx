import React from 'react';

import './DashboardDropDownComponent.css';

function DashboardDropDownComponent({ name, label, Data, Value, Change, style }) {
  return (
    <div className={style ? `Dashboard_dropdown_div ${style}` : 'Dashboard_dropdown_div'}>
      {label ? <label htmlFor={name}>{label}</label> : null}

      <div>
        <select name={name} value={Value} onChange={Change}>
          {Data ? Data.map((el) => <option key={el.el}>{el.el}</option>) : null}
        </select>
      </div>
    </div>
  );
}

export default DashboardDropDownComponent;
