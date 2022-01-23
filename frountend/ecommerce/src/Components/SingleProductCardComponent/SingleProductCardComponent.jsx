import React from 'react';
import ProductTableComponent from '../ProductTableComponent/ProductTableComponent';
import CustomButtonComponent from '../../DashboardComponents/CustomButtonComponent/CustomButtonComponent';

import './SingleProductCardComponent.css';
import { useState } from 'react';

function SingleProductCardComponent({ data }) {
  const [PriceInc, setPriceInc] = useState(1);

  const ChangeIncFun = function () {
    setPriceInc((prev) => prev + 1);
  };

  const ChangeDecFun = function () {
    if (PriceInc === 0) return;
    setPriceInc((prev) => prev - 1);
  };

  return (
    <div className="row">
      <div className="col-12 py-3 pb-2 single_page_box p-4">
        <div className="d-flex">
          <div className="products_sm_images">
            {data.galleryImage
              ? data.galleryImage.map((el) =>
                  el.img == '' ? null : (
                    <div className="sm_cards">
                      <img src={el.img} alt="" />
                    </div>
                  )
                )
              : null}
          </div>
          <div className="product_main_image">
            <img src={data.image[0].url} alt="" />
          </div>
          <div className="product_content_div">
            <h1>{data.name}</h1>
            <p>{data.review} Reviews</p>
            <h3 className="price_heading pt-2 pb-3">
              <i class="fas fa-dollar-sign"></i>
              {data.price}
            </h3>
            <div className="product_other_data">
              <p className="mb-3">
                Categories: <span>{data.category}</span>
              </p>
              <p>{data.discription}</p>
            </div>
            <div className="py-3">
              <div className="icons_div_single d-flex align-items-center">
                <i class="far fa-heart"></i>
                <p className="mb-0 ms-1">Add to Wishlist</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="incInput d-flex me-4">
                <div className="minus" onClick={ChangeDecFun}>
                  -
                </div>
                <div>
                  <p>{PriceInc}</p>
                </div>
                <div className="plus" onClick={ChangeIncFun}>
                  +
                </div>
              </div>
              <CustomButtonComponent TextContent={'ADD TO CART'} btnCl={'addToCartBtn'} />
            </div>
          </div>
        </div>
        <div className="co-12">
          <ProductTableComponent data={data} />
        </div>
      </div>
    </div>
  );
}

export default SingleProductCardComponent;
