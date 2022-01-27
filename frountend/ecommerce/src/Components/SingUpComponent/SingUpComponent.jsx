import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../../Redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';
import AddProductInputComponent from '../../DashboardComponents/AddProductInputComponent/AddProductInputComponent';
import CustomButtonComponent from '../../DashboardComponents/CustomButtonComponent/CustomButtonComponent';

import './SingUpComponent.css';

function SingUpComponent() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userStoreData.UserLoginStatus);

  const [UserData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const ChangeInputHandler = function (e) {
    let name = e.target.name;
    let value = e.target.value;

    setUserData({ ...UserData, [name]: value });
  };

  const storeDataFunction = function () {
    const { name, email, password, confirmpassword } = UserData;
    if (name && email && password && confirmpassword) {
      dispatch(signIn({ name, email, password }));
    }
  };

  if (selector && selector.success == true) {
    navigation('/');
  }

  return (
    <div className="signInContent">
      <h1 className="mb-5">Sign In</h1>

      <div className="line_div mb-3">
        <div className="me-3"></div>
        <h3>Sign up with</h3>
      </div>

      <div className="sign_in_div  d-flex mb-2">
        <AddProductInputComponent name={'name'} type={'text'} Value={UserData.name} label={'Name'} style={'style2'} Change={ChangeInputHandler} />

        <AddProductInputComponent name={'email'} type={'email'} Value={UserData.email} label={'Email'} style={'style2'} Change={ChangeInputHandler} />
      </div>
      <div className="mb-4">
        <AddProductInputComponent
          name={'password'}
          Value={UserData.password}
          label={'Password'}
          style={'style2'}
          Change={ChangeInputHandler}
          type={'password'}
        />

        <AddProductInputComponent
          name={'confirmpassword'}
          Value={UserData.confirmpassword}
          label={'Confirm Password'}
          style={'style2'}
          Change={ChangeInputHandler}
          type={'password'}
        />
      </div>

      <div className="mb-3">
        <CustomButtonComponent TextContent={'Sign In'} btnCl={'addToCartBtnOne'} onClick={storeDataFunction} />
      </div>

      <p className="mb-5">
        Already have and account?
        <Link to="/account/login">
          <span> Sign Up</span>
        </Link>
      </p>
    </div>
  );
}

export default SingUpComponent;
