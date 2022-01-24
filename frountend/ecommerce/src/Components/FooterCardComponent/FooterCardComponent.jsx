import React from 'react';

import './FooterCardComponent.css';

function FooterCardComponent({ heading, subtitle, icon }) {
  return (
    <div class="col-xl-4 col-md-4 mb-30">
      <div class="single-cta">
        <i class={icon}></i>
        <div class="cta-text">
          <h4>{heading}</h4>
          <span>{subtitle}</span>
        </div>
      </div>
    </div>
  );
}

export default FooterCardComponent;
