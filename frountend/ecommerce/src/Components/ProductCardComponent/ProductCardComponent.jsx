import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
   addtoCard,
   showAddToCartPopup,
   addToSelected,
   addWishList,
   showPrevimage,
   showSelectedPrevImage,
   wishListAlert,
} from '../../Redux/Action/action';
import { useDispatch } from 'react-redux';
import { singleProductSelected } from '../../Redux/Action/action';
import CustomButtonComponent from '../../DashboardComponents/CustomButtonComponent/CustomButtonComponent';

import './ProductCardComponent.css';

function ProductCardComponent({ data, style }) {
   const dispatch = useDispatch();
   const [CardIcon, setCardIcon] = useState([
      { el: 'far fa-eye' },
      { el: 'far fa-heart' },
      { el: 'fas fa-shopping-bag' },
   ]);

   const StoreDataFunction = function (el) {
      if (el.el === 'fas fa-shopping-bag') {
         dispatch(addtoCard(Object.assign(data, { quntity: 1 })));
         dispatch(showAddToCartPopup(true));
         dispatch(addToSelected(data));
      } else if (el.el === 'far fa-heart') {
         dispatch(addWishList(Object.assign(data, { quntity: 1 })));
         dispatch(wishListAlert(data));
      } else if (el.el == 'far fa-eye') {
         dispatch(showPrevimage(true));
         dispatch(showSelectedPrevImage(data));
      }
   };

   const AddToCartHandler = function () {
      dispatch(addtoCard(Object.assign(data, { quntity: 1 })));
      dispatch(showAddToCartPopup(true));
      dispatch(addToSelected(data));
   };

   return (
      <div
         className={
            style ? `Product_card_div text-center ${style}` : 'Product_card_div text-center'
         }
      >
         <div className="iconsDiv">
            {CardIcon.map((el) => (
               <div className="hover_icons mb-3">
                  <i class={el.el} onClick={() => StoreDataFunction(el)}></i>
               </div>
            ))}
         </div>
         <div
            className="d-flex justify-content-center"
            onClick={() => dispatch(singleProductSelected(data))}
         >
            <Link
               to={{
                  pathname: `/shop/single-product`,
               }}
            >
               <img src={data.image[0].url} alt="" />
            </Link>
         </div>

         <div className="Product_card_content mt-3">
            <h3>{data.name.slice(0, 40)}..</h3>
            <div className="d-flex align-items-center  justify-content-center">
               <div>
                  {(() => {
                     let ar = [];
                     for (let i = 0; i < data.rating; i++) {
                        ar.push(i);
                     }
                     return ar.map((el) => <i class="fas fa-star" key={el}></i>);
                  })()}
               </div>
               <p>({data.reviews})</p>
            </div>

            <h4 className="price">
               <i class="fas fa-dollar-sign"></i>
               {data.price}
            </h4>

            <div className="button_div mt-3">
               <CustomButtonComponent
                  TextContent={'ADD TO CART'}
                  btnCl={'addToCartBtn'}
                  onClick={AddToCartHandler}
               />
            </div>
         </div>
      </div>
   );
}

export default ProductCardComponent;
