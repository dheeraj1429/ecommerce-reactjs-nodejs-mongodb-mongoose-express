import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DashboardSmHeadingComponent from '../DashboardSmHeadingComponent/DashboardSmHeadingComponent';
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent';
import LoaderComponent from '../../Components/LoaderComponent/LoaderComponent';
import SearchBarComponent from '../../Components/SearchBarComponent/SearchBarComponent';

import './DashboardProductsComponent.css';

function DashboardProductsComponent() {
   const [SeachData, setSearchData] = useState('');
   const selector = useSelector((state) => state.userStoreData.allProducts);

   const ChangInputValue = function (e) {
      setSearchData(e.target.value);
   };

   let filterData;

   if (selector !== null && selector.success === true) {
      filterData = selector.AllProducts.filter((el) =>
         el.name.toLowerCase().includes(SeachData.toLowerCase())
      );
   }

   return (
      <div className="Products_div p-4">
         {selector !== null && selector.success === true ? (
            <>
               <div className="row">
                  <div className="col-12 col-sm-12">
                     <div className="Products_Content_div p-3">
                        <div className="d-flex align-items-center justify-content-between">
                           <DashboardSmHeadingComponent heading={'Products'} />
                           <SearchBarComponent onChange={ChangInputValue} Value={SeachData} />
                        </div>

                        <div className="py-3">
                           <div className="row">
                              {selector !== null && selector.success === true && filterData
                                 ? filterData.map(({ _id, ...otherProps }) => (
                                      <ProductCardComponent id={_id} {...otherProps} key={_id} />
                                   ))
                                 : null}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </>
         ) : (
            <LoaderComponent />
         )}
      </div>
   );
}

export default DashboardProductsComponent;
