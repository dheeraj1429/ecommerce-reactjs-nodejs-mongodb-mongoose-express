import React, { useEffect } from 'react';
import { allBlogPost } from '../../Redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';
import BlogNgComponent from '../BlogNgComponent/BlogNgComponent';
import EditHeadingComponent from '../../DashboardComponents/EditHeadingComponent/EditHeadingComponent';

import './AllBlogPostComponent.css';

function AllBlogPostComponent() {
   const dispatch = useDispatch();
   const selector = useSelector((state) => state.userStoreData.AllBlogpost);

   useEffect(() => {
      dispatch(allBlogPost());
   }, []);

   return (
      <div className="all_post_div p-3">
         <EditHeadingComponent heading={'blog post'} tab={'Ecommerce / blog post'} />
         <div className="row mt-4 mb-4 px-4">
            {selector !== null && selector.blogRef && selector.blogRef.length > 0
               ? selector.blogRef.map((el) => (
                    <div className="col-12 col-sm-12 col-md-6 mb-4">
                       <BlogNgComponent key={el._id} data={el} />
                    </div>
                 ))
               : null}
         </div>
      </div>
   );
}

export default AllBlogPostComponent;
