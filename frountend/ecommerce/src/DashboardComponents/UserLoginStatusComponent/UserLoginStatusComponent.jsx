import React from 'react';

import './UserLoginStatusComponent.css';

function UserLoginStatusComponent({ data }) {
  return (
    <div className="allUserLogin_div">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-2 d-flex align-items-center">
            <p className="mb-0">{data.name}</p>
          </div>
          <div className="col-12 col-sm-12 col-md-3 d-flex align-items-center">
            <p className="mb-0">{data.email}</p>
          </div>
          <div className="col-12 col-sm-12 col-md-2 d-flex align-items-center justify-content-center">
            <img src="https://www.typeroom.eu/assets/original/2020/10/09/gmail_new_logo_typeroom.jpg" alt="" />
          </div>

          <div className="col-12 col-sm-12 col-md-3 d-flex align-items-center">
            <p className="mb-0">{data._id}</p>
          </div>
          <div className="col-12 col-sm-12 col-md-1 d-flex align-items-center">
            <p className="mb-0">{data.isAdmin}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLoginStatusComponent;
