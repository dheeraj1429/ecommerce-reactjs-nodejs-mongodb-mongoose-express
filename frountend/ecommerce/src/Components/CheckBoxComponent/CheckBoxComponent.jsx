import React from 'react';

import './CheckBoxComponent.css';

function CheckBoxComponent({ Value, Vl, onChange }) {
  return (
    <div className="d-flex mb-2 checkbox_div align-items-center">
      <input type="checkbox" name="" id="" value={Vl} onChange={onChange ? onChange : null} />
      <p className="mb-0 ms-2">{Value}</p>
    </div>
  );
}

export default CheckBoxComponent;
