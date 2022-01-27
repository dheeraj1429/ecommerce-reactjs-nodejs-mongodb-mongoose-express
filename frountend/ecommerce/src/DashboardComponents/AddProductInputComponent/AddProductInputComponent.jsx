import React from 'react';

import './AddProductInputComponent.css';

function AddProductInputComponent({ name, type, label, Value, Change, style }) {
  return (
    <div className={style ? `addProduct_input_div ${style}` : 'addProduct_input_div'}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={Value} onChange={Change} />
    </div>
  );
}

export default AddProductInputComponent;
