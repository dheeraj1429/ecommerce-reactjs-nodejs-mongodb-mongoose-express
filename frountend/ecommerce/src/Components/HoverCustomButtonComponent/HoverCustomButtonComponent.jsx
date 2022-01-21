import React from 'react';

import './HoverCustomButtonComponent.css';

function HoverCustomButtonComponent({ Pr, data }) {
  return (
    <div className="button">
      <a className="cart-btn">${Pr}</a>
      <a className="cart-btn">
        <i className="cart-icon ion-bag"></i>
        {data}
      </a>
    </div>
  );
}

export default HoverCustomButtonComponent;
