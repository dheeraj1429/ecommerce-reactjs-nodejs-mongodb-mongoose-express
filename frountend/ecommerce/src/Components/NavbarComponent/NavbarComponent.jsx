import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeSiderBar } from '../../Redux/Action/action';
import ProductSearchBarComponent from '../ProductSearchBarComponent/ProductSearchBarComponent';
import NavbarIconsComponent from '../NavbarIconsComponent/NavbarIconsComponent';
import NavbarSmComponent from '../NavbarSmComponent/NavbarSmComponent';

import './NavbarComponent.css';

function NavbarComponent() {
  const [PriceData, setPriceData] = useState(0);
  const selector = useSelector((state) => state.userStoreData);
  const dispatch = useDispatch();

  const ShowSideBar = function () {
    dispatch(closeSiderBar(true));
  };

  useEffect(() => {
    if (selector.AddToCart.length > 0) {
      const data = selector.AddToCart.map((el) => el.totalPrice).reduce((acc, crv) => acc + crv);
      setPriceData(data);
    }
  }, [selector.AddToCart]);

  return (
    <div className="Navbar_div side_padding">
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-2">
            <Link to="/">
              <h1 className="text-white logo">dukamarket..</h1>
            </Link>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <ProductSearchBarComponent />
          </div>
          <div className="col-12 col-sm-12 col-md-4 d-flex align-items-center justify-content-around">
            <NavbarIconsComponent icon={'fas fa-user'} title={'Sign In'} subTitle={'Create an Account'} link={'account/login'} />
            <NavbarIconsComponent icon={'fas fa-heart'} title={'Favorite'} subTitle={'My Wishlist'} link={'mywishlist'} />
            <NavbarIconsComponent
              icon={'fas fa-shopping-bag'}
              title={'My Cart'}
              subTitle={`$${PriceData == 0 ? '0.00' : PriceData}`}
              shop={true}
              onClick={ShowSideBar}
            />
          </div>
        </div>

        <div className="row mt-4 nav_sm_div">
          <NavbarSmComponent />
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
