import React from 'react';
import { useDispatch } from 'react-redux';
import { selectedProduct } from '../../Redux/Action/action';
import { Link } from 'react-router-dom';
import HoverCustomButtonComponent from '../../Components/HoverCustomButtonComponent/HoverCustomButtonComponent';

import './ProductCardComponent.css';

function ProductCardComponent({ brand, category, discription, galleryImage, gender, id, image, name, price, rating, review, reviews, stock }) {
  const dispatch = useDispatch();

  const StoreProductData = function () {
    dispatch(selectedProduct({ brand, category, discription, galleryImage, gender, id, image, name, price, rating, review, reviews, stock }));
  };

  return (
    <div className="col-12 col-sm-12 col-md-6 my-3 d-flex justify-content-center">
      <div class="outer">
        <div class="content animated fadeInLeft">
          <span class="bg animated fadeInDown mb-4">NEW</span>
          <h1>{name.slice(0, 20)}..</h1>
          <p>{discription.slice(0, 200)}...</p>

          <HoverCustomButtonComponent Pr={price} data={'edit'} />
        </div>

        <Link to="details">
          <img src={image[0].url} className="Product_imge" onClick={StoreProductData} />
        </Link>
      </div>
    </div>
  );
}

export default ProductCardComponent;
