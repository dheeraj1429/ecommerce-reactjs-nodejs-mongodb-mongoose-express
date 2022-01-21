import React from 'react';

import './AddProductInputComponent.css';

function AddProductInputComponent({ name, type, label, Value, Change }) {
  return (
    <div className="addProduct_input_div">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={Value} onChange={Change} />
    </div>
  );
}

export default AddProductInputComponent;
