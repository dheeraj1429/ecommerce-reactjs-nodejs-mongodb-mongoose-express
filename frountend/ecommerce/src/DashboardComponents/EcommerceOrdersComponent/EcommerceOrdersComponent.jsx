import React from 'react';
import EditHeadingComponent from '../EditHeadingComponent/EditHeadingComponent';
import SearchBarComponent from '../../Components/SearchBarComponent/SearchBarComponent';
import OrderTableComponent from '../OrderTableComponent/OrderTableComponent';

import './EcommerceOrdersComponent.css';

function EcommerceOrdersComponent() {
   return (
      <div className="Product-orders p-3">
         <EditHeadingComponent heading={'Product Orders'} tab={'Ecommerce / Product Orders'} />

         <div className="orders_div">
            <div className="order_table_div p-3">
               <SearchBarComponent />

               <div className="orders_tables_div mt-4">
                  <OrderTableComponent style={true} />
                  <OrderTableComponent
                     style={false}
                     data={{
                        id: '#2124',
                        name: 'Dheeraj rawat',
                        date: '07 Oct, 2019',
                        total: '$400',
                        paid: 'Paid',
                        cart: 'Mastercard',
                     }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default EcommerceOrdersComponent;
