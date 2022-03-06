import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { resetUserPassword, resetUserPasswordSetting } from '../../Redux/Action/action';
import AddProductInputComponent from '../../DashboardComponents/AddProductInputComponent/AddProductInputComponent';
import CustomButtonComponent from '../../DashboardComponents/CustomButtonComponent/CustomButtonComponent';

import './ResetPassword.css';

function ForgetPassword() {
   const params = useParams();
   const selector = useSelector((state) => state.userStoreData.UserResetPassword);
   const navigation = useNavigate();

   const [UserPass, setUserPass] = useState({
      password: '',
      confirmPassword: '',
   });

   const dispatch = useDispatch();

   const changeUserPassword = function (e) {
      let name = e.target.name;
      let value = e.target.value;

      setUserPass({ ...UserPass, [name]: value });
   };

   const sendResetRequest = function () {
      const { password, confirmPassword } = UserPass;

      if (password && confirmPassword) {
         if (password === confirmPassword) {
            dispatch(resetUserPassword(Object.assign({ password: password }, { id: params.id })));
         } else {
            alert('password and confirm password is not same');
         }
      } else {
         alert('fill the form');
      }
   };

   if (selector !== null && selector.success === true) {
      navigation('/account/login');
      dispatch(resetUserPasswordSetting());
   }

   return (
      <div className="Reset_password_div">
         <div className="reset_password_inner p-4 text-center">
            <h4 className="mt-2">Reset password request</h4>
            <p className="mt-4">
               You recently requested to reset your password for your account. Use the button bellow
               to reset it.
            </p>
            <AddProductInputComponent
               name={'password'}
               type={'password'}
               label={'New Password'}
               Change={changeUserPassword}
            />
            <AddProductInputComponent
               name={'confirmPassword'}
               type={'password'}
               label={'Confirm New Password'}
               Change={changeUserPassword}
            />

            <div className="mt-4">
               <CustomButtonComponent
                  btnCl={'Save_change'}
                  TextContent={'Add Product'}
                  onClick={sendResetRequest}
               />
            </div>
         </div>
      </div>
   );
}

export default ForgetPassword;
