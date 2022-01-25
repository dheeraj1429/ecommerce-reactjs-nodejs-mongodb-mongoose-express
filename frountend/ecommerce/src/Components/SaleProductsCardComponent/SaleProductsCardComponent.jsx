import React from 'react';
import { useDispatch } from 'react-redux';
import { addtoCard, addToSelected, showAddToCartPopup } from '../../Redux/Action/action';
import CustomButtonComponent from '../../DashboardComponents/CustomButtonComponent/CustomButtonComponent';

import './SaleProductsCardComponent.css';

function SaleProductsCardComponent({ data }) {
  const dispatch = useDispatch();
  const AddToCartHandler = function () {
    dispatch(addtoCard(Object.assign(data, { quntity: 1 })));
    dispatch(showAddToCartPopup(true));
    dispatch(addToSelected(data));
  };

  return (
    <div className="saleProduct_card_div p-3">
      <div className="d-flex align-items-center">
        <img src={data.image[0].url} alt="" />

        <div className="sale_heading_content">
          <h5 className="mb-3">{data.category}</h5>
          <h4 className="mb-4">{data.name.slice(0, 70)}..</h4>

          <h1 className="mb-3">
            <i class="fas fa-dollar-sign"></i>200.00
          </h1>

          <p className="mb-4">{data.discription.slice(0, 300)}..</p>

          <CustomButtonComponent TextContent={'ADD TO CART'} btnCl={'addToCartBtnOne'} onClick={AddToCartHandler} />
        </div>
      </div>
    </div>
  );
}

export default SaleProductsCardComponent;
