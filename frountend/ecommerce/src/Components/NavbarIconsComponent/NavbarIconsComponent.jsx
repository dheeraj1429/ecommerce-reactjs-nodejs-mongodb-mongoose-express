import React from 'react';
import { Link } from 'react-router-dom';

import './NavbarIconsComponent.css';

function NavbarIconsComponent({ icon, title, subTitle, shop, link }) {
  return (
    <div className="navbar_icons_div d-flex align-items-center">
      {shop ? (
        <div className="buy_icon">
          <div className="itme">
            <p>1</p>
          </div>
          <i class={icon}></i>
        </div>
      ) : (
        <i class={icon}></i>
      )}

      <div className="ms-3">
        <p>{title}</p>
        {link ? (
          <Link to={link}>
            <h3 className="mb-0">{subTitle}</h3>
          </Link>
        ) : (
          <h3 className="mb-0">{subTitle}</h3>
        )}
      </div>
    </div>
  );
}

export default NavbarIconsComponent;
