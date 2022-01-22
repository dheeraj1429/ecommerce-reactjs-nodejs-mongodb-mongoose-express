import React from 'react';
import CustomButtonComponent from '../../DashboardComponents/CustomButtonComponent/CustomButtonComponent';

import './HomePageBannerComponent.css';

function HomePageBannerComponent() {
  return (
    <div className="side_padding">
      <div className="container-fluid ">
        <div className="row py-3">
          <div className="col-12 col-sm-12 col-md-7">
            <div className="Home_page_banner_div d-flex align-items-center px-5">
              <div>
                <h1>
                  Gaming Pad <br /> With Lighting Effect
                </h1>
                <p className="mb-5">Wireless Connection With Tv. Computer, Laptop</p>

                <CustomButtonComponent TextContent={'DISCOVER NOW'} btnCl={'discover_btn'} />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-5">
            <img src="/image/bann.jpg" className="img-fluid" />
            <img src="/image/bann1.jpg" className="img-fluid mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageBannerComponent;
