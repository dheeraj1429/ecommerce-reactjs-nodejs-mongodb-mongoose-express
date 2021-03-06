import React from 'react';
import { stayLoginUser } from '../../Redux/Action/action';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './NavbarIconsComponent.css';

function NavbarIconsComponent({ icon, title, subTitle, shop, link, onClick }) {
   const selector = useSelector((state) => state.userStoreData.AddToCart);
   const dispatch = useDispatch();

   const UserLogin = function () {
      localStorage.removeItem('userinfo');
      dispatch(stayLoginUser(null));
   };

   return (
      <div className="navbar_icons_div d-flex align-items-center">
         {shop ? (
            <div className="buy_icon">
               <div className="itme">
                  <p>{selector.length}</p>
               </div>
               {icon === 'fas fa-shopping-bag' ? <i class={icon} onClick={onClick ? onClick : null}></i> : <i class={icon}></i>}
            </div>
         ) : (
            <i class={icon}></i>
         )}

         <div className="ms-3">
            <p>{title}</p>
            {link ? (
               <Link to={subTitle == 'log out' ? '' : `/${link}`}>
                  <h3 onClick={subTitle == 'log out' ? UserLogin : null} className="mb-0">
                     {subTitle}
                  </h3>
               </Link>
            ) : (
               <h3 className="mb-0">{subTitle}</h3>
            )}
         </div>
      </div>
   );
}

export default NavbarIconsComponent;
