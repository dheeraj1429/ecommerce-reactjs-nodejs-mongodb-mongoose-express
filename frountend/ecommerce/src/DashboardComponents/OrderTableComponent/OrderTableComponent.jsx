import React from 'react';

import './OrderTableComponent.css';

function OrderTableComponent({ data, style }) {
   return (
      <div
         className={
            !style
               ? 'row gx-0 table_heading_div py-3 px-2'
               : 'row gx-0 table_heading_div table_heading py-3 px-2'
         }
      >
         <div className="col-12 col-sm-12 col-md-1">
            <p>{data ? data.id : 'Order ID'}</p>
         </div>
         <div className="col-12 col-sm-12 col-md-2">
            <p>{data ? data.name : 'Billing Name'}</p>
         </div>
         <div className="col-12 col-sm-12 col-md-2">
            <p>{data ? data.date : 'Date'}</p>
         </div>
         <div className="col-12 col-sm-12 col-md-1">
            <p>{data ? data.total : 'Total'}</p>
         </div>
         <div className="col-12 col-sm-12 col-md-2 d-flex">
            <p>{data ? <div className="paid_div">{data.paid}</div> : 'Payment Status'}</p>
         </div>
         <div className="col-12 col-sm-12 col-md-2">
            {data ? (
               <div className="payment_div">
                  <img
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqey0wMlOt0Lr5_gn_mBIi9P27vOJzy6wnCRtSs2LJ0ttxGPcljARCIn1IVe77MiYbXXM&usqp=CAU"
                     alt=""
                  />
                  <p>{data.cart}</p>
               </div>
            ) : (
               <p>Payment Method</p>
            )}
         </div>
         <div className="col-12 col-sm-12 col-md-1 d-flex">
            {data ? (
               <div className="view_card_div">
                  <p>view cart</p>
               </div>
            ) : (
               <p>View Details</p>
            )}
         </div>
         <div className="col-12 col-sm-12 col-md-1">
            {data ? (
               <div className="action_div">
                  <i class="fa-solid fa-pen"></i>
                  <i class="fa-solid fa-trash-arrow-up"></i>
               </div>
            ) : (
               <p>Action</p>
            )}
         </div>
      </div>
   );
}

export default OrderTableComponent;
