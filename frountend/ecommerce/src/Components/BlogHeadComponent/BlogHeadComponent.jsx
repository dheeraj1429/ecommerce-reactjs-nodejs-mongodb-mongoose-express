import React from 'react';
import { useSelector } from 'react-redux';
import BlogPostComponent from '../BlogPostComponent/BlogPostComponent';
import SpnnerComponent from '../SpnnerComponent/SpnnerComponent';

import './BlogHeadComponent.css';

function BlogHeadComponent() {
   const selector = useSelector((state) => state.userStoreData);

   return (
      <div className="blog_banner_section py-5 side_padding">
         <div className="container-fluid">
            <div className="row mb-5">
               {selector.AllBlogpost !== null && selector.AllBlogpost.blogRef.length > 0 ? (
                  selector.AllBlogpost.blogRef.map((el) => (
                     <BlogPostComponent key={el._id} data={el} />
                  ))
               ) : (
                  <div className="loader_div">
                     <SpnnerComponent />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default BlogHeadComponent;
