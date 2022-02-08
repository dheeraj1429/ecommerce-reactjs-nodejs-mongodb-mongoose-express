import React from 'react';
import { useSelector } from 'react-redux';
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';
import FooterComponent from '../../Components/FooterComponent/FooterComponent';
import ProductListComponent from '../../Components/ProductsListComponent/ProductListComponent';
import OrderCartComponent from '../../Components/OrderCartComponent/OrderCartComponent';

import './CartPage.css';

function CartPage() {
   const selector = useSelector((state) => state.userStoreData);

   return (
      <div className="Cart_div">
         <NavbarComponent />

         <div className="wishlist_content py-5 side_padding">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-12 text-center">
                     <h1>My Cart</h1>
                  </div>
               </div>

               {selector.AddToCart !== [] && selector.AddToCart.length > 0 ? (
                  <div className="row">
                     <div className="col-12 col-sm-12 col-md-8 mt-4 heading_list">
                        <div className="row">
                           <div className="col-12 col-sm-12 col-md-6">
                              <h3>Item</h3>
                           </div>
                           <div className="col-12 col-sm-12 col-md-2">
                              <h4>Price</h4>
                           </div>
                           <div className="col-12 col-sm-12 col-md-2">
                              <h4>Quntity</h4>
                           </div>

                           {selector.AddToCart.map((el) => (
                              <ProductListComponent key={el._id} data={el} show={false} />
                           ))}
                        </div>
                     </div>

                     <div className="col-12 col-sm-12 col-md-4">
                        <OrderCartComponent data={selector.AddToCart} />
                     </div>
                  </div>
               ) : null}
            </div>
         </div>

         <FooterComponent />
      </div>
   );
}

export default CartPage;
