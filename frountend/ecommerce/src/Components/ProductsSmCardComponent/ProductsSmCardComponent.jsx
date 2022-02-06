import React from 'react';
import { removeAddToCardProduct } from '../../Redux/Action/action';
import { useDispatch } from 'react-redux';
import './ProductsSmCardComponent.css';

function ProductsSmCardComponent({ data }) {
   const dispatch = useDispatch();

   return (
      <div className="car_sm_products">
         <img src={data.image[0].url} alt="" />

         <div className="d-flex">
            <div>
               <h1>{data.name.slice(0, 70)}..</h1>
               <p>
                  <i class="fas fa-dollar-sign"></i>
                  {data.price} <i className="fa fa-close"></i> {data.quntity}
               </p>
            </div>

            <i
               class="fa fa-close ms-4 delete_icon"
               onClick={() => dispatch(removeAddToCardProduct(data))}
            ></i>
         </div>
      </div>
   );
}

export default ProductsSmCardComponent;
