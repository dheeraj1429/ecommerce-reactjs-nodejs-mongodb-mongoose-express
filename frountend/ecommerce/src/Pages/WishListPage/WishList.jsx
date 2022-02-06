import React from 'react';
import { useSelector } from 'react-redux';
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';
import FooterComponent from '../../Components/FooterComponent/FooterComponent';
import ProductListComponent from '../../Components/ProductsListComponent/ProductListComponent';

import './WishList.css';

function WishList() {
   const selector = useSelector((state) => state.userStoreData.WishListProducts);

   return (
      <div className="WishList_div">
         <NavbarComponent />

         <div className="wishlist_content py-5 side_padding">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-12 text-center">
                     <h1>My Wishlist</h1>
                  </div>

                  {selector !== [] && selector.length > 0 ? (
                     <div>
                        <div className="col-12 mt-4 heading_list">
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
                           </div>
                        </div>

                        {selector.map((el) => (
                           <ProductListComponent key={el._id} data={el} />
                        ))}
                     </div>
                  ) : null}
               </div>
            </div>
         </div>

         <FooterComponent />
      </div>
   );
}

export default WishList;
