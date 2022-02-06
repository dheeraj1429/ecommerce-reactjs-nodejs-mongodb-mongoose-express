import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './WishListProductAlert.css';

function WishListProductAlert() {
   const [ShowAlert, setShowAlert] = useState(false);
   const selector = useSelector((state) => state.userStoreData);

   useEffect(() => {
      if (selector.WishlistAlertData !== null) {
         setShowAlert(true);

         const timer = setTimeout(() => {
            setShowAlert(false);
            clearInterval(timer);
         }, 2000);
      }
   }, [selector.WishlistAlertData]);

   return (
      <div
         className={ShowAlert ? 'Alert_massage_div Alert_massage_div_active' : 'Alert_massage_div'}
      >
         {selector.WishlistAlertData !== null ? (
            <div className="d-flex align-items-center">
               <img src={selector.WishlistAlertData.image[0].url} alt="" />
               <p className="ms-3 mb-0">Product added to wishlist</p>
            </div>
         ) : null}
      </div>
   );
}

export default WishListProductAlert;
