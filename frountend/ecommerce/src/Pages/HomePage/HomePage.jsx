import React, { useEffect } from 'react';
import { fetchAllProducts } from '../../Redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';
import HomePageBannerComponent from '../../Components/HomePageBannerComponent/HomePageBannerComponent';
import ProductHeadingComponent from '../../Components/ProductHeadingComponent/ProductHeadingComponent';
import ProductCardComponent from '../../Components/ProductCardComponent/ProductCardComponent';

import './HomePage.css';

function HomePage() {
  const selector = useSelector((state) => state.userStoreData.allProducts);
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
          {selector !== null && selector.success === true
            ? selector.AllProducts.slice(0, 7).map((el) => <ProductCardComponent key={el._id} data={el} />)
            : null}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
