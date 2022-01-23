import React from 'react';

import './ProductsSmCardComponent.css';

function ProductsSmCardComponent({ data }) {
  return (
    <div className="car_sm_products">
      <img src={data.image[0].url} alt="" />

      <div>
        <h1>{data.name.slice(0, 70)}..</h1>
        <p>
          <i class="fas fa-dollar-sign"></i>
          {data.price} <i className="fa fa-close"></i> {data.quntity}
        </p>
      </div>
    </div>
  );
}

export default ProductsSmCardComponent;
