import React from 'react';
import { Link } from 'react-router-dom';

import './ProductHeadingComponent.css';

function ProductHeadingComponent({ heading, link }) {
  return (
    <div className="Product_Heading side_padding">
      <div className="container-fluid pt-4 pb-3">
        <div className="d-flex heading_div justify-content-between">
          <h4>{heading}</h4>
          <Link to={link}>
            <div className="seeAll d-flex align-items-center">
              <p className="me-2 mb-0">see All</p>
              <i class="fas fa-chevron-right"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductHeadingComponent;
