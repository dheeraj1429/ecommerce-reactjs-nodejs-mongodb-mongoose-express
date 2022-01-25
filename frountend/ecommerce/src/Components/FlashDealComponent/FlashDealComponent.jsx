import React from 'react';
import { useSelector } from 'react-redux';
import SaleProductsCardComponent from '../SaleProductsCardComponent/SaleProductsCardComponent';

import './FlashDealComponent.css';

function FlashDealComponent() {
  const selector = useSelector((state) => state.userStoreData.allProducts);

  return (
    <div className="FlashDeal_div">
      {selector !== null && selector.success === true ? (
        <div className="container-fluid">
          <div className="row side_padding">
            {selector.AllProducts.slice(19, 21).map((el) => (
              <div className="col-12 col-sm-12 col-md-6" key={el._id}>
                <SaleProductsCardComponent data={el} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default FlashDealComponent;
