import React from 'react';
import ReactDOM from 'react-dom';
import { showPrevimage } from '../../Redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';

import './ProductPrevComponent.css';

function ProductPrevComponent({ isActive }) {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userStoreData.ShowSelectedPrevImage);

  return ReactDOM.createPortal(
    <div className={isActive ? 'Product_prev_div ' : 'Product_prev_div Product_prev_div_hide'}>
      {selector !== null ? (
        <div className="Products_prev_inner_div">
          <i class="fas fa-times closeBtn" onClick={() => dispatch(showPrevimage(false))}></i>
          <div className="row">
            <div className="col-12 text-center">
              <img src={selector.image[0].url} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      ) : null}
    </div>,
    document.getElementById('products_prev_div')
  );
}

export default ProductPrevComponent;
