import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditHeadingComponent from '../EditHeadingComponent/EditHeadingComponent';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';
import ProductTableComponent from '../../Components/ProductTableComponent/ProductTableComponent';
import ReviewComponent from '../../Components/ReviewComponent/ReviewComponent';

import './ProductsDetailsComponent.css';

function ProductsDetailsComponent() {
  const [SelecteImg, setSelecteImg] = useState(null);
  const selector = useSelector((state) => state.userStoreData.ProductSelected);

  const ChangeImgFunction = function (e) {
    let target = e.target.src;
    setSelecteImg(target);
  };

  return (
    <div className="Product_edit p-4">
      <EditHeadingComponent heading={'Product Details'} tab={'Ecommerce / Product Details'} />

      {selector !== null && Object.keys(selector).includes('name') ? (
        <div className="row product_edit_inner_div p-4">
          <div className="col-12 d-flex">
            <div className="product_sm_images">
              {selector.galleryImage
                ? selector.galleryImage.map((el) => (
                    <div className="product_sm_images_div mb-3">
                      {el.img == '' ? null : <img src={el.img} alt="" onMouseEnter={ChangeImgFunction} />}
                    </div>
                  ))
                : null}
            </div>
            <div className="product_edit_content">
              {SelecteImg !== null ? (
                <img src={SelecteImg} alt="" className="product_main_img_two" />
              ) : (
                <img src={selector.image[0].url} className="product_main_img" alt="" />
              )}
            </div>
            <div className="product_edit_info_div">
              <p className="heading_para">{selector.category}</p>
              <h1>{selector.name}</h1>
              <div className="icons_divs d-flex mt-3">
                <div className="me-2">
                  {(() => {
                    let ar = [];
                    for (let i = 0; i < selector.rating; i++) {
                      ar.push(i);
                    }
                    return ar.map((el) => <i class="fas fa-star" key={Math.random() * 100}></i>);
                  })()}
                </div>
                <p>( 152 Customers Review )</p>
              </div>
              <h4 className="price_para mt-3">Price : ${selector.price} USD</h4>
              <p className="discription_para mt-3 mb-4">{selector.discription}</p>
              <CustomButtonComponent TextContent={'Edit'} btnCl={'eidt_products'} />
            </div>
          </div>

          <div className="Product_content_div mt-5 mb-4">
            <EditHeadingComponent heading={'Specifications :'} />
            <ProductTableComponent data={selector} />
            <EditHeadingComponent heading={'Reviews :'} />
            <ReviewComponent
              userProfile={'http://skote-v-light.svelte.themesbrand.com/assets/images/users/avatar-2.jpg'}
              data={{
                name: 'Dheeraj',
                comment: 'To an English person, it will seem like simplified English, as a skeptical Cambridge',
                time: '5 hrs ago',
              }}
            />
          </div>
        </div>
      ) : (
        <div className="products_selected text-center">
          <div>
            <h1>Now Products Selected..</h1>
            <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsDetailsComponent;
