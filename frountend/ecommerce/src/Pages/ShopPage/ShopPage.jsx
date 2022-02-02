import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';
import FooterComponent from '../../Components/FooterComponent/FooterComponent';
import EditHeadingComponent from '../../DashboardComponents/EditHeadingComponent/EditHeadingComponent';
import ProductCardComponent from '../../Components/ProductCardComponent/ProductCardComponent';

import './ShopPage.css';

function ShopPage() {
  const selector = useSelector((state) => state.userStoreData);
  const dispatch = useDispatch();

  return (
    <div className="ShopPage_div">
      <NavbarComponent />

      <div className="Shop_page_inner_div side_padding py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <EditHeadingComponent heading={`Home > Shop`} style={'single_page_heading'} />
            </div>
          </div>

          <div className="row py-5">
            <div className="col-12 col-sm-12 col-md-3">
              <EditHeadingComponent heading={'Shopping Options'} />

              <div className="shop_page_filter_div mt-4">{/* -------------------shop filres---------------- */}</div>
            </div>
            <div className="col-12 col-sm-12 col-md-9">
              <div className="Shop_product_div">
                <img
                  src="https://mageblueskytech.com/dukamarket/media/catalog/category/banner-shop-full-width.png"
                  className="img-fluid mb-4"
                  alt=""
                />

                <div className="shop_product_div_inner">
                  {selector.allProducts !== null && selector.allProducts.success === true
                    ? selector.allProducts.AllProducts.map((el) => <ProductCardComponent key={el._id} data={el} style={'style2'} />)
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default ShopPage;
