import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './NavbarSmComponent.css';

function NavbarSmComponent() {
  const [NavbarContent, setNavbarContent] = useState([{ el: 'HOME' }, { el: 'SHOP' }, { el: 'BLOG' }, { el: 'ABOUT US' }]);
  return (
    <>
      <div className="col-12 nav_sm_inner_div col-sm-12 col-md-2 d-flex justify-content-center align-items-center text-white">
        <i className="fa fa-bars"></i>
        <h4 className="mb-0 ms-3">SHOP BY DEPARTMENT</h4>
      </div>
      <div className="col-12 col-sm-12 col-md-10 d-flex align-items-center">
        {NavbarContent.map((el) => (
          <div className="px-3 navb_tabs" key={el.el}>
            {
              <Link to={el.el === 'HOME' ? '/' : el.el.toLowerCase()}>
                <h4 className="mb-0 text-white">{el.el}</h4>
              </Link>
            }
          </div>
        ))}
      </div>
    </>
  );
}

export default NavbarSmComponent;
