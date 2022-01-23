import React, { useEffect } from 'react';
import { fetchAllProducts } from '../../Redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';
import SideBarComponent from '../../Components/SideBarComponent/SideBarComponent';
import HomePageBannerComponent from '../../Components/HomePageBannerComponent/HomePageBannerComponent';
import ProductHeadingComponent from '../../Components/ProductHeadingComponent/ProductHeadingComponent';
import ProductCardComponent from '../../Components/ProductCardComponent/ProductCardComponent';
import AddToCartPopUpComponent from '../../Components/AddToCartPopUpComponent/AddToCartPopUpComponent';

import './HomePage.css';

function HomePage() {
  const selector = useSelector((state) => state.userStoreData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div className="HomePage_div">
      <NavbarComponent />
      <SideBarComponent />
      <HomePageBannerComponent />
      <AddToCartPopUpComponent isActive={selector.showAddToCardPopUp} />
      <ProductHeadingComponent heading={'Hot Trending Products'} link={'shop'} />

      <div className="side_padding">
        <div className="pt-2 pb-5 px-3 d-flex align-items-center">
          {selector.allProducts !== null && selector.allProducts.success === true
            ? selector.allProducts.AllProducts.slice(0, 7).map((el) => <ProductCardComponent key={el._id} data={el} />)
            : null}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
