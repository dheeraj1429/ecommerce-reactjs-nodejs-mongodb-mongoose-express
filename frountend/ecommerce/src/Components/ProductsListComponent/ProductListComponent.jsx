import React from 'react';
import CustomButtonComponent from '../../DashboardComponents/CustomButtonComponent/CustomButtonComponent';
import { addtoCard, removeWishlistProduct } from '../../Redux/Action/action';
import { useDispatch } from 'react-redux';

import './ProductListComponent.css';

function ProductListComponent({ data }) {
   const dispatch = useDispatch();

   return (
      <div className="col-12 product_dis">
         <div className="row d-flex align-items-center">
            <div className="col-12 col-sm-12 col-md-6">
               <div className="products_image">
                  <div className="product_content d-flex align-items-center">
                     <i
                        class="far fa-trash-alt"
                        onClick={() => dispatch(removeWishlistProduct(data))}
                     ></i>
                     <img src={data.image[0].url} alt="" className="ms-3 me-3" />

                     <h4>{data.name}</h4>
                  </div>
               </div>
            </div>
            <div className="col-12 col-sm-12 col-md-2">
               <h3>
                  <i class="fas fa-dollar-sign"></i> {data.price}
               </h3>
            </div>
            <div className="col-12 col-sm-12 col-md-2">
               <h3>{data.quntity}</h3>
            </div>
            <div className="col-12 col-sm-12 col-md-2">
               <CustomButtonComponent
                  TextContent={'Add to cart'}
                  btnCl={'addToCartBtnOne'}
                  onClick={() => dispatch(addtoCard(data))}
               />
            </div>
         </div>
      </div>
   );
}

export default ProductListComponent;
