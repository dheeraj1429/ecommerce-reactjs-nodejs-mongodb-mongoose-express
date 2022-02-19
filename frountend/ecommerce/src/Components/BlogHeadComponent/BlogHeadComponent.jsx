import React from 'react';

import './BlogHeadComponent.css';

function BlogHeadComponent() {
   return (
      <div className="blog_banner_section py-5 side_padding">
         <div className="container-fluid">
            <div className="row">
               <div className="col-12 col-md-6 col-lg-6">
                  <h1>13 December 2021: Possible Omicron Signal in Los Angeles</h1>
               </div>
               <div className="col-12 col-md-6 col-lg-6 d-flex user_icons_blog align-items-center justify-content-end">
                  <img src="./assests/icons&images/useGrop.svg" alt="" />
                  <div>
                     <p>bretskymd@gmail.com</p>
                     <p>November 5, 2021</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default BlogHeadComponent;
