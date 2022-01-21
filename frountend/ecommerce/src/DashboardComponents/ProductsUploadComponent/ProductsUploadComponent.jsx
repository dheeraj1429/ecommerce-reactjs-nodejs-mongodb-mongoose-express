import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, productDataInfo } from '../../Redux/Action/action';
import EditHeadingComponent from '../EditHeadingComponent/EditHeadingComponent';
import AddProductInputComponent from '../AddProductInputComponent/AddProductInputComponent';
import DashboardDropDownComponent from '../DashboardDropDownComponent/DashboardDropDownComponent';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';
import DashboardSmHeadingComponent from '../DashboardSmHeadingComponent/DashboardSmHeadingComponent';
import DashboardTextAriaComponent from '../DashBoardTextAriaComponent/DashboardTextAriaComponent';

import './ProductsUploadComponent.css';

function ProductsUploadComponent() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userStoreData);

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
  });

  const ChangeInputValue = function (e) {
    let name = e.target.name;
    let value = e.target.value;

    setUploadProduct({ ...UploadProduct, [name]: value });
  };

  const SendData = function () {
    const { name, category, gender, stock, brand, review, discription, price, image, galleryImageOne, galleryImageTwo } = UploadProduct;
    dispatch(
      addProduct({
        name,
        category,
        gender,
        stock,
        brand,
        review,
        discription,
        price,
        image: {
          url: image,
        },
        galleryImage: [
          {
            img: galleryImageOne,
          },
          {
            img: galleryImageTwo,
          },
        ],
      })
    );
  };

  const removeAllInfo = function () {
    if (selector.ProductRefStatus !== null && selector.ProductRefStatus.success === true) {
      alert('product added');
      dispatch(productDataInfo());
    } else if (selector.ProductRefStatus !== null && selector.ProductRefStatus.success === false) {
      alert(selector.ProductRefStatus.message);
      dispatch(productDataInfo());
    }
  };

  removeAllInfo();

  const ClearFildes = function () {
    setUploadProduct({
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
    });
  };

  return (
    <div className="Products_upload_div p-4">
      <EditHeadingComponent heading={'Add Product'} tab={'Ecommerce / Add Product'} />

      <div className="row uploadProducts_inner_div">
        <div className="dashBoard_card_div py-3">
          <div className="col-12 p-4">
            <DashboardSmHeadingComponent heading={'Basic Information'} subTitel={'Fill all information below'} />
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="d-flex">
                  <AddProductInputComponent name={'name'} type={'text'} label={'Product Name'} Value={UploadProduct.name} Change={ChangeInputValue} />
                  <AddProductInputComponent
                    name={'category'}
                    type={'text'}
                    label={'Category'}
                    Value={UploadProduct.category}
                    Change={ChangeInputValue}
                  />
                  <AddProductInputComponent name={'brand'} type={'text'} label={'brand'} Value={UploadProduct.brand} Change={ChangeInputValue} />
                </div>

                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6">
                    <AddProductInputComponent name={'price'} type={'number'} label={'price'} Value={UploadProduct.price} Change={ChangeInputValue} />
                    <DashboardDropDownComponent
                      name={'gender'}
                      label={'gender'}
                      Data={[{ el: 'Women' }, { el: 'Men' }, { el: 'Both' }]}
                      Value={UploadProduct.gender}
                      Change={ChangeInputValue}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6">
                    <DashboardTextAriaComponent
                      name={'discription'}
                      label={'Product Description'}
                      Value={UploadProduct.discription}
                      Change={ChangeInputValue}
                    />
                  </div>
                </div>
              </div>
            </div>
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
            <DashboardSmHeadingComponent heading={'Meta Data'} subTitel={'Fill all information below'} />
            <div className="row">
              <div className="d-flex">
                <DashboardDropDownComponent
                  name={'stock'}
                  label={'stock'}
                  Data={[{ el: 10 }, { el: 50 }, { el: 100 }, { el: 200 }, { el: 500 }, { el: 1000 }]}
                  Value={UploadProduct.stock}
                  Change={ChangeInputValue}
                />
                <DashboardDropDownComponent
                  name={'review'}
                  label={'review'}
                  Data={[{ el: 0 }, { el: 1 }, { el: 2 }, { el: 4 }, { el: 5 }]}
                  Value={UploadProduct.review}
                  Change={ChangeInputValue}
                />
              </div>

              <div className="d-flex">
                <AddProductInputComponent name={'image'} type={'text'} label={'image'} Value={UploadProduct.image} Change={ChangeInputValue} />
                <AddProductInputComponent
                  name={'galleryImageOne'}
                  type={'text'}
                  label={'image'}
                  Value={UploadProduct.galleryImageOne}
                  Change={ChangeInputValue}
                />
                <AddProductInputComponent
                  name={'galleryImageTwo'}
                  type={'text'}
                  label={'image'}
                  Value={UploadProduct.galleryImageTwo}
                  Change={ChangeInputValue}
                />
              </div>

              <div className="py-3 px-3 d-flex">
                <CustomButtonComponent btnCl={'Save_change'} TextContent={'Add Product'} onClick={SendData} />
                <div className="ms-2">
                  <CustomButtonComponent btnCl={'Clear'} TextContent={'Clear'} onClick={ClearFildes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsUploadComponent;
