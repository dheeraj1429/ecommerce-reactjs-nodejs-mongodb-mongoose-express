import React from 'react';
import { useSelector } from 'react-redux';
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';
import EditHeadingComponent from '../../DashboardComponents/EditHeadingComponent/EditHeadingComponent';
import SingleProductCardComponent from '../../Components/SingleProductCardComponent/SingleProductCardComponent';

import './SingleProductPage.css';
import FooterComponent from '../../Components/FooterComponent/FooterComponent';

function SingleProductPage() {
  const selector = useSelector((state) => state.userStoreData.SingleProductSelected);
  return (
    <div className="Single_product_page">
      <NavbarComponent />

      <div className="side_padding py-3">
        {selector !== null && selector ? (
          <div className="container-fluid ">
            <div className="row mb-4">
              <EditHeadingComponent heading={`Home / ${selector.category}`} style={'single_page_heading'} />
            </div>
            {selector !== null && Object.keys(selector).includes('name') ? <SingleProductCardComponent data={selector} /> : null}
          </div>
        ) : null}
      </div>

      <FooterComponent />
    </div>
  );
}

export default SingleProductPage;
