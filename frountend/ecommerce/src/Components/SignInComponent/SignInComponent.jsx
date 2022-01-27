import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FindUser } from '../../Redux/Action/action';
import AddProductInputComponent from '../../DashboardComponents/AddProductInputComponent/AddProductInputComponent';
import CustomButtonComponent from '../../DashboardComponents/CustomButtonComponent/CustomButtonComponent';

import './SignInComponent.css';

function SignInComponent() {
  const selector = useSelector((state) => state.userStoreData.UserLoginStatus);
  const dispatch = useDispatch();
  const [UserData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const ChangeInputHandler = function (e) {
    let name = e.target.name;
    let value = e.target.value;

    setUserData({ ...UserData, [name]: value });
  };

  const FindUserHandler = function () {
    const { name, email, password } = UserData;
    if (name && email && password) {
      dispatch(FindUser({ name, email, password }));
    }
  };

  // if (selector && selector.success == true) {
  //   navigation('/');
  // }

  return (
    <div className="signInContent">
      <h1 className="mb-5">Sign Up</h1>

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
      </div>

      <div className="mb-3">
        <CustomButtonComponent TextContent={'Sign Up'} btnCl={'addToCartBtnOne'} onClick={FindUserHandler} />
      </div>

      <p className="mb-5">
        Create an account
        <Link to="/account/signup">
          <span> Sign In</span>
        </Link>
      </p>
    </div>
  );
}

export default SignInComponent;
