import React from 'react';
import { Outlet } from 'react-router';

import './SingInAndLoginComponent.css';

function SingInAndLoginComponent() {
  return (
    <div className="LogInAndSignIn_Div">
      <div className="container py-5 ">
        <div className="row signInCard_div">
          <div className="col-12 col-sm-12 col-md-6 pt-4 px-5">
            <Outlet />
          </div>
          <div className="col-12 col-sm-12 col-md-6 imageDiv"></div>
        </div>
      </div>
    </div>
  );
}

export default SingInAndLoginComponent;
