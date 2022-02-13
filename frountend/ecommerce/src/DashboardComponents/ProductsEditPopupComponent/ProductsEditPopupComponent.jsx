import React, { useState, useEffect } from 'react';
import { updateProducts, removeUpdateInfo, showPropductEditPopup } from '../../Redux/Action/action';
import { useSelector, useDispatch } from 'react-redux';
import AddProductInputComponent from '../AddProductInputComponent/AddProductInputComponent';
import DashboardDropDownComponent from '../DashboardDropDownComponent/DashboardDropDownComponent';
import DashboardTextAriaComponent from '../DashBoardTextAriaComponent/DashboardTextAriaComponent';
import DashboardSmHeadingComponent from '../DashboardSmHeadingComponent/DashboardSmHeadingComponent';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';

import './ProductsEditPopupComponent.css';

function ProductsEditPopupComponent() {
   const selector = useSelector((state) => state.userStoreData);
   const dispatch = useDispatch();

   const [UploadProduct, setUploadProduct] = useState({
      name: '',
      category: '',
      gender: '',
      stock: '',
      brand: '',
      review: '',
      discription: '',
      price: '',
      rating: '',
      image: '',
      galleryImageOne: '',
      galleryImageTwo: '',
      id: '',
   });

   useEffect(() => {
      if (selector.ProductSelected !== null) {
         setUploadProduct({
            name: selector.ProductSelected.name,
            category: selector.ProductSelected.category,
            gender: selector.ProductSelected.gender,
            stock: selector.ProductSelected.stock,
            brand: selector.ProductSelected.brand,
            review: selector.ProductSelected.review,
            discription: selector.ProductSelected.discription,
            price: selector.ProductSelected.price,
            rating: selector.ProductSelected.rating,
            image: selector.ProductSelected.image[0].url,
            galleryImageOne: selector.ProductSelected.galleryImageOne,
            galleryImageTwo: selector.ProductSelected.galleryImageTwo,
            id: selector.ProductSelected.id,
         });
      }
   }, [selector.ProductSelected]);

   const ChangeInputValueFunction = function (e) {
      let name = e.target.name;
      let value = e.target.value;

      setUploadProduct({ ...UploadProduct, [name]: value });
   };

   const UpdateProductData = function () {
      dispatch(updateProducts(UploadProduct));
   };

   useEffect(() => {
      if (selector.ProductUpdate !== null) {
         if (selector.ProductUpdate.success == true) {
            alert(selector.ProductUpdate.message);
            dispatch(removeUpdateInfo(null));
            dispatch(showPropductEditPopup(false));
         }
      }
   }, [selector.ProductUpdate]);

   return (
      <div
         className={
            !selector.ShowProductEditPopUp
               ? 'Product_edit_div Product_edit_div_hide'
               : 'Product_edit_div '
         }
      >
         {selector.ProductSelected !== null &&
         Object.keys(selector.ProductSelected).includes('name') ? (
            <div className="Product_edit_inner_div">
               <i
                  class="fa-solid fa-xmark close"
                  onClick={() => dispatch(showPropductEditPopup(false))}
               ></i>

               <div className="container py-3">
                  <div className="row">
                     <div className="col-12">
                        <div className="d-flex">
                           <AddProductInputComponent
                              name={'name'}
                              type={'text'}
                              label={'Product Name'}
                              Value={UploadProduct.name}
                              Change={ChangeInputValueFunction}
                           />
                           <AddProductInputComponent
                              name={'category'}
                              type={'text'}
                              label={'Category'}
                              Value={UploadProduct.category}
                              Change={ChangeInputValueFunction}
                           />
                           <AddProductInputComponent
                              name={'brand'}
                              type={'text'}
                              label={'brand'}
                              Value={UploadProduct.brand}
                              Change={ChangeInputValueFunction}
                           />
                        </div>
                     </div>
                  </div>

                  <div className="row">
                     <div className="col-12 col-sm-12 col-md-6">
                        <AddProductInputComponent
                           name={'price'}
                           type={'number'}
                           label={'price'}
                           Value={UploadProduct.price}
                           Change={ChangeInputValueFunction}
                        />
                        <DashboardDropDownComponent
                           name={'gender'}
                           label={'gender'}
                           Data={[{ el: 'Women' }, { el: 'Men' }, { el: 'Both' }]}
                           Value={UploadProduct.gender}
                           Change={ChangeInputValueFunction}
                        />
                     </div>
                     <div className="col-12 col-sm-12 col-md-6">
                        <DashboardTextAriaComponent
                           name={'discription'}
                           label={'Product Description'}
                           Value={UploadProduct.discription}
                           Change={ChangeInputValueFunction}
                        />
                     </div>
                  </div>

                  <div className="dashBoard_card_div mt-4">
                     <div className="col-12 p-4">
                        <DashboardSmHeadingComponent heading={'Products Image'} />

                        <div className="image_upload_div mt-4">
                           <div>
                              <i class="far fa-file-image mb-3"></i>
                              <p>Drop files here or click to upload.</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="dashBoard_card_div mt-4">
                     <div className="col-12 p-4">
                        <DashboardSmHeadingComponent
                           heading={'Meta Data'}
                           subTitel={'Fill all information below'}
                        />
                        <div className="row">
                           <div className="d-flex">
                              <DashboardDropDownComponent
                                 name={'stock'}
                                 label={'stock'}
                                 Value={UploadProduct.stock}
                                 Data={[
                                    { el: 10 },
                                    { el: 50 },
                                    { el: 100 },
                                    { el: 200 },
                                    { el: 500 },
                                    { el: 1000 },
                                 ]}
                                 Change={ChangeInputValueFunction}
                              />
                              <DashboardDropDownComponent
                                 name={'review'}
                                 label={'review'}
                                 Data={[{ el: 0 }, { el: 1 }, { el: 2 }, { el: 4 }, { el: 5 }]}
                                 Value={UploadProduct.review}
                                 Change={ChangeInputValueFunction}
                              />
                           </div>

                           <div className="d-flex">
                              <AddProductInputComponent
                                 name={'image'}
                                 type={'text'}
                                 label={'image'}
                                 Value={UploadProduct.image}
                                 Change={ChangeInputValueFunction}
                              />
                              <AddProductInputComponent
                                 name={'galleryImageOne'}
                                 type={'text'}
                                 label={'image'}
                                 Value={UploadProduct.galleryImageOne}
                                 Change={ChangeInputValueFunction}
                              />
                              <AddProductInputComponent
                                 name={'galleryImageTwo'}
                                 type={'text'}
                                 label={'image'}
                                 Value={UploadProduct.galleryImageTwo}
                                 Change={ChangeInputValueFunction}
                              />
                           </div>

                           <div className="py-3 px-3 d-flex">
                              <CustomButtonComponent
                                 btnCl={'Save_change'}
                                 TextContent={'Update Product'}
                                 onClick={UpdateProductData}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ) : null}
      </div>
   );
}

export default ProductsEditPopupComponent;
