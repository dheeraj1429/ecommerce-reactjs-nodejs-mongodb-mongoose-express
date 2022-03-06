import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendNewsletter } from '../../Redux/Action/action';
import { useNavigate } from 'react-router-dom';

import './NewsLetterComponent.css';

function NewsLetterComponent() {
   const selector = useSelector((state) => state.userStoreData.UserLoginStatus);
   const navigation = useNavigate();

   const [Email, setEmail] = useState({
      emailaddress: '',
   });
   const dispatch = useDispatch();

   const ChangeUserEmail = function (e) {
      const target = e.target.value;
      setEmail({ emailaddress: target });
   };

   const sendMail = function (e) {
      if (selector !== null) {
         e.preventDefault();
         const { emailaddress } = Email;

         if (emailaddress && selector.data.email === emailaddress) {
            dispatch(sendNewsletter(emailaddress));
         } else {
            alert('worng email');
         }
      } else {
         navigation('/account/login');
      }
   };

   return (
      <div class="subscribe-form">
         <form>
            <input type="text" placeholder="Email Address" onChange={ChangeUserEmail} />
            <button onClick={sendMail}>
               <i class="fab fa-telegram-plane"></i>
            </button>
         </form>
      </div>
   );
}

export default NewsLetterComponent;
