import React, { useState } from 'react';
import CustomButtonComponent from '../../DashboardComponents/CustomButtonComponent/CustomButtonComponent';
import AddProductInputComponent from '../../DashboardComponents/AddProductInputComponent/AddProductInputComponent';
import { userForgetPassword } from '../../Redux/Action/action';
import { useDispatch } from 'react-redux';

import './ForgetPasswordComponent.css';

function ForgetPasswordComponent() {
   const dispatch = useDispatch();
   const [Email, setEmail] = useState({
      userEmail: '',
   });

   const ChangeInputValue = function (e) {
      const target = e.target.value;
      setEmail({ userEmail: target });
   };

   const resetPassword = function () {
      const { userEmail } = Email;

      if (userEmail) {
         dispatch(userForgetPassword(userEmail));
      }
   };

   return (
      <div className="forget_password_div">
         <div className="forget_password_inner_div p-4 text-center">
            <div className="d-flex justify-content-center">
               <div className="forget_password_icon_div">
                  <i class="fas fa-key"></i>
               </div>
            </div>
            <h4 className="mt-2">Forgetting password request</h4>
            <p className="mt-4 mb-4">
               it seems you forget the password for your table account. You can change your password
               by clicking the button
            </p>
            <AddProductInputComponent
               name={'name'}
               type={'text'}
               label={'Email Address'}
               Change={ChangeInputValue}
            />

            <div className="m-3">
               <CustomButtonComponent
                  btnCl={'Save_change'}
                  TextContent={'Add Product'}
                  onClick={resetPassword}
               />
            </div>
         </div>
      </div>
   );
}

export default ForgetPasswordComponent;
