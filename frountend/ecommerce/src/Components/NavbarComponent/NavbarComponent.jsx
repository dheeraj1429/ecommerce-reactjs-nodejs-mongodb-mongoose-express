import React, { useState } from 'react';
import ProductSearchBarComponent from '../ProductSearchBarComponent/ProductSearchBarComponent';
import NavbarIconsComponent from '../NavbarIconsComponent/NavbarIconsComponent';
import NavbarSmComponent from '../NavbarSmComponent/NavbarSmComponent';

import './NavbarComponent.css';

function NavbarComponent() {
  return (
    <div className="Navbar_div side_padding">
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-2">
            <h1 className="text-white logo">dukamarket..</h1>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <ProductSearchBarComponent />
          </div>
          <div className="col-12 col-sm-12 col-md-4 d-flex align-items-center justify-content-around">
            <NavbarIconsComponent icon={'fas fa-user'} title={'Sign In'} subTitle={'Create an Account'} link={'signin'} />
            <NavbarIconsComponent icon={'fas fa-heart'} title={'Favorite'} subTitle={'My Wishlist'} link={'mywishlist'} />
            <NavbarIconsComponent icon={'fas fa-shopping-bag'} title={'My Cart'} subTitle={'$0.00'} shop={true} />
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
