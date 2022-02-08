import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { showAddToCartPopup } from '../../Redux/Action/action';
import CustomButtonComponent from '../../DashboardComponents/CustomButtonComponent/CustomButtonComponent';

import './AddToCartPopUpComponent.css';

function AddToCartPopUpComponent({ isActive }) {
   const dispatch = useDispatch();
   const navigation = useNavigate();
   const selector = useSelector((state) => state.userStoreData.AddToSelectedProduct);

   const CloseModel = function () {
      dispatch(showAddToCartPopup(false));
   };

   const moveToOther = function () {
      navigation('/cart');
      dispatch(showAddToCartPopup(false));
   };

   return ReactDOM.createPortal(
      <div className={isActive ? 'AddToCart_div' : 'AddToCart_div AddToCart_div_active'}>
         {selector !== null && Object.keys(selector).includes('name') ? (
            <div className="add_to_cart_inner_card px-3">
               <div className="add_to_cart_heading">
                  <h1>ADDED TO YOUR BAG</h1>
                  <div className="close_icons" onClick={CloseModel}>
                     <i className="fa fa-close"></i>
                  </div>
               </div>

               <div className="popUp_content">
                  <img src={selector.image[0].url} alt="" />
                  <div>
                     <h1>{selector.name.slice(0, 70)}..</h1>
                     <h3 className="popup_price">
                        <i class="fas fa-dollar-sign"></i>
                        {selector.price}
                     </h3>
                     <p>QTY: 1</p>
                  </div>
               </div>

               <div className="pb-4 pt-2 d-flex justify-content-around">
                  <CustomButtonComponent
                     TextContent={'CONTINUE SHOPPING'}
                     btnCl={'addToCartBtn'}
                     onClick={() => dispatch(CloseModel())}
                  />
                  <CustomButtonComponent
                     TextContent={'VIEW CART'}
                     btnCl={'addToCartBtnOne'}
                     onClick={moveToOther}
                  />
               </div>
            </div>
         ) : null}
      </div>,
      document.querySelector('#addToCart_popup')
   );
}

export default AddToCartPopUpComponent;
