import React, { useEffect } from 'react';
import { fetchAllProducts } from '../../Redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';
import HomePageBannerComponent from '../../Components/HomePageBannerComponent/HomePageBannerComponent';
import ProductHeadingComponent from '../../Components/ProductHeadingComponent/ProductHeadingComponent';
import ProductCardComponent from '../../Components/ProductCardComponent/ProductCardComponent';
import AddToCartPopUpComponent from '../../Components/AddToCartPopUpComponent/AddToCartPopUpComponent';
import FlashDealComponent from '../../Components/FlashDealComponent/FlashDealComponent';
import FooterComponent from '../../Components/FooterComponent/FooterComponent';

import './HomePage.css';

function HomePage() {
  const selector = useSelector((state) => state.userStoreData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    infinite: true,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="HomePage_div">
      <NavbarComponent />
      <HomePageBannerComponent />

      <ProductHeadingComponent heading={'Flash Deals'} link={'shop'} />
      <div className="Flash_deal_div">
        <div className="pt-2 pb-4">
          <FlashDealComponent />
        </div>
      </div>

      <ProductHeadingComponent heading={'Hot Trending Products'} link={'shop'} />
      <div className="side_padding">
        <div className="pt-2 pb-4 px-3">
          <Slider {...settings}>
            {selector.allProducts !== null && selector.allProducts.success === true
              ? selector.allProducts.AllProducts.map((el) => <ProductCardComponent key={el._id} data={el} />)
              : null}
          </Slider>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default HomePage;
