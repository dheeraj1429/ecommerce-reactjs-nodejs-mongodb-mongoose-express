import React, { useEffect } from 'react';
import { getAllInfoAboutUser } from '../../Redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';
import SearchBarComponent from '../../Components/SearchBarComponent/SearchBarComponent';
import UserLoginStatusComponent from '../UserLoginStatusComponent/UserLoginStatusComponent';
import SpnnerComponent from '../../Components/SpnnerComponent/SpnnerComponent';

import './LoginUserComponent.css';

function LoginUserComponent() {
  const dipatch = useDispatch();
  const selector = useSelector((state) => state.userStoreData);

  useEffect(() => {
    dipatch(getAllInfoAboutUser());
  }, []);

  return (
    <div className="User_All_login_div">
      {selector && selector.AllAppUsersInfo ? (
        <div className="UserInfoDiv px-4">
          <SearchBarComponent />
          {selector.AllAppUsersInfo.map((el) => (
            <UserLoginStatusComponent key={el._id} data={el} />
          ))}
        </div>
      ) : (
        <SpnnerComponent />
      )}
    </div>
  );
}

export default LoginUserComponent;
