import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../Redux/Action/action';
import { Outlet } from 'react-router';
import SideBarComponent from '../../DashboardComponents/SidebarComponent/SideBarComponent';

import './Dashboard.css';

function Dashboard() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userStoreData);

  useEffect(() => {
    dispatch(fetchAllProducts());
    const userInfo = localStorage.getItem('userinfo');

    if (userInfo) {
      const userData = JSON.parse(userInfo);

      if (userData.data.admin == 'user') {
        navigation('/');
      }
    } else {
      navigation('/account/signup');
    }
  }, []);

  return (
    <div className="userDashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 p-0">
            <SideBarComponent />
          </div>
          <div className="col-12 col-sm-12 col-md-10 col-lg-10 p-0">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
