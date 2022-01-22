import React, { useEffect } from 'react';
import { fetchAllProducts } from '../../Redux/Action/action';
import { useDispatch } from 'react-redux';
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';
import HomePageBannerComponent from '../../Components/HomePageBannerComponent/HomePageBannerComponent';
import ProductHeadingComponent from '../../Components/ProductHeadingComponent/ProductHeadingComponent';
import ProductCardComponent from '../../Components/ProductCardComponent/ProductCardComponent';

import './HomePage.css';

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div className="HomePage_div">
      <NavbarComponent />
      <HomePageBannerComponent />
      <ProductHeadingComponent heading={'Hot Trending Products'} link={'shop'} />

      <div className="side_padding">
        <div className="pt-2 pb-5 px-3 d-flex align-items-center">
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
