import React from 'react';
import UserProfileInfoComponent from '../UserProfileInfoComponent/UserProfileInfoComponent';

import './BlogPostComponent.css';

function BlogPostComponent({ data }) {
   return (
      <div className="col-12 col-sm-12 col-md-6 blog_post_contnet px-3 mb-5">
         <div className="blog_image_div mb-4">
            <img src={data.image} alt="" className="img-fluid" />
         </div>
         <h5>
            {data.name.slice(0, 30)}... <span>{data.createdAt.split('T')[0]}</span>
         </h5>
         <h3 className="mt-2">{data.name.slice(0, 80)}...</h3>
         <p>{data.description.slice(0, 300)}...</p>
         <div className="d-flex">
            <p className="mb-3 mt-2 link_para">Read More</p>
         </div>

         <UserProfileInfoComponent user={data.createdBy[0]} />
      </div>
   );
}

export default BlogPostComponent;
