import React, { useState, useEffect } from 'react';
import { changeUserInfo } from '../../Redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';
import DashboardDropDownComponent from '../DashboardDropDownComponent/DashboardDropDownComponent';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';

import './UserLoginStatusComponent.css';

function UserLoginStatusComponent({ data }) {
  const dispatch = useDispatch();
  const [UserDbInfo, setUserDbInfo] = useState({
    isAdmin: '',
  });

  const ChangeInputValue = function (e) {
    let name = e.target.name;
    let value = e.target.value;

    setUserDbInfo({ ...UserDbInfo, [name]: value });
  };

  useEffect(() => {
    if (data) {
      setUserDbInfo({ isAdmin: data.isAdmin });
    }
  }, [data]);

  const ChangeUserInfo = function () {
    dispatch(changeUserInfo(Object.assign({ id: data._id, name: data.name, UserDbInfo })));
  };

  return (
    <div className="allUserLogin_div">
      {data ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-1 d-flex align-items-center">
              <p className="mb-0">{data.name}</p>
            </div>
            <div className="col-12 col-sm-12 col-md-4 d-flex align-items-center">
              <p className="mb-0">{data.email}</p>
            </div>
            <div className="col-12 col-sm-12 col-md-2">
              <img src="https://www.typeroom.eu/assets/original/2020/10/09/gmail_new_logo_typeroom.jpg" alt="" />
            </div>

            <div className="col-12 col-sm-12 col-md-2 d-flex align-items-center">
              <p className="mb-0">{data._id}</p>
            </div>
            <div className="col-12 col-sm-12 col-md-1 d-flex align-items-center">
              <DashboardDropDownComponent
                Data={[{ el: 'admin' }, { el: 'user' }, { el: 'manager' }]}
                Value={UserDbInfo.isAdmin}
                name={'isAdmin'}
                Change={ChangeInputValue}
                style={'drop_down_style'}
              />
            </div>
            <div className="col-12 col-sm-12 col-md-2 d-flex align-items-center justify-content-center">
              <CustomButtonComponent TextContent={'Update'} btnCl={'update_userBtn'} onClick={ChangeUserInfo} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default UserLoginStatusComponent;
