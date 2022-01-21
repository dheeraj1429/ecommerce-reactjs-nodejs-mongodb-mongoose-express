import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../Redux/Action/action';
import { Outlet } from 'react-router';
import SideBarComponent from '../../DashboardComponents/SidebarComponent/SideBarComponent';

import './Dashboard.css';

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
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
