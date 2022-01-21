import React from 'react';

import './CustomButtonComponent.css';

function CustomButtonComponent({ TextContent, btnCl, onClick }) {
  return (
    <button className={btnCl ? `${btnCl} Custom_button` : 'Custom_button'} onClick={onClick ? onClick : null}>
      {TextContent} {TextContent === 'Edit' ? <i class="fas fa-pencil-alt ms-2"></i> : null}
    </button>
  );
}

export default CustomButtonComponent;
