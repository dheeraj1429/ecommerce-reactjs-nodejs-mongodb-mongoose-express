import React from 'react';
import CustomButtonComponent from '../../DashboardComponents/CustomButtonComponent/CustomButtonComponent';

import './ProductCardComponent.css';

function ProductCardComponent() {
  return (
    <div className="Product_card_div text-center">
      <div className="text-center">
        <img
          src="https://mageblueskytech.com/dukamarket/media/catalog/product/cache/e056f2085c1b5fe6902b0a5e86573793/3/0/x30_1.jpg.pagespeed.ic._8B_ECWiga.jpg"
          alt=""
        />
      </div>

      <div className="Product_card_content mt-3">
        <h3>Unlocak Galaxy Mobile Phone</h3>
        <div className="d-flex align-items-center  justify-content-center">
          <div>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p>(1)</p>
        </div>

        <h4 className="price">
          <i class="fas fa-dollar-sign"></i>600.00
        </h4>

        <div className="button_div mt-3">
          <CustomButtonComponent TextContent={'ADD TO CART'} btnCl={'addToCartBtn'} />
        </div>
      </div>
    </div>
  );
}

export default ProductCardComponent;
