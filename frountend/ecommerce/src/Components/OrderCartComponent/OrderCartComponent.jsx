import React, { useEffect, useState } from 'react';
import CustomButtonComponent from '../../DashboardComponents/CustomButtonComponent/CustomButtonComponent';

import './OrderCartComponent.css';

function OrderCartComponent({ data }) {
   const [OrderDetails, setOrderDetails] = useState('');

   useEffect(() => {
      const orderPrice = data.map((el) => el.totalPrice).reduce((acc, crv) => acc + crv);
      setOrderDetails(orderPrice);
   }, [data]);

   return (
      <div className="product_order_div p-3">
         <h1>Order Summary</h1>
         <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo dolores
            inventore praesentium vitae assumenda et totam, voluptatum at facere!
         </p>

         <div className="d-flex justify-content-between order_data mt-5">
            <h3>Subtotal</h3>
            <h3>
               <i class="fas fa-dollar-sign"></i>
               {OrderDetails}
            </h3>
         </div>
         <div className="d-flex justify-content-between order_data mt-2">
            <h3>Shipping</h3>
            <div className="order_sub_title">
               <h3 className="mb-4">Taxes and Shipping calculate at checkout</h3>

               <CustomButtonComponent TextContent={'Check Out'} btnCl={'addToCartBtnOne'} />
            </div>
         </div>
      </div>
   );
}

export default OrderCartComponent;
