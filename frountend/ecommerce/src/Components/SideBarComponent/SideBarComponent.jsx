import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSiderBar } from '../../Redux/Action/action';
import { Link } from 'react-router-dom';
import CustomButtonComponent from '../../DashboardComponents/CustomButtonComponent/CustomButtonComponent';
import ProductsSmCardComponent from '../ProductsSmCardComponent/ProductsSmCardComponent';

import './SideBarComponent.css';

function SideBarComponent() {
   const [PriceData, setPriceData] = useState(0);
   const selector = useSelector((state) => state.userStoreData);
   const dispatch = useDispatch();

   useEffect(() => {
      if (selector.AddToCart.length > 0) {
         const data = selector.AddToCart.map((el) => el.totalPrice).reduce((acc, crv) => acc + crv);
         setPriceData(data);
      }
   }, [selector.AddToCart]);

   const CloseModel = function () {
      dispatch(closeSiderBar());
   };

   return (
      <div
         className={
            !selector.CloseSidebar
               ? 'siderBar_overlay_div siderBar_overlay_div_active'
               : 'siderBar_overlay_div'
         }
      >
         <div
            className={!selector.CloseSidebar ? ' SideBar_div' : 'SideBar_div SideBar_div_active'}
         >
            <div className="sideBar_heading">
               <h4>My Cart</h4>
               <i
                  className="fa fa-close"
                  onClick={() => dispatch(closeSiderBar(!selector.CloseSidebar))}
               ></i>
            </div>

            {selector.AddToCart !== [] && selector.AddToCart.length > 0
               ? selector.AddToCart.map((el) => <ProductsSmCardComponent key={el._id} data={el} />)
               : null}

            <div className="popUp_buttons_div">
               <div className="px-3 d-flex justify-content-between">
                  <h4>Cart Subtotal</h4>
                  <h3>
                     <i class="fas fa-dollar-sign"></i>
                     {PriceData === 0 ? '0.00' : PriceData}
                  </h3>
               </div>

               <div className="text-center mt-4">
                  {selector.AddToCart !== [] && selector.AddToCart.length > 0 ? (
                     <Link to="/cart">
                        <CustomButtonComponent
                           TextContent={'PROCEED TO CHECKOUT'}
                           btnCl={'addToCartBtnOne'}
                           onClick={CloseModel}
                        />
                     </Link>
                  ) : null}
               </div>
            </div>
         </div>
      </div>
   );
}

export default SideBarComponent;
